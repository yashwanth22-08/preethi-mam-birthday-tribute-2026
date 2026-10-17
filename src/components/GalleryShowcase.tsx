import React, { useState } from 'react';
import { Heart, Sparkles, Cake, Smile, BookOpen, Star, Award, Compass, MessageSquareQuote } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { fireGoldenConfetti } from '../utils/confetti';

interface TributeChapter {
  id: string;
  chapterNumber: string;
  title: string;
  subtitle: string;
  studentFocus: string;
  description: string;
  reflection: string;
  category: 'cake' | 'smiles' | 'memories';
  icon: React.ReactNode;
}

const TRIBUTE_CHAPTERS: TributeChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: '01',
    title: 'The First Sweet Cake Bite',
    subtitle: 'Celebrating with Pure Affection',
    studentFocus: 'Dedicated to Student in Pink ("Mom’s Lucky Charm")',
    description: 'Preethi Mam lovingly offering the first bite of rich birthday chocolate cake, exemplifying a bond that goes far beyond teacher and student.',
    reflection: '“Her presence turns every ordinary coaching class into a warm, safe sanctuary of learning.”',
    category: 'cake',
    icon: <Cake className="w-6 h-6 text-[#9A7232]" />,
  },
  {
    id: 'chapter-2',
    chapterNumber: '02',
    title: 'Classroom Radiance & Shared Laughter',
    subtitle: 'Smiles Amidst Study Notes & Equations',
    studentFocus: 'Dedicated to Student in Sage Green',
    description: 'Amidst camera tripods, textbooks, and physics notes, spontaneous bursts of joyful laughter echoed as Preethi Mam celebrated her 2026 birthday.',
    reflection: '“Under her patient guidance, daunting equations transformed into adventures of discovery.”',
    category: 'smiles',
    icon: <Smile className="w-6 h-6 text-[#9A7232]" />,
  },
  {
    id: 'chapter-3',
    chapterNumber: '03',
    title: 'Warm Mentorship & Steady Guidance',
    subtitle: 'Believing in Us at Every Step',
    studentFocus: 'Dedicated to Student in Blue & Grey',
    description: 'A genuine moment of shared sweetness and encouragement, reflecting her constant belief in every student’s hidden potential.',
    reflection: '“Thank you, Mam, for seeing our strengths before we even discovered them ourselves.”',
    category: 'memories',
    icon: <Compass className="w-6 h-6 text-[#9A7232]" />,
  },
  {
    id: 'chapter-4',
    chapterNumber: '04',
    title: 'Kind Encouragement & Character',
    subtitle: 'Teaching Life Lessons Beyond Exams',
    studentFocus: 'Dedicated to Student in White ("Step Up / Kind / Play")',
    description: 'Celebrating the core values Preethi Mam embodies daily: compassion, perseverance, and genuine humility.',
    reflection: '“Your words of encouragement echo in our minds and guide us through every challenge.”',
    category: 'cake',
    icon: <Award className="w-6 h-6 text-[#9A7232]" />,
  },
  {
    id: 'chapter-5',
    chapterNumber: '05',
    title: 'Unfiltered Laughter & Heartfelt Joy',
    subtitle: 'A Room Filled with Celebration',
    studentFocus: 'Dedicated to Student in White Formal Shirt',
    description: 'Hearty laughter shared across the table as Preethi Mam celebrated her special day with her batch, surrounded by sheer happiness.',
    reflection: '“The best teachers don’t just teach from books; they teach straight from their hearts.”',
    category: 'smiles',
    icon: <Star className="w-6 h-6 text-[#9A7232]" />,
  },
  {
    id: 'chapter-6',
    chapterNumber: '06',
    title: 'Gentle Care & Sweetest Blessings',
    subtitle: 'A Mother’s Heart for Every Student',
    studentFocus: 'Dedicated to Student in Black ("Spring")',
    description: 'Closing the celebration circle with personal blessings, warm smiles, and everlasting memories carved in sweetness.',
    reflection: '“May your 2026 year ahead be as abundant and beautiful as the wisdom you gift to us.”',
    category: 'memories',
    icon: <Heart className="w-6 h-6 text-[#9A7232]" />,
  },
];

