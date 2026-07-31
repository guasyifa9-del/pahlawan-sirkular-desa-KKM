/**
 * EducationMessageBox.tsx
 *
 * Sub-komponen pesan edukasi yang tampil setelah jawaban di-reveal.
 * Menampilkan karakter ilustrasi, pesan edukasi, dan tombol TTS (Text-to-Speech).
 * Diextract dari GameplayScreen untuk memisahkan logik presentasi
 * pesan edukasi dari logik gameplay utama.
 */

import { motion } from 'motion/react';
import { EducationalCharacter } from './EducationalCharacter';
import { getCharacterType, getCharacterName } from '../utils/helpers';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';

interface EducationMessageBoxProps {
  questionId: number;
  educationMessage: string;
  mascotName: string;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
}

export const EducationMessageBox = ({
  questionId,
  educationMessage,
  mascotName,
  isSpeaking,
  onToggleSpeech,
}: EducationMessageBoxProps) => {
  const characterType = getCharacterType(questionId);
  const characterName = getCharacterName(questionId, mascotName);

  return (
    <motion.div
      key={`education-box-${questionId}`}
      initial={{ opacity: 0, scale: 0.95, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="mt-4 w-full p-3.5 sm:p-4 bg-[#FEFCE8] border-[4px] border-[#FBC02D] rounded-2xl text-slate-900 flex flex-col sm:flex-row items-center gap-3 sm:gap-5 shadow-[4px_4px_0px_#D97706] relative overflow-visible"
    >
      {/* Character Illustration */}
      <div className="flex flex-col items-center shrink-0">
        <EducationalCharacter
          type={characterType}
          mascotName={mascotName}
          size="sm"
          isSpeaking={isSpeaking}
        />
        <span className="mt-0.5 px-2.5 py-0.5 bg-[#FBC02D] text-slate-950 font-black text-[10px] sm:text-xs rounded-full border border-[#B45309] shadow-xs uppercase">
          {characterName}
        </span>
      </div>

      {/* Speech Bubble / Education Text */}
      <div className="flex-1 bg-white border-[2.5px] border-[#F59E0B] rounded-xl p-3 shadow-xs relative w-full">
        {/* Arrow on desktop */}
        <div className="hidden sm:block absolute top-1/2 -left-2.5 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-[#F59E0B]" />
        
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="p-1 bg-[#4CAF50] text-white rounded-md shadow-xs border border-[#2E7D32]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-black text-xs sm:text-sm text-[#1B5E20] uppercase tracking-wide">
              Pesan Edukasi Penting:
            </h4>
          </div>

          {/* Speech Voice Narration Replay / Stop Button */}
          <button
            onClick={onToggleSpeech}
            className={`px-2.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 border transition-all cursor-pointer shadow-xs ${
              isSpeaking
                ? 'bg-[#EF4444] text-white border-[#B91C1C] animate-pulse'
                : 'bg-[#FFEB3B] text-slate-900 border-[#CA8A04] hover:bg-[#FACC15]'
            }`}
            title="Dengarkan Karakter Bicara Pesan Edukasi (TTS Suara)"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Hentikan Suara</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#1B5E20]" />
                <span>🔊 Suara Karakter</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-relaxed">
          "{educationMessage}"
        </p>
      </div>
    </motion.div>
  );
};
