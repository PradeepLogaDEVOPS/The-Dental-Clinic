import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, X, ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; category: string } | null>(null);

  const categories = ['All', 'Clinic Facilities', 'Modern Equipment', 'Patient Care', 'Smile Transformations'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((g) => g.category === selectedCategory);

  return (
    <div className="space-y-16 pb-16 font-body">
      <SEOHead
        title="Gallery & Facilities | The Dental Clinics Chennai"
        description="Explore photos of our modern sterilization suite, advanced operatory, pediatric corner, and smile transformations across our Chennai clinics."
      />

      {/* HEADER HERO */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#0B3A63] text-white py-16 px-4 sm:px-6 text-center space-y-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-white text-xs font-semibold uppercase tracking-wider">
            <Image className="w-4 h-4 text-secondary" /> Visual Tour & Transformations
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold">
            Clinic Gallery
          </h1>
          <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
            Take a look inside our modern operatory suites, hygienic sterilization rooms, and patient transformations.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 bg-clinic-section p-3 rounded-2xl border border-clinic-border max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-clinic-dark hover:bg-clinic-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setLightboxImg({ src: item.image, title: item.title, category: item.category })}
              className="relative group rounded-3xl overflow-hidden cursor-pointer bg-clinic-section border border-clinic-border shadow-sm hover:shadow-xl transition-all h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/80 via-clinic-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-secondary">{item.category}</span>
                  <h3 className="text-base font-bold text-white font-heading">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-clinic-dark rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-hidden flex items-center justify-center max-h-[75vh] bg-black">
                <img
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-6 text-white bg-clinic-dark flex items-center justify-between border-t border-white/10">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    {lightboxImg.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold">{lightboxImg.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
