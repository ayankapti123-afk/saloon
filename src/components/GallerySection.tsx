import React, { useState, useEffect, useCallback } from 'react';
import { SALON_DATA, GalleryItem } from '../data/salonData';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'haircut', label: 'Haircuts & Styling' },
    { id: 'colour', label: 'Hair Colour' },
    { id: 'spa', label: 'Salon & Spa' },
    { id: 'grooming', label: 'Men’s Grooming' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? SALON_DATA.gallery
      : SALON_DATA.gallery.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    },
    [selectedImageIndex, filteredItems.length]
  );

  useEffect(() => {
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImageIndex, handleKeyDown]);

  const activeItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0D0F14] relative border-t border-[#1F2432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-[#D4AF37]">
            <span>Hair Craft Portfolio</span>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Moments of Precision & Transformation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9B95] font-light leading-relaxed">
            Browse our salon ambience, signature haircut finishes, dimensional balayage creations, and restorative spa rituals.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#12151D] border border-[#232834] rounded-sm">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setActiveFilter(opt.id);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-sm transition-all cursor-pointer ${
                  activeFilter === opt.id
                    ? 'bg-[#1E2433] text-white shadow-sm border border-[#D4AF37]/40'
                    : 'text-[#9E9B95] hover:text-white hover:bg-[#161B25]'
                }`}
                aria-pressed={activeFilter === opt.id}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative overflow-hidden rounded-sm bg-[#12151D] border border-[#232834] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImageIndex(index);
                }
              }}
              aria-label={`View photo of ${item.title}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#181C26] relative">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Styled Fallback Container if image asset fails to load
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-container')) {
                      const fallback = document.createElement('div');
                      fallback.className =
                        'fallback-container absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#151922] text-[#A8A59E]';
                      fallback.innerHTML = `
                        <svg class="w-8 h-8 text-[#D4AF37] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        <p class="text-xs font-semibold text-white">${item.title}</p>
                        <p class="text-[11px] text-[#7C7973] mt-1">${item.categoryName}</p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-3 right-3 p-1.5 rounded-sm bg-[#0D0F14]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-4 bg-[#12151D] border-t border-[#1F2432]">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-medium">
                    {item.categoryName}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-[#8C8880] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#07080B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-sm bg-[#161B25] hover:bg-[#202735] text-white hover:text-[#D4AF37] border border-[#2D3546] transition-all z-20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={() =>
                setSelectedImageIndex(
                  (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
                )
              }
              className="absolute left-3 sm:left-6 p-3 rounded-sm bg-[#161B25]/80 hover:bg-[#202735] text-white hover:text-[#D4AF37] border border-[#2D3546] transition-all z-20 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() =>
                setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length)
              }
              className="absolute right-3 sm:right-6 p-3 rounded-sm bg-[#161B25]/80 hover:bg-[#202735] text-white hover:text-[#D4AF37] border border-[#2D3546] transition-all z-20 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-[#232834] bg-black shadow-2xl">
                <img
                  src={activeItem.imageSrc}
                  alt={activeItem.alt}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Lightbox Information Bar */}
              <div className="mt-4 text-center max-w-xl">
                <div className="flex items-center justify-center gap-2 text-xs text-[#C5A059] uppercase tracking-wider mb-1">
                  <span>{activeItem.categoryName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">
                    {selectedImageIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  {activeItem.title}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-[#A8A59E]">
                  {activeItem.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
