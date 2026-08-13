import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Clock, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO, BRANCHES_DATA } from '../data/clinicData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (branch?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchDropdown, setBranchDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'branches', label: 'Branches' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setBranchDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full font-body bg-white">
      {/* 1. TOP INFORMATION BAR (RESPONSIVE & NO OVERFLOW) */}
      <div className="bg-primary text-white text-xs py-2 px-4 border-b border-primary-light/20 hidden md:block w-full overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-4 xl:gap-6 truncate shrink">
            <span className="flex items-center gap-1.5 text-primary-100 whitespace-nowrap text-[11px] xl:text-xs">
              <Clock className="w-3.5 h-3.5 text-secondary shrink-0" /> Mon - Sat: 9:00 AM - 9:00 PM
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-primary-100 whitespace-nowrap text-[11px] xl:text-xs">
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" /> Periyar Nagar • Jawahar Nagar • Thiru Vi Ka Nagar
            </span>
          </div>

          <div className="flex items-center gap-3 xl:gap-5 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 text-white font-medium hover:text-secondary transition-colors whitespace-nowrap text-[11px] xl:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-secondary shrink-0" /> Emergency Call: {CLINIC_INFO.emergencyPhone}
            </a>
            <span className="text-primary-light">|</span>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white font-medium hover:text-[#25D366] transition-colors whitespace-nowrap text-[11px] xl:text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg py-2' : 'bg-white py-3 border-b border-clinic-border'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4 w-full">
          
          {/* LEFT: Original Logo (No clipping, no wrapper overflow hidden) */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none rounded-lg shrink-0 flex items-center justify-start p-0 overflow-visible"
            aria-label="The Dental Clinics Home"
          >
            <Logo />
          </button>

          {/* CENTER: Navigation Links (Responsive spacing, zero clipping) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs xl:text-sm font-medium transition-all relative py-1.5 whitespace-nowrap shrink-0 ${
                  activeTab === item.id
                    ? 'text-primary font-bold'
                    : 'text-clinic-dark hover:text-primary'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-secondary rounded-full" />
                )}
              </button>
            ))}

            {/* "3 Branches" Dropdown Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setBranchDropdown(!branchDropdown)}
                className="flex items-center gap-1 text-[11px] xl:text-xs font-bold text-primary bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-full transition-colors border border-primary-100 whitespace-nowrap"
              >
                <MapPin className="w-3 h-3 text-secondary shrink-0" /> 3 Branches <ChevronDown className="w-3 h-3 shrink-0" />
              </button>

              {branchDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-clinic-border p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] uppercase font-bold text-clinic-grey px-3 py-1">
                    Select Clinic Branch
                  </div>
                  {BRANCHES_DATA.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setBranchDropdown(false);
                        handleNavClick('branches');
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-clinic-section transition-colors flex flex-col"
                    >
                      <span className="text-xs font-bold text-primary">{b.name}</span>
                      <span className="text-[11px] text-clinic-grey truncate">{b.landmark}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold text-xs uppercase tracking-wider py-2.5 px-4 xl:px-5 rounded-full shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              Book Appointment
            </button>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-clinic-dark hover:bg-clinic-section transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-clinic-border px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary-50 text-primary font-bold border-l-4 border-primary'
                      : 'text-clinic-dark hover:bg-clinic-section'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-clinic-border flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-primary text-white font-semibold text-sm py-3 rounded-xl shadow-md text-center"
              >
                Book Appointment Now
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-clinic-grey">
                <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="flex items-center gap-1 font-medium text-primary">
                  <Phone className="w-3.5 h-3.5 text-secondary" /> Call Clinic
                </a>
                <span>•</span>
                <a href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-medium text-[#25D366]">
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
