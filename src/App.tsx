import { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Doctors } from './pages/Doctors';
import { Treatments } from './pages/Treatments';
import { Branches } from './pages/Branches';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { MessageSquare, Calendar } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingBranch, setBookingBranch] = useState<string>('');
  const [bookingTreatment, setBookingTreatment] = useState<string>('');
  const [bookingDoctor, setBookingDoctor] = useState<string>('');

  const handleOpenBooking = (branch?: string, treatment?: string, doctor?: string) => {
    setBookingBranch(branch || '');
    setBookingTreatment(treatment || '');
    setBookingDoctor(doctor || '');
    setIsBookingOpen(true);
  };

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-clinic-bg text-clinic-dark font-body flex flex-col selection:bg-secondary/20 selection:text-primary relative">
      <SEOHead />

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Page View Switcher */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home setActiveTab={setActiveTab} onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'about' && (
          <AboutUs onOpenBooking={() => handleOpenBooking()} />
        )}
        {activeTab === 'doctors' && (
          <Doctors onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'treatments' && (
          <Treatments onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'branches' && (
          <Branches onOpenBooking={handleOpenBooking} />
        )}
        {activeTab === 'gallery' && (
          <Gallery />
        )}
        {activeTab === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} onOpenBooking={handleOpenBooking} />

      {/* Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialBranch={bookingBranch}
        initialTreatment={bookingTreatment}
        initialDoctor={bookingDoctor}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        {/* Quick Booking Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="bg-primary hover:bg-primary-dark text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white"
          aria-label="Book Appointment"
          title="Book Appointment"
        >
          <Calendar className="w-6 h-6 text-secondary" />
        </button>

        {/* Floating WhatsApp Chat */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebd59] text-white p-3.5 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center border-2 border-white"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;
