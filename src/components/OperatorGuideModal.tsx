import { X, HelpCircle, Keyboard, Tv, Users, Sparkles } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const OperatorGuideModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border-[6px] border-[#4CAF50] rounded-[32px] max-w-2xl w-full p-6 text-slate-900 shadow-[8px_8px_0px_#2E7D32] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 border-2 border-slate-300 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b-4 border-emerald-100 pb-4 mb-4">
          <div className="p-3 bg-[#FFEB3B] text-slate-900 rounded-2xl border-2 border-[#FBC02D] shadow-[2px_2px_0px_#F9A825]">
            <HelpCircle className="w-6 h-6 text-[#1B5E20]" />
          </div>
          <div>
            <h2 className="text-xl font-black text-[#1B5E20] uppercase">
              Panduan Operator KKM & Gamemaster Kelas
            </h2>
            <p className="text-xs text-slate-600 font-bold">
              Cara Menjalankan Game Turnamen Kelompok di SD tanpa Smartphone Siswa
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-xs sm:text-sm">
          <div className="bg-[#F0F9FF] p-4 rounded-2xl border-[3px] border-[#2196F3] shadow-[3px_3px_0px_#1976D2] flex items-start gap-3">
            <Tv className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#1976D2] text-sm">1. Sambungkan ke Layar Proyektor / TV</h3>
              <p className="text-slate-800 font-bold mt-1">
                Tampilkan layar browser ini ke proyektor kelas. Tekan tombol <span className="text-[#2196F3] font-black">Proyektor (F)</span> untuk mode Fullscreen.
              </p>
            </div>
          </div>

          <div className="bg-[#F0F9FF] p-4 rounded-2xl border-[3px] border-[#4CAF50] shadow-[3px_3px_0px_#2E7D32] flex items-start gap-3">
            <Users className="w-5 h-5 text-[#4CAF50] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#1B5E20] text-sm">2. Pembagian Kelompok & Alat Menjawab</h3>
              <p className="text-slate-800 font-bold mt-1">
                Bagi siswa menjadi 3-5 kelompok. Berikan papan tulis mini / kertas jawaban A, B, C kepada setiap kelompok.
              </p>
            </div>
          </div>

          <div className="bg-[#F0F9FF] p-4 rounded-2xl border-[3px] border-[#FF9800] shadow-[3px_3px_0px_#E65100] flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#FF9800] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#E65100] text-sm">3. Alur Diskusi & Penilaian Live</h3>
              <p className="text-slate-800 font-bold mt-1">
                1. Baca soal, jalankan timer 30 detik.
                <br />
                2. Saat timer habis, instruksikan seluruh tim mengangkat jawaban fisik secara serentak.
                <br />
                3. Klik <span className="text-[#FF9800] font-black">"Tampilkan Jawaban" (Tombol A)</span>.
                <br />
                4. Klik tombol <span className="text-[#4CAF50] font-black">+10</span> pada scoreboard untuk setiap kelompok yang menjawab tepat!
              </p>
            </div>
          </div>

          {/* Keyboard Hotkeys Reference Table */}
          <div className="bg-white p-4 rounded-2xl border-[3px] border-[#FFEB3B] shadow-[4px_4px_0px_#FBC02D]">
            <h3 className="font-black text-[#1B5E20] text-sm mb-2 flex items-center gap-2 uppercase">
              <Keyboard className="w-4 h-4 text-[#FF9800]" /> Shortcut Pintas Keyboard Operator:
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">Pause / Play Timer</span>
                <kbd className="px-2 py-0.5 bg-[#FFEB3B] text-slate-900 font-black rounded border border-[#FBC02D]">Space</kbd>
              </div>
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">Buka Jawaban</span>
                <kbd className="px-2 py-0.5 bg-[#FFEB3B] text-slate-900 font-black rounded border border-[#FBC02D]">A / Enter</kbd>
              </div>
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">Soal Lanjut</span>
                <kbd className="px-2 py-0.5 bg-[#FFEB3B] text-slate-900 font-black rounded border border-[#FBC02D]">N / →</kbd>
              </div>
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">Soal Lalu</span>
                <kbd className="px-2 py-0.5 bg-[#FFEB3B] text-slate-900 font-black rounded border border-[#FBC02D]">P / ←</kbd>
              </div>
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">+10 Poin Tim 1..5</span>
                <kbd className="px-2 py-0.5 bg-[#4CAF50] text-white font-black rounded border border-[#2E7D32]">Angka 1-5</kbd>
              </div>
              <div className="bg-[#F0F9FF] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">-5 Poin Tim 1..5</span>
                <kbd className="px-2 py-0.5 bg-[#F44336] text-white font-black rounded border border-[#D32F2F]">Shift + 1-5</kbd>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#FFEB3B] hover:bg-yellow-300 text-slate-900 font-black text-sm rounded-xl border-2 border-[#FBC02D] shadow-[3px_3px_0px_#F9A825] cursor-pointer uppercase"
          >
            Mengerti & Siap Mengajar!
          </button>
        </div>
      </div>
    </div>
  );
};
