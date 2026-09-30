import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroSectionProps {
  onQuickBookDoctor: (doctorId: string) => void;
  onOpenQueue: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuickBookDoctor, onOpenQueue }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-outline-variant/30 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Neighborhood Verification Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container/40 border border-secondary/20 text-on-secondary-container">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-label-md font-semibold">
                Trusted Family Healthcare in Your Neighbourhood
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-display-mobile lg:text-display font-bold tracking-tight text-on-surface">
              Comprehensive Healthcare, <span className="text-secondary">Close to Home</span>
            </h1>

            {/* Body Description */}
            <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              From routine health checkups and chronic illness management to immediate primary care, our
              experienced physicians provide compassionate, evidence-based medical treatment for your entire
              family.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                className="inline-flex items-center justify-center gap-2.5 bg-secondary text-on-secondary px-7 py-3.5 rounded-lg font-semibold text-title-md hover:bg-on-secondary-container shadow-md hover:shadow-lg transition-all active:scale-95"
                href="#appointment-booking"
              >
                <span>Book an Appointment</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2.5 bg-surface-container-lowest border-2 border-outline-variant text-on-surface px-6 py-3.5 rounded-lg font-semibold text-title-md hover:bg-surface-container-low hover:border-secondary transition-all active:scale-95"
                href={`https://wa.me/919876543211?text=Hello%20Doctor,%20I%20need%20a%20consultation%20slot.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-secondary text-[22px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Live OPD Status & Zero-Wait Indicator */}
            <div className="w-full pt-4 border-t border-outline-variant/40 flex flex-wrap items-center gap-y-3 gap-x-6 text-label-md text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span>Zero Long Wait Times</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">biotech</span>
                <span>In-House Diagnostic Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">health_and_safety</span>
                <span>Cashless Insurance Accepted</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual & Doctor Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Doctor Card Box */}
            <div className="relative bg-surface-container-lowest rounded-xl border border-outline-variant/60 shadow-lg p-6 overflow-hidden">
              {/* Real-time Doctor OPD Status Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
                <button
                  onClick={onOpenQueue}
                  className="flex items-center gap-2 group cursor-pointer text-left"
                  title="Click to view live queue dashboard"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                  </span>
                  <span className="text-label-md font-semibold text-on-surface group-hover:text-secondary transition-colors">
                    Today&apos;s OPD Open
                  </span>
                </button>
                <button
                  onClick={onOpenQueue}
                  className="text-label-sm px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-colors font-medium cursor-pointer"
                >
                  Token #14 Active • View
                </button>
              </div>

              {/* Warm Doctor Consultation Portrait */}
              <div className="relative rounded-lg overflow-hidden mb-5 aspect-[4/3] bg-surface-container">
                <img
                  className="w-full h-full object-cover"
                  alt="A dignified Indian family doctor in a clean modern clinic setting with a stethoscope and professional medical white coat. Soft natural daylight illuminates the quiet consultation room decorated in warm ivory and deep teal tones, conveying empathy and clinical authority."
                  src={CLINIC_INFO.images.heroDoctor}
                  loading="eager"
                />
                {/* Floating Accreditation Badge */}
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-outline-variant/40 shadow-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[18px]">shield</span>
                  <span className="text-label-sm text-on-surface font-semibold">
                    Regd. Under CEA Karnataka
                  </span>
                </div>
              </div>

              {/* Doctor Immediate Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-title-lg font-bold text-on-surface">Dr. Ramesh Rao</h3>
                    <p className="text-body-sm text-on-surface-variant">Senior Family Physician • MBBS, MD</p>
                  </div>
                  <div className="text-right">
                    <span className="text-label-sm text-outline block">Next Available</span>
                    <span className="text-label-lg font-bold text-secondary">Today, 4:30 PM</span>
                  </div>
                </div>

                {/* Live Queue Metrics */}
                <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center justify-between text-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-outline text-[18px]">timer</span>
                    Avg. Wait: <strong className="text-on-surface font-semibold">&lt; 12 mins</strong>
                  </span>
                  <a
                    className="text-label-md text-secondary hover:underline font-bold"
                    href="#appointment-booking"
                    onClick={() => onQuickBookDoctor('dr-ananya')}
                  >
                    Quick Book Slot →
                  </a>
                </div>
              </div>

              {/* Floating Social Proof Pill */}
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-label-md text-on-surface-variant">
                <div className="flex items-center gap-1">
                  <span className="text-amber-500 font-bold">★ 4.9/5</span>
                  <span>(3,200+ patient reviews)</span>
                </div>
                <span className="text-label-sm font-medium text-secondary">Google Verified</span>
              </div>
            </div>

            {/* Decorative Ambient Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/5 rounded-full filter blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
