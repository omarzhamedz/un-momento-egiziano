import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import FeaturedTours from "@/components/home/FeaturedTours";
import AboutGuide from "@/components/home/AboutGuide";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <FeaturedTours />
      <AboutGuide />
      <BookingCTA />
    </main>
  );
}