import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import founderPhoto from '@/src/assets/images/founder-harsh.png';

export function FounderSpotlight() {
  return (
    <section id="founder-spotlight" aria-labelledby="founder-heading" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="founder-heading" className="text-3xl sm:text-4xl font-extrabold text-[#044729] tracking-tight leading-tight text-center">
          Built by Operations &amp; Quality Experts
        </h2>

        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-6 md:gap-10 items-center rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-lg">
          <div className="relative aspect-[4/5] w-full max-w-xs md:max-w-none mx-auto overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
            <Image
              src={founderPhoto}
              alt="Harsh Kumar Ram, Founder & CEO of Enlace Global"
              fill
              sizes="(min-width: 1024px) 335px, (min-width: 768px) 33vw, 320px"
              className="object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#044729] tracking-tight leading-tight">
              Harsh Kumar Ram
            </h3>
            <p className="mt-2 text-base sm:text-lg font-semibold text-[#0D8A4E]">
              Founder &amp; CEO, Enlace Global
            </p>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              With 5 years of frontline customer experience and quality assurance leadership across global BPO leaders like Teleperformance and Globiva, as well as managing quality operations for the Australian energy sector, Harsh founded Enlace Global to bridge the gap between top-tier Indian talent and intelligent AI—delivering enterprise-grade customer, sales, and back-office support without bloated agency overhead.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8A4E] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#096B3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
