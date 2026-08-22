import { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Team, Level } from '../types';
import { Mascot } from './Mascots';
import { sound } from '../utils/audio';
import { VICTORY_TITLES } from '../constants';
import { Trophy, Award, RotateCcw, ArrowRight, Download, Send } from 'lucide-react';

interface VictoryScreenProps {
  teams: Team[];
  level: Level;
  onNextMission?: () => void;
  onPlayAgain: () => void;
  webhookUrl?: string;
}

export const VictoryScreen = ({
  teams,
  level,
  onNextMission,
  onPlayAgain,
  webhookUrl,
}: VictoryScreenProps) => {
  // Sort teams by score descending
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  const winner = sortedTeams[0];
  const runnerUp = sortedTeams[1];
  const thirdPlace = sortedTeams[2];

  useEffect(() => {
    // Play Fanfare Audio
    sound.playVictory();

    // Trigger Confetti Rain
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  // Export CSV Log
  const exportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Peringkat,Nama Kelompok,Avatar,Skor']
        .concat(
          sortedTeams.map(
            (t, i) => `${i + 1},"${t.name}",${t.avatar},${t.score}`
          )
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Hasil_Battle_${level.theme_name}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Sync to Google Sheets if Webhook provided
  const syncGoogleSheets = async () => {
    if (!webhookUrl) {
      alert('Webhook URL belum diisi di Pengaturan! Anda dapat mengunduh CSV.');
      return;
    }
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', // Penting agar tidak terkena error CORS dari Google Apps Script
        headers: { 'Content-Type': 'text/plain' }, // Gunakan text/plain untuk melewati preflight CORS
        body: JSON.stringify({
          level: level.theme_name,
          timestamp: new Date().toISOString(),
          rankings: sortedTeams.map((t, idx) => ({
            rank: idx + 1,
            team: t.name,
            score: t.score,
          })),
        }),
      });
      // Karena no-cors, kita tidak bisa membaca response asli, jadi kita asumsikan berhasil
      alert('Berhasil mengirim permintaan simpan data ke Google Sheets!');
    } catch {
      alert('Gagal mengirim ke Google Sheets. Silakan gunakan Export CSV.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center font-sans overflow-x-hidden">
      <div className="w-full max-w-5xl bg-white border-[6px] border-[#4CAF50] rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_#2E7D32] relative text-center">
        {/* Celebration Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFEB3B] text-[#1B5E20] border-2 border-[#FBC02D] shadow-[2px_2px_0px_#F9A825] rounded-full font-black text-xs uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4 text-[#FF9800]" /> SELEBRASI JUARA BATTLE
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#1B5E20] uppercase tracking-tight">
            Pahlawan Sirkular Desa!
          </h1>
          <p className="text-sm md:text-base font-extrabold text-slate-700 mt-1">
            Selamat kepada seluruh kelompok atas perjuangan hebat di {level.theme_name}!
          </p>
        </motion.div>

        {/* Podium Display (1st, 2nd, 3rd) */}
        <div className="flex items-end justify-center gap-2 sm:gap-6 my-8 min-h-[260px]">
          {/* 2nd Place */}
          {runnerUp && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center flex-1 max-w-[160px]"
            >
              <div className="text-2xl sm:text-3xl mb-1">{runnerUp.avatar}</div>
              <span className="font-black text-xs sm:text-sm text-slate-800 truncate w-full text-center">
                {runnerUp.name}
              </span>
              <span className="font-black text-[#2196F3] text-sm sm:text-lg">
                {runnerUp.score} PTS
              </span>
              <div className="w-full bg-[#2196F3] border-[4px] border-[#1976D2] rounded-t-2xl h-28 sm:h-36 flex flex-col items-center justify-center shadow-[4px_4px_0px_#1976D2] mt-2 text-white">
                <span className="text-3xl font-black">2</span>
                <span className="text-[10px] font-black uppercase">JUARA 2</span>
              </div>
            </motion.div>
          )}

          {/* 1st Place (Center / Taller) */}
          {winner && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center flex-1 max-w-[200px] z-10"
            >
              <Mascot name={level.mascot} emotion="celebrate" size="md" showBadge={false} />
              <div className="text-3xl sm:text-4xl my-1">{winner.avatar}</div>
              <span className="font-black text-sm sm:text-base text-[#1B5E20] truncate w-full text-center">
                {winner.name}
              </span>
              <span className="font-black text-[#4CAF50] text-xl sm:text-2xl drop-shadow">
                {winner.score} PTS
              </span>
              <div className="w-full bg-[#FFEB3B] border-[5px] border-[#FBC02D] rounded-t-2xl h-40 sm:h-52 flex flex-col items-center justify-center shadow-[6px_6px_0px_#F9A825] mt-2 relative text-slate-950">
                <Trophy className="w-8 h-8 text-[#FF9800] mb-1" />
                <span className="text-4xl font-black text-slate-900">1</span>
                <span className="text-xs font-black text-slate-900 uppercase">JUARA UTAMA</span>
              </div>
            </motion.div>
          )}

          {/* 3rd Place */}
          {thirdPlace && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center flex-1 max-w-[160px]"
            >
              <div className="text-2xl sm:text-3xl mb-1">{thirdPlace.avatar}</div>
              <span className="font-black text-xs sm:text-sm text-slate-800 truncate w-full text-center">
                {thirdPlace.name}
              </span>
              <span className="font-black text-[#FF9800] text-sm sm:text-lg">
                {thirdPlace.score} PTS
              </span>
              <div className="w-full bg-[#FF9800] border-[4px] border-[#E65100] rounded-t-2xl h-20 sm:h-28 flex flex-col items-center justify-center shadow-[4px_4px_0px_#E65100] mt-2 text-white">
                <span className="text-3xl font-black">3</span>
                <span className="text-[10px] font-black uppercase">JUARA 3</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Full Team Ranks & Badges */}
        <div className="bg-[#F0F9FF] border-[3px] border-[#2196F3] rounded-2xl p-4 my-6 shadow-[4px_4px_0px_#1976D2]">
          <h3 className="font-black text-sm text-[#1B5E20] mb-3 text-left flex items-center gap-2 uppercase">
            <Award className="w-4 h-4 text-[#FF9800]" /> Klasemen & Gelar Pahlawan:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {sortedTeams.map((team, idx) => {
              const title = VICTORY_TITLES[idx] || VICTORY_TITLES[3];
              return (
                <div
                  key={team.id}
                  className="bg-white border-2 border-slate-300 rounded-xl p-3 flex items-center justify-between text-left shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-black text-xs px-2.5 py-0.5 bg-[#FFEB3B] text-slate-900 border border-[#FBC02D] rounded-lg">
                      #{idx + 1}
                    </span>
                    <span className="text-xl">{team.avatar}</span>
                    <div>
                      <h4 className="font-black text-xs text-slate-900">{team.name}</h4>
                      <p className="text-[10px] text-[#1B5E20] font-black">{title}</p>
                    </div>
                  </div>
                  <span className="font-black text-sm text-[#4CAF50]">{team.score} PTS</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Export & Next Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={exportCSV}
            className="px-5 py-3 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-xs sm:text-sm rounded-2xl border-[3px] border-[#2E7D32] shadow-[4px_4px_0px_#2E7D32] flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4 text-white" />
            📥 UNDUH REKAP NILAI (.CSV)
          </button>

          {webhookUrl && (
            <button
              onClick={syncGoogleSheets}
              className="px-5 py-2.5 bg-[#2196F3] hover:bg-blue-600 text-white font-black text-xs rounded-xl border-2 border-[#1976D2] shadow-[2px_2px_0px_#1976D2] flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-white" />
              Kirim ke Google Sheets
            </button>
          )}

          {onNextMission && (
            <button
              onClick={onNextMission}
              className="px-6 py-3 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-sm rounded-2xl shadow-[4px_4px_0px_#2E7D32] border-3 border-[#2E7D32] flex items-center gap-2 cursor-pointer uppercase"
            >
              Lanjut ke Misi Berikutnya <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onPlayAgain}
            className="px-6 py-3 bg-[#FF9800] hover:bg-[#F57C00] text-white font-black text-sm rounded-2xl shadow-[4px_4px_0px_#E65100] border-3 border-[#E65100] flex items-center gap-2 cursor-pointer uppercase"
          >
            <RotateCcw className="w-4 h-4" /> Mainkan Lagi
          </button>
        </div>
      </div>
    </div>
  );
};
