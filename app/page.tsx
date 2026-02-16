import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { GalleryShowcaseSection } from "@/components/gallery-showcase-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { StatsSection } from "@/components/stats-section"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <GalleryShowcaseSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <StatsSection />
        <GoogleReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
