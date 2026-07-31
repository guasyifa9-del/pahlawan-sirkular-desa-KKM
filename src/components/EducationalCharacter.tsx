import { motion } from 'motion/react';

export type CharacterType = 'student' | 'trash_bin' | 'veggie' | 'recycling' | 'hazardous' | 'river';

interface Props {
  type?: CharacterType;
  mascotName?: string;
  size?: 'sm' | 'md' | 'lg';
  isSpeaking?: boolean;
}

export const EducationalCharacter = ({
  type = 'trash_bin',
  mascotName,
  size = 'md',
  isSpeaking = false,
}: Props) => {
  const containerSize = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-32 h-32 sm:w-36 sm:h-36',
  }[size];

  // Character SVG selector based on type or mascotName
  const renderCharacterSvg = () => {
    // Determine effective type based on mascotName if not explicitly set
    let effectiveType = type;
    if (mascotName === 'Gizi') effectiveType = 'veggie';
    if (mascotName === 'Kreati') effectiveType = 'recycling';

    switch (effectiveType) {
      // 1. SISWA / PAHLAWAN SD (Orang / Student)
      case 'student':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />

            {/* Body / SD Shirt & Green Eco Vest */}
            <path d="M 35 70 L 85 70 L 90 108 L 30 108 Z" fill="#4CAF50" stroke="#1B5E20" strokeWidth="3" />
            {/* White Collar & Red Tie */}
            <path d="M 50 70 L 60 85 L 70 70 Z" fill="#FFF" />
            <path d="M 58 70 L 62 70 L 63 90 L 60 93 L 57 90 Z" fill="#EF4444" />

            {/* Waving Hand */}
            <motion.path
              d="M 28 75 Q 12 55 20 40"
              fill="none"
              stroke="#FDBA74"
              strokeWidth="6"
              strokeLinecap="round"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
            <circle cx="20" cy="38" r="6" fill="#FDBA74" />

            {/* Head */}
            <circle cx="60" cy="45" r="26" fill="#FDBA74" stroke="#EA580C" strokeWidth="3" />

            {/* Hair & Red SD Cap */}
            <path d="M 34 40 Q 60 10 86 40 L 90 38 Q 60 5 30 38 Z" fill="#DC2626" />
            <path d="M 30 38 Q 60 30 90 38" fill="none" stroke="#991B1B" strokeWidth="4" />
            <rect x="52" y="22" width="16" height="8" rx="2" fill="#FFF" />
            <text x="60" y="28" textAnchor="middle" fontSize="6" fontWeight="black" fill="#DC2626">SD</text>

            {/* Eyes */}
            <circle cx="50" cy="45" r="4.5" fill="#1E293B" />
            <circle cx="51.5" cy="43.5" r="1.5" fill="#FFF" />
            <circle cx="70" cy="45" r="4.5" fill="#1E293B" />
            <circle cx="71.5" cy="43.5" r="1.5" fill="#FFF" />

            {/* Animated Talking Mouth */}
            {isSpeaking ? (
              <motion.ellipse
                cx="60"
                cy="57"
                rx="8"
                ry="7"
                fill="#DC2626"
                stroke="#9A3412"
                strokeWidth="2"
                animate={{ ry: [3, 8, 3] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
              />
            ) : (
              <path d="M 50 54 Q 60 64 70 54" fill="none" stroke="#9A3412" strokeWidth="3" strokeLinecap="round" />
            )}

            {/* Rosy Cheeks */}
            <circle cx="42" cy="52" r="3.5" fill="#F87171" opacity="0.6" />
            <circle cx="78" cy="52" r="3.5" fill="#F87171" opacity="0.6" />
          </svg>
        );

      // 2. SAYURAN & BUAH CERIA (Broccoli / Veggie / Fruit)
      case 'veggie':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
            <ellipse cx="60" cy="112" rx="32" ry="5" fill="rgba(0,0,0,0.15)" />

            {/* Broccoli Crown */}
            <circle cx="42" cy="38" r="20" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
            <circle cx="78" cy="38" r="20" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
            <circle cx="60" cy="26" r="22" fill="#4ADE80" stroke="#15803D" strokeWidth="3" />

            {/* Stem / Body */}
            <path d="M 44 50 L 76 50 L 70 102 Q 60 106 50 102 Z" fill="#86EFAC" stroke="#15803D" strokeWidth="3" />

            {/* Big Sparkly Eyes */}
            <circle cx="50" cy="65" r="7" fill="#1E293B" />
            <circle cx="52" cy="63" r="2.5" fill="#FFF" />
            <circle cx="70" cy="65" r="7" fill="#1E293B" />
            <circle cx="72" cy="63" r="2.5" fill="#FFF" />

            {/* Cheerful Mouth / Talking Mouth */}
            {isSpeaking ? (
              <motion.ellipse
                cx="60"
                cy="78"
                rx="9"
                ry="8"
                fill="#EF4444"
                stroke="#15803D"
                strokeWidth="2"
                animate={{ ry: [3, 9, 3] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
              />
            ) : (
              <path d="M 52 75 Q 60 86 68 75 Z" fill="#EF4444" stroke="#15803D" strokeWidth="2" />
            )}

            {/* Hands holding a fresh apple */}
            <path d="M 38 72 Q 22 70 28 82" fill="none" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />
            <path d="M 82 72 Q 98 70 92 82" fill="none" stroke="#15803D" strokeWidth="4" strokeLinecap="round" />

            {/* Tiny Apple on the side */}
            <circle cx="95" cy="85" r="10" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
            <path d="M 95 75 Q 98 70 100 73" stroke="#78350F" strokeWidth="2" fill="none" />
          </svg>
        );

      // 3. RECYCLING / KREATI (Craft Drop)
      case 'recycling':
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
            <ellipse cx="60" cy="112" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />

            {/* Craft Tote Bag Character */}
            <rect x="30" y="45" width="60" height="60" rx="12" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3.5" />
            {/* Bag Handles */}
            <path d="M 45 45 Q 45 20 60 20 Q 75 20 75 45" fill="none" stroke="#1D4ED8" strokeWidth="4" />

            {/* Eyes */}
            <circle cx="48" cy="68" r="6" fill="#FFF" stroke="#1D4ED8" strokeWidth="2" />
            <circle cx="50" cy="67" r="3" fill="#1D4ED8" />
            <circle cx="72" cy="68" r="6" fill="#FFF" stroke="#1D4ED8" strokeWidth="2" />
            <circle cx="74" cy="67" r="3" fill="#1D4ED8" />

            {/* Mouth */}
            {isSpeaking ? (
              <motion.ellipse
                cx="60"
                cy="83"
                rx="8"
                ry="7"
                fill="#F59E0B"
                stroke="#1D4ED8"
                strokeWidth="2"
                animate={{ ry: [3, 8, 3] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
              />
            ) : (
              <path d="M 52 80 Q 60 90 68 80 Z" fill="#F59E0B" stroke="#1D4ED8" strokeWidth="2" />
            )}

            {/* Scissors & Craft Patch */}
            <rect x="38" y="85" width="18" height="12" rx="3" fill="#FFEB3B" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        );

      // 4. BAK SAMPAH PINAR (Kompi - Smart Bin)
      case 'trash_bin':
      default:
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="34" ry="5" fill="rgba(0,0,0,0.15)" />

            {/* Green Organik / Smart Bin */}
            <path
              d="M 32 35 Q 32 25 42 25 L 78 25 Q 88 25 88 35 L 82 98 Q 82 105 72 105 L 48 105 Q 38 105 38 98 Z"
              fill="#4CAF50"
              stroke="#2E7D32"
              strokeWidth="4"
            />

            {/* Open Lid */}
            <path
              d="M 22 20 C 22 12, 98 12, 98 20 L 94 28 C 94 32, 26 32, 26 28 Z"
              fill="#66BB6A"
              stroke="#2E7D32"
              strokeWidth="3.5"
            />
            <rect x="50" y="8" width="20" height="8" rx="4" fill="#388E3C" stroke="#1B5E20" strokeWidth="2" />

            {/* 3R Logo Badge */}
            <circle cx="60" cy="78" r="12" fill="#FFF" stroke="#2E7D32" strokeWidth="2" />
            <text x="60" y="82" textAnchor="middle" fontSize="10" fontWeight="black" fill="#1B5E20">♻️</text>

            {/* Eyes */}
            <circle cx="48" cy="50" r="8" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
            <circle cx="50" cy="49" r="4" fill="#1B5E20" />
            <circle cx="52" cy="47" r="1.5" fill="#FFF" />

            <circle cx="72" cy="50" r="8" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
            <circle cx="70" cy="49" r="4" fill="#1B5E20" />
            <circle cx="72" cy="47" r="1.5" fill="#FFF" />

            {/* Smile / Talking Mouth */}
            {isSpeaking ? (
              <motion.ellipse
                cx="60"
                cy="66"
                rx="9"
                ry="7"
                fill="#EF4444"
                stroke="#1B5E20"
                strokeWidth="2"
                animate={{ ry: [3, 8, 3] }}
                transition={{ repeat: Infinity, duration: 0.2 }}
              />
            ) : (
              <path d="M 48 64 Q 60 76 72 64 Z" fill="#EF4444" stroke="#1B5E20" strokeWidth="2" />
            )}

            {/* Cute waving arms */}
            <motion.path
              d="M 28 60 Q 14 50 18 38"
              fill="none"
              stroke="#2E7D32"
              strokeWidth="4"
              strokeLinecap="round"
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
            <path d="M 92 60 Q 106 65 100 78" fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );
    }
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
