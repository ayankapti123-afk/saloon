/**
 * Hair Castle - Professional Family Salon Web Application
 * Salt Lake Sector 5, Kolkata, India
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessBar } from './components/BusinessBar';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { PolicyModal } from './components/PolicyModal';
import { ServiceItem } from './data/salonData';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [policyModalType, setPolicyModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('book');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#0D0F14] text-[#E8E6E3] font-sans selection:bg-[#D4AF37]/30 selection:text-white flex flex-col">
      {/* Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onServicesClick={scrollToServices}
        />

        {/* Business Information & Live Open Status Bar */}
        <BusinessBar onBookClick={scrollToBooking} />

        {/* About Section */}
        <About />

        {/* Service Catalogue Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Portfolio & Lightbox Gallery */}
        <GallerySection />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Location & Embedded Google Map */}
        <LocationSection />

        {/* Interactive Booking Request System */}
        <BookingSection
          selectedService={selectedService}
          onClearSelectedService={() => setSelectedService(null)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyModalType(type)}
        onBookClick={scrollToBooking}
      />

      {/* Floating Actions & Mobile Bottom Action Bar */}
      <FloatingActions onBookClick={scrollToBooking} />

      {/* Policy & Terms Modal */}
      <PolicyModal
        type={policyModalType}
        onClose={() => setPolicyModalType(null)}
      />
    </div>
  );
}
