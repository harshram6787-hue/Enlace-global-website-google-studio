'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import aboutHeroImg from '@/src/assets/images/about_hero_bg_1786610981214.jpg';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Users,
  Cpu,
  Eye,
  Target,
  HeartHandshake,
  Award,
  ShieldCheck,
  CheckCircle2,
  Zap,
  TrendingUp,
  Brain,
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
    },
    {
      id: 'intelligent-innovation',
      title: 'Intelligent Innovation',
      description: 'We embrace AI, technology and smarter processes to continuously improve how work gets done.',
      icon: Cpu,
    },
    {
      id: 'excellence-execution',
      title: 'Excellence in Execution',
      description: 'We value quality, consistency, accuracy and operational discipline in everything we deliver.',
      icon: Award,
    },
    {
      id: 'human-at-core',
      title: 'Human at the Core',
      description: 'We believe technology works best when it empowers people and preserves the human connection.',
      icon: Users,
    },
    {
      id: 'integrity-accountability',
      title: 'Integrity & Accountability',
      description: 'We take ownership of our commitments and build relationships through transparency, responsibility and trust.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <main className="flex-grow">
        
        {/* ================= 1. HERO SECTION ================= */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 overflow-hidden min-h-[500px] md:min-h-[560px] flex items-center justify-center">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              About <span className="text-[#0D8A4E]">Enlace Global</span>
            </h1>

            {/* Hero Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
              Building better business outcomes through people, technology and intelligent operations.
            </p>
          </div>
        </section>


        {/* ================= 2. WHO WE ARE ================= */}
        <section className="py-10 md:py-12 bg-white relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Text Content */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <span>Who We Are</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Built Around People. <br className="hidden sm:inline" />
                  <span className="text-[#0D8A4E]">Enhanced by Intelligence.</span>
                </h2>

                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  <p className="font-medium text-slate-800">
                    Enlace Global is an AI-enabled business process services company focused on helping businesses deliver exceptional customer experiences, accelerate growth and operate more efficiently.
                  </p>
                  <p>
                    We combine skilled people, intelligent technology and process excellence to create a more responsive, scalable and efficient approach to business operations. Our philosophy is simple: technology should enhance human capability, not replace the value of human connection, judgment and empathy.
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Feature Graphic */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 p-5 sm:p-6 rounded-3xl border-2 border-emerald-100 shadow-lg relative space-y-4">
                  
                  {/* Human-In-The-Loop Card 1 */}
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-emerald-100/80 flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0D8A4E] flex items-center justify-center shrink-0 font-bold">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-slate-900 text-base">Skilled Human Expertise</h3>
                      <p className="text-xs text-slate-600 leading-snug">
                        Deep active listening, empathetic customer support, and strategic operational judgment.
                      </p>
                    </div>
                  </div>

                  {/* Plus Synergy Indicator */}
                  <div className="flex justify-center -my-2">
                    <div className="w-7 h-7 rounded-full bg-[#0D8A4E] text-white flex items-center justify-center font-bold text-xs shadow-md">
                      +
                    </div>
                  </div>

                  {/* AI & Automation Card 2 */}
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-emerald-100/80 flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0D8A4E] flex items-center justify-center shrink-0 font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-bold text-slate-900 text-base">Intelligent Automation</h3>
                      <p className="text-xs text-slate-600 leading-snug">
                        AI workflows, automated data execution, and continuous real-time process optimization.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 3. WHY WE EXIST ================= */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-slate-50/60 via-emerald-50/20 to-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-emerald-100 shadow-xl space-y-4 sm:space-y-5 text-center sm:text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-3 h-full bg-[#0D8A4E]" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>Our Purpose</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why We Exist
              </h2>

              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-800 text-lg sm:text-xl">
                  Businesses today need more than traditional outsourcing. They need partners who can combine operational expertise with the intelligence of modern technology.
                </p>
                <p>
                  Enlace Global was built around this opportunity—to bring people, AI and automation together in a way that helps businesses improve service quality, increase productivity and adapt more effectively to changing customer and operational demands.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ================= 4. VISION & MISSION ================= */}
        <section className="py-10 md:py-12 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>Strategic Direction</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Vision &amp; Mission
              </h2>
            </div>

            {/* Two Equal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              
              {/* Card 1: Vision */}
              <div className="bg-gradient-to-b from-white to-emerald-50/40 p-6 sm:p-8 rounded-3xl border-2 border-emerald-200/80 shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 relative group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Direction</span>
                    <h3 className="text-2xl font-bold text-slate-900">OUR VISION</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                    To become a trusted global partner for intelligent business process services, helping organizations deliver better experiences, operate smarter and grow sustainably.
                  </p>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="bg-gradient-to-b from-white to-emerald-50/40 p-6 sm:p-8 rounded-3xl border-2 border-emerald-200/80 shadow-lg hover:border-emerald-400 transition-all flex flex-col justify-between space-y-4 relative group">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Our Commitment</span>
                    <h3 className="text-2xl font-bold text-slate-900">OUR MISSION</h3>
                  </div>
                  <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                    To combine human expertise, AI and process excellence to deliver scalable, efficient and customer-centric solutions that create meaningful business value.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 5. OUR VALUES ================= */}
        <section className="py-10 md:py-12 bg-gradient-to-b from-white via-emerald-50/20 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>Core Operating Principles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Values
              </h2>
            </div>

            {/* Exactly 5 Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
              {valuesList.map((val, index) => {
                const IconComponent = val.icon;
                // Center bottom 2 cards cleanly on desktop if 5 total
                const isLastTwoOnDesktop = index >= 3;
                return (
                  <div
                    key={val.id}
                    className={`bg-white p-5 sm:p-6 rounded-2xl border border-emerald-100 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col space-y-3 ${
                      isLastTwoOnDesktop ? 'lg:col-span-1 lg:last:col-span-1' : ''
                    }`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-100 text-[#0D8A4E] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
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
        <section className="py-12 md:py-16 bg-gradient-to-r from-[#044729] via-[#0D8A4E] to-[#044729] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Let&apos;s Build Better Business Together
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-normal">
              Discover how Enlace Global can help your business combine human expertise and intelligent technology to create better outcomes.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-9 py-3.5 rounded-xl text-base font-bold text-[#044729] bg-white hover:bg-emerald-50 shadow-xl transition-all duration-200 transform active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#0D8A4E]" />
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-5 h-5 text-[#0D8A4E]" />
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
