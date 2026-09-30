import React from 'react';
import { SERVICES } from '../data/clinicData';
import { Service } from '../types/clinic';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: Service) => void;
  onOpenLabPackages: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenLabPackages,
}) => {
  return (
    <section className="py-16 lg:py-24 bg-surface border-b border-outline-variant/30" id="services">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
              Specialised Care
            </div>
            <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
              Our Medical Services
            </h2>
            <p className="text-body-lg text-on-surface-variant mt-3">
              Comprehensive clinical care tailored for every stage of your family&apos;s life, from acute
              consultations to proactive chronic disease prevention.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenLabPackages}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-secondary text-secondary font-semibold hover:bg-secondary/5 transition-all text-sm cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">science</span>
              <span>View Lab Packages &amp; Tests</span>
            </button>
          </div>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 hover:border-secondary transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <span className="text-label-sm uppercase tracking-wider text-secondary font-bold">
                  {service.category}
                </span>
                <h3 className="text-title-lg font-bold text-on-surface mt-1 mb-2">
                  {service.title}
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Key Clinical Features */}
                <ul className="space-y-1.5 pt-2 border-t border-outline-variant/20 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[16px] flex-shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="text-label-sm text-outline">{service.assignedDoctors}</span>
                {service.id === 'diagnostics-lab' ? (
                  <button
                    onClick={onOpenLabPackages}
                    className="text-label-md text-secondary font-bold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Check Test Rates</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                ) : (
                  <a
                    className="text-label-md text-secondary font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    href="#appointment-booking"
                    onClick={() => onSelectServiceForBooking(service)}
                  >
                    <span>Consult for This</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
