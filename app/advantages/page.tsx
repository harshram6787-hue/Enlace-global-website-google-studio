'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DataSecuritySection } from '@/components/DataSecuritySection';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';

// Hero Background Visual
import advantagesHeroBg from '@/src/assets/images/advantages_hero_bg_1786780294215.jpg';

import {
  MessageSquare,
  Bot,
  Briefcase,
  TrendingUp,
  Maximize2,
  Heart,
  BarChart3,
  Users,
  Cpu,
  Zap,
  LineChart,
  Award,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

export default function AdvantagesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  const advantageCards = [
    {
      num: '01',
      title: 'Human + AI Execution',
      shortDescription:
        'Pair empathetic, accent-neutral Indian specialists with real-time AI agent assist to cut average handle times without sounding robotic.',
      icon: Bot,
      backgroundClass: 'bg-[#EDF7F0]',
    },
    {
      num: '02',
      title: 'Founder-Led Quality Governance',
      shortDescription:
        'Benefit from direct leadership oversight and 100% QA call and ticket auditing—no getting lost inside a massive 10,000-seat call center.',
      icon: Briefcase,
      backgroundClass: 'bg-[#F1ECFA]',
    },
    {
      num: '03',
      title: 'Up to 50% Cost Efficiency',
      shortDescription:
        'Achieve enterprise-grade customer support, sales, and back-office output at a fraction of US, UK, or Australian in-house hiring overhead.',
      icon: TrendingUp,
      backgroundClass: 'bg-[#EAF3FB]',
    },
    {
      num: '04',
      title: 'Rapid, Flexible Scaling',
      shortDescription:
        'Start with a 2-agent 30-day pilot and scale your dedicated team up or down smoothly without rigid multi-year contract lock-ins.',
      icon: Maximize2,
      backgroundClass: 'bg-[#FFF1E7]',
    },
    {
      num: '05',
      title: 'Regulated Sector Expertise',
      shortDescription:
        'Compliance-checked workflows built from real-world QA experience across Energy, Broadband, SaaS, E-Commerce, and Financial Support.',
      icon: Heart,
      backgroundClass: 'bg-[#FBF7E6]',
    },
    {
      num: '06',
      title: 'Transparent Daily Reporting',
      shortDescription:
        'Get real-time CSAT metrics, sentiment tracking, and structured QA scorecards delivered directly to your team.',
      icon: BarChart3,
      backgroundClass: 'bg-[#FCEEF3]',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Minimum Commitment',
      enlace: '30-Day Low-Risk Pilot (2 Agents)',
      traditional: '12-to-24 Month Rigid Lock-In',
    },
    {
      feature: 'Account Oversight',
      enlace: 'Direct Weekly Founder Involvement',
      traditional: 'Handed Off to Junior Account Managers',
    },
    {
      feature: 'AI & Automation Tools',
      enlace: 'Built-In Real-Time AI Agent Assist',
      traditional: 'Legacy Manual Scripts or Expensive Add-Ons',
    },
    {
      feature: 'Onboarding Speed',
      enlace: 'Go Live in as Little as 14 Days',
      traditional: '6 to 12 Weeks Slow Setup',
    },
    {
      feature: 'Quality Assurance',
      enlace: '100% QA Auditing & Compliance Scorecards',
      traditional: 'Random 2–5% Call Sampling',
    },
  ];

  // Value Creation Horizontal/Vertical Journey Flow
  const valueFlowSteps = [
    {
      stage: 'PEOPLE',
      description:
        'Skilled teams delivering empathy, expertise, and human connection.',
      icon: Users,
      badge: 'Step 1',
    },
    {
      stage: 'TECHNOLOGY',
      description:
        'Modern platforms that enable efficient and connected operations.',
      icon: Cpu,
      badge: 'Step 2',
    },
    {
      stage: 'AI & AUTOMATION',
      description:
        'Intelligent tools that reduce repetitive work and empower teams to work smarter.',
      icon: Zap,
      badge: 'Step 3',
    },
    {
      stage: 'INSIGHTS',
      description:
        'Data and conversation intelligence that reveal opportunities for improvement.',
      icon: LineChart,
      badge: 'Step 4',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pt-[121px]">
      {/* Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[520px] md:min-h-[475px] py-10 md:py-12 overflow-hidden flex items-center justify-center">
        {/* Background Visual Image with Overlay (Matches Services Hero Style) */}
        <div className="absolute inset-0 z-0">
          <img
            src={advantagesHeroBg.src}
            alt="Human expertise and AI technology synergy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Soft Light Gradient Overlay for High Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/85" />
          <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
          {/* Main Heading */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            <span className="text-[#0D8A4E]">Enterprise Execution</span> Without the Agency Bloat
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
            Traditional BPO giants lock you into rigid contracts and hand your account off to junior managers. We give you dedicated Indian talent, real-time AI workflows, and direct founder accountability from day one.
          </p>

          {/* Primary CTA */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/#pilot-section"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start a 30-Day Pilot →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 2. WHAT GIVES US THE ADVANTAGE? ================= */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              WHAT GIVES US THE ADVANTAGE?
            </h2>
            <div className="w-16 h-1 bg-[#0D8A4E] mx-auto rounded-full" />
          </div>

          {/* Six Advantage Cards Grid (Desktop: 3 cols x 2 rows / Tablet: 2 cols / Mobile: 1 col) */}
          <div id="advantage-cards" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantageCards.map((item) => {
              const IconComp = item.icon;
              return (
                <article
                  key={item.num}
                  aria-labelledby={`advantage-${item.num}-heading`}
                  className={`tile-hover p-7 sm:p-8 rounded-2xl ${item.backgroundClass} border border-slate-200/80 hover:border-emerald-500/80 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between relative`}
                >
                  <div className="space-y-4">
                    {/* Header Row: Icon & Step Number */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D8A4E] group-hover:bg-[#0D8A4E] group-hover:text-white transition-colors duration-300 shadow-xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {item.num}
                      </span>
                    </div>

                    {/* Advantage Title */}
                    <h3 id={`advantage-${item.num}-heading`} className="text-lg font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors tracking-tight">
                      {item.title}
                    </h3>

                    {/* Short Explanation */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.shortDescription}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="outsourcing-comparison" aria-labelledby="outsourcing-comparison-heading" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <h2 id="outsourcing-comparison-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We Compare to Traditional Outsourcing
            </h2>
            <div className="w-16 h-1 bg-[#0D8A4E] mx-auto rounded-full" />
          </div>

          <div className="rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div role="region" aria-labelledby="outsourcing-comparison-heading" tabIndex={0} className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-emerald-500 focus-visible:-outline-offset-2">
              <table aria-labelledby="outsourcing-comparison-heading" className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200/80">
                    <th scope="col" className="w-[28%] px-5 sm:px-6 py-5 font-bold text-slate-900">Feature</th>
                    <th scope="col" className="w-[36%] px-5 sm:px-6 py-5 font-bold text-[#044729] bg-emerald-100/70">Enlace Global</th>
                    <th scope="col" className="w-[36%] px-5 sm:px-6 py-5 font-bold text-slate-900">Traditional Call Centers</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-200/80 last:border-b-0">
                      <th scope="row" className="px-5 sm:px-6 py-5 font-semibold text-slate-900 align-top">{row.feature}</th>
                      <td className="px-5 sm:px-6 py-5 font-semibold text-[#044729] bg-emerald-50/80 leading-relaxed align-top">{row.enlace}</td>
                      <td className="px-5 sm:px-6 py-5 text-slate-600 leading-relaxed align-top">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <DataSecuritySection />

      {/* ================= 3. HOW WE CREATE MORE VALUE ================= */}
      <section className="py-16 md:py-24 bg-slate-50/80 border-t border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading & Supporting Copy */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              HOW WE CREATE MORE VALUE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              We bring together the right combination of people, technology, AI, automation, and insights to create measurable value for our clients.
            </p>
          </div>

          {/* Connected Flow: Desktop Horizontal / Mobile & Tablet Vertical */}
          <div className="relative pt-4">
            {/* Desktop Connected Journey (Horizontal 5-part Flow) */}
            <div className="hidden lg:grid lg:grid-cols-5 gap-4 items-stretch relative">
              {valueFlowSteps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <React.Fragment key={step.stage}>
                    <div className="tile-hover relative p-6 rounded-2xl bg-white border border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center font-bold">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            {step.badge}
                          </span>
                        </div>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                          {step.stage}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Right Directional Connector Arrow */}
                      {idx < valueFlowSteps.length - 1 && (
                        <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}

              {/* Step 5: Final Outcome Card (Visually Stronger) */}
              <div className="tile-hover relative p-6 rounded-2xl bg-gradient-to-br from-[#0D8A4E] to-[#044729] text-white shadow-xl border-2 border-emerald-300 flex flex-col justify-between transform transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md text-amber-300 flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-300 bg-black/20 px-2 py-0.5 rounded border border-amber-300/40">
                      Goal
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-white tracking-tight uppercase">
                    BETTER CUSTOMER EXPERIENCES + BETTER BUSINESS OUTCOMES
                  </h3>
                  <p className="text-xs text-emerald-100 leading-relaxed font-medium">
                    Driving higher retention, faster response, operational efficiency, and sustainable revenue growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile & Tablet Vertical Stack with Directional Indicators */}
            <div className="lg:hidden space-y-4 max-w-md mx-auto">
              {valueFlowSteps.map((step) => {
                const IconComp = step.icon;
                return (
                  <div key={step.stage} className="space-y-4">
                    <div className="tile-hover p-6 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0D8A4E] flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                          {step.badge}
                        </span>
                        <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                          {step.stage}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Down Directional Indicator */}
                    <div className="flex justify-center">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Final Outcome Card Vertical */}
              <div className="tile-hover p-7 rounded-2xl bg-gradient-to-br from-[#0D8A4E] to-[#044729] text-white shadow-xl border-2 border-emerald-300 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-amber-300 flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 bg-black/20 px-2 py-0.5 rounded border border-amber-300/40 uppercase">
                      Final Outcome
                    </span>
                    <h3 className="text-lg font-extrabold text-white tracking-tight uppercase mt-0.5">
                      BETTER CUSTOMER EXPERIENCES + BETTER BUSINESS OUTCOMES
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
                  Driving higher retention, faster response, operational efficiency, and sustainable revenue growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. FINAL CTA ================= */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
            READY TO GAIN THE ENLACE GLOBAL ADVANTAGE?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Let&apos;s explore how our people, technology, and AI-enabled approach can help your business perform better.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl hover:shadow-2xl transform transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-amber-300" />
              <span>Start a 30-Day Pilot</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
