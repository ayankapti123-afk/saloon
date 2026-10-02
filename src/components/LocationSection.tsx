import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { MapPin, Navigation, ExternalLink, Clock, Phone, Bus } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    SALON_DATA.location.fullAddress
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0D0F14] relative border-t border-[#1F2432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
            <span>Salon Location & Access</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Conveniently Situated in Salt Lake Sector 5
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9B95] font-light leading-relaxed">
            Positioned along Nayapatti Main Road with easy access from Sector V IT offices, Karunamoyee, Newtown, and Bidhannagar.
          </p>
        </div>

        {/* 2-Column Content: Details Left, Map Right */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Box */}
            <div className="p-6 bg-[#12151D] border border-[#232834] rounded-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#1A1F2B] border border-[#2F374A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Hair Castle</h3>
                  <p className="text-xs text-[#C5A059] font-medium mt-0.5 uppercase tracking-wider">
                    {SALON_DATA.legalName}
                  </p>
                  <p className="mt-2 text-sm text-[#C8C5BF] leading-relaxed">
                    {SALON_DATA.location.addressLine1},<br />
                    {SALON_DATA.location.addressLine2},<br />
                    {SALON_DATA.location.city}, {SALON_DATA.location.state} – {SALON_DATA.location.postalCode}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#1F2432] text-xs text-[#8C8880]">
                    <span className="font-semibold text-white">Landmark:</span>{' '}
                    {SALON_DATA.location.landmark}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#0D0F14] bg-[#D4AF37] hover:bg-[#E6CA85] transition-all rounded-sm shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={SALON_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#E8E6E3] hover:text-white bg-[#1A1F2B] hover:bg-[#252C3D] border border-[#2D3546] transition-all rounded-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
                  <span>Open Maps</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 bg-[#12151D] border border-[#232834] rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Salon Opening Hours
                </h3>
              </div>

              <div className="space-y-2 text-xs divide-y divide-[#1F2432]">
                {SALON_DATA.hours.schedule.map((slot) => (
                  <div key={slot.day} className="flex items-center justify-between pt-2 first:pt-0">
                    <span className="text-[#A8A59E] font-medium">{slot.day}</span>
                    <span className="text-white font-mono tabular-nums">{slot.hours}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 pt-3 border-t border-[#1F2432] text-[11px] text-[#7C7973]">
                * Open all 7 days of the week, including major public and festive holidays.
              </p>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm border border-[#232834] bg-[#12151D] shadow-2xl relative">
              {/* Responsive Iframe */}
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
                <iframe
                  title="Hair Castle Salon Location on Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Hair Castle Nayapatti Salt Lake Sector 5 Kolkata'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-85"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Info Capsule */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0D0F14]/90 backdrop-blur-md border border-[#232834] p-3 rounded-sm shadow-xl pointer-events-none">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-white">Hair Castle</p>
                      <p className="text-[11px] text-[#8C8880] truncate">Sector 5, Nayapatti, Kolkata</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Footer Note */}
              <div className="p-4 bg-[#12151D] border-t border-[#232834] flex flex-wrap items-center justify-between gap-3 text-xs text-[#8C8880]">
                <span>Near Nayapatti Shani Mandir</span>
                <a
                  href={SALON_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  View on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
