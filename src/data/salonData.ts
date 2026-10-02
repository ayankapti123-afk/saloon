/**
 * Hair Castle Salon - Central Business Configuration & Data
 * All business details, contact points, services, and reviews are kept here
 * so they can be easily edited or verified without touching UI code.
 */

import heroImg from '../assets/images/hair_castle_hero_salon_1790946512263.jpg';
import stylingCraftImg from '../assets/images/hair_castle_styling_craft_1790946527337.jpg';
import balayageColorImg from '../assets/images/hair_castle_balayage_color_1790946540634.jpg';
import hairSpaImg from '../assets/images/hair_castle_hair_spa_treatment_1790946553936.jpg';
import mensGroomingImg from '../assets/images/hair_castle_mens_grooming_1790946566249.jpg';

export { heroImg, stylingCraftImg, balayageColorImg, hairSpaImg, mensGroomingImg };

export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircuts' | 'colour' | 'treatments' | 'grooming' | 'beauty';
  categoryLabel: string;
  description: string;
  duration: string;
  priceStartingAt: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  serviceCategory: string;
  text: string;
  verifiedSource: 'Google Maps' | 'Justdial' | 'Nearbuy';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'haircut' | 'colour' | 'spa' | 'grooming';
  categoryName: string;
  imageSrc: string;
  aspectRatio: '16/9' | '4/3' | '3/4' | '1/1';
  alt: string;
  caption: string;
}

