import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Team } from '../types';
import { sound } from '../utils/audio';

interface LiveScoreboardProps {
  teams: Team[];
  onUpdateScore: (teamId: string, delta: number) => void;
  isOperatorMode?: boolean;
}

export const LiveScoreboard = ({
  teams,
  onUpdateScore,
  isOperatorMode = false,
}: LiveScoreboardProps) => {
  const [floatingPoints, setFloatingPoints] = useState<
    { id: number; teamId: string; text: string; color: string }[]
  >([]);

  const handleScoreClick = (teamId: string, delta: number) => {
    if (delta > 0) {
      sound.playStarPoint();
    } else {
      sound.playWrong();
    }

    onUpdateScore(teamId, delta);

    // Create floating score particle animation
    const newParticle = {
      id: Date.now() + Math.random(),
      teamId,
      text: delta > 0 ? `+${delta}` : `${delta}`,
      color: delta > 0 ? 'text-yellow-300 font-black' : 'text-rose-300 font-bold',
    };

    setFloatingPoints((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setFloatingPoints((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <div className="w-full bg-white border-b-[4px] border-[#2196F3] p-2 sm:p-2.5 shadow-[0_4px_0px_rgba(33,150,243,0.2)]">
      <div className={`max-w-7xl mx-auto grid gap-2.5 ${teams.length <= 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5'}`}>
        {teams.map((team, idx) => (
          <div
            key={team.id}
            className="relative bg-[#F0F9FF] border-[3px] border-[#2196F3] rounded-2xl p-2 flex flex-col items-center shadow-[3px_3px_0px_#1976D2] transition-transform hover:-translate-y-0.5"
          >
            {/* Rank badge / Avatar & Full Team Name */}
            <div className="flex items-center gap-1.5 mb-0.5 w-full justify-center">
              <span className="w-8 h-8 bg-[#FFEB3B] rounded-full flex items-center justify-center text-lg border-2 border-[#FBC02D] shadow-sm shrink-0">
                {team.avatar}
              </span>
              <span className="font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wide text-center leading-tight">
                {team.name}
              </span>
            </div>

            {/* Big Animated Score */}
            <div className="relative my-0.5 flex items-baseline gap-1">
              <motion.span
                key={team.score}
                initial={{ scale: 1.3, color: '#FF9800' }}
                animate={{ scale: 1, color: '#4CAF50' }}
                transition={{ duration: 0.25 }}
                className="text-2xl sm:text-3xl font-black text-[#4CAF50] tracking-tight drop-shadow-sm"
              >
                {team.score}
              </motion.span>
              <span className="text-[10px] text-[#2E7D32] font-black uppercase">PTS</span>

              {/* Floating score particle animation */}
              <AnimatePresence>
                {floatingPoints
                  .filter((p) => p.teamId === team.id)
                  .map((p) => (
                    <motion.span
                      key={p.id}
                      initial={{ opacity: 1, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -35, scale: 1.4 }}
                      exit={{ opacity: 0 }}
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 text-base sm:text-lg font-black ${p.color} pointer-events-none drop-shadow-md z-30`}
                    >
                      {p.text} ⭐
                    </motion.span>
                  ))}
              </AnimatePresence>
            </div>

            {/* Quick Operator Scoring Buttons */}
            {isOperatorMode && (
              <div className="flex items-center gap-1 mt-1 w-full justify-center">
                <button
                  onClick={() => handleScoreClick(team.id, 10)}
                  className="px-2 py-1 bg-[#4CAF50] hover:bg-emerald-600 active:translate-y-0.5 text-white font-black text-xs rounded-lg shadow-[2px_2px_0px_#2E7D32] cursor-pointer flex items-center justify-center gap-0.5 min-w-[36px]"
                  title={`Tambah 10 poin untuk ${team.name} (Atau tekan tombol keyboard ${idx + 1})`}
                >
                  +10
                </button>
                <button
                  onClick={() => handleScoreClick(team.id, -5)}
                  className="px-2 py-1 bg-[#F44336] hover:bg-red-600 active:translate-y-0.5 text-white font-black text-xs rounded-lg shadow-[2px_2px_0px_#D32F2F] cursor-pointer min-w-[32px]"
                  title={`Kurangi 5 poin untuk ${team.name}`}
                >
                  -5
                </button>
                <button
                  onClick={() => handleScoreClick(team.id, 1)}
                  className="px-1.5 py-1 bg-slate-200 hover:bg-slate-300 active:translate-y-0.5 text-slate-800 font-black text-[10px] rounded-lg border border-slate-300 shadow-[1px_1px_0px_#94A3B8] cursor-pointer min-w-[26px]"
                  title={`+1 Poin`}
                >
                  +1
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
