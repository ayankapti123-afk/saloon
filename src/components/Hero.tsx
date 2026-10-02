import React from 'react';
import { SALON_DATA, heroImg } from '../data/salonData';
import { Calendar, Sparkles, Phone, MessageCircle, Navigation, ArrowDown } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0D0F14]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Hair Castle luxury salon interior in Salt Lake Kolkata"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-90 transition-transform duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Scrim: Dark gradient providing WCAG AA contrast (≥ 4.5:1) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/75 to-[#0D0F14]/40" />
        <div className="absolute inset-0 bg-[#0D0F14]/30 backdrop-brightness-95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Quiet Editorial Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37] border-b border-[#D4AF37]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Salt Lake City · Sector 5 · Kolkata</span>
        </div>

        {/* Primary Headline with Text-Wrap Balance */}
        <h1
          className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.08] max-w-4xl"
          style={{ textWrap: 'balance' }}
        >
          Where Precision Styling Meets Timeless Luxury
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#C8C5BF] max-w-2xl font-light leading-relaxed">
          Kolkata’s premier professional family salon. Personalized haircuts, radiant balayage, intensive keratin rituals, and refined grooming crafted for your everyday elegance.
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#0D0F14] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F0D695] hover:to-[#D4AF37] shadow-lg hover:shadow-xl active:scale-95 transition-all rounded-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </button>

          <button
            type="button"
            onClick={onServicesClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#E8E6E3] hover:text-white bg-[#141821]/80 hover:bg-[#1E2533] border border-[#2D3546] hover:border-[#D4AF37]/50 transition-all rounded-sm cursor-pointer"
          >
            <span>View Services Catalogue</span>
          </button>
        </div>

        {/* Quick Contact & Action Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#A8A59E]">
          <a
            href={SALON_DATA.contact.phoneTel}
            className="inline-flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="tabular-nums font-medium">{SALON_DATA.contact.phoneDisplay}</span>
          </a>

          <span className="text-[#3A4050]" aria-hidden="true">·</span>

          <a
            href={SALON_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Instant WhatsApp Enquiry</span>
          </a>

          <span className="text-[#3A4050]" aria-hidden="true">·</span>

          <a
            href={SALON_DATA.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Directions on Google Maps</span>
          </a>
        </div>

        {/* Subtle Scroll Down Affordance */}
        <a
          href="#business-info"
          className="mt-12 sm:mt-16 inline-flex flex-col items-center gap-1.5 text-xs text-[#8A8780] hover:text-[#D4AF37] transition-colors animate-bounce"
          aria-label="Scroll down to business information"
        >
          <span className="tracking-widest uppercase text-[10px]">Discover</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
