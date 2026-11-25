'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LetsTalkModal } from '@/components/LetsTalkModal';
import { PlaceholderModal } from '@/components/PlaceholderModal';

export default function ContactPage() {
  const router = useRouter();
  const [placeholderData, setPlaceholderData] = useState<{ title: string; description: string } | null>(null);

  const focusForm = () => {
    const form = document.getElementById('callback-form');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    form?.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
  };

  const openPlaceholder = (title: string, description: string) => {
    setPlaceholderData({ title, description });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar onOpenContact={focusForm} onOpenPlaceholder={openPlaceholder} />

      <main className="pt-[121px]">
        <section className="bg-[#F4FAF6] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="space-y-6 lg:pt-5">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">Request Callback</h1>
              <p className="max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                Tell us about your customer support, sales support, or back-office needs. We’ll get in touch to discuss how we can help.
              </p>

              <div className="grid gap-4 pt-2">
                <a href="mailto:info@enlaceglobalservices.com" className="tile-hover flex items-start gap-4 rounded-2xl border border-emerald-100 bg-[#EAF6EE] p-5">
                  <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#0D8A4E]" />
                  <div className="min-w-0 space-y-1">
                    <h2 className="font-bold text-slate-900">Email us</h2>
                    <p className="break-words text-sm leading-relaxed text-slate-600">info@enlaceglobalservices.com</p>
                  </div>
                </a>
                <a href="tel:+918697593683" className="tile-hover flex items-start gap-4 rounded-2xl border border-emerald-100 bg-[#F1ECFA] p-5">
                  <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#0D8A4E]" />
                  <div className="space-y-1">
                    <h2 className="font-bold text-slate-900">Call us</h2>
                    <p className="text-sm leading-relaxed text-slate-600">+91 8697593683</p>
                  </div>
                </a>
              </div>
            </div>

            <section id="callback-form" aria-label="Contact Enlace Global" className="scroll-mt-32">
              <LetsTalkModal isOpen inline heading="Tell us about your business" onClose={() => router.push('/')} />
            </section>
          </div>
        </section>
      </main>

      <Footer onOpenContact={focusForm} onOpenPlaceholder={openPlaceholder} />
      <PlaceholderModal
        title={placeholderData?.title || null}
        description={placeholderData?.description || null}
        onClose={() => setPlaceholderData(null)}
        onOpenContact={() => {
          setPlaceholderData(null);
          focusForm();
        }}
      />
    </div>
  );
}
