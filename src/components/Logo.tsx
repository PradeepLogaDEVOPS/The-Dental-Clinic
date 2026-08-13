import React from 'react';
import clinicLogo from '../assets/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon-only';
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', lightMode = false }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {lightMode ? (
        <div className="bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-2xl border border-white/20 shadow-md flex items-center justify-center transition-all hover:bg-white">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>
      ) : (
        <img
          src={clinicLogo}
          alt="The Dental Clinics"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain hover:opacity-95 transition-opacity"
        />
      )}
    </div>
  );
};
