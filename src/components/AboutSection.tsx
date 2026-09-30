import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenPrescriptionDemo: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPrescriptionDemo }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30" id="about">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold">
              Our Healthcare Philosophy
            </div>
            <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
              Restoring the Lost Dignity of Family Medicine
            </h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              In an era of rushed corporate hospital visits where doctors barely glance up from their
              screens, Aarogya Clinic was established to revive the sacred doctor-patient relationship.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              We operate with strict hospital-grade sterilization standards, transparent single-tier
              pricing, and paperless electronic health records (EHR). Your prescriptions and diagnostic
              reports are instantly sent to your personal WhatsApp, ensuring seamless follow-up care for
              your elderly parents and children alike.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                  clinical_notes
                </span>
                <h4 className="font-bold text-on-surface text-body-md">Evidence-Based</h4>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Zero unneeded tests or inflated pharma prescriptions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40">
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                  distance
                </span>
                <h4 className="font-bold text-on-surface text-body-md">Walkable Clinic</h4>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Prime ground-floor clinic with easy wheelchair access.
                </p>
              </div>
              <div
                onClick={onOpenPrescriptionDemo}
                className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/40 cursor-pointer hover:border-secondary transition-all"
                title="Click to view sample prescription"
              >
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                  send_to_mobile
                </span>
                <h4 className="font-bold text-on-surface text-body-md flex items-center justify-between">
                  <span>Digital Follow-ups</span>
                  <span className="text-xs text-secondary underline font-normal">View</span>
                </h4>
                <p className="text-body-sm text-on-surface-variant mt-1">
                  Direct doctor chat access for medication queries.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Facility Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant/60 shadow-lg">
              <img
                className="w-full h-[440px] object-cover"
                alt="Interior of an ultra-clean, serene family medical clinic waiting lounge and consultation suite in Bengaluru. The aesthetic features warm wooden accents, comfortable linen chairs, soothing teal design elements, pristine white medical instruments, and bright natural morning light."
                src={CLINIC_INFO.images.facility}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-surface">
                  <span className="text-label-sm font-semibold text-secondary-fixed uppercase tracking-wider block">
                    Cleanliness &amp; Hygiene Standard
                  </span>
                  <p className="text-title-lg font-bold text-surface">
                    NABH Standards Compliant Clinical Environment
                  </p>
                  <p className="text-body-sm text-slate-300 mt-1">
                    Hospital-grade HEPA air filtration and UV-sanitized examination rooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
