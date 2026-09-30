/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { AboutSection } from './components/AboutSection';
import { WhyUsSection } from './components/WhyUsSection';
import { PatientJourneySection } from './components/PatientJourneySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { Footer } from './components/Footer';
import { AppointmentSlipModal } from './components/AppointmentSlipModal';
import { LiveQueueTrackerModal } from './components/LiveQueueTrackerModal';
import { LabPackagesModal } from './components/LabPackagesModal';
import { DoctorScheduleModal } from './components/DoctorScheduleModal';
import { PrescriptionPreviewModal } from './components/PrescriptionPreviewModal';
import { FloatingEmergencyBar } from './components/FloatingEmergencyBar';
import { Doctor, Service, Appointment, LabPackage } from './types/clinic';

export default function App() {
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-ananya');
  const [selectedPurpose, setSelectedPurpose] = useState('fever');

  // Modals state
  const [activeAppointment, setActiveAppointment] = useState<Appointment | null>(null);
  const [showQueueModal, setShowQueueModal] = useState(false);
  const [showLabModal, setShowLabModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);

  // Smooth scroll helper
  const scrollToBooking = () => {
    const el = document.getElementById('appointment-booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDoctorForBooking = (doctor: Doctor) => {
    setSelectedDoctorId(doctor.id);
    scrollToBooking();
  };

  const handleQuickBookDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    scrollToBooking();
  };

  const handleSelectServiceForBooking = (service: Service) => {
    if (service.id === 'diabetes-hypertension') {
      setSelectedDoctorId('dr-vikramaditya');
      setSelectedPurpose('diabetes');
    } else if (service.id === 'pediatrics') {
      setSelectedPurpose('pediatric');
    } else if (service.id === 'womens-health') {
      setSelectedDoctorId('dr-ananya');
      setSelectedPurpose('women');
    } else if (service.id === 'diagnostics-lab') {
      setSelectedPurpose('lab');
    } else {
      setSelectedPurpose('fever');
    }
    scrollToBooking();
  };

  const handleAppointmentBooked = (appointment: Appointment) => {
    setActiveAppointment(appointment);
  };

  const handleBookLabTest = (pkg: LabPackage, isHomeCollection: boolean) => {
    setSelectedPurpose('lab');
    setShowLabModal(false);
    // Create an immediate lab reservation slip
    const labToken: Appointment = {
      id: `LAB-${Date.now().toString().slice(-6)}`,
      tokenNumber: Math.floor(Math.random() * 15) + 30,
      patientName: 'Diagnostic Sample Booking',
      phone: '+91 (Patient WhatsApp)',
      doctorId: 'dr-first-available',
      doctorName: `${pkg.name} (${isHomeCollection ? 'Home Collection' : 'In-Clinic Lab'})`,
      purpose: 'Diagnostic Lab Tests',
      date: new Date().toISOString().split('T')[0],
      timeSlot: '07:30 AM (Fasting Sample Slot)',
      notes: `Package: ${pkg.name}. Total: ₹${pkg.price + (isHomeCollection ? 100 : 0)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Confirmed',
    };
    setActiveAppointment(labToken);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-sans selection:bg-secondary-container selection:text-on-secondary-container">
      {/* 1. Top Announcement & Emergency Bar */}
      <TopAnnouncementBar />

      {/* 2. Sticky Header Nav */}
      <TopNavBar
        onOpenSchedule={() => setShowScheduleModal(true)}
        onOpenQueue={() => setShowQueueModal(true)}
        onOpenLabPackages={() => setShowLabModal(true)}
        onOpenPrescriptionDemo={() => setShowPrescriptionModal(true)}
      />

      {/* Main Page Landmark for Web Accessibility & Search Engine Crawlability */}
      <main id="main-content" className="flex-1">
        {/* 3. Hero Section with Live Doctor Queue Card */}
        <HeroSection
          onQuickBookDoctor={handleQuickBookDoctor}
          onOpenQueue={() => setShowQueueModal(true)}
        />

        {/* 4. Trust & Credibility Metrics */}
        <StatsSection />

        {/* 5. Specialised Medical Services */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenLabPackages={() => setShowLabModal(true)}
        />

        {/* 6. Doctor Profiles */}
        <DoctorsSection onSelectDoctorForBooking={handleSelectDoctorForBooking} />

        {/* 7. About Clinic & Modern Facility */}
        <AboutSection onOpenPrescriptionDemo={() => setShowPrescriptionModal(true)} />

        {/* 8. Why Choose Us */}
        <WhyUsSection
          onOpenPrescriptionDemo={() => setShowPrescriptionModal(true)}
          onOpenQueue={() => setShowQueueModal(true)}
        />

        {/* 9. Patient Journey */}
        <PatientJourneySection />

        {/* 10. Patient Testimonials */}
        <TestimonialsSection />

        {/* 11. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 12. Contact, Timings & Interactive Booking Form */}
        <ContactSection
          selectedDoctorId={selectedDoctorId}
          selectedPurpose={selectedPurpose}
          onAppointmentBooked={handleAppointmentBooked}
          onOpenSchedule={() => setShowScheduleModal(true)}
        />

        {/* 13. Calming Conversion CTA */}
        <CallToActionBanner />
      </main>

      {/* 14. Comprehensive Footer */}
      <Footer
        onOpenSchedule={() => setShowScheduleModal(true)}
        onOpenLabPackages={() => setShowLabModal(true)}
      />

      {/* Floating Emergency & Live Queue Actions */}
      <FloatingEmergencyBar onOpenLiveQueue={() => setShowQueueModal(true)} />

      {/* Interactive Modals */}
      {activeAppointment && (
        <AppointmentSlipModal
          appointment={activeAppointment}
          onClose={() => setActiveAppointment(null)}
          onOpenLiveQueue={() => setShowQueueModal(true)}
        />
      )}

      {showQueueModal && (
        <LiveQueueTrackerModal
          onClose={() => setShowQueueModal(false)}
          onBookSlot={() => {
            setShowQueueModal(false);
            scrollToBooking();
          }}
        />
      )}

      {showLabModal && (
        <LabPackagesModal
          onClose={() => setShowLabModal(false)}
          onBookLabTest={handleBookLabTest}
        />
      )}

      {showScheduleModal && (
        <DoctorScheduleModal
          onClose={() => setShowScheduleModal(false)}
          onSelectDoctor={(docId) => {
            setSelectedDoctorId(docId);
            scrollToBooking();
          }}
        />
      )}

      {showPrescriptionModal && (
        <PrescriptionPreviewModal onClose={() => setShowPrescriptionModal(false)} />
      )}
    </div>
  );
}
