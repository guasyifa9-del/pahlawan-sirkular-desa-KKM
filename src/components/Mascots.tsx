import { motion } from 'motion/react';
import { MascotEmotion } from '../types';

interface MascotProps {
  name: 'Kompi' | 'Kreati' | 'Gizi';
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
        {/* KOMPI: Green Friendly Trash Bin */}
        {name === 'Kompi' && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            {/* Shadow */}
            <ellipse cx="60" cy="112" rx="35" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Sweating effect when nervous */}
            {emotion === 'nervous' && (
              <g className="animate-pulse">
                <path d="M 90 35 Q 94 40 90 45 Q 86 40 90 35 Z" fill="#60A5FA" />
                <path d="M 28 40 Q 32 45 28 50 Q 24 45 28 40 Z" fill="#60A5FA" />
              </g>
            )}

            {/* Body Outer / Bin */}
            <path
              d="M 30 35 Q 30 25 40 25 L 80 25 Q 90 25 90 35 L 85 98 Q 85 105 75 105 L 45 105 Q 35 105 35 98 Z"
              fill="#4CAF50"
              stroke="#2E7D32"
              strokeWidth="4"
            />

            {/* Lid */}
            <path
              d="M 22 24 C 22 18, 98 18, 98 24 L 95 32 C 95 35, 25 35, 25 32 Z"
              fill="#66BB6A"
              stroke="#2E7D32"
              strokeWidth="3.5"
            />
            {/* Lid Handle */}
            <rect x="50" y="12" width="20" height="8" rx="4" fill="#388E3C" stroke="#1B5E20" strokeWidth="2" />

            {/* Recycling 3R Badge Emblem */}
            {showBadge && (
              <g transform="translate(60, 78) scale(0.7)">
                <circle cx="0" cy="0" r="16" fill="#FFF" stroke="#2E7D32" strokeWidth="2" />
                <path
                  d="M -6 -4 L 0 -10 L 6 -4 L 3 -4 C 5 2 -3 8 -8 4"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 6 4 L 0 10 L -6 4 L -3 4 C -5 -2 3 -8 8 -4"
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>
            )}

            {/* Eyes */}
            <g className="eyes">
              {emotion === 'sad' ? (
                <>
                  <path d="M 42 48 Q 50 54 42 58" fill="none" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 78 48 Q 70 54 78 58" fill="none" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" />
                </>
              ) : emotion === 'nervous' ? (
                <>
                  <circle cx="46" cy="52" r="6" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
                  <circle cx="46" cy="52" r="2" fill="#000" />
                  <circle cx="74" cy="52" r="6" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
                  <circle cx="74" cy="52" r="2" fill="#000" />
                </>
              ) : (
                <>
                  <circle cx="46" cy="52" r="9" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
                  <circle cx="48" cy="51" r="4.5" fill="#1B5E20" />
                  <circle cx="50" cy="49" r="1.5" fill="#FFF" />

                  <circle cx="74" cy="52" r="9" fill="#FFF" stroke="#1B5E20" strokeWidth="2" />
                  <circle cx="72" cy="51" r="4.5" fill="#1B5E20" />
                  <circle cx="74" cy="49" r="1.5" fill="#FFF" />
                </>
              )}
            </g>

            {/* Mouth */}
            {emotion === 'happy' || emotion === 'celebrate' ? (
              <path d="M 46 66 Q 60 80 74 66 Z" fill="#D32F2F" stroke="#1B5E20" strokeWidth="2" />
            ) : emotion === 'sad' ? (
              <path d="M 48 72 Q 60 62 72 72" fill="none" stroke="#1B5E20" strokeWidth="3" strokeLinecap="round" />
            ) : emotion === 'nervous' ? (
              <path d="M 48 70 Q 54 66 60 70 T 72 70" fill="none" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" />
            ) : (
              <path d="M 48 66 Q 60 76 72 66" fill="none" stroke="#1B5E20" strokeWidth="3.5" strokeLinecap="round" />
            )}

            {/* Cheeks */}
            <circle cx="38" cy="62" r="4" fill="#81C784" opacity="0.6" />
            <circle cx="82" cy="62" r="4" fill="#81C784" opacity="0.6" />

