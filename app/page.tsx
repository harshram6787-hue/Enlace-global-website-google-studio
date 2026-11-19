'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WelcomeNote } from '@/components/WelcomeNote';
import { FounderSpotlight } from '@/components/FounderSpotlight';
import { PilotSection } from '@/components/PilotSection';
import { Footer } from '@/components/Footer';
import { LetsTalkModal, PILOT_SERVICE_INTEREST } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isPilotInquiry, setIsPilotInquiry] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Main Page Sequence */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenContact={() => setContactOpen(true)} />

        {/* 3. Welcome Note */}
        <WelcomeNote />

        <FounderSpotlight />

        {/* 4. 30-Day Low-Risk Pilot */}
        <PilotSection onOpenContact={() => {
          setIsPilotInquiry(true);
          setContactOpen(true);
        }} />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Modals & Interactivity */}
      <LetsTalkModal
        isOpen={contactOpen}
        initialServiceInterest={isPilotInquiry ? PILOT_SERVICE_INTEREST : undefined}
        onClose={() => {
          setContactOpen(false);
          setIsPilotInquiry(false);
        }}
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

