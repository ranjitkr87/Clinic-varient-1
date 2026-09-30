import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types/clinic';

interface DoctorsSectionProps {
  onSelectDoctorForBooking: (doctor: Doctor) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface-container-low border-b border-outline-variant/30" id="doctors">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/30 text-on-secondary-container text-label-md font-semibold mb-3">
              Medical Faculty
            </div>
            <h2 className="text-headline-lg font-bold text-on-surface tracking-tight">
              Meet Our Medical Specialists
            </h2>
            <p className="text-body-lg text-on-surface-variant mt-2 max-w-xl">
              Experienced, compassionate physicians with established hospital affiliations and deep roots in
              community healthcare.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-label-md font-semibold text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              All Practitioners Verified by Karnataka Medical Council
            </span>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-surface-container-lowest rounded-xl border border-outline-variant/50 p-6 lg:p-8 flex flex-col justify-between shadow-sm hover:border-secondary/60 transition-all"
            >
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-28 h-28 rounded-xl overflow-hidden bg-surface-container flex-shrink-0 border border-outline-variant/40">
                    <img
                      className="w-full h-full object-cover"
                      alt={doctor.altText}
                      src={doctor.image}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container text-label-sm font-bold">
                      {doctor.almaMater}
                    </div>
                    <h3 className="text-title-lg font-bold text-on-surface">{doctor.name}</h3>
                    <p className="text-body-sm font-semibold text-secondary">{doctor.degree}</p>
                    <p className="text-label-md text-on-surface-variant font-medium">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-surface-container-low text-body-sm">
                  <div>
                    <span className="text-label-sm text-outline block">Languages Spoken</span>
                    <span className="font-medium text-on-surface">{doctor.languages.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-label-sm text-outline block">OPD Schedule</span>
                    <span className="font-medium text-on-surface">{doctor.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                  <span className="text-label-sm text-outline block">Consultation Fee</span>
                  <span className="text-title-md font-bold text-on-surface">
                    ₹{doctor.fee} <span className="text-body-sm font-normal text-outline">/ visit</span>
                  </span>
                </div>
                <a
                  className="px-5 py-2.5 rounded-lg bg-secondary text-on-secondary text-label-md font-semibold hover:bg-on-secondary-container transition-all active:scale-95 shadow-sm inline-block"
                  href="#appointment-booking"
                  onClick={() => onSelectDoctorForBooking(doctor)}
                >
                  Book with {doctor.name.split(' ')[0]} {doctor.name.split(' ')[1]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
