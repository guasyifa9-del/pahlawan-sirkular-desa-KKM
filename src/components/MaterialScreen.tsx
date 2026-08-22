import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mascot } from './Mascots';
import { materialsData, PillarMaterial, MaterialSection } from '../data/materials';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  ArrowLeft,
  Sparkles,
  Star,
  GraduationCap,
  Printer,
} from 'lucide-react';

interface MaterialScreenProps {
  onBack: () => void;
}

// Accordion card for each material section
const SectionCard: FC<{
  section: MaterialSection;
  index: number;
  themeColor: string;
  themeDark: string;
}> = ({
  section,
  index,
  themeColor,
  themeDark,
}) => {
  const [isOpen, setIsOpen] = useState(index === 0); // first section open by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl border-[3px] overflow-hidden transition-all"
      style={{ borderColor: themeColor, boxShadow: `4px 4px 0px ${themeDark}` }}
    >
      {/* Section Header (clickable) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <h4 className="text-sm md:text-base font-black text-slate-900 text-left leading-tight">
            {section.title}
          </h4>
        </div>
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: themeColor }}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white" />
          )}
        </div>
      </button>

      {/* Section Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2.5 border-t-2 border-slate-100 pt-3">
              {section.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium pl-1"
                  dangerouslySetInnerHTML={{
                    __html: point
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>'),
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const MaterialScreen = ({ onBack }: MaterialScreenProps) => {
  const [activePillarId, setActivePillarId] = useState(1);
  const activePillar: PillarMaterial =
    materialsData.find((m) => m.pillarId === activePillarId) || materialsData[0];

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 p-3 sm:p-6 md:p-8 flex flex-col items-center font-sans">
      <div className="w-full max-w-5xl">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-[6px] border-[#4CAF50] rounded-[32px] p-5 md:p-6 shadow-[8px_8px_0px_#2E7D32] mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFEB3B] border-[3px] border-[#FBC02D] shadow-[3px_3px_0px_#F9A825] flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-[#1B5E20]" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black text-[#1B5E20] uppercase tracking-tight flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" />
                  Materi Edukasi
                </h1>
                <p className="text-xs md:text-sm font-bold text-slate-600">
                  Baca dan pahami materi sebelum mengerjakan kuis! 📖
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-[#FFEB3B] hover:bg-[#FBC02D] text-[#1B5E20] font-black text-xs md:text-sm rounded-2xl border-[3px] border-[#FBC02D] shadow-[3px_3px_0px_#F9A825] flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                title="Cetak/Simpan Rangkuman Materi sebagai PDF"
              >
                <Printer className="w-4 h-4" />
                🖨️ Cetak Materi
              </button>

              <button
                onClick={onBack}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 font-black text-xs md:text-sm rounded-2xl border-[3px] border-slate-300 shadow-[3px_3px_0px_#CBD5E1] flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Menu
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pillar Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6"
        >
          {materialsData.map((pillar) => {
            const isActive = activePillarId === pillar.pillarId;
            return (
              <button
                key={pillar.pillarId}
                onClick={() => setActivePillarId(pillar.pillarId)}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-3 rounded-2xl font-black text-xs md:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'text-white scale-105 border-[3px] shadow-lg'
                    : 'bg-white text-slate-700 border-[3px] border-slate-300 hover:bg-slate-50 shadow-[2px_2px_0px_#CBD5E1]'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: pillar.themeColor,
                        borderColor: pillar.themeDark,
                        boxShadow: `4px 4px 0px ${pillar.themeDark}`,
                      }
                    : undefined
                }
              >
                <span className="text-lg">{pillar.icon}</span>
                <span className="truncate">Pilar {pillar.pillarId}: {pillar.title.split(' ').slice(0, 2).join(' ')}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Pillar Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillarId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Pillar Header Card */}
            <div
              className="rounded-[24px] p-5 md:p-6 border-[4px] mb-6 flex flex-col md:flex-row items-center gap-5 relative overflow-hidden"
              style={{
                backgroundColor: activePillar.themeBg,
                borderColor: activePillar.themeColor,
                boxShadow: `6px 6px 0px ${activePillar.themeDark}`,
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 left-4 text-6xl">{activePillar.icon}</div>
                <div className="absolute bottom-2 right-4 text-6xl">{activePillar.icon}</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
                  {activePillar.icon}
                </div>
              </div>

              <div className="relative z-10">
                <Mascot name={activePillar.mascot} size="lg" emotion="happy" showBadge={true} />
              </div>

              <div className="relative z-10 text-center md:text-left flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-black text-white"
                    style={{ backgroundColor: activePillar.themeColor }}
                  >
                    Pilar #{activePillar.pillarId}
                  </span>
                  <span className="text-2xl">{activePillar.icon}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight mb-1">
                  {activePillar.title}
                </h2>
                <p className="text-sm font-bold text-slate-600">{activePillar.subtitle}</p>
                <p className="text-xs font-bold text-slate-500 mt-2">
                  📚 {activePillar.sections.length} Materi • 💡 {activePillar.funFacts.length} Fakta Menarik • 🏷️{' '}
                  {activePillar.keyTerms.length} Istilah Penting
                </p>
              </div>
            </div>

            {/* Key Terms Chips */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5" style={{ color: activePillar.themeColor }} />
                <h3 className="text-sm font-black text-slate-900">Istilah Penting yang Harus Kamu Tahu:</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activePillar.keyTerms.map((kt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="group relative"
                  >
                    <div
                      className="px-3 py-1.5 rounded-xl text-xs font-black text-white cursor-help border-2 transition-transform hover:scale-105"
                      style={{
                        backgroundColor: activePillar.themeColor,
                        borderColor: activePillar.themeDark,
                      }}
                    >
                      🏷️ {kt.term}
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50">
                      <div className="bg-slate-900 text-white text-xs font-bold rounded-xl px-3 py-2 shadow-lg max-w-xs whitespace-normal">
                        <strong>{kt.term}:</strong> {kt.definition}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Material Sections (Accordion) */}
            <div className="space-y-4 mb-6">
              {activePillar.sections.map((section, i) => (
                <SectionCard
                  key={`${activePillar.pillarId}-${section.title}`}
                  section={section}
                  index={i}
                  themeColor={activePillar.themeColor}
                  themeDark={activePillar.themeDark}
                />
              ))}
            </div>

            {/* Fun Facts Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#FFEB3B] border-[4px] border-[#FBC02D] rounded-[24px] p-5 shadow-[6px_6px_0px_#F9A825] mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-6 h-6 text-[#F57F17]" />
                <h3 className="text-base md:text-lg font-black text-[#E65100]">
                  💡 Tahukah Kamu? Fakta Menarik!
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activePillar.funFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-xl p-3 border-2 border-[#FBC02D]/50"
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{fact.icon}</span>
                    <p className="text-xs md:text-sm font-bold text-slate-800 leading-relaxed">
                      {fact.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4 pb-8"
            >
              {/* Next Pillar or Back */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
                {activePillarId < 3 && (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActivePillarId(activePillarId + 1)}
                    className="flex-1 w-full py-3.5 font-black text-sm rounded-2xl border-[3px] flex items-center justify-center gap-2 cursor-pointer text-white"
                    style={{
                      backgroundColor: materialsData[activePillarId]?.themeColor || '#4CAF50',
                      borderColor: materialsData[activePillarId]?.themeDark || '#1B5E20',
                      boxShadow: `4px 4px 0px ${materialsData[activePillarId]?.themeDark || '#1B5E20'}`,
                    }}
                  >
                    Lanjut ke Pilar {activePillarId + 1}: {materialsData[activePillarId]?.title.split(' ').slice(0, 2).join(' ')} →
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onBack}
                  className="flex-1 w-full py-3.5 bg-[#FF9800] hover:bg-[#F57C00] text-white font-black text-sm rounded-2xl shadow-[4px_4px_0px_#E65100] border-[3px] border-[#E65100] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 fill-white" />
                  Siap! Mulai Kuis Sekarang 🎮
                </motion.button>
              </div>

              <p className="text-xs font-bold text-slate-500 text-center">
                Pastikan kamu sudah membaca semua materi di ketiga pilar sebelum memulai kuis ya! 📖
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
