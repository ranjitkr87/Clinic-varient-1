import React from 'react';

export const PatientJourneySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
            Seamless Experience
          </div>
          <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
            Your Patient Journey
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-2">
            From scheduling your slot to post-consultation recovery, every step is streamlined for comfort
            and clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/50 relative hover:border-secondary transition-all hover:shadow-sm">
            <span className="text-label-sm font-extrabold text-secondary tracking-widest block uppercase mb-3">
              Step 01
            </span>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">touch_app</span>
            </div>
            <h3 className="text-title-md font-bold text-on-surface mb-2">Easy Slot Booking</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Reserve your appointment in under 30 seconds via website or directly through WhatsApp. Instant
              confirmation SMS.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/50 relative hover:border-secondary transition-all hover:shadow-sm">
            <span className="text-label-sm font-extrabold text-secondary tracking-widest block uppercase mb-3">
              Step 02
            </span>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <h3 className="text-title-md font-bold text-on-surface mb-2">Thorough Consultation</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              20+ minutes of dedicated doctor time with vital checks (BP, SpO2, Blood Glucose) and a
              structured physical exam.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/50 relative hover:border-secondary transition-all hover:shadow-sm">
            <span className="text-label-sm font-extrabold text-secondary tracking-widest block uppercase mb-3">
              Step 03
            </span>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">description</span>
            </div>
            <h3 className="text-title-md font-bold text-on-surface mb-2">Diagnosis &amp; Reports</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              If blood tests are required, samples are drawn immediately on-site with verified PDF reports
              sent on WhatsApp same day.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/50 relative hover:border-secondary transition-all hover:shadow-sm">
            <span className="text-label-sm font-extrabold text-secondary tracking-widest block uppercase mb-3">
              Step 04
            </span>
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined">published_with_changes</span>
            </div>
            <h3 className="text-title-md font-bold text-on-surface mb-2">Structured Follow-Up</h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Free 7-day query support for prescription adjustments and recovery check-ins to make sure you
              heal smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
