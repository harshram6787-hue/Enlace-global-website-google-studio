'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';

// Images generated for Industries page
import heroBg from '@/src/assets/images/industries_hero_bg_1786731911426.jpg';

import {
  Zap,
  Monitor,
  ShoppingBag,
  Landmark,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

const industryCards = [
  {
    id: 'energy-broadband-utilities',
    title: 'Energy, Broadband & Utilities',
    icon: Zap,
    backgroundClass: 'bg-[#EDF7F0]',
    tagline:
      'Compliance-first customer acquisition, technical triage, and retention for energy retailers, ISPs, and comparison platforms.',
    workflows: [
      {
        title: 'Plan Comparison & Sales Support',
        description: 'Inbound and outbound tariff, NBN/fiber, and bundle comparison assistance.',
      },
      {
        title: 'Strict Regulatory & QA Auditing',
        description: '100% call quality monitoring aligned with strict consumer protection and switching compliance rules.',
      },
      {
        title: 'Onboarding, Provisioning & Retention',
        description: 'Order status follow-ups, tier-1 connection troubleshooting, billing inquiries, and churn prevention.',
      },
    ],
  },
  {
    id: 'saas-tech',
    title: 'SaaS & Tech Companies',
    icon: Monitor,
    backgroundClass: 'bg-[#F1ECFA]',
    tagline: 'Agile, AI-equipped support and SDR teams that scale alongside your product.',
    workflows: [
      {
        title: 'Tier-1 Technical Support & Onboarding',
        description: 'Product troubleshooting, bug triage, and smooth user activation.',
      },
      {
        title: 'Outbound SDR & Demo Booking',
        description: 'Proactive lead qualification and calendar scheduling for your sales team.',
      },
      {
        title: 'Omnichannel Helpdesk Management',
        description: 'Fast ticket resolution inside Intercom, Zendesk, and HubSpot.',
      },
    ],
  },
  {
    id: 'ecommerce-d2c',
    title: 'E-Commerce & D2C Brands',
    icon: ShoppingBag,
    backgroundClass: 'bg-[#FFF1E7]',
    tagline: 'Fast, omnichannel customer care that turns first-time buyers into repeat loyalists.',
    workflows: [
      {
        title: '24/7 Omnichannel Support',
        description: 'Live chat, email, and social care handling WISMO ("Where is my order?") and returns.',
      },
      {
        title: 'Revenue Recovery',
        description: 'Proactive abandoned cart follow-ups, subscription retention, and order updates.',
      },
      {
        title: 'Seamless Platform Integration',
        description: 'AI-assisted tier-1 resolution plugged directly into Shopify, Gorgias, and Freshdesk.',
      },
    ],
  },
  {
    id: 'financial-services-insurance',
    title: 'Financial Services & Insurance (Non-Advisory Support)',
    icon: Landmark,
    backgroundClass: 'bg-[#EAF3FB]',
    tagline:
      'High-trust customer support, lead qualification, and back-office processing built on strict regulatory compliance and data governance.',
    workflows: [
      {
        title: 'Inbound Lead Qualification & Scheduling',
        description: "Answering general inquiries, verifying basic eligibility, and booking qualified prospects onto licensed advisors' calendars (strictly non-advisory).",
      },
      {
        title: 'Policy Renewal & Retention Outreach',
        description: 'Proactive outbound reminders for upcoming insurance renewals, lapsed payments, and account check-ins using compliance-checked scripts.',
      },
      {
        title: 'KYC & Document Verification Support',
        description: 'Following up with applicants via phone, email, or chat to collect missing identity documents and verify application completeness.',
      },
      {
        title: 'Back-Office Data & CRM Management',
        description: 'Accurate claims intake logging, billing updates, and audit-ready record keeping inside Salesforce or Zoho under strict NDA & Zero-Trust security.',
      },
    ],
  },
];

export default function IndustriesPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [placeholderData, setPlaceholderData] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleOpenPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };


  return (
    <main className="min-h-screen bg-slate-50/50 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 pt-[121px]">
      {/* Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[420px] md:min-h-[425px] py-10 md:py-12 overflow-hidden flex items-center justify-center">
        {/* Background Visual Image with Overlay (Matches Services Hero Style) */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg.src}
            alt="Interconnected industries powered by human AI collaboration"
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
            <span className="text-[#0D8A4E]">INDUSTRIES</span> WE SERVE
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
            We focus on high-growth, regulated industries where customer empathy, rapid response times, and strict quality governance drive measurable revenue.
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start a 30-Day Pilot</span>
            </button>
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

          {/* Four specialist cards: two columns on desktop, stacked on mobile */}
          <div id="industry-specialists" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryCards.map((card) => {
              const IconComp = card.icon;
              return (
                <article
                  key={card.id}
                  aria-labelledby={`industry-${card.id}-heading`}
                  className={`tile-hover flex flex-col p-7 sm:p-8 rounded-2xl ${card.backgroundClass} border border-slate-200/80 hover:border-emerald-500/80 shadow-sm hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#0D8A4E] group-hover:bg-[#0D8A4E] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComp aria-hidden="true" className="w-7 h-7" />
                    </div>

                    {/* Industry Title */}
                    <h3 id={`industry-${card.id}-heading`} className="text-xl font-bold text-slate-900 group-hover:text-[#0D8A4E] transition-colors">
                      {card.title}
                    </h3>

                    {/* Industry Tagline */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {card.tagline}
                    </p>
                  </div>

                  {/* Workflows are visible directly in each card */}
                  <div className="pt-6 border-t border-slate-100 mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D8A4E] mb-4">
                      Key Workflows
                    </h4>
                    <ul className="space-y-4">
                      {card.workflows.map((workflow) => (
                        <li key={workflow.title} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 aria-hidden="true" className="w-4 h-4 shrink-0 mt-0.5 text-[#0D8A4E]" />
                          <span>
                            <strong className="font-semibold text-[#044729]">{workflow.title}:</strong>{' '}
                            {workflow.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. 30-DAY PILOT CTA ================= */}
      <section aria-labelledby="industries-pilot-heading" className="border-t border-emerald-200 bg-emerald-50/80 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 id="industries-pilot-heading" className="text-xl sm:text-2xl font-bold text-[#044729] leading-snug">
            Operate in one of these sectors? Test us with zero long-term lock-in.
          </h2>
          <Link
            href="/#pilot-section"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-xl transform transition-all duration-200 active:scale-95 shrink-0"
          >
            <MessageSquare aria-hidden="true" className="w-5 h-5" />
            <span>Start a 30-Day Pilot</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer
        onOpenContact={() => setContactOpen(true)}
        onOpenPlaceholder={handleOpenPlaceholder}
      />

      {/* Interactive Modals */}
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
