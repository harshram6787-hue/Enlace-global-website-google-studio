'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import { VoiceSupportSlide } from '@/components/VoiceSupportSlide';
import { ChatSupportSlide } from '@/components/ChatSupportSlide';
import { SupportChannelSlide, type SupportChannel } from '@/components/SupportChannelSlide';
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
import voiceSupportImg from '@/src/assets/images/services/voice-support.webp';
import liveChatSupportImg from '@/src/assets/images/services/live-chat-support.webp';
import emailSupportImg from '@/src/assets/images/services/email-support.webp';
import whatsappSupportImg from '@/src/assets/images/services/whatsapp-support.webp';
import leadGenerationImg from '@/src/assets/images/services/lead-generation.webp';
import leadQualificationImg from '@/src/assets/images/services/lead-qualification.webp';
import salesSupportImg from '@/src/assets/images/services/sales-support.webp';
import appointmentSettingImg from '@/src/assets/images/services/appointment-setting.webp';
import virtualAssistanceImg from '@/src/assets/images/services/administrative-support.webp';
import dataEntryImg from '@/src/assets/images/services/data-management-processing.webp';

const integrationPlatforms = ['Zendesk', 'Salesforce', 'HubSpot', 'Freshdesk', 'Intercom', 'Zoho CRM', 'Shopify'];

const backOfficeServices = [
  {
    id: 'virtual-assistance',
    title: 'Virtual Assistance',
    description: 'Get dependable help with inboxes, calendars, follow-ups, and everyday admin tasks so your team has more time for customers and projects.',
    image: virtualAssistanceImg,
    imageAlt: 'Illustrative virtual assistant organising files, coordinating a calendar, and managing daily admin tasks',
    icon: Calendar,
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    description: 'Turn information from forms, spreadsheets, and documents into accurate records your team can use in your CRM, spreadsheets, or business systems.',
    image: dataEntryImg,
    imageAlt: 'Illustrative data entry specialist entering and checking structured spreadsheet records',
    icon: Database,
  },
] as const;

const onboardingSteps = [
  {
    days: 'Days 1–3',
    title: 'Workflow & KPI Mapping',
    description: 'We audit your current tickets/scripts and define clear QA scorecards.',
  },
  {
    days: 'Days 4–10',
    title: 'Agent & AI Setup',
    description: 'We train 2+ dedicated specialists on your brand voice, CRM, and AI assist tools.',
  },
  {
    days: 'Days 11–14',
    title: 'Calibration & Go-Live',
    description: 'Live test calls/chats with daily founder-led QA reviews before full launch.',
  },
];

