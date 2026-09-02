import { motion } from 'motion/react';

interface Props {
  questionId: number;
  levelId: number;
  themeName?: string;
  questionText?: string;
}

export const QuestionIllustration = ({ questionId, levelId: _, themeName = '', questionText = '' }: Props) => {
  const text = (themeName + ' ' + questionText).toLowerCase();

  // Subject detection
  const isMath = text.includes('matematika') || text.includes('mtk') || text.includes('bangun') || text.includes('hitung') || text.includes('luas') || text.includes('sudut') || text.includes('sisi');
  const isScience = text.includes('ipa') || text.includes('ipas') || text.includes('sains') || text.includes('wujud') || text.includes('alam') || text.includes('tumbuhan') || text.includes('hewan');
  const isIndonesian = text.includes('indonesia') || text.includes('bahasa') || text.includes('b.indo') || text.includes('kata') || text.includes('puisi') || text.includes('bacaan');
  const isCivics = text.includes('pkn') || text.includes('pancasila') || text.includes('kewarganegaraan') || text.includes('ips') || text.includes('sejarah') || text.includes('negara');
  const isReligion = text.includes('agama') || text.includes('pai') || text.includes('isla') || text.includes('moral') || text.includes('doa');
  const isSports = text.includes('olahraga') || text.includes('pjok') || text.includes('jasmani') || text.includes('sehat') || text.includes('senam');

  const renderSvg = () => {
    // 📐 1. MATEMATIKA (Geometry, Numbers, Formulas, Ruler)
    if (isMath) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="3" />

          {/* Grid Background Lines */}
          <path d="M 0 30 L 240 30 M 0 60 L 240 60 M 0 90 L 240 90 M 40 0 L 40 120 M 80 0 L 80 120 M 120 0 L 120 120 M 160 0 L 160 120 M 200 0 L 200 120" stroke="#DBEAFE" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* Triangle 🔺 */}
          <g transform="translate(25, 25)">
            <motion.polygon
              points="25,5 45,45 5,45"
              fill="#3B82F6"
              stroke="#1D4ED8"
              strokeWidth="3"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <path d="M 25,20 L 25,45" stroke="#93C5FD" strokeWidth="1.5" strokeDasharray="2 2" />
          </g>

          {/* Square / Rectangle ⬛ */}
          <g transform="translate(95, 30)">
            <motion.rect
              x="0"
              y="0"
              width="45"
              height="45"
              rx="6"
              fill="#60A5FA"
              stroke="#1E40AF"
              strokeWidth="3"
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
            />
            {/* Right angle symbol */}
            <path d="M 0 35 L 10 35 L 10 45" fill="none" stroke="#1E40AF" strokeWidth="2" />
          </g>

          {/* Circle ⭕ */}
          <g transform="translate(170, 25)">
            <motion.circle
              cx="25"
              cy="25"
              r="22"
              fill="#F59E0B"
              stroke="#B45309"
              strokeWidth="3"
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
            <line x1="25" y1="25" x2="47" y2="25" stroke="#FFF" strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="25" cy="25" r="3" fill="#FFF" />
          </g>

          {/* Floating Math Symbols */}
          <motion.text x="18" y="102" fontSize="16" fontWeight="900" fill="#1E40AF" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            📐 L = p × l
          </motion.text>
          <motion.text x="155" y="102" fontSize="16" fontWeight="900" fill="#B45309" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}>
            ➕ ➖ ✖️ ➗
          </motion.text>
        </svg>
      );
    }

    // 🧪 2. IPAS / IPA / SAINS (Microscope, Flask, Plant, Atom)
    if (isScience) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="3" />

          {/* Science Flask 🧪 */}
          <g transform="translate(35, 20)">
            <path d="M 20 10 L 25 10 L 25 35 L 40 65 C 45 75 35 85 22 85 C 9 85 -1 75 4 65 L 19 35 L 19 10 Z" fill="#22C55E" stroke="#15803D" strokeWidth="3" />
            <path d="M 6 65 Q 22 55 38 65 L 40 65 C 45 75 35 85 22 85 C 9 85 -1 75 4 65 Z" fill="#4ADE80" />
            {/* Bubbles */}
            <motion.circle cx="20" cy="45" r="3" fill="#FFF" animate={{ y: [-5, -20], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} />
            <motion.circle cx="26" cy="55" r="4" fill="#FFF" animate={{ y: [-5, -25], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }} />
          </g>

          {/* Sprouting Plant 🌿 */}
          <g transform="translate(110, 25)">
            <rect x="0" y="55" width="40" height="25" rx="5" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
            <motion.path
              d="M 20 55 Q 20 30 5 15 Q 18 30 20 55 Z"
              fill="#16A34A" stroke="#15803D" strokeWidth="2"
              animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.path
              d="M 20 55 Q 20 25 35 10 Q 22 25 20 55 Z"
              fill="#22C55E" stroke="#15803D" strokeWidth="2"
              animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
            />
          </g>

          {/* Atom Orbit ⚛️ */}
          <g transform="translate(170, 25)">
            <ellipse cx="25" cy="30" rx="22" ry="8" fill="none" stroke="#0284C7" strokeWidth="2" transform="rotate(-30 25 30)" />
            <ellipse cx="25" cy="30" rx="22" ry="8" fill="none" stroke="#0284C7" strokeWidth="2" transform="rotate(30 25 30)" />
            <circle cx="25" cy="30" r="7" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" />
          </g>

          <text x="120" y="105" textAnchor="middle" fontSize="13" fontWeight="900" fill="#166534">
            🔬 Eksperimen & Pengetahuan Alam 🌿
          </text>
        </svg>
      );
    }

    // 📚 3. BAHASA INDONESIA (Open Book, ABC, Quill)
    if (isIndonesian) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="3" />

          {/* Open Book 📖 */}
          <g transform="translate(70, 20)">
            <path d="M 0 50 Q 25 40 50 50 L 50 15 Q 25 5 0 15 Z" fill="#FFF" stroke="#EA580C" strokeWidth="3" />
            <path d="M 50 50 Q 75 40 100 50 L 100 15 Q 75 5 50 15 Z" fill="#FFEDD5" stroke="#EA580C" strokeWidth="3" />
            <line x1="50" y1="15" x2="50" y2="50" stroke="#EA580C" strokeWidth="3" />

            {/* Lines of Text */}
            <line x1="10" y1="23" x2="40" y2="23" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="31" x2="40" y2="31" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="10" y1="39" x2="32" y2="39" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />

            <line x1="60" y1="23" x2="90" y2="23" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="60" y1="31" x2="90" y2="31" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="60" y1="39" x2="80" y2="39" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Floating Letters ABC */}
          <motion.text x="25" y="45" fontSize="26" fontWeight="900" fill="#EA580C" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            A
          </motion.text>
          <motion.text x="35" y="78" fontSize="24" fontWeight="900" fill="#C2410C" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.2 }}>
            B
          </motion.text>
          <motion.text x="195" y="55" fontSize="28" fontWeight="900" fill="#EA580C" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.6, delay: 0.4 }}>
            C
          </motion.text>

          <text x="120" y="98" textAnchor="middle" fontSize="13" fontWeight="900" fill="#9A3412">
            ✍️ Membaca, Menulis & Memahami Kalimat 📚
          </text>
        </svg>
      );
    }

    // 🇮🇩 4. PKN / PANCASILA / IPS (Indonesian Flag, Shield, Unity)
    if (isCivics) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="3" />

          {/* Indonesian Flag Shield 🇮🇩 */}
          <g transform="translate(95, 15)">
            <path d="M 0 0 L 50 0 C 50 35 40 60 25 70 C 10 60 0 35 0 0 Z" fill="#FFF" stroke="#B91C1C" strokeWidth="3.5" />
            <path d="M 0 0 L 50 0 C 50 25 40 38 25 38 C 10 38 0 25 0 0 Z" fill="#EF4444" />
            {/* Golden Star in Center */}
            <polygon points="25,18 28,24 35,24 29,28 31,35 25,30 19,35 21,28 15,24 22,24" fill="#FFD700" stroke="#B7950B" strokeWidth="1" />
          </g>

          {/* Unity Hands Icon */}
          <text x="35" y="65" fontSize="36">🤝</text>
          <text x="180" y="65" fontSize="36">🏛️</text>

          <text x="120" y="104" textAnchor="middle" fontSize="13" fontWeight="900" fill="#991B1B">
            🇮🇩 Pancasila & Kewarganegaraan Indonesia 🏛️
          </text>
        </svg>
      );
    }

    // 🌙 5. AGAMA / PAI (Crescent Moon, Star, Glowing Book)
    if (isReligion) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#F3E5F5" stroke="#CE93D8" strokeWidth="3" />

          {/* Crescent Moon 🌙 */}
          <g transform="translate(45, 20)">
            <path d="M 30 10 A 25 25 0 1 0 50 45 A 20 20 0 1 1 30 10 Z" fill="#FFD700" stroke="#B7950B" strokeWidth="2.5" />
            <polygon points="52,15 54,20 60,20 55,24 57,29 52,26 47,29 49,24 44,20 50,20" fill="#FFD700" />
          </g>

          {/* Holy Book / Lantern ✨ */}
          <g transform="translate(130, 25)">
            <rect x="0" y="15" width="55" height="42" rx="8" fill="#9C27B0" stroke="#4A148C" strokeWidth="3" />
            <path d="M 0 36 Q 27 28 55 36" stroke="#E1BEE7" strokeWidth="2.5" fill="none" />
            <circle cx="27" cy="30" r="6" fill="#FFD700" />
          </g>

          <text x="120" y="102" textAnchor="middle" fontSize="13" fontWeight="900" fill="#4A148C">
            🌙 Pendidikan Agama & Budi Pekerti Mulia 🌟
          </text>
        </svg>
      );
    }

    // ⚽ 6. OLAHRAGA / PJOK (Ball, Trophy, Medal)
    if (isSports) {
      return (
        <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
          <rect width="240" height="120" rx="20" fill="#FEFCE8" stroke="#FDE047" strokeWidth="3" />

          {/* Soccer Ball ⚽ */}
          <g transform="translate(35, 25)">
            <motion.circle cx="30" cy="30" r="26" fill="#FFF" stroke="#1E293B" strokeWidth="3" animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} />
            <polygon points="30,16 38,22 35,32 25,32 22,22" fill="#1E293B" />
          </g>

          {/* Golden Trophy 🏆 */}
          <g transform="translate(120, 18)">
            <path d="M 10 10 L 40 10 L 36 38 Q 25 50 14 38 Z" fill="#FFD700" stroke="#B7950B" strokeWidth="2.5" />
            <rect x="21" y="48" width="8" height="14" fill="#B7950B" />
            <rect x="12" y="62" width="26" height="10" rx="3" fill="#78350F" />
          </g>

          <text x="120" y="104" textAnchor="middle" fontSize="13" fontWeight="900" fill="#854D0E">
            ⚽ Olahraga, Kesehatan & Kebugaran Jasmani 🏆
          </text>
        </svg>
      );
    }

    // ♻️ 7. DEFAULT / SIRKULAR & LINGKUNGAN (Organic waste, Recycle Bin, Plants)
    switch (questionId) {
      case 1:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="3" />

            {/* Apple */}
            <g transform="translate(35, 30)">
              <motion.circle cx="22" cy="24" r="22" fill="#EF4444" stroke="#B91C1C" strokeWidth="2.5" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
              <path d="M 22 4 Q 26 -2 30 2" stroke="#78350F" strokeWidth="3" fill="none" />
              <path d="M 24 2 Q 34 0 30 8 Z" fill="#22C55E" />
            </g>

            {/* Banana */}
            <g transform="translate(105, 30)">
              <motion.path d="M 5 15 Q 25 5 45 25 Q 30 48 0 32 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="2.5" animate={{ rotate: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 2 }} />
            </g>

            {/* Dry Leaf */}
            <g transform="translate(170, 30)">
              <motion.path d="M 5 28 Q 32 -5 42 36 Q 16 52 5 28 Z" fill="#4ADE80" stroke="#15803D" strokeWidth="2.5" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} />
              <path d="M 5 28 L 32 20" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
            </g>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 240 120" className="w-full h-28 sm:h-32 max-h-36 overflow-visible">
            <rect width="240" height="120" rx="20" fill="#ECFDF5" stroke="#6EE7B7" strokeWidth="3" />
            <circle cx="120" cy="50" r="32" fill="#10B981" stroke="#047857" strokeWidth="4" />
            <text x="120" y="60" textAnchor="middle" fill="#FFF" fontWeight="900" fontSize="28">♻️</text>
            <text x="120" y="102" textAnchor="middle" fontSize="13" fontWeight="900" fill="#047857">
              Kuis Interaktif Edukasi Sekolah 🌟
            </text>
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
