import React, { useState } from 'react';
import { SALON_DATA, ServiceItem } from '../data/salonData';
import { Clock, Calendar, Check, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircuts', label: 'Haircuts & Styling' },
    { id: 'colour', label: 'Hair Colour' },
    { id: 'treatments', label: 'Hair Spa & Treatments' },
    { id: 'grooming', label: 'Men’s Grooming' },
    { id: 'beauty', label: 'Beauty & Skin' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SALON_DATA.services
      : SALON_DATA.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#11141C] relative border-t border-[#1F2432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
            <span>Service Catalogue</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Curated Services for Every Hair Type & Occasion
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9B95] font-light leading-relaxed">
            From precision maintenance haircuts to intense restorative keratin treatments and dimensional balayage. All chemical services include a complimentary texture analysis.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#0D0F14] border border-[#232834] rounded-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1E2433] text-white shadow-sm border border-[#D4AF37]/40'
                      : 'text-[#9E9B95] hover:text-white hover:bg-[#151922]'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-6 bg-[#0E1117] hover:bg-[#131720] border border-[#232834] hover:border-[#D4AF37]/40 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl relative"
            >
              <div>
                {/* Clean unboxed category kicker & duration */}
                <div className="flex items-center justify-between gap-2 text-xs text-[#8C8880] mb-2.5">
                  <span className="uppercase tracking-wider text-[11px] text-[#C5A059]">
                    {service.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 tabular-nums">
                    <Clock className="w-3 h-3 text-[#9E9B95]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  {service.isPopular && (
                    <span className="shrink-0 text-[10px] uppercase font-semibold text-[#D4AF37] tracking-wider border-b border-[#D4AF37]/50 pb-0.5">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-[#9E9B95] font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price & Action Module */}
              <div className="mt-6 pt-4 border-t border-[#1F2432] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#7C7973] uppercase tracking-wider block">
                    Starting from
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums tracking-tight">
                    {service.priceStartingAt}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F14] bg-[#D4AF37] hover:bg-[#E6CA85] transition-all rounded-sm shadow-sm active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Transparency & Consultation Callout */}
        <div className="mt-12 p-5 bg-[#0D0F14] border border-[#232834] rounded-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0 hidden sm:block" />
            <p className="text-xs text-[#9E9B95] leading-relaxed">
              <strong className="text-white font-medium">Transparent Pricing Policy:</strong> Final prices for hair colouring and keratin treatments may vary slightly based on hair length, density, and tailored formulation. Every service starts with an upfront consultation.
            </p>
          </div>
          <a
            href={SALON_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-semibold text-[#D4AF37] hover:underline"
          >
            Ask for Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
};
