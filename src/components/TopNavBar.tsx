import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface TopNavBarProps {
  onOpenSchedule: () => void;
  onOpenQueue: () => void;
  onOpenLabPackages: () => void;
  onOpenPrescriptionDemo: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  onOpenSchedule,
  onOpenQueue,
  onOpenLabPackages,
  onOpenPrescriptionDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-outline-variant/50 shadow-xs top-0 sticky z-40 transition-all">
      <div className="w-full px-4 lg:px-8 xl:px-12 max-w-7xl mx-auto flex items-center justify-between h-18 sm:h-20">
        {/* Brand Logo / Clinic Identity */}
        <a className="flex items-center gap-3 group flex-shrink-0" href="#" aria-label="Aarogya Family Clinic Home">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-on-secondary shadow-xs transition-transform group-hover:scale-105 flex-shrink-0">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_hospital
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-on-surface tracking-tight leading-tight">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[11px] sm:text-xs text-secondary font-semibold uppercase tracking-wider">
              Multi-Specialty &amp; Diagnostics
            </span>
          </div>
        </a>

        {/* Desktop Nav Links - Spacious, Uncluttered, Elegant */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm" aria-label="Primary Navigation">
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-150 py-1"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-150 py-1"
            href="#doctors"
          >
            Doctors
          </a>
          <a
            className="text-secondary border-b-2 border-secondary pb-0.5 font-semibold hover:text-secondary transition-colors duration-150"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-150 py-1"
            href="#why-us"
          >
            Why Us
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-150 py-1"
            href="#faq"
          >
            FAQ
          </a>
          <a
            className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-150 py-1"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Trailing Action Buttons - Clean & Well-Spaced */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Quick Schedule Icon (Visible on wide screens) */}
          <button
            onClick={onOpenSchedule}
            className="hidden xl:flex w-9 h-9 rounded-lg border border-outline-variant/60 items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-all active:scale-95 cursor-pointer"
            title="Doctor OPD Schedule"
            aria-label="Doctor OPD Schedule"
          >
            <span className="material-symbols-outlined text-[19px]">schedule</span>
          </button>

          {/* Quick Call Desk Icon */}
          <a
            className="w-9 h-9 rounded-lg border border-outline-variant/60 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-all active:scale-95"
            href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
            title="Call Clinic Desk"
            aria-label="Call Clinic Desk"
          >
            <span className="material-symbols-outlined text-[19px]">call</span>
          </a>

          {/* Primary Action Button: Book Appointment */}
          <a
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-secondary text-on-secondary px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-on-secondary-container transition-all active:scale-95 shadow-xs whitespace-nowrap"
            href="#appointment-booking"
          >
            <span>Book Appointment</span>
            <span className="material-symbols-outlined text-[17px]">calendar_month</span>
          </a>

          {/* Mobile/Tablet Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg border border-outline-variant/60 flex items-center justify-center text-on-surface hover:text-secondary transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Clean, Organized & Accessible */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface/98 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1.5 text-sm">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#about"
            >
              About Clinic
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#doctors"
            >
              Doctors &amp; Medical Faculty
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#services"
            >
              Medical Services
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLabPackages();
              }}
              className="text-left px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">science</span>
                <span>Diagnostic Lab Packages</span>
              </div>
              <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                Rates &amp; Tests
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQueue();
              }}
              className="text-left px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">timer</span>
                <span>Live OPD Queue Board</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                Token #14
              </span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="text-left px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-secondary text-lg">schedule</span>
              <span>Doctor OPD Timetable</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrescriptionDemo();
              }}
              className="text-left px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-secondary text-lg">description</span>
              <span>Sample WhatsApp Prescription</span>
            </button>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#why-us"
            >
              Why Choose Us
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#faq"
            >
              Frequently Asked Questions
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-medium text-on-surface hover:bg-surface-container-low transition-colors"
              href="#contact"
            >
              Clinic Timings &amp; Location
            </a>
          </div>

          <div className="pt-3 border-t border-outline-variant/30 flex gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 py-2.5 text-center rounded-lg border border-outline-variant font-semibold text-xs flex items-center justify-center gap-1.5 text-on-surface hover:bg-surface-container-low transition-colors"
            >
              <span className="material-symbols-outlined text-error text-[17px]">call</span>
              <span>Call Clinic</span>
            </a>
            <a
              href={`https://wa.me/919876543211?text=Hello%20Aarogya%20Clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 text-center rounded-lg bg-secondary-fixed text-on-secondary-fixed font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-secondary-container transition-colors"
            >
              <span className="material-symbols-outlined text-[17px]">chat</span>
              <span>WhatsApp OPD</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