            {/* Cute Hands */}
            <path d="M 28 65 Q 16 60 22 75" fill="none" stroke="#388E3C" strokeWidth="4" strokeLinecap="round" />
            <path d="M 92 65 Q 104 60 98 75" fill="none" stroke="#388E3C" strokeWidth="4" strokeLinecap="round" />
          </svg>
        )}

        {/* KREATI: Blue Crafty Drop / Recycling Mascot */}
        {name === 'Kreati' && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            <ellipse cx="60" cy="112" rx="32" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Main Drop Body */}
            <path
              d="M 60 15 C 85 50 98 70 98 85 C 98 102 81 110 60 110 C 39 110 22 102 22 85 C 22 70 35 50 60 15 Z"
              fill="#2196F3"
              stroke="#0D47A1"
              strokeWidth="4"
            />

            {/* Fabric / Craft Patchwork Accent */}
            <path
              d="M 35 80 L 50 70 L 58 85 L 42 92 Z"
              fill="#FFEB3B"
              stroke="#0D47A1"
              strokeWidth="2"
              strokeDasharray="2 2"
            />

            {/* Eyes */}
            <g>
              {emotion === 'sad' ? (
                <>
                  <path d="M 44 60 Q 50 66 44 70" fill="none" stroke="#0D47A1" strokeWidth="3" />
                  <path d="M 76 60 Q 70 66 76 70" fill="none" stroke="#0D47A1" strokeWidth="3" />
                </>
              ) : (
                <>
                  <circle cx="46" cy="60" r="8" fill="#FFF" stroke="#0D47A1" strokeWidth="2" />
                  <circle cx="48" cy="59" r="4" fill="#0D47A1" />
                  <circle cx="50" cy="57" r="1.5" fill="#FFF" />

                  <circle cx="74" cy="60" r="8" fill="#FFF" stroke="#0D47A1" strokeWidth="2" />
                  <circle cx="72" cy="59" r="4" fill="#0D47A1" />
                  <circle cx="74" cy="57" r="1.5" fill="#FFF" />
                </>
              )}
            </g>

            {/* Mouth */}
            {emotion === 'happy' || emotion === 'celebrate' ? (
              <path d="M 48 72 Q 60 84 72 72 Z" fill="#E91E63" stroke="#0D47A1" strokeWidth="2" />
            ) : emotion === 'sad' ? (
              <path d="M 48 76 Q 60 68 72 76" fill="none" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <path d="M 48 72 Q 60 80 72 72" fill="none" stroke="#0D47A1" strokeWidth="3" strokeLinecap="round" />
            )}

            {/* Cute Rosy Cheeks */}
            <circle cx="36" cy="68" r="4" fill="#64B5F6" />
            <circle cx="84" cy="68" r="4" fill="#64B5F6" />

            {/* Paintbrush in Hand */}
            <g transform="translate(86, 75) rotate(20)">
              <rect x="0" y="0" width="6" height="24" fill="#795548" rx="2" />
              <path d="M 0 0 C 0 -6 6 -6 6 0 Z" fill="#FF9800" />
            </g>
          </svg>
        )}

        {/* GIZI: Orange Food & Nutrition Mascot */}
        {name === 'Gizi' && (
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-lg overflow-visible">
            <ellipse cx="60" cy="112" rx="35" ry="6" fill="rgba(0,0,0,0.15)" />

            {/* Orange Citrus / Body */}
            <circle cx="60" cy="65" r="42" fill="#FF9800" stroke="#E65100" strokeWidth="4" />

            {/* Green Leaf Hair / Topper */}
            <path
              d="M 60 23 Q 45 5 35 18 Q 50 25 60 23 Z"
              fill="#4CAF50"
              stroke="#1B5E20"
              strokeWidth="2.5"
            />
            <path
              d="M 60 23 Q 75 5 85 18 Q 70 25 60 23 Z"
              fill="#66BB6A"
              stroke="#1B5E20"
              strokeWidth="2.5"
            />

            {/* Eyes */}
            <g>
              {emotion === 'sad' ? (
                <>
                  <path d="M 44 58 Q 50 64 44 68" fill="none" stroke="#E65100" strokeWidth="3" />
                  <path d="M 76 58 Q 70 64 76 68" fill="none" stroke="#E65100" strokeWidth="3" />
                </>
              ) : (
                <>
                  <circle cx="45" cy="58" r="8" fill="#FFF" stroke="#E65100" strokeWidth="2" />
                  <circle cx="47" cy="57" r="4" fill="#3E2723" />
                  <circle cx="49" cy="55" r="1.5" fill="#FFF" />

                  <circle cx="75" cy="58" r="8" fill="#FFF" stroke="#E65100" strokeWidth="2" />
                  <circle cx="73" cy="57" r="4" fill="#3E2723" />
                  <circle cx="75" cy="55" r="1.5" fill="#FFF" />
                </>
              )}
            </g>

            {/* Mouth */}
            {emotion === 'happy' || emotion === 'celebrate' ? (
              <path d="M 46 70 Q 60 84 74 70 Z" fill="#D32F2F" stroke="#E65100" strokeWidth="2" />
            ) : emotion === 'sad' ? (
              <path d="M 48 76 Q 60 68 72 76" fill="none" stroke="#E65100" strokeWidth="3" strokeLinecap="round" />
            ) : (
              <path d="M 46 70 Q 60 82 74 70" fill="none" stroke="#E65100" strokeWidth="3.5" strokeLinecap="round" />
            )}

            {/* Cheeks */}
            <circle cx="35" cy="66" r="5" fill="#FFB74D" opacity="0.8" />
            <circle cx="85" cy="66" r="5" fill="#FFB74D" opacity="0.8" />
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
