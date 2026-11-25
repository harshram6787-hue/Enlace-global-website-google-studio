'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PilotSectionProps {
  onOpenContact: () => void;
}

const pilotHighlights = [
  {
    title: '2 Dedicated Agents',
    backgroundClass: 'bg-[#EDF7F0]',
    description: 'Skilled specialists trained specifically on your brand, workflows, and tools.',
  },
  {
    title: '30-Day Introductory Rate',
    backgroundClass: 'bg-[#F1ECFA]',
    description: 'Lower your upfront risk with special discounted pilot pricing for your first month.',
  },
  {
    title: 'Full AI & Automation Suite',
    backgroundClass: 'bg-[#EAF3FB]',
    description: 'Includes real-time agent assist, sentiment tracking, and QA reporting from day one.',
  },
  {
    title: 'Founder-Led Oversight',
    backgroundClass: 'bg-[#FFF1E7]',
    description: 'Direct weekly check-ins with our founder to ensure seamless execution.',
  },
];

export function PilotSection({ onOpenContact }: PilotSectionProps) {
  return (
    <section
      id="pilot-section"
      aria-labelledby="pilot-heading"
      className="scroll-mt-32 py-16 md:py-20 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-100 bg-white px-6 py-10 sm:px-8 md:px-12 md:py-12 text-[#044729] shadow-sm">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-4xl mx-auto space-y-5">
              <h2 id="pilot-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
                Test Our AI-Enabled Team Before You Commit
              </h2>

              <p className="text-base sm:text-lg text-[#044729]/90 font-normal leading-relaxed max-w-3xl mx-auto">
                Experience the Enlace Global difference with a low-risk, 30-day pilot program. Deploy two dedicated, AI-equipped specialists into your workflow at a special introductory rate—with zero long-term lock-in.
              </p>
            </div>

            <ul className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pilotHighlights.map((highlight) => (
                <li key={highlight.title} className={`tile-hover flex items-start gap-3 rounded-2xl border border-emerald-100 ${highlight.backgroundClass} p-5 sm:p-6`}>
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-[#0D8A4E] text-white" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#044729]/80 font-normal leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10 flex justify-center">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-[#0D8A4E] text-base font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] hover:border-[#096B3C] shadow-sm transition-all duration-200 active:scale-98 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span>Claim Your 30-Day Pilot</span>
                <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-3 text-center text-xs sm:text-sm text-slate-500 leading-relaxed">
              NDA-protected &amp; GDPR/DPDP aligned.{' '}
              <Link href="/advantages#data-security" className="font-medium text-[#0D8A4E]/80 hover:text-[#096B3C] hover:underline underline-offset-4 transition-colors">
                Learn about our security →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
