'use client';

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LetsTalkModal } from './LetsTalkModal';
import { PlaceholderModal } from './PlaceholderModal';

interface LegalPageProps {
  title: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);

  const handleOpenPlaceholder = (placeholderTitle: string, description: string) => {
    setPlaceholderData({ title: placeholderTitle, description });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <main className="flex-grow pt-36 sm:pt-40 lg:pt-44 pb-12 md:pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="space-y-4 border-b border-emerald-100 pb-8 mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#044729] tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#0D8A4E]">
              Last Updated: November 2026
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed break-words">
              {intro}
            </p>
          </header>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-[#044729] tracking-tight leading-snug">
                  {section.heading}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed break-words">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <LetsTalkModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <PlaceholderModal
        title={placeholderData?.title || null}
        description={placeholderData?.description || null}
        onClose={() => setPlaceholderData(null)}
        onOpenContact={() => {
          setPlaceholderData(null);
          setContactOpen(true);
        }}
      />
    </div>
  );
}
