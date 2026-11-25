'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What’s included in the 30-day pilot?',
    answer: 'You get two dedicated, AI-enabled specialists trained on your brand, tools, and workflows at an introductory rate. The pilot includes real-time AI assistance for agents, quality reporting, and weekly check-ins with our founder.',
  },
  {
    question: 'What happens after the 30-day pilot?',
    answer: 'We review the results with you against the goals we agreed on at the start. You can finish at the end of the pilot or choose to continue. If you continue, we’ll agree on the team size, coverage, and scope for the next phase.',
  },
  {
    question: 'Can we start with one service or a small workload?',
    answer: 'Yes. You can use the two-agent pilot to start with one workflow, such as live chat, lead follow-ups, or order processing. Once you’ve seen how it works, you can decide whether to expand coverage or add another service.',
  },
  {
    question: 'How is pricing determined, and is there a minimum commitment?',
    answer: 'Your quote is based on the work you want covered, the hours you need, and the team size. The starting engagement is a 30-day pilot with two dedicated specialists at an introductory rate. Any ongoing pricing and terms are agreed separately if you choose to continue.',
  },
  {
    question: 'Can your team work with our existing helpdesk, CRM, or e-commerce tools?',
    answer: 'Yes. Our team can work in tools such as Zendesk, Freshdesk, HubSpot, Salesforce, and Shopify. During onboarding, we confirm which tools and permissions the team needs and train them on how you use those platforms day to day.',
  },
  {
    question: 'How soon can your team start handling our work?',
    answer: 'Most single-workflow pilots can go live in as little as 14 days. During onboarding, we agree on what the team will handle, set up access to your tools, and train the team on your processes. Setups that involve multiple systems or additional security requirements may take longer.',
  },
  {
    question: 'How will we track the quality and performance of our outsourced team?',
    answer: 'Before launch, we agree on what to measure for your workflow. For customer support, that might include response times, resolution quality, and customer satisfaction. You’ll see how the team is doing through regular reports and quality scorecards. During the pilot, we review progress and any changes needed in weekly check-ins with our founder.',
  },
  {
    question: 'How do you protect our customer data?',
    answer: 'Team members sign confidentiality agreements before onboarding and receive access only to the systems and information they need for their role. We use multi-factor authentication and encrypted connections to protect access to your systems. We never use client data to train public AI models.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details name="enlace-faqs" className="tile-hover group rounded-2xl border border-[#ccdfd1] bg-white open:border-[#96baa1]">
      <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-4 text-base font-bold leading-snug text-[#044729] hover:bg-[#f8fcf9] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#28734b] sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf4ed] text-[#0D8A4E]" aria-hidden="true">
          <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
        </span>
      </summary>
      <p className="mx-4 border-t border-[#e1ede5] pt-3.5 pb-5 text-base leading-relaxed text-[#405549] sm:mx-6">
        {answer}
      </p>
    </details>
  );
}

export function FAQSection() {
  const [expanded, setExpanded] = useState(false);
  const moreQuestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) {
      moreQuestionsRef.current?.querySelector('summary')?.focus({ preventScroll: true });
    }
  }, [expanded]);

  const toggleMore = () => {
    if (expanded) {
      moreQuestionsRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((question) => {
        question.open = false;
      });
    }
    setExpanded(!expanded);
  };

  return (
    <section id="faqs" aria-labelledby="faq-heading" className="scroll-mt-28 bg-[#f1f8f3] px-4 py-12 sm:px-6 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="mb-7 text-center text-4xl leading-tight font-extrabold tracking-tight text-slate-900 sm:mb-10 sm:text-5xl md:text-6xl">
          FAQs
        </h2>

        <div className="grid gap-3">
          {faqs.slice(0, 2).map((faq) => <FAQItem key={faq.question} {...faq} />)}
        </div>

        <div id="more-faqs" ref={moreQuestionsRef} hidden={!expanded} className="mt-3">
          <div className="grid gap-3">
            {faqs.slice(2).map((faq) => <FAQItem key={faq.question} {...faq} />)}
          </div>
        </div>

        <div className="mt-5 flex justify-center [overflow-anchor:none]">
          <button
            type="button"
            onClick={toggleMore}
            aria-expanded={expanded}
            aria-controls="more-faqs"
            className="min-h-12 cursor-pointer rounded-xl border border-[#75a187] bg-white px-5 py-2.5 text-base font-bold text-[#044729] transition-colors hover:bg-[#e4f2e8] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#28734b]"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </section>
  );
}
