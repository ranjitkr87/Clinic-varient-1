import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
              Real Experiences
            </div>
            <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
              What Our Patients Say
            </h2>
          </div>
          <p className="text-body-md text-on-surface-variant mt-2 md:mt-0">
            Over 3,200 verified five-star consultations across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <p className="text-body-md font-bold text-on-surface">{review.name}</p>
                  <p className="text-label-sm text-outline">{review.location}</p>
                </div>
                <span className="px-2 py-0.5 rounded text-label-sm bg-secondary/10 text-secondary font-semibold">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
