import { SocietyHero } from "@/components/home/society-hero";
import { HomeComplaintsPreview } from "@/components/home/home-complaints-preview";
import { SocietyAmenitiesSection } from "@/components/home/society-amenities-section";
import { HomeReviewsPreview } from "@/components/home/home-reviews-preview";
import { CeoVisionSection } from "@/components/home/ceo-vision-section";
import { AnnouncementsCard } from "@/components/society/announcements-card";

export default function HomePage() {
  return (
    <>
      <SocietyHero />
      <HomeComplaintsPreview />
      <SocietyAmenitiesSection />
      <HomeReviewsPreview />
      <CeoVisionSection />
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnnouncementsCard />
        </div>
      </section>
    </>
  );
}
