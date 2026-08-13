import React from 'react';
import clinicLogo from '../assets/logo.png';

interface LogoProps {
  className?: string;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  lightMode = false 
}) => {
  return (
    <div className={`inline-flex items-center justify-start shrink-0 select-none ${className}`}>
      {lightMode ? (
        /* Footer Logo: Original logo on clean white rounded backdrop against dark blue footer */
        <div className="bg-white px-3 py-2 rounded-xl border border-white/20 shadow-sm flex items-center justify-center shrink-0">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="w-[180px] sm:w-[210px] md:w-[230px] max-w-[230px] h-auto object-contain block shrink-0"
          />
        </div>
      ) : (
        /* Header Logo: Original logo image displayed cleanly at 230px without clipping or cropping */
        <div className="flex items-center justify-start shrink-0 overflow-visible">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="w-[170px] sm:w-[200px] md:w-[230px] max-w-[230px] h-auto object-contain block shrink-0"
          />
        </div>
      )}
    </div>
  );
};
