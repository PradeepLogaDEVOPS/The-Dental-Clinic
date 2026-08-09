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
      setIsScrolled(window.scrollY > 20);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full font-body">
      {/* Top Info Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 border-b border-primary-light/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-primary-100">
              <Clock className="w-3.5 h-3.5 text-secondary" /> Mon - Sat: 9:00 AM - 9:00 PM
            </span>
            <span className="flex items-center gap-1.5 text-primary-100">
              <MapPin className="w-3.5 h-3.5 text-secondary" /> Periyar Nagar • Jawahar Nagar • Thiru Vi Ka Nagar
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 text-white font-medium hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" /> Emergency Call: {CLINIC_INFO.emergencyPhone}
            </a>
            <span className="text-primary-light">|</span>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white font-medium hover:text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-lg py-3' : 'bg-white py-4 border-b border-clinic-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg p-1"
          >
            <Logo />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-all relative py-1 ${
                  activeTab === item.id
                    ? 'text-primary font-semibold'
                    : 'text-clinic-dark hover:text-primary'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-secondary rounded-full" />
                )}
              </button>
            ))}

            {/* Quick Branches Dropdown */}
            <div className="relative">
              <button
                onClick={() => setBranchDropdown(!branchDropdown)}
                className="flex items-center gap-1 text-xs font-semibold text-primary bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-full transition-colors border border-primary-100"
              >
                <MapPin className="w-3 h-3 text-secondary" /> 3 Branches <ChevronDown className="w-3 h-3" />
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

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Appointment
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-clinic-dark hover:bg-clinic-section transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-clinic-border px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
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
