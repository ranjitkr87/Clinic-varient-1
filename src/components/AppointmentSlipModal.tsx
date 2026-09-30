import React from 'react';
import { Appointment } from '../types/clinic';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentSlipModalProps {
  appointment: Appointment | null;
  onClose: () => void;
  onOpenLiveQueue: () => void;
}

export const AppointmentSlipModal: React.FC<AppointmentSlipModalProps> = ({
  appointment,
  onClose,
  onOpenLiveQueue,
}) => {
  if (!appointment) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappText = encodeURIComponent(
    `Hello Aarogya Clinic, I have booked an appointment.\nToken: #${appointment.tokenNumber}\nPatient: ${appointment.patientName}\nDoctor: ${appointment.doctorName}\nSlot: ${appointment.timeSlot} on ${appointment.date}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors"
          aria-label="Close Appointment Slip"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3 shadow-inner">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <span className="text-label-sm uppercase tracking-widest text-secondary font-bold">
            Appointment Confirmed
          </span>
          <h2 className="text-headline-sm font-bold text-on-surface mt-1">
            Priority OPD Consultation Token
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-1">
            A confirmation message has been initiated for your WhatsApp number.
          </p>
        </div>

        {/* Printable OPD Slip Box */}
        <div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/50 space-y-4 mb-6">
          {/* Slip Header with Clinic Branding & Live Token */}
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
            <div>
              <span className="text-label-sm font-bold text-secondary uppercase block">
                {CLINIC_INFO.name}
              </span>
              <span className="text-xs text-outline">Reg. {CLINIC_INFO.regNumber}</span>
            </div>
            <div className="text-right">
              <span className="text-label-sm text-outline block">OPD Token</span>
              <span className="text-2xl font-extrabold text-secondary tracking-tight">
                #{appointment.tokenNumber}
              </span>
            </div>
          </div>

          {/* Patient Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-body-sm">
            <div>
              <span className="text-xs text-outline block">Patient Name</span>
              <strong className="text-on-surface font-semibold">{appointment.patientName}</strong>
            </div>
            <div>
              <span className="text-xs text-outline block">WhatsApp Phone</span>
              <strong className="text-on-surface font-semibold">{appointment.phone}</strong>
            </div>
            <div>
              <span className="text-xs text-outline block">Consulting Physician</span>
              <strong className="text-secondary font-semibold">{appointment.doctorName}</strong>
            </div>
            <div>
              <span className="text-xs text-outline block">Scheduled Slot</span>
              <strong className="text-on-surface font-semibold">
                {appointment.timeSlot} ({appointment.date})
              </strong>
            </div>
          </div>

          {/* Address & Instructions */}
          <div className="p-3 bg-surface-container-lowest rounded-lg border border-outline-variant/30 text-xs text-on-surface-variant space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
              <span>Ground Floor, #428, 100 Feet Rd, Indiranagar (Opp. Metro Pillar 78)</span>
            </div>
            <p className="text-outline pl-5">
              Please arrive 5–10 minutes prior to your slot. Ground-floor wheelchair assistance available upon arrival.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={`https://wa.me/919876543211?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all shadow-sm cursor-pointer text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Receive Token on WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenLiveQueue();
              }}
              className="py-2.5 rounded-lg border border-secondary text-secondary font-semibold hover:bg-secondary/5 transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">timer</span>
              <span>Track Live Queue</span>
            </button>
            <button
              onClick={handlePrint}
              className="py-2.5 rounded-lg border border-outline-variant text-on-surface font-semibold hover:bg-surface-container-low transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print Token Slip</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full text-center text-xs text-outline hover:text-on-surface transition-colors pt-1 cursor-pointer"
          >
            Done and return to clinic homepage
          </button>
        </div>
      </div>
    </div>
  );
};
