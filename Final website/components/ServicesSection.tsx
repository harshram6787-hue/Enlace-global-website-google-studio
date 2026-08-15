'use client';

import React from 'react';
import { ArrowUpRight, HeartHandshake, TrendingUp, Cpu } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  positioning: string;
  description: string;
  image: string;
  icon: React.ElementType;
  keyFeatures: string[];
  outcomes: string[];
  techStack: string[];
}

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const serviceData: ServiceItem[] = [
  {
    id: 'customer-experience',
    title: 'Customer Experience',
    positioning: 'Deliver seamless, responsive and personalized customer interactions across relevant channels.',
    description: 'Transform every touchpoint into a lasting brand relationship with AI-assisted specialists across voice, digital, and mobile channels.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    icon: HeartHandshake,
    keyFeatures: [
      'Omnichannel Voice, Chat & Email Support',
      'Real-Time AI Agent Assist & Sentiment Tracking',
      'Multilingual Tier 1 to Tier 3 Resolution',
      'Proactive Customer Journey Orchestration',
    ],
    outcomes: [
      '+35% First Contact Resolution (FCR)',
      '+24pt CSAT Score Enhancement',
      '40% Reduction in Average Handle Time (AHT)',
    ],
    techStack: ['AI Sentiment Engine', 'Omnichannel Routing', 'CRM Synchronization', 'Automated QA'],
  },
  {
    id: 'revenue-growth',
    title: 'Revenue Growth',
    positioning: 'Support sales, lead generation, qualification, appointment setting and revenue-focused customer engagement.',
    description: 'Accelerate your pipeline and customer lifetime value with data-driven sales development and high-converting engagement workflows.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    icon: TrendingUp,
    keyFeatures: [
      'B2B / B2C Lead Qualification & Nurturing',
      'Inbound & Outbound Sales Acceleration',
      'Account-Based Appointment Setting',
      'Win-back & Retention Tele-Sales Campaigns',
    ],
    outcomes: [
      '+48% Sales Qualified Lead (SQL) Conversion',
      '3.2x Return on Campaign Investment',
      '-30% Acquisition Cost Per Qualified Account',
    ],
    techStack: ['AI Predictive Dialing', 'Lead Scoring Algorithms', 'Salesforce/HubSpot Native Sync', 'Cadence Automation'],
  },
  {
    id: 'back-office-operations',
    title: 'Back Office Operations',
    positioning: 'Deliver efficient, accurate and technology-enabled operational and administrative support.',
    description: 'Optimize complex business processes, document processing, and compliance workflows with robotic automation and skilled precision.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    icon: Cpu,
    keyFeatures: [
      'Data Verification, Entry & Processing',
      'Finance, Billing & Claims Processing',
      'Compliance Auditing & Document Management',
      'Robotic Process Automation (RPA) Orchestration',
    ],
    outcomes: [
      '99.92% Process Accuracy SLA',
      '50% Processing Time Reduction',
      '24/7 Continuous Operational Throughput',
    ],
    techStack: ['OCR & Intelligent Document Processing', 'RPA Bots', 'ERP/SAP Integration', 'Audit Trail Logging'],
  },
];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="pt-2 pb-8 md:pt-4 md:pb-12 bg-gradient-to-b from-white via-emerald-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EXACT REQUIRED HEADING */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Core Service Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Where Service Meets Intelligence
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Enlace Global combines service excellence with intelligent technology to deliver better customer experiences, stronger growth outcomes, and more efficient operations.
          </p>
        </div>

        {/* EXACTLY 3 SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                    
                    {/* Floating Pillar Icon */}
                    <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/90 backdrop-blur-md text-[#0D8A4E] shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Card Title overlay on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-5">
                    {/* Positioning line (Green Text) */}
                    <p className="text-sm font-semibold text-[#0D8A4E] leading-snug">
                      {service.positioning}
                    </p>

                    {/* Explore More Action placed right after green text */}
                    <button
                      onClick={() => onSelectService(service)}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl text-sm font-bold text-[#0D8A4E] bg-emerald-50/80 hover:bg-[#0D8A4E] hover:text-white transition-all duration-200 group/btn cursor-pointer"
                    >
                      <span>Explore More</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
