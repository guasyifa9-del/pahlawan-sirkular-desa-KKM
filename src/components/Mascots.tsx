import { motion } from 'motion/react';
import { MascotEmotion } from '../types';

interface MascotProps {
  name: string;
  emotion?: MascotEmotion;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  speechBubble?: string;
  showBadge?: boolean;
}

export const Mascot = ({
  name = 'Kompi',
  emotion = 'idle',
  size = 'md',
  speechBubble,
  showBadge = true,
}: MascotProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-40 h-40',
    xl: 'w-56 h-56',
  }[size];

  // Emotion-based animation variants
  const getVariants = () => {
    switch (emotion) {
      case 'nervous':
        return {
          animate: {
            x: [-2, 2, -2, 2, 0],
            rotate: [-1, 1, -1, 1, 0],
            transition: { repeat: Infinity, duration: 0.2 },
          },
        };
      case 'happy':
      case 'celebrate':
        return {
          animate: {
            y: [0, -15, 0],
            scale: [1, 1.08, 1],
            transition: { repeat: Infinity, duration: 0.6, ease: 'easeOut' },
          },
        };
      case 'sad':
        return {
          animate: {
            y: [0, 4, 0],
            rotate: [0, -3, 0],
            transition: { repeat: Infinity, duration: 1.5 },
          },
        };
      case 'thinking':
        return {
          animate: {
            rotate: [-4, 4, -4],
            transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
          },
        };
      case 'idle':
      default:
        return {
          animate: {
            y: [0, -6, 0],
            transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
          },
        };
    }
  };

  const normalizedName = (name || '').toLowerCase();
  const isGirl = normalizedName.includes('kreati') || normalizedName.includes('siti') || normalizedName.includes('putri') || normalizedName.includes('siswi');
  const isBoy = normalizedName.includes('kompi') || normalizedName.includes('budi') || normalizedName.includes('siswa');

  return (
    <div className="relative inline-flex flex-col items-center select-none">
      {/* Speech Bubble */}
      {speechBubble && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute -top-14 z-20 max-w-xs px-3 py-1.5 bg-amber-100 border-2 border-amber-400 text-amber-950 text-xs font-bold rounded-2xl shadow-md text-center whitespace-normal"
        >
          {speechBubble}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-400" />
        </motion.div>
      )}

      {/* Mascot Container */}
      <motion.div className={`relative ${sizeClasses}`} {...getVariants()}>
        {/* SISWA / KOMPI: Cute SD Boy Student Character */}
        {isBoy && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="30" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Body - Red/White SD Uniform Shirt */}
            <path d="M 38 80 L 82 80 L 88 110 L 32 110 Z" fill="#E53935" stroke="#9A0007" strokeWidth="3" />
            <path d="M 45 75 L 75 75 L 70 100 L 50 100 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Red Tie */}
            <polygon points="60,78 56,88 60,98 64,88" fill="#D32F2F" />

            {/* Head / Skin */}
            <circle cx="60" cy="52" r="30" fill="#FFD1A4" stroke="#D89A6A" strokeWidth="3" />

            {/* Hair (Black/Dark Brown Hair with Bangs) */}
            <path d="M 32 45 C 32 25 88 25 88 45 C 80 32 40 32 32 45 Z" fill="#263238" />
            
            {/* SD School Cap (Topi SD Merah Putih) */}
            <path d="M 32 40 C 32 20 88 20 88 40 Z" fill="#D32F2F" stroke="#9A0007" strokeWidth="2.5" />
            <path d="M 32 40 L 88 40 L 88 43 L 32 43 Z" fill="#FFFFFF" />
            <circle cx="60" cy="22" r="3.5" fill="#FFEB3B" />
            {/* Cap Visor */}
            <path d="M 36 40 Q 60 46 84 40 L 92 45 Q 60 52 28 45 Z" fill="#B71C1C" />

            {/* Eyes */}
            <g>
              {emotion === 'sad' ? (
                <>
                  <path d="M 46 54 Q 52 60 46 64" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 74 54 Q 68 60 74 64" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
                </>
              ) : emotion === 'nervous' ? (
                <>
                  <circle cx="48" cy="56" r="5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="48" cy="56" r="2" fill="#000" />
                  <circle cx="72" cy="56" r="5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="72" cy="56" r="2" fill="#000" />
                </>
              ) : (
                <>
                  <circle cx="48" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="49" cy="55" r="4" fill="#263238" />
                  <circle cx="51" cy="53" r="1.5" fill="#FFF" />

                  <circle cx="72" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="71" cy="55" r="4" fill="#263238" />
                  <circle cx="73" cy="53" r="1.5" fill="#FFF" />
                </>
              )}
            </g>

            {/* Mouth */}
            {emotion === 'happy' || emotion === 'celebrate' ? (
              <path d="M 50 64 Q 60 76 70 64 Z" fill="#D32F2F" stroke="#9A0007" strokeWidth="1.5" />
            ) : emotion === 'sad' ? (
              <path d="M 50 68 Q 60 60 70 68" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <path d="M 50 65 Q 60 73 70 65" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
            )}

            {/* Blushing Cheeks */}
            <circle cx="41" cy="62" r="4" fill="#FF8A80" opacity="0.6" />
            <circle cx="79" cy="62" r="4" fill="#FF8A80" opacity="0.6" />
          </svg>
        )}

        {/* SISWI / KREATI: Cute SD Girl Student Character */}
        {isGirl && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="30" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Pigtails / Hair Extensions */}
            <circle cx="26" cy="50" r="12" fill="#37474F" />
            <circle cx="94" cy="50" r="12" fill="#37474F" />
            {/* Hair Ribbons */}
            <circle cx="31" cy="42" r="4" fill="#FF4081" />
            <circle cx="89" cy="42" r="4" fill="#FF4081" />

            {/* Body - Red SD Skirt & White Shirt */}
            <path d="M 40 80 L 80 80 L 86 110 L 34 110 Z" fill="#E53935" stroke="#9A0007" strokeWidth="3" />
            <path d="M 45 74 L 75 74 L 70 96 L 50 96 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <polygon points="60,76 57,85 60,92 63,85" fill="#D32F2F" />

            {/* Head / Skin */}
            <circle cx="60" cy="52" r="29" fill="#FFD1A4" stroke="#D89A6A" strokeWidth="3" />

            {/* Girl Hair & Bangs */}
            <path d="M 31 46 C 31 22 89 22 89 46 C 75 30 45 30 31 46 Z" fill="#37474F" />
            {/* Cute Yellow Headband */}
            <path d="M 33 42 C 33 24 87 24 87 42" fill="none" stroke="#FFEB3B" strokeWidth="4" />

            {/* Eyes */}
            <g>
              {emotion === 'sad' ? (
                <>
                  <path d="M 46 54 Q 52 60 46 64" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 74 54 Q 68 60 74 64" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <circle cx="47" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="48" cy="55" r="4" fill="#263238" />
                  <circle cx="50" cy="53" r="1.5" fill="#FFF" />

                  <circle cx="73" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
                  <circle cx="72" cy="55" r="4" fill="#263238" />
                  <circle cx="74" cy="53" r="1.5" fill="#FFF" />
                </>
              )}
            </g>

            {/* Mouth */}
            {emotion === 'happy' || emotion === 'celebrate' ? (
              <path d="M 50 64 Q 60 76 70 64 Z" fill="#E91E63" stroke="#880E4F" strokeWidth="1.5" />
            ) : emotion === 'sad' ? (
              <path d="M 50 68 Q 60 60 70 68" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <path d="M 50 65 Q 60 73 70 65" fill="none" stroke="#263238" strokeWidth="3" strokeLinecap="round" />
            )}

            {/* Blushing Cheeks */}
            <circle cx="40" cy="62" r="4.5" fill="#FF8A80" opacity="0.7" />
            <circle cx="80" cy="62" r="4.5" fill="#FF8A80" opacity="0.7" />
          </svg>
        )}

        {/* GIZI / JUARA: Cute SD Student Champion Character */}
        {!isBoy && !isGirl && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="30" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Body */}
            <path d="M 38 80 L 82 80 L 88 110 L 32 110 Z" fill="#FF9800" stroke="#E65100" strokeWidth="3" />
            <path d="M 45 75 L 75 75 L 70 100 L 50 100 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <polygon points="60,78 56,88 60,98 64,88" fill="#E65100" />
            {/* Champion Gold Medal */}
            <circle cx="60" cy="95" r="7" fill="#FFD700" stroke="#B7950B" strokeWidth="2" />
            <path d="M 60 91 L 62 94 L 65 94 L 63 96 L 64 99 L 60 97 L 56 99 L 57 96 L 55 94 L 58 94 Z" fill="#FFF" />

            {/* Head / Skin */}
            <circle cx="60" cy="52" r="30" fill="#FFD1A4" stroke="#D89A6A" strokeWidth="3" />

            {/* Hair */}
            <path d="M 32 45 C 32 25 88 25 88 45 C 80 32 40 32 32 45 Z" fill="#3E2723" />
            {/* Crown / Red Cap */}
            <path d="M 32 40 C 32 20 88 20 88 40 Z" fill="#FF9800" stroke="#E65100" strokeWidth="2.5" />
            <circle cx="60" cy="22" r="4" fill="#FFD700" />

            {/* Eyes */}
            <g>
              <circle cx="48" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
              <circle cx="49" cy="55" r="4" fill="#3E2723" />
              <circle cx="51" cy="53" r="1.5" fill="#FFF" />

              <circle cx="72" cy="56" r="7.5" fill="#FFF" stroke="#263238" strokeWidth="2" />
              <circle cx="71" cy="55" r="4" fill="#3E2723" />
              <circle cx="73" cy="53" r="1.5" fill="#FFF" />
            </g>

            {/* Mouth */}
            <path d="M 50 64 Q 60 76 70 64 Z" fill="#D32F2F" stroke="#9A0007" strokeWidth="1.5" />

            {/* Cheeks */}
            <circle cx="41" cy="62" r="4" fill="#FF8A80" opacity="0.6" />
            <circle cx="79" cy="62" r="4" fill="#FF8A80" opacity="0.6" />
          </svg>
        )}
      </motion.div>

      {/* Mascot Name Badge */}
      {showBadge && (
        <span className="mt-1 px-3 py-0.5 text-xs font-black rounded-full bg-white text-slate-800 shadow border border-slate-200">
          {name}
        </span>
      )}
    </div>
  );
};
