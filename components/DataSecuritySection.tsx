import { FileCheck2, LockKeyhole, MonitorCheck, ShieldCheck } from 'lucide-react';

const securityPillars = [
  {
    title: 'Strict Legal & NDA Protection',
    description: 'Every team member, from leadership to front-line specialists, signs binding Non-Disclosure Agreements (NDAs) and confidentiality contracts before onboarding.',
    icon: FileCheck2,
    backgroundClass: 'bg-[#EDF7F0]',
  },
  {
    title: 'Zero-Trust Access & Encryption',
    description: 'Client systems are accessed exclusively through encrypted VPNs, multi-factor authentication (MFA), and role-based permissions so agents only see what they need.',
    icon: LockKeyhole,
    backgroundClass: 'bg-[#F1ECFA]',
  },
  {
    title: 'Clean-Desk & Endpoint Security',
    description: 'Our operations enforce strict clean-desk policies, disabled USB ports, and monitored endpoints to prevent unauthorized data downloads or screen captures.',
    icon: MonitorCheck,
    backgroundClass: 'bg-[#EAF3FB]',
  },
  {
    title: 'AI & Global Privacy Alignment',
    description: "Workflows are designed in strict alignment with GDPR and India's DPDP Act—and we never sell or use client data to train public AI models.",
    icon: ShieldCheck,
    backgroundClass: 'bg-[#FFF1E7]',
  },
];

export function DataSecuritySection() {
  return (
    <section id="data-security" aria-labelledby="data-security-heading" className="scroll-mt-32 py-16 md:py-24 bg-white border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 id="data-security-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Enterprise-Grade Data Security &amp; Governance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We treat your customer and business data with the highest level of protection. Every workflow at Enlace Global is built on strict access controls, encrypted infrastructure, and rigorous operational governance.
          </p>
        </div>

        <ul className="max-w-5xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title} className={`rounded-2xl border border-emerald-100 ${pillar.backgroundClass} p-6 sm:p-8 shadow-sm`}>
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-xl border border-emerald-100 bg-emerald-50 text-[#0D8A4E] flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#044729] leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 max-w-3xl mx-auto text-center text-sm text-slate-500 leading-relaxed">
          <em>Need specific compliance protocols for your industry? Our technical team configures custom security environments tailored to your exact IT and legal requirements during onboarding.</em>
        </p>
      </div>
    </section>
  );
}
