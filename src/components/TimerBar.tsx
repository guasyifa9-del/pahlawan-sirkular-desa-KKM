/**
 * TimerBar.tsx
 *
 * Sub-komponen progress bar timer dengan kontrol play/pause/reset.
 * Diextract dari GameplayScreen untuk memisahkan tanggung jawab
 * tampilan timer dari logik gameplay.
 */

import { Play, Pause, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface TimerBarProps {
  timeLeft: number;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

/**
 * Menghitung warna progress bar berdasarkan persentase waktu tersisa:
 * - > 50%: Hijau (aman)
 * - > 20%: Kuning (peringatan)
 * - ≤ 20%: Merah (kritis)
 */
function getTimerColor(percentage: number): string {
  if (percentage > 50) return 'bg-emerald-500';
  if (percentage > 20) return 'bg-amber-500';
  return 'bg-rose-600';
}

export const TimerBar = ({
  timeLeft,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}: TimerBarProps) => {
  const timerPercentage = (timeLeft / timerSeconds) * 100;
  const timerColor = getTimerColor(timerPercentage);

  return (
    <div className="flex items-center gap-2.5 flex-1 max-w-md mx-1 sm:mx-2">
      <div className="w-full bg-slate-200 rounded-full h-6 border-[2.5px] border-slate-300 overflow-hidden relative shadow-inner">
        <motion.div
          className={`h-full ${timerColor} transition-all duration-300`}
          style={{ width: `${timerPercentage}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-slate-900 drop-shadow-sm">
          ⏰ {timeLeft} DETIK
        </span>
      </div>

      {/* Timer Operator Quick Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onToggleTimer}
          className="p-1.5 bg-[#4CAF50] hover:bg-emerald-600 rounded-lg text-white border-2 border-[#2E7D32] shadow-[2px_2px_0px_#2E7D32] cursor-pointer"
          title="Pause/Play Timer (Spacebar)"
        >
          {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={onResetTimer}
          className="p-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg text-slate-700 border-2 border-slate-400 shadow-[2px_2px_0px_#94A3B8] cursor-pointer"
          title="Reset Timer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
