"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Rooms",
          id: "rooms",
        },
        {
          name: "Gallery",
          id: "gallery",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Avi Pension"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "plain",
      }}
      title="Welcome to Avi Pension, Addis Ababa"
      description="Your peaceful and affordable home away from home near German Square. Experience comfort, free high-speed Wi-Fi, and authentic Ethiopian hospitality."
      buttons={[
        {
          text: "Check Availability",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-girl-hat-kisses-her-boyfriend-standing-front-black-gates-with-exotic-plants-morning_197531-4565.jpg?_wi=1"
      imageAlt="Avi Pension Exterior"
      mediaAnimation="slide-up"
      testimonials={[
        {
          name: "Abebe G.",
          handle: "@abebe_travel",
          testimonial: "A truly comfortable stay. Clean and quiet, perfect for resting before my flight.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-receiving-groceries_23-2149663651.jpg",
        },
        {
          name: "Sarah W.",
          handle: "@sarah_explore",
          testimonial: "Friendly staff and excellent location. The breakfast was a highlight!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-women-getting-married_23-2150753679.jpg",
        },
        {
          name: "John M.",
          handle: "@john_biz",
          testimonial: "Reliable Wi-Fi and quiet rooms. Great value for business travelers.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-offering-food-neighbor_23-2149447189.jpg",
        },
        {
          name: "Elena D.",
          handle: "@elena_d",
          testimonial: "Very welcoming atmosphere. Felt like a real home away from home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-working-with-her-camera_23-2147601406.jpg",
        },
        {
          name: "Mark R.",
          handle: "@mark_transit",
          testimonial: "Convenient parking and seamless check-in. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956521.jpg",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956528.jpg",
          alt: "Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/bed-with-canopy_1385-1801.jpg",
          alt: "Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-romantic-breakfast-bed-arrangement_23-2150956522.jpg",
          alt: "Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-luxury-modern-bedroom-suite-hotel-with-tv-cabinet_105762-2276.jpg",
          alt: "Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/3d-rendering-modern-luxury-bedroom-suite-bathroom_105762-1936.jpg",
          alt: "Avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Free Wi-Fi",
        },
        {
          type: "text",
          text: "Secure Parking",
        },
        {
          type: "text",
          text: "Local Breakfast",
        },
        {
          type: "text",
          text: "Airport Proximity",
        },
        {
          type: "text",
          text: "24/7 Support",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "A Peaceful Retreat in the City",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/cute-fedora-hat-cozy-bed-with-pillows_181624-40548.jpg",
          alt: "Cozy Room",
        },
      ]}
    />
  </div>

  <div id="rooms" data-section="rooms">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Free High-Speed Wi-Fi",
          description: "Stay connected with reliable, unlimited internet in all rooms.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-wi-fi-router-with-smart-devices-house-figurine_23-2148779303.jpg?_wi=1",
          imageAlt: "Wifi Icon",
        },
        {
          title: "Breakfast Service",
          description: "Start your day with a fresh, locally-inspired breakfast every morning.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-assorted-breakfast-with-oatmeal-fried-eggs-human-hand-white-plate_176474-3281.jpg",
          imageAlt: "Breakfast",
        },
        {
          title: "Secure Private Parking",
          description: "Rest easy with our on-site parking facilities.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-cup-coffee-parking-lot_169016-37009.jpg",
          imageAlt: "Parking",
        },
      ]}
      title="Modern Comforts"
      description="Designed for travelers who value comfort, cleanliness, and convenience."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Standard Single Room",
          price: "1200 ETB",
          variant: "Budget Friendly",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-bedroom-interior-with-green-velvet-headboard_23-2152001405.jpg",
        },
        {
          id: "2",
          name: "Deluxe Double Room",
          price: "2500 ETB",
          variant: "Premium Space",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_1203-9643.jpg?_wi=1",
        },
        {
          id: "3",
          name: "Executive Suite",
          price: "3500 ETB",
          variant: "Extra Comfort",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-breakfast-bed-concept_23-2148877644.jpg",
        },
        {
          id: "4",
          name: "Transit Double",
          price: "1800 ETB",
          variant: "Airport Convenience",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263522.jpg",
        },
        {
          id: "5",
          name: "Standard Twin",
          price: "2200 ETB",
          variant: "Two Guests",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_74190-6096.jpg",
        },
        {
          id: "6",
          name: "Mini Suite",
          price: "2800 ETB",
          variant: "Refined Comfort",
          imageSrc: "http://img.b2bpic.net/free-photo/folded-towels-bed_1203-145.jpg",
        },
      ]}
      title="Our Rooms"
      description="Affordable options for every type of traveler."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Budget",
          price: "1200 ETB",
          subtitle: "Single occupancy",
          buttons: [
            {
              text: "Request Booking",
              href: "#contact",
            },
          ],
          features: [
            "Private bathroom",
            "Free Wifi",
            "Breakfast included",
          ],
        },
        {
          id: "p2",
          badge: "Popular",
          price: "2500 ETB",
          subtitle: "Double occupancy",
          buttons: [
            {
              text: "Request Booking",
              href: "#contact",
            },
          ],
          features: [
            "King size bed",
            "Smart TV",
            "Mini Fridge",
            "Breakfast included",
          ],
        },
      ]}
      title="Booking Options"
      description="Choose the perfect stay package for your visit to Addis Ababa."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Abebe G.",
          role: "Traveler",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg",
          imageAlt: "Luxury modern style bedroom Interior of a hotel bedroom Generative AI illustration",
        },
        {
          id: "2",
          name: "Sarah W.",
          role: "Visitor",
          company: "International",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-girl-hat-kisses-her-boyfriend-standing-front-black-gates-with-exotic-plants-morning_197531-4565.jpg?_wi=2",
          imageAlt: "Luxury modern style bedroom Interior of a hotel bedroom Generative AI illustration",
        },
        {
          id: "3",
          name: "John M.",
          role: "Business",
          company: "Transit",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-fedora-hat-cozy-bed-with-pillows_181624-40548.jpg",
          imageAlt: "Luxury modern style bedroom Interior of a hotel bedroom Generative AI illustration",
        },
        {
          id: "4",
          name: "Elena D.",
          role: "Tourist",
          company: "Backpacker",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed_1203-9643.jpg?_wi=2",
          imageAlt: "Luxury modern style bedroom Interior of a hotel bedroom Generative AI illustration",
        },
        {
          id: "5",
          name: "Mark R.",
          role: "Business",
          company: "Transit",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-wi-fi-router-with-smart-devices-house-figurine_23-2148779303.jpg?_wi=2",
          imageAlt: "Luxury modern style bedroom Interior of a hotel bedroom Generative AI illustration",
        },
      ]}
      title="Guest Reviews"
      description="See why travelers choose Avi Pension."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to book your stay? Call us at 094 312 5143 or message us on WhatsApp."
      buttons={[
        {
          text: "Call Now",
          href: "tel:+251943125143",
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/251943125143",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Avi Pension",
          items: [
            {
              label: "Gofa Camp, Addis Ababa",
              href: "#",
            },
          ],
        },
        {
          title: "Navigation",
          items: [
            {
              label: "Rooms",
              href: "#rooms",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Avi Pension"
      bottomRightText="Built for Hospitality"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
