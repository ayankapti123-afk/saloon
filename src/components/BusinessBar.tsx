import React, { useMemo } from 'react';
import { SALON_DATA } from '../data/salonData';
import { Star, MapPin, Clock, Phone, CalendarCheck } from 'lucide-react';

interface BusinessBarProps {
  onBookClick: () => void;
}

export const BusinessBar: React.FC<BusinessBarProps> = ({ onBookClick }) => {
  // Compute open/closed status according to Indian Standard Time (IST)
  const salonStatus = useMemo(() => {
    try {
      const now = new Date();
      // IST is UTC + 5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const decimalTime = hours + minutes / 60;

      const isOpen = decimalTime >= SALON_DATA.hours.openTimeDecimal && decimalTime < SALON_DATA.hours.closeTimeDecimal;
      return {
        isOpen,
        label: isOpen ? 'Open Now' : 'Opens at 10:30 AM',
        hoursText: SALON_DATA.hours.regular,
      };
    } catch {
      return {
        isOpen: true,
        label: 'Open Daily',
        hoursText: SALON_DATA.hours.regular,
      };
    }
  }, []);

  return (
    <section id="business-info" className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#12151D] border border-[#252C3D] rounded-sm shadow-2xl p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center divide-y md:divide-y-0 lg:divide-x divide-[#232834]">
          {/* 1. Rating & Verified Reviews */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:pr-4">
            <div className="w-10 h-10 rounded-sm bg-[#1A1F2B] border border-[#2F374A] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg font-bold text-white tabular-nums">
                  {SALON_DATA.metrics.rating}
                </span>
                <span className="text-xs text-[#D4AF37]">★ ★ ★ ★ ★</span>
              </div>
              <p className="text-xs text-[#9E9B95]">{SALON_DATA.metrics.reviewCountText}</p>
            </div>
          </div>

          {/* 2. Location */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:px-4">
            <div className="w-10 h-10 rounded-sm bg-[#1A1F2B] border border-[#2F374A] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">Sector 5, Salt Lake</p>
              <p className="text-xs text-[#9E9B95] truncate">Nayapatti, Kolkata 700102</p>
            </div>
          </div>

          {/* 3. Opening Hours & Live Status */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:px-4">
            <div className="w-10 h-10 rounded-sm bg-[#1A1F2B] border border-[#2F374A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    salonStatus.isOpen ? 'bg-[#25D366] animate-pulse' : 'bg-[#E5A93C]'
                  }`}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-white">{salonStatus.label}</span>
              </div>
              <p className="text-xs text-[#9E9B95] tabular-nums">{salonStatus.hoursText}</p>
            </div>
          </div>

          {/* 4. Contact Phone */}
          <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:px-4">
            <div className="w-10 h-10 rounded-sm bg-[#1A1F2B] border border-[#2F374A] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-[#9E9B95]">Direct Line</p>
              <a
                href={SALON_DATA.contact.phoneTel}
                className="text-xs font-semibold text-white hover:text-[#D4AF37] transition-colors tabular-nums"
              >
                {SALON_DATA.contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* 5. Appointment Action */}
          <div className="pt-4 md:pt-0 lg:pl-4 flex items-center">
            <button
              type="button"
              onClick={onBookClick}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wider uppercase text-[#0D0F14] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F0D695] hover:to-[#D4AF37] transition-all rounded-sm shadow-md active:scale-95 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
