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
    <header className="sticky top-0 z-40 w-full font-body bg-white border-b border-[#E6DED5]">
      {/* 1. TOP INFORMATION BAR */}
      <div className="bg-[#2B211B] text-[#FAF8F3] text-xs py-2 px-4 border-b border-[#D4BC8A]/25 hidden md:block">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FAF8F3]/90">
              <Clock className="w-3.5 h-3.5 text-[#D4BC8A]" /> Mon - Sat: 9:00 AM - 9:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-[#FAF8F3]/90">
              <MapPin className="w-3.5 h-3.5 text-[#D4BC8A]" /> Periyar Nagar • Jawahar Nagar • Thiru Vi Ka Nagar
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 text-[#FAF8F3] font-medium hover:text-[#D4BC8A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4BC8A]" /> Emergency Call: {CLINIC_INFO.emergencyPhone}
            </a>
            <span className="text-[#D4BC8A]/40">|</span>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#FAF8F3] font-medium hover:text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-3'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none rounded-lg p-0.5 shrink-0 flex items-center"
            aria-label="The Dental Clinics Home"
          >
            <Logo />
          </button>

          {/* Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 xl:gap-7 shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative py-1.5 whitespace-nowrap shrink-0 ${
                  activeTab === item.id
                    ? 'text-[#4A3025] font-bold'
                    : 'text-[#241C18] hover:text-[#8B7568]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#B89B67] rounded-full" />
                )}
              </button>
            ))}

            {/* "3 Branches" Button */}
            <div className="relative shrink-0">
              <button
                onClick={() => setBranchDropdown(!branchDropdown)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#4A3025] bg-[#FAF8F3] hover:bg-[#F3EEE6] px-3.5 py-1.5 rounded-full transition-colors border border-[#B89B67]/40 whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B89B67]" /> 3 Branches <ChevronDown className="w-3.5 h-3.5 text-[#B89B67]" />
              </button>

              {branchDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E6DED5] p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] uppercase font-bold text-[#75675F] px-3 py-1">
                    Select Clinic Branch
                  </div>
                  {BRANCHES_DATA.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        setBranchDropdown(false);
                        handleNavClick('branches');
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F3] transition-colors flex flex-col"
                    >
                      <span className="text-xs font-bold text-[#2B211B]">{b.name}</span>
                      <span className="text-[11px] text-[#75675F] truncate">{b.landmark}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold text-xs uppercase tracking-wider py-3 px-6 rounded-2xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              Book Appointment
            </button>

            {/* Mobile / Tablet Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#2B211B] hover:bg-[#FAF8F3] transition-colors shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6.5 h-6.5" /> : <Menu className="w-6.5 h-6.5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#E6DED5] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#FAF8F3] text-[#4A3025] font-bold border-l-4 border-[#B89B67]'
                      : 'text-[#241C18] hover:bg-[#FAF8F3]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E6DED5] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold text-sm py-3 rounded-2xl shadow-md text-center"
              >
                Book Appointment Now
              </button>

              <div className="flex items-center justify-around pt-2 text-xs text-[#75675F]">
                <a href={`tel:${CLINIC_INFO.emergencyPhone}`} className="flex items-center gap-1 font-medium text-[#2B211B]">
                  <Phone className="w-3.5 h-3.5 text-[#B89B67]" /> Call Clinic
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
