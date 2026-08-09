import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, MapPin, Stethoscope, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRANCHES_DATA, DOCTORS_DATA, TREATMENTS_DATA } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBranch?: string;
  initialTreatment?: string;
  initialDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialBranch = '',
  initialTreatment = '',
  initialDoctor = ''
}) => {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    branch: initialBranch || BRANCHES_DATA[0].name,
    doctor: initialDoctor || 'Any Available Specialist',
    treatment: initialTreatment || TREATMENTS_DATA[0].title,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }

    // 2 & 3 & 4. Generate formatted WhatsApp message & URL
    const url = buildWhatsAppUrl(formData);

    // 5. Open WhatsApp in a new tab
    window.open(url, '_blank');

    // 7. Show success toast
    setToastMessage('Redirecting to WhatsApp...');
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

    // 6. Reset form
    setFormData(initialFormState);

    // Hide toast and close modal shortly
    setTimeout(() => {
      setToastMessage(null);
      onClose();
    }, 2000);
  };

  const handleWhatsAppClick = () => {
    const url = buildWhatsAppUrl(formData);
    window.open(url, '_blank');
    setToastMessage('Redirecting to WhatsApp...');
    setFormData(initialFormState);
    setTimeout(() => {
      setToastMessage(null);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-clinic-dark/60 backdrop-blur-sm"
          />

          {/* Toast inside modal */}
          {toastMessage && (
            <div className="fixed top-8 z-50 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-white animate-in slide-in-from-top font-medium text-sm">
              <MessageSquare className="w-5 h-5" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-clinic-border z-10 my-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/30 text-white text-xs font-semibold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" /> Est. 1945 • Trusted Legacy
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold">Book Your Appointment</h2>
              <p className="text-primary-100 text-sm mt-1">
                Fill out the details to submit your inquiry directly via WhatsApp.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-clinic-grey" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-clinic-grey" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-clinic-grey" />
                      <input
                        type="email"
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark"
                      />
                    </div>
                  </div>

                  {/* Branch */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Select Branch <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-clinic-grey" />
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark bg-white"
                      >
                        {BRANCHES_DATA.map((b) => (
                          <option key={b.id} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Doctor Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Preferred Doctor
                    </label>
                    <div className="relative">
                      <Stethoscope className="absolute left-3.5 top-3.5 w-4 h-4 text-clinic-grey" />
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark bg-white"
                      >
                        <option value="Any Available Specialist">Any Available Specialist</option>
                        {DOCTORS_DATA.map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name} ({doc.qualifications.join(', ')})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                      Treatment Required
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark bg-white"
                    >
                      {TREATMENTS_DATA.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                    Your Message / Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention preferred date, symptoms, or any specific requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-clinic-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm text-clinic-dark resize-none"
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-primary/25 transition-all transform active:scale-95 text-center text-sm"
                  >
                    Submit Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold py-3 px-5 rounded-xl transition-all text-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> Open WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
