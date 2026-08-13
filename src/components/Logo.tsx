import React from 'react';
import clinicLogo from '../assets/logo.svg';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  lightMode = false 
}) => {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {lightMode ? (
        /* Footer logo: clean white backdrop container for contrast against dark blue footer */
        <div className="bg-white px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center justify-center">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="w-[180px] sm:w-[210px] md:w-[230px] h-auto object-contain object-center block"
          />
        </div>
      ) : (
        /* Header / General logo: direct 230px desktop SVG vector logo */
        <img
          src={clinicLogo}
          alt="The Dental Clinics"
          className="w-[170px] sm:w-[200px] md:w-[230px] h-auto object-contain object-center block"
        />
      )}
    </div>
  );
};
