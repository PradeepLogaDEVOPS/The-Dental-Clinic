import React from 'react';
import clinicLogo from '../assets/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  lightMode?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  lightMode = false,
  size = 'md' 
}) => {
  // Sizing mapping
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16 md:h-20',
    lg: 'h-16 sm:h-20 md:h-24',
    xl: 'h-20 sm:h-24 md:h-28'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {lightMode ? (
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 shadow-md flex items-center justify-center transition-all hover:bg-white">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className={`${sizeClasses} w-auto object-contain transition-transform hover:scale-[1.02]`}
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      ) : (
        <img
          src={clinicLogo}
          alt="The Dental Clinics"
          className={`${sizeClasses} w-auto object-contain hover:opacity-95 transition-all hover:scale-[1.02]`}
          style={{ imageRendering: 'crisp-edges' }}
        />
      )}
    </div>
  );
};
