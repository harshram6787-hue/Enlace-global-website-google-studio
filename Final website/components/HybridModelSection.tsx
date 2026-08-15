'use client';

import React from 'react';
import { UserCheck, Bot, Cpu, ArrowRight, ArrowDown, Sparkles, CheckCircle2, Zap, ShieldAlert, Award } from 'lucide-react';

export function HybridModelSection() {
  return (
    <section id="advantages" className="pt-4 pb-12 md:pt-6 md:pb-16 bg-white relative overflow-hidden">
      {/* Soft Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Our Competitive Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Enlace Global Hybrid Model
          </h2>

          <p className="text-lg sm:text-xl font-bold text-[#0D8A4E]">
            The best of human expertise and intelligent technology working together.
          </p>
        </div>

        {/* Visual Infographic Flow Chart */}
        <div className="space-y-6 md:space-y-8">
          
          {/* TOP ROW: Inputs (Human Expertise & AI) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
            {/* HUMAN EXPERTISE */}
            <div className="bg-emerald-50/50 p-5 sm:p-6 rounded-2xl border-2 border-emerald-200/80 shadow-md relative group hover:border-emerald-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Human Expertise</h3>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Customer interaction & deep active listening</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Empathy & emotional intelligence</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Critical decision-making & nuance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Complex issue handling & escalations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Long-term client relationship management</span>
                </li>
              </ul>
            </div>

            {/* AI & AUTOMATION */}
            <div className="bg-emerald-50/50 p-5 sm:p-6 rounded-2xl border-2 border-emerald-200/80 shadow-md relative group hover:border-emerald-400 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D8A4E] text-white flex items-center justify-center shadow-md">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">AI & Automation</h3>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Repetitive task automation & instant execution</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Real-time specialist assistance & prompts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Automated 100% quality monitoring</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Workflow optimization & dynamic routing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Predictive data insights & analytics</span>
                </li>
              </ul>
            </div>

          </div>

          {/* VISUAL FLOW ARROW DOWN TO CENTER */}
          <div className="flex justify-center items-center py-1">
            <div className="flex flex-col items-center gap-1 text-[#0D8A4E]">
              <span className="text-xs font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full text-emerald-800">
                Synergistic Integration
              </span>
              <ArrowDown className="w-6 h-6 animate-bounce text-[#0D8A4E] stroke-[3]" />
            </div>
          </div>

          {/* CENTRAL HIGHLIGHTED MODEL */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#0D8A4E] via-emerald-600 to-[#096B3C] p-6 sm:p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden text-center border-4 border-emerald-300">
              
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Cpu className="w-48 h-48" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-emerald-100 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Central Core Engine</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Enlace Global Hybrid Model
                </h3>

                <p className="text-base sm:text-lg font-bold text-emerald-100 tracking-wide">
                  People + AI + Automation Working in Harmony
                </p>

                <p className="text-sm text-emerald-50 max-w-xl mx-auto font-normal leading-relaxed opacity-95">
                  By unifying human intelligence with automated digital co-pilots, our specialists resolve complex cases faster while maintaining high customer satisfaction.
                </p>
              </div>

            </div>
          </div>

          {/* VISUAL FLOW ARROW DOWN TO OUTCOMES */}
          <div className="flex justify-center items-center py-1">
            <div className="flex flex-col items-center gap-1 text-[#0D8A4E]">
              <span className="text-xs font-bold uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full text-emerald-800">
                Drives Measurable Results
              </span>
              <ArrowDown className="w-6 h-6 animate-bounce text-[#0D8A4E] stroke-[3]" />
            </div>
          </div>

          {/* BUSINESS OUTCOMES GRID */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-slate-900">Superior Business Outcomes</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              
              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Better Customer Experience</div>
                <div className="text-xs text-slate-500 font-medium">Personalized & Empathetic</div>
              </div>

              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Higher Productivity</div>
                <div className="text-xs text-slate-500 font-medium">Automated Repetitive Tasks</div>
              </div>

              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Faster Response</div>
                <div className="text-xs text-slate-500 font-medium">Instant AI Retrieval</div>
              </div>

              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Improved Scalability</div>
                <div className="text-xs text-slate-500 font-medium">Elastic Global Workforce</div>
              </div>

              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Greater Efficiency</div>
                <div className="text-xs text-slate-500 font-medium">Streamlined Cost Structure</div>
              </div>

              <div className="p-5 rounded-xl bg-white border-2 border-emerald-100 hover:border-emerald-300 shadow-sm transition-all text-center space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#0D8A4E] flex items-center justify-center mx-auto font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-900">Stronger Outcomes</div>
                <div className="text-xs text-slate-500 font-medium">Measurable ROI & Growth</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
