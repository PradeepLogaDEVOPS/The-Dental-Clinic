import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Calendar } from 'lucide-react';
import { BRANCHES_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

interface BranchesProps {
  onOpenBooking: (branch?: string) => void;
}

export const Branches: React.FC<BranchesProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Our Clinic Branches in Chennai | The Dental Clinics"
        description="Find our 3 convenient dental clinics in Chennai: Main Branch Periyar Nagar (+91 44 2550 5222), Jawahar Nagar (+91 44 3153 5314), and Thiru Vi Ka Nagar (+91 70102 60934)."
      />

      {/* HERO HEADER */}
      <section className="bg-[#2B211B] text-white py-16 px-4 sm:px-6 text-center space-y-4 border-b border-[#B89B67]/20">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3025]/60 text-[#D4BC8A] text-xs font-semibold uppercase tracking-wider border border-[#B89B67]/30">
            <MapPin className="w-4 h-4 text-[#B89B67]" /> 3 Convenient Locations Across Chennai
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Our Clinic Branches
          </h1>
          <p className="text-[#F3EEE6] text-sm sm:text-base leading-relaxed">
            Accessible, state-of-the-art dental facilities situated in key residential neighborhood hubs.
          </p>
        </div>
      </section>

      {/* BRANCHES CARDS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {BRANCHES_DATA.map((branch, idx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#E6DED5] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* Branch Details */}
            <div className="lg:col-span-6 p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B7568] flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#B89B67]" /> Branch #{idx + 1}
                  </span>
                  {branch.isMain && (
                    <span className="px-3 py-1 bg-[#2B211B] text-[#FAF8F3] text-[11px] font-bold rounded-full uppercase tracking-wider border border-[#B89B67]/40">
                      Main Branch
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#2B211B]">
                  {branch.name}
                </h2>

                <div className="space-y-3 text-sm text-[#241C18]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B89B67] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{branch.address}</p>
                      <p className="text-xs text-[#8B7568] font-medium mt-0.5">Landmark: {branch.landmark}</p>
                      <p className="text-xs text-[#75675F]">{branch.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#B89B67] shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="font-bold text-[#2B211B] hover:underline text-base"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#B89B67] shrink-0" />
                    <span className="text-xs text-[#75675F] font-medium">{branch.hours}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#E6DED5] flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenBooking(branch.name)}
                  className="flex-1 bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold py-3 px-5 rounded-xl shadow-md text-xs sm:text-sm text-center flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D4BC8A]" /> Book at this Branch
                </button>

                <a
                  href={`tel:${branch.phone.replace(/\s/g, '')}`}
                  className="bg-[#FAF8F3] hover:bg-[#F3EEE6] text-[#241C18] font-semibold py-3 px-4 rounded-xl border border-[#E6DED5] text-xs sm:text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#B89B67]" /> Call
                </a>

                <a
                  href={branch.mapDirectionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#FAF8F3] hover:bg-[#2B211B] hover:text-white text-[#4A3025] font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 transition-colors border border-[#E6DED5]"
                >
                  <Navigation className="w-4 h-4 text-[#B89B67]" /> Directions
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-6 min-h-[300px] bg-[#FAF8F3] relative">
              <iframe
                title={`Map of ${branch.name}`}
                src={branch.mapEmbedUrl}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};
