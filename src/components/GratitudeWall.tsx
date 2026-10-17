import React, { useState, useEffect } from 'react';
import { Send, Heart, Sparkles, MessageCircle, User } from 'lucide-react';
import { fireGoldenConfetti } from '../utils/confetti';
import { soundManager } from '../utils/audio';

interface StudentWish {
  id: string;
  author: string;
  batch: string;
  message: string;
  tag: string;
  likes: number;
}

const INITIAL_WISHES: StudentWish[] = [
  {
    id: 'w1',
    author: 'Yashwanth & The Batch',
    batch: 'Classroom Batch 2026',
    message: 'Happy Birthday, Preethi Mam! Thank you for being the heart and soul of our classes. Your patience and kindness are the reason we love coming to learn every single day.',
    tag: 'Teacher & Mentor',
    likes: 24,
  },
];

export const GratitudeWall: React.FC = () => {
  const [wishes, setWishes] = useState<StudentWish[]>(() => {
    try {
      const saved = localStorage.getItem('preethi_mam_wishes_2026_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Exclude the removed placeholder box IDs
        const filtered = parsed.filter((w: StudentWish) => !['w2', 'w3', 'w4', 'w5', 'w6'].includes(w.id));
        if (filtered.length > 0) return filtered;
      }
    } catch {
      // fallback
    }
    return INITIAL_WISHES;
  });

  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('preethi_mam_wishes_2026_v2', JSON.stringify(wishes));
    } catch {
      // fallback
    }
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    const newWish: StudentWish = {
      id: `w-${Date.now()}`,
      author: name.trim(),
      batch: batch.trim() || 'Student / Well-wisher',
      message: message.trim(),
      tag: 'Birthday Tribute 2026',
      likes: 1,
    };

    setTimeout(() => {
      setWishes([newWish, ...wishes]);
      setName('');
      setBatch('');
      setMessage('');
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      fireGoldenConfetti();
      soundManager.playCelebrationSound();

      setTimeout(() => setSubmittedSuccess(false), 4000);
    }, 300);
  };

  const handleLike = (id: string) => {
    soundManager.playChime(580, 0.3, 0.08);
    setWishes(
      wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <section id="gratitude" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#9A7232] uppercase mb-2">
            <span>VOICES OF LOVE & RESPECT</span>
            <span aria-hidden="true">·</span>
            <span>SEPTEMBER 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#201811]">
            The Student Gratitude Wall
          </h2>
          <p className="mt-2 text-[#6E5D4E] text-base max-w-xl mx-auto">
            Heartfelt notes and birthday blessings written for Preethi Mam by the students whose lives she continues to shape.
          </p>
        </div>

        {/* 2-Column Split: Wall of Notes on Left/Center, Interactive Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Notes Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-white border border-[#E6DDCE] shadow-xs hover:border-[#C5A059] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8A7968] mb-3">
                    <span className="font-medium text-[#9A7232]">{wish.tag}</span>
                    <span>2026 Tribute</span>
                  </div>
                  <p className="font-editorial text-base text-[#2E241B] leading-relaxed mb-4">
                    “{wish.message}”
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2ECE1] flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-sm text-[#201811]">
                      {wish.author}
                    </div>
                    <div className="text-[11px] text-[#8A7968]">{wish.batch}</div>
                  </div>

                  <button
                    onClick={() => handleLike(wish.id)}
                    className="flex items-center gap-1.5 text-xs text-[#9A7232] hover:text-[#7A5822] bg-[#FAF5EB] px-2.5 py-1 rounded-full border border-[#E8DFCFA0] transition-colors"
                    title="Send a heart"
                  >
                    <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    <span className="font-mono tabular-nums">{wish.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Wish Submission Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-white to-[#FBF8F2] border-2 border-[#DFD3C0] shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF3E6] border border-[#C5A059] flex items-center justify-center text-[#9A7232]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[#201811]">
                    Pen Your Wish for Preethi Mam
                  </h3>
                  <p className="text-xs text-[#7A6857]">
                    Add your voice to this special 2026 birthday tribute.
                  </p>
                </div>
              </div>

              {submittedSuccess && (
                <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Your heartfelt wish has been posted to the wall for Preethi Mam! ✨</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="student-name" className="block text-xs font-semibold text-[#5A4736] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      id="student-name"
                      type="text"
                      required
                      placeholder="e.g. Yashwanth or Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CDB8] bg-white text-sm text-[#201811] placeholder-[#A09282] focus:outline-none focus:border-[#9A7232] focus:ring-1 focus:ring-[#9A7232]"
                    />
                    <User className="w-4 h-4 text-[#A89888] absolute right-3 top-3" />
                  </div>
                </div>

                <div>
                  <label htmlFor="student-batch" className="block text-xs font-semibold text-[#5A4736] mb-1">
                    Your Batch / Role (Optional)
                  </label>
                  <input
                    id="student-batch"
                    type="text"
                    placeholder="e.g. Class of 2026 / Student"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CDB8] bg-white text-sm text-[#201811] placeholder-[#A09282] focus:outline-none focus:border-[#9A7232] focus:ring-1 focus:ring-[#9A7232]"
                  />
                </div>

                <div>
                  <label htmlFor="student-message" className="block text-xs font-semibold text-[#5A4736] mb-1">
                    Your Birthday Message *
                  </label>
                  <textarea
                    id="student-message"
                    required
                    rows={4}
                    placeholder="Write your wishes, blessings, or favorite memory of Preethi Mam's kindness..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CDB8] bg-white text-sm text-[#201811] placeholder-[#A09282] focus:outline-none focus:border-[#9A7232] focus:ring-1 focus:ring-[#9A7232]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-gradient-to-r from-[#9A7232] via-[#B8860B] to-[#9A7232] hover:opacity-95 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Posting Wish...' : 'Post Birthday Blessing'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
