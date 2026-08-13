import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Calendar, Search } from 'lucide-react';
import { TREATMENTS_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

interface TreatmentsProps {
  onOpenBooking: (branch?: string, treatment?: string, doctor?: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Cosmetic', 'Surgical', 'Specialized'];

  const filteredTreatments = TREATMENTS_DATA.filter((t) => {
    const matchesCat = selectedCategory === 'All' || t.category === selectedCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Dental Treatments & Services | The Dental Clinics Chennai"
        description="Comprehensive dental treatments in Chennai: Root Canal, Dental Implants, Braces, Smile Design, Kids Dentistry, Laser Dentistry & Oral Surgery across 3 clinics."
      />

      {/* HEADER HERO */}
      <section className="bg-[#2B211B] text-white py-16 px-4 sm:px-6 text-center space-y-4 border-b border-[#B89B67]/20">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3025]/60 text-[#D4BC8A] text-xs font-semibold uppercase tracking-wider border border-[#B89B67]/30">
            <Sparkles className="w-4 h-4 text-[#B89B67]" /> Clinical Excellence & Technology
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Dental Treatments & Specialties
          </h1>
          <p className="text-[#F3EEE6] text-sm sm:text-base leading-relaxed">
            From routine preventive oral care to complex maxillofacial surgical procedures.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F3] p-4 rounded-2xl border border-[#E6DED5]">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#2B211B] text-white shadow-md'
                    : 'bg-white text-[#241C18] hover:bg-[#F3EEE6] border border-[#E6DED5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-3 w-4 h-4 text-[#75675F]" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E6DED5] bg-white text-xs text-[#241C18] focus:outline-none focus:border-[#B89B67]"
            />
          </div>

        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-[#E6DED5] shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EEE6] text-[#B89B67] flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6 text-[#B89B67]" />
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-[#FAF8F3] text-[#4A3025] border border-[#E6DED5]">
                    {t.category}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-[#2B211B]">{t.title}</h3>
                <p className="text-xs text-[#75675F] leading-relaxed">{t.fullDesc}</p>

                <div className="space-y-2 pt-2 border-t border-[#E6DED5]">
                  <span className="text-[11px] font-bold uppercase text-[#2B211B]">Key Patient Benefits:</span>
                  <div className="space-y-1.5">
                    {t.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#241C18]">
                        <Check className="w-3.5 h-3.5 text-[#B89B67] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(undefined, t.title)}
                className="w-full py-3 rounded-xl bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D4BC8A]" /> Book {t.title} Slot
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
