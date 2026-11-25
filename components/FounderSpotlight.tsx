import Image from 'next/image';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import founderPhoto from '@/src/assets/images/founder-harsh.png';
import cofounderPhoto from '@/src/assets/images/cofounder-harsita.jpg';

export function FounderSpotlight() {
  return (
    <section id="founder-spotlight" aria-labelledby="founder-heading" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="founder-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-center">
          A Note from Our Founders
        </h2>

        <div className="tile-hover max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-6 md:gap-10 items-center rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-lg">
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
            <div className="mt-5 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                I spent five years in frontline customer service and quality assurance, working with Teleperformance and Globiva and managing quality operations for the Australian energy sector. Working on both sides of service delivery taught me to look beyond the quality score. A conversation can tick every box on a checklist and still leave the customer unsure about what happens next. That’s where good coaching and clear ownership make a difference.
              </p>
              <p>
                I founded Enlace Global to bring that same discipline to growing businesses. We bring together skilled teams in India and use AI where it helps us work better, such as spotting recurring issues across customer conversations. My goal is to make the standards I learned in large BPO operations accessible to businesses that need dependable customer, sales, and back-office support without the overhead of a large agency.
              </p>
              <p>
                My commitment is straightforward. You should always know who owns the work, how we measure its quality, and what we’re doing to improve it.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/harsh-kumar-ram/"
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

        <article
          id="cofounder-note"
          aria-labelledby="cofounder-name"
          className="tile-hover max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] gap-6 md:gap-10 items-center rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8 shadow-lg"
        >
          <div className="relative aspect-[4/5] w-full max-w-xs md:max-w-none mx-auto overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
            <Image
              src={cofounderPhoto}
              alt="Harsita Ram, Co-Founder & COO of Enlace Global"
              fill
              sizes="(min-width: 1024px) 335px, (min-width: 768px) 33vw, 320px"
              className="object-cover object-top"
            />
          </div>

          <div className="min-w-0">
            <h3 id="cofounder-name" className="text-2xl sm:text-3xl font-extrabold text-[#044729] tracking-tight leading-tight">
              Harsita Ram
            </h3>
            <p className="mt-2 text-base sm:text-lg font-semibold text-[#0D8A4E]">
              Co-Founder &amp; COO, Enlace Global
            </p>
            <div className="mt-5 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                When you hand over part of your operations, you should get time back. If your managers still have to answer the same questions or step in for routine decisions, they’re still carrying much of the work. As Co-Founder and COO of Enlace Global, my focus is on preparing our teams to handle that work with confidence.
              </p>
              <p>
                That starts with training around the situations your business actually faces. If a customer asks for a return, our team should know your policy, what they can resolve on their own, and when to bring you in. We document what we learn and share it across the team so that knowledge stays with the business as coverage changes or demand grows.
              </p>
              <p>
                For your business, that means fewer interruptions for your managers, more consistent answers for your customers, and an easier time adding coverage during busy periods. Your team gets more time for the work that needs their attention, from improving your product to building customer relationships.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/harsita-ram/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D8A4E] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#096B3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
