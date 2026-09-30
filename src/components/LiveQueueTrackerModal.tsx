import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface LiveQueueTrackerModalProps {
  onClose: () => void;
  onBookSlot: () => void;
}

export const LiveQueueTrackerModal: React.FC<LiveQueueTrackerModalProps> = ({ onClose, onBookSlot }) => {
  const [searchToken, setSearchToken] = useState('');
  const [searchedStatus, setSearchedStatus] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const tokenNum = parseInt(searchToken.replace(/[^0-9]/g, ''), 10);
    if (!tokenNum) return;

    if (tokenNum === 14) {
      setSearchedStatus('Token #14 is currently inside Consultation Room 1 with Dr. Ananya Sharma.');
    } else if (tokenNum < 14) {
      setSearchedStatus(`Token #${tokenNum} has already completed consultation.`);
    } else {
      const ahead = tokenNum - 14;
      const waitTime = ahead * 10;
      setSearchedStatus(
        `Token #${tokenNum} is scheduled. There are ${ahead} patient(s) ahead. Estimated wait: ~${waitTime} minutes.`
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-outline-variant/60 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
          aria-label="Close Live Queue Tracker"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">timer</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
                Live Clinic Telemetry
              </span>
            </div>
            <h2 className="text-headline-sm font-bold text-on-surface">OPD Live Queue Board</h2>
          </div>
        </div>

        {/* Current Serving Card */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-primary-container to-slate-900 text-surface mb-5 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs uppercase tracking-wider text-secondary-fixed font-semibold">
              Currently in Consultation
            </span>
            <span className="text-xs text-slate-300">Room 1 • General Medicine</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <span className="text-xs text-slate-400 block">Active Token</span>
              <span className="text-4xl font-extrabold text-secondary-fixed">Token #14</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Consulting Doctor</span>
              <span className="text-base font-semibold text-surface">Dr. Ananya Sharma</span>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-secondary-fixed text-[16px]">schedule</span>
              Elapsed: ~9 mins
            </span>
            <span>Avg Wait Time: &lt; 12 mins</span>
          </div>
        </div>

        {/* Upcoming Tokens Pipeline */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-outline block mb-2">
            Next In Line (Waiting Lounge)
          </span>
          <div className="grid grid-cols-4 gap-2">
            {[15, 16, 17, 18].map((token, i) => (
              <div
                key={token}
                className={`p-2.5 rounded-lg border text-center ${
                  i === 0
                    ? 'border-secondary bg-secondary/5 text-secondary font-bold'
                    : 'border-outline-variant/60 bg-surface-container-low text-on-surface-variant'
                }`}
              >
                <span className="text-xs block text-outline">#{token}</span>
                <span className="text-xs font-semibold">{i === 0 ? 'Next' : `+${(i + 1) * 8}m`}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Check Your Token Status Form */}
        <form onSubmit={handleSearch} className="mb-6 p-4 rounded-xl bg-surface-container-low border border-outline-variant/40">
          <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">
            Check Your Assigned Token Number
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. 19"
              value={searchToken}
              onChange={(e) => setSearchToken(e.target.value)}
              className="flex-1 h-10 px-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-sm outline-none focus:border-secondary"
            />
            <button
              type="submit"
              className="px-4 h-10 bg-secondary text-on-secondary rounded-lg text-xs font-semibold hover:bg-on-secondary-container transition-colors cursor-pointer"
            >
              Check Status
            </button>
          </div>

          {searchedStatus && (
            <div className="mt-3 p-2.5 rounded bg-surface-container-lowest text-xs text-on-surface border border-secondary/30">
              <span className="font-semibold text-secondary">Status:</span> {searchedStatus}
            </div>
          )}
        </form>

        {/* Footer actions */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-outline-variant/30 text-xs">
          <span className="text-outline">
            Need emergency triage?
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onBookSlot();
              }}
              className="px-3.5 py-2 rounded-lg bg-secondary text-on-secondary font-semibold hover:bg-on-secondary-container cursor-pointer"
            >
              Book Priority Slot
            </button>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="px-3.5 py-2 rounded-lg border border-outline-variant text-on-surface font-semibold hover:bg-surface-container cursor-pointer"
            >
              Call Front Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
