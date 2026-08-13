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
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {lightMode ? (
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/20 shadow-md flex items-center justify-center transition-all hover:bg-white w-[180px] sm:w-[200px] h-[70px] sm:h-[80px]">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="w-full h-full object-contain object-center block"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      ) : (
        <div className="w-[170px] sm:w-[190px] md:w-[210px] h-[65px] sm:h-[75px] md:h-[82px] flex items-center justify-center">
          <img
            src={clinicLogo}
            alt="The Dental Clinics"
            className="w-full h-full object-contain object-center block hover:opacity-95 transition-opacity"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>
      )}
    </div>
  );
};
