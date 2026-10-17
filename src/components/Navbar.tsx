import React from 'react';
import { Sparkles, Volume2, VolumeX } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confetti';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onCelebrate: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onCelebrate,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const handleCelebrateClick = () => {
    fireGoldenConfetti();
    soundManager.playCelebrationSound();
    onCelebrate();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E6DDCE]">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a
          href="#tribute"
          className="font-display text-xl font-bold tracking-tight text-[#2D241E] hover:text-[#9A7232] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="text-[#C5A059]">✦</span>
          <span>Preethi Mam</span>
          <span className="text-xs font-normal text-[#8A7968] tracking-widest uppercase">· 2026</span>
        </a>

        {/* Zone 2: 4–5 nav links, 1–2 word labels, single-line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B5A4B]">
          <a
            href="#tribute"
            className="hover:text-[#2D241E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
          >
            Tribute
          </a>
          <a
            href="#letter"
            className="hover:text-[#2D241E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
          >
            Letter
          </a>
          <a
            href="#gallery"
            className="hover:text-[#2D241E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
          >
            Memories
          </a>
          <a
            href="#celebration"
            className="hover:text-[#2D241E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
          >
            Cake & Wishes
          </a>
          <a
            href="#gratitude"
            className="hover:text-[#2D241E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
          >
            Gratitude Wall
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleMusic}
            title={isPlayingMusic ? "Pause Background Music" : "Play Background Music"}
            className="p-2.5 rounded-full border border-[#D9CEBC] bg-white text-[#705E4E] hover:text-[#2D241E] hover:border-[#C5A059] transition-colors shrink-0 shadow-xs cursor-pointer"
            aria-label={isPlayingMusic ? "Pause background music" : "Play background music"}
          >
            {isPlayingMusic ? <Volume2 className="w-4 h-4 text-[#B8860B]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          
          <button
            onClick={handleCelebrateClick}
            className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-[#9A7232] to-[#B8860B] hover:from-[#846028] hover:to-[#A27407] rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebrate Mam</span>
          </button>
        </div>
      </div>
    </header>
  );
};
