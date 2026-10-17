import React from 'react';
import { Sparkles, Heart, Gift, BookOpen, Star, Award, Compass } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confetti';
import { soundManager } from '../utils/audio';

interface HeroProps {
  onOpenLetter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLetter }) => {
  const handleShowerBlessings = () => {
    fireGoldenConfetti();
    soundManager.playCelebrationSound();
  };

  return (
    <section id="tribute" className="relative pt-12 pb-20 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#F5ECD8]/50 via-[#FAF8F5]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Elegant Date Label: Clean unboxed text with typographic separator (Zero-Pill discipline) */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest text-[#9A7232] uppercase mb-4">
              <span>9 SEPTEMBER</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span>2026</span>
              <span aria-hidden="true" className="text-[#C5A059]">·</span>
              <span className="text-[#84684E]">A SPECIAL TRIBUTE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#201811] leading-[1.12] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              Happy Birthday, <span className="gold-gradient-text">Preethi Mam</span>
            </h1>

            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-[#5C4A3A] font-medium leading-relaxed mb-6" style={{ textWrap: 'balance' }}>
              Celebrating you, the kindness you share, and the difference you make.
            </p>

            {/* Opening message card in ivory paper tone */}
            <div className="p-5 sm:p-6 rounded-xl bg-white/90 border border-[#E3D7C5] shadow-xs mb-8">
              <p className="font-editorial text-xl sm:text-2xl text-[#3D3025] italic leading-relaxed">
                “Some people make ordinary moments extraordinary. Today, this little corner of the internet is dedicated to celebrating you.”
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#8A7968]">
                <span>Honoring our cherished mentor & guide</span>
                <span className="font-display font-semibold text-[#9A7232]">Preethi Mam Tribute</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenLetter}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#9A7232] via-[#B8860B] to-[#9A7232] hover:opacity-95 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 whitespace-nowrap cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Birthday Letter</span>
              </button>

              <button
                onClick={handleShowerBlessings}
                className="px-6 py-3.5 text-sm font-semibold text-[#4A3828] bg-[#F7F2E8] hover:bg-[#EFE8D9] border border-[#DCCFBE] rounded-lg transition-colors flex items-center gap-2.5 whitespace-nowrap shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#B8860B]" />
                <span>Shower Flower Blessings</span>
              </button>
            </div>
          </div>

          {/* Right Column: Pure Ivory-and-Gold Tribute Plaque (Image removed) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-white via-[#FCF9F3] to-[#F5ECE0] border-2 border-[#D9CBB4] shadow-xl text-center">
              {/* Outer decorative gold hairline frame */}
              <div className="rounded-xl border border-[#D9CBB4]/70 p-6 sm:p-8 bg-[#FAF6EE]/50 flex flex-col items-center justify-center relative">
                
                {/* Gold emblem seal with 'P' */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FAF5EB] via-[#F3E5AB] to-[#C5A059] border-2 border-[#B8860B] flex items-center justify-center shadow-md mb-6 relative">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-dashed border-[#8C6425]/50 flex items-center justify-center">
                    <span className="font-cinzel text-3xl sm:text-4xl font-bold text-[#6D4C1B]">
                      P
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#B8860B] text-white flex items-center justify-center shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-white" />
                  </div>
                </div>

                {/* Plaque Title */}
                <div className="text-[11px] font-semibold tracking-widest text-[#9A7232] uppercase mb-1">
                  DEDICATED TO EXCELLENCE
                </div>
                <h3 className="font-display font-bold text-2xl text-[#201811] mb-2">
                  Preethi Mam
                </h3>
                <div className="text-xs text-[#705E4E] font-medium mb-6">
                  Cherished Educator · Mentor · Inspiration
                </div>

                {/* Divider ornament */}
                <div className="flex items-center gap-3 w-full max-w-[200px] mb-6">
                  <div className="h-px flex-1 bg-[#D9CBB4]" />
                  <span className="text-[#C5A059] text-xs">✦</span>
                  <div className="h-px flex-1 bg-[#D9CBB4]" />
                </div>

                {/* Plaque Inscription */}
                <p className="font-editorial text-lg sm:text-xl text-[#3E3024] italic leading-relaxed mb-6">
                  “A true teacher does not simply fill a vessel; she kindles an inextinguishable flame of curiosity and belief.”
                </p>

                {/* Footer date strip inside plaque */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#8C6527] uppercase tracking-wider">
                  <span>9 SEPTEMBER</span>
                  <span className="text-[#C5A059]">·</span>
                  <span>2026</span>
                  <span className="text-[#C5A059]">·</span>
                  <span>WITH LOVE</span>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C5A059] flex items-center justify-center shadow-sm">
                <Heart className="w-4 h-4 text-[#B8860B] fill-[#B8860B]" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C5A059] flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-[#B8860B]" />
              </div>
            </div>
          </div>
        </div>

        {/* Full-width strip below hero: Tribute Pillars */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#E8DFCFA0]">
          <div className="p-4 rounded-xl bg-white/70 border border-[#E9DFD0]">
            <div className="text-[#B8860B] mb-1">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="font-display font-bold text-lg text-[#2A2016]">Endless Patience</div>
            <div className="text-xs text-[#7A6857] mt-0.5">Every question treated with care and kindness</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E9DFD0]">
            <div className="text-[#B8860B] mb-1">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="font-display font-bold text-lg text-[#2A2016]">Inspiring Mentor</div>
            <div className="text-xs text-[#7A6857] mt-0.5">Making learning joyful, intuitive and deeply rewarding</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E9DFD0]">
            <div className="text-[#B8860B] mb-1">
              <Heart className="w-5 h-5" />
            </div>
            <div className="font-display font-bold text-lg text-[#2A2016]">A Mother's Warmth</div>
            <div className="text-xs text-[#7A6857] mt-0.5">Celebrating our smallest victories with sweet affection</div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#E9DFD0]">
            <div className="text-[#B8860B] mb-1">
              <Gift className="w-5 h-5" />
            </div>
            <div className="font-display font-bold text-lg text-[#2A2016]">Year of Radiance</div>
            <div className="text-xs text-[#7A6857] mt-0.5">Wishing you health, endless joy & fulfilled dreams in 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
};
