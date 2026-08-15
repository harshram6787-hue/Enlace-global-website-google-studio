'use client';

import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { ServiceItem } from './ServicesSection';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export function ServiceDetailModal({ service, onClose, onOpenContact }: ServiceDetailModalProps) {
  useEffect(() => {
    if (service) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [service, onClose]);

  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[calc(100vh-40px)] flex flex-col overflow-hidden shadow-2xl border border-emerald-100 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Fixed Header */}
        <div className="shrink-0 p-6 pb-4 sm:p-8 sm:pb-4 border-b border-slate-100 bg-white relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-10 cursor-pointer"
            aria-label="Close service details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 pr-10">
            <div className="p-3 rounded-2xl bg-emerald-100 text-[#0D8A4E] shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#0D8A4E] uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                Core Service Deep Dive
              </span>
              <h3 id="modal-service-title" className="text-2xl font-extrabold text-slate-900 mt-1">{service.title}</h3>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 sm:p-8 space-y-6 overscroll-contain">
          {/* Service Image Banner */}
          <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm shrink-0">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-medium text-emerald-100 drop-shadow-sm">
                {service.positioning}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">{service.description}</p>
          </div>

          {/* Key Capabilities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">Core Operational Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/80 flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Outcomes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3">Expected Business Outcomes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.outcomes.map((out, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <Zap className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="text-xs font-bold text-emerald-800 block">{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enlace Tech Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-2">Integrated Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Action CTAs Footer */}
        <div className="shrink-0 p-4 sm:px-8 sm:py-4 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Tailored SLA agreements and dedicated global pod structure available.
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-emerald-600 to-[#0D8A4E] hover:from-emerald-700 hover:to-emerald-800 shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Discuss {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
