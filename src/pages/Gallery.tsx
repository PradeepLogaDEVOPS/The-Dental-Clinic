import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const categories = ['All', 'Operatory', 'Facilities', 'Sterilization', 'Transformations'];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Clinic Gallery & Facilities | The Dental Clinics Chennai"
        description="Explore the state-of-the-art operatory operatories, sterilization suites, waiting lounges, and patient transformation cases at The Dental Clinics Chennai."
      />

      {/* HEADER HERO */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
            Advanced Clinical Facilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Clinic Ambiance & Transformations
          </h1>
          <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
            Sterile operatory suites, patient comfort zones, and real clinical results.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-clinic-dark hover:bg-primary-50 border border-clinic-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setLightboxImg(item.image)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-64 sm:h-72 bg-clinic-section border border-clinic-border shadow-sm hover:shadow-card-hover transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-base font-heading font-bold text-white mt-0.5">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="max-w-4xl max-h-[85vh] relative">
            <img src={lightboxImg} alt="Enlarged preview" className="max-w-full max-h-[85vh] rounded-3xl" />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white font-bold bg-white/20 px-4 py-1.5 rounded-full text-xs"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
