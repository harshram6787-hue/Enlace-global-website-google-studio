'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

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
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMoreButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMoreMenuOpen(false);
    setMobileMoreOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!moreMenuRef.current?.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMoreMenuOpen(false);
        moreButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [moreMenuOpen]);

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

      if (pathname === '/industries') {
        setActiveSection('industries');
        return;
      }

      if (pathname === '/advantages') {
        setActiveSection('advantages');
        return;
      }

      if (pathname === '/career') {
        setActiveSection('career');
        return;
      }

      // Default on homepage
      setActiveSection('home');
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
    { label: 'Home', href: '/', sectionId: 'home' },
    { label: 'Services', href: '/services', sectionId: 'services' },
    { label: 'Industries', href: '/industries', sectionId: 'industries' },
    { label: 'Our Advantages', href: '/advantages', sectionId: 'advantages' },
  ];

  const moreItems: NavItem[] = [
    { label: 'About Us', href: '/about', sectionId: 'about' },
    { label: 'Career', href: '/career', sectionId: 'career' },
  ];

  const isMoreActive = pathname === '/about' || pathname === '/career';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    setMoreMenuOpen(false);
    setMobileMoreOpen(false);

    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    if (item.isFuturePage) {
      e.preventDefault();
      onOpenPlaceholder(item.label, item.description || '');
      setMobileMenuOpen(false);
      return;
    }

    if (item.sectionId === 'home') {
      e.preventDefault();
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
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
          <Link
            href="/"
            aria-label="Enlace Global Home"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setMobileMenuOpen(false);
              setMoreMenuOpen(false);
              setMobileMoreOpen(false);
            }}
            className="inline-flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg group"
          >
            <Logo height={80} />
          </Link>

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

            <div
              ref={moreMenuRef}
              className="relative"
              onBlur={(event) => {
                if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget as Node)) {
                  setMoreMenuOpen(false);
                }
              }}
            >
              <button
                ref={moreButtonRef}
                id="desktop-more-button"
                type="button"
                aria-expanded={moreMenuOpen}
                aria-controls="desktop-more-links"
                onClick={() => setMoreMenuOpen((open) => !open)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isMoreActive
                    ? 'text-[#0B192C] bg-slate-100/80 font-bold border-b-2 border-[#0B192C]'
                    : 'text-[#0D8A4E] hover:text-[#065F35] hover:bg-emerald-50/60'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {moreMenuOpen && (
                <div
                  id="desktop-more-links"
                  className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-emerald-100 bg-white p-2 shadow-lg"
                >
                  {moreItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={`block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        pathname === item.href
                          ? 'bg-emerald-50 text-[#044729]'
                          : 'text-[#0D8A4E] hover:bg-emerald-50 hover:text-[#065F35]'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Request Callback CTA button */}
            <button
              onClick={onOpenContact}
              className="ml-3 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-md hover:shadow-lg transform transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Callback</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setMoreMenuOpen(false);
                setMobileMoreOpen(false);
              }}
              className="p-2 rounded-lg text-[#0D8A4E] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-white border-b border-emerald-100 shadow-xl animate-in slide-in-from-top-2 duration-200">
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

            <div
              onKeyDown={(event) => {
                if (event.key === 'Escape' && mobileMoreOpen) {
                  event.preventDefault();
                  setMobileMoreOpen(false);
                  mobileMoreButtonRef.current?.focus();
                }
              }}
            >
              <button
                ref={mobileMoreButtonRef}
                type="button"
                aria-expanded={mobileMoreOpen}
                aria-controls="mobile-more-links"
                onClick={() => setMobileMoreOpen((open) => !open)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isMoreActive
                    ? 'text-[#0B192C] font-bold bg-slate-100 border-l-4 border-[#0B192C]'
                    : 'text-[#0D8A4E] hover:bg-emerald-50'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {mobileMoreOpen && (
                <div id="mobile-more-links" className="ml-4 mt-2 space-y-1 border-l border-emerald-100 pl-3">
                  {moreItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleNavClick(event, item)}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      className={`block rounded-lg px-4 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        pathname === item.href
                          ? 'bg-emerald-50 font-semibold text-[#044729]'
                          : 'text-[#0D8A4E] hover:bg-emerald-50'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileMoreOpen(false);
                  setMoreMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Request Callback</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