export const SALON_DATA = {
  name: 'Hair Castle',
  legalName: 'Hair Castle – A Professional Family Salon',
  tagline: 'Artisanal Hair Craft, Luxury Spa & Grooming in Salt Lake, Kolkata',
  description:
    'Established in 2018 in Salt Lake Sector 5, Hair Castle is a distinguished professional family salon offering customized precision haircuts, transformative hair coloring & balayage, intensive keratin rituals, and complete grooming care in a contemporary, relaxing sanctuary.',
  
  contact: {
    phoneDisplay: '+91 73033 90416',
    phoneTel: 'tel:+917303390416',
    altPhoneDisplay: '+91 90882 51578',
    altPhoneTel: 'tel:+919088251578',
    whatsappNumber: '917303390416',
    whatsappDefaultMessage: 'Hi Hair Castle, I would like to enquire about booking an appointment.',
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappDefaultMessage)}`;
    },
    email: 'info@haircastlekolkata.com', // Editable fallback
  },

  location: {
    addressLine1: 'Sector 5, Nayapatti Main Road, AN Block',
    addressLine2: 'Nayapatty, Salt Lake City, Bidhannagar',
    city: 'Kolkata',
    state: 'West Bengal',
    postalCode: '700102',
    country: 'India',
    landmark: 'Near Nayapatti Shani Mandir, Sector V IT Hub',
    fullAddress: 'Sector 5, Nayapatti Main Road, AN Block, Nayapatty, Salt Lake City, Bidhannagar, Kolkata, West Bengal 700102',
    googleMapsUrl: 'https://maps.app.goo.gl/FaFcauBvjKDk9o7u8',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8966023307613!2d88.4312!3d22.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzA0LjkiTiA4OMKwMjUnNTIuMyJF!5e0!3m2!1sen!2sin!4v1680000000000',
    coordinates: {
      lat: 22.5847,
      lng: 88.4312,
    },
  },

  hours: {
    regular: '10:30 AM – 8:30 PM',
    daysText: 'Open 7 Days a Week (Mon – Sun)',
    openTimeDecimal: 10.5, // 10:30 AM
    closeTimeDecimal: 20.5, // 8:30 PM
    schedule: [
      { day: 'Monday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Tuesday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Wednesday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Thursday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Friday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Saturday', hours: '10:30 AM – 8:30 PM' },
      { day: 'Sunday', hours: '10:30 AM – 8:30 PM' },
    ],
  },

  metrics: {
    rating: 4.8,
    reviewCountText: '1,300+ Verified Reviews',
    establishedYear: 2018,
    clientsServed: '25,000+',
  },

  amenities: [
    {
      title: 'Air-Conditioned Comfort',
      description: 'Fully climate-controlled modern interior designed for relaxation in every season.',
    },
    {
      title: 'Work-Friendly Environment',
      description: 'Complimentary high-speed guest Wi-Fi and power outlets for laptop work during services.',
    },
    {
      title: 'Beverage Hospitality',
      description: 'Enjoy complimentary artisanal tea, coffee, and refreshments during treatments.',
    },
    {
      title: 'Strict Sanitation Standards',
      description: 'Sterilized shears, autoclaved instruments, and single-use disposable styling capes.',
    },
    {
      title: 'Expert Consultations',
      description: 'Transparent texture analysis and hair health evaluation before chemical treatments.',
    },
    {
      title: 'Flexible Payment Options',
      description: 'Supports Google Pay, PhonePe, Paytm, credit/debit cards, and cash.',
    },
  ],

  services: [
    // Haircuts & Styling
    {
      id: 'hc-01',
      name: 'Signature Designer Haircut (Women)',
      category: 'haircuts',
      categoryLabel: 'Haircuts & Styling',
      description: 'Personalized face-contouring haircut, luxury wash, deep conditioning, and signature salon blow-out.',
      duration: '45–60 min',
      priceStartingAt: '₹499',
      isPopular: true,
    },
    {
      id: 'hc-02',
      name: 'Gentleman’s Precision Cut & Style',
      category: 'haircuts',
      categoryLabel: 'Haircuts & Styling',
      description: 'Precision scissor and clipper taper fade, refreshing scalp wash, neck shave, and matte styling.',
      duration: '30–40 min',
      priceStartingAt: '₹299',
      isPopular: true,
    },
    {
      id: 'hc-03',
      name: 'Kids & Teens Haircut',
      category: 'haircuts',
      categoryLabel: 'Haircuts & Styling',
      description: 'Gentle, patient haircut with friendly stylists in a welcoming family-friendly environment.',
      duration: '25–35 min',
      priceStartingAt: '₹249',
    },
    {
      id: 'hc-04',
      name: 'Glamour Blow-Dry & Tong Styling',
      category: 'haircuts',
      categoryLabel: 'Haircuts & Styling',
      description: 'Volumizing wash, heat protection, and editorial styling for parties, events, or celebrations.',
      duration: '40–50 min',
      priceStartingAt: '₹450',
    },

    // Hair Colour & Balayage
    {
      id: 'col-01',
      name: 'Dimensional Balayage & Highlights',
      category: 'colour',
      categoryLabel: 'Hair Colour',
      description: 'Hand-painted sun-kissed gradient using premium ammonia-free professional lighteners and gloss tone.',
      duration: '120–180 min',
      priceStartingAt: '₹2,999',
      isPopular: true,
    },
    {
      id: 'col-02',
      name: 'Global Hair Colour (Ammonia-Free)',
      category: 'colour',
      categoryLabel: 'Hair Colour',
      description: 'Complete uniform rich colour transformation with intense shine gloss and nourishing post-colour mask.',
      duration: '90–120 min',
      priceStartingAt: '₹1,799',
    },
    {
      id: 'col-03',
      name: 'Root Touch-Up & Grey Coverage',
      category: 'colour',
      categoryLabel: 'Hair Colour',
      description: 'Targeted root touch-up with 100% grey coverage and colour-lock seal.',
      duration: '45–60 min',
      priceStartingAt: '₹899',
    },

    // Hair Treatments & Spa
    {
      id: 'trt-01',
      name: 'Deep Nourishing Hair Spa Ritual',
      category: 'treatments',
      categoryLabel: 'Hair Treatments',
      description: 'Multi-step intensive scalp & hair revitalization, ozone steam infusion, and relaxing shoulder massage.',
      duration: '60 min',
      priceStartingAt: '₹899',
      isPopular: true,
    },
    {
      id: 'trt-02',
      name: 'Keratin Smooth & Frizz-Control',
      category: 'treatments',
      categoryLabel: 'Hair Treatments',
      description: 'Formaldehyde-free protein smoothing that repairs cuticles and leaves hair sleek and manageable for months.',
      duration: '150–210 min',
      priceStartingAt: '₹3,499',
      isPopular: true,
    },
    {
      id: 'trt-03',
      name: 'Anti-Dandruff & Scalp Clarifying Detox',
      category: 'treatments',
      categoryLabel: 'Hair Treatments',
      description: 'Botanical scrub, clarifying wash, high-frequency stimulation, and soothing anti-microbial ampoule.',
      duration: '50 min',
      priceStartingAt: '₹999',
    },

    // Men's Grooming
    {
      id: 'grm-01',
      name: 'Beard Sculpting & Hot Towel Treatment',
      category: 'grooming',
      categoryLabel: 'Grooming',
      description: 'Beard shaping, razor line definition, organic beard oil massage, and soothing hot towel wrap.',
      duration: '25–35 min',
      priceStartingAt: '₹199',
    },
    {
      id: 'grm-02',
      name: 'Charcoal Deep Cleanse & Face D-Tan',
      category: 'grooming',
      categoryLabel: 'Grooming',
      description: 'Exfoliating activated charcoal scrub, tan removal pack, and hydrating cooling aloe finish.',
      duration: '35–45 min',
      priceStartingAt: '₹599',
    },

    // Beauty & Skin
    {
      id: 'bty-01',
      name: 'Radiance Glow Facial',
      category: 'beauty',
      categoryLabel: 'Beauty & Skin',
      description: 'Deep pore extraction, micro-dermabrasion, brightening serum infusion, and revitalizing face mask.',
      duration: '60 min',
      priceStartingAt: '₹1,199',
    },
    {
      id: 'bty-02',
      name: 'Spa Pedicure & Manicure Duo',
      category: 'beauty',
      categoryLabel: 'Beauty & Skin',
      description: 'Therapeutic foot soak, calloused skin softening, cuticle care, scrub exfoliation, and nail buffing.',
      duration: '70 min',
      priceStartingAt: '₹899',
    },
  ] as ServiceItem[],

  gallery: [
    {
      id: 'gal-01',
      title: 'Modern Salon Ambience',
      category: 'spa',
      categoryName: 'Salon & Spa',
      imageSrc: heroImg,
      aspectRatio: '16/9',
      alt: 'Hair Castle modern salon interior in Salt Lake Kolkata with elegant lighting and styling stations',
      caption: 'Our spacious, air-conditioned styling arena designed for pure customer comfort.',
    },
    {
      id: 'gal-02',
      title: 'Precision Styling & Blowout',
      category: 'haircut',
      categoryName: 'Haircuts & Styling',
      imageSrc: stylingCraftImg,
      aspectRatio: '4/3',
      alt: 'Hair stylist working on precision haircut and blow-dry styling',
      caption: 'Detailed craftsmanship tailored to each customer’s hair texture and lifestyle.',
    },
    {
      id: 'gal-03',
      title: 'Caramel Balayage Transformation',
      category: 'colour',
      categoryName: 'Hair Colour',
      imageSrc: balayageColorImg,
      aspectRatio: '3/4',
      alt: 'Dimensional caramel balayage hair color with glossy soft waves',
      caption: 'Seamless dimensional highlights with zero harsh demarcation lines.',
    },
    {
      id: 'gal-04',
      title: 'Revitalizing Hair Spa Ritual',
      category: 'spa',
      categoryName: 'Salon & Spa',
      imageSrc: hairSpaImg,
      aspectRatio: '4/3',
      alt: 'Customer relaxing during a nourishing hair spa and scalp massage treatment',
      caption: 'Therapeutic head wash and steam spa ritual restoring hair moisture and vitality.',
    },
    {
      id: 'gal-05',
      title: 'Sharp Fade & Beard Sculpting',
      category: 'grooming',
      categoryName: 'Men’s Grooming',
      imageSrc: mensGroomingImg,
      aspectRatio: '4/3',
      alt: 'Sharp men fade haircut and clean beard trim finish',
      caption: 'Crisp scissor-over-comb and clipper graduation for modern gentlemen.',
    },
  ] as GalleryItem[],

  reviews: [
    {
      id: 'rev-01',
      author: 'Subhajit Roy',
      rating: 5,
      date: 'Verified Patron',
      serviceCategory: 'Haircut & Styling',
      text: 'One of the best family salons in Salt Lake Sector 5. The stylists actually listen to what you want before starting. Extremely clean stations, polite staff, and very reasonable pricing for the quality they deliver.',
      verifiedSource: 'Google Maps',
    },
    {
      id: 'rev-02',
      author: 'Debolina Mukherjee',
      rating: 5,
      date: 'Verified Patron',
      serviceCategory: 'Balayage & Hair Spa',
      text: 'Had an amazing hair spa and subtle caramel highlights done here. My hair feels so soft and healthy! Their steam ritual and relaxing head massage were top-notch. Highly recommend to anyone in Salt Lake or New Town.',
      verifiedSource: 'Google Maps',
    },
    {
      id: 'rev-03',
      author: 'Anirban Sengupta',
      rating: 5,
      date: 'Verified Patron',
      serviceCategory: 'Men’s Grooming',
      text: 'Great experience every visit. They have air conditioning, fast Wi-Fi which helped me attend an urgent work call while getting a haircut and beard trim. Stylists are very professional and well-mannered.',
      verifiedSource: 'Justdial',
    },
    {
      id: 'rev-04',
      author: 'Priyanka Das',
      rating: 5,
      date: 'Verified Patron',
      serviceCategory: 'Keratin Smoothing',
      text: 'Transparent consultation with no false promises. The senior stylist explained the aftercare routine clearly. Post-keratin results are superb even in Kolkata humidity. Will definitely be returning regularly!',
      verifiedSource: 'Nearbuy',
    },
  ] as ReviewItem[],
};
