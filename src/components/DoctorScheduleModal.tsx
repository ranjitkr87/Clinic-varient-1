import React from 'react';
import { DOCTORS, CLINIC_INFO } from '../data/clinicData';

interface DoctorScheduleModalProps {
  onClose: () => void;
  onSelectDoctor: (doctorId: string) => void;
}

export const DoctorScheduleModal: React.FC<DoctorScheduleModalProps> = ({
  onClose,
  onSelectDoctor,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          aria-label="Close Doctor Schedule"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">calendar_month</span>
          </div>
          <div>
            <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
              Weekly OPD Roster
            </span>
            <h2 className="text-headline-sm font-bold text-on-surface">Doctor OPD Timetable</h2>
          </div>
        </div>

        {/* Schedule List */}
        <div className="space-y-4 mb-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-secondary/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-on-surface text-base">{doc.name}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-secondary/10 text-secondary font-semibold">
                    ₹{doc.fee}
                  </span>
                </div>
                <p className="text-xs text-secondary font-medium">{doc.degree}</p>
                <p className="text-xs text-on-surface-variant flex items-center gap-1.5 pt-1">
                  <span className="material-symbols-outlined text-[15px] text-outline">schedule</span>
                  <strong>{doc.schedule}</strong>
                </p>
                <p className="text-xs text-outline">Languages: {doc.languages.join(', ')}</p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onSelectDoctor(doc.id);
                }}
                className="px-4 py-2 bg-secondary text-on-secondary text-xs font-semibold rounded-lg hover:bg-on-secondary-container transition-all active:scale-95 shadow-sm whitespace-nowrap cursor-pointer"
              >
                Book with {doc.name.split(' ')[1]}
              </button>
            </div>
          ))}
        </div>

        {/* Special Timings Note */}
        <div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30 text-xs text-on-surface-variant space-y-2 mb-6">
          <div className="flex items-center gap-1.5 font-bold text-on-surface">
            <span className="material-symbols-outlined text-secondary text-[16px]">info</span>
            <span>Diagnostic Sample Counter &amp; Emergency</span>
          </div>
          <p>
            • Diagnostic Lab Sample Collection counter opens early at <strong>7:30 AM</strong> every morning for fasting blood tests.
          </p>
          <p>
            • Sunday consultations are held exclusively between <strong>9:00 AM – 1:00 PM</strong>.
          </p>
          <p>
            • For immediate medical triage, call the 24/7 hotline: <strong>{CLINIC_INFO.phone}</strong>.
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg border border-outline-variant text-xs font-semibold text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
        >
          Close Roster
        </button>
      </div>
    </div>
  );
};
