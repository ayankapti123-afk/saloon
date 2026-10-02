import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onBookClick }) => {
  return (
    <footer id="contact" className="bg-[#090B0F] border-t border-[#1C212D] text-[#8C8880] text-xs pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1A1F2B]">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                HAIR CASTLE
              </span>
              <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-sans">
                Professional Family Salon
              </p>
            </div>

            <p className="text-xs text-[#9E9B95] leading-relaxed">
              Serving Salt Lake City and the Sector V community since 2018. Dedicated to refined haircutting, dimensional hair colouring, restorative botanical hair spa rituals, and full-service family grooming.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F14] bg-[#D4AF37] hover:bg-[#E6CA85] transition-colors rounded-sm cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About the Salon
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  Hair Portfolio
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4AF37] transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-[#D4AF37] transition-colors">
                  Request Slot
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Popular Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Designer Haircuts (Women & Men)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Balayage & Ammonia-Free Highlights
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Keratin Smoothing & Frizz Control
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Deep Scalp & Hair Spa Rituals
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Beard Sculpting & Charcoal D-Tan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Spa Pedicure & Manicure Care
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#9E9B95]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Sector 5, Nayapatti Main Road, AN Block, Salt Lake City, Kolkata 700102
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a
                  href={SALON_DATA.contact.phoneTel}
                  className="hover:text-[#D4AF37] tabular-nums"
                >
                  {SALON_DATA.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={SALON_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366]"
                >
                  WhatsApp: +91 73033 90416
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="tabular-nums">Daily: {SALON_DATA.hours.regular}</span>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_DATA.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
                >
                  <span>Google Maps Listing</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6B65]">
          <p>© {new Date().getFullYear()} Hair Castle. All rights reserved. Salt Lake City, Kolkata.</p>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Salon Etiquette & Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
