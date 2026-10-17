/**
 * Web Audio API ambient chime and celebration synthesizer.
 * Completely self-contained, no external network requests or audio assets needed.
 */

class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private musicInterval: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft, beautiful bell chime note
  playChime(frequency: number, duration: number = 1.2, gainLevel: number = 0.15) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Play celebratory harp / sparkle arpeggio
  playCelebrationSound() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playChime(freq, 1.0, 0.12);
        }, idx * 75);
      });
    } catch {
      // Fail silently if audio blocked
    }
  }

  // Play a soft candle lighting sound
  playCandleLightSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      this.playChime(440, 1.5, 0.08); // A4
      setTimeout(() => this.playChime(880, 1.8, 0.06), 120); // A5
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Toggle ambient peaceful background chimes (serene pentatonic melody)
  toggleAmbientMusic(onStateChange?: (playing: boolean) => void) {
    this.initContext();
    if (this.isPlayingMusic) {
      this.stopAmbientMusic();
      onStateChange?.(false);
      return false;
    } else {
      this.startAmbientMusic();
      onStateChange?.(true);
      return true;
    }
  }

  startAmbientMusic() {
    this.initContext();
    this.isPlayingMusic = true;

    // Pentatonic calm frequencies (D major / B minor)
    const scale = [293.66, 369.99, 440.0, 587.33, 739.99, 880.0];
    let noteIndex = 0;

    const playNext = () => {
      if (!this.isPlayingMusic) return;
      const freq = scale[noteIndex % scale.length];
      this.playChime(freq, 2.5, 0.04);
      noteIndex = (noteIndex + 1 + Math.floor(Math.random() * 2)) % scale.length;
    };

    playNext();
    this.musicInterval = window.setInterval(playNext, 1800);
  }

  stopAmbientMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  getIsPlaying() {
    return this.isPlayingMusic;
  }
}

export const soundManager = new AudioSynthesizer();
