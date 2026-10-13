"use client";

import * as React from "react";
import {
  FileText,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  ShieldCheck,
  Zap,
  Droplets,
  Truck,
  Flame,
  Building,
  HelpCircle,
  ThumbsUp,
  Share2,
  Send,
  PlusCircle,
  UserCheck,
  Phone,
  MapPin,
  Camera,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Filter,
  Check,
  Copy,
  Wrench,
  Lock,
} from "lucide-react";
import {
  SocietyComplaint,
  initialComplaints,
  societyOverview,
} from "@/data/society-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "master_city_complaints_v1";

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

const CATEGORIES = [
  { label: "Electricity & Backup", icon: Zap, color: "text-amber-500" },
  { label: "Water Supply & RO", icon: Droplets, color: "text-cyan-500" },
  { label: "Security & CCTV", icon: ShieldCheck, color: "text-red-500" },
  { label: "Sanitation & Waste", icon: Truck, color: "text-emerald-500" },
  { label: "Roads & Streetlights", icon: Wrench, color: "text-yellow-600" },
  { label: "Parks & Greenery", icon: Sparkles, color: "text-green-500" },
  { label: "Billing & Accounts", icon: FileText, color: "text-blue-500" },
  { label: "Building & Bylaws", icon: Building, color: "text-purple-500" },
  { label: "General Inquiry", icon: HelpCircle, color: "text-zinc-500" },
] as const;

