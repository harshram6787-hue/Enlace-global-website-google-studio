'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import { CareerModal } from '@/components/CareerModal';
import {
  ArrowRight,
  MessageSquare,
  Users,
  Cpu,
  Brain,
  UserCheck,
  Compass,
  TrendingUp,
  GraduationCap,
  Target,
  Briefcase,
  Smile,
} from 'lucide-react';

export default function CareerPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  // Section 2 Data: Who We're Looking For
  const lookingForItems = [
    {
      number: '01',
      title: 'Curious Minds',
      description: 'People who ask questions, learn continuously, and look for better ways to do things.',
      icon: Brain,
    },
    {
      number: '02',
      title: 'Customer Focused',
      description: 'People who genuinely care about creating positive experiences for customers.',
      icon: UserCheck,
    },
    {
      number: '03',
      title: 'Adaptable & Driven',
      description: 'People who embrace change, take initiative, and are ready to grow in a fast-moving environment.',
      icon: Compass,
    },
    {
      number: '04',
      title: 'Team Players',
      description: 'People who collaborate, share ideas, and support each other.',
      icon: Users,
    },
  ];

  // Section 3 Data: Life at Enlace Global
  const lifeHighlights = [
    {
      title: 'Better Opportunities',
      description: 'Be part of a growing company with opportunities to learn, contribute, and take on new responsibilities.',
      icon: TrendingUp,
    },
    {
      title: 'Positive Work Environment',
      description: 'Work in a collaborative, respectful, and supportive environment where people and ideas are valued.',
      icon: Smile,
    },
    {
      title: 'Growth & Learning',
      description: 'Develop your skills through hands-on experience, continuous learning, and opportunities for career advancement.',
      icon: GraduationCap,
    },
    {
      title: 'People + Technology',
      description: 'Work alongside AI and automation that help you work smarter and focus on meaningful customer experiences.',
      icon: Cpu,
    },
    {
      title: 'Make an Impact',
      description: 'Bring your ideas, take ownership, and play a meaningful role in shaping the future of Enlace Global.',
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <main className="flex-grow pt-16 md:pt-20">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Background Image with Light Tint Overlay (Matches About Us Hero Style) */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Build the Future of Customer Experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft White Gradient Overlay to Keep Text Perfectly Readable While Showing Image */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white/80" />
            <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
            {/* Hero Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Build the Future of <span className="text-[#0D8A4E]">Customer Experience</span>
            </h1>

            {/* Hero Supporting Copy */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
              Join a team where people and AI work together to deliver exceptional customer experiences for global businesses.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setCareerModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Briefcase className="w-5 h-5 text-white" />
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= 2. WHO WE'RE LOOKING FOR ================= */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                We’re Looking for People Who Think <span className="text-[#0D8A4E]">Beyond the Ordinary</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                We value curious, responsible, and customer-focused people who are ready to learn, adapt, and grow with us.
              </p>
            </div>

            {/* 4 Compact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {lookingForItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.number}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Subtle Gold/Emerald Accent Top Bar on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Top Row: Number Badge in Gold/Amber & Icon in Emerald */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 text-[#0D8A4E] transition-colors">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full shadow-2xs">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================= 3. LIFE AT ENLACE GLOBAL ================= */}
        <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Life at <span className="text-[#0D8A4E]">Enlace Global</span>
              </h2>
              <p className="text-base sm:text-lg font-bold text-emerald-800 tracking-wide uppercase">
                Meaningful opportunities. Supportive people. Continuous growth.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We’re building a workplace where people can find meaningful opportunities, develop their skills, and grow alongside a forward-thinking team.
              </p>
            </div>

            {/* 5 Compact Highlights Grid (3 Top, 2 Centered Bottom) */}
            <div className="space-y-6">
              {/* Top Row: 3 Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {lifeHighlights.slice(0, 3).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group flex items-start gap-4"
                    >
                      <div className="p-3 rounded-xl bg-emerald-100/70 text-[#0D8A4E] group-hover:scale-110 transition-transform shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Row: 2 Items Centered */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {lifeHighlights.slice(3, 5).map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 group flex items-start gap-4"
                    >
                      <div className="p-3 rounded-xl bg-emerald-100/70 text-[#0D8A4E] group-hover:scale-110 transition-transform shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ================= 4. FINAL CTA SECTION ================= */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* CTA Heading & Copy */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Ready to Build the Future With Us?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium">
                Take the next step in your career and become part of the Enlace Global journey.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCareerModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 5. Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Modals */}
      <CareerModal
        isOpen={careerModalOpen}
        onClose={() => setCareerModalOpen(false)}
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
