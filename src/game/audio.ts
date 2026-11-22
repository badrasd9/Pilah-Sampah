// Synthesized Web Audio API sound effects (zero external audio asset failures)

class GameAudio {
  private ctx: AudioContext | null = null;
  private muted = false;

  private getContext(): AudioContext | null {
    if (this.muted || typeof window === 'undefined') return null;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }
      return this.ctx;
    } catch {
      return null;
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
  }

  public playCorrect(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    this.playTone(ctx, 523.25, now, 0.11, 'sine', 0.14); // C5
    this.playTone(ctx, 659.25, now + 0.07, 0.16, 'sine', 0.14); // E5
  }

  public playWrong(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    this.playTone(ctx, 220, now, 0.12, 'triangle', 0.12);
    this.playTone(ctx, 185, now + 0.09, 0.16, 'triangle', 0.1);
  }

  public playBinFull(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      this.playTone(ctx, freq, now + idx * 0.08, 0.22, 'sine', 0.13);
    });
  }

  public playWin(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const fanfare = [
      { freq: 523.25, time: 0, dur: 0.14 },
      { freq: 659.25, time: 0.1, dur: 0.14 },
      { freq: 783.99, time: 0.2, dur: 0.14 },
      { freq: 1046.5, time: 0.32, dur: 0.38 },
      { freq: 783.99, time: 0.52, dur: 0.14 },
      { freq: 1046.5, time: 0.66, dur: 0.45 },
    ];
    fanfare.forEach((n) => {
      this.playTone(ctx, n.freq, now + n.time, n.dur, 'triangle', 0.13);
    });
  }

  private playTone(
    ctx: AudioContext,
    frequency: number,
    startTime: number,
    duration: number,
    type: OscillatorType,
    volume: number
  ): void {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(frequency, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + duration + 0.02);
    } catch {
      // Ignore audio scheduling errors gracefully
    }
  }
}

export const gameAudio = new GameAudio();
