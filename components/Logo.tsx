'use client';

import React from 'react';
import Link from 'next/link';
import logoImg from '@/public/enlace-global-logo.svg';

interface LogoProps {
  className?: string;
  imageClassName?: string;
  height?: number;
  isDarkBg?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
}

export function Logo({
  className = '',
  imageClassName = '',
  height = 42,
  isDarkBg = false,
  href,
  onClick,
}: LogoProps) {
  const content = (
    <div
      onClick={!href ? onClick : undefined}
      className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] cursor-pointer ${
        isDarkBg ? 'bg-white px-3.5 py-2 rounded-xl shadow-xs border border-emerald-300/40' : ''
      } ${className}`}
    >
      <img
        src={logoImg.src}
        alt="Enlace Global"
        referrerPolicy="no-referrer"
        style={{ height: `${height}px`, width: 'auto' }}
        className={`object-contain max-h-full ${imageClassName}`}
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-label="Enlace Global Home"
        className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}

