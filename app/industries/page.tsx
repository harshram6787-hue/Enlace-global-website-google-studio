'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';
import { IndustryDetailModal, DetailedIndustry } from '@/components/IndustryDetailModal';

// Images generated for Industries page
import heroBg from '@/src/assets/images/industries_hero_bg_1786612258727.jpg';
import realEstateImg from '@/src/assets/images/ind_real_estate_1786612273727.jpg';
import healthcareImg from '@/src/assets/images/ind_healthcare_1786612289224.jpg';
import educationImg from '@/src/assets/images/ind_education_1786612305451.jpg';
import energyImg from '@/src/assets/images/ind_energy_1786612319834.jpg';
import ecommerceImg from '@/src/assets/images/ind_ecommerce_1786612335431.jpg';
import travelImg from '@/src/assets/images/ind_travel_1786612353451.jpg';

import {
  Building2,
  HeartPulse,
  GraduationCap,
  Zap,
  ShoppingBag,
  Plane,
  ArrowRight,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

export default function IndustriesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<DetailedIndustry | null>(null);
  const [placeholderData, setPlaceholderData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  const industryCards = [
    {
      id: 'real-estate',
      title: 'Real Estate',
      icon: Building2,
      description:
        'Helping property businesses connect with prospects, manage enquiries, and create better customer experiences.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: HeartPulse,
      description:
        'Supporting patient and customer interactions with responsive, reliable, and technology-enabled solutions.',
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      description:
        'Helping educational institutions engage learners, manage enquiries, and deliver better support experiences.',
    },
    {
      id: 'energy-utilities',
      title: 'Energy & Utilities',
      icon: Zap,
      description:
        'Supporting energy and utility providers with responsive customer service, sales support, enquiry management, and technology-enabled customer experiences.',
    },
    {
      id: 'ecommerce-d2c',
      title: 'E-commerce & D2C',
      icon: ShoppingBag,
      description:
        'Supporting brands across customer service, sales, engagement, retention, and the complete customer journey.',
    },
    {
      id: 'travel-hospitality',
      title: 'Travel & Hospitality',
      icon: Plane,
      description:
        'Helping travel and hospitality businesses deliver responsive customer support throughout the customer journey.',
    },
  ];

  const detailedIndustriesData: Record<string, DetailedIndustry> = {
    'real-estate': {
      id: 'real-estate',
      title: 'REAL ESTATE',
      badge: 'Property & Housing',
      icon: Building2,
      valueProposition:
        'Help prospects move from enquiry to decision with responsive customer engagement and sales support.',
      capabilities: [
        'Lead Generation & Qualification',
        'Property Enquiry Management',
        'Customer Support',
        'Appointment & Site Visit Coordination',
        'Lead Follow-ups',
        'AI-Powered Lead Engagement & Automation',
      ],
      aiMessage:
        'Use AI-powered lead handling, automated follow-ups, conversation insights, and workflow automation to help real estate teams respond faster and manage prospects more efficiently.',
      image: realEstateImg.src,
    },
    healthcare: {
      id: 'healthcare',
      title: 'HEALTHCARE',
      badge: 'Patient & Provider Services',
      icon: HeartPulse,
      valueProposition:
        'Deliver reliable, responsive support that helps healthcare organizations improve patient and customer interactions.',
      capabilities: [
        'Patient & Customer Support',
        'Appointment Assistance',
        'Enquiry Management',
        'Follow-ups & Engagement',
        'Customer Communication',
        'AI-Assisted Support & Automation',
      ],
      aiMessage:
        'Use AI-assisted customer interactions, automated workflows, conversation support, and intelligent routing to improve responsiveness and operational efficiency.',
      image: healthcareImg.src,
    },
    education: {
      id: 'education',
      title: 'EDUCATION',
      badge: 'Institutions & EdTech',
      icon: GraduationCap,
      valueProposition:
        'Help educational institutions connect with prospective students, support learners, and improve engagement throughout the student journey.',
      capabilities: [
        'Student Enquiry Management',
        'Admissions Support',
        'Lead Generation & Qualification',
        'Counselling & Appointment Coordination',
        'Student Support',
        'AI-Powered Enquiry Handling & Automation',
      ],
      aiMessage:
        'Use AI-powered enquiry handling, lead qualification, automated follow-ups, and workflow automation to help institutions engage prospective and existing students more effectively.',
      image: educationImg.src,
    },
    'energy-utilities': {
      id: 'energy-utilities',
      title: 'ENERGY & UTILITIES',
      badge: 'Utilities & Clean Energy',
      icon: Zap,
      valueProposition:
        'Combine responsive customer support and sales assistance to help energy and utility providers improve customer engagement and operational efficiency.',
      capabilities: [
        'Customer Service & Support',
        'Sales & Lead Generation',
        'Billing & Account Enquiries',
        'Service Request Management',
        'Complaint & Resolution Management',
        'Customer Retention & Engagement',
        'AI-Powered Support & Workflow Automation',
      ],
      aiMessage:
        'Use AI-powered customer support, intelligent enquiry handling, automated workflows, conversation insights, and sales assistance to improve customer engagement and operational efficiency.',
      image: energyImg.src,
    },
    'ecommerce-d2c': {
      id: 'ecommerce-d2c',
      title: 'E-COMMERCE & D2C',
      badge: 'Retail & Direct-To-Consumer',
      icon: ShoppingBag,
      valueProposition:
        'Help brands turn every customer interaction into an opportunity to build loyalty, drive sales, and improve retention.',
      capabilities: [
        'Customer Service',
        'Order & Delivery Support',
        'Returns & Refund Assistance',
        'Sales & Upselling',
        'Customer Retention',
        'AI-Powered Customer Engagement & Automation',
      ],
      aiMessage:
        'Use AI-powered customer interactions, automated support workflows, intelligent recommendations, and conversation insights to improve service, engagement, and sales opportunities.',
      image: ecommerceImg.src,
    },
    'travel-hospitality': {
      id: 'travel-hospitality',
      title: 'TRAVEL & HOSPITALITY',
      badge: 'Tourism & Hospitality',
      icon: Plane,
      valueProposition:
        'Create seamless customer experiences across enquiries, bookings, support, and the entire travel journey.',
      capabilities: [
        'Booking & Reservation Support',
        'Customer Service',
        'Travel Enquiry Management',
        'Sales & Lead Generation',
        'Complaint Resolution',
        'Customer Engagement & Retention',
        'AI-Powered Customer Support & Automation',
      ],
      aiMessage:
        'Use AI-assisted customer support, automated enquiry handling, intelligent routing, and workflow automation to provide faster and more personalized customer experiences.',
      image: travelImg.src,
    },
  };

  const handleExploreMore = (id: string) => {
    const detailData = detailedIndustriesData[id];
    if (detailData) {
      setSelectedIndustry(detailData);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pt-20">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#044729] via-[#086338] to-[#0D8A4E] text-white py-20 md:py-28">
        {/* Background Visual Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <img
            src={heroBg.src}
            alt="Interconnected industries powered by human AI collaboration"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Ambient Subtle Emerald Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-300/30 text-emerald-200 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Tailored BPO & Customer Experience Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              INDUSTRIES WE SERVE
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 font-normal leading-relaxed max-w-2xl">
              Industry-focused customer experience solutions powered by people, technology, AI, and automation.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-[#044729] bg-white hover:bg-emerald-50 shadow-xl hover:shadow-2xl transform transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#0D8A4E]" />
                <span>LET&apos;S TALK</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. INDUSTRIES WE SERVE — GRID ================= */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Domain-specific customer engagement, sales, support, and back-office operations tailored for your sector.
            </p>
          </div>

          {/* 6 Industry Cards Grid (Desktop: 2x3 grid / Tablet: 2 cols / Mobile: 1 col) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {industryCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500/80 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D8A4E] group-hover:bg-[#0D8A4E] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Industry Title */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors">
                      {card.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Explore More CTA Button -> Opens Detailed Modal/Slide */}
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <button
                      onClick={() => handleExploreMore(card.id)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0D8A4E] hover:text-[#065F35] transition-colors group/btn cursor-pointer"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. FINAL CTA ================= */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D8A4E] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Transform Your Customer Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
            LET&apos;S CREATE BETTER EXPERIENCES FOR YOUR INDUSTRY
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and discover how Enlace Global can help you improve customer experience, efficiency, and growth.
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

      {/* Interactive Modals & Slide-Overs */}
      <IndustryDetailModal
        industry={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        onOpenContact={() => {
          setSelectedIndustry(null);
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
