'use client';

import React from 'react';
import { Headset, Bot, Shield, Workflow, LineChart, Layers, Check } from 'lucide-react';

export function Capabilities() {
  const capabilitiesList = [
    {
      icon: Headset,
      title: 'Omnichannel Delivery',
      description: 'Unified customer engagement across voice, email, chat, messaging, and digital self-service channels.',
      tag: 'Customer Touchpoints',
    },
    {
      icon: Bot,
      title: 'Real-Time AI Copilot',
      description: 'Empowering specialists with in-call suggestions, instant knowledge retrieval, and automated wrap-ups.',
      tag: 'Specialist Enhancement',
    },
    {
      icon: Workflow,
      title: 'Intelligent Workflows',
      description: 'Streamlining multi-step administrative tasks, CRM entries, and data verification with robotic process automation.',
      tag: 'Process Optimization',
    },
    {
      icon: Shield,
      title: 'Quality & Governance',
      description: 'Automated 100% call auditing, sentiment analysis, and strict adherence to enterprise security standards.',
      tag: 'Compliance & Quality',
    },
    {
      icon: Layers,
      title: 'Rapid Scalability',
      description: 'Elastic global workforce deployment designed to handle seasonal spikes and rapid business expansion.',
      tag: 'Global Infrastructure',
    },
    {
      icon: LineChart,
      title: 'Operational Analytics',
      description: 'Executive dashboards tracking first-contact resolution, customer satisfaction, and continuous process improvements.',
      tag: 'Data-Driven Insights',
    },
  ];

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Operational Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built for Operational Excellence & <span className="text-[#0D8A4E]">Agile Execution</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our technology-enabled architecture combines human ingenuity with intelligent systems to drive precision, scalability, and performance across every interaction.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesList.map((cap, index) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.title}
                className="group relative bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-[#0D8A4E] text-[#0D8A4E] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full group-hover:bg-emerald-100">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0D8A4E] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