export default function ServicesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [voiceSupportOpen, setVoiceSupportOpen] = useState(false);
  const [chatSupportOpen, setChatSupportOpen] = useState(false);
  const [supportChannel, setSupportChannel] = useState<SupportChannel | null>(null);
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

      <main className="flex-grow pt-[121px]">
        
        {/* ================= 1. SERVICES HERO ================= */}
        <section className="relative min-h-[450px] md:min-h-[425px] py-10 md:py-12 overflow-hidden flex items-center justify-center">
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
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Services Built for <span className="text-[#0D8A4E]">Better Business</span>
            </h1>

            {/* Hero Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
              Enlace Global combines experienced people, intelligent technology and process excellence to deliver customer experience, revenue growth and operational solutions designed around measurable business needs.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start a 30-Day Pilot</span>
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
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Voice Support"
                  aria-haspopup="dialog"
                  aria-expanded={voiceSupportOpen}
                  aria-controls={voiceSupportOpen ? 'voice-support-slide' : undefined}
                  onClick={() => setVoiceSupportOpen(true)}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={voiceSupportImg.src}
                      alt="Illustrative support specialist wearing a headset while handling a customer call"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
                      24/7 inbound and outbound voice coverage delivered by clear, empathetic specialists—backed by real-time AI call insights and 100% QA compliance auditing to boost first-call resolution.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Chat Support */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Chat Support"
                  aria-haspopup="dialog"
                  aria-expanded={chatSupportOpen}
                  aria-controls={chatSupportOpen ? 'chat-support-slide' : undefined}
                  onClick={() => setChatSupportOpen(true)}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={liveChatSupportImg.src}
                      alt="Illustrative live chat specialist responding to a customer conversation on a desktop screen"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      Cut first-response times to under 60 seconds across web and social channels. Our agents use AI-assisted knowledge retrieval to resolve tier-1 inquiries instantly while escalating complex issues seamlessly.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — Email Support */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Email Support"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'email'}
                  aria-controls={supportChannel === 'email' ? 'email-support-slide' : undefined}
                  onClick={() => setSupportChannel('email')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={emailSupportImg.src}
                      alt="Illustrative email support workstation with an inbox and reply being composed"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      Eliminate inbox backlogs with smart ticket classification, automated tagging, and personalized human responses that keep your CSAT scores consistently high.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 — WhatsApp Support */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about WhatsApp Support"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'whatsapp'}
                  aria-controls={supportChannel === 'whatsapp' ? 'whatsapp-support-slide' : undefined}
                  onClick={() => setSupportChannel('whatsapp')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={whatsappSupportImg.src}
                      alt="Illustrative customer support conversation using green message bubbles on a smartphone"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
                      Meet customers on WhatsApp with timely answers, clear order updates, and smooth handoffs when a specialist is needed.
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
                Turn warm leads into booked meetings through structured outbound follow-ups, lead qualification, and CRM pipeline management.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* CARD 1 — Lead Generation */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Lead Generation"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'lead-generation'}
                  aria-controls={supportChannel === 'lead-generation' ? 'lead-generation-support-slide' : undefined}
                  onClick={() => setSupportChannel('lead-generation')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={leadGenerationImg.src}
                      alt="Illustrative specialist researching prospective customers in a CRM prospect list"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      Build a more relevant prospect list and keep outreach consistent so your sales team spends time on the right opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 — Lead Qualification */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Lead Qualification"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'lead-qualification'}
                  aria-controls={supportChannel === 'lead-qualification' ? 'lead-qualification-support-slide' : undefined}
                  onClick={() => setSupportChannel('lead-qualification')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={leadQualificationImg.src}
                      alt="Illustrative analyst reviewing a prospect qualification checklist with green checkmarks"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                      Prioritize sales-ready prospects by confirming fit, needs, and intent before handing them to your sales team.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 — Sales Support */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Sales Support"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'sales-support'}
                  aria-controls={supportChannel === 'sales-support' ? 'sales-support-support-slide' : undefined}
                  onClick={() => setSupportChannel('sales-support')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={salesSupportImg.src}
                      alt="Illustrative sales support specialist on a headset call reviewing a customer quotation"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
                      Keep deals moving with timely follow-ups, accurate CRM records, and clear handoffs that let your sales team focus on closing.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 4 — Appointment Setting */}
              <div className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                <button
                  type="button"
                  className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                  aria-label="Read more about Appointment Setting"
                  aria-haspopup="dialog"
                  aria-expanded={supportChannel === 'appointment-setting'}
                  aria-controls={supportChannel === 'appointment-setting' ? 'appointment-setting-support-slide' : undefined}
                  onClick={() => setSupportChannel('appointment-setting')}
                />
                <div>
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={appointmentSettingImg.src}
                      alt="Illustrative appointment coordinator arranging a meeting on a digital weekly calendar"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_40%] group-hover:scale-105 transition-transform duration-500"
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
                      Fill your team&apos;s calendar with qualified meetings, coordinated scheduling, and timely reminders that reduce missed appointments.
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
                Dependable support for everyday admin work and accurate records in the tools your team already uses.
              </p>
            </div>

            {/* Back Office Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {backOfficeServices.map((service) => {
                const Icon = service.icon;
                const isOpen = supportChannel === service.id;

                return (
                  <div key={service.id} className="tile-hover group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between relative">
                    <button
                      type="button"
                      className="absolute inset-0 z-10 cursor-pointer rounded-2xl focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-emerald-600"
                      aria-label={'Read more about ' + service.title}
                      aria-haspopup="dialog"
                      aria-expanded={isOpen}
                      aria-controls={isOpen ? service.id + '-support-slide' : undefined}
                      onClick={() => setSupportChannel(service.id)}
                    />
                    <div>
                      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                        <img
                          src={service.image.src}
                          alt={service.imageAlt}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                            {service.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shrink-0">
                            <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                            <span>AI + Automation Enabled</span>
                          </span>
                        </div>
                        <p className="text-slate-600 text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        <section id="tools-platforms" aria-labelledby="tools-platforms-heading" className="py-10 md:py-12 bg-white border-t border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="tools-platforms-heading" className="text-2xl sm:text-3xl font-extrabold text-[#044729] tracking-tight leading-tight">
              Seamless Integration With Your Existing Stack
            </h2>
            <p className="mt-3 max-w-5xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
              Our specialists plug directly into your current CRM and helpdesk tools—no expensive software migration required.
            </p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {integrationPlatforms.map((platform) => (
                <li key={platform} className="rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#044729] shadow-xs">
                  {platform}
                </li>
              ))}
            </ul>
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
              <div className="tile-hover bg-white rounded-xl p-5 sm:p-6 border border-emerald-100/90 shadow-xs hover:border-emerald-300 hover:shadow-sm transition-all duration-200 flex items-start gap-4">
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
                <span>Request Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="services-onboarding" aria-labelledby="services-onboarding-heading" className="py-12 md:py-16 bg-white border-t border-emerald-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services-onboarding-heading" className="text-2xl sm:text-3xl font-extrabold text-[#044729] tracking-tight leading-tight text-center">
              Go Live in as Little as 14 Days
            </h2>
            <div className="relative mt-8">
              <div aria-hidden="true" className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[22px] hidden h-px bg-emerald-200 md:block" />
              <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {onboardingSteps.map((step, index) => (
                  <li key={step.days} className="flex items-start gap-4 text-left md:block md:text-center">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0D8A4E] text-base font-bold text-white shadow-sm md:mx-auto">
                      <span className="sr-only">Step </span>{index + 1}
                    </div>
                    <div className="min-w-0 md:mt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#0D8A4E]">{step.days}</p>
                      <h3 className="mt-2 text-base sm:text-lg font-bold text-[#044729]">{step.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <p className="mt-6 max-w-4xl mx-auto text-sm text-slate-500 italic leading-relaxed text-center">
              *Standard 14-day launch applies to most single-workflow pilot teams. Complex multi-system integrations or custom compliance setups may require 2–3 weeks depending on CRM access and training scope.
            </p>
          </div>
        </section>

        {/* 30-Day Pilot Strip */}
        <aside aria-label="30-day pilot program" className="border-t border-emerald-200 bg-emerald-50/80 py-5">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm sm:text-base text-slate-700 leading-relaxed">
            Want to test our CX, Sales, or Back-Office team before committing?{' '}
            <Link href="/#pilot-section" className="font-bold text-[#0D8A4E] hover:text-[#096B3C] underline underline-offset-4 decoration-emerald-300 transition-colors">
              Explore our 30-Day Low-Risk Pilot →
            </Link>
          </p>
        </aside>
      </main>

      {/* 7. Existing Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Modals */}
      <VoiceSupportSlide isOpen={voiceSupportOpen} onClose={() => setVoiceSupportOpen(false)} />
      <ChatSupportSlide isOpen={chatSupportOpen} onClose={() => setChatSupportOpen(false)} />
      <SupportChannelSlide channel={supportChannel} onClose={() => setSupportChannel(null)} />

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
