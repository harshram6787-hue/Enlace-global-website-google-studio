'use client';

import React from 'react';
import {
  Sparkles,
  Users,
  Cpu,
  LineChart,
  Zap,
  HeartHandshake,
  TrendingUp,
  Layers,
} from 'lucide-react';

export function OperationalArchitectureSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-[#06331D] to-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Our Operational Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Intelligence Across Every Service
          </h2>

          <p className="text-lg sm:text-xl text-emerald-100/90 font-medium leading-relaxed">
            AI and automation are not separate from what we do—they strengthen every service we deliver.
          </p>
        </div>

        {/* VISUAL FLOW DIAGRAM */}
        <div className="space-y-8 md:space-y-12">
          
          {/* LAYER 1: INPUT LAYER */}
          <div>
            <div className="text-center mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Layer 1: Foundations</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 text-center space-y-3 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Human Expertise</h3>
                <p className="text-xs text-emerald-200/80">Skilled specialists, domain leaders & empathetic agent teams</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 text-center space-y-3 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">AI & Automation</h3>
                <p className="text-xs text-emerald-200/80">Generative models, real-time agent assist & RPA bots</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 text-center space-y-3 hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Data & Insights</h3>
                <p className="text-xs text-emerald-200/80">Continuous sentiment tracking, analytics & workflow metrics</p>
              </div>

            </div>
          </div>

          {/* CONNECTING ARROWS */}
          <div className="flex justify-center items-center py-1">
            <div className="flex flex-col items-center text-emerald-400 space-y-1">
              <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600" />
              <Zap className="w-5 h-5 animate-pulse text-emerald-300" />
              <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-600 to-emerald-400" />
            </div>
          </div>

          {/* LAYER 2: CORE SERVICE LAYER */}
          <div>
            <div className="text-center mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Layer 2: Three Service Pillars</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              <div className="bg-gradient-to-br from-emerald-900/80 to-emerald-950/90 rounded-2xl p-6 border border-emerald-400/40 text-center space-y-2 shadow-lg">
                <div className="p-2.5 rounded-lg bg-emerald-500/30 text-emerald-300 w-fit mx-auto">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Customer Experience</h3>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/80 to-emerald-950/90 rounded-2xl p-6 border border-emerald-400/40 text-center space-y-2 shadow-lg">
                <div className="p-2.5 rounded-lg bg-emerald-500/30 text-emerald-300 w-fit mx-auto">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Revenue Growth</h3>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/80 to-emerald-950/90 rounded-2xl p-6 border border-emerald-400/40 text-center space-y-2 shadow-lg">
                <div className="p-2.5 rounded-lg bg-emerald-500/30 text-emerald-300 w-fit mx-auto">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Back Office Operations</h3>
              </div>

            </div>
          </div>

          {/* CONNECTING ARROWS */}
          <div className="flex justify-center items-center py-1">
            <div className="flex flex-col items-center text-emerald-400 space-y-1">
              <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600" />
              <Zap className="w-5 h-5 animate-pulse text-emerald-300" />
              <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-600 to-emerald-400" />
            </div>
          </div>

          {/* LAYER 3: OUTCOME LAYER */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Layer 3: Measurable Outcomes</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              
              <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl py-3 px-4 text-center">
                <span className="text-sm sm:text-base font-extrabold text-emerald-200">Faster</span>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl py-3 px-4 text-center">
                <span className="text-sm sm:text-base font-extrabold text-emerald-200">Smarter</span>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl py-3 px-4 text-center">
                <span className="text-sm sm:text-base font-extrabold text-emerald-200">More Consistent</span>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl py-3 px-4 text-center">
                <span className="text-sm sm:text-base font-extrabold text-emerald-200">More Scalable</span>
              </div>

            </div>
          </div>

          {/* BOTTOM FORMULA BANNER */}
          <div className="max-w-3xl mx-auto mt-8 p-5 rounded-2xl bg-white/5 border border-emerald-500/30 backdrop-blur-md text-center">
            <p className="text-sm sm:text-base font-semibold text-emerald-200">
              <span className="text-white">Human Expertise + AI & Automation + Data & Insights</span>
              <span className="text-emerald-400 mx-2">→</span>
              <span className="text-white">Three Service Pillars</span>
              <span className="text-emerald-400 mx-2">→</span>
              <span className="text-emerald-300 font-bold">Better Business Outcomes</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
