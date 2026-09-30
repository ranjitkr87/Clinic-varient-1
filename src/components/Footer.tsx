import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenSchedule: () => void;
  onOpenLabPackages: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule, onOpenLabPackages }) => {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant full-width bottom">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12 py-12">
        {/* Top Grid: Brand & Clinical Accreditation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-outline-variant/40">
          {/* Brand Summary (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-on-secondary">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_hospital
                </span>
              </div>
              <span className="text-headline-sm font-bold text-on-surface">
                {CLINIC_INFO.name}
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              A patient-first multi-specialty healthcare practice offering attentive family medicine,
              chronic disorder management, pediatric wellness, and accredited clinical diagnostic
              laboratory services.
            </p>
            <div className="text-label-sm text-on-surface-variant">
              <span>
                Reg. No: <strong>{CLINIC_INFO.regNumber}</strong>
              </span>
            </div>
          </div>

          {/* Medical Services Quicklinks */}
          <div>
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">
              Clinical Care
            </h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#services"
                >
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#services"
                >
                  General Medicine
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#services"
                >
                  Pediatrics
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenLabPackages}
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150 cursor-pointer text-left"
                >
                  Diagnostic Lab &amp; Tests
                </button>
              </li>
            </ul>
          </div>

          {/* Patient Support & Policies */}
          <div>
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">
              Patient Support
            </h4>
            <ul className="space-y-2 text-body-sm">
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#contact"
                >
                  Cashless Insurance
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenSchedule}
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150 cursor-pointer text-left"
                >
                  Doctor OPD Roster
                </button>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#why-us"
                >
                  Patient Rights
                </a>
              </li>
              <li>
                <a
                  className="text-on-surface-variant hover:text-on-surface hover:underline transition-all duration-150"
                  href="#faq"
                >
                  Clinic FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div>
            <h4 className="text-label-md font-bold text-on-surface uppercase tracking-wider mb-3">
              Contact Desk
            </h4>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Indiranagar, Bengaluru, KA
              <br />
              Phone: {CLINIC_INFO.phone}
              <br />
              WhatsApp: {CLINIC_INFO.whatsapp}
            </p>
            <div className="mt-3">
              <span className="inline-block px-2.5 py-1 rounded bg-secondary-fixed/20 text-secondary text-label-sm font-semibold">
                Ambulance on Standby
              </span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Statutory Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-on-surface-variant">
          <p>© 2024–2026 Aarogya Multi-Specialty Clinic. All rights reserved. Registered under Clinical Establishments Act, India.</p>
          <p className="text-label-sm text-outline text-center md:text-right">
            Medical Disclaimer: Information provided is for informational purposes and does not replace emergency clinical triage.
          </p>
        </div>
      </div>
    </footer>
  );
};
