import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2, Calendar, Phone, Mail, Globe } from 'lucide-react';
import { DOCTORS_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

interface DoctorsProps {
  onOpenBooking: (branch?: string, treatment?: string, doctor?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Meet Our Doctors | The Dental Clinics Chennai"
        description="Meet our distinguished dental surgeons: Dr. G. Madhavan (BDS), Dr. Sanjay Madhavan (MDS Maxillofacial & Implantology), and Dr. Sandra Arun (BDS)."
      />

      {/* HERO HEADER */}
      <section className="bg-[#2B211B] text-white py-16 px-4 sm:px-6 text-center space-y-4 border-b border-[#B89B67]/20">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3025]/60 text-[#D4BC8A] text-xs font-semibold uppercase tracking-wider border border-[#B89B67]/30">
            <Stethoscope className="w-4 h-4 text-[#B89B67]" /> Multi-Generational Medical Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Meet Our Senior Doctors & Specialists
          </h1>
          <p className="text-[#F3EEE6] text-sm sm:text-base leading-relaxed">
            Generational clinical wisdom, advanced maxillofacial surgical specializations, and patient-first ethics.
          </p>
        </div>
      </section>

      {/* DOCTOR CARDS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {DOCTORS_DATA.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white rounded-3xl border border-[#E6DED5] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
              idx % 2 === 1 ? 'lg:bg-[#FAF8F3]/60' : ''
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[440px] bg-[#FAF8F3] overflow-hidden">
              <img
                src={doc.image}
                alt={`${doc.name} ${doc.qualifications.join(' ')}`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#2B211B] text-[#FAF8F3] text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-[#B89B67]/30">
                {doc.experience}
              </div>

              {doc.college && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#E6DED5] text-xs text-[#241C18] shadow-lg">
                  <span className="text-[10px] text-[#75675F] uppercase font-bold block">Alma Mater / Institution</span>
                  <span className="font-semibold text-[#2B211B]">{doc.college}</span>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B7568]">
                    {doc.role}
                  </span>

                  {/* Social / Direct Connect Icons */}
                  <div className="flex items-center gap-2">
                    {doc.socials?.phone && (
                      <a
                        href={`tel:${doc.socials.phone.replace(/\s/g, '')}`}
                        className="w-8 h-8 rounded-full bg-[#FAF8F3] hover:bg-[#2B211B] hover:text-white text-[#241C18] flex items-center justify-center transition-colors border border-[#E6DED5]"
                        title="Call Doctor's Clinic Desk"
                      >
                        <Phone className="w-4 h-4 text-[#B89B67]" />
                      </a>
                    )}
                    {doc.socials?.email && (
                      <a
                        href={`mailto:${doc.socials.email}`}
                        className="w-8 h-8 rounded-full bg-[#FAF8F3] hover:bg-[#2B211B] hover:text-white text-[#241C18] flex items-center justify-center transition-colors border border-[#E6DED5]"
                        title="Email Doctor"
                      >
                        <Mail className="w-4 h-4 text-[#B89B67]" />
                      </a>
                    )}
                    {doc.socials?.website && (
                      <a
                        href={doc.socials.website}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-[#FAF8F3] hover:bg-[#2B211B] hover:text-white text-[#241C18] flex items-center justify-center transition-colors border border-[#E6DED5]"
                        title="Profile Link"
                      >
                        <Globe className="w-4 h-4 text-[#B89B67]" />
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#2B211B]">{doc.name}</h2>

                {/* Qualifications */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase text-[#75675F] tracking-wider">Qualifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {doc.qualifications.map((q, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-[#FAF8F3] text-[#2B211B] font-semibold text-xs border border-[#E6DED5]"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Specialties */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-bold uppercase text-[#75675F] tracking-wider">Clinical & Surgical Focus</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#241C18]">
                    {doc.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#FAF8F3] p-2 rounded-xl border border-[#E6DED5]">
                        <CheckCircle2 className="w-4 h-4 text-[#B89B67] shrink-0" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-[#75675F] leading-relaxed pt-2">
                  {doc.bio}
                </p>
              </div>

              {/* Booking CTA */}
              <div className="pt-4 border-t border-[#E6DED5] flex items-center justify-between">
                <button
                  onClick={() => onOpenBooking(undefined, undefined, doc.name)}
                  className="bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold py-3 px-6 rounded-2xl shadow-md text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-[#D4BC8A]" /> Book Appointment with {doc.name}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
