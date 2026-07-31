// Web Speech API Voice Synthesis for Educational Message Narration

class SpeechSystem {
  private synth: SpeechSynthesis | null = null;
  private isSpeaking: boolean = false;
  private onStateChangeCallbacks: Set<(speaking: boolean) => void> = new Set();
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer Indonesian voice
    const idVoice = voices.find(
      (v) => v.lang.startsWith('id') || v.lang.includes('ID') || v.name.toLowerCase().includes('indonesia')
    );
    if (idVoice) {
      this.voice = idVoice;
    } else {
      // Jika tidak ditemukan, jangan dipaksa pakai suara pertama (biasanya Inggris).
      // Biarkan browser menggunakan pengaturan bawaannya dari utterance.lang = 'id-ID'.
      this.voice = null;
    }
  }

  public subscribe(callback: (speaking: boolean) => void) {
    this.onStateChangeCallbacks.add(callback);
    callback(this.isSpeaking);
    return () => {
      this.onStateChangeCallbacks.delete(callback);
    };
  }

  private notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.onStateChangeCallbacks.forEach((cb) => cb(speaking));
  }

  public speak(text: string, onEndCallback?: () => void) {
    if (!this.synth) return;

    try {
      // Stop any existing speech
      this.synth.cancel();

      // Clean text (remove emojis for cleaner TTS reading)
      const cleanedText = text
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[🚨⚠️🌱🍃♻️💡🎉👦🗑️🎨🥬]/g, '')
        .trim();

      if (!cleanedText) return;

      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utterance.lang = 'id-ID';
      if (this.voice) {
        utterance.voice = this.voice;
      }
      utterance.rate = 0.95; // Friendly, clear classroom pace
      utterance.pitch = 1.15; // Friendly animated mascot voice tone

      utterance.onstart = () => {
        this.notify(true);
      };

      utterance.onend = () => {
        this.notify(false);
        if (onEndCallback) onEndCallback();
      };

      utterance.onerror = () => {
        this.notify(false);
      };

      this.synth.speak(utterance);
    } catch {
      this.notify(false);
    }
  }

  public stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // Fallback
      }
      this.notify(false);
    }
  }

  public getSpeakingState(): boolean {
    return this.isSpeaking;
  }
}

export const speech = new SpeechSystem();
