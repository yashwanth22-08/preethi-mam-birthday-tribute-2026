import React, { useState } from 'react';
import { Mail, Check, Copy, Sparkles, Feather } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confetti';
import { soundManager } from '../utils/audio';

export const BirthdayLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [highlightKeyPhrases, setHighlightKeyPhrases] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      fireGoldenConfetti();
      soundManager.playCelebrationSound();
    }
    setIsOpen(!isOpen);
  };

  const letterText = `Dear Preethi Mam,

On this special day, 9 September 2026, we want to pause and celebrate the incredible soul that you are.

Teaching is often called a noble profession, but in your hands, it has always been something much deeper — an act of pure kindness, endless patience, and steady encouragement. In a world that often rushes ahead, you have always taken the time to listen, to understand our doubts, and to see potential in us even before we could see it in ourselves.

Your classroom has never been merely about textbooks or exam marks; it has been a sanctuary of warmth, where questions are welcomed with a gentle smile, where mistakes are transformed into wisdom, and where every student feels valued. The care you pour into each lesson, the cheerful energy you bring into every room, and the way you celebrate our small steps leave an indelible mark on our lives.

As you celebrate your birthday in 2026, our hearts overflow with respect, admiration, and gratitude. We pray that this year brings you abundant peace, good health, endless smiles, and the profound fulfillment of seeing your hard work reflected in the dreams you nurture every single day.

Thank you for being our guiding compass, our inspiring teacher, and one of the kindest mentors we will ever know.

Wishing you the happiest and most blessed Birthday, Preethi Mam!

With the deepest respect and heartfelt wishes,
Your Devoted Students · 9 September 2026`;

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="letter" className="py-16 md:py-24 bg-[#F4EFE6]/50 border-y border-[#E6DDCE]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading with clean unboxed metadata */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#9A7232] uppercase mb-2">
            <span>A TRIBUTE FROM OUR HEARTS</span>
            <span aria-hidden="true">·</span>
            <span>SEPTEMBER 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201811]">
            A Letter of Gratitude & Admiration
          </h2>
          <p className="mt-3 text-[#6E5D4E] text-base max-w-xl mx-auto">
            Words penned with love and immense respect for the teacher who illuminates our path.
          </p>
        </div>

        {/* Envelope / Letter Interactive Container */}
        <div className="relative">
          {!isOpen ? (
            /* Closed Envelope View */
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-white to-[#F8F4EC] border-2 border-[#D9CDB8] shadow-lg text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EB] border-2 border-[#C5A059] mx-auto flex items-center justify-center mb-6 shadow-inner">
                <Mail className="w-8 h-8 text-[#9A7232]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#2B2117] mb-2">
                An Envelope for Preethi Mam
              </h3>
              <p className="text-sm text-[#736353] mb-6">
                Sealed with immense respect and warm wishes for your 2026 birthday.
              </p>
              <button
                onClick={handleToggle}
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#9A7232] to-[#B8860B] hover:opacity-95 rounded-lg shadow-sm transition-all inline-flex items-center gap-2"
              >
                <Feather className="w-4 h-4" />
                <span>Open & Read Letter</span>
              </button>
            </div>
          ) : (
            /* Open Parchment Letter View */
            <div className="parchment-card rounded-2xl p-6 sm:p-10 md:p-12 shadow-xl relative border-2 border-[#D9CDB8]">
              {/* Gold foil header banner inside letter */}
              <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-[#E3D7C5] gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9A7232] text-white font-cinzel font-bold text-lg flex items-center justify-center shadow-xs">
                    P
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-[#2A2016]">To Preethi Mam</div>
                    <div className="text-xs text-[#8A7968]">9 September 2026 · Birthday Dedication</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHighlightKeyPhrases(!highlightKeyPhrases)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                      highlightKeyPhrases
                        ? 'bg-[#EBDDC2] text-[#63481E] border-[#C5A059]'
                        : 'bg-white text-[#6E5D4E] border-[#D9CEBC] hover:bg-[#F9F6F0]'
                    }`}
                  >
                    {highlightKeyPhrases ? 'Highlight On ✨' : 'Highlight Thoughts'}
                  </button>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-white border border-[#D9CEBC] text-[#6E5D4E] hover:text-[#2A2016] transition-colors"
                    title="Copy letter"
                    aria-label="Copy letter text"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Letter Prose */}
              <div className="font-editorial text-lg sm:text-xl text-[#2F251B] leading-relaxed space-y-6">
                <p className="font-display text-2xl font-semibold text-[#1F1710]">
                  Dearest Preethi Mam,
                </p>

                <p>
                  On this special day, <strong className="font-semibold text-[#9A7232]">9 September 2026</strong>, we pause to celebrate the incredible soul that you are.
                </p>

                <p>
                  Teaching is often described as a noble profession, but in your presence, it becomes something infinitely deeper —{' '}
                  <span className={highlightKeyPhrases ? 'bg-[#FBE8B5] px-1 py-0.5 rounded-sm transition-all' : ''}>
                    an act of pure kindness, endless patience, and constant encouragement
                  </span>
                  . In a world that so often rushes ahead, you have always paused to listen to our doubts, gently unravel complexities, and see potential in each of us before we could even recognize it in ourselves.
                </p>

                <p>
                  Your classroom has never been simply about formulas, concepts, or exam scores;{' '}
                  <span className={highlightKeyPhrases ? 'bg-[#FBE8B5] px-1 py-0.5 rounded-sm transition-all' : ''}>
                    it has been a place of genuine warmth where questions are welcomed with a smile
                  </span>
                  , where mistakes are transformed into stepping stones, and where every student feels valued. The personal attention you pour into every session and the joyful laughter you bring into our lives are memories we carry like treasures.
                </p>

                <p>
                  As you celebrate your birthday in 2026, our hearts overflow with respect, admiration, and gratitude. We pray that this new year of your life brings you abundant peace, good health, endless smiles, and the deep satisfaction of knowing that the seeds of knowledge you sow are blooming brightly across the world.
                </p>

                <p>
                  Thank you for being our guiding light, our inspiring teacher, and one of the kindest mentors we will ever know.
                </p>

                <p className="pt-2 font-display text-xl text-[#9A7232] font-bold">
                  Wishing you the happiest and most blessed Birthday, Preethi Mam!
                </p>
              </div>

              {/* Letter Signature and Wax Seal Footer */}
              <div className="mt-10 pt-6 border-t border-[#E3D7C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#8A7968]">Penned with admiration by</div>
                  <div className="font-display font-semibold text-lg text-[#201811] mt-0.5">
                    Your Devoted Students
                  </div>
                  <div className="text-xs text-[#9A7232]">9 September · 2026 Birthday Celebration</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8860B] to-[#8B6508] text-white flex items-center justify-center font-cinzel text-xl font-bold shadow-md border-2 border-[#FAF5EB]">
                    P
                  </div>
                  <div className="text-xs text-[#7A6857]">
                    <span className="font-semibold text-[#201811] block">Preethi Mam</span>
                    <span>Teacher · Mentor · Guide</span>
                  </div>
                </div>
              </div>

              {/* Close letter button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleToggle}
                  className="text-xs text-[#8A7968] hover:text-[#201811] underline transition-colors"
                >
                  Fold letter back into envelope
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
