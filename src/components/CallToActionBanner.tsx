import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-primary-container text-surface">
      <div className="max-w-5xl mx-auto px-4 lg:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed text-label-md font-semibold">
          Immediate Clinical Support Available
        </div>
        <h2 className="text-display-mobile lg:text-headline-lg font-bold text-surface tracking-tight">
          Your Family&apos;s Health Deserves Attentive, Trusted Care
        </h2>
        <p className="text-body-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Book an in-clinic consultation today or reach out directly via WhatsApp for quick assistance,
          prescription refills, or same-day diagnostic testing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-secondary text-on-secondary font-bold text-title-md hover:bg-on-secondary-container transition-all active:scale-95 shadow-md inline-block text-center"
            href="#appointment-booking"
          >
            Book Appointment Now
          </a>
          <a
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-surface-container-lowest text-primary font-bold text-title-md hover:bg-surface-container-low transition-all active:scale-95 flex items-center justify-center gap-2 text-center"
            href={`https://wa.me/919876543211?text=Hello%20Aarogya%20Clinic,%20I%20have%20an%20urgent%20query.`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
