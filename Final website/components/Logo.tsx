'use client';

import React from 'react';
import logoImg from '@/public/enlace-global-logo.svg';

interface LogoProps {
  className?: string;
  height?: number;
  isDarkBg?: boolean;
}

export function Logo({ className = '', height = 42, isDarkBg = false }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-200 hover:scale-[1.02] ${
        isDarkBg ? 'bg-white px-3.5 py-2 rounded-xl shadow-xs border border-emerald-300/40' : ''
      } ${className}`}
    >
      <img
        src={logoImg.src}
        alt="Enlace Global"
        referrerPolicy="no-referrer"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain max-h-full"
      />
    </div>
  );
}
