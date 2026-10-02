import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#11141C] relative border-t border-[#1F2432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
              <span>Client Endorsements</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Honest Feedback from Verified Patrons
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#9E9B95] font-light leading-relaxed">
              Real reflections from neighborhood residents, IT professionals from Sector V, and families who trust Hair Castle for their hair care and grooming.
            </p>
          </div>

          {/* Social Proof Summary Card */}
          <div className="bg-[#0D0F14] border border-[#232834] p-5 rounded-sm flex items-center gap-4 shrink-0 shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-3xl font-bold text-white tabular-nums">
                  {SALON_DATA.metrics.rating}
                </span>
                <div className="flex text-[#D4AF37] text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-[#8C8880] mt-0.5">
                Over <strong className="text-white">{SALON_DATA.metrics.reviewCountText}</strong> on Google & Justdial
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SALON_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 bg-[#0E1117] border border-[#232834] rounded-sm relative flex flex-col justify-between shadow-lg hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div>
                {/* Header: Stars & Source */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex text-[#D4AF37] text-sm">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8C8880]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{rev.verifiedSource}</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#D5D2CC] font-light leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="mt-6 pt-4 border-t border-[#1F2432] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white">{rev.author}</h4>
                  <p className="text-[#8C8880] text-[11px]">{rev.serviceCategory}</p>
                </div>
                <span className="text-[#7C7973]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read All Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={SALON_DATA.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#E8E6E3] hover:text-white bg-[#141821] hover:bg-[#1E2533] border border-[#2D3546] hover:border-[#D4AF37]/50 transition-all rounded-sm shadow-md active:scale-95"
          >
            <span>Read All 1,300+ Reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#D4AF37]" />
          </a>
          <p className="mt-3 text-xs text-[#7C7973]">
            Verified publicly available customer ratings and feedback.
          </p>
        </div>
      </div>
    </section>
  );
};
