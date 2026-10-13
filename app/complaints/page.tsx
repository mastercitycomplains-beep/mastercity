import type { Metadata } from "next";
import { ComplaintSystem } from "@/components/complaints/complaint-system";
import { societyOverview } from "@/data/society-data";

export const metadata: Metadata = {
  title: "Complaint Management System | Master City Housing Society",
  description:
    "Official resident complaint lodging, real-time ticket tracking, and municipal dispute resolution portal for Master City Housing Society, Gujranwala.",
  keywords: [
    "Master City Complaint Management",
    "Master City Housing Society complaints",
    "Track complaint Master City",
    "Master City electricity water security helpdesk",
    "Gujranwala housing society resident portal",
  ],
};

export default function ComplaintsPage() {
  return (
    <div className="pt-36 pb-20 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComplaintSystem />
      </div>
    </div>
  );
}
