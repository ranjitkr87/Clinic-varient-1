import React from 'react';

interface WhyUsSectionProps {
  onOpenPrescriptionDemo: () => void;
  onOpenQueue: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({
  onOpenPrescriptionDemo,
  onOpenQueue,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30" id="why-us">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
            The Aarogya Difference
          </div>
          <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
            Why Families Rely on Us
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-2">
            Designed with intention so you never dread taking yourself or your loved ones to a doctor&apos;s
            clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">person_check</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1">
                Experienced &amp; Approachable Doctors
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Every doctor listens carefully to your symptom history without rushing you out the door within
                5 minutes.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            onClick={onOpenQueue}
            className="flex gap-4 items-start p-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
            title="Check live waiting time"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">hourglass_empty</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1 flex items-center gap-2">
                <span>Zero Wait-Time Prioritized Slots</span>
                <span className="text-xs text-secondary font-semibold">Live Queue ↗</span>
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Smart tokenized scheduling guarantees you spend less time in a waiting area exposed to other
                illnesses.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">receipt_long</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1">
                Transparent Consultation &amp; Lab Fees
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Clearly displayed pricing on our front desk and website. No sudden ancillary charges or
                inflated medicine packs.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div
            onClick={onOpenPrescriptionDemo}
            className="flex gap-4 items-start p-2 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
            title="Preview digital prescription format"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">mark_chat_unread</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1 flex items-center gap-2">
                <span>Instant WhatsApp Prescriptions</span>
                <span className="text-xs text-secondary font-semibold">Sample ↗</span>
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Clear, digitally typed prescriptions with dosage explanations sent directly to your phone. Never
                struggle to decipher doctor handwriting again.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">clean_hands</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1">
                Hygienic &amp; Family-Friendly Clinic
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Spacious, calm, and sanitized after every single OPD slot. Separate baby care changing space
                and elderly seating.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0 mt-1">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
            </div>
            <div>
              <h3 className="text-title-md font-bold text-on-surface mb-1">
                Dedicated 7-Day Follow-Up Support
              </h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Need a quick dosage clarification? Connect directly with our clinic desk within 7 days at zero
                additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
