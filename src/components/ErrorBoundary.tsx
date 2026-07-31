import { Component, ErrorInfo, ReactNode, PropsWithChildren } from 'react';
import { RotateCcw } from 'lucide-react';
import { GAME_STATE_KEY } from '../utils/storage';

export interface Props {
  children?: ReactNode;
}

export interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  declare props: Readonly<PropsWithChildren<Props>>;

  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error in Game:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem(GAME_STATE_KEY);
    } catch {
      // Fallback
    }
    window.location.reload();
  };

  public render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen bg-[#F0F9FF] text-slate-900 flex items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white border-[5px] border-[#4CAF50] rounded-3xl p-6 shadow-[8px_8px_0px_#2E7D32] text-center flex flex-col items-center gap-4">
            <span className="text-5xl">🌱</span>
            <h2 className="text-2xl font-black text-[#1B5E20]">Oops, Terjadi Kendala Kecil</h2>
            <p className="text-xs font-bold text-slate-600 leading-relaxed">
              Game mengalami sedikit kendala sistem. Jangan khawatir, poin dan kelompok Anda tetap aman!
            </p>

            {this.state.error && (
              <div className="w-full p-2.5 bg-rose-50 border border-rose-300 rounded-xl text-[11px] font-mono text-rose-800 text-left overflow-x-auto max-h-24">
                <strong>Error:</strong> {this.state.error.message || String(this.state.error)}
              </div>
            )}

            <button
              onClick={this.handleReset}
              className="w-full py-3.5 bg-[#4CAF50] hover:bg-emerald-600 text-white font-black text-sm rounded-2xl shadow-[4px_4px_0px_#2E7D32] border-3 border-[#2E7D32] flex items-center justify-center gap-2 cursor-pointer uppercase"
            >
              <RotateCcw className="w-4 h-4" /> Reset & Muat Ulang Permainan
            </button>
          </div>
        </div>
      );
    }

    return children ?? null;
  }
}
