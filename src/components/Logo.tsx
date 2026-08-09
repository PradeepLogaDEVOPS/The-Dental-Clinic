import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', lightMode = false }) => {
  const primaryColor = lightMode ? '#FFFFFF' : '#0F4C81';
  const secondaryColor = lightMode ? '#E1EDF7' : '#222222';
  const accentColor = '#17A2B8';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Emblem matching the 3-Tooth Swoosh Icon */}
      <svg width="48" height="38" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        {/* Outer Swoosh Ring */}
        <ellipse 
          cx="80" 
          cy="65" 
          rx="68" 
          ry="32" 
          transform="rotate(-18 80 65)" 
          stroke={accentColor} 
          strokeWidth="6" 
          fill="none" 
          strokeDasharray="300"
        />
        {/* Star Flare on Swoosh */}
        <path 
          d="M 132 46 L 135 48 L 137 46 L 135 44 Z" 
          fill={accentColor} 
          transform="scale(1.5) translate(-32, -10)"
        />
        
        {/* 3 Stylized Tooth/Human Figures */}
        {/* Figure 1 (Left) */}
        <circle cx="58" cy="28" r="8" fill="#6B7280" />
        <path d="M 52 42 C 52 42, 55 72, 48 85 M 58 42 C 58 42, 60 75, 56 86" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />

        {/* Figure 2 (Center) */}
        <circle cx="82" cy="22" r="8" fill="#6B7280" />
        <path d="M 76 36 C 76 36, 79 70, 72 88 M 82 36 C 82 36, 84 76, 80 90" stroke={primaryColor} strokeWidth="5.5" strokeLinecap="round" />

        {/* Figure 3 (Right) */}
        <circle cx="106" cy="28" r="8" fill="#6B7280" />
        <path d="M 100 42 C 100 42, 103 72, 96 85 M 106 42 C 106 42, 108 75, 104 86" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-widest font-heading font-bold leading-none text-xl md:text-2xl">
            <span style={{ color: primaryColor }}>T</span>
            <span style={{ color: primaryColor }} className="text-xs uppercase align-super font-semibold -ml-[1px] mr-1">HE</span>
            <span style={{ color: secondaryColor }} className="tracking-[0.18em] uppercase ml-1">DENTAL CLINICS</span>
          </div>
          <div className="w-full h-[2px] mt-[3px]" style={{ backgroundColor: primaryColor }} />
        </div>
      )}
    </div>
  );
};
