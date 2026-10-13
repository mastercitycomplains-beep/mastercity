"use client";

import * as React from "react";
import {
  Star,
  ThumbsUp,
  Share2,
  CheckCircle2,
  PlusCircle,
  X,
  Filter,
  Search,
  Sparkles,
  ShieldCheck,
  Zap,
  Droplets,
  Heart,
  MessageSquare,
  BadgeCheck,
  MapPin,
  TrendingUp,
} from "lucide-react";
import {
  SocietyReview,
  initialReviews,
  societyOverview,
} from "@/data/society-data";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "master_city_reviews_v1";

const BLOCKS = [
  "Overseas Block",
  "Executive Block",
  "Block A",
  "Block B",
  "Block C",
  "Block D",
  "Commercial Broadway",
  "Royal Villas",
] as const;

const AVAILABLE_HIGHLIGHTS = [
  "100% Power Uptime",
  "World-Class Security",
  "Impeccable Green Parks",
  "Peace of Mind",
  "High Capital ROI",
  "Pure RO Water",
  "Single-Pole Theme Park",
  "Grand Jamia Mosque",
  "Musical Fountains",
  "Rapid Complaint Team",
];

export function ReviewSystem() {
  const [reviews, setReviews] = React.useState<SocietyReview[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [filterRole, setFilterRole] = React.useState<string>("All");
  const [filterRating, setFilterRating] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [helpfulLiked, setHelpfulLiked] = React.useState<Set<string>>(new Set());

  // Form State
  const [formData, setFormData] = React.useState({
    authorName: "",
    authorRole: "Resident Owner" as SocietyReview["authorRole"],
    block: "Overseas Block",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 5,
    },
    title: "",
    reviewText: "",
    highlights: ["100% Power Uptime", "World-Class Security"] as string[],
    isVerified: true,
    photoUrl: "",
  });

  const [hoverRating, setHoverRating] = React.useState<number | null>(null);
  const [toastMessage, setToastMessage] = React.useState("");

  // Load reviews from localStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setReviews(JSON.parse(saved));
      } else {
        setReviews(initialReviews);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialReviews));
      }
    } catch {
      setReviews(initialReviews);
    }
  }, []);

  const persistReviews = (updated: SocietyReview[]) => {
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleHelpfulClick = (id: string) => {
    if (helpfulLiked.has(id)) return;
    const updated = reviews.map((r) => {
      if (r.id === id) {
        return { ...r, helpfulCount: r.helpfulCount + 1 };
      }
      return r;
    });
    const nextSet = new Set(helpfulLiked);
    nextSet.add(id);
    setHelpfulLiked(nextSet);
    persistReviews(updated);
  };

  const toggleHighlight = (h: string) => {
    if (formData.highlights.includes(h)) {
      setFormData({
        ...formData,
        highlights: formData.highlights.filter((item) => item !== h),
      });
    } else {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, h],
      });
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.authorName || !formData.title || !formData.reviewText) {
      alert("Please fill in your name, review headline, and detailed experience.");
      return;
    }

    const newReview: SocietyReview = {
      id: `mc-rev-${Date.now()}`,
      authorName: formData.authorName,
      authorRole: formData.authorRole,
      block: formData.block,
      rating: formData.rating,
      subRatings: formData.subRatings,
      title: formData.title,
      reviewText: formData.reviewText,
      highlights: formData.highlights.length > 0 ? formData.highlights : ["Verified Experience"],
      createdAt: new Date().toISOString().substring(0, 10),
      helpfulCount: 1,
      isVerified: formData.isVerified,
      avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80`,
      photoUrl: formData.photoUrl || undefined,
    };

    const updated = [newReview, ...reviews];
    persistReviews(updated);
    setIsModalOpen(false);
    setToastMessage("Thank you! Your verified review has been posted successfully.");
    setTimeout(() => setToastMessage(""), 4000);

    // Reset Form
    setFormData({
      authorName: "",
      authorRole: "Resident Owner",
      block: "Overseas Block",
      rating: 5,
      subRatings: {
        security: 5,
        electricity: 5,
        maintenance: 5,
        greenery: 5,
      },
      title: "",
      reviewText: "",
      highlights: ["100% Power Uptime", "World-Class Security"],
      isVerified: true,
      photoUrl: "",
    });
  };

  // Filtered reviews
  const filteredReviews = reviews.filter((r) => {
    if (filterRole !== "All" && r.authorRole !== filterRole) return false;
    if (filterRating !== "All") {
      if (filterRating === "5" && r.rating !== 5) return false;
      if (filterRating === "4" && r.rating !== 4) return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        r.title.toLowerCase().includes(q) ||
        r.reviewText.toLowerCase().includes(q) ||
        r.authorName.toLowerCase().includes(q) ||
        r.block.toLowerCase().includes(q) ||
        r.highlights.some((h) => h.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  // Calculate Average Rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

  return (
    <div className="space-y-10">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-emerald-600 text-white shadow-2xl flex items-center gap-2 text-sm font-bold animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Scorecard & Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 text-white p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text & CTA */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>Resident &amp; Investor Voice</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Master City Housing <br />
              <span className="text-amber-400">Reviews &amp; Testimonials</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Read authentic, verified experiences from overseas Pakistanis, resident families, and commercial investors living the luxury lifestyle at Master City Housing Society.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-zinc-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Upload Your Review</span>
              </button>

              <a
                href="#all-reviews"
                className="py-3 px-5 rounded-2xl bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors"
              >
                Browse All Reviews ({reviews.length})
              </a>
            </div>
          </div>

          {/* Right: Score Breakdown Card */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-black text-amber-400">
                  {avgRating} <span className="text-lg text-zinc-400 font-normal">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-zinc-300 ml-1.5 font-medium">
                    (1,480+ Reviews)
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  98.4% Recommended
                </span>
                <div className="text-[11px] text-zinc-400 mt-1">Verified Residency</div>
              </div>
            </div>

            {/* Pillar Breakdown */}
            <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  24/7 Underground Power Grid
                </span>
                <span className="font-bold text-amber-300">5.0 / 5.0</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-amber-400 h-1.5 rounded-full w-[99%]" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Gated Security &amp; AI CCTV
                </span>
                <span className="font-bold text-emerald-300">4.9 / 5.0</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-emerald-400 h-1.5 rounded-full w-[97%]" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-green-400" />
                  Theme Parks &amp; Green Belts
                </span>
                <span className="font-bold text-green-300">4.9 / 5.0</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-green-400 h-1.5 rounded-full w-[96%]" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  RO Water &amp; Sanitation
                </span>
                <span className="font-bold text-cyan-300">4.8 / 5.0</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-cyan-400 h-1.5 rounded-full w-[94%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div
        id="all-reviews"
        className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reviews by keyword, name, or block..."
            className="w-full pl-10 pr-3.5 py-2.5 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Resident Role Filter */}
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
          >
            <option value="All">All Resident Roles</option>
            <option value="Overseas Pakistani">Overseas Pakistanis</option>
            <option value="Resident Owner">Resident Owners</option>
            <option value="Plot Owner">Plot Owners</option>
            <option value="Commercial Investor">Commercial Investors</option>
            <option value="Tenant">Tenants</option>
          </select>

          {/* Rating Filter */}
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
          >
            <option value="All">All Ratings</option>
            <option value="5">5 Stars Only (Best)</option>
            <option value="4">4 Stars &amp; Above</option>
          </select>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs shadow-sm transition-colors flex items-center gap-1.5"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Write Review</span>
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((review) => {
          const isLiked = helpfulLiked.has(review.id);
          return (
            <div
              key={review.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        review.avatarUrl ||
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
                      }
                      alt={review.authorName}
                      className="w-11 h-11 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                          {review.authorName}
                        </h3>
                        {review.isVerified && (
                          <span title="Verified Master City Resident">
                            <BadgeCheck className="w-4 h-4 text-emerald-500" />
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-zinc-500 flex items-center gap-1.5 mt-0.5">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                          {review.authorRole}
                        </span>
                        <span>•</span>
                        <span>{review.block}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < review.rating ? "fill-amber-400 text-amber-400" : "text-zinc-300"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h4>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {review.reviewText}
                </p>

                {/* Highlights Pills */}
                {review.highlights && review.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {review.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}

                {/* Optional Attached Photo */}
                {review.photoUrl && (
                  <div className="rounded-2xl overflow-hidden h-48 border border-zinc-200 dark:border-zinc-800 pt-1">
                    <img
                      src={review.photoUrl}
                      alt="Society Resident photo"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
              </div>

              {/* Card Footer: Helpful counter & Date */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-mono text-[11px]">{review.createdAt}</span>

                <button
                  onClick={() => handleHelpfulClick(review.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all text-xs",
                    isLiked
                      ? "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                  )}
                >
                  <ThumbsUp className={cn("w-3.5 h-3.5", isLiked && "fill-amber-500")} />
                  <span>Helpful ({review.helpfulCount})</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2">
          <Star className="w-8 h-8 text-zinc-400 mx-auto" />
          <div className="font-bold text-zinc-800 dark:text-zinc-200">
            No matching reviews found
          </div>
          <p className="text-xs text-zinc-500">
            Be the first to upload a review under this category!
          </p>
        </div>
      )}

      {/* UPLOAD REVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-zinc-950 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center shadow-inner">
                  <Star className="w-6 h-6 fill-zinc-950 text-zinc-950" />
                </div>
                <div>
                  <h2 className="text-lg font-bold tracking-tight">
                    Share Your Master City Experience
                  </h2>
                  <p className="text-xs text-zinc-900/80 font-medium">
                    Upload your best review, rating &amp; photos for Master City Housing Society
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-zinc-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleReviewSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
              {/* Star Rating Interactive Selector */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-center space-y-1.5">
                <div className="font-bold text-amber-950 dark:text-amber-200 text-xs uppercase tracking-wider">
                  Overall Rating For Master City
                </div>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating ?? formData.rating) >= star;
                    return (
                      <button
                        type="button"
                        key={star}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={cn(
                            "w-7 h-7 sm:w-8 sm:h-8 transition-colors",
                            isFilled
                              ? "fill-amber-400 text-amber-500"
                              : "text-zinc-300 dark:text-zinc-600"
                          )}
                        />
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs font-semibold text-amber-900 dark:text-amber-300">
                  {formData.rating === 5 && "★★★★★ 5.0 - Exceptional World-Class Living!"}
                  {formData.rating === 4 && "★★★★☆ 4.0 - Very Good Society"}
                  {formData.rating === 3 && "★★★☆☆ 3.0 - Satisfactory"}
                  {formData.rating < 3 && "Needs Improvement"}
                </div>
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    placeholder="e.g. Chaudhry Zafar Iqbal"
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Resident / Member Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.authorRole}
                    onChange={(e) =>
                      setFormData({ ...formData, authorRole: e.target.value as any })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Overseas Pakistani">Overseas Pakistani Investor</option>
                    <option value="Resident Owner">Resident Homeowner</option>
                    <option value="Plot Owner">Plot Owner (Under Construction)</option>
                    <option value="Commercial Investor">Commercial Broadway Investor</option>
                    <option value="Tenant">Tenant Family</option>
                  </select>
                </div>
              </div>

              {/* Block & Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Master City Block / Sector
                  </label>
                  <select
                    value={formData.block}
                    onChange={(e) => setFormData({ ...formData, block: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                  >
                    {BLOCKS.map((blk) => (
                      <option key={blk} value={blk}>
                        {blk}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                    Review Headline / Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. European standard lifestyle in Pakistan!"
                    className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                  Your Detailed Story &amp; Experience <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.reviewText}
                  onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                  placeholder="Tell others what you love about Master City (Security, Electricity, Theme parks, Management, Mosque)..."
                  className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Highlights Tag Picker */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Select Highlights (Click to add)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {AVAILABLE_HIGHLIGHTS.map((h) => {
                    const isSelected = formData.highlights.includes(h);
                    return (
                      <button
                        type="button"
                        key={h}
                        onClick={() => toggleHighlight(h)}
                        className={cn(
                          "px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all border",
                          isSelected
                            ? "bg-amber-500 text-zinc-950 border-amber-500"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200"
                        )}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {h}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Photo Upload link */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1 flex items-center justify-between">
                  <span>Photo URL / House / Park Photo (Optional)</span>
                  <span className="text-[10px] text-zinc-400 font-normal">JPG/PNG image link</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.photoUrl}
                    onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/... or paste image URL"
                    className="flex-1 px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-amber-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        photoUrl:
                          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
                      })
                    }
                    className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
                  >
                    Sample Villa Photo
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold shadow-md transition-colors"
                >
                  Publish Verified Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
