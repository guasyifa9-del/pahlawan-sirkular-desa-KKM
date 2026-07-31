/**
 * GameplayScreen.tsx
 *
 * Layar utama gameplay kuis interaktif.
 * Menampilkan soal, opsi jawaban, timer, dan kontrol operator.
 *
 * Sub-komponen:
 * - TimerBar: Progress bar timer + kontrol pause/reset
 * - EducationMessageBox: Pesan edukasi + karakter + TTS
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Question, Level, Team, MascotEmotion } from '../types';
import { OPTION_STYLES } from '../constants';
import { Mascot } from './Mascots';
import { QuestionIllustration } from './QuestionIllustration';
import { TimerBar } from './TimerBar';
import { EducationMessageBox } from './EducationMessageBox';
import { sound } from '../utils/audio';
import { speech } from '../utils/speech';
import { ChevronRight, ChevronLeft, Eye, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

interface GameplayScreenProps {
  level: Level;
  questions: Question[];
  currentQuestionIndex: number;
  teams: Team[];
  onUpdateScore: (teamId: string, delta: number) => void;
  onNextQuestion: () => void;
  onPrevQuestion: () => void;
  onFinishLevel: () => void;
  timerSeconds?: number;
}

export const GameplayScreen = ({
  level,
  questions,
  currentQuestionIndex,
  teams,
  onUpdateScore,
  onNextQuestion,
  onPrevQuestion,
  onFinishLevel,
  timerSeconds = 30,
}: GameplayScreenProps) => {
  const totalQuestions = questions.length;
  const safeIndex = Math.min(Math.max(0, currentQuestionIndex), Math.max(0, totalQuestions - 1));
  const currentQuestion = questions[safeIndex];

  const [timeLeft, setTimeLeft] = useState<number>(timerSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState<boolean>(false);
  const [mascotEmotion, setMascotEmotion] = useState<MascotEmotion>('thinking');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const isLastQuestion = currentQuestionIndex >= totalQuestions - 1;

  // Subscribe ke state speech synthesis untuk menampilkan indikator "sedang berbicara"
  useEffect(() => {
    const unsubscribe = speech.subscribe((speaking) => {
      setIsSpeaking(speaking);
    });
    return () => unsubscribe();
  }, []);

  // Reset timer & hentikan speech saat pindah soal
  useEffect(() => {
    try {
      speech.stop();
    } catch {
      // Fallback
    }
    setTimeLeft(timerSeconds);
    setIsTimerRunning(true);
    setIsAnswerRevealed(false);
    setMascotEmotion('thinking');
  }, [currentQuestionIndex, timerSeconds]);

  const handleSpeakEducationalMessage = useCallback(() => {
    if (isSpeaking) {
      try {
        speech.stop();
      } catch {
        // Fallback
      }
    } else if (currentQuestion?.education_message) {
      speech.speak(currentQuestion.education_message);
    }
  }, [isSpeaking, currentQuestion]);

  // Logik countdown timer — setiap detik mengurangi waktu,
  // memainkan efek suara tick di bawah 6 detik, dan
  // mengubah emosi maskot saat waktu kritis
  useEffect(() => {
    let timer: number;
    if (isTimerRunning && timeLeft > 0 && !isAnswerRevealed) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            sound.playWrong();
            setMascotEmotion('nervous');
            return 0;
          }
          if (prev <= 6) {
            sound.playTick();
            setMascotEmotion('nervous');
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft, isAnswerRevealed]);

  const toggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setTimeLeft(timerSeconds);
    setIsTimerRunning(true);
    setMascotEmotion('thinking');
  };

  const handleRevealAnswer = useCallback(() => {
    setIsAnswerRevealed(true);
    setIsTimerRunning(false);

    try {
      sound.playCorrect();
    } catch {
      // Audio fallback
    }

    setMascotEmotion('happy');

    // Otomatis bacakan pesan edukasi dengan Text-to-Speech
    try {
      if (currentQuestion?.education_message) {
        speech.speak(currentQuestion.education_message);
      }
    } catch {
      // Speech fallback
    }

    // Trigger confetti celebrasi
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#4CAF50', '#FF9800', '#2196F3', '#FFEB3B', '#E91E63'],
      });
    } catch {
      // Fallback
    }
  }, [currentQuestion]);

  /** Navigasi ke soal berikutnya atau selesai */
  const handleAdvance = () => {
    if (!isLastQuestion) {
      onNextQuestion();
    } else {
      onFinishLevel();
    }
  };

  /**
   * Keyboard hotkeys untuk operator kelas:
   * - Space: Pause/play timer
   * - A / Enter: Reveal jawaban atau lanjut soal
   * - ArrowRight / N: Soal berikutnya
   * - ArrowLeft / P: Soal sebelumnya
   * - Digit 1-5: Tambah 10 poin ke tim (Shift = kurangi 5 poin)
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Abaikan saat user sedang mengetik di input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.code === 'Space') {
        e.preventDefault();
        toggleTimer();
      } else if (e.code === 'KeyA' || e.code === 'Enter') {
        e.preventDefault();
        if (!isAnswerRevealed) {
          handleRevealAnswer();
        } else {
          handleAdvance();
        }
      } else if (e.code === 'ArrowRight' || e.code === 'KeyN') {
        e.preventDefault();
        handleAdvance();
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyP') {
        e.preventDefault();
        if (currentQuestionIndex > 0) {
          onPrevQuestion();
        }
      } else if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'].includes(e.code)) {
        const teamIndex = parseInt(e.code.replace('Digit', '')) - 1;
        if (teams[teamIndex]) {
          const delta = e.shiftKey ? -5 : 10;
          onUpdateScore(teams[teamIndex].id, delta);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentQuestionIndex,
    totalQuestions,
    isAnswerRevealed,
    teams,
    handleRevealAnswer,
    onNextQuestion,
    onPrevQuestion,
    onFinishLevel,
    onUpdateScore,
  ]);

  // Tampilan fallback jika semua soal telah selesai
  if (!currentQuestion) {
    return (
      <div className="w-full flex-1 bg-[#F0F9FF] text-slate-900 p-6 flex flex-col items-center justify-center font-sans">
        <div className="max-w-md bg-white border-[4px] border-[#4CAF50] rounded-3xl p-6 shadow-[6px_6px_0px_#2E7D32] text-center flex flex-col items-center gap-4">
          <span className="text-5xl">🎉</span>
          <h2 className="text-xl font-black text-[#1B5E20]">Seluruh Soal Misi Telah Selesai!</h2>
          <p className="text-xs font-bold text-slate-600">
            Semua pertanyaan dalam misi ini telah berhasil dijawab. Klik tombol di bawah untuk melihat hasil klasemen juara!
          </p>
          <button
            onClick={onFinishLevel}
            className="w-full py-3 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-sm rounded-xl shadow-[3px_3px_0px_#2E7D32] border-2 border-[#2E7D32] cursor-pointer uppercase"
          >
            Lihat Hasil Juara 🏆
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex-1 bg-[#F0F9FF] text-slate-900 p-2.5 sm:p-4 flex flex-col justify-between font-sans overflow-x-hidden">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2 bg-white border-[3px] border-[#4CAF50] rounded-2xl px-3.5 py-2 shadow-[3px_3px_0px_#2E7D32]">
        {/* Mission Badge */}
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-1 rounded-xl text-xs font-black text-white shadow-sm border border-black/10"
            style={{ backgroundColor: level.theme_color }}
          >
            {level.theme_name}
          </span>
          <span className="text-xs font-extrabold text-slate-700 bg-[#FFEB3B] px-2.5 py-1 rounded-xl border border-[#FBC02D] shadow-[2px_2px_0px_#F9A825]">
            SOAL <span className="text-sm text-slate-950 font-black">{currentQuestionIndex + 1}</span> / {totalQuestions}
          </span>
        </div>

        {/* Visual Timer Bar & Numerical Display */}
        <TimerBar
          timeLeft={timeLeft}
          timerSeconds={timerSeconds}
          isTimerRunning={isTimerRunning}
          onToggleTimer={toggleTimer}
          onResetTimer={resetTimer}
        />

        {/* Mascot Header Avatar with Inline Status Badge */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs font-black text-[#1B5E20] bg-[#DCFCE7] px-2.5 py-1 rounded-xl border border-[#86EFAC] shadow-xs">
            {timeLeft === 0 ? '⏰ Waktu Habis!' : isAnswerRevealed ? '🎉 Jawaban Tepat!' : '💬 Ayo Diskusikan!'}
          </span>
          <Mascot
            name={level.mascot}
            emotion={mascotEmotion}
            size="sm"
            showBadge={false}
          />
        </div>
      </div>

      {/* Main Question Box */}
      <div className="max-w-5xl mx-auto w-full my-2 sm:my-3 flex-1 flex flex-col justify-center">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white text-slate-900 border-[4px] sm:border-[5px] border-[#4CAF50] rounded-3xl p-4 sm:p-6 shadow-[6px_6px_0px_#2E7D32] relative flex flex-col items-center"
        >
          {/* Question Category & Illustration */}
          <QuestionIllustration questionId={currentQuestion.id} levelId={level.level_id} />

          {/* Question Text */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1B5E20] leading-tight text-center tracking-tight my-2">
            {currentQuestion.question}
          </h2>

          {/* Options Grid (A, B, C) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full mt-3">
            {currentQuestion.options.map((option, idx) => {
              const isCorrect = idx === currentQuestion.correct_index;
              const style = OPTION_STYLES[idx % OPTION_STYLES.length];

              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-3.5 sm:p-4 rounded-2xl border-[3px] text-left transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                    isAnswerRevealed && isCorrect
                      ? 'bg-[#FFEB3B] border-[3.5px] border-[#FBC02D] text-slate-900 shadow-[5px_5px_0px_#F9A825] scale-102 ring-4 ring-[#FFEB3B]'
                      : isAnswerRevealed && !isCorrect
                      ? 'bg-slate-100 border-slate-300 text-slate-400 opacity-60'
                      : `${style.bg} ${style.border} ${style.text} ${style.shadow}`
                  }`}
                >
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black text-lg shadow-md shrink-0 border-2 border-black/10 ${
                      isAnswerRevealed && isCorrect ? 'bg-[#FBC02D] text-slate-950' : style.badge
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm sm:text-base md:text-lg font-extrabold leading-snug">
                    {option.replace(/^[A-C]\.\s*/, '')}
                  </span>

                  {isAnswerRevealed && isCorrect && (
                    <div className="absolute -top-3 -right-3 bg-[#4CAF50] text-white p-1 rounded-full shadow-lg border-2 border-white animate-bounce">
                      <CheckCircle2 className="w-5 h-5 fill-white text-[#4CAF50]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Education Message Box (Shown on Reveal) */}
          <AnimatePresence>
            {isAnswerRevealed && (
              <EducationMessageBox
                questionId={currentQuestion.id}
                educationMessage={currentQuestion.education_message}
                mascotName={level.mascot}
                isSpeaking={isSpeaking}
                onToggleSpeech={handleSpeakEducationalMessage}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Operator Footer Control Bar */}
      <div className="max-w-7xl mx-auto w-full bg-white border-[3px] border-[#4CAF50] rounded-2xl p-2.5 flex flex-wrap items-center justify-between gap-2 shadow-[3px_3px_0px_#2E7D32]">
        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-3 py-2 rounded-xl font-black text-xs flex items-center gap-1 border-2 cursor-pointer ${
              currentQuestionIndex === 0
                ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-400 shadow-[2px_2px_0px_#94A3B8]'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> Soal Lalu (P)
          </button>

          {!isAnswerRevealed ? (
            <button
              onClick={handleRevealAnswer}
              className="px-6 py-2.5 bg-[#FF9800] hover:bg-[#F57C00] text-white font-black text-xs sm:text-sm rounded-xl shadow-[3px_3px_0px_#E65100] border-2 border-[#E65100] flex items-center gap-2 cursor-pointer uppercase tracking-wide"
            >
              <Eye className="w-4 h-4" />
              Tampilkan Jawaban (Tekan A / Enter)
            </button>
          ) : (
            <button
              onClick={handleAdvance}
              className="px-6 py-2.5 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-[3px_3px_0px_#2E7D32] border-2 border-[#2E7D32] flex items-center gap-2 cursor-pointer uppercase tracking-wide"
            >
              {!isLastQuestion ? (
                <>
                  Soal Selanjutnya (N) <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Lihat Hasil Juara! 🏆 <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {/* Operator Quick Hotkey Help Chip */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-black text-slate-700 bg-[#F0F9FF] px-3 py-1.5 rounded-xl border border-[#2196F3]">
          <AlertCircle className="w-4 h-4 text-[#2196F3]" />
          <span>Operator Room: [Space] Pause • [A] Jawab • [1-5] Skor Tim</span>
        </div>
      </div>
    </div>
  );
};
