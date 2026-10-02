import React, { useState, useEffect } from 'react';
import { SALON_DATA } from '../data/salonData';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0F14]/95 backdrop-blur-md border-b border-[#232834] py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-[#0D0F14]/90 via-[#0D0F14]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex flex-col focus:outline-none"
              aria-label="Hair Castle Home"
            >
              <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                HAIR CASTLE
              </span>
              <span className="text-[10px] tracking-[0.28em] text-[#C5A059] uppercase font-sans font-medium">
                Professional Family Salon
              </span>
            </a>

            {/* Zone 2: 4-6 text navigation links */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#C8C5BF]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={SALON_DATA.contact.phoneTel}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-medium text-[#B3AFA8] hover:text-[#D4AF37] transition-colors py-2 px-2"
                aria-label={`Call Hair Castle at ${SALON_DATA.contact.phoneDisplay}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="tabular-nums">{SALON_DATA.contact.phoneDisplay}</span>
              </a>

              <a
                href={SALON_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-[#D5D2CC] bg-[#1A1F2B] hover:bg-[#252C3D] border border-[#2F374A] hover:border-[#D4AF37]/50 py-2 px-3.5 rounded-sm transition-all"
                aria-label="Message on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#0D0F14] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] hover:from-[#F0D695] hover:to-[#D4AF37] transition-all shadow-md hover:shadow-lg active:scale-95 rounded-sm cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 sm:hidden">
              <button
                type="button"
                onClick={onBookClick}
                className="px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#0D0F14] bg-[#D4AF37] rounded-sm"
              >
                Book
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#E8E6E3] hover:text-[#D4AF37] focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0D0F14]/98 backdrop-blur-lg lg:hidden flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#232834]">
              <div>
                <span className="font-display text-2xl font-bold text-white tracking-wider">
                  HAIR CASTLE
                </span>
                <p className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase">
                  Salt Lake Sector 5, Kolkata
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl text-[#E8E6E3] hover:text-[#D4AF37] py-2 border-b border-[#1A1F2B] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 space-y-4 border-t border-[#232834]">
            <div className="space-y-2 text-xs text-[#9E9B95]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>Daily: {SALON_DATA.hours.regular}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Sector 5, Nayapatti, Salt Lake City</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={SALON_DATA.contact.phoneTel}
                className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-[#1A1F2B] border border-[#2D3546] rounded-sm active:bg-[#252C3D]"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>
              <a
                href={SALON_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-[#1A1F2B] border border-[#2D3546] rounded-sm active:bg-[#252C3D]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 text-center text-xs uppercase tracking-wider font-semibold text-[#0D0F14] bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] rounded-sm shadow-md"
            >
              Request Appointment
            </button>
          </div>
        </div>
      )}
    </>
  );
};
