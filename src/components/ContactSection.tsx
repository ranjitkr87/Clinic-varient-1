import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, DOCTORS } from '../data/clinicData';
import { Appointment } from '../types/clinic';

interface ContactSectionProps {
  selectedDoctorId: string;
  selectedPurpose: string;
  onAppointmentBooked: (appointment: Appointment) => void;
  onOpenSchedule: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedDoctorId,
  selectedPurpose,
  onAppointmentBooked,
  onOpenSchedule,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [doctorId, setDoctorId] = useState(selectedDoctorId || 'dr-ananya');
  const [purpose, setPurpose] = useState(selectedPurpose || 'fever');
  const [slot, setSlot] = useState('09:30 AM');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync when parent updates selected doctor or purpose
  useEffect(() => {
    if (selectedDoctorId) {
      setDoctorId(selectedDoctorId);
    }
  }, [selectedDoctorId]);

  useEffect(() => {
    if (selectedPurpose) {
      setPurpose(selectedPurpose);
    }
  }, [selectedPurpose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const selectedDoc = DOCTORS.find((d) => d.id === doctorId);
      const doctorName = selectedDoc ? selectedDoc.name : 'First Available Physician';
      const tokenNumber = Math.floor(Math.random() * 20) + 15; // Realistic active token: #15 to #34

      const newAppointment: Appointment = {
        id: `APT-${Date.now().toString().slice(-6)}`,
        tokenNumber,
        patientName: patientName.trim(),
        phone: phone.trim(),
        doctorId,
        doctorName,
        purpose,
        date,
        timeSlot: slot,
        notes: notes.trim(),
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Confirmed',
      };

      setIsSubmitting(false);
      onAppointmentBooked(newAppointment);
    }, 400);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30" id="contact">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Clinic Info & OPD Timetable (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
                Visit or Call Us
              </div>
              <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
                Clinic Timings &amp; Location
              </h2>
              <p className="text-body-md text-on-surface-variant mt-2">
                Centrally accessible in Indiranagar with prompt ambulance tie-ups and immediate physician
                availability.
              </p>
            </div>

