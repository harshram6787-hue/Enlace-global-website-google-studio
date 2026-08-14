'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import homeHeroImg from '@/src/assets/images/home_hero_bpo_1786610963903.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 overflow-hidden min-h-[500px] md:min-h-[560px] flex items-center justify-center">
      {/* Background Image with Light Tint Overlay (Matches About Us Hero Style) */}
      <div className="absolute inset-0 z-0">
        <img
          src={homeHeroImg.src}
          alt="Enlace Global AI-Enabled BPO operations and human expertise"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft White Gradient Overlay to Keep Text Perfectly Readable While Showing Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white/80" />
        <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
        {/* Pill Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Next-Generation AI-Enabled BPO Services</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
          Intelligent service.{' '}
          <span className="text-[#0D8A4E]">Human expertise.</span>{' '}
          <br className="hidden sm:inline" />
          Better business outcomes.
        </h1>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-800 max-w-3xl mx-auto font-medium sm:font-semibold leading-relaxed drop-shadow-sm">
          Enlace Global is an AI-enabled BPO and business process partner combining skilled global talent with intelligent automation to elevate customer experience, drive revenue growth, and optimize back-office operations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-700/30 transform transition-all duration-200 active:scale-98 group cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[#0D8A4E] bg-white border-2 border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>Explore Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
