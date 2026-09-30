import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingEmergencyBarProps {
  onOpenLiveQueue: () => void;
}

export const FloatingEmergencyBar: React.FC<FloatingEmergencyBarProps> = ({ onOpenLiveQueue }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5 print:hidden">
      {/* Live Queue Floating Pill */}
      <button
        onClick={onOpenLiveQueue}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-lowest text-secondary border border-secondary/30 shadow-lg hover:shadow-xl hover:bg-surface-container-low transition-all text-xs font-bold cursor-pointer"
        title="Check Current OPD Token Status"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        <span>Queue: #14 Active</span>
      </button>

      {/* WhatsApp Quick Chat Floating Pill */}
      <a
        href={`https://wa.me/919876543211?text=Hello%20Aarogya%20Clinic,%20I%20would%20like%20to%20consult%20a%20doctor.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20ba5a] transition-all text-xs font-bold active:scale-95"
        title="Chat on WhatsApp with Reception"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span className="hidden sm:inline">WhatsApp OPD</span>
      </a>
    </div>
  );
};