            {/* Address & Contact Details Box */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/50 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl mt-0.5">pin_drop</span>
                <div>
                  <strong className="text-on-surface font-semibold block">{CLINIC_INFO.name} &amp; Diagnostics</strong>
                  <p className="text-body-sm text-on-surface-variant">
                    {CLINIC_INFO.address} ({CLINIC_INFO.landmark})
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-2xl">call</span>
                <div>
                  <span className="text-label-sm text-outline block">Front Desk / Emergency</span>
                  <a
                    className="text-body-md font-bold text-on-surface hover:text-secondary transition-colors"
                    href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-2xl">mail</span>
                <div>
                  <span className="text-label-sm text-outline block">Email Inquiries</span>
                  <a
                    className="text-body-md font-bold text-on-surface hover:text-secondary transition-colors"
                    href={`mailto:${CLINIC_INFO.email}`}
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Weekly Schedule Table */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/50 shadow-sm" id="timings">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-title-md font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">calendar_today</span>
                  Weekly Doctor OPD Schedule
                </h3>
                <button
                  onClick={onOpenSchedule}
                  className="text-label-sm text-secondary hover:underline font-semibold cursor-pointer"
                >
                  Full Roster
                </button>
              </div>
              <div className="space-y-2 text-body-sm">
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="font-medium text-on-surface">Monday – Friday</span>
                  <span className="text-on-surface-variant">{CLINIC_INFO.hours.weekday}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="font-medium text-on-surface">Saturday</span>
                  <span className="text-on-surface-variant">{CLINIC_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-medium text-on-surface">Sunday (OPD Only)</span>
                  <span className="text-secondary font-semibold">{CLINIC_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Clean Map Visual Container */}
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/50 h-44 bg-surface-container" id="location">
              <img
                className="w-full h-full object-cover"
                alt="A clean map layout showing the Indiranagar Bengaluru area with a clear medical clinic destination pin marker and nearby metro station transit lines in subtle, modern graphic cartography style."
                src={CLINIC_INFO.images.map}
                loading="lazy"
              />
              <a
                href="https://maps.google.com/?q=Indiranagar+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded text-label-sm font-semibold text-secondary hover:bg-surface-container-lowest transition-colors shadow-sm"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>

          {/* Right: Interactive Appointment Booking Form (7 Cols) */}
          <div className="lg:col-span-7" id="appointment-booking">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/60 shadow-lg p-6 lg:p-10">
              <div className="mb-6">
                <span className="text-label-sm font-bold text-secondary uppercase tracking-wider block">
                  Priority Request
                </span>
                <h3 className="text-headline-sm font-bold text-on-surface">
                  Book an In-Clinic Appointment
                </h3>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Fill out the brief form below to lock your preferred doctor and consultation time.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Patient Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-sm font-bold text-on-surface-variant uppercase mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="e.g. Ramesh Kumar"
                      required
                      type="text"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-label-sm font-bold text-on-surface-variant uppercase mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      placeholder="+91 98765 00000"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Doctor Select & Specialty */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-sm font-bold text-on-surface-variant uppercase mb-1">
                      Select Physician *
                    </label>
                    <select
                      className="w-full h-12 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none cursor-pointer"
                      value={doctorId}
                      onChange={(e) => setDoctorId(e.target.value)}
                    >
                      <option value="dr-ananya">Dr. Ananya Sharma (General Medicine)</option>
                      <option value="dr-vikramaditya">Dr. Vikramaditya Patel (Family Physician)</option>
                      <option value="dr-first-available">First Available Specialist</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-label-sm font-bold text-on-surface-variant uppercase mb-1">
                      Consultation Purpose
                    </label>
                    <select
                      className="w-full h-12 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 text-body-md text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary outline-none cursor-pointer"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                    >
                      <option value="fever">Acute Fever / Infection</option>
                      <option value="diabetes">Diabetes / BP Checkup</option>
                      <option value="pediatric">Pediatric / Child Vaccination</option>
                      <option value="women">Women&apos;s Health Screen</option>
                      <option value="lab">Diagnostic Lab Tests</option>
                      <option value="other">Routine Health Checkup</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Slot Chips */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-label-sm font-bold text-on-surface-variant uppercase">
                      Preferred Consultation Slot
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="text-xs px-2.5 py-1 rounded border border-outline-variant/80 bg-surface-container-lowest text-on-surface outline-none focus:border-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['09:30 AM', '11:30 AM', '05:00 PM', '07:15 PM'].map((slotTime) => (
                      <button
                        type="button"
                        key={slotTime}
                        onClick={() => setSlot(slotTime)}
                        className={`py-2.5 text-center text-label-md rounded-lg border transition-all cursor-pointer ${
                          slot === slotTime
                            ? 'border-secondary bg-secondary text-on-secondary font-bold shadow-sm'
                            : 'border-outline-variant bg-surface-container-lowest text-on-surface hover:border-secondary/60'
                        }`}
                      >
                        {slotTime}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brief Symptoms or Notes */}
                <div>
                  <label className="block text-label-sm font-bold text-on-surface-variant uppercase mb-1">
                    Symptoms or Special Requests (Optional)
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-3.5 text-body-md text-on-surface placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="Briefly describe key symptoms, duration, or if wheelchair assistance is needed..."
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {/* Submission CTA & Reassurance */}
                <div className="space-y-3 pt-2">
                  <button
                    className="w-full py-4 rounded-lg bg-secondary text-on-secondary font-bold text-title-md hover:bg-on-secondary-container transition-all active:scale-[0.99] shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[20px]">
                          progress_activity
                        </span>
                        <span>Assigning Token &amp; Confirming...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Appointment Request</span>
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      </>
                    )}
                  </button>
                  <p className="text-body-sm text-center text-outline">
                    🔒 Zero booking fees required online. Pay securely at the clinic reception post-consultation.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
