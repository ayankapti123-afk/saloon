import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on small mobile screens to prevent clutter) */}
      <div className="fixed bottom-6 right-6 z-30 hidden sm:block">
        <a
          href={SALON_DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#1F3D28] hover:bg-[#255034] text-white p-3.5 rounded-full shadow-2xl border border-[#25D366]/40 hover:border-[#25D366] transition-all hover:scale-105"
          aria-label="Chat with Hair Castle on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold uppercase tracking-wider pr-1">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Action Bar (< 15% viewport height, ~52px tall) */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0D0F14]/98 backdrop-blur-md border-t border-[#232834] px-3 py-2 shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* 1. Call */}
          <a
            href={SALON_DATA.contact.phoneTel}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#161B25] border border-[#273042] rounded-sm text-white active:bg-[#212938] transition-colors"
            aria-label="Call Hair Castle"
          >
            <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={SALON_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#161B25] border border-[#273042] rounded-sm text-white active:bg-[#212938] transition-colors"
            aria-label="Message Hair Castle on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] mb-0.5" />
            <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* 3. Book */}
          <button
            type="button"
            onClick={onBookClick}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-[#E6CA85] via-[#D4AF37] to-[#C5A059] rounded-sm text-[#0D0F14] active:scale-95 transition-all shadow-sm"
            aria-label="Book Salon Appointment"
          >
            <Calendar className="w-4 h-4 text-[#0D0F14] mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Book</span>
          </button>
        </div>
      </nav>
    </>
  );
};
