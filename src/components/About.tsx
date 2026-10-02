import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { CheckCircle2, ShieldCheck, Wifi, Sparkles, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D0F14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Salon Photograph with Architectural Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 overflow-hidden rounded-sm border border-[#232834] bg-[#12151D] shadow-2xl">
              <img
                src="/src/assets/images/hair_castle_styling_craft_1790946527337.jpg"
                alt="Hair stylist at Hair Castle performing precision styling and blow-dry in Kolkata"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center filter brightness-95 hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 bg-[#12151D]/95 border-t border-[#232834]">
                <p className="text-xs font-serif italic text-[#C5A059]">
                  "Craftsmanship is in the details—every scissor cut and toner blend is calibrated to enhance your natural beauty."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#8C8880]">
                  <span>Hair Castle Artisans</span>
                  <span>Est. {SALON_DATA.metrics.establishedYear} · Salt Lake Sector 5</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative hairline accent */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full border border-[#D4AF37]/20 -z-0 hidden sm:block pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Right: Business Narrative & Differentiators */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
              <span>About Hair Castle</span>
            </div>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              A Welcoming Sanctuary for Modern Hair Craft & Family Care
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#BDBAA7] font-light leading-relaxed">
              Founded in 2018 in Salt Lake City, Hair Castle was designed with a simple conviction: premium salon services should be thoughtful, transparent, and comfortable for everyone. Located along Nayapatti Main Road near the Sector V IT hub, we cater to busy professionals, college students, and neighborhood families looking for expert hair care without pretension.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#9E9B95] font-light leading-relaxed">
              Whether you are looking for an everyday precision taper fade, a transformative balayage glow, or a restorative hair spa ritual after a demanding work week, our experienced team provides honest texture consultations and delivers results that last.
            </p>

            {/* What Makes Us Different Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#12151D] border border-[#232834]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                    Sanitized & Safe
                  </h3>
                </div>
                <p className="text-xs text-[#8C8880] leading-relaxed">
                  Single-use disposable capes, UV-sterilized scissors, and rigorous hygiene protocols after every appointment.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#12151D] border border-[#232834]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Wifi className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                    Work-Friendly Salon
                  </h3>
                </div>
                <p className="text-xs text-[#8C8880] leading-relaxed">
                  Fast guest Wi-Fi and laptop-friendly seating so Sector V IT professionals can work while their hair colour sets.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#12151D] border border-[#232834]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                    Honest Consultations
                  </h3>
                </div>
                <p className="text-xs text-[#8C8880] leading-relaxed">
                  Detailed strand & scalp evaluation with transparent price estimates before commencing any chemical service.
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#12151D] border border-[#232834]">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Coffee className="w-4 h-4 text-[#D4AF37]" />
                  <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                    Warm Hospitality
                  </h3>
                </div>
                <p className="text-xs text-[#8C8880] leading-relaxed">
                  Fully air-conditioned comfort, relaxing music, and complimentary warm tea or coffee to unwind.
                </p>
              </div>
            </div>

            {/* Location context summary */}
            <div className="mt-8 pt-6 border-t border-[#232834] flex flex-wrap items-center gap-4 text-xs text-[#A8A59E]">
              <span className="font-semibold text-white">Location:</span>
              <span>Nayapatti, Salt Lake Sector 5 (Near Shani Mandir)</span>
              <span className="text-[#3A4050]" aria-hidden="true">·</span>
              <span>Open 7 Days (10:30 AM – 8:30 PM)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
