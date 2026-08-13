import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Heart, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { CLINIC_INFO, TIMELINE_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';
import clinicLogo from '../assets/logo.png';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState<number>(0);

  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="About Us & Legacy | The Dental Clinics Chennai"
        description="Discover the 80+ year healthcare legacy of The Dental Clinics Chennai. Founded in 1945 by Dr. V. M. Nair, R.M.P., spanning 4 generations of ethical family dentistry."
      />

      {/* HERO / PAGE TITLE SECTION (DARK ESPRESSO BACKGROUND) */}
      <section className="bg-[#2B211B] text-white py-14 px-4 sm:px-6 relative overflow-hidden border-b border-[#B89B67]/20">
        <div className="max-w-[1280px] mx-auto text-center space-y-5 relative z-10 flex flex-col items-center">
          
          {/* Logo Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] p-3 sm:p-4 shadow-xl border border-[#E6DED5] flex items-center justify-center w-[210px] sm:w-[250px] h-[100px] sm:h-[120px] shrink-0"
          >
            <img
              src={clinicLogo}
              alt="The Dental Clinics"
              className="w-full h-full object-contain object-center block"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.div>

          {/* Legacy Badges */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3025]/60 text-[#D4BC8A] text-xs font-semibold uppercase tracking-wider border border-[#B89B67]/30">
            <ShieldCheck className="w-4 h-4 text-[#B89B67]" /> Est. 1945 • 80+ Years Healthcare Legacy
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            About Our Institution
          </h1>

          {/* Paragraph */}
          <p className="text-[#F3EEE6] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            For over eight decades, our family has been dedicated to providing compassionate, ethical, and patient-centered healthcare across generations in Chennai.
          </p>
        </div>
      </section>

      {/* HERITAGE / HISTORY CARD SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DED5] shadow-sm space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center font-bold">
              <Award className="w-6 h-6 text-[#B89B67]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B7568]">
                OUR HERITAGE & HISTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#2B211B]">
                An Eight-Decade Healthcare Journey
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-[#241C18] text-sm sm:text-base leading-relaxed space-y-4 border-t border-[#E6DED5] pt-6">
            {CLINIC_INFO.historyStory.map((paragraph, index) => (
              <p key={index} className="text-[#241C18] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HORIZONTAL ANIMATED TIMELINE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B7568]">
            Legacy Timeline
          </span>
          <h2 className="text-3xl font-heading font-bold text-[#2B211B]">
            Four Generations of Medical & Dental Leaders
          </h2>
          <p className="text-xs text-[#75675F]">
            Use the interactive timeline below to navigate through our history from 1945 to present day.
          </p>
        </div>

        {/* Horizontal Nav Bar */}
        <div className="bg-[#FAF8F3] p-4 rounded-3xl border border-[#E6DED5] relative shadow-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TIMELINE_DATA.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden ${
                  activeTimelineIndex === idx
                    ? 'bg-[#2B211B] text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-[#241C18] hover:bg-[#F3EEE6]'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#B89B67]">
                  {item.year}
                </div>
                <div className="text-sm font-heading font-bold mt-1 line-clamp-1">
                  {item.doctorName.split(',')[0]}
                </div>
                {activeTimelineIndex === idx && (
                  <motion.div
                    layoutId="activeTimelineGlow"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#B89B67]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Active Card Details */}
        <motion.div
          key={activeTimelineIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DED5] shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F3] text-[#4A3025] text-xs font-bold uppercase border border-[#B89B67]/30">
              {TIMELINE_DATA[activeTimelineIndex].year} • {TIMELINE_DATA[activeTimelineIndex].title}
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#2B211B]">
              {TIMELINE_DATA[activeTimelineIndex].doctorName}
            </h3>

            {TIMELINE_DATA[activeTimelineIndex].qualifications && (
              <p className="text-xs font-semibold text-[#8B7568] uppercase tracking-wider">
                {TIMELINE_DATA[activeTimelineIndex].qualifications}
              </p>
            )}

            {TIMELINE_DATA[activeTimelineIndex].institution && (
              <p className="text-xs font-medium text-[#75675F]">
                Institution: <span className="text-[#241C18] font-semibold">{TIMELINE_DATA[activeTimelineIndex].institution}</span>
              </p>
            )}

            <p className="text-[#75675F] text-sm leading-relaxed">
              {TIMELINE_DATA[activeTimelineIndex].description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                disabled={activeTimelineIndex === 0}
                onClick={() => setActiveTimelineIndex((prev) => Math.max(0, prev - 1))}
                className="p-2 rounded-full border border-[#E6DED5] text-[#241C18] hover:bg-[#FAF8F3] disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous timeline step"
              >
                <ChevronLeft className="w-5 h-5 text-[#B89B67]" />
              </button>
              <span className="text-xs text-[#75675F] font-medium">
                Step {activeTimelineIndex + 1} of {TIMELINE_DATA.length}
              </span>
              <button
                disabled={activeTimelineIndex === TIMELINE_DATA.length - 1}
                onClick={() => setActiveTimelineIndex((prev) => Math.min(TIMELINE_DATA.length - 1, prev + 1))}
                className="p-2 rounded-full border border-[#E6DED5] text-[#241C18] hover:bg-[#FAF8F3] disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next timeline step"
              >
                <ChevronRight className="w-5 h-5 text-[#B89B67]" />
              </button>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#FAF8F3] p-6 rounded-2xl border border-[#E6DED5] text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center mx-auto border border-[#B89B67]/30">
              <Award className="w-8 h-8 text-[#B89B67]" />
            </div>
            <h4 className="font-heading font-bold text-[#2B211B] text-lg">Legacy Institution</h4>
            <p className="text-xs text-[#75675F]">
              Continuing eight decades of patient-centered healthcare integrity in Periyar Nagar, Jawahar Nagar, and Thiru Vi Ka Nagar.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MISSION, VISION & HOLISTIC CARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-[#E6DED5] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center font-bold">
              <Target className="w-6 h-6 text-[#B89B67]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2B211B]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#75675F] leading-relaxed">
              {CLINIC_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-[#E6DED5] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center font-bold">
              <Eye className="w-6 h-6 text-[#B89B67]" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2B211B]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#75675F] leading-relaxed">
              {CLINIC_INFO.vision}
            </p>
          </div>

          {/* Holistic Healthcare */}
          <div className="bg-white p-8 rounded-3xl border border-[#E6DED5] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center font-bold">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-[#2B211B]">Holistic Healthcare</h3>
            <p className="text-xs sm:text-sm text-[#75675F] leading-relaxed">
              With <strong className="text-[#2B211B]">Dr. Lakshmi Madhavan (Physiotherapy)</strong> joining the family practice, our commitment extends beyond dental treatments to overall bodily wellness and holistic health.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-[#2B211B] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 border border-[#B89B67]/30">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Experience 80+ Years of Healthcare Excellence
          </h3>
          <p className="text-[#F3EEE6] text-sm max-w-xl mx-auto">
            Book a consultation with our experienced dental surgeons across Periyar Nagar, Jawahar Nagar, and Thiru Vi Ka Nagar.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-[#FAF8F3] text-[#2B211B] hover:bg-[#F3EEE6] font-bold py-3.5 px-8 rounded-2xl shadow-md text-sm transition-transform active:scale-95 flex items-center gap-2 mx-auto"
          >
            <Calendar className="w-4 h-4 text-[#B89B67]" /> Book Appointment Now
          </button>
        </div>
      </section>

    </div>
  );
};
