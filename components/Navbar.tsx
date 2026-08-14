'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPlaceholder: (title: string, description: string) => void;
}

export function Navbar({ onOpenContact, onOpenPlaceholder }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (pathname === '/about') {
        setActiveSection('about');
        return;
      }

      if (pathname === '/services') {
        setActiveSection('services');
        return;
      }

      if (pathname === '/career') {
        setActiveSection('career');
        return;
      }

      // Scroll Spy Logic for homepage
      const sections = ['hero', 'about', 'capabilities', 'services', 'advantages', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  interface NavItem {
    label: string;
    href: string;
    sectionId: string;
    isFuturePage?: boolean;
    description?: string;
  }

  const navItems: NavItem[] = [
    { label: 'About Us', href: '/about', sectionId: 'about' },
    { label: 'Services', href: '/services', sectionId: 'services' },
    { label: 'Industries', href: '/industries', sectionId: 'industries' },
    { label: 'Our Advantages', href: '/advantages', sectionId: 'advantages' },
    { label: 'Career', href: '/career', sectionId: 'career' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isFuturePage) {
      e.preventDefault();
      onOpenPlaceholder(item.label, item.description || '');
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'about') {
      e.preventDefault();
      if (pathname === '/about') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/about');
      }
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'services') {
      e.preventDefault();
      if (pathname === '/services') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/services');
      }
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'industries') {
      e.preventDefault();
      if (pathname === '/industries') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/industries');
      }
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'advantages') {
      e.preventDefault();
      if (pathname === '/advantages') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/advantages');
      }
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'career') {
      e.preventDefault();
      if (pathname === '/career') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/career');
      }
      setMobileMenuOpen(false);
      return;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'py-3 shadow-md border-b border-emerald-100/80 backdrop-blur-md bg-white/95'
          : 'py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div />

          {/* RIGHT: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive =
                (pathname === '/about' && item.sectionId === 'about') ||
                (pathname === '/services' && item.sectionId === 'services') ||
                (pathname === '/industries' && item.sectionId === 'industries') ||
                (pathname === '/advantages' && item.sectionId === 'advantages') ||
                (pathname === '/career' && item.sectionId === 'career') ||
                (pathname === '/' && activeSection === item.sectionId);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0B192C] bg-slate-100/80 font-bold border-b-2 border-[#0B192C]'
                      : 'text-[#0D8A4E] hover:text-[#065F35] hover:bg-emerald-50/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Let's Talk CTA button */}
            <button
              onClick={onOpenContact}
              className="ml-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transform transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0D8A4E] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-emerald-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive =
                (pathname === '/about' && item.sectionId === 'about') ||
                (pathname === '/services' && item.sectionId === 'services') ||
                (pathname === '/industries' && item.sectionId === 'industries') ||
                (pathname === '/advantages' && item.sectionId === 'advantages') ||
                (pathname === '/career' && item.sectionId === 'career') ||
                (pathname === '/' && activeSection === item.sectionId);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#0B192C] font-bold bg-slate-100 border-l-4 border-[#0B192C]'
                      : 'text-[#0D8A4E] hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Let&apos;s Talk</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
