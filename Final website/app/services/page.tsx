'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Phone,
  MessageSquareText,
  Mail,
  Smartphone,
  Target,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Database,
  CreditCard,
  FileText,
  Workflow,
  FileCheck,
  Users,
  Cpu,
  LineChart,
  HeartHandshake,
  Layers,
  Zap,
  ShieldCheck,
  Check,
  MessagesSquare,
  Laptop,
  Clock,
  Bot,
  Languages
} from 'lucide-react';

import servicesHeroBg from '@/src/assets/images/bpo_services_hero_1786731450714.jpg';
import documentProcessingImg from '@/src/assets/images/document_processing_service_1786648730469.jpg';

export default function ServicesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setHighlightedSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const offset = 90; // offset for fixed navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }, 150);

          // Clear section highlight ring after 3.5 seconds
          setTimeout(() => {
            setHighlightedSection(null);
          }, 3500);
        }
      }
    };

    handleScrollToHash();
    window.addEventListener('hashchange', handleScrollToHash);
    return () => window.removeEventListener('hashchange', handleScrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      <main className="flex-grow pt-16 md:pt-20">
        
        {/* ================= 1. SERVICES HERO ================= */}
        <section className="relative py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Background Image with Light Tint Overlay (Matches About Us Hero Style) */}
          <div className="absolute inset-0 z-0">
            <img
              src={servicesHeroBg.src}
              alt="Services Built for Better Business"
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
              Services Built for <span className="text-[#0D8A4E]">Better Business</span>
            </h1>

            {/* Hero Supporting Copy */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
              Enlace Global combines experienced people, intelligent technology and process excellence to deliver customer experience, revenue growth and operational solutions designed around measurable business needs.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>


        {/* ================= 2. CUSTOMER EXPERIENCE SECTION ================= */}
        <section
          id="customer-experience"
          className={`py-16 md:py-24 bg-white transition-all duration-700 ${
            highlightedSection === 'customer-experience'
              ? 'ring-4 ring-[#0D8A4E]/50 bg-emerald-50/40 rounded-3xl'
              : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-[#0D8A4E]" />
                <span>Service Pillar 01</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Customer Experience
              </h2>

              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                Help businesses create responsive, reliable and personalized customer interactions across the channels their customers use.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CARD 1 — Voice Support */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="Voice Support"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Voice Support
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Skilled agents deliver personalized customer assistance through professional voice interactions, supported by AI-powered real-time assistance, call insights, automated summaries and quality monitoring.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Chat Support */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                      alt="Chat Support"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <MessageSquareText className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Chat Support
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Real-time customer assistance through digital chat, enhanced by AI-assisted knowledge retrieval, response suggestions and conversation analysis for faster and more consistent support.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — Email Support */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80"
                      alt="Email Support"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Email Support
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Responsive handling of customer queries and service requests, supported by automation for email classification and routing and AI for intent detection, response assistance and prioritization.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 — WhatsApp Support */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                      alt="WhatsApp Support"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <Smartphone className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        WhatsApp Support
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Convenient customer engagement through WhatsApp, using automated workflows and AI-assisted responses for routine enquiries, faster support and intelligent escalation to human agents when needed.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 3. REVENUE GROWTH SECTION ================= */}
        <section
          id="revenue-growth"
          className={`py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white transition-all duration-700 ${
            highlightedSection === 'revenue-growth'
              ? 'ring-4 ring-[#0D8A4E]/50 bg-emerald-50/50 rounded-3xl'
              : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#0D8A4E]" />
                <span>Service Pillar 02</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Revenue Growth
              </h2>

              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                Help businesses identify opportunities, qualify prospects and support revenue-generating activities through skilled teams enhanced by intelligent technology and automation.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CARD 1 — Lead Generation */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                      alt="Lead Generation"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Lead Generation
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      AI can help identify, segment and prioritize potential prospects, while automation streamlines outreach and follow-up activities to improve efficiency and consistency.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Lead Qualification */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                      alt="Lead Qualification"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Lead Qualification
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      AI-assisted qualification can evaluate lead information, engagement and intent, helping teams identify higher-potential opportunities and prioritize follow-up.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — Sales Support */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                      alt="Sales Support"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Sales Support
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Sales teams are supported with customer and conversation insights, while automation helps manage follow-ups, task creation and routine sales workflows.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 — Appointment Setting */}
              <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
                      alt="Appointment Setting"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Appointment Setting
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                        <span>AI + Automation Enabled</span>
                      </span>
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed">
                      Automation can manage scheduling, reminders and follow-ups, while AI can help prioritize prospects and improve the efficiency of appointment-setting workflows.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 4. BACK OFFICE OPERATIONS SECTION ================= */}
        <section
          id="back-office-operations"
          className={`py-16 md:py-24 bg-white transition-all duration-700 ${
            highlightedSection === 'back-office-operations'
              ? 'ring-4 ring-[#0D8A4E]/50 bg-emerald-50/40 rounded-3xl'
              : ''
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-[#0D8A4E]" />
                <span>Service Pillar 03</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Back Office Operations
              </h2>

              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                Enable businesses to streamline process-driven operations through accurate execution, intelligent workflows and technology-supported operational assistance.
              </p>
            </div>

            {/* 5 Cards Layout (Top 3, Bottom 2 centered) */}
            <div className="space-y-8">
              
              {/* Top Row: 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CARD 1 — Data Management & Processing */}
                <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
                        alt="Data Management & Processing"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                        <Database className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                          <span>AI + Automation Enabled</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Data Management & Processing
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Automation reduces repetitive data-entry work, while AI can help extract, validate, classify and organize information with greater speed and consistency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 2 — Order & Transaction Processing */}
                <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                        alt="Order & Transaction Processing"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                        <CreditCard className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                          <span>AI + Automation Enabled</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Order & Transaction Processing
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Automated workflows handle routine processing steps, while AI can help validate information, identify exceptions and flag transactions requiring human review.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 3 — Administrative Support */}
                <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                        alt="Administrative Support"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                        <FileText className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                          <span>AI + Automation Enabled</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Administrative Support
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        AI assistants and workflow automation can streamline routine administrative tasks, document handling, scheduling and information management.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Row: 2 Cards (Centered on large screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                
                {/* CARD 4 — Workflow & Process Support */}
                <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                        alt="Workflow & Process Support"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                        <Workflow className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                          <span>AI + Automation Enabled</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Workflow & Process Support
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Automation connects repetitive process steps and reduces manual intervention, while AI can help identify bottlenecks and support operational decision-making.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CARD 5 — Document Processing */}
                <div className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={documentProcessingImg.src}
                        alt="Document Processing"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                        <FileCheck className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                          <span>AI + Automation Enabled</span>
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                          Document Processing
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        AI-powered document processing can extract and classify information, while automation routes the information into the appropriate business workflow.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= 4. BUILT FOR FLEXIBLE SERVICE DELIVERY ================= */}
        <section className="py-16 md:py-24 bg-[#F4FAF6] border-t border-emerald-100/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Built for Flexible Service Delivery
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                From every channel to every customer journey, our delivery capabilities are designed to keep your business responsive, scalable, and ready to grow.
              </p>
            </div>

            {/* 6 Delivery Capabilities: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              
              {/* 01 Omnichannel Support */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <MessagesSquare className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">01</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      Omnichannel Support
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Voice, chat, email, social &amp; digital channels
                  </p>
                </div>
              </div>

              {/* 02 Remote Delivery */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <Laptop className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">02</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      Remote Delivery
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Secure and flexible distributed teams
                  </p>
                </div>
              </div>

              {/* 03 24/7 Support */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <Clock className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">03</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      24/7 Support
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Coverage across time zones and operating hours
                  </p>
                </div>
              </div>

              {/* 04 AI & Automation */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <Bot className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">04</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      AI &amp; Automation
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Smarter workflows and improved productivity
                  </p>
                </div>
              </div>

              {/* 05 Multilingual Support */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <Languages className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">05</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      Multilingual Support
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Support for diverse customers and markets
                  </p>
                </div>
              </div>

              {/* 06 Scalable Operations */}
              <div className="bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 text-[#0D8A4E] flex items-center justify-center shrink-0 border border-emerald-100/80">
                  <TrendingUp className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D8A4E]">06</span>
                    <span className="text-slate-300 text-xs">—</span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      Scalable Operations
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Flexible capacity that grows with your business
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ================= 5. CLOSING CTA ================= */}
        <section className="py-20 md:py-28 bg-white relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ready to Build Better Business?
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Tell us what you need. We&apos;ll explore how the right combination of people, technology and intelligent operations can support your goals.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-2xl transform transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* 7. Existing Footer */}
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
