import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface PrescriptionPreviewModalProps {
  onClose: () => void;
}

export const PrescriptionPreviewModal: React.FC<PrescriptionPreviewModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          aria-label="Close Prescription Preview"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">description</span>
          </div>
          <div>
            <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
              Paperless Healthcare Demo
            </span>
            <h2 className="text-headline-sm font-bold text-on-surface">Digital WhatsApp Prescription</h2>
          </div>
        </div>

        {/* Realistic Prescription Document Box */}
        <div className="bg-white rounded-xl p-6 border-2 border-outline-variant/60 shadow-inner font-sans space-y-4 text-slate-800">
          {/* Clinic Prescription Letterhead */}
          <div className="flex items-start justify-between border-b-2 border-secondary pb-3">
            <div>
              <h3 className="text-lg font-extrabold text-[#006a63] tracking-tight">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-xs text-slate-600">
                #428, 100 Feet Road, Indiranagar, Bengaluru - 560038
              </p>
              <p className="text-[11px] text-slate-500">
                Reg No: {CLINIC_INFO.regNumber} • Phone: {CLINIC_INFO.phone}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-700 block">Dr. Ananya Sharma</span>
              <span className="text-[11px] text-slate-500">MBBS, MD (General Medicine)</span>
              <span className="text-[10px] text-slate-400 block">KMC Reg: #54892</span>
            </div>
          </div>

          {/* Patient Details & Recorded Vitals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-slate-50 p-2.5 rounded border border-slate-200">
            <div>
              <span className="text-slate-400 block text-[10px]">PATIENT</span>
              <span className="font-bold">Mrs. Sunita Rao (42y / F)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">VISIT DATE</span>
              <span className="font-medium">30-Sep-2026</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">BP / PULSE</span>
              <span className="font-semibold text-emerald-700">118/76 mmHg | 72 bpm</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">BLOOD SUGAR (RBS)</span>
              <span className="font-semibold text-slate-800">104 mg/dL</span>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="text-xs">
            <span className="font-bold text-slate-700">Clinical Diagnosis: </span>
            <span className="text-slate-800 font-medium">
              Upper Respiratory Infection with Mild Rhinitis • Routine Metabolic Screen Normal
            </span>
          </div>

          {/* Rx Medications Table */}
          <div className="space-y-2">
            <div className="flex items-center gap-1 font-serif text-lg font-bold text-[#006a63]">
              <span>℞</span>
              <span className="text-xs font-sans text-slate-400 font-normal">Digitally Typed Medicines</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-emerald-50/50 border border-emerald-100 flex items-start justify-between">
                <div>
                  <strong className="text-slate-900 block text-xs">
                    1. Tab. Paracetamol 650mg
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    1 tablet • 3 times a day (After Food) • SOS for fever &gt; 100°F
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700">3 Days</span>
              </div>

              <div className="p-2.5 rounded bg-emerald-50/50 border border-emerald-100 flex items-start justify-between">
                <div>
                  <strong className="text-slate-900 block text-xs">
                    2. Tab. Levocetirizine + Montelukast
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    1 tablet • Once daily at Bedtime (Night) • Reduces congestion
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700">5 Days</span>
              </div>

              <div className="p-2.5 rounded bg-emerald-50/50 border border-emerald-100 flex items-start justify-between">
                <div>
                  <strong className="text-slate-900 block text-xs">
                    3. Steam Inhalation with Warm Saline Gargles
                  </strong>
                  <span className="text-slate-500 text-[11px]">
                    Twice daily • Hydrate with 2.5L warm water daily
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700">Ongoing</span>
              </div>
            </div>
          </div>

          {/* Follow up & Sign */}
          <div className="flex items-end justify-between pt-3 border-t border-slate-200 text-xs">
            <div>
              <p className="text-[11px] text-slate-500">
                <strong>7-Day Free Follow-up:</strong> Valid till 07-Oct-2026.
              </p>
              <p className="text-[10px] text-emerald-700 font-medium">
                Direct WhatsApp consultation query link active.
              </p>
            </div>
            <div className="text-right">
              <div className="inline-block border border-dashed border-emerald-600 px-2 py-1 rounded bg-emerald-50/40 text-[10px] text-emerald-800 font-mono">
                [Digitally Signed by Dr. Ananya Sharma]
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-5 space-y-2">
          <a
            href="https://wa.me/919876543211?text=Hello%20Aarogya%20Clinic,%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20prescriptions."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-lg bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#20ba5a] transition-all text-xs cursor-pointer shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Try WhatsApp Prescription Sample</span>
          </a>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg border border-outline-variant text-xs font-semibold text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
