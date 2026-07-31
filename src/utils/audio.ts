// Web Audio API Synthesizer for 100% Offline Game Audio & Sound Effects

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isBgmEnabled: boolean = true;
  private bgmInterval: number | null = null;
  private isBgmPlaying: boolean = false;
  private bgmVolume: number = 0.025; // Low volume background music

  private initContext() {
    try {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch {
      // Fallback
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBGM();
    } else if (this.isBgmEnabled) {
      this.startBGM();
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleBGM(): boolean {
    this.isBgmEnabled = !this.isBgmEnabled;
    if (this.isBgmEnabled && !this.isMuted) {
      this.startBGM();
    } else {
      this.stopBGM();
    }
    return this.isBgmEnabled;
  }

  public isBGMActive(): boolean {
    return this.isBgmPlaying && this.isBgmEnabled && !this.isMuted;
  }

  public setBGMVolume(vol: number) {
    this.bgmVolume = Math.max(0.005, Math.min(0.1, vol));
  }

  // Play Correct Answer SFX (Joyful Ding-Dong Chord)
  public playCorrect() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';

      // E5 (659.25Hz) then A5 (880Hz)
      osc1.frequency.setValueAtTime(659.25, now);
      osc1.frequency.setValueAtTime(880, now + 0.12);

      osc2.frequency.setValueAtTime(1318.5, now); // E6
      osc2.frequency.setValueAtTime(1760, now + 0.12); // A6

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.6);
      osc2.stop(now + 0.6);
    } catch {
      // Audio fallback
    }
  }

  // Play Wrong Answer SFX (Soft Buzz)
  public playWrong() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.setValueAtTime(140, now + 0.15);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Fallback
    }
  }

  // Play Timer Ticking Clock SFX
  public playTick() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Fallback
    }
  }

  // Play Point Added SFX (Rising Star Chime)
  public playStarPoint() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.25);
      });
    } catch {
      // Fallback
    }
  }

  // Play Victory Fanfare
  public playVictory() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const melody = [
        { note: 523.25, time: 0, duration: 0.15 },
        { note: 523.25, time: 0.15, duration: 0.15 },
        { note: 523.25, time: 0.30, duration: 0.15 },
        { note: 659.25, time: 0.45, duration: 0.30 },
        { note: 783.99, time: 0.75, duration: 0.30 },
        { note: 1046.50, time: 1.05, duration: 0.80 },
      ];

      melody.forEach(({ note, time, duration }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, now + time);

        gain.gain.setValueAtTime(0.2, now + time);
        gain.gain.exponentialRampToValueAtTime(0.001, now + time + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + duration);
      });
    } catch {
      // Fallback
    }
  }

  // Gentle, Soft Marimba/Acoustic Arpeggiated BGM Loop
  public startBGM() {
    if (this.isMuted || !this.isBgmEnabled || this.isBgmPlaying) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isBgmPlaying = true;

      const melodyPattern = [
        { note: 523.25, duration: 0.3 }, // C5
        { note: 659.25, duration: 0.3 }, // E5
        { note: 783.99, duration: 0.3 }, // G5
        { note: 659.25, duration: 0.3 }, // E5
        { note: 587.33, duration: 0.3 }, // D5
        { note: 493.88, duration: 0.3 }, // B4
        { note: 440.00, duration: 0.3 }, // A4
        { note: 392.00, duration: 0.3 }, // G4
        { note: 349.23, duration: 0.3 }, // F4
        { note: 440.00, duration: 0.3 }, // A4
        { note: 523.25, duration: 0.3 }, // C5
        { note: 659.25, duration: 0.3 }, // E5
        { note: 587.33, duration: 0.3 }, // D5
        { note: 493.88, duration: 0.3 }, // B4
        { note: 392.00, duration: 0.3 }, // G4
        { note: 523.25, duration: 0.3 }, // C5
      ];

      let step = 0;

      const playStep = () => {
        try {
          if (!this.isBgmPlaying || !this.ctx || this.isMuted || !this.isBgmEnabled) return;
          const current = melodyPattern[step % melodyPattern.length];
          const now = this.ctx.currentTime;

          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(current.note, now);

          gain.gain.setValueAtTime(this.bgmVolume, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + current.duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + current.duration);

          step++;
        } catch {
          // Fallback
        }
      };

      playStep();
      this.bgmInterval = window.setInterval(playStep, 380);
    } catch {
      // Fallback
    }
  }

  public stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmInterval !== null) {
      clearInterval(this.bgmInterval);
      this.bgmInterval = null;
    }
  }
}

export const sound = new SoundSystem();

