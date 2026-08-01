import { useState, useEffect } from 'react';
import questionsDataJson from './data/questions.json';
import { QuizData, Team, GamePhase, Level, Question, GameSettings } from './types';
import { MARATHON_LEVEL_ID } from './constants';
import { getQuestionsForLevel, createGameStatePayload } from './utils/helpers';
import {
  loadTeams,
  saveTeams,
  loadSettings,
  saveSettings,
  loadSavedGameState,
  saveGameState,
  clearSavedGameState,
} from './utils/storage';
import { fetchQuestionsFromCSV } from './utils/googleSheets';
import { sound } from './utils/audio';
import { Navbar } from './components/Navbar';
import { LiveScoreboard } from './components/LiveScoreboard';
import { SetupScreen } from './components/SetupScreen';
import { GameplayScreen } from './components/GameplayScreen';
import { VictoryScreen } from './components/VictoryScreen';
import { MaterialScreen } from './components/MaterialScreen';
import { OperatorGuideModal } from './components/OperatorGuideModal';
import { SettingsModal } from './components/SettingsModal';

const quizData = questionsDataJson as QuizData;

export default function App() {
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [teams, setTeams] = useState<Team[]>(loadTeams);
  const [settings, setSettings] = useState<GameSettings>(loadSettings);

  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [savedStateExists, setSavedStateExists] = useState<boolean>(false);

  const [customQuizData, setCustomQuizData] = useState<QuizData | null>(null);
  const [isFetchingQuestions, setIsFetchingQuestions] = useState<boolean>(false);

  // Cek apakah ada sesi permainan tersimpan di localStorage saat pertama kali mount
  useEffect(() => {
    const saved = loadSavedGameState();
    if (saved && saved.teams && saved.teams.length >= 3) {
      setSavedStateExists(true);
    }
  }, []);

  // Ambil soal dinamis dari Google Sheets jika URL diset
  useEffect(() => {
    if (settings.googleSheetsQuestionsUrl) {
      setIsFetchingQuestions(true);
      fetchQuestionsFromCSV(settings.googleSheetsQuestionsUrl, quizData)
        .then(data => {
          setCustomQuizData(data);
        })
        .catch(err => {
          console.error("Gagal memuat soal dari Google Sheets, menggunakan soal default.", err);
          setCustomQuizData(null);
        })
        .finally(() => {
          setIsFetchingQuestions(false);
        });
    } else {
      setCustomQuizData(null);
    }
  }, [settings.googleSheetsQuestionsUrl]);

  const activeQuizData = customQuizData || quizData;

  // Metadata level yang sedang aktif
  const currentLevel: Level = activeQuizData.levels.find(
    (l) => l.level_id === selectedLevelId
  ) || {
    level_id: selectedLevelId,
    theme_name: selectedLevelId === MARATHON_LEVEL_ID ? 'Misi Marathon 30 Soal' : 'Misi Kuis SD',
    mascot: 'Kompi',
    theme_color: '#4CAF50',
    questions: [],
  };

  /** Mulai permainan baru dengan tim dan level yang dipilih */
  const handleStartGame = (selectedTeams: Team[], levelId: number) => {
    sound.startBGM();

    // Reset skor seluruh tim ke 0
    const resetTeams = selectedTeams.map((t) => ({ ...t, score: 0 }));
    setTeams(resetTeams);
    saveTeams(resetTeams);

    setSelectedLevelId(levelId);

    const questionsToPlay = getQuestionsForLevel(activeQuizData.levels, levelId);
    setActiveQuestions(questionsToPlay);
    setCurrentQuestionIndex(0);
    setPhase('gameplay');

    saveGameState(createGameStatePayload(levelId, 0, resetTeams));
  };

  /** Lanjutkan permainan yang tersimpan di localStorage */
  const handleResumeSavedGame = () => {
    sound.startBGM();
    const saved = loadSavedGameState();
    if (!saved) return;

    setTeams(saved.teams);
    setSelectedLevelId(saved.levelId);

    const questionsToPlay = getQuestionsForLevel(activeQuizData.levels, saved.levelId);
    const maxIndex = Math.max(0, questionsToPlay.length - 1);
    const safeIndex = Math.min(Math.max(0, saved.questionIndex || 0), maxIndex);

    setActiveQuestions(questionsToPlay);
    setCurrentQuestionIndex(safeIndex);
    setPhase('gameplay');
  };

  /** Perbarui skor tim dan simpan state permainan */
  const handleUpdateScore = (teamId: string, delta: number) => {
    setTeams((prevTeams) => {
      const updated = prevTeams.map((t) => (t.id === teamId ? { ...t, score: Math.max(0, t.score + delta) } : t));
      saveTeams(updated);

      if (phase === 'gameplay') {
        saveGameState(createGameStatePayload(selectedLevelId, currentQuestionIndex, updated));
      }
      return updated;
    });
  };

  /** Navigasi ke soal berikutnya atau selesaikan level */
  const handleNextQuestion = () => {
    const totalQ = activeQuestions.length;
    if (totalQ > 0 && currentQuestionIndex < totalQ - 1) {
      const nextIdx = Math.min(currentQuestionIndex + 1, totalQ - 1);
      setCurrentQuestionIndex(nextIdx);
      saveGameState(createGameStatePayload(selectedLevelId, nextIdx, teams));
    } else {
      handleFinishLevel();
    }
  };

  /** Navigasi ke soal sebelumnya */
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      const prevIdx = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIdx);
      saveGameState(createGameStatePayload(selectedLevelId, prevIdx, teams));
    }
  };

  /** Selesaikan level dan tampilkan layar kemenangan */
  const handleFinishLevel = () => {
    setPhase('victory');
    clearSavedGameState();
    setSavedStateExists(false);
  };

  /** Reset game dan kembali ke layar setup */
  const handleResetGame = () => {
    if (confirm('Ulangi permainan dan kembali ke menu setup kelompok?')) {
      clearSavedGameState();
      setSavedStateExists(false);
      setPhase('setup');
    }
  };

  /** Lanjut ke misi/level berikutnya setelah victory */
  const handleNextMission = () => {
    const nextLevelId = selectedLevelId + 1;
    if (nextLevelId <= activeQuizData.levels.length) {
      handleStartGame(teams, nextLevelId);
    } else {
      setPhase('setup');
    }
  };

  if (isFetchingQuestions) {
    return (
      <div className="min-h-screen bg-[#F0F9FF] flex flex-col items-center justify-center font-sans gap-4">
        <div className="w-12 h-12 border-4 border-[#4CAF50] border-t-[#FFEB3B] rounded-full animate-spin"></div>
        <h2 className="text-lg md:text-xl font-black text-[#1B5E20] text-center px-4">Mengambil Soal Dinamis dari Google Sheets...</h2>
      </div>
    );
  }

  return (
    <div translate="no" className="notranslate min-h-screen bg-[#F0F9FF] text-slate-900 flex flex-col font-sans select-none overflow-x-hidden border-[8px] sm:border-[12px] border-[#4CAF50]">
      {/* Top Header */}
      <Navbar
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onResetGame={handleResetGame}
        levelTitle={phase === 'gameplay' ? currentLevel.theme_name : undefined}
        themeColor={currentLevel.theme_color}
      />

      {/* Persistent Scoreboard during Gameplay */}
      {phase === 'gameplay' && (
        <LiveScoreboard teams={teams} onUpdateScore={handleUpdateScore} isOperatorMode={true} />
      )}

      {/* Main View Router */}
      <main className="flex-1 flex flex-col">
        {phase === 'setup' && (
          <SetupScreen
            levels={activeQuizData.levels}
            onStartGame={handleStartGame}
            savedStateExists={savedStateExists}
            onResumeSavedGame={handleResumeSavedGame}
            onOpenMaterial={() => setPhase('material')}
          />
        )}

        {phase === 'material' && (
          <MaterialScreen onBack={() => setPhase('setup')} />
        )}

        {phase === 'gameplay' && (
          <GameplayScreen
            level={currentLevel}
            questions={activeQuestions}
            currentQuestionIndex={currentQuestionIndex}
            teams={teams}
            onUpdateScore={handleUpdateScore}
            onNextQuestion={handleNextQuestion}
            onPrevQuestion={handlePrevQuestion}
            onFinishLevel={handleFinishLevel}
            timerSeconds={settings.timerDuration}
          />
        )}

        {phase === 'victory' && (
          <VictoryScreen
            teams={teams}
            level={currentLevel}
            onNextMission={selectedLevelId < activeQuizData.levels.length ? handleNextMission : undefined}
            onPlayAgain={() => setPhase('setup')}
            webhookUrl={settings.googleSheetsWebhookUrl}
          />
        )}
      </main>

      {/* Operator Guide & Settings Modals */}
      <OperatorGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSaveSettings={(newSettings) => {
          setSettings(newSettings);
          saveSettings(newSettings);
        }}
      />
    </div>
  );
}
