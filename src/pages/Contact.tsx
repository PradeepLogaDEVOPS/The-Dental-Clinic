import React, { useState } from 'react';
import { Phone, Clock, MapPin, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRANCHES_DATA, TREATMENTS_DATA, CLINIC_INFO } from '../data/clinicData';
import { SEOHead } from '../components/SEOHead';

export const Contact: React.FC = () => {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    branch: BRANCHES_DATA[0].name,
    treatment: TREATMENTS_DATA[0].title,
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const buildWhatsAppUrl = (data: typeof formData) => {
    const rawMessage = `🦷 New Appointment Inquiry

👤 Name:
${data.name}

📞 Phone:
${data.phone}

📧 Email:
${data.email || 'N/A'}

🏥 Preferred Branch:
${data.branch}

🦷 Treatment:
${data.treatment}

📝 Message:
${data.message || 'N/A'}

📅 Submitted From:
The Dental Clinics Website`;

    const encodedMessage = encodeURIComponent(rawMessage);
    return `https://wa.me/917010260934?text=${encodedMessage}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill out all required fields (Name and Phone Number).');
      return;
    }

    const url = buildWhatsAppUrl(formData);
    window.open(url, '_blank');
    setToastMessage('Redirecting to WhatsApp...');
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setFormData(initialFormState);

    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDirectWhatsAppClick = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      const rawMessage = `🦷 New Appointment Inquiry

👤 Name:
${formData.name || 'N/A'}

📞 Phone:
${formData.phone || 'N/A'}

📧 Email:
${formData.email || 'N/A'}

🏥 Preferred Branch:
${formData.branch}

🦷 Treatment:
${formData.treatment}

📝 Message:
${formData.message || 'N/A'}

📅 Submitted From:
The Dental Clinics Website`;

      const url = `https://wa.me/917010260934?text=${encodeURIComponent(rawMessage)}`;
      window.open(url, '_blank');
      setToastMessage('Redirecting to WhatsApp...');
      setTimeout(() => setToastMessage(null), 4000);
      return;
    }

    const url = buildWhatsAppUrl(formData);
    window.open(url, '_blank');
    setToastMessage('Redirecting to WhatsApp...');
    setFormData(initialFormState);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="space-y-16 pb-16 font-body relative">
      <SEOHead
        title="Contact Us & Locations | The Dental Clinics Chennai"
        description="Contact The Dental Clinics Chennai. Call Main Branch (+91 44 2550 5222), Jawahar Nagar (+91 44 3153 5314), or Mobile & WhatsApp (+91 70102 60934). Book your appointment today."
      />

      {/* SUCCESS TOAST */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-white animate-in slide-in-from-right font-medium text-sm">
          <MessageSquare className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* HEADER HERO */}
      <section className="bg-[#2B211B] text-white py-16 px-4 sm:px-6 text-center space-y-4 border-b border-[#B89B67]/20">
        <div className="max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3025]/60 text-[#D4BC8A] text-xs font-semibold uppercase tracking-wider border border-[#B89B67]/30">
            <Phone className="w-4 h-4 text-[#B89B67]" /> Direct Patient Support & Appointments
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
            Get In Touch With Us
          </h1>
          <p className="text-[#F3EEE6] text-sm sm:text-base leading-relaxed">
            Reach out directly to any of our three clinic branches or send us an inquiry online.
          </p>
        </div>
      </section>

      {/* PHONE NUMBERS & QUICK CONTACT GRID */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Branch Phone Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6DED5] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#2B211B] flex items-center justify-center font-bold border border-[#E6DED5]">
              <Phone className="w-5 h-5 text-[#B89B67]" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#2B211B]">Main Branch (Periyar Nagar)</h3>
            <p className="text-xs text-[#75675F]">No. C/276, Jaganathan Salai, Opp. Eswari Nursing Home</p>
            <a
              href="tel:+914425505222"
              className="inline-block text-base font-bold text-[#2B211B] hover:underline"
            >
              +91 44 2550 5222
            </a>
          </div>

          {/* Jawahar Nagar Branch Phone Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6DED5] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] text-[#2B211B] flex items-center justify-center font-bold border border-[#E6DED5]">
              <Phone className="w-5 h-5 text-[#B89B67]" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#2B211B]">Jawahar Nagar Branch</h3>
            <p className="text-xs text-[#75675F]">No. 6, 1st Main Road, Opp. MAX Clothing</p>
            <a
              href="tel:+914431535314"
              className="inline-block text-base font-bold text-[#2B211B] hover:underline"
            >
              +91 44 3153 5314
            </a>
          </div>

          {/* Mobile & WhatsApp Card */}
          <div className="bg-white p-6 rounded-3xl border border-[#E6DED5] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#2B211B]">Mobile & WhatsApp</h3>
            <p className="text-xs text-[#75675F]">Thiru Vi Ka Nagar & Direct WhatsApp Chat</p>
            <a
              href="https://wa.me/917010260934"
              target="_blank"
              rel="noreferrer"
              className="inline-block text-base font-bold text-[#25D366] hover:underline"
            >
              +91 70102 60934
            </a>
          </div>

        </div>
      </section>

      {/* FORM & BRANCH DETAILS */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DED5] shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#2B211B]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#75675F]">
                Fill out the form below to initiate an instant WhatsApp appointment inquiry.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Ramanathan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs focus:outline-none focus:border-[#B89B67]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs focus:outline-none focus:border-[#B89B67]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs focus:outline-none focus:border-[#B89B67]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                    Preferred Branch
                  </label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs bg-white focus:outline-none focus:border-[#B89B67]"
                  >
                    {BRANCHES_DATA.map((b) => (
                      <option key={b.id} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                  Treatment Required
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs bg-white focus:outline-none focus:border-[#B89B67]"
                >
                  {TREATMENTS_DATA.map((t) => (
                    <option key={t.id} value={t.title}>{t.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241C18] uppercase mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your inquiry or requested appointment date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E6DED5] text-xs focus:outline-none focus:border-[#B89B67] resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#2B211B] hover:bg-[#4A3025] text-white font-semibold py-3 px-6 rounded-xl shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#D4BC8A]" /> Submit Inquiry
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold py-3 px-5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Us
                </button>

                <a
                  href={`tel:${CLINIC_INFO.emergencyPhone}`}
                  className="bg-[#FAF8F3] hover:bg-[#F3EEE6] text-[#241C18] font-semibold py-3 px-4 rounded-xl border border-[#E6DED5] text-xs sm:text-sm flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#B89B67]" /> Call
                </a>
              </div>
            </form>
          </div>

          {/* Operational Hours & Branches Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F3] p-8 rounded-3xl border border-[#E6DED5] space-y-4">
              <h3 className="text-xl font-heading font-bold text-[#2B211B] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#B89B67]" /> Clinic Hours
              </h3>
              <div className="space-y-2 text-xs text-[#241C18]">
                <div className="flex justify-between py-1 border-b border-[#E6DED5]">
                  <span>Monday - Saturday:</span>
                  <span className="font-bold text-[#2B211B]">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E6DED5]">
                  <span>Sunday:</span>
                  <span className="font-semibold text-[#75675F]">Emergency Appointments Only</span>
                </div>
              </div>
            </div>

            {/* Quick Branches Summary */}
            <div className="bg-white p-8 rounded-3xl border border-[#E6DED5] space-y-4 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#2B211B] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#B89B67]" /> Branch Addresses
              </h3>
              <div className="space-y-4 text-xs">
                {BRANCHES_DATA.map((b) => (
                  <div key={b.id} className="space-y-1">
                    <p className="font-bold text-[#2B211B] text-sm">{b.name}</p>
                    <p className="text-[#241C18]">{b.address}</p>
                    <p className="text-[#8B7568] font-medium">Opposite: {b.landmark}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