export function ComplaintSystem() {
  const [complaints, setComplaints] = React.useState<SocietyComplaint[]>([]);
  const [activeTab, setActiveTab] = React.useState<"file" | "track" | "board" | "admin">("file");
  const [searchTrackingId, setSearchTrackingId] = React.useState("");
  const [trackedComplaint, setTrackedComplaint] = React.useState<SocietyComplaint | null>(null);
  const [trackSearchError, setTrackSearchError] = React.useState("");

  // Filters for community board
  const [filterBlock, setFilterBlock] = React.useState<string>("All");
  const [filterCategory, setFilterCategory] = React.useState<string>("All");
  const [filterStatus, setFilterStatus] = React.useState<string>("All");
  const [searchKeyword, setSearchKeyword] = React.useState("");

  // Form State
  const [formData, setFormData] = React.useState({
    residentName: "",
    phone: "",
    block: "Overseas Block" as (typeof BLOCKS)[number],
    houseNo: "",
    category: "Electricity & Backup" as (typeof CATEGORIES)[number]["label"],
    urgency: "High" as SocietyComplaint["urgency"],
    title: "",
    description: "",
    photoUrl: "",
    isPublic: true,
  });

  const [submittedSuccess, setSubmittedSuccess] = React.useState<SocietyComplaint | null>(null);
  const [copiedId, setCopiedId] = React.useState(false);
  const [upvotedIds, setUpvotedIds] = React.useState<Set<string>>(new Set());

  // Admin Desk State
  const [selectedAdminComplaint, setSelectedAdminComplaint] = React.useState<SocietyComplaint | null>(null);
  const [adminStatus, setAdminStatus] = React.useState<SocietyComplaint["status"]>("In Progress");
  const [adminNotes, setAdminNotes] = React.useState("");
  const [adminOfficerName, setAdminOfficerName] = React.useState("");
  const [adminOfficerPhone, setAdminOfficerPhone] = React.useState("");
  const [adminSuccessMsg, setAdminSuccessMsg] = React.useState("");

  // Load from LocalStorage
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setComplaints(JSON.parse(saved));
      } else {
        setComplaints(initialComplaints);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialComplaints));
      }
    } catch {
      setComplaints(initialComplaints);
    }
  }, []);

  // Save to LocalStorage
  const persistComplaints = (updated: SocietyComplaint[]) => {
    setComplaints(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error("LocalStorage write failed", e);
    }
  };

  // Submit Complaint Handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.residentName || !formData.phone || !formData.houseNo || !formData.title || !formData.description) {
      alert("Please fill in all mandatory fields (Name, Phone, Block, House/Plot, Title, Description)");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `MC-CMP-2026-${randomNum}`;

    const newComplaint: SocietyComplaint = {
      id: `mc-cmp-${Date.now()}`,
      trackingNumber: trackingCode,
      title: formData.title,
      category: formData.category,
      block: formData.block,
      houseNo: formData.houseNo,
      residentName: formData.residentName,
      phone: formData.phone,
      urgency: formData.urgency,
      status: "Assigned",
      description: formData.description,
      photoUrl: formData.photoUrl || undefined,
      assignedOfficer: {
        name: "Capt. (R) Imran & Engr. Tariq Squad",
        designation: "Immediate Dispatch Desk",
        phone: "+92 300 0741111",
        department: "Master City Rapid Response Cell",
      },
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      upvotes: 1,
      isPublic: formData.isPublic,
    };

    const updated = [newComplaint, ...complaints];
    persistComplaints(updated);
    setSubmittedSuccess(newComplaint);
    setTrackedComplaint(newComplaint);

    // Reset form
    setFormData({
      residentName: "",
      phone: "",
      block: "Overseas Block",
      houseNo: "",
      category: "Electricity & Backup",
      urgency: "High",
      title: "",
      description: "",
      photoUrl: "",
      isPublic: true,
    });
  };

  // Search & Track Complaint
  const handleSearchTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSearch = searchTrackingId.trim().toUpperCase();

    if (!cleanSearch) {
      setTrackSearchError("Please enter a Tracking ID (e.g. MC-CMP-2026-9041) or phone number.");
      setTrackedComplaint(null);
      return;
    }

    const found = complaints.find(
      (c) =>
        c.trackingNumber.toUpperCase().includes(cleanSearch) ||
        c.phone.replace(/[^0-9]/g, "").includes(cleanSearch.replace(/[^0-9]/g, "")) ||
        c.id.toUpperCase() === cleanSearch
    );

    if (found) {
      setTrackedComplaint(found);
      setTrackSearchError("");
    } else {
      setTrackedComplaint(null);
      setTrackSearchError(`No active record found for "${searchTrackingId}". Please check your tracking number or lodge a new complaint.`);
    }
  };

  // Upvote / "Me Too" Handler
  const handleUpvote = (id: string) => {
    if (upvotedIds.has(id)) return;
    const updated = complaints.map((c) => {
      if (c.id === id) {
        return { ...c, upvotes: c.upvotes + 1 };
      }
      return c;
    });
    const nextSet = new Set(upvotedIds);
    nextSet.add(id);
    setUpvotedIds(nextSet);
    persistComplaints(updated);
  };

  // Admin Update Status Handler
  const handleAdminUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAdminComplaint) return;

    const updated = complaints.map((c) => {
      if (c.id === selectedAdminComplaint.id) {
        return {
          ...c,
          status: adminStatus,
          resolutionNotes: adminNotes || c.resolutionNotes,
          resolvedAt:
            adminStatus === "Resolved"
              ? new Date().toISOString().replace("T", " ").substring(0, 16)
              : c.resolvedAt,
          assignedOfficer: {
            name: adminOfficerName || c.assignedOfficer?.name || "Official Field Inspector",
            designation: c.assignedOfficer?.designation || "Society Field Officer",
            phone: adminOfficerPhone || c.assignedOfficer?.phone || "+92 300 0741111",
            department: c.assignedOfficer?.department || "Customer Care & Field Engineering",
          },
        };
      }
      return c;
    });

    persistComplaints(updated);
    setAdminSuccessMsg(`Complaint ${selectedAdminComplaint.trackingNumber} updated successfully!`);
    const refreshed = updated.find((c) => c.id === selectedAdminComplaint.id);
    if (refreshed) {
      setSelectedAdminComplaint(refreshed);
      if (trackedComplaint?.id === refreshed.id) {
        setTrackedComplaint(refreshed);
      }
    }
    setTimeout(() => setAdminSuccessMsg(""), 3500);
  };

  // Filtered complaints for community board
  const filteredComplaints = complaints.filter((c) => {
    if (filterBlock !== "All" && c.block !== filterBlock) return false;
    if (filterCategory !== "All" && c.category !== filterCategory) return false;
    if (filterStatus !== "All" && c.status !== filterStatus) return false;
    if (searchKeyword) {
      const q = searchKeyword.toLowerCase();
      const matchText =
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.trackingNumber.toLowerCase().includes(q) ||
        c.houseNo.toLowerCase().includes(q) ||
        c.residentName.toLowerCase().includes(q);
      if (!matchText) return false;
    }
    return true;
  });

  const getStatusBadge = (status: SocietyComplaint["status"]) => {
    switch (status) {
      case "Pending":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800">
            <Clock className="w-3 h-3 text-amber-600 dark:text-amber-400" />
            <span>Pending Review</span>
          </span>
        );
      case "Assigned":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border border-sky-300/60 dark:border-sky-800">
            <UserCheck className="w-3 h-3 text-sky-600 dark:text-sky-400" />
            <span>Officer Assigned</span>
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-300/60 dark:border-indigo-800">
            <Wrench className="w-3 h-3 text-indigo-600 dark:text-indigo-400 animate-spin" />
            <span>In Progress</span>
          </span>
        );
      case "Resolved":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>Resolved</span>
          </span>
        );
    }
  };

  const getUrgencyBadge = (urgency: SocietyComplaint["urgency"]) => {
    switch (urgency) {
      case "Urgent":
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-700 dark:bg-red-950/80 dark:text-red-300">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            Emergency (SLA &lt;2h)
          </span>
        );
      case "High":
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-orange-100 text-orange-700 dark:bg-orange-950/80 dark:text-orange-300">
            High (SLA &lt;6h)
          </span>
        );
      case "Medium":
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            Medium (SLA &lt;24h)
          </span>
        );
      case "Low":
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-normal bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            Routine (SLA 48h)
          </span>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & KPI Stat Strip */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-zinc-900 to-zinc-950 border border-emerald-500/20 text-white p-6 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Master City Resident Care Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Society Complaint <br className="hidden sm:inline" />
            <span className="text-emerald-400">Management &amp; Tracking</span> System
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Providing transparent, accountable, and swift municipal resolution for all residents across Overseas, Executive, and All Residential Blocks of Master City Housing Society.
          </p>

          {/* Quick Metrics */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-emerald-800/40">
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-emerald-400">99.4%</div>
              <div className="text-xs text-zinc-400 mt-0.5">Resolution SLA</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-white">&lt; 4 Hours</div>
              <div className="text-xs text-zinc-400 mt-0.5">Avg Response Time</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400">24/7 Active</div>
              <div className="text-xs text-zinc-400 mt-0.5">Control Squad</div>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl font-extrabold text-cyan-400">100% Digital</div>
              <div className="text-xs text-zinc-400 mt-0.5">Live Tracking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab("file")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              activeTab === "file"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Lodge Complaint</span>
          </button>

          <button
            onClick={() => setActiveTab("track")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              activeTab === "track"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            <Search className="w-4 h-4" />
            <span>Track By ID</span>
          </button>

          <button
            onClick={() => setActiveTab("board")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              activeTab === "board"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            <FileText className="w-4 h-4" />
            <span>Community Board ({complaints.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("admin")}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all",
              activeTab === "admin"
                ? "bg-zinc-900 dark:bg-zinc-800 text-amber-400 border border-amber-500/40 shadow-sm"
                : "text-zinc-600 dark:text-zinc-400 hover:text-amber-500"
            )}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Admin Desk</span>
          </button>
        </div>

        {/* Quick Emergency Phone Shortcut */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-500 hidden sm:inline">Urgent Helpline:</span>
          <a
            href={`tel:${societyOverview.helplinePhone}`}
            className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{societyOverview.helplinePhone}</span>
          </a>
        </div>
      </div>

      {/* TAB 1: FILE COMPLAINT */}
      {activeTab === "file" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Submission Form */}
          <div className="lg:col-span-8 bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                <span>Submit New Society Complaint</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Your complaint will be immediately logged into the Master City Command Dispatch and assigned to the relevant field wing.
              </p>
            </div>

            {submittedSuccess && (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 animate-slide-up space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-200 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Complaint Successfully Registered!</span>
                  </div>
                  <span className="text-xs bg-emerald-200/80 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded-full font-mono font-bold">
                    ACTIVE
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] text-zinc-500">Your Official Tracking Number:</div>
                    <div className="font-mono text-base sm:text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                      {submittedSuccess.trackingNumber}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(submittedSuccess.trackingNumber);
                      setCopiedId(true);
                      setTimeout(() => setCopiedId(false), 2000);
                    }}
                    className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/60 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 transition-colors flex items-center gap-1 text-xs font-semibold"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Field engineering officer has been alerted. You can track live updates using the{" "}
                  <strong>Track By ID</strong> tab, or follow up on WhatsApp with your tracking ID.
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => {
                      setSearchTrackingId(submittedSuccess.trackingNumber);
                      setActiveTab("track");
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>Track Live Status</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${societyOverview.whatsappHelpline.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Assalam-o-Alaikum Master City Helpdesk, I have filed complaint ${submittedSuccess.trackingNumber} regarding ${submittedSuccess.title}. Kindly confirm dispatch.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-semibold border border-emerald-600/40 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Helpdesk</span>
                  </a>

                  <button
                    onClick={() => setSubmittedSuccess(null)}
                    className="px-3.5 py-1.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-medium transition-colors"
                  >
                    Lodge Another
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">
              {/* Resident Personal & Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Resident Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.residentName}
                    onChange={(e) => setFormData({ ...formData, residentName: e.target.value })}
                    placeholder="e.g. Mian Tariq Mahmood"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    WhatsApp / Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-1234567 or +92..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Society Location Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Master City Block / Sector <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.block}
                    onChange={(e) => setFormData({ ...formData, block: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {BLOCKS.map((blk) => (
                      <option key={blk} value={blk}>
                        {blk}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Plot / House # &amp; Street # <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.houseNo}
                    onChange={(e) => setFormData({ ...formData, houseNo: e.target.value })}
                    placeholder="e.g. House 45-B, Street 14"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Category Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                  Complaint Department / Category <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CATEGORIES.map((cat) => {
                    const isSelected = formData.category === cat.label;
                    const Icon = cat.icon;
                    return (
                      <button
                        type="button"
                        key={cat.label}
                        onClick={() => setFormData({ ...formData, category: cat.label as any })}
                        className={cn(
                          "flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-all",
                          isSelected
                            ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 font-semibold text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500/20"
                            : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                        )}
                      >
                        <Icon className={cn("w-4 h-4 shrink-0", cat.color)} />
                        <span className="truncate">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Urgency Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Priority / Urgency Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["Urgent", "High", "Medium", "Low"] as const).map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setFormData({ ...formData, urgency: lvl })}
                      className={cn(
                        "py-2 px-3 rounded-xl border text-center text-xs font-semibold transition-all",
                        formData.urgency === lvl
                          ? lvl === "Urgent"
                            ? "bg-red-600 text-white border-red-600 shadow-md shadow-red-600/20"
                            : lvl === "High"
                            ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20"
                            : lvl === "Medium"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-zinc-700 text-white border-zinc-700"
                          : "border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      )}
                    >
                      {lvl === "Urgent" && "🔥 Emergency (<2h)"}
                      {lvl === "High" && "⚡ High (<6h)"}
                      {lvl === "Medium" && "⏱ Medium (<24h)"}
                      {lvl === "Low" && "📅 Low (Routine)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Subject / Short Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Streetlight faulty on Pole #8 near Green Park"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Detailed Complaint Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Please describe the exact issue, landmarks, and preferred timing for inspection team..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Optional Photo Attachment Link */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center justify-between">
                  <span>Photo Attachment / Evidence URL (Optional)</span>
                  <span className="text-[11px] text-zinc-400 font-normal">Supports JPG / PNG link</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.photoUrl}
                    onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
                    placeholder="https://images.unsplash.com/... or paste image URL"
                    className="flex-1 px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        photoUrl:
                          "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
                      })
                    }
                    className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
                  >
                    Add Sample Photo
                  </button>
                </div>
              </div>

              {/* Public Community Board Visibility */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-850/80 border border-zinc-200 dark:border-zinc-800">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">
                    Show on Community Board
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Allows neighbors to view and upvote this issue so society management treats it with higher priority.
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isPublic}
                    onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 hover:from-emerald-700 hover:to-teal-900 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-700/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Complaint to Society Desk</span>
              </button>
            </form>
          </div>

          {/* Right Column: Information & Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            {/* Resolution Workflow */}
            <div className="bg-zinc-50 dark:bg-zinc-900/90 rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Standard Resolution SLA</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-zinc-850 border border-zinc-200/80 dark:border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      Emergency (Power Cut / Main Leakage):
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">
                      On-site squad dispatched within 30 minutes; resolved in &lt; 2 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-zinc-850 border border-zinc-200/80 dark:border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      High Priority (Sanitation / Streetlights):
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Cleared same day within 4 to 6 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white dark:bg-zinc-850 border border-zinc-200/80 dark:border-zinc-800">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      Routine Maintenance (Horticulture / Signs):
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Inspected and rectified within 24 to 48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Society Escalation Box */}
            <div className="bg-gradient-to-br from-emerald-950 to-zinc-900 rounded-3xl p-6 text-white border border-emerald-500/30 space-y-3">
              <h3 className="font-bold text-sm text-emerald-300 flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Emergency Helpdesk Escalation</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                If your issue involves active wire sparking, gas odour, or security breach, do not wait for online ticket review. Dial our 24/7 Society Control Room immediately.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${societyOverview.helplinePhone}`}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-colors shadow-md"
                >
                  Call Control Room: {societyOverview.helplinePhone}
                </a>
                <a
                  href={`https://wa.me/${societyOverview.whatsappHelpline.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-emerald-300 font-semibold text-xs text-center transition-colors border border-emerald-500/30"
                >
                  WhatsApp: {societyOverview.whatsappHelpline}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: TRACK COMPLAINT */}
      {activeTab === "track" && (
        <div className="space-y-6">
          {/* Tracking Search Input Bar */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl max-w-3xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Live Complaint Status Tracker
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Enter your Tracking ID (e.g. <code>MC-CMP-2026-9041</code>) or registered phone number.
              </p>
            </div>

            <form onSubmit={handleSearchTrack} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTrackingId}
                  onChange={(e) => setSearchTrackingId(e.target.value)}
                  placeholder="e.g. MC-CMP-2026-9041 or 0300..."
                  className="w-full pl-11 pr-4 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                Track Now
              </button>
            </form>

            {/* Quick Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-zinc-500">
              <span>Quick Test IDs:</span>
              {complaints.slice(0, 3).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setSearchTrackingId(c.trackingNumber);
                    setTrackedComplaint(c);
                    setTrackSearchError("");
                  }}
                  className="font-mono text-emerald-600 dark:text-emerald-400 hover:underline px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800"
                >
                  {c.trackingNumber}
                </button>
              ))}
            </div>

            {trackSearchError && (
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-xs text-red-600 dark:text-red-300 text-center font-medium">
                {trackSearchError}
              </div>
            )}
          </div>

          {/* Render Tracked Complaint Details Card */}
          {trackedComplaint && (
            <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl space-y-6 animate-fade-in">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      {trackedComplaint.trackingNumber}
                    </span>
                    {getStatusBadge(trackedComplaint.status)}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-1">
                    {trackedComplaint.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {getUrgencyBadge(trackedComplaint.urgency)}
                  <span className="text-xs text-zinc-500 font-mono">
                    {trackedComplaint.createdAt}
                  </span>
                </div>
              </div>

              {/* Visual Progress Stepper */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                  Lifecycle Progress Timeline
                </div>
                <div className="grid grid-cols-4 gap-2 relative">
                  {/* Step 1 */}
                  <div className="text-center space-y-1">
                    <div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center bg-emerald-600 text-white text-xs font-bold shadow-md">
                      ✓
                    </div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                      1. Logged
                    </div>
                    <div className="text-[10px] text-zinc-400 hidden sm:block">
                      System Recorded
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center space-y-1">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-bold shadow-md",
                        ["Assigned", "In Progress", "Resolved"].includes(trackedComplaint.status)
                          ? "bg-emerald-600 text-white"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                      )}
                    >
                      {["Assigned", "In Progress", "Resolved"].includes(trackedComplaint.status) ? "✓" : "2"}
                    </div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                      2. Assigned
                    </div>
                    <div className="text-[10px] text-zinc-400 hidden sm:block">
                      Officer Alerted
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center space-y-1">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-bold shadow-md",
                        ["In Progress", "Resolved"].includes(trackedComplaint.status)
                          ? "bg-emerald-600 text-white"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                      )}
                    >
                      {["In Progress", "Resolved"].includes(trackedComplaint.status) ? "✓" : "3"}
                    </div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                      3. On-Site Work
                    </div>
                    <div className="text-[10px] text-zinc-400 hidden sm:block">
                      Crew Deployed
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="text-center space-y-1">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs font-bold shadow-md",
                        trackedComplaint.status === "Resolved"
                          ? "bg-emerald-600 text-white"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                      )}
                    >
                      {trackedComplaint.status === "Resolved" ? "✓" : "4"}
                    </div>
                    <div className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
                      4. Resolved
                    </div>
                    <div className="text-[10px] text-zinc-400 hidden sm:block">
                      Quality Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
                    Location &amp; Sector
                  </div>
                  <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                    {trackedComplaint.block}
                  </div>
                  <div className="text-zinc-600 dark:text-zinc-300">
                    {trackedComplaint.houseNo}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="text-zinc-400 font-semibold uppercase tracking-wider text-[10px]">
                    Assigned Field Officer
                  </div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {trackedComplaint.assignedOfficer?.name || "Command Dispatch Team"}
                  </div>
                  <div className="text-zinc-500 text-[11px]">
                    {trackedComplaint.assignedOfficer?.department || "Master City Municipal Wing"} •{" "}
                    {trackedComplaint.assignedOfficer?.phone}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-xs space-y-1.5">
                <div className="font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider text-[10px]">
                  Resident Incident Report:
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm">
                  {trackedComplaint.description}
                </p>
                {trackedComplaint.photoUrl && (
                  <div className="pt-2">
                    <img
                      src={trackedComplaint.photoUrl}
                      alt="Complaint attachment"
                      className="w-full max-h-56 object-cover rounded-xl border border-zinc-200 dark:border-zinc-700"
                    />
                  </div>
                )}
              </div>

              {/* Official Society Resolution Notes */}
              {trackedComplaint.resolutionNotes && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Official Society Resolution &amp; Inspection Note:</span>
                  </div>
                  <p className="text-emerald-950 dark:text-emerald-100 text-sm leading-relaxed">
                    {trackedComplaint.resolutionNotes}
                  </p>
                  {trackedComplaint.resolvedAt && (
                    <div className="text-[11px] text-emerald-700 dark:text-emerald-300 font-mono pt-1">
                      Resolution Certified At: {trackedComplaint.resolvedAt}
                    </div>
                  )}
                </div>
              )}

              {/* Escalation CTA */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <a
                  href={`https://wa.me/${societyOverview.whatsappHelpline.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, I am inquiring about complaint status for ${trackedComplaint.trackingNumber}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp In-charge Officer</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedAdminComplaint(trackedComplaint);
                    setActiveTab("admin");
                  }}
                  className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-amber-500 font-medium"
                >
                  <Lock className="w-3 h-3" />
                  <span>Manage in Admin Desk</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: COMMUNITY COMPLAINTS BOARD */}
      {activeTab === "board" && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search issues, blocks, keywords..."
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {/* Block Filter */}
              <select
                value={filterBlock}
                onChange={(e) => setFilterBlock(e.target.value)}
                className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
              >
                <option value="All">All Blocks</option>
                {BLOCKS.map((blk) => (
                  <option key={blk} value={blk}>
                    {blk}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Assigned">Assigned</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>

              {/* Category Filter */}
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-850 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.label} value={cat.label}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredComplaints.map((item) => {
              const hasUpvoted = upvotedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200/90 dark:border-zinc-800 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Top Row: Category & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 truncate">
                        {item.category}
                      </span>
                      {getStatusBadge(item.status)}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Location & Tracking Code */}
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{item.block}</span>
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
                        {item.trackingNumber}
                      </span>
                    </div>

                    {/* Description preview */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>

                    {item.photoUrl && (
                      <div className="rounded-xl overflow-hidden h-32 border border-zinc-100 dark:border-zinc-800">
                        <img
                          src={item.photoUrl}
                          alt="Evidence"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Upvotes & Action */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleUpvote(item.id)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all",
                        hasUpvoted
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                      )}
                    >
                      <ThumbsUp className={cn("w-3.5 h-3.5", hasUpvoted && "fill-emerald-600")} />
                      <span>{item.upvotes} Upvotes</span>
                    </button>

                    <button
                      onClick={() => {
                        setTrackedComplaint(item);
                        setSearchTrackingId(item.trackingNumber);
                        setActiveTab("track");
                      }}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredComplaints.length === 0 && (
            <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 space-y-2">
              <HelpCircle className="w-8 h-8 text-zinc-400 mx-auto" />
              <div className="font-bold text-zinc-800 dark:text-zinc-200">
                No matching complaints found
              </div>
              <p className="text-xs text-zinc-500">
                Try loosening your filters or search keywords.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: ADMIN RESOLUTION DESK */}
      {activeTab === "admin" && (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-amber-500/20 text-amber-500">
                  <Lock className="w-4 h-4" />
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  Society Management Resolution Panel
                </h2>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Authorized society officers can update progress status, add official inspection remarks, and dispatch field crews.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              Live Resolution Mode
            </span>
          </div>

          {adminSuccessMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-xs font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{adminSuccessMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Complaint Picker */}
            <div className="lg:col-span-5 space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Select Ticket to Manage ({complaints.length})
              </label>

              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {complaints.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedAdminComplaint(item);
                      setAdminStatus(item.status);
                      setAdminNotes(item.resolutionNotes || "");
                      setAdminOfficerName(item.assignedOfficer?.name || "");
                      setAdminOfficerPhone(item.assignedOfficer?.phone || "");
                    }}
                    className={cn(
                      "w-full text-left p-3 rounded-2xl border transition-all flex flex-col gap-1 text-xs",
                      selectedAdminComplaint?.id === item.id
                        ? "border-emerald-600 bg-emerald-50/70 dark:bg-emerald-950/60 ring-2 ring-emerald-500/20"
                        : "border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200">
                        {item.trackingNumber}
                      </span>
                      {getStatusBadge(item.status)}
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {item.block} • {item.houseNo}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Update Editor */}
            <div className="lg:col-span-7">
              {selectedAdminComplaint ? (
                <form
                  onSubmit={handleAdminUpdate}
                  className="p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-850/80 border border-zinc-200 dark:border-zinc-800 space-y-4"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      Editing: {selectedAdminComplaint.trackingNumber}
                    </span>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                      {selectedAdminComplaint.title}
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Update Ticket Status
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(["Pending", "Assigned", "In Progress", "Resolved"] as const).map((st) => (
                        <button
                          type="button"
                          key={st}
                          onClick={() => setAdminStatus(st)}
                          className={cn(
                            "py-2 px-2.5 rounded-xl border text-center text-xs font-semibold transition-all",
                            adminStatus === st
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                              : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                          )}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                        Assigned Officer Name
                      </label>
                      <input
                        type="text"
                        value={adminOfficerName}
                        onChange={(e) => setAdminOfficerName(e.target.value)}
                        placeholder="e.g. Engr. Tariq Mehmood"
                        className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                        Officer Contact Number
                      </label>
                      <input
                        type="tel"
                        value={adminOfficerPhone}
                        onChange={(e) => setAdminOfficerPhone(e.target.value)}
                        placeholder="e.g. 0300-9876543"
                        className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      Official Remarks / Resolution Details
                    </label>
                    <textarea
                      rows={3}
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="e.g. Capacitor bank checked, burnt fuse replaced with 200A industrial ceramic unit. Normal voltage restored."
                      className="w-full px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-zinc-900 dark:text-zinc-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Save &amp; Broadcast Resolution
                  </button>
                </form>
              ) : (
                <div className="p-12 text-center rounded-3xl border border-dashed border-zinc-300 dark:border-zinc-700 text-zinc-400 text-xs">
                  Please select a complaint from the left panel to update status or assign officers.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
