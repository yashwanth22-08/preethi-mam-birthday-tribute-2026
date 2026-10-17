import React, { useState } from 'react';
import { Flame, Sparkles, Heart, Gift, Award, Smile } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { fireCandleWishConfetti, fireGoldenConfetti } from '../utils/confetti';

export const VirtualCelebration: React.FC = () => {
  const [litCandles, setLitCandles] = useState<boolean[]>([true, true, true]);
  const [cakeCut, setCakeCut] = useState(false);
  const [activeBlessing, setActiveBlessing] = useState<string>(
    'May your 2026 year ahead be blessed with radiant health, joy, and peace!'
  );

  const candleWishes = [
    'Candle 1: For boundless health, energy, and radiant joy.',
    'Candle 2: For peace of mind, happiness, and fulfilled dreams.',
    'Candle 3: For the continued success and flourishing of every student you inspire.',
  ];

  const handleCandleClick = (index: number) => {
    const updated = [...litCandles];
    updated[index] = !updated[index];
    setLitCandles(updated);

    if (updated[index]) {
      soundManager.playCandleLightSound();
      fireCandleWishConfetti();
      setActiveBlessing(candleWishes[index]);
    } else {
      soundManager.playChime(350, 0.5, 0.05);
    }
  };

  const handleCutCake = () => {
    setCakeCut(true);
    soundManager.playCelebrationSound();
    fireGoldenConfetti();
    setActiveBlessing('“The sweetness you bring to our education is the greatest gift of all. Happy Birthday, Preethi Mam!”');
  };

  const handleResetCake = () => {
    setLitCandles([true, true, true]);
    setCakeCut(false);
    setActiveBlessing('May your 2026 year ahead be blessed with radiant health, joy, and peace!');
  };

  return (
    <section id="celebration" className="py-16 md:py-24 bg-[#F8F4EC]/60 border-y border-[#E6DDCE]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#9A7232] uppercase mb-2">
            <span>INTERACTIVE TRIBUTE</span>
            <span aria-hidden="true">·</span>
            <span>CELEBRATING PREETHI MAM</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201811]">
            Light the Candles & Make a Wish
          </h2>
          <p className="mt-2 text-[#6E5D4E] text-base max-w-xl mx-auto">
            Click on each candle to rekindle your personal blessing, or share a sweet virtual slice for 2026.
          </p>
        </div>

        {/* Cake and Candles Showcase Stage */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E0D3BF] shadow-xl text-center relative overflow-hidden">
          {/* Subtle gold ribbon top edge */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B8860B]" />

          {/* Interactive Candles Row */}
          <div className="flex justify-center items-end gap-10 sm:gap-14 mb-4 pt-4">
            {[0, 1, 2].map((idx) => {
              const isLit = litCandles[idx];
              return (
                <div
                  key={idx}
                  onClick={() => handleCandleClick(idx)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Flame or Sparkle */}
                  <div className="h-10 flex items-center justify-center">
                    {isLit ? (
                      <div className="candle-flame text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">
                        <Flame className="w-7 h-7 fill-amber-400 stroke-amber-600" />
                      </div>
                    ) : (
                      <div className="text-[#A39382] group-hover:text-amber-400 transition-colors">
                        <Flame className="w-5 h-5 opacity-40" />
                      </div>
                    )}
                  </div>

                  {/* Candle Wick */}
                  <div className="w-0.5 h-2 bg-[#4A3D31]" />

                  {/* Candle Body */}
                  <div className="w-5 h-16 sm:h-20 rounded-t-sm bg-gradient-to-r from-[#FFF5DC] via-[#D4AF37] to-[#A67C1E] border border-[#B8860B] shadow-sm relative overflow-hidden">
                    {/* Candle wax swirl pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-black" />
                  </div>

                  <span className="text-[11px] font-medium text-[#7A6857] mt-2 group-hover:text-[#201811] transition-colors">
                    {isLit ? 'Lit ✨' : 'Click to Light'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Birthday Cake Tier 1 & 2 Illustration */}
          <div className="relative mx-auto w-64 sm:w-80">
            {/* Top Frosting Layer */}
            <div className="h-12 bg-gradient-to-r from-[#4A2E18] via-[#5C381E] to-[#432915] rounded-t-2xl border-x border-t border-[#341F10] shadow-md flex items-center justify-center relative">
              <span className="font-display font-semibold text-xs tracking-wider text-[#F7E7CE] px-3">
                Preethi Mam · 9 Sept 2026
              </span>
            </div>

            {/* Middle decorative cream ribbon */}
            <div className="h-3 bg-[#E8D4B4] border-x border-[#CBB38E] flex justify-around items-center px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
            </div>

            {/* Bottom Cake Layer */}
            <div className="h-16 bg-gradient-to-r from-[#3D2513] via-[#4D3019] to-[#362111] rounded-b-xl border-x border-b border-[#2A180B] shadow-lg flex items-center justify-center">
              <span className="text-xs text-[#E3D3BE] font-medium">
                {cakeCut ? 'Cake Sliced & Shared with Love 🍰' : 'Pure Sweetness & Joy'}
              </span>
            </div>

            {/* Cake Stand / Plate */}
            <div className="w-72 sm:w-96 -ml-4 sm:-ml-8 h-4 bg-gradient-to-r from-[#E3D7C5] via-white to-[#D9CCB8] rounded-full shadow-md mt-1 border border-[#C5B7A0]" />
          </div>

          {/* Active Wish / Blessing Announcement */}
          <div className="mt-8 p-4 rounded-xl bg-[#FAF6EE] border border-[#E3D5C0] min-h-[70px] flex items-center justify-center">
            <p className="font-editorial text-lg text-[#3D3025] italic leading-relaxed">
              {activeBlessing}
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            {!cakeCut ? (
              <button
                onClick={handleCutCake}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9A7232] to-[#B8860B] hover:opacity-95 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <Gift className="w-4 h-4" />
                <span>Cut Birthday Slice for Preethi Mam</span>
              </button>
            ) : (
              <button
                onClick={handleResetCake}
                className="px-5 py-2.5 text-xs font-semibold text-[#5A4736] bg-[#EFE6D8] hover:bg-[#E5DAC8] rounded-lg transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#9A7232]" />
                <span>Celebrate Again</span>
              </button>
            )}

            <button
              onClick={() => {
                fireGoldenConfetti();
                soundManager.playCelebrationSound();
              }}
              className="px-5 py-2.5 text-xs font-semibold text-[#4A392B] bg-white border border-[#D9CDB8] hover:bg-[#FAF6EE] rounded-lg shadow-xs transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-[#B8860B] fill-[#B8860B]" />
              <span>Send Heartfelt Love</span>
            </button>
          </div>
        </div>

        {/* Teacher Hall of Impact Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E4D9C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4EA] border border-[#DECFBA] flex items-center justify-center text-[#9A7232] mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-display font-semibold text-base text-[#201811] mb-1">
              Wisdom & Clarity
            </h4>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              Transforming complex equations and daunting topics into simple, memorable insights that last a lifetime.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E4D9C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4EA] border border-[#DECFBA] flex items-center justify-center text-[#9A7232] mb-3">
              <Smile className="w-5 h-5" />
            </div>
            <h4 className="font-display font-semibold text-base text-[#201811] mb-1">
              Warmth & Encouragement
            </h4>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              Always welcoming every student with a cheerful smile and never letting anyone feel left behind or unheard.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E4D9C8] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF4EA] border border-[#DECFBA] flex items-center justify-center text-[#9A7232] mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-display font-semibold text-base text-[#201811] mb-1">
              Unconditional Mentorship
            </h4>
            <p className="text-xs text-[#6E5D4E] leading-relaxed">
              More than a teacher, you have been our guiding compass who shows us how to navigate both exams and life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
