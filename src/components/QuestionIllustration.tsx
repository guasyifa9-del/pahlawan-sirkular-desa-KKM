import { motion } from 'motion/react';

interface Props {
  questionId: number;
  levelId: number;
}

export const QuestionIllustration = ({ questionId, levelId: _ }: Props) => {
  const renderSvg = () => {
    switch (questionId) {
      // Q1: Organic waste (apple, banana, leaf)
      case 1:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="3" />

            {/* Apple */}
            <g transform="translate(35, 30)">
              <motion.circle
                cx="22"
                cy="24"
                r="22"
                fill="#EF4444"
                stroke="#B91C1C"
                strokeWidth="2.5"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <path d="M 22 4 Q 26 -2 30 2" stroke="#78350F" strokeWidth="3" fill="none" />
              <path d="M 24 2 Q 34 0 30 8 Z" fill="#22C55E" />
            </g>

            {/* Banana */}
            <g transform="translate(105, 30)">
              <motion.path
                d="M 5 15 Q 25 5 45 25 Q 30 48 0 32 Z"
                fill="#FACC15"
                stroke="#CA8A04"
                strokeWidth="2.5"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </g>

            {/* Dry Leaf */}
            <g transform="translate(170, 30)">
              <motion.path
                d="M 5 28 Q 32 -5 42 36 Q 16 52 5 28 Z"
                fill="#4ADE80"
                stroke="#15803D"
                strokeWidth="2.5"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
              <path d="M 5 28 L 32 20" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
        );

      // Q2: Compost fertilizer
      case 2:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#FEFCE8" stroke="#FDE047" strokeWidth="3" />

            {/* Compost Pot */}
            <path d="M 80 40 L 160 40 L 148 102 L 92 102 Z" fill="#78350F" stroke="#451A03" strokeWidth="3.5" />
            <rect x="74" y="36" width="92" height="10" rx="3" fill="#A16207" />

            {/* Sprouting Plant */}
            <motion.path
              d="M 120 36 Q 120 14 100 8 Q 112 24 120 36 Z"
              fill="#22C55E"
              stroke="#15803D"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
            />
            <motion.path
              d="M 120 36 Q 120 10 140 6 Q 128 22 120 36 Z"
              fill="#16A34A"
              stroke="#15803D"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, delay: 0.2 }}
            />

            {/* Happy Worm */}
            <path d="M 95 64 Q 102 57 108 64 T 120 64" fill="none" stroke="#F43F5E" strokeWidth="4" strokeLinecap="round" />
            <circle cx="120" cy="64" r="2.5" fill="#881337" />
          </svg>
        );

      // Q3 & Q4: Yellow bin for plastic
      case 3:
      case 4:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#FEF9C3" stroke="#FACC15" strokeWidth="3" />
            
            {/* Yellow Recycling Bin */}
            <g transform="translate(40, 15)">
              <rect x="10" y="25" width="55" height="75" rx="8" fill="#FACC15" stroke="#CA8A04" strokeWidth="3.5" />
              <rect x="5" y="15" width="65" height="14" rx="4" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
              <text x="37" y="65" textAnchor="middle" fontSize="26">🗑️</text>
            </g>

            <g transform="translate(130, 20)">
              <rect x="0" y="10" width="80" height="75" rx="12" fill="#FFF" stroke="#EAB308" strokeWidth="2.5" />
              <text x="40" y="55" textAnchor="middle" fontSize="32">🥤🍾</text>
            </g>
          </svg>
        );

      // Q5: Reduce plastic bags
      case 5:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="3" />

            <g transform="translate(45, 25)">
              <rect x="0" y="20" width="60" height="65" rx="10" fill="#10B981" stroke="#047857" strokeWidth="3.5" />
              <path d="M 16 20 Q 16 -2 30 -2 Q 44 -2 44 20" fill="none" stroke="#047857" strokeWidth="4.5" />
            </g>

            <g transform="translate(145, 25)">
              <rect x="10" y="15" width="38" height="70" rx="14" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3.5" />
              <rect x="19" y="5" width="20" height="14" rx="4" fill="#1E40AF" />
            </g>
          </svg>
        );

      // Q6: Bank Sampah
      case 6:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="3" />
            <rect x="25" y="15" width="190" height="90" rx="18" fill="#22C55E" stroke="#15803D" strokeWidth="3.5" />
            <circle cx="120" cy="60" r="28" fill="#FACC15" stroke="#CA8A04" strokeWidth="3.5" />
            <text x="120" y="70" textAnchor="middle" fill="#854D0E" fontWeight="900" fontSize="28">Rp</text>
          </svg>
        );

      // Q7: Maggot BSF
      case 7:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="3" />

            <motion.g
              animate={{ x: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <text x="120" y="72" textAnchor="middle" fontSize="42">🐛 🍎 🍉 🥬</text>
            </motion.g>
          </svg>
        );

      // Q8: Hazardous B3
      case 8:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="3" />
            <g transform="translate(88, 15)">
              <rect x="10" y="20" width="54" height="80" rx="10" fill="#EF4444" stroke="#991B1B" strokeWidth="3.5" />
              <rect x="25" y="8" width="24" height="14" fill="#991B1B" rx="3" />
              <text x="37" y="66" textAnchor="middle" fill="#FFF" fontWeight="900" fontSize="32">⚠️</text>
            </g>
          </svg>
        );

      // Q9: River
      case 9:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#E0F2FE" stroke="#7DD3FC" strokeWidth="3" />
            <motion.path
              d="M 0 55 Q 60 35 120 55 T 240 55 L 240 120 L 0 120 Z"
              fill="#0284C7"
              animate={{ d: ["M 0 55 Q 60 35 120 55 T 240 55 L 240 120 L 0 120 Z", "M 0 50 Q 60 45 120 50 T 240 50 L 240 120 L 0 120 Z", "M 0 55 Q 60 35 120 55 T 240 55 L 240 120 L 0 120 Z"] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            />
            <text x="60" y="90" fontSize="24">🐟</text>
            <text x="180" y="85" fontSize="24">🌿</text>
          </svg>
        );

      // Q10: 3R
      case 10:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="3" />
            <circle cx="120" cy="60" r="44" fill="#10B981" stroke="#047857" strokeWidth="4" />
            <text x="120" y="72" textAnchor="middle" fill="#FFF" fontWeight="900" fontSize="32">3R</text>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="3" />
            <text x="120" y="70" textAnchor="middle" fontSize="42">🥬 🌽 🍠 🐟 🐔</text>
          </svg>
        );
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full my-1.5 select-none">
      <motion.div
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="w-full"
      >
        {renderSvg()}
      </motion.div>
    </div>
  );
};
