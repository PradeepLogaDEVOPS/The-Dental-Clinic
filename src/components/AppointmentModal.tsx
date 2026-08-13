import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRANCHES_DATA, TREATMENTS_DATA, DOCTORS_DATA } from '../data/clinicData';

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
  initialBranch,
  initialTreatment,
  initialDoctor
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: initialBranch || BRANCHES_DATA[0].name,
    treatment: initialTreatment || TREATMENTS_DATA[0].title,
    doctor: initialDoctor || DOCTORS_DATA[0].name,
    message: ''
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialBranch) setFormData((prev) => ({ ...prev, branch: initialBranch }));
    if (initialTreatment) setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    if (initialDoctor) setFormData((prev) => ({ ...prev, doctor: initialDoctor }));
  }, [initialBranch, initialTreatment, initialDoctor]);

  if (!isOpen) return null;

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

👨‍⚕️ Preferred Doctor:
${data.doctor || 'N/A'}

📝 Message:
${data.message || 'N/A'}

📅 Submitted From:
The Dental Clinics Website`;

    const encodedMessage = encodeURIComponent(rawMessage);
    return `https://wa.me/917010260934?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill out all required fields (Name and Phone Number).');
      return;
    }

    const url = buildWhatsAppUrl(formData);
    window.open(url, '_blank');
    setToastMessage('Redirecting to WhatsApp...');
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

    setTimeout(() => {
      setToastMessage(null);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#25D366] text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-sm font-semibold border border-white">
          <MessageSquare className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-clinic-border relative max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-clinic-grey hover:text-clinic-dark p-2 rounded-full hover:bg-clinic-section transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-secondary tracking-wider flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Direct Online Booking
          </span>
          <h3 className="text-2xl font-heading font-bold text-clinic-dark">
            Book Dental Appointment
          </h3>
          <p className="text-xs text-clinic-grey">
            Select your preferred location, doctor, and treatment to generate an instant WhatsApp booking request.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. S. Ramanathan"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs focus:outline-none focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
              Preferred Clinic Branch
            </label>
            <select
              value={formData.branch}
              onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs bg-white focus:outline-none focus:border-primary"
            >
              {BRANCHES_DATA.map((b) => (
                <option key={b.id} value={b.name}>{b.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
              Treatment Required
            </label>
            <select
              value={formData.treatment}
              onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs bg-white focus:outline-none focus:border-primary"
            >
              {TREATMENTS_DATA.map((t) => (
                <option key={t.id} value={t.title}>{t.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
              Preferred Doctor
            </label>
            <select
              value={formData.doctor}
              onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs bg-white focus:outline-none focus:border-primary"
            >
              {DOCTORS_DATA.map((d) => (
                <option key={d.id} value={d.name}>{d.name} ({d.role})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-clinic-dark uppercase mb-1">
              Message or Specific Requests
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Prefer evening time slot after 5:00 PM..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinic-border text-xs focus:outline-none focus:border-primary resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <Send className="w-4 h-4 text-secondary" /> Confirm & Send WhatsApp Request
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
