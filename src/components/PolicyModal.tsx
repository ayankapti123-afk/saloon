import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#07080B]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#12151D] border border-[#232834] rounded-sm max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-[#232834] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#D4AF37]" />
            ) : (
              <FileText className="w-5 h-5 text-[#D4AF37]" />
            )}
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              {type === 'privacy' ? 'Privacy Policy' : 'Salon Etiquette & Terms'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#9E9B95] hover:text-white rounded-sm hover:bg-[#1C2230] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#BDBAA7] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong className="text-white">Hair Castle</strong>, we value the trust you place in us when sharing your contact details for appointment coordination.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                Information Collected
              </h4>
              <p>
                When you request an appointment through our website or WhatsApp link, we collect your name, phone number, and optional email address solely to verify your booking, communicate timing updates, and ensure customer service quality.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                No Marketing Spam
              </h4>
              <p>
                We do not sell, rent, or share personal contact data with third-party advertising brokers or spam list operators.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                Contact & Inquiries
              </h4>
              <p>
                For questions regarding data privacy or to update your salon records, please call{' '}
                <span className="text-[#D4AF37] font-medium">{SALON_DATA.contact.phoneDisplay}</span> or reach us at our salon address in Sector 5, Salt Lake City, Kolkata.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong className="text-white">Hair Castle – A Professional Family Salon</strong>. To guarantee a relaxing and timely experience for every patron, please review our salon guidelines:
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                Arrival & Punctuality
              </h4>
              <p>
                We kindly recommend arriving 5–10 minutes prior to your scheduled slot. If you are delayed by more than 15 minutes during peak hours, we may need to adjust your service scope or reschedule to avoid delaying subsequent clients.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                Chemical Treatments & Consultations
              </h4>
              <p>
                All intensive services (balayage, global colour, keratin smoothing) begin with an upfront consultation. Please disclose any previous henna, box dye, or scalp sensitivities to ensure safe, predictable results.
              </p>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white pt-2">
                Hygiene & Respect
              </h4>
              <p>
                Our salon stations, capes, and tools are meticulously sanitized between clients. We maintain a respectful, family-friendly sanctuary for both our guests and staff.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0E1117] border-t border-[#232834] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F14] bg-[#D4AF37] hover:bg-[#E6CA85] rounded-sm transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
