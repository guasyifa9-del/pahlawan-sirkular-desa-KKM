import { motion } from 'motion/react';

export type CharacterType = 'student' | 'student_girl' | 'trash_bin' | 'veggie' | 'recycling' | 'hazardous' | 'river';

interface Props {
  type?: CharacterType;
  mascotName?: string;
  size?: 'sm' | 'md' | 'lg';
  isSpeaking?: boolean;
}

export const EducationalCharacter = ({
  type = 'student',
  mascotName = 'Siswa',
  size = 'md',
  isSpeaking = false,
}: Props) => {
  const containerSize = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
  }[size];

  const normalizedName = (mascotName || '').toLowerCase();
  const isGirlType = type === 'student_girl' || normalizedName.includes('siti') || normalizedName.includes('siswi') || normalizedName.includes('kreati');

  // Character SVG selector
  const renderCharacterSvg = () => {
    // 👧 1. SISWI SD (Siti - Student Girl)
    if (isGirlType) {
      return (
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
          {/* Shadow */}
          <ellipse cx="60" cy="112" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />

          {/* Pigtails / Hair Extensions */}
          <circle cx="26" cy="48" r="11" fill="#37474F" />
          <circle cx="94" cy="48" r="11" fill="#37474F" />
          <circle cx="30" cy="40" r="4" fill="#FF4081" />
          <circle cx="90" cy="40" r="4" fill="#FF4081" />

          {/* Body / Red-White SD Uniform */}
          <path d="M 36 72 L 84 72 L 88 110 L 32 110 Z" fill="#E53935" stroke="#9A0007" strokeWidth="3" />
          <path d="M 44 68 L 76 68 L 72 94 L 48 94 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
          <polygon points="60,70 57,80 60,88 63,80" fill="#D32F2F" />

          {/* Head / Skin */}
          <circle cx="60" cy="46" r="26" fill="#FFD1A4" stroke="#D89A6A" strokeWidth="3" />

          {/* Girl Hair & Yellow Headband */}
          <path d="M 34 42 C 34 20 86 20 86 42 C 72 28 48 28 34 42 Z" fill="#37474F" />
          <path d="M 35 38 C 35 22 85 22 85 38" fill="none" stroke="#FFEB3B" strokeWidth="3.5" />

          {/* Eyes */}
          <circle cx="50" cy="46" r="4.5" fill="#1E293B" />
          <circle cx="51.5" cy="44.5" r="1.5" fill="#FFF" />
          <circle cx="70" cy="46" r="4.5" fill="#1E293B" />
          <circle cx="71.5" cy="44.5" r="1.5" fill="#FFF" />

          {/* Animated Talking Mouth */}
          {isSpeaking ? (
            <motion.ellipse
              cx="60"
              cy="58"
              rx="8"
              ry="7"
              fill="#E91E63"
              stroke="#880E4F"
              strokeWidth="2"
              animate={{ ry: [3, 8, 3] }}
              transition={{ repeat: Infinity, duration: 0.2 }}
            />
          ) : (
            <path d="M 50 55 Q 60 65 70 55" fill="none" stroke="#880E4F" strokeWidth="3" strokeLinecap="round" />
          )}

          {/* Rosy Cheeks */}
          <circle cx="41" cy="53" r="4" fill="#FF8A80" opacity="0.7" />
          <circle cx="79" cy="53" r="4" fill="#FF8A80" opacity="0.7" />
        </svg>
      );
    }

    // 👦 2. SISWA SD (Budi - Student Boy / Default)
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
        {/* Shadow */}
        <ellipse cx="60" cy="112" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />

        {/* Body - Red/White SD Uniform Shirt */}
        <path d="M 36 72 L 84 72 L 88 110 L 32 110 Z" fill="#E53935" stroke="#9A0007" strokeWidth="3" />
        <path d="M 44 68 L 76 68 L 72 96 L 48 96 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
        {/* Red Tie */}
        <polygon points="60,70 56,80 60,90 64,80" fill="#D32F2F" />

        {/* Waving Hand */}
        <motion.path
          d="M 28 75 Q 12 55 20 40"
          fill="none"
          stroke="#FFD1A4"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
        <circle cx="20" cy="38" r="6" fill="#FFD1A4" />

        {/* Head */}
        <circle cx="60" cy="46" r="26" fill="#FFD1A4" stroke="#D89A6A" strokeWidth="3" />

        {/* Hair (Black Hair with Bangs) */}
        <path d="M 34 42 C 34 22 86 22 86 42 C 78 28 42 28 34 42 Z" fill="#263238" />

        {/* SD School Cap (Topi SD Merah Putih) */}
        <path d="M 34 38 C 34 18 86 18 86 38 Z" fill="#D32F2F" stroke="#9A0007" strokeWidth="2.5" />
        <path d="M 34 38 L 86 38 L 86 41 L 34 41 Z" fill="#FFFFFF" />
        <circle cx="60" cy="20" r="3.5" fill="#FFEB3B" />
        {/* Cap Visor */}
        <path d="M 38 38 Q 60 44 82 38 L 90 43 Q 60 50 26 43 Z" fill="#B71C1C" />

        {/* Eyes */}
        <circle cx="50" cy="46" r="4.5" fill="#1E293B" />
        <circle cx="51.5" cy="44.5" r="1.5" fill="#FFF" />
        <circle cx="70" cy="46" r="4.5" fill="#1E293B" />
        <circle cx="71.5" cy="44.5" r="1.5" fill="#FFF" />

        {/* Animated Talking Mouth */}
        {isSpeaking ? (
          <motion.ellipse
            cx="60"
            cy="58"
            rx="8"
            ry="7"
            fill="#DC2626"
            stroke="#9A3412"
            strokeWidth="2"
            animate={{ ry: [3, 8, 3] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
          />
        ) : (
          <path d="M 50 55 Q 60 65 70 55" fill="none" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />
        )}

        {/* Rosy Cheeks */}
        <circle cx="42" cy="53" r="3.5" fill="#F87171" opacity="0.6" />
        <circle cx="78" cy="53" r="3.5" fill="#F87171" opacity="0.6" />
      </svg>
    );
  };

  return (
    <motion.div
      initial={{ scale: 0.8, y: 15 }}
      animate={
        isSpeaking
          ? { scale: [1, 1.08, 1], y: [0, -8, 0] }
          : { scale: [1, 1.05, 1], y: [0, -5, 0] }
      }
      transition={{ repeat: Infinity, duration: isSpeaking ? 0.6 : 1.8, ease: 'easeInOut' }}
      className={`relative inline-block ${containerSize} shrink-0 select-none`}
    >
      {/* Sound Waves when Speaking */}
      {isSpeaking && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.8, 0], scale: [1, 1.4] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="absolute inset-0 rounded-full border-4 border-[#22C55E] pointer-events-none"
          />
          <div className="absolute -top-3 -right-2 bg-[#FFEB3B] text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black border border-[#CA8A04] shadow-md animate-bounce flex items-center gap-1">
            <span>🔊</span>
            <span>Bicara...</span>
          </div>
        </>
      )}

      {renderCharacterSvg()}
    </motion.div>
  );
};
