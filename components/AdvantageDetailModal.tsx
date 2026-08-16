'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export interface DetailedAdvantage {
  num: string;
  title: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  explanation: string[];
  keyBenefits: string[];
  image: string | { src: string };
  imageAlt: string;
  technologyFocus?: string;
}

interface AdvantageDetailModalProps {
  advantage: DetailedAdvantage | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function AdvantageDetailModal({
  advantage,
  onClose,
  onOpenContact,
}: AdvantageDetailModalProps) {
  useEffect(() => {
    if (advantage) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [advantage, onClose]);

  if (!advantage) return null;

  const IconComp = advantage.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[calc(100vh-32px)] sm:max-h-[calc(100vh-48px)] flex flex-col overflow-hidden shadow-2xl border border-emerald-100 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-advantage-title"
      >
        {/* Floating Close Button in Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-800 shadow-sm border border-slate-200/80 transition-all z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto overscroll-contain flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">
            
            {/* ================= LEFT COLUMN: Visual Image ================= */}
            <div className="lg:col-span-5 relative bg-slate-100 min-h-[220px] sm:min-h-[280px] lg:min-h-full flex flex-col justify-end p-5 sm:p-6 overflow-hidden">
              <img
                src={typeof advantage.image === 'string' ? advantage.image : advantage.image.src}
                alt={advantage.imageAlt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle Gradient Overlay for Text Readability on Top of Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              {/* Badge on top of Image */}
              <div className="relative z-10 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D8A4E] text-xs font-bold shadow-sm">
                  <IconComp className="w-4 h-4" />
                  <span>Advantage {advantage.num}</span>
                </div>
                <h4 className="text-white text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                  {advantage.title}
                </h4>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: Content & Details ================= */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                
                {/* Header Row */}
                <div className="space-y-2 pr-8 sm:pr-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#0D8A4E]" />
                    <span>The Enlace Global Advantage</span>
                  </div>
                  <h3
                    id="modal-advantage-title"
                    className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight"
                  >
                    {advantage.title}
                  </h3>
                </div>

                {/* 2-3 Paragraph Explanation */}
                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {advantage.explanation.map((para, index) => (
                    <p key={index} className="font-normal">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key Benefits List */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Key Benefits:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {advantage.keyBenefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 transition-colors hover:bg-emerald-50/50 hover:border-emerald-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0D8A4E] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI / Technology Focus if present */}
                {advantage.technologyFocus && (
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Technology & Intelligent Enablement
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {advantage.technologyFocus}
                    </p>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer text-center"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
