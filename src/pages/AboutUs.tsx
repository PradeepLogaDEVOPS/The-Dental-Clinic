import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Target, Eye, Heart, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';
import clinicLogo from '../assets/logo.png';

interface AboutUsProps {
  onOpenBooking: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="About Our Practice | The Dental Clinics Chennai"
        description="Learn about The Dental Clinics in Chennai. Established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician, providing ethical dental care across Chennai."
        canonicalUrl="https://thedentalclinics.in/#about"
      />

      {/* PAGE HEADER HERO (SEO H1) */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10 flex flex-col items-center">
          
          {/* Logo Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] p-3 sm:p-4 shadow-xl border border-white/20 flex items-center justify-center w-[210px] sm:w-[250px] h-[100px] sm:h-[120px] shrink-0"
          >
            <img
              src={clinicLogo}
              alt="The Dental Clinics Official Brand Logo"
              className="w-full h-full object-contain object-center block"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </motion.div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
            <ShieldCheck className="w-4 h-4 text-secondary" /> Established Dental Practice • Chennai
          </div>

          {/* Primary SEO H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            About Our Practice & Healthcare Lineage
          </h1>

          {/* Paragraph */}
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            The dental clinic was established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician.
          </p>
        </div>
      </section>

      {/* FULL FACTUAL HISTORY NARRATIVE (H2) */}
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
                Our History & Practice
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-clinic-dark">
                Clinic History & Development
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

      {/* MISSION, VISION & HOLISTIC CARE (H3s) */}
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
              With <strong className="text-clinic-dark">Dr. Lakshmi Madhavan (Physiotherapy)</strong> joining the practice, our commitment extends beyond dental treatments to overall bodily wellness and holistic health.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-primary via-primary-dark to-[#0B3A63] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">
            Experience Quality & Ethical Healthcare
          </h2>
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
