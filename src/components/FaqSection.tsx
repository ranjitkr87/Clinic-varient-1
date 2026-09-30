import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30" id="faq">
      <div className="max-w-4xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
            Common Queries
          </div>
          <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-2">
            Clear answers regarding consultations, diagnostics, payment modes, and clinic policies.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-surface-container-lowest border rounded-xl p-5 transition-all ${
                  isOpen ? 'border-secondary shadow-sm' : 'border-outline-variant/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center cursor-pointer font-bold text-on-surface text-title-md text-left select-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-outline transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-secondary' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/30 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
