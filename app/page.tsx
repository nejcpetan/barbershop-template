"use client";

import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TeamSection from "@/components/sections/TeamSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}
