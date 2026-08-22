import { useState } from 'react';
import { motion } from 'motion/react';
import { Team, Level, GameSettings } from '../types';
import { defaultTeams } from '../utils/storage';
import { MIN_TEAMS, MAX_TEAMS } from '../constants';
import { AVATAR_OPTIONS } from './TeamAvatars';
import { Mascot } from './Mascots';
import { Plus, Trash2, Play, Users, Trophy, Sparkles, BookOpen, Layers, Zap, Shuffle } from 'lucide-react';

interface SetupScreenProps {
  levels: Level[];
  onStartGame: (selectedTeams: Team[], selectedLevelId: number) => void;
  savedStateExists: boolean;
  onResumeSavedGame: () => void;
  onOpenMaterial: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: GameSettings) => void;
}

export const SetupScreen = ({
  levels,
  onStartGame,
  savedStateExists,
  onResumeSavedGame,
  onOpenMaterial,
  settings,
  onUpdateSettings,
}: SetupScreenProps) => {
  const [teams, setTeams] = useState<Team[]>(defaultTeams);

  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'teams' | 'mission'>('teams');

  const addTeam = () => {
    if (teams.length >= MAX_TEAMS) return;
    const availableAvatars = AVATAR_OPTIONS.filter(
      (opt) => !teams.some((t) => t.avatar === opt.emoji)
    );
    const avatar = availableAvatars[0] || AVATAR_OPTIONS[0];

    const newTeam: Team = {
      id: String(Date.now()),
      name: `Tim ${teams.length + 1}`,
      avatar: avatar.emoji,
      score: 0,
      color: avatar.bg,
    };
    setTeams([...teams, newTeam]);
  };

  const removeTeam = (id: string) => {
    if (teams.length <= MIN_TEAMS) return; // PRD requires 3-5 teams
    setTeams(teams.filter((t) => t.id !== id));
  };

  const updateTeamName = (id: string, name: string) => {
    setTeams(teams.map((t) => (t.id === id ? { ...t, name } : t)));
  };

  const updateTeamAvatar = (id: string, emoji: string, color: string) => {
    setTeams(teams.map((t) => (t.id === id ? { ...t, avatar: emoji, color } : t)));
  };

  const handleStart = () => {
    onStartGame(teams, selectedLevelId);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] text-slate-900 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-5xl bg-white border-[6px] border-[#4CAF50] rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_#2E7D32] relative overflow-hidden">
        {/* Decorative Top Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-emerald-100 pb-6 mb-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="flex -space-x-4 overflow-hidden py-1">
              <Mascot name="Kompi" size="sm" showBadge={false} />
              <Mascot name="Kreati" size="sm" showBadge={false} />
              <Mascot name="Gizi" size="sm" showBadge={false} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-[#1B5E20] uppercase tracking-tight">
                Pahlawan Sirkular Desa
              </h1>
              <p className="text-xs md:text-sm font-bold text-slate-600">
                Team Battle Edition • Classroom Interactive Quiz Game
              </p>
            </div>
          </div>

          {savedStateExists && (
            <button
              onClick={onResumeSavedGame}
              className="px-5 py-2.5 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-xs md:text-sm rounded-2xl shadow-[4px_4px_0px_#2E7D32] border-3 border-[#2E7D32] flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-white" />
              Lanjutkan Permainan Tersimpan
            </button>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveTab('teams')}
            className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'teams'
                ? 'bg-[#FFEB3B] text-[#1B5E20] border-[3px] border-[#FBC02D] shadow-[4px_4px_0px_#F9A825] sm:scale-105'
                : 'bg-white text-slate-700 border-[3px] border-slate-300 hover:bg-slate-50 shadow-[2px_2px_0px_#CBD5E1]'
            }`}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#4CAF50]" />
            1. Atur Kelompok Siswa ({teams.length} Tim)
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'mission'
                ? 'bg-[#FFEB3B] text-[#1B5E20] border-[3px] border-[#FBC02D] shadow-[4px_4px_0px_#F9A825] sm:scale-105'
                : 'bg-white text-slate-700 border-[3px] border-slate-300 hover:bg-slate-50 shadow-[2px_2px_0px_#CBD5E1]'
            }`}
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF9800]" />
            2. Pilih Misi / Level
          </button>
        </div>

        {/* Tab Content 1: Teams Setup */}
        {activeTab === 'teams' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs md:text-sm font-bold text-slate-700">
                Pilih <span className="text-[#1B5E20] font-black">3 hingga 5 kelompok</span>. Setiap
                tim menjawab secara diskusi fisik di kelas!
              </p>
              {teams.length < MAX_TEAMS && (
                <button
                  onClick={addTeam}
                  className="px-4 py-2 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-xs rounded-xl flex items-center gap-1.5 shadow-[2px_2px_0px_#2E7D32] border-2 border-[#2E7D32] cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Kelompok
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teams.map((team, index) => (
                <div
                  key={team.id}
                  className="bg-[#F0F9FF] border-[4px] border-[#2196F3] rounded-2xl p-4 shadow-[4px_4px_0px_#1976D2] flex flex-col gap-3 relative group hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-1 bg-[#2196F3] text-white rounded-lg">
                      Kelompok #{index + 1}
                    </span>
                    {teams.length > MIN_TEAMS && (
                      <button
                        onClick={() => removeTeam(team.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-100 cursor-pointer"
                        title="Hapus Tim"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Team Name Input */}
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">
                      Nama Kelompok:
                    </label>
                    <input
                      type="text"
                      value={team.name}
                      onChange={(e) => updateTeamName(team.id, e.target.value)}
                      className="w-full bg-white border-2 border-slate-300 rounded-xl px-3 py-2 text-slate-900 font-bold text-sm focus:border-[#2196F3] outline-none"
                    />
                  </div>

                  {/* Avatar Picker */}
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">
                      Ikon Avatar Tim:
                    </label>
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                      {AVATAR_OPTIONS.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => updateTeamAvatar(team.id, opt.emoji, opt.bg)}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border-2 cursor-pointer transition-transform hover:scale-110 ${
                            team.avatar === opt.emoji
                              ? 'border-[#2196F3] bg-[#FFEB3B] scale-110 shadow-sm'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {opt.emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setActiveTab('mission')}
                className="px-8 py-3 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-base rounded-2xl shadow-[4px_4px_0px_#2E7D32] border-3 border-[#2E7D32] flex items-center gap-2 cursor-pointer"
              >
                Lanjut ke Pilih Misi →
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab Content 2: Mission Select */}
        {activeTab === 'mission' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Quick Mode & Question Count Selector for Socialization */}
            <div className="bg-[#F0F9FF] border-[3px] border-[#2196F3] rounded-2xl p-4 shadow-[4px_4px_0px_#1976D2] flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                <div className="p-2.5 bg-[#FFEB3B] text-[#1B5E20] rounded-xl border-2 border-[#FBC02D] shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-sm text-slate-900">Mode Durasi Sosialisasi:</h4>
                  <p className="text-xs font-bold text-slate-600">Pilih jumlah soal per sesi agar peserta tidak bosan.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full md:w-auto">
                {[
                  { limit: 3, label: '🚀 3 Soal (Demo ~3m)' },
                  { limit: 5, label: '⚡ 5 Soal (Singkat)' },
                  { limit: 10, label: '🎯 10 Soal (Standar)' },
                  { limit: 0, label: '🏆 Semua Soal' },
                ].map((opt) => (
                  <button
                    key={opt.limit}
                    onClick={() => onUpdateSettings({ ...settings, questionLimit: opt.limit })}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs cursor-pointer border-2 transition-transform hover:scale-105 ${
                      settings.questionLimit === opt.limit
                        ? 'bg-[#FF9800] text-white border-[#E65100] shadow-[2px_2px_0px_#E65100]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}

                <button
                  onClick={() => onUpdateSettings({ ...settings, shuffleQuestions: !settings.shuffleQuestions })}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs cursor-pointer border-2 flex items-center gap-1 transition-transform hover:scale-105 ${
                    settings.shuffleQuestions !== false
                      ? 'bg-[#4CAF50] text-white border-[#2E7D32] shadow-[2px_2px_0px_#2E7D32]'
                      : 'bg-slate-200 text-slate-600 border-slate-300'
                  }`}
                  title="Toggle Acak Soal"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  {settings.shuffleQuestions !== false ? 'Acak ON' : 'Acak OFF'}
                </button>
              </div>
            </div>

            <p className="text-xs md:text-sm font-bold text-slate-700 text-center">
              Pilih fokus materi kuis untuk sesi bertanding kelas hari ini:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {levels.map((level) => {
                const isSelected = selectedLevelId === level.level_id;
                return (
                  <div
                    key={level.level_id}
                    onClick={() => setSelectedLevelId(level.level_id)}
                    className={`cursor-pointer rounded-2xl p-5 border-[4px] transition-all relative overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#FFEB3B] border-[#FBC02D] shadow-[6px_6px_0px_#F9A825] scale-105'
                        : 'bg-white border-[#4CAF50] hover:border-[#2E7D32] shadow-[4px_4px_0px_#2E7D32]'
                    }`}
                  >
                    {/* Top Mascot Accent */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-black text-white border border-black/10 shadow-sm"
                        style={{ backgroundColor: level.theme_color }}
                      >
                        Misi #{level.level_id}
                      </span>
                      <Mascot name={level.mascot} size="sm" showBadge={false} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 leading-tight mb-2">
                        {level.theme_name}
                      </h3>
                      <p className="text-xs text-slate-700 font-bold">
                        {level.questions.length} Soal Interaktif • Maskot: {level.mascot}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t-2 border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] font-black text-[#1B5E20]">
                        {level.questions.length} Pertanyaan SD
                      </span>
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                          isSelected ? 'bg-[#4CAF50] text-white' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {isSelected ? '✓' : ''}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Continuous Marathon Option */}
            <div
              onClick={() => setSelectedLevelId(99)}
              className={`cursor-pointer rounded-2xl p-4 border-[3px] transition-all flex items-center justify-between ${
                selectedLevelId === 99
                  ? 'bg-[#FFEB3B] border-[#FBC02D] shadow-[4px_4px_0px_#F9A825]'
                  : 'bg-white border-[#2196F3] shadow-[4px_4px_0px_#1976D2] hover:bg-sky-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-[#2196F3]" />
                <div>
                  <h4 className="font-black text-sm text-slate-900">Mode Marathon (Semua 30 Soal)</h4>
                  <p className="text-xs font-bold text-slate-600">Dimainkan berurutan dari Misi 1, 2, hingga Misi 3.</p>
                </div>
              </div>
              <span className="text-xs font-black px-3 py-1 bg-[#2196F3] text-white rounded-lg shadow-sm">
                30 Soal Complete
              </span>
            </div>

            {/* Read Material & Launch Game Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenMaterial}
                className="w-full max-w-md py-4 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-[6px_6px_0px_#2E7D32] border-[4px] border-[#2E7D32] flex items-center justify-center gap-3 cursor-pointer tracking-wide"
              >
                <BookOpen className="w-6 h-6" />
                📖 BACA MATERI DULU
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="w-full max-w-md py-4 bg-[#FF9800] hover:bg-[#F57C00] text-white font-black text-xl rounded-2xl shadow-[6px_6px_0px_#E65100] border-[4px] border-[#E65100] flex items-center justify-center gap-3 cursor-pointer tracking-wide uppercase"
              >
                <Sparkles className="w-6 h-6 fill-white" />
                MULAI PERMAINAN BATTLE!
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
