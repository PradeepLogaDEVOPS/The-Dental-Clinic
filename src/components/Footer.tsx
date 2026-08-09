import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO, BRANCHES_DATA } from '../data/clinicData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: (branch?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-[#082845] text-white pt-16 pb-8 border-t border-primary-light/20 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <Logo lightMode={true} />
            <p className="text-primary-100 text-sm leading-relaxed max-w-sm">
              Established in 1945 by Dr. V. M. Nair, The Dental Clinics has provided 80+ years of compassionate, ethical, and patient-centered multi-generational dental healthcare in Chennai.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
                <ShieldCheck className="w-4 h-4 text-secondary" /> Est. 1945 • 80+ Yrs Legacy
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
                <Heart className="w-4 h-4 text-red-400" /> Multi-Gen Family Care
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-secondary/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-100">
              {['home', 'about', 'doctors', 'treatments', 'branches', 'gallery', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNavClick(page)}
                    className="hover:text-secondary transition-colors capitalize flex items-center gap-1.5 group text-xs sm:text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-secondary group-hover:translate-x-1 transition-transform" />
                    {page === 'about' ? 'About Us' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-secondary/40 pb-2 inline-block">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-xs text-primary-100">
              <li>• Dental Implants & Surgery</li>
              <li>• Painless Root Canal Therapy</li>
              <li>• Smile Designing & Veneers</li>
              <li>• Braces & Clear Aligners</li>
              <li>• Kids & Geriatric Dentistry</li>
              <li>• Laser Dentistry & Whitening</li>
              <li>• Oral Cancer Screening</li>
            </ul>
          </div>

          {/* Column 4: Contact & Branches */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-lg text-white tracking-wide border-b border-secondary/40 pb-2 inline-block">
              Our 3 Branches
            </h4>
            <div className="space-y-3 text-xs text-primary-100">
              {BRANCHES_DATA.map((b) => (
                <div key={b.id} className="space-y-0.5 border-l-2 border-secondary pl-2.5">
                  <p className="font-semibold text-white">{b.name}</p>
                  <p className="text-[11px] text-primary-100/80">{b.landmark}</p>
                  <a href={`tel:${b.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 text-secondary font-medium hover:underline">
                    <Phone className="w-3 h-3" /> {b.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-100/70 gap-4">
          <p>© 2026 {CLINIC_INFO.name}. All Rights Reserved.</p>
          <p className="font-medium text-white/90">
            Designed & Developed by <span className="text-secondary font-bold tracking-wide">QELANTO Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
