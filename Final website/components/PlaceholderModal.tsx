'use client';

import React from 'react';
import { X, ArrowRight, Layers, Sparkles } from 'lucide-react';

interface PlaceholderModalProps {
  title: string | null;
  description: string | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function PlaceholderModal({ title, description, onClose, onOpenContact }: PlaceholderModalProps) {
  if (!title) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 text-center py-2">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>

          <div>
            <span className="text-xs font-bold text-[#0D8A4E] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full">
              Enterprise Roadmap
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">{title}</h3>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            {description}
          </p>

          <div className="pt-4 flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-md transition-all cursor-pointer"
            >
              <span>Speak with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
