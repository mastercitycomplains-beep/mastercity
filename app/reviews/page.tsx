import type { Metadata } from "next";
import { ReviewSystem } from "@/components/reviews/review-system";

export const metadata: Metadata = {
  title: "Resident & Investor Reviews | Master City Housing Society",
  description:
    "Read genuine reviews and testimonials from overseas Pakistanis, families, and commercial investors residing at Master City Housing Society, Gujranwala.",
  keywords: [
    "Master City Reviews",
    "Master City Housing Society testimonials",
    "Master City resident feedback",
    "Overseas Block Master City ratings",
    "Best housing society in Gujranwala reviews",
  ],
};

export default function ReviewsPage() {
  return (
    <div className="pt-36 pb-20 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewSystem />
      </div>
    </div>
  );
}
