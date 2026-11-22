'use client';

import React from 'react';

export function WelcomeNote() {
  return (
    <section id="welcome" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Built for Agility, Governance, and <span className="text-[#0D8A4E]">Measurable ROI</span>
        </h2>

        {/* Concise Statement */}
        <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed text-slate-700/90 space-y-4">
          <p>
            Traditional outsourcing giants lock you into rigid contracts and treat your customers like ticket numbers. Enlace Global offers a smarter alternative. We pair India’s sharpest customer support and sales talent with real-time AI tools and strict quality auditing—giving growing businesses 14-day onboarding and direct leadership oversight without the enterprise bloat. Our teams align with your brand, workflows, and customer expectations, supported by clear reporting and accountable delivery. This helps you scale support, strengthen sales follow-through, and keep your core team focused on growth.
          </p>
        </div>

      </div>
    </section>
  );
}

