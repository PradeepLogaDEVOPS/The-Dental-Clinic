import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Phone, MessageSquare, ShieldCheck, Award, Users, ChevronRight, 
  Star, MapPin, ArrowRight, Sparkles, CheckCircle2
} from 'lucide-react';
import { 
  CLINIC_INFO, TIMELINE_DATA, DOCTORS_DATA, TREATMENTS_DATA, 
  WHY_CHOOSE_US, TESTIMONIALS_DATA, GALLERY_DATA 
} from '../data/clinicData';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenBooking: (branch?: string, treatment?: string, doctor?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onOpenBooking }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Auto slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-clinic-section via-white to-primary-50 pt-8 pb-20 lg:pt-14 lg:pb-32 border-b border-clinic-border">
        {/* Subtle Background Glow Spheres */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Legacy Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary font-semibold text-xs uppercase tracking-wider border border-primary/20 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Est. 1945 • 80+ Years Healthcare Legacy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-clinic-dark leading-[1.15]">
                Multi-Generational <br />
                <span className="gradient-text">Dental Excellence</span> <br />
                in Chennai
              </h1>

              {/* Subtext */}
              <p className="text-clinic-grey text-base sm:text-lg leading-relaxed max-w-2xl">
                Founded in 1945 by <strong className="text-clinic-dark font-semibold">Dr. V. M. Nair</strong>, The Dental Clinics represents four generations of trusted, ethical, and compassionate family healthcare across <span className="text-primary font-semibold">Periyar Nagar</span>, <span className="text-primary font-semibold">Jawahar Nagar</span>, and <span className="text-primary font-semibold">Thiru Vi Ka Nagar</span>.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking()}
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-secondary" /> Book Appointment
                </button>

                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone}`}
                  className="bg-white hover:bg-clinic-section text-primary border border-primary/30 font-semibold py-4 px-7 rounded-full shadow-sm hover:shadow-md transition-all text-sm sm:text-base flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-secondary" /> Call Now
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold p-4 rounded-full shadow-md transition-all flex items-center justify-center"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-8 border-t border-clinic-border grid grid-cols-3 gap-4 text-center sm:text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">80+</div>
                  <div className="text-xs text-clinic-grey font-medium">Years Legacy</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">4 Gen</div>
                  <div className="text-xs text-clinic-grey font-medium">Dental Experts</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">3</div>
                  <div className="text-xs text-clinic-grey font-medium">Chennai Branches</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Image & Float Cards Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card Backdrop */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                    alt="The Dental Clinics Chennai Modern Operatory"
                    className="w-full h-[420px] sm:h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wider">Clinical Integrity Since 1945</span>
                    <h3 className="text-xl font-heading font-bold">State-of-the-Art Care</h3>
                    <p className="text-xs text-white/80">Ethical diagnostics, painless root canals, laser surgery, and implants.</p>
                  </div>
                </div>

                {/* Floating Card 1: Legacy Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-clinic-border hidden sm:flex items-center gap-3 max-w-[220px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-dark">Founded in 1945</div>
                    <div className="text-[11px] text-clinic-grey">Dr. V. M. Nair (Founder)</div>
                  </div>
                </motion.div>

                {/* Floating Card 2: Branches Badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-clinic-border hidden sm:flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-clinic-dark">3 Locations in Chennai</div>
                    <div className="text-[11px] text-clinic-grey">Periyar, Jawahar & Thiru Vi Ka Nagar</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-clinic-section rounded-3xl p-8 sm:p-12 border border-clinic-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Heritage of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-clinic-dark">
              Eight Decades of Family Healthcare Integrity
            </h2>
            <p className="text-clinic-grey text-sm sm:text-base leading-relaxed">
              {CLINIC_INFO.aboutFull}
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group text-sm"
              >
                Read Full Clinic History & Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-clinic-border space-y-2">
              <ShieldCheck className="w-7 h-7 text-primary" />
              <h4 className="font-heading font-bold text-clinic-dark text-base">Ethical Standards</h4>
              <p className="text-xs text-clinic-grey">Transparent diagnoses and evidence-based patient recommendations.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-clinic-border space-y-2">
              <Users className="w-7 h-7 text-secondary" />
              <h4 className="font-heading font-bold text-clinic-dark text-base">4 Generations</h4>
              <p className="text-xs text-clinic-grey">Multi-generational oral healthcare wisdom handed down with pride.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEGACY TIMELINE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Multi-Generational Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-clinic-dark">
            Our 80-Year Healthcare Legacy
          </h2>
          <p className="text-clinic-grey text-sm">
            Strictly preserving our lineage from 1945 to present day.
          </p>
        </div>

        {/* Timeline Visualizer */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary-dark transform -translate-x-1/2" />

          <div className="space-y-8 relative">
            {TIMELINE_DATA.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Box */}
                <div className="w-full md:w-1/2 p-6 bg-white rounded-2xl shadow-sm border border-clinic-border hover:shadow-md transition-shadow space-y-2">
                  <div className="inline-block px-3 py-1 bg-primary-50 text-primary font-bold text-xs rounded-full">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-clinic-dark">{event.title}</h3>
                  {event.subtitle && (
                    <p className="text-xs font-semibold text-secondary">{event.subtitle}</p>
                  )}
                  <p className="text-xs sm:text-sm text-clinic-grey leading-relaxed">{event.description}</p>
                </div>

                {/* Timeline Center Node */}
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shadow-lg shrink-0 z-10 border-4 border-white text-xs">
                  {idx + 1}
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section className="bg-clinic-section py-16 border-y border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Expert Dental Surgeons
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-clinic-dark">
                Meet Our Experienced Doctors
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('doctors')}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors text-sm"
            >
              View Full Doctor Profiles <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCTORS_DATA.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden border border-clinic-border shadow-sm hover:shadow-card-hover transition-all flex flex-col"
              >
                <div className="relative h-64 bg-clinic-section overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-primary border border-clinic-border">
                    {doc.experience}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-clinic-dark">{doc.name}</h3>
                    <p className="text-xs font-semibold text-secondary mt-0.5">{doc.role}</p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {doc.qualifications.map((q, i) => (
                        <span key={i} className="px-2.5 py-1 bg-clinic-section text-clinic-dark text-[11px] font-medium rounded-lg border border-clinic-border">
                          {q}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-clinic-grey mt-3 line-clamp-3 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenBooking(undefined, undefined, doc.name)}
                    className="w-full py-2.5 rounded-xl bg-primary-50 hover:bg-primary text-primary hover:text-white font-semibold text-xs transition-colors text-center"
                  >
                    Book Consultation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Comprehensive Dental Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-clinic-dark">
            Our Dental Treatments & Services
          </h2>
          <p className="text-clinic-grey text-sm">
            Modern, ethical, and gentle treatments tailored for all age groups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS_DATA.slice(0, 9).map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl border border-clinic-border shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6 text-secondary" />
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-heading font-bold text-clinic-dark">{t.title}</h3>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-clinic-section text-clinic-grey border border-clinic-border">
                    {t.category}
                  </span>
                </div>

                <p className="text-xs text-clinic-grey leading-relaxed">{t.shortDesc}</p>
              </div>

              <div className="pt-2 border-t border-clinic-border/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveTab('treatments')}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Learn Details <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking(undefined, t.title)}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors"
                >
                  Book Slot
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => setActiveTab('treatments')}
            className="inline-flex items-center gap-2 bg-clinic-section hover:bg-clinic-border text-clinic-dark font-semibold px-6 py-3 rounded-full border border-clinic-border transition-colors text-sm"
          >
            Explore All 12 Dental Treatments <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Why Patients Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              The Dental Clinics Distinction
            </h2>
            <p className="text-primary-100 text-sm">
              Blending eight decades of healthcare heritage with modern surgical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-primary-100/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-clinic-section rounded-3xl p-8 sm:p-12 border border-clinic-border space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Patient Experiences
            </span>
            <h2 className="text-3xl font-heading font-bold text-clinic-dark">
              Trusted Across Generations
            </h2>
          </div>

          {/* Testimonial Active Slide */}
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-clinic-border text-center space-y-4">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(TESTIMONIALS_DATA[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="text-clinic-dark text-base sm:text-lg italic font-heading leading-relaxed">
              "{TESTIMONIALS_DATA[activeTestimonial].comment}"
            </p>

            <div>
              <h4 className="font-bold text-primary text-base">
                {TESTIMONIALS_DATA[activeTestimonial].name}
              </h4>
              <p className="text-xs text-clinic-grey">
                {TESTIMONIALS_DATA[activeTestimonial].locality} • Treatment:{' '}
                <span className="text-secondary font-medium">{TESTIMONIALS_DATA[activeTestimonial].treatment}</span>
              </p>
            </div>
          </div>

          {/* Dots Control */}
          <div className="flex items-center justify-center gap-2">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === i ? 'bg-primary w-8' : 'bg-clinic-border'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Clinic Ambiance
            </span>
            <h2 className="text-3xl font-heading font-bold text-clinic-dark">
              Facilities & Transformations
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('gallery')}
            className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
          >
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_DATA.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedGalleryImg(item.image)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer h-48 sm:h-60 bg-clinic-section border border-clinic-border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clinic-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div>
                  <span className="text-[10px] text-secondary uppercase font-bold">{item.category}</span>
                  <h4 className="text-xs font-bold text-white">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Modal */}
        {selectedGalleryImg && (
          <div
            onClick={() => setSelectedGalleryImg(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <div className="max-w-3xl max-h-[85vh] relative">
              <img src={selectedGalleryImg} alt="Preview" className="max-w-full max-h-[85vh] rounded-2xl" />
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="absolute -top-10 right-0 text-white text-sm font-bold bg-white/20 px-3 py-1 rounded-full"
              >
                Close ✕
              </button>
            </div>
          </div>
        )}
      </section>

      {/* APPOINTMENT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-primary via-primary-dark to-[#0A3B66] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-white/10 px-3 py-1 rounded-full">
              Your Smile Deserves The Best Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold">
              Schedule Your Dental Consultation Today
            </h2>
            <p className="text-primary-100 text-sm leading-relaxed">
              Experience 80+ years of healthcare legacy, gentle care, and painless treatment across our 3 branches in Chennai.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onOpenBooking()}
              className="bg-white text-primary hover:bg-clinic-section font-bold py-3.5 px-8 rounded-full shadow-lg transition-transform active:scale-95 text-sm"
            >
              Book Appointment Now
            </button>
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="border border-white/40 hover:bg-white/10 text-white font-semibold py-3.5 px-6 rounded-full transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call {CLINIC_INFO.emergencyPhone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
