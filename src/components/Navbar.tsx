import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Maximize, Minimize, HelpCircle, RefreshCw, Settings, Music } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenGuide: () => void;
  onOpenSettings: () => void;
  onResetGame: () => void;
  levelTitle?: string;
  themeColor?: string;
}

export const Navbar = ({
  onOpenGuide,
  onOpenSettings,
  onResetGame,
  levelTitle,
  themeColor: _themeColor = '#4CAF50',
}: NavbarProps) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [isBgmOn, setIsBgmOn] = useState(sound.isBGMActive());
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    setIsBgmOn(sound.isBGMActive());
  };

  const toggleBGM = () => {
    const bgmActive = sound.toggleBGM();
    setIsBgmOn(bgmActive);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <nav className="w-full bg-[#4CAF50] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b-[6px] border-[#2E7D32] shadow-md select-none">
      {/* Title & Level Badge */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center font-black text-2xl shadow-[2px_2px_0px_#2E7D32] border-4 border-[#FFEB3B] shrink-0"
        >
          🗑️
        </div>
        <div>
          <h1 className="font-black text-base sm:text-xl uppercase leading-tight tracking-tight flex items-center gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Pahlawan Sirkular Desa
            <span className="hidden sm:inline-block px-3 py-0.5 text-[11px] font-black bg-[#FFEB3B] text-[#1B5E20] rounded-full border-2 border-[#FBC02D] shadow-[2px_2px_0px_#F9A825]">
              TEAM BATTLE SD v1.0
            </span>
          </h1>
          {levelTitle ? (
            <p className="text-xs font-bold text-yellow-200 truncate max-w-xs sm:max-w-md">
              {levelTitle}
            </p>
          ) : (
            <p className="text-xs font-bold text-white/90 hidden sm:block">
              TEMA: PENGELOLAAN SAMPAH ORGANIK & ANORGANIK
            </p>
          )}
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-2">
        {/* Guide / Hotkey Button */}
        <button
          onClick={onOpenGuide}
          className="px-3 py-2 rounded-xl bg-white text-[#1B5E20] hover:bg-yellow-100 font-extrabold text-xs flex items-center gap-1.5 border-3 border-[#2E7D32] shadow-[2px_2px_0px_#2E7D32] active:translate-y-0.5 cursor-pointer"
          title="Panduan Operator & Keyboard Hotkeys"
        >
          <HelpCircle className="w-4 h-4 text-[#4CAF50]" />
          <span className="hidden md:inline font-black">Panduan MC</span>
        </button>

        {/* Music BGM Toggle */}
        <button
          onClick={toggleBGM}
          className={`px-3 py-2 rounded-xl font-extrabold text-xs flex items-center gap-1.5 border-3 shadow-[2px_2px_0px_#2E7D32] active:translate-y-0.5 cursor-pointer ${
            isBgmOn
              ? 'bg-[#FFEB3B] text-[#1B5E20] border-[#FBC02D]'
              : 'bg-white text-slate-500 border-slate-300 hover:bg-slate-50'
          }`}
          title={isBgmOn ? 'Matikan Musik Background' : 'Putar Musik Background'}
        >
          <Music className={`w-4 h-4 ${isBgmOn ? 'animate-bounce text-[#1B5E20]' : 'text-slate-400'}`} />
          <span className="hidden sm:inline font-black">{isBgmOn ? 'Musik ON' : 'Musik OFF'}</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleSound}
          className={`p-2 rounded-xl font-black text-xs flex items-center gap-1 border-3 shadow-[2px_2px_0px_#2E7D32] active:translate-y-0.5 cursor-pointer ${
            isMuted
              ? 'bg-[#F44336] border-[#D32F2F] text-white'
              : 'bg-white border-[#2E7D32] text-[#4CAF50] hover:bg-emerald-50'
          }`}
          title={isMuted ? 'Buka Suara Audio' : 'Matikan Suara Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Fullscreen Mode */}
        <button
          onClick={toggleFullscreen}
          className="px-3 py-2 rounded-xl bg-[#2196F3] hover:bg-blue-600 text-white font-extrabold text-xs flex items-center gap-1.5 border-3 border-[#1976D2] shadow-[2px_2px_0px_#1976D2] active:translate-y-0.5 cursor-pointer"
          title="Layar Penuh Proyektor (F)"
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          <span className="hidden lg:inline font-black">Proyektor</span>
        </button>

        {/* Settings */}
        <button
          onClick={onOpenSettings}
          className="p-2 rounded-xl bg-white hover:bg-slate-100 text-[#1B5E20] font-extrabold text-xs border-3 border-[#2E7D32] shadow-[2px_2px_0px_#2E7D32] active:translate-y-0.5 cursor-pointer"
          title="Pengaturan & Google Sheets"
        >
          <Settings className="w-4 h-4" />
        </button>

        {/* Reset */}
        <button
          onClick={onResetGame}
          className="p-2 rounded-xl bg-white hover:bg-rose-50 text-rose-600 font-extrabold text-xs border-3 border-[#D32F2F] shadow-[2px_2px_0px_#D32F2F] active:translate-y-0.5 cursor-pointer"
          title="Ulangi / Setup Ulang"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

