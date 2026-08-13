'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from './Logo';
import { Mail, Linkedin, PhoneCall, ArrowUpRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenPlaceholder: (title: string, description: string) => void;
}

export function Footer({ onOpenContact, onOpenPlaceholder }: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (target: string) => {
    if (target === 'about') {
      if (pathname === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/about');
      }
      return;
    }

    if (target === 'services') {
      if (pathname === '/services') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/services');
      }
      return;
    }

    if (target === 'customer-experience' || target === 'revenue-growth' || target === 'back-office-operations') {
      if (pathname === '/services') {
        const el = document.getElementById(target);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      } else {
        router.push(`/services#${target}`);
      }
      return;
    }

    if (target === 'career') {
      if (pathname === '/career') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/career');
      }
      return;
    }

    if (target === 'advantages') {
      if (pathname === '/about' || pathname === '/services' || pathname === '/career') {
        router.push(`/#${target}`);
      } else {
        const el = document.getElementById(target);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#044729] text-white pt-16 pb-12 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-800/80">
          
          {/* Column 1 & 2: Brand Info & Logo */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo Lockup */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === '/about' || pathname === '/services' || pathname === '/career') {
                  router.push('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg"
              aria-label="Enlace Global Homepage"
            >
              <Logo height={36} isDarkBg={true} />
            </a>

            <p className="text-sm text-emerald-100/90 max-w-sm leading-relaxed font-normal">
              An AI-enabled BPO and business process services partner combining human expertise with intelligent technology to elevate customer experience, drive revenue growth, and streamline operations.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#044729] bg-emerald-100 hover:bg-white shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schedule Executive Consultation</span>
              </button>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/90 font-medium">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlaceholder('Industry Solutions', 'Custom BPO frameworks engineered for Financial Services, Healthcare, Technology, Retail, and Logistics.')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Industry
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('advantages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Advantages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('career')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Career
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Services</h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/90 font-medium">
              <li>
                <button
                  onClick={() => handleLinkClick('customer-experience')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Customer Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('revenue-growth')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Revenue Growth
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('back-office-operations')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Back Office Operations
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">Connect</h4>
            <ul className="space-y-3 text-sm text-emerald-100/90 font-medium">
              <li>
                <button
                  onClick={onOpenContact}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Let&apos;s Talk</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@enlaceglobal.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>contact@enlaceglobal.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-emerald-300" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/80 gap-4">
          <div>
            <span>© 2026 Enlace Global. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenPlaceholder('Privacy Policy', 'Enlace Global adheres to strict international GDPR, HIPAA, and SOC2 privacy protocols.')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPlaceholder('Terms & Conditions', 'Enterprise SLA service agreements and operational delivery terms.')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
