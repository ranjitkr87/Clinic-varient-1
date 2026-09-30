import React, { useState } from 'react';
import { LAB_PACKAGES, CLINIC_INFO } from '../data/clinicData';
import { LabPackage } from '../types/clinic';

interface LabPackagesModalProps {
  onClose: () => void;
  onBookLabTest: (pkg: LabPackage, isHomeCollection: boolean) => void;
}

export const LabPackagesModal: React.FC<LabPackagesModalProps> = ({ onClose, onBookLabTest }) => {
  const [selectedPackage, setSelectedPackage] = useState<LabPackage>(LAB_PACKAGES[1]); // Diabetic health package default
  const [isHomeCollection, setIsHomeCollection] = useState(false);
  const [patientPhone, setPatientPhone] = useState('');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientPhone.trim()) return;

    setBookedSuccess(true);
    setTimeout(() => {
      onBookLabTest(selectedPackage, isHomeCollection);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          aria-label="Close Diagnostic Lab Selector"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-2xl">science</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 text-label-sm uppercase tracking-wider text-secondary font-bold">
              <span>NABL Quality Partnered</span>
              <span>•</span>
              <span>Same-Day WhatsApp Reports</span>
            </div>
            <h2 className="text-headline-sm font-bold text-on-surface">
              Diagnostic Lab &amp; Health Panels
            </h2>
          </div>
        </div>

        {/* Home vs In-Clinic Collection Switch */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40 mb-6">
          <div>
            <span className="text-sm font-bold text-on-surface block">
              Sample Collection Mode
            </span>
            <span className="text-xs text-on-surface-variant">
              {isHomeCollection
                ? 'Phlebotomist visits your home in Indiranagar / Koramangala'
                : 'Walk into clinic early from 7:30 AM for fastest processing'}
            </span>
          </div>
          <div className="flex bg-surface-container rounded-lg p-1 border border-outline-variant/30">
            <button
              type="button"
              onClick={() => setIsHomeCollection(false)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                !isHomeCollection
                  ? 'bg-secondary text-on-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              In-Clinic
            </button>
            <button
              type="button"
              onClick={() => setIsHomeCollection(true)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                isHomeCollection
                  ? 'bg-secondary text-on-secondary shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Home Visit (+₹100)
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {LAB_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-secondary bg-secondary/5 shadow-sm'
                    : 'border-outline-variant/60 bg-surface-container-lowest hover:border-secondary/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-surface-container text-secondary">
                      {pkg.category}
                    </span>
                    {pkg.popular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-secondary text-on-secondary">
                        Most Booked
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-on-surface">{pkg.name}</h3>
                  <span className="text-xs text-outline block mt-0.5">
                    Includes {pkg.testsCount} Essential Parameters
                  </span>

                  <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-2.5">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-outline">timer</span>
                      {pkg.tatHours}h Reports
                    </span>
                    {pkg.fastingRequired && (
                      <span className="text-amber-600 font-medium">10h Fasting Req.</span>
                    )}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-outline-variant/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs line-through text-outline mr-1.5">
                      ₹{pkg.originalPrice}
                    </span>
                    <span className="text-base font-extrabold text-secondary">
                      ₹{pkg.price}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold ${
                      isSelected ? 'text-secondary' : 'text-outline'
                    }`}
                  >
                    {isSelected ? '✓ Selected' : 'Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Package Test Breakdown */}
        <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/40 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
            Tests Included in {selectedPackage.name}:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {selectedPackage.testsList.map((test, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-on-surface">
                <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                <span>{test}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking Form */}
        {bookedSuccess ? (
          <div className="p-4 rounded-xl bg-secondary-container/40 border border-secondary/30 text-center space-y-1">
            <span className="material-symbols-outlined text-secondary text-2xl">check_circle</span>
            <p className="text-sm font-bold text-on-secondary-container">
              Lab Request Received!
            </p>
            <p className="text-xs text-on-secondary-container/80">
              Our lab coordinator is preparing your slot and will WhatsApp sample collection instructions to {patientPhone}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                required
                placeholder="Enter WhatsApp Phone (+91 98765 00000)"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="flex-1 h-12 px-4 rounded-lg border border-outline-variant bg-surface-container-lowest text-sm outline-none focus:border-secondary"
              />
              <button
                type="submit"
                className="px-6 h-12 rounded-lg bg-secondary text-on-secondary font-bold text-sm hover:bg-on-secondary-container transition-all active:scale-95 shadow-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span>Book Diagnostic Test</span>
                <span className="text-xs opacity-90">
                  (₹{selectedPackage.price + (isHomeCollection ? 100 : 0)})
                </span>
              </button>
            </div>
            <p className="text-xs text-center text-outline">
              Pay post collection • Free WhatsApp delivery of verified PDF report with doctor sign.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
