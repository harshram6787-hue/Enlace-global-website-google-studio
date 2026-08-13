'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-8 lg:pt-36 lg:pb-12 bg-gradient-to-b from-emerald-50/40 via-white to-white overflow-hidden">
      {/* Background Subtle Grid & Light Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-200/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Pill Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Next-Generation AI-Enabled BPO Services</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Intelligent service.{' '}
              <span className="text-[#0D8A4E]">Human expertise.</span>{' '}
              <br className="hidden sm:inline" />
              Better business outcomes.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Enlace Global is an AI-enabled BPO and business process partner combining skilled global talent with intelligent automation to elevate customer experience, drive revenue growth, and optimize back-office operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 transform transition-all duration-200 active:scale-98 group cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#0D8A4E] bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

          </div>

          {/* Right Column: BPO Specialist Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-emerald-100/80 shadow-emerald-soft group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                <img
                  src="/hero_bpo_female.jpg"
                  alt="Enlace Global BPO specialist wearing headset with glowing world map background"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
