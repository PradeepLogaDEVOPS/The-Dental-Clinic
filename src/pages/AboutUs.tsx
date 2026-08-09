import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Heart, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';
import { CLINIC_INFO, TIMELINE_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

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

      {/* PAGE HEADER HERO */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
            <ShieldCheck className="w-4 h-4 text-secondary" /> Est. 1945 • 80+ Years Healthcare Legacy
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold">
            About Our Institution
          </h1>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Four generations of healthcare excellence, compassionate patient care, and ethical dentistry in Chennai.
          </p>
        </div>
      </section>

      {/* FULL VERBATIM LEGACY NARRATIVE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-clinic-border shadow-md space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center font-bold">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Our Heritage & History
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-clinic-dark">
                An Eight-Decade Healthcare Journey
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-clinic-dark text-sm sm:text-base leading-relaxed space-y-4 border-t border-clinic-border pt-6">
            {CLINIC_INFO.historyStory.map((paragraph, index) => (
              <p key={index} className="text-clinic-dark leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BEAUTIFUL HORIZONTAL ANIMATED TIMELINE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Legacy Timeline
          </span>
          <h2 className="text-3xl font-heading font-bold text-clinic-dark">
            Four Generations of Medical & Dental Leaders
          </h2>
          <p className="text-xs text-clinic-grey">
            Use the interactive timeline below to navigate through our history from 1945 to present day.
          </p>
        </div>

        {/* Horizontal Nav Bar */}
        <div className="bg-clinic-section p-4 rounded-3xl border border-clinic-border relative shadow-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TIMELINE_DATA.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTimelineIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all relative overflow-hidden ${
                  activeTimelineIndex === idx
                    ? 'bg-primary text-white shadow-lg transform -translate-y-1'
                    : 'bg-white text-clinic-dark hover:bg-clinic-border'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                  {item.year}
                </div>
                <div className="text-sm font-heading font-bold mt-1 line-clamp-1">
                  {item.doctorName.split(',')[0]}
                </div>
                {activeTimelineIndex === idx && (
                  <motion.div
                    layoutId="activeTimelineGlow"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"
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
          className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-primary-100 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary text-xs font-bold uppercase">
              {TIMELINE_DATA[activeTimelineIndex].year} • {TIMELINE_DATA[activeTimelineIndex].title}
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-clinic-dark">
              {TIMELINE_DATA[activeTimelineIndex].doctorName}
            </h3>

            {TIMELINE_DATA[activeTimelineIndex].qualifications && (
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">
                {TIMELINE_DATA[activeTimelineIndex].qualifications}
              </p>
            )}

            {TIMELINE_DATA[activeTimelineIndex].institution && (
              <p className="text-xs font-medium text-clinic-grey">
                Institution: <span className="text-clinic-dark font-semibold">{TIMELINE_DATA[activeTimelineIndex].institution}</span>
              </p>
            )}

            <p className="text-clinic-grey text-sm leading-relaxed">
              {TIMELINE_DATA[activeTimelineIndex].description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                disabled={activeTimelineIndex === 0}
                onClick={() => setActiveTimelineIndex((prev) => Math.max(0, prev - 1))}
                className="p-2 rounded-full border border-clinic-border text-clinic-dark hover:bg-clinic-section disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous timeline step"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-clinic-grey font-medium">
                Step {activeTimelineIndex + 1} of {TIMELINE_DATA.length}
              </span>
              <button
                disabled={activeTimelineIndex === TIMELINE_DATA.length - 1}
                onClick={() => setActiveTimelineIndex((prev) => Math.min(TIMELINE_DATA.length - 1, prev + 1))}
                className="p-2 rounded-full border border-clinic-border text-clinic-dark hover:bg-clinic-section disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next timeline step"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="md:col-span-4 bg-clinic-section p-6 rounded-2xl border border-clinic-border text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-heading font-bold text-clinic-dark text-lg">Legacy Institution</h4>
            <p className="text-xs text-clinic-grey">
              Continuing eight decades of patient-centered healthcare integrity in Periyar Nagar, Jawahar Nagar, and Thiru Vi Ka Nagar.
            </p>
          </div>
        </motion.div>
      </section>

      {/* MISSION, VISION & HOLISTIC CARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-clinic-border shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center font-bold">
              <Target className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-clinic-dark">Our Mission</h3>
            <p className="text-xs sm:text-sm text-clinic-grey leading-relaxed">
              {CLINIC_INFO.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-clinic-border shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-clinic-dark">Our Vision</h3>
            <p className="text-xs sm:text-sm text-clinic-grey leading-relaxed">
              {CLINIC_INFO.vision}
            </p>
          </div>

          {/* Holistic Healthcare */}
          <div className="bg-white p-8 rounded-3xl border border-clinic-border shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-clinic-dark">Holistic Healthcare</h3>
            <p className="text-xs sm:text-sm text-clinic-grey leading-relaxed">
              With <strong className="text-clinic-dark">Dr. Lakshmi Madhavan (Physiotherapy)</strong> joining the family practice, our commitment extends beyond dental treatments to overall bodily wellness and holistic health.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-primary via-primary-dark to-[#0B3A63] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Experience 80+ Years of Healthcare Excellence
          </h3>
          <p className="text-primary-100 text-sm max-w-xl mx-auto">
            Book a consultation with our experienced dental surgeons across Periyar Nagar, Jawahar Nagar, and Thiru Vi Ka Nagar.
          </p>
          <button
            onClick={onOpenBooking}
            className="bg-white text-primary hover:bg-clinic-section font-bold py-3.5 px-8 rounded-full shadow-md text-sm transition-transform active:scale-95 flex items-center gap-2 mx-auto"
          >
            <Calendar className="w-4 h-4 text-secondary" /> Book Appointment Now
          </button>
        </div>
      </section>

    </div>
  );
};
