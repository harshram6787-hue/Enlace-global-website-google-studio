'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  isDarkBg?: boolean;
}

export function Logo({ className = '', height = 40, isDarkBg = false }: LogoProps) {
  // Proportional width calculation based on 255:52 aspect ratio
  const width = Math.round((height * 255) / 52);

  // Theme colors strictly based on Enlace Global green palette
  const enlaceTextColor = isDarkBg ? '#FFFFFF' : '#044729';
  const globalTextColor = isDarkBg ? '#A7F3D0' : '#0D8A4E';
  const nodeDotColor = isDarkBg ? '#34D399' : '#0D8A4E';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 255 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 hover:scale-[1.02]"
        aria-label="Enlace Global Logo"
      >
        <defs>
          {/* Primary Green Gradient */}
          <linearGradient id={isDarkBg ? 'egGradDark1' : 'egGradLight1'} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDarkBg ? '#10B981' : '#044729'} />
            <stop offset="100%" stopColor={isDarkBg ? '#059669' : '#0D8A4E'} />
          </linearGradient>

          {/* Vibrant Accent Green Gradient */}
          <linearGradient id={isDarkBg ? 'egGradDark2' : 'egGradLight2'} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDarkBg ? '#059669' : '#0D8A4E'} />
            <stop offset="100%" stopColor={isDarkBg ? '#34D399' : '#10B981'} />
          </linearGradient>
        </defs>

        {/* ================= SYMBOL: ABSTRACT INTERCONNECTED LINK ================= */}
        <g transform="translate(2, 2)">
          {/* Left Loop: Primary Emerald */}
          <path
            d="M 18,10 C 10.2,10 4,16.2 4,24 C 4,31.8 10.2,38 18,38 C 23.5,38 28.2,34.8 30.5,30.2 L 24.2,27.5 C 22.8,29.8 20.6,31.2 18,31.2 C 14,31.2 10.8,28 10.8,24 C 10.8,20 14,16.8 18,16.8 C 20.6,16.8 22.8,18.2 24.2,20.5 L 30.5,17.8 C 28.2,13.2 23.5,10 18,10 Z"
            fill={`url(#${isDarkBg ? 'egGradDark1' : 'egGradLight1'})`}
          />
          {/* Right Loop: Vibrant Accent Emerald */}
          <path
            d="M 30,10 C 24.5,10 19.8,13.2 17.5,17.8 L 23.8,20.5 C 25.2,18.2 27.4,16.8 30,16.8 C 34,16.8 37.2,20 37.2,24 C 37.2,28 34,31.2 30,31.2 C 27.4,31.2 25.2,29.8 23.8,27.5 L 17.5,30.2 C 19.8,34.8 24.5,38 30,38 C 37.8,38 44,31.8 44,24 C 44,16.2 37.8,10 30,10 Z"
            fill={`url(#${isDarkBg ? 'egGradDark2' : 'egGradLight2'})`}
          />
          {/* Central Synergy Core Node */}
          <circle cx="24" cy="24" r="3.2" fill={nodeDotColor} />
        </g>

        {/* ================= WORDMARK: ENLACE GLOBAL ================= */}
        <text
          x="56"
          y="35"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Inter', 'Segoe UI', Roboto, sans-serif"
          fontSize="26"
        >
          {/* Enlace: Stronger visual emphasis */}
          <tspan fontWeight="800" fill={enlaceTextColor} letterSpacing="-0.02em">
            Enlace
          </tspan>
          {/* Global: Clean medium emphasis */}
          <tspan fontWeight="500" fill={globalTextColor} dx="7" letterSpacing="0.01em">
            Global
          </tspan>
        </text>
      </svg>
    </div>
  );
}
