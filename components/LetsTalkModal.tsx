'use client';

import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

export const PILOT_SERVICE_INTEREST = '30-Day Low-Risk Pilot (2 Dedicated Agents)';

interface LetsTalkModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceInterest?: string;
  inline?: boolean;
  heading?: string;
}

export function LetsTalkModal({ isOpen, onClose, initialServiceInterest = 'Customer Experience', inline = false, heading = 'Request Callback' }: LetsTalkModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: initialServiceInterest,
    message: '',
    pilotRequested: false,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((current) => ({
        ...current,
        serviceInterest: initialServiceInterest,
        pilotRequested: false,
      }));
    }
  }, [isOpen, initialServiceInterest]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/mgaewezl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        pilotRequested: formData.pilotRequested ? 'Yes' : 'No',
      }),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Unable to submit the form. Please try again.");
    }
  } catch {
    alert("Unable to submit the form. Please check your connection.");
  }
};

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={inline ? 'w-full' : 'fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200'}>
      <div className={inline ? 'bg-white rounded-3xl w-full p-6 sm:p-8 shadow-lg border border-emerald-100' : 'bg-white rounded-2xl max-w-lg w-full max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-3rem)] p-2 shadow-2xl border border-emerald-100 relative overflow-hidden flex flex-col'}>
        
        {/* Close button */}
        {!inline && <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>}

        <div className={inline ? undefined : 'callback-modal-scroll min-h-0 overflow-y-auto overscroll-contain rounded-xl px-4 py-4 sm:px-6 sm:py-6'}>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#0D8A4E] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Thank You for Connecting</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Your inquiry has been received. An Enlace Global executive specialist will reach out to discuss your operational objectives within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-md transition-all"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className={inline ? undefined : 'pr-9'}>
              <h3 className="text-2xl font-extrabold text-slate-900">{heading}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Discover how Enlace Global can transform your operations with intelligent technology and skilled human talent.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="jane@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="serviceInterest" className="block text-xs font-semibold text-slate-700 mb-1">Primary Area of Interest</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none bg-white"
                >
                  <option value="Customer Experience">Customer Experience (CX)</option>
                  <option value="Revenue Growth">Revenue Growth & Tele-Sales</option>
                  <option value="Back Office Operations">Back Office & Workflow Automation</option>
                  <option value="Hybrid Custom Model">Full Custom BPO Solution</option>
                  <option value={PILOT_SERVICE_INTEREST}>{PILOT_SERVICE_INTEREST}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Project Overview</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your team size, volumes, or operational goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <label className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  name="pilotRequested"
                  checked={formData.pilotRequested}
                  onChange={(e) => setFormData({ ...formData, pilotRequested: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#0D8A4E] focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                />
                <span>I want to start with the 30-Day Low-Risk Pilot (2 AI-enabled specialists at introductory pricing)</span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0D8A4E] hover:bg-[#096B3C] shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
