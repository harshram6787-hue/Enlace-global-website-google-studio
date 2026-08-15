'use client';

import React from 'react';

export function WelcomeNote() {
  return (
    <section id="welcome" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Welcome to <span className="text-[#0D8A4E]">Enlace Global</span>
        </h2>

        {/* Concise Statement */}
        <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed text-slate-700/90 space-y-4">
          <p>
            Enlace Global delivers next-generation business process solutions that blend highly skilled professionals with intelligent AI technology. We help forward-thinking organizations elevate customer experiences, accelerate revenue growth, and streamline complex operations through scalable, technology-enabled execution.
          </p>
          <p>
            By anchoring our delivery model in operational excellence, rigorous quality governance, and customer-centric empathy, we empower enterprise leaders to transform operational complexity into a sustainable competitive advantage.
          </p>
        </div>

      </div>
    </section>
  );
}

