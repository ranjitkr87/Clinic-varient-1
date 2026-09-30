import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <section className="bg-primary-container text-surface border-b border-on-primary-container/20 text-body-sm py-2 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Clinic Timings & Location Tag */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary-fixed text-[18px]">schedule</span>
            <span className="font-medium text-surface">
              Mon – Sat: 8:00 AM – 8:30 PM | Sun: 9:00 AM – 1:00 PM
            </span>
          </div>
          <div className="hidden sm:inline-block text-outline">•</div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-secondary-fixed text-[18px]">location_on</span>
            <span className="text-surface font-medium">Indiranagar, Bengaluru</span>
          </div>
        </div>

        {/* Right: Direct Emergency Call & WhatsApp Booking */}
        <div className="flex items-center gap-3">
          <a
            className="flex items-center gap-1.5 text-surface hover:text-secondary-fixed transition-colors font-medium text-xs sm:text-sm"
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            title="Immediate Emergency Triage Helpline"
          >
            <span className="material-symbols-outlined text-error text-[18px]">emergency</span>
            <span className="font-semibold tracking-wide">Emergency: {CLINIC_INFO.phone}</span>
          </a>
          <span className="text-outline hidden sm:inline">|</span>
          <a
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition-colors text-label-sm font-semibold"
            href={`https://wa.me/919876543211?text=Hello%20Aarogya%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
            rel="noopener noreferrer"
            target="_blank"
            title="Instant WhatsApp OPD Desk"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp OPD</span>
          </a>
        </div>
      </div>
    </section>
  );
};
