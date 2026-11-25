'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FounderSpotlight } from '@/components/FounderSpotlight';
import { WhyWeExist } from '@/components/WhyWeExist';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import aboutHeroImg from '@/src/assets/images/about_hero_bg_1786610981214.jpg';
import {
  ArrowRight,
  MessageSquare,
  Users,
  Cpu,
  Eye,
  Target,
  HeartHandshake,
  Award,
  ShieldCheck,
} from 'lucide-react';

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  const valuesList = [
    {
      id: 'customer-first',
      title: 'Customer First',
      description: 'We put customer needs, experiences and outcomes at the centre of what we do.',
      icon: HeartHandshake,
      backgroundClass: 'bg-[#EDF7F0]',
    },
    {
      id: 'intelligent-innovation',
      title: 'Intelligent Innovation',
      description: 'We embrace AI, technology and smarter processes to continuously improve how work gets done.',
      icon: Cpu,
      backgroundClass: 'bg-[#F1ECFA]',
    },
    {
      id: 'excellence-execution',
      title: 'Excellence in Execution',
      description: 'We value quality, consistency, accuracy and operational discipline in everything we deliver.',
      icon: Award,
      backgroundClass: 'bg-[#EAF3FB]',
    },
    {
      id: 'human-at-core',
      title: 'Human at the Core',
      description: 'We believe technology works best when it empowers people and preserves the human connection.',
      icon: Users,
      backgroundClass: 'bg-[#FFF1E7]',
    },
    {
      id: 'integrity-accountability',
      title: 'Integrity & Accountability',
      description: 'We take ownership of our commitments and build relationships through transparency, responsibility and trust.',
      icon: ShieldCheck,
      backgroundClass: 'bg-[#FBF7E6]',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <main className="flex-grow pt-[121px]">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative min-h-[500px] md:min-h-[475px] py-10 md:py-12 overflow-hidden flex items-center justify-center">
          {/* Background Image with Light Tint Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHeroImg.src}
              alt="Enlace Global team collaborating"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft White Gradient Overlay to Keep Text Perfectly Readable While Showing Image */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/85" />
            <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
            {/* Hero Main Heading */}
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              About <span className="text-[#0D8A4E]">Enlace Global</span>
            </h1>

            {/* Hero Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
              We combine skilled people, intelligent technology and process excellence to create a more responsive, scalable and efficient approach to business operations. Our philosophy is simple: technology should enhance human capability, not replace the value of human connection, judgment and empathy.
            </p>
          </div>
        </section>


        {/* ================= 2. WHY WE EXIST ================= */}
        <WhyWeExist />

        <FounderSpotlight />


        {/* ================= 4. VISION & MISSION ================= */}
        <section id="vision-mission" aria-labelledby="vision-mission-heading" className="py-10 md:py-12 bg-white relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 id="vision-mission-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Where We’re Headed and How We’ll Get There
              </h2>
            </div>

            {/* Two Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Card 1: Vision */}
              <div className="tile-hover bg-[#EAF6EE] p-6 sm:p-8 rounded-3xl border-2 border-emerald-200/80 shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 relative group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Direction</span>
                    <h3 className="text-2xl font-bold text-slate-900">OUR VISION</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                    To make dependable outsourcing accessible to growing businesses worldwide, so they can expand their operations while maintaining the quality of service their customers count on
                  </p>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="tile-hover bg-[#F1ECFA] p-6 sm:p-8 rounded-3xl border-2 border-[#ded5ee] shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 relative group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Commitment</span>
                    <h3 className="text-2xl font-bold text-slate-900">OUR MISSION</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                    We build dedicated teams for customer support, sales support, and back-office operations. We train each team around the client’s needs, measure performance against agreed service standards, and use AI where it can reduce repetitive work.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= 5. OUR VALUES ================= */}
        <section id="our-values" aria-labelledby="values-heading" className="py-10 md:py-12 bg-gradient-to-b from-white via-emerald-50/20 to-white relative scroll-mt-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 id="values-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                The Values Behind Better Business Outcomes
              </h2>
            </div>

            {/* Exactly 5 Value Cards - Centered & Perfectly Aligned */}
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {valuesList.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={val.id}
                    className={`tile-hover w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${val.backgroundClass} p-6 sm:p-7 rounded-2xl border border-emerald-100/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col items-start space-y-4 group`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-[#0D8A4E] group-hover:bg-[#0D8A4E] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-200 group-hover:scale-105" />
                    </div>

                    <div className="space-y-2 flex-1 flex flex-col justify-start">
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {val.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ================= 6. CLOSING CTA ================= */}
        <section id="about-discovery-call" aria-labelledby="about-discovery-heading" className="py-12 md:py-16 bg-[#EAF4F1] text-slate-900 relative overflow-hidden scroll-mt-28">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
            <h2 id="about-discovery-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Let&apos;s Build Better Business Together
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Discover how Enlace Global can help your business combine human expertise and intelligent technology to create better outcomes.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-9 py-3.5 rounded-xl text-base font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-xl transition-all duration-200 transform active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request Callback</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ================= 7. FOOTER ================= */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Modals */}
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
