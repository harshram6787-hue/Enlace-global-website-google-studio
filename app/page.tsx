'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WelcomeNote } from '@/components/WelcomeNote';
import { ServicesSection, ServiceItem } from '@/components/ServicesSection';
import { HybridModelSection } from '@/components/HybridModelSection';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';

export default function HomePage() {
  const router = useRouter();
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
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

        {/* 4. Where Service Meets Intelligence (3 Core Services) */}
        <ServicesSection
          onSelectService={(service) => {
            router.push(`/services#${service.id}`);
          }}
        />

        {/* 6. The Enlace Global Hybrid Model (Visual Flow Chart / Infographic) */}
        <HybridModelSection />
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Modals & Interactivity */}
      <LetsTalkModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenContact={() => {
          setSelectedService(null);
          setContactOpen(true);
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