export const GalleryShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cake' | 'smiles' | 'memories'>('all');
  const [selectedChapter, setSelectedChapter] = useState<TributeChapter | null>(null);

  const filteredChapters = filter === 'all'
    ? TRIBUTE_CHAPTERS
    : TRIBUTE_CHAPTERS.filter((item) => item.category === filter);

  const handleCardClick = (chapter: TributeChapter) => {
    soundManager.playChime(660, 0.4, 0.08);
    setSelectedChapter(chapter);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with zero-pill typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E8DFCFA0] gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#9A7232] uppercase mb-2">
              <span>CHRONICLES OF CELEBRATION</span>
              <span aria-hidden="true">·</span>
              <span>9 SEPTEMBER 2026</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201811]">
              Cherished Celebration Moments
            </h2>
            <p className="mt-2 text-[#6E5D4E] text-base max-w-xl">
              Honoring Preethi Mam sharing birthday cake, radiant laughter, and heartfelt blessings with each of her students.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#F1E8DC] rounded-xl self-start md:self-auto border border-[#E0D4C2]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-[#2A2016] shadow-xs'
                  : 'text-[#6E5D4E] hover:text-[#2A2016]'
              }`}
            >
              All Moments
            </button>
            <button
              onClick={() => setFilter('cake')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'cake'
                  ? 'bg-white text-[#2A2016] shadow-xs'
                  : 'text-[#6E5D4E] hover:text-[#2A2016]'
              }`}
            >
              Cake Celebrations
            </button>
            <button
              onClick={() => setFilter('smiles')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'smiles'
                  ? 'bg-white text-[#2A2016] shadow-xs'
                  : 'text-[#6E5D4E] hover:text-[#2A2016]'
              }`}
            >
              Classroom Smiles
            </button>
            <button
              onClick={() => setFilter('memories')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'memories'
                  ? 'bg-white text-[#2A2016] shadow-xs'
                  : 'text-[#6E5D4E] hover:text-[#2A2016]'
              }`}
            >
              Student Memories
            </button>
          </div>
        </div>

        {/* Pure Typographic & Emblem Cards Grid (Zero Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => handleCardClick(chapter)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E4D9C8] hover:border-[#C5A059] p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top subtle gold header line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#C5A059] transition-colors" />

              <div>
                {/* Emblem & Index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EB] to-[#F3E8D3] border border-[#DFCDB5] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {chapter.icon}
                  </div>
                  <span className="font-cinzel text-xs font-bold text-[#B8860B] tracking-widest">
                    MOMENT {chapter.chapterNumber}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-semibold text-lg text-[#201811] group-hover:text-[#9A7232] transition-colors mb-1">
                  {chapter.title}
                </h3>
                <div className="text-xs text-[#8F6A32] font-medium mb-3">
                  {chapter.studentFocus}
                </div>
                <p className="text-xs text-[#6E5D4E] leading-relaxed mb-6">
                  {chapter.description}
                </p>
              </div>

              {/* Card Footer Quote */}
              <div className="pt-4 border-t border-[#F2EAE0]">
                <div className="flex items-start gap-2">
                  <MessageSquareQuote className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="font-editorial text-sm italic text-[#4A3B2E] leading-snug">
                    {chapter.reflection}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-[#8A7968]">
                  <span>Preethi Mam Tribute</span>
                  <span className="font-mono text-[#9A7232] font-semibold">9 Sept 2026</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Storytelling Quote Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#F9F5EC] via-[#F4EFE6] to-[#FAF6EE] border border-[#E3D7C5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EFE3CF] border border-[#C5A059] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#9A7232]" />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-[#241B12]">
                A Tribute of Endless Respect & Gratitude
              </div>
              <p className="text-xs sm:text-sm text-[#6E5D4E] mt-0.5">
                Each moment celebrates Preethi Mam's dedication, genuine warmth, and the indelible mark she leaves on our lives.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold tracking-wider text-[#9A7232] uppercase whitespace-nowrap">
            9 SEPTEMBER 2026 · FOREVER CHERISHED
          </div>
        </div>

        {/* Detailed Modal on Card Click */}
        {selectedChapter && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedChapter(null)}
          >
            <div
              className="relative max-w-xl w-full bg-[#FAF8F5] rounded-2xl border-2 border-[#D9CDB8] p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DDCE] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E6] border border-[#C5A059] flex items-center justify-center text-[#9A7232]">
                    {selectedChapter.icon}
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-[#201811]">
                      {selectedChapter.title}
                    </div>
                    <div className="text-xs text-[#8A7968]">
                      Moment {selectedChapter.chapterNumber} · 9 September 2026
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedChapter(null)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-[#554637] transition-colors"
                  aria-label="Close modal"
                >
                  <Sparkles className="w-4 h-4 text-[#9A7232]" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#9A7232]">
                  {selectedChapter.studentFocus}
                </div>
                <p className="text-sm text-[#504033] leading-relaxed">
                  {selectedChapter.description}
                </p>
                <div className="p-4 rounded-xl bg-white border border-[#E3D7C5]">
                  <p className="font-editorial text-lg italic text-[#2D2218] leading-relaxed">
                    {selectedChapter.reflection}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6DDCE] flex items-center justify-between text-xs text-[#8A7968]">
                <span>Happy Birthday, Preethi Mam!</span>
                <button
                  onClick={() => {
                    fireGoldenConfetti();
                    soundManager.playCelebrationSound();
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#9A7232] to-[#B8860B] text-white font-medium hover:opacity-95 shadow-xs transition-opacity cursor-pointer flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Send Blessings</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
