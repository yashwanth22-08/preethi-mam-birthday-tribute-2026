import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confetti';
import { soundManager } from '../utils/audio';

export const FinalScene: React.FC = () => {
  const handleFinalBlessing = () => {
    fireGoldenConfetti();
    soundManager.playCelebrationSound();
  };

  return (
    <footer className="relative pt-20 pb-16 bg-gradient-to-b from-[#FAF8F5] via-[#F4EDE0] to-[#EFE5D3] border-t border-[#DFD3C0] overflow-hidden">
      {/* Decorative gentle gold shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Decorative gold emblem */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAF5EB] to-[#F0E4CE] border-2 border-[#C5A059] mx-auto flex items-center justify-center mb-6 shadow-md">
          <Heart className="w-8 h-8 text-[#B8860B] fill-[#B8860B]" />
        </div>

        {/* Required Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201811] leading-tight mb-4" style={{ textWrap: 'balance' }}>
          Here's to a beautiful year ahead, <span className="gold-gradient-text">Preethi Mam</span>.
        </h2>

        {/* Required Supporting Message */}
        <p className="font-editorial text-xl sm:text-2xl text-[#4A3A2C] max-w-2xl mx-auto leading-relaxed mb-8 italic" style={{ textWrap: 'balance' }}>
          “May it bring you happiness, good health, meaningful moments, and countless reasons to smile.”
        </p>

        {/* Interactive Celebrate Button */}
        <div className="mb-12">
          <button
            onClick={handleFinalBlessing}
            className="px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-[#8C6425] via-[#B8860B] to-[#8C6425] hover:opacity-95 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Send 2026 Birthday Blessings</span>
          </button>
        </div>

        {/* Required Closing Line & Signature */}
        <div className="pt-8 border-t border-[#D9CBB4] max-w-xl mx-auto">
          {/* Exact required close text */}
          <div className="font-display text-lg sm:text-xl font-bold text-[#201811] tracking-wide mb-3">
            Happy Birthday, Preethi Mam · 9 September 2026
          </div>

          <div className="text-xs uppercase tracking-widest text-[#7D6B5A] mb-4">
            With immense respect, love & gratitude — From all your students
          </div>

          {/* Minimalist wax seal and initials */}
          <div className="flex items-center justify-center gap-3 text-xs text-[#8A7968]">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>Forever grateful for your guidance</span>
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
