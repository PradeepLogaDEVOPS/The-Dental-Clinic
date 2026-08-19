import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2, Calendar, Phone, Mail, Globe, User } from 'lucide-react';
import { DOCTORS_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

interface DoctorsProps {
  onOpenBooking: (branch?: string, treatment?: string, doctor?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Our Dental Surgeons & Specialists | The Dental Clinics Chennai"
        description="Meet our team of experienced dental surgeons: Dr. G. Madhavan (BDS), Dr. Sanjay Madhavan (MDS Oral & Maxillofacial Surgery), and Dr. Sandra Arun (BDS) in Chennai."
        canonicalUrl="https://thedentalclinics.in/#doctors"
      />

      {/* HERO HEADER (SEO H1) */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
            <Stethoscope className="w-4 h-4 text-secondary" /> Dental Surgeons & Specialists
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Our Dental Surgeons & Specialists in Chennai
          </h1>
          <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
            Dedicated clinical surgical care, specialized maxillofacial procedures, and patient-first ethics.
          </p>
        </div>
      </section>

      {/* DOCTOR CARDS (SEO H2 PER DOCTOR) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {DOCTORS_DATA.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white rounded-3xl border border-clinic-border shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
              idx % 2 === 1 ? 'lg:bg-clinic-section/60' : ''
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[440px] bg-clinic-section overflow-hidden flex items-center justify-center">
              {doc.image ? (
                <img
                  src={doc.image}
                  alt={`${doc.name} - ${doc.role} at The Dental Clinics Chennai`}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-50 via-clinic-section to-primary-100/40 flex flex-col items-center justify-center text-primary space-y-3 p-8 text-center min-h-[360px]">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-inner">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-primary">{doc.name}</span>
                  <span className="text-xs text-clinic-grey">{doc.role}</span>
                </div>
              )}

              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                {doc.experience}
              </div>

              {doc.college && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-clinic-border text-xs text-clinic-dark shadow-lg z-10">
                  <span className="text-[10px] text-clinic-grey uppercase font-bold block">Alma Mater / Institution</span>
                  <span className="font-semibold text-primary">{doc.college}</span>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    {doc.role}
                  </span>

                  <div className="flex items-center gap-2">
                    {doc.socials?.phone && (
                      <a
                        href={`tel:${doc.socials.phone.replace(/\s/g, '')}`}
                        className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors border border-primary-100"
                        title="Call Doctor's Clinic Desk"
                      >
                        <Phone className="w-4 h-4 text-secondary" />
                      </a>
                    )}
                    {doc.socials?.email && (
                      <a
                        href={`mailto:${doc.socials.email}`}
                        className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors border border-primary-100"
                        title="Email Doctor"
                      >
                        <Mail className="w-4 h-4 text-secondary" />
                      </a>
                    )}
                    {doc.socials?.website && (
                      <a
                        href={doc.socials.website}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-primary-50 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-colors border border-primary-100"
                        title="Profile Link"
                      >
                        <Globe className="w-4 h-4 text-secondary" />
                      </a>
                    )}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-clinic-dark">{doc.name}</h2>

                <div className="space-y-2">
                  <h3 className="text-[11px] font-bold uppercase text-clinic-grey tracking-wider">Qualifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {doc.qualifications.map((q, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-xl bg-primary-50 text-primary font-semibold text-xs border border-primary-100"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-[11px] font-bold uppercase text-clinic-grey tracking-wider">Clinical & Surgical Focus</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-clinic-dark">
                    {doc.specialties.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 bg-clinic-section p-2 rounded-xl border border-clinic-border">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-clinic-grey leading-relaxed pt-2">
                  {doc.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-clinic-border flex items-center justify-between">
                <button
                  onClick={() => onOpenBooking(undefined, undefined, doc.name)}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full shadow-md text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-secondary" /> Book Appointment with {doc.name}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
