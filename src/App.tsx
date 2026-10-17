import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BirthdayLetter } from './components/BirthdayLetter';
import { GalleryShowcase } from './components/GalleryShowcase';
import { VirtualCelebration } from './components/VirtualCelebration';
import { GratitudeWall } from './components/GratitudeWall';
import { FinalScene } from './components/FinalScene';
import { YouTubeBackgroundMusic } from './components/YouTubeBackgroundMusic';
import { fireGoldenConfetti } from './utils/confetti';
import { soundManager } from './utils/audio';
import { Sparkles } from 'lucide-react';

export default function App() {
  const letterRef = useRef<HTMLDivElement>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  const scrollToLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGlobalCelebrate = () => {
    fireGoldenConfetti();
    soundManager.playCelebrationSound();
    // Also start music if not playing yet
    if (!isPlayingMusic) {
      setIsPlayingMusic(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C241D]">
      {/* Background YouTube Audio Streamer */}
      <YouTubeBackgroundMusic
        isPlaying={isPlayingMusic}
        onToggle={toggleMusic}
      />

      {/* Navigation (Strict Top Bar Contract with music toggle) */}
      <Navbar
        onCelebrate={handleGlobalCelebrate}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={toggleMusic}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenLetter={scrollToLetter} />

        {/* Appreciation & Birthday Letter */}
        <div ref={letterRef}>
          <BirthdayLetter />
        </div>

        {/* Visual Storytelling Gallery Showcase */}
        <GalleryShowcase />

        {/* Virtual Cake & Candle Lighting Celebration */}
        <VirtualCelebration />

        {/* Student Gratitude & Live Wish Wall */}
        <GratitudeWall />

        {/* Final Scene */}
        <FinalScene />
      </main>

      {/* Floating Quick Celebration Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={handleGlobalCelebrate}
          className="p-3.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-[#8F6728] to-[#B8860B] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer border border-[#F3E5AB]/40"
          title="Shower Birthday Blessings"
          aria-label="Shower Birthday Blessings"
        >
          <Sparkles className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Celebrate Preethi Mam
          </span>
        </button>
      </div>
    </div>
  );
}
