import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-surface-container-lowest border-b border-outline-variant/30 py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/40">
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0">
            <div className="text-headline-lg text-secondary font-extrabold tracking-tight">15+</div>
            <p className="text-title-md text-on-surface font-bold mt-1">Years of Medical Service</p>
            <p className="text-body-sm text-on-surface-variant mt-0.5">Dedicated to family health</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-8">
            <div className="text-headline-lg text-secondary font-extrabold tracking-tight">35,000+</div>
            <p className="text-title-md text-on-surface font-bold mt-1">Consultations Handled</p>
            <p className="text-body-sm text-on-surface-variant mt-0.5">Patients across all age groups</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-8">
            <div className="flex items-center gap-1">
              <span className="text-headline-lg text-secondary font-extrabold tracking-tight">4.9</span>
              <span
                className="material-symbols-outlined text-amber-500 text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-title-md text-on-surface font-bold mt-1">Patient Rating</p>
            <p className="text-body-sm text-on-surface-variant mt-0.5">Verified on Google Reviews</p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4 md:pt-0 md:pl-8">
            <div className="text-headline-lg text-secondary font-extrabold tracking-tight">100%</div>
            <p className="text-title-md text-on-surface font-bold mt-1">In-House Lab Accuracy</p>
            <p className="text-body-sm text-on-surface-variant mt-0.5">NABL-partnered quality control</p>
          </div>
        </div>
      </div>
    </section>
  );
};
