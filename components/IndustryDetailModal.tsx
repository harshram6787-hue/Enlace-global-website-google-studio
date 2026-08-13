'use client';

import React from 'react';
import { X, CheckCircle2, Bot, MessageSquare, ArrowRight } from 'lucide-react';

export interface DetailedIndustry {
  id: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  valueProposition: string;
  capabilities: string[];
  aiMessage: string;
  image: string;
}

interface IndustryDetailModalProps {
  industry: DetailedIndustry | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function IndustryDetailModal({
  industry,
  onClose,
  onOpenContact,
}: IndustryDetailModalProps) {
  if (!industry) return null;

  const IconComp = industry.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-emerald-100 relative space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 pr-8">
          <div className="p-3 rounded-2xl bg-emerald-100 text-[#0D8A4E] shrink-0">
            <IconComp className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#0D8A4E] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
              {industry.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {industry.title}
            </h3>
          </div>
        </div>

        {/* Visual Banner */}
        <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden bg-slate-100 border border-emerald-100 shadow-sm">
          <img
            src={industry.image}
            alt={industry.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Value Proposition */}
        <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Value Proposition</h4>
          <p className="text-base font-semibold text-[#044729] leading-relaxed">
            {industry.valueProposition}
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Core Industry Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.capabilities.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0D8A4E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Automation Message */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-2 text-[#044729] font-bold text-xs uppercase tracking-wider">
            <Bot className="w-4 h-4 text-[#0D8A4E]" />
            <span>AI & Automation Focus</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {industry.aiMessage}
          </p>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            Enlace Global delivers tailored CX & operations for {industry.title}.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>LET&apos;S TALK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
