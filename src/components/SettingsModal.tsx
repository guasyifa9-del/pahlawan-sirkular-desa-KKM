import { useState } from 'react';
import { X, Settings, Link, Timer, Save, Music } from 'lucide-react';
import { GameSettings } from '../types';
import { sound } from '../utils/audio';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onSaveSettings: (newSettings: GameSettings) => void;
}

export const SettingsModal = ({
  isOpen,
  onClose,
  settings,
  onSaveSettings,
}: SettingsModalProps) => {
  const [form, setForm] = useState<GameSettings>(settings);
  const [bgmVol, setBgmVol] = useState<number>(0.025);

  if (!isOpen) return null;

  const handleSave = () => {
    sound.setBGMVolume(bgmVol);
    onSaveSettings(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border-[6px] border-[#4CAF50] rounded-[32px] max-w-lg w-full p-6 text-slate-900 shadow-[8px_8px_0px_#2E7D32] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 border-2 border-slate-300 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b-4 border-emerald-100 pb-4 mb-5">
          <div className="p-3 bg-[#FFEB3B] text-slate-900 rounded-2xl border-2 border-[#FBC02D] shadow-[2px_2px_0px_#F9A825]">
            <Settings className="w-6 h-6 text-[#1B5E20]" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#1B5E20] uppercase">Pengaturan Game & Suara</h2>
            <p className="text-xs text-slate-600 font-bold">
              Kustomisasi Timer, Musik BGM & Integrasi Sheets
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Question Count Limit */}
          <div>
            <label className="block text-slate-800 font-extrabold mb-1.5 flex items-center gap-2">
              <Timer className="w-4 h-4 text-[#FF9800]" />
              Jumlah Soal per Game (Mode Sosialisasi):
            </label>
            <select
              value={form.questionLimit}
              onChange={(e) => setForm({ ...form, questionLimit: Number(e.target.value) })}
              className="w-full bg-[#F0F9FF] border-[3px] border-[#FF9800] rounded-xl px-3 py-2 text-slate-900 font-black outline-none focus:border-[#E65100]"
            >
              <option value={3}>🚀 3 Soal (Demo Sosialisasi ~3 Menit - Rekomendasi)</option>
              <option value={5}>⚡ 5 Soal (Sesi Singkat ~5 Menit)</option>
              <option value={10}>🎯 10 Soal (Sesi Standar Kelas)</option>
              <option value={0}>🏆 Semua Soal (Lengkap Tanpa Batas)</option>
            </select>
          </div>

          {/* Shuffle Questions Toggle */}
          <div className="flex items-center justify-between bg-[#F0F9FF] p-3 rounded-xl border-2 border-slate-200">
            <div>
              <label className="text-slate-800 font-extrabold block text-xs sm:text-sm">
                🔀 Acak Soal Setiap Game:
              </label>
              <p className="text-[10px] text-slate-500 font-bold">
                Mengacak urutan soal secara otomatis agar game tidak membosankan.
              </p>
            </div>
            <input
              type="checkbox"
              checked={form.shuffleQuestions}
              onChange={(e) => setForm({ ...form, shuffleQuestions: e.target.checked })}
              className="w-5 h-5 accent-[#4CAF50] cursor-pointer"
            />
          </div>

          {/* Timer Duration */}
          <div>
            <label className="block text-slate-800 font-extrabold mb-1.5 flex items-center gap-2">
              <Timer className="w-4 h-4 text-[#2196F3]" />
              Durasi Timer per Soal (Detik):
            </label>
            <select
              value={form.timerDuration}
              onChange={(e) => setForm({ ...form, timerDuration: Number(e.target.value) })}
              className="w-full bg-[#F0F9FF] border-[3px] border-[#2196F3] rounded-xl px-3 py-2 text-slate-900 font-black outline-none focus:border-[#1976D2]"
            >
              <option value={15}>15 Detik (Cepat & Menantang)</option>
              <option value={30}>30 Detik (Standar Rekomendasi SD)</option>
              <option value={45}>45 Detik (Diskusi Lebih Lama)</option>
              <option value={60}>60 Detik (1 Menit)</option>
            </select>
          </div>

          {/* BGM Volume Level */}
          <div>
            <label className="block text-slate-800 font-extrabold mb-1.5 flex items-center gap-2">
              <Music className="w-4 h-4 text-[#4CAF50]" />
              Volume Musik Background (BGM):
            </label>
            <select
              value={bgmVol}
              onChange={(e) => {
                const vol = Number(e.target.value);
                setBgmVol(vol);
                sound.setBGMVolume(vol);
              }}
              className="w-full bg-[#F0F9FF] border-[3px] border-[#4CAF50] rounded-xl px-3 py-2 text-slate-900 font-black outline-none focus:border-[#2E7D32]"
            >
              <option value={0.015}>Sangat Pelan (Sangat Soft)</option>
              <option value={0.025}>Pelan Standar (Pas untuk Kelas SD)</option>
              <option value={0.05}>Sedang (Jelas & Ceria)</option>
              <option value={0.08}>Keras (Antusias & Semangat)</option>
            </select>
            <p className="text-[10px] text-slate-500 font-bold mt-1">
              Musik instrumen lembut ceria agar anak-anak tidak bosan dan tetap fokus berdiskusi.
            </p>
          </div>

          {/* Google Sheets Webhook URL */}
          <div>
            <label className="block text-slate-800 font-extrabold mb-1.5 flex items-center gap-2">
              <Link className="w-4 h-4 text-[#2196F3]" />
              Google Sheets Webhook AppScript URL (Opsional):
            </label>
            <input
              type="url"
              placeholder="https://script.google.com/macros/s/.../exec"
              value={form.googleSheetsWebhookUrl}
              onChange={(e) => setForm({ ...form, googleSheetsWebhookUrl: e.target.value })}
              className="w-full bg-[#F0F9FF] border-[3px] border-[#2196F3] rounded-xl px-3 py-2 text-slate-900 font-mono text-xs outline-none focus:border-[#1976D2]"
            />
            <p className="text-[10px] text-slate-500 font-bold mt-1">
              Masukkan URL Apps Script Google Sheet untuk otomatis menyimpan skor nilai seluruh kelompok seusai game.
            </p>
          </div>

          {/* Google Sheets Questions Data URL */}
          <div>
            <label className="block text-slate-800 font-extrabold mb-1.5 flex items-center gap-2">
              <Link className="w-4 h-4 text-[#4CAF50]" />
              URL Google Sheets Soal Kuis (Format CSV):
            </label>
            <input
              type="url"
              placeholder="https://docs.google.com/spreadsheets/d/.../pub?output=csv"
              value={form.googleSheetsQuestionsUrl || ''}
              onChange={(e) => setForm({ ...form, googleSheetsQuestionsUrl: e.target.value })}
              className="w-full bg-[#F0F9FF] border-[3px] border-[#4CAF50] rounded-xl px-3 py-2 text-slate-900 font-mono text-xs outline-none focus:border-[#2E7D32]"
            />
            <p className="text-[10px] text-slate-500 font-bold mt-1">
              (Opsional) Masukkan URL &quot;Publish to the web&quot; berformat CSV dari Google Sheets untuk mengubah soal kuis secara dinamis.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 pt-4 border-t-2 border-slate-200">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs rounded-xl border-2 border-slate-300 cursor-pointer"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-xs rounded-xl border-2 border-[#2E7D32] shadow-[3px_3px_0px_#2E7D32] flex items-center gap-1.5 cursor-pointer uppercase"
          >
            <Save className="w-4 h-4" /> Simpan Pengaturan
          </button>
        </div>
      </div>
    </div>
  );
};

