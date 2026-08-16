'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import { AdvantageDetailModal, DetailedAdvantage } from '@/components/AdvantageDetailModal';

// Hero Background Visual
import advantagesHeroBg from '@/src/assets/images/advantages_hero_bg_1786780294215.jpg';
import humanAiAdvantageImg from '@/src/assets/images/human_ai_advantage_1786870835780.jpg';
import indFocusedAdvImg from '@/src/assets/images/ind_focused_adv_1786871827210.jpg';
import costEffectiveAdvantageImg from '@/src/assets/images/cost_effective_advantage_1786871320562.jpg';
import scalableOpsAdvImg from '@/src/assets/images/scalable_ops_adv_1786871850620.jpg';
import customerCentricAdvantageImg from '@/src/assets/images/customer_centric_advantage_1786871335797.jpg';
import perfContAdvImg from '@/src/assets/images/perf_cont_adv_1786871866895.jpg';

import {
  Sparkles,
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
  const [selectedAdvantage, setSelectedAdvantage] = useState<DetailedAdvantage | null>(null);
  const [placeholderData, setPlaceholderData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  // 6 Detailed Advantages Data
  const detailedAdvantages: DetailedAdvantage[] = [
    {
      num: '01',
      title: 'HUMAN + AI APPROACH',
      shortDescription:
        'Technology empowers our people while preserving the human connection that great customer experiences require.',
      icon: Bot,
      explanation: [
        'Enlace Global combines skilled human teams with intelligent AI and automation to create a more efficient and responsive service model. AI supports our teams by helping with repetitive tasks, knowledge access, workflow automation, quality monitoring, and real-time insights — while people remain at the center of customer interactions.',
        'This approach allows us to improve speed and consistency without losing the empathy, judgment, and relationship-building that customers value.',
      ],
      keyBenefits: [
        'Human expertise supported by AI',
        'Faster and more consistent processes',
        'Intelligent workflow automation',
        'Better customer experiences',
      ],
      technologyFocus:
        'Real-time agent assistance, automated ticket summarization, semantic knowledge search, and dynamic QA monitoring.',
      image: humanAiAdvantageImg,
      imageAlt: 'Modern customer support specialist collaborating with intelligent AI tools and analytics',
    },
    {
      num: '02',
      title: 'INDUSTRY-FOCUSED SOLUTIONS',
      shortDescription:
        'We adapt our approach to the unique customer journeys, processes, and requirements of each industry.',
      icon: Briefcase,
      explanation: [
        'Every industry operates differently. Customer expectations, workflows, compliance requirements, and business priorities vary across sectors.',
        'Enlace Global develops industry-focused processes instead of applying a one-size-fits-all BPO model. Our teams are trained around the specific requirements of each client’s industry, while technology and automation help us improve efficiency and consistency.',
      ],
      keyBenefits: [
        'Industry-specific workflows',
        'Specialized team training',
        'Customized customer journeys',
        'Flexible processes aligned with business needs',
      ],
      technologyFocus:
        'Domain-adapted communication rules, regulatory-compliant workflows, and sector-tailored operational KPIs.',
      image: indFocusedAdvImg,
      imageAlt: 'Specialized enterprise teams executing industry-specific digital workflows across diverse business sectors',
    },
    {
      num: '03',
      title: 'COST-EFFECTIVE SOLUTIONS',
      shortDescription:
        'Combine skilled teams, technology, AI, and automation to improve operational efficiency and deliver greater value.',
      icon: TrendingUp,
      explanation: [
        'Our goal is not simply to reduce operating costs. We focus on creating greater value from every operational investment.',
        'By combining skilled talent with AI, automation, optimized workflows, and performance monitoring, Enlace Global helps businesses improve productivity while maintaining service quality.',
      ],
      keyBenefits: [
        'Optimized operational costs',
        'Higher team productivity',
        'Automation of repetitive processes',
        'Better value without compromising quality',
      ],
      technologyFocus:
        'Automated routine task handling, streamlined case queues, and operational waste reduction.',
      image: costEffectiveAdvantageImg,
      imageAlt: 'Business leaders reviewing operational ROI, cost-effective metrics, and smart workflow automation',
    },
    {
      num: '04',
      title: 'SCALABLE OPERATIONS',
      shortDescription:
        'Flexible teams and technology-enabled processes that grow with your business.',
      icon: Maximize2,
      explanation: [
        'Business requirements change over time. Enlace Global is designed to support clients as they grow, launch new initiatives, enter new markets, or experience changing customer demand.',
        'Our flexible workforce model, standardized processes, and technology-enabled operations allow services to scale up or down while maintaining operational consistency.',
      ],
      keyBenefits: [
        'Flexible workforce scaling',
        'Rapid operational expansion',
        'Standardized processes',
        'Consistent service quality',
      ],
      technologyFocus:
        'Cloud-orchestrated staffing capacity, modular training playbooks, and elastic queue routing.',
      image: scalableOpsAdvImg,
      imageAlt: 'Expanding high-tech corporate operations floor with global scalability and agile team capacity',
    },
    {
      num: '05',
      title: 'CUSTOMER-CENTRIC APPROACH',
      shortDescription:
        'We build every process around the people your business serves.',
      icon: Heart,
      explanation: [
        'Customer experience is more than answering calls or responding to messages. It is about understanding customer needs and creating interactions that build trust and loyalty.',
        'Enlace Global combines trained professionals, customer-focused processes, quality monitoring, and intelligent insights to help businesses create more meaningful customer experiences across every interaction channel.',
      ],
      keyBenefits: [
        'Customer-first processes',
        'Consistent service across channels',
        'Quality-focused operations',
        'Stronger customer relationships',
      ],
      technologyFocus:
        'Omnichannel context synchronization, sentiment analytics, and satisfaction feedback loops.',
      image: customerCentricAdvantageImg,
      imageAlt: 'Attentive and empathetic customer service specialist communicating through digital omnichannel support',
    },
    {
      num: '06',
      title: 'PERFORMANCE & CONTINUOUS IMPROVEMENT',
      shortDescription:
        'Measure performance, identify opportunities, and continuously improve every process.',
      icon: BarChart3,
      explanation: [
        'We believe operational excellence is an ongoing process. Enlace Global uses performance metrics, quality monitoring, analytics, and intelligent insights to identify what is working and where improvements can be made.',
        'Regular performance reviews help teams continuously optimize workflows, improve service quality, and deliver stronger business outcomes.',
      ],
      keyBenefits: [
        'Data-driven performance monitoring',
        'Quality assurance',
        'Continuous process optimization',
        'Actionable operational insights',
      ],
      technologyFocus:
        'Real-time SLA reporting, automated trend analysis, and recurring process refinement sprints.',
      image: perfContAdvImg,
      imageAlt: 'Operational leadership team reviewing live performance dashboards, KPI analytics, and continuous process optimization',
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
    <main className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pt-20">
      {/* Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center justify-center">
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
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Why Choose Enlace Global?</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            THE ENLACE GLOBAL ADVANTAGE
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
            More than a service partner — we combine people, AI, automation, and industry expertise to help businesses deliver better customer experiences and operate smarter.
          </p>

          {/* Primary CTA */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>LET&apos;S TALK</span>
            </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {detailedAdvantages.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  onClick={() => setSelectedAdvantage(item)}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500/80 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between cursor-pointer relative"
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
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors tracking-tight">
                      {item.title}
                    </h3>

                    {/* Short Explanation */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Explore More link trigger at the bottom */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D8A4E] group-hover:text-emerald-700 transition-colors">
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                    <div className="relative p-6 rounded-2xl bg-white border border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
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
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0D8A4E] to-[#044729] text-white shadow-xl border-2 border-emerald-300 flex flex-col justify-between transform hover:scale-[1.02] transition-all">
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
                    <div className="p-6 rounded-2xl bg-white border border-emerald-200/90 shadow-sm flex items-start gap-4">
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
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#0D8A4E] to-[#044729] text-white shadow-xl border-2 border-emerald-300 space-y-3">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D8A4E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Empower Your Operations</span>
          </div>

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
              <span>LET&apos;S TALK</span>
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
      <AdvantageDetailModal
        advantage={selectedAdvantage}
        onClose={() => setSelectedAdvantage(null)}
        onOpenContact={() => {
          setSelectedAdvantage(null);
          setContactOpen(true);
        }}
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
    </main>
  );
}
