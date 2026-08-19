import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';
import { ZoomIn, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; category: string } | null>(null);

  const categories = ['All', 'Patient Care', 'Modern Equipment', 'Clinic Facilities', 'Smile Transformations'];

  const filteredGallery = GALLERY_DATA.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Clinic Gallery & Patient Education | The Dental Clinics Chennai"
        description="Explore clinical facilities, patient education guides, modern equipment, and smile transformations at The Dental Clinics Chennai."
        canonicalUrl="https://thedentalclinics.in/#gallery"
      />

      {/* HEADER HERO (SEO H1) */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20">
            Clinical Gallery & Patient Resources
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Clinic Ambiance, Facilities & Patient Resources
          </h1>
          <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
            Sterile operatory suites, patient awareness guides, and clinical excellence in Chennai.
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
          {filteredGallery.map((item) => {
            const isPoster = item.image.endsWith('.png');
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setLightboxImg({ src: item.image, title: item.title, category: item.category })}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-64 sm:h-72 bg-white border border-clinic-border shadow-sm hover:shadow-card-hover transition-all flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={`${item.title} - Patient Education Resource at The Dental Clinics Chennai`}
                  className={`w-full h-full ${
                    isPoster ? 'object-contain p-2 bg-white' : 'object-cover group-hover:scale-105'
                  } transition-transform duration-500`}
                  loading="lazy"
                />
                
                {/* Overlay Badge & Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h2 className="text-sm sm:text-base font-heading font-bold text-white mt-0.5 leading-snug">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
          >
            {/* Header bar inside modal */}
            <div className="bg-primary text-white p-4 px-6 flex items-center justify-between border-b border-primary-light/20">
              <div>
                <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                  {lightboxImg.category}
                </span>
                <h3 className="text-base font-heading font-bold text-white">{lightboxImg.title}</h3>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="p-3 bg-slate-900 flex items-center justify-center overflow-auto max-h-[75vh]">
              <img
                src={lightboxImg.src}
                alt={`${lightboxImg.title} enlarged preview`}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
