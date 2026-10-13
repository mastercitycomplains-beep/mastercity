export interface SocietyComplaint {
  id: string;
  trackingNumber: string;
  title: string;
  category:
    | "Electricity & Backup"
    | "Water Supply & RO"
    | "Security & CCTV"
    | "Sanitation & Waste"
    | "Roads & Streetlights"
    | "Parks & Greenery"
    | "Billing & Accounts"
    | "Building & Bylaws"
    | "General Inquiry";
  block:
    | "Overseas Block"
    | "Executive Block"
    | "Block A"
    | "Block B"
    | "Block C"
    | "Block D"
    | "Commercial Broadway"
    | "Royal Villas";
  houseNo: string;
  residentName: string;
  phone: string;
  urgency: "Urgent" | "High" | "Medium" | "Low";
  status: "Pending" | "Assigned" | "In Progress" | "Resolved";
  description: string;
  assignedOfficer?: {
    name: string;
    designation: string;
    phone: string;
    department: string;
  };
  createdAt: string;
  resolvedAt?: string;
  resolutionNotes?: string;
  photoUrl?: string;
  upvotes: number;
  isPublic: boolean;
}

export interface SocietyReview {
  id: string;
  authorName: string;
  authorRole:
    | "Resident Owner"
    | "Overseas Pakistani"
    | "Plot Owner"
    | "Commercial Investor"
    | "Tenant";
  block: string;
  rating: number;
  subRatings: {
    security: number;
    electricity: number;
    maintenance: number;
    greenery: number;
  };
  title: string;
  reviewText: string;
  highlights: string[];
  createdAt: string;
  helpfulCount: number;
  isVerified: boolean;
  avatarUrl?: string;
  photoUrl?: string;
}

export interface EmergencyContact {
  id: string;
  title: string;
  subtitle: string;
  phone: string;
  whatsapp?: string;
  iconName: string;
  available: string;
  priority: "emergency" | "urgent" | "standard";
}

export interface SocietyAnnouncement {
  id: string;
  title: string;
  date: string;
  category: "Important" | "Maintenance" | "Community" | "Event";
  summary: string;
}

export const societyOverview = {
  name: "Master City Housing Society",
  shortName: "Master City",
  tagline: "The Gold Standard of Modern & Secure Living",
  location: "Sialkot Bypass Road, Gujranwala, Punjab, Pakistan",
  ceoName: "Chaudhry Ghulam Mustafa",
  ceoTitle: "Chairman & CEO, Master City Housing Scheme",
  establishedYear: "2015",
  totalArea: "Hundreds of Acres Master-Planned Community",
  residentCount: "18,500+ Happy Residents",
  satisfactionRate: "99.4%",
  avgResolutionTime: "< 4 Hours",
  helplinePhone: "+92 55 111-627-837",
  whatsappHelpline: "+92 300 0741111",
  email: "complaints@mastercity.com.pk",
  officeHours: "24/7 Control Room | Administrative Office: 9:00 AM – 6:00 PM (Mon-Sat)",
  keyHighlights: [
    "100% Underground Electrification with Zero Load-Shedding Backup",
    "Gated Boundary Wall with 24/7 Smart AI CCTV & Paramilitary Guards",
    "International Standard Single-Pole Theme Park & Musical Dancing Fountains",
    "State-of-the-Art RO Water Filtration Plants in Every Block",
    "Royal Marquee, Sports Complex, Jogging Tracks & International Hospital",
  ],
};

export const initialComplaints: SocietyComplaint[] = [
  {
    id: "mc-cmp-1001",
    trackingNumber: "MC-CMP-2026-9041",
    title: "Streetlight LED faulty on Pole #14 near Central Park",
    category: "Roads & Streetlights",
    block: "Overseas Block",
    houseNo: "Plot 148, Street 7",
    residentName: "Malik Usman Tariq",
    phone: "+92 301 4567890",
    urgency: "Medium",
    status: "Resolved",
    description:
      "The automatic LED pole light #14 has been flickering and went dark last night. It causes a blind corner near the roundabout after 9 PM.",
    assignedOfficer: {
      name: "Engr. Tariq Mehmood",
      designation: "Assistant Director Electrical",
      phone: "+92 300 9876543",
      department: "Electrical & Street Lighting",
    },
    createdAt: "2026-10-10 19:30",
    resolvedAt: "2026-10-11 11:15",
    resolutionNotes:
      "LED luminaire driver replaced with 120W Philips industrial unit. Photocell sensor calibrated and tested successfully.",
    photoUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    upvotes: 14,
    isPublic: true,
  },
  {
    id: "mc-cmp-1002",
    trackingNumber: "MC-CMP-2026-9042",
    title: "Water booster pressure low during morning supply cycle",
    category: "Water Supply & RO",
    block: "Executive Block",
    houseNo: "Villa 32, Street 3",
    residentName: "Dr. Farhan Qureshi",
    phone: "+92 321 8765432",
    urgency: "High",
    status: "In Progress",
    description:
      "Water pressure was significantly lower than normal between 6:30 AM and 8:00 AM on the second floor. Kindly inspect Sector 3 booster manifold.",
    assignedOfficer: {
      name: "Sub-Engr. Bilal Akram",
      designation: "Water Supply Superintendent",
      phone: "+92 312 3456789",
      department: "Public Health Engineering",
    },
    createdAt: "2026-10-12 08:20",
    resolutionNotes:
      "Booster pump #2 pressure switch diagnosed with silt buildup. Flushing in progress; normal line pressure of 45 PSI will be restored by 2:00 PM.",
    upvotes: 8,
    isPublic: true,
  },
  {
    id: "mc-cmp-1003",
    trackingNumber: "MC-CMP-2026-9043",
    title: "Garbage collection truck delayed on Sector B lane",
    category: "Sanitation & Waste",
    block: "Block B",
    houseNo: "House 89, Street 12",
    residentName: "Haji Abdul Rehman",
    phone: "+92 333 5551234",
    urgency: "High",
    status: "Assigned",
    description:
      "Morning sanitation compactor missed street #12 today. Bins are full outside homes. Please send the sanitation team for doorstep clearance.",
    assignedOfficer: {
      name: "Sardar Muhammad Ali",
      designation: "Sanitation & Waste Incharge",
      phone: "+92 300 2345678",
      department: "Sanitation & Environmental Control",
    },
    createdAt: "2026-10-13 09:15",
    upvotes: 19,
    isPublic: true,
  },
  {
    id: "mc-cmp-1004",
    trackingNumber: "MC-CMP-2026-9044",
    title: "Unauthorized construction material dumped on road edge",
    category: "Building & Bylaws",
    block: "Block A",
    houseNo: "Plot 210, Main Boulevard",
    residentName: "Engr. Yasir Nawaz",
    phone: "+92 302 7890123",
    urgency: "Medium",
    status: "Pending",
    description:
      "Construction sand and gravel from plot 211 have spilled onto the main driving carpet, partially blocking the cycling lane and causing dust.",
    createdAt: "2026-10-13 10:00",
    upvotes: 6,
    isPublic: true,
  },
  {
    id: "mc-cmp-1005",
    trackingNumber: "MC-CMP-2026-9045",
    title: "Smart Gate RFID barrier sensor delay at Gate 2 entrance",
    category: "Security & CCTV",
    block: "Overseas Block",
    houseNo: "Main Gate 2 Corridor",
    residentName: "Sheikh Nadeem Anwar",
    phone: "+92 300 8889999",
    urgency: "Urgent",
    status: "In Progress",
    description:
      "Residents with registered RFID tags are experiencing 15-second sensor lag at Gate 2 barrier. Causing vehicle queue during morning school rush.",
    assignedOfficer: {
      name: "Capt. (R) Imran Bashir",
      designation: "Chief Security Officer",
      phone: "+92 300 1112222",
      department: "Security & Surveillance Command",
    },
    createdAt: "2026-10-12 17:40",
    resolutionNotes:
      "RFID loop antenna alignment adjusted. Firmware update on barrier controller unit underway by vendor team.",
    upvotes: 31,
    isPublic: true,
  },
  {
    id: "mc-cmp-1006",
    trackingNumber: "MC-CMP-2026-9046",
    title: "Tree branch hanging close to overhead telecom line",
    category: "Parks & Greenery",
    block: "Block C",
    houseNo: "House 15, Park View Street",
    residentName: "Mrs. Naila Kamran",
    phone: "+92 315 6789012",
    urgency: "Low",
    status: "Resolved",
    description:
      "Eucalyptus branch grown close to optical fiber junction box near corner park. Needs pruning before rain or storm.",
    assignedOfficer: {
      name: "Chaudhry Asif Gujjar",
      designation: "Horticulture Officer",
      phone: "+92 301 2223344",
      department: "Parks & Horticulture Wing",
    },
    createdAt: "2026-10-09 14:10",
    resolvedAt: "2026-10-10 16:00",
    resolutionNotes:
      "Horticulture trimming squad deployed with hydraulic bucket crane. Tree safely pruned and green waste transported to compost plant.",
    upvotes: 5,
    isPublic: true,
  },
];

export const initialReviews: SocietyReview[] = [
  {
    id: "mc-rev-2001",
    authorName: "Chaudhry Zafar Iqbal",
    authorRole: "Overseas Pakistani",
    block: "Overseas Block",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 5,
    },
    title: "Best investment of my life — European standard lifestyle in Pakistan!",
    reviewText:
      "I returned from Manchester, UK after 22 years and surveyed several housing schemes in Punjab. Master City stands head and shoulders above all of them. The 24/7 underground electrification has never failed us even once in 2 years. Security is so tight and courteous that my children cycle around the parks even late at night with absolute peace of mind. Truly a proud feather in Gujranwala's cap!",
    highlights: ["100% Power Uptime", "World-Class Security", "Impeccable Green Parks", "Peace of Mind"],
    createdAt: "2026-10-05",
    helpfulCount: 84,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    photoUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mc-rev-2002",
    authorName: "Dr. Ayesha Siddiqa",
    authorRole: "Resident Owner",
    block: "Executive Block",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 5,
    },
    title: "Prompt management & rapid complaint resolution is what makes it elite",
    reviewText:
      "When we built our home in Executive Block, our biggest fear was post-possession maintenance. Master City's resident portal and on-ground field squad have exceeded every expectation. Whenever we logged a minor plumbing or street lighting query, the officer arrived at our doorstep within 2 hours. The cleanliness of the boulevards every single morning at 7 AM is magnificent.",
    highlights: ["Rapid Response Team", "Spotless Sanitation", "Family Atmosphere", "Executive Standard"],
    createdAt: "2026-10-08",
    helpfulCount: 62,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    photoUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mc-rev-2003",
    authorName: "Mian Haroon Rasheed",
    authorRole: "Commercial Investor",
    block: "Commercial Broadway",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 4,
      greenery: 5,
    },
    title: "Tremendous commercial footfall and high rental yield for businesses",
    reviewText:
      "Operating a retail showroom on the Main Commercial Boulevard of Master City has been phenomenal. The wide 150-ft central roads, grand parking plazas, and the crowd coming to the Single-Pole Amusement Park & Musical Fountains on weekends creates continuous commercial activity. Excellent infrastructure and high property value appreciation.",
    highlights: ["High Capital Growth", "Ample Parking", "Theme Park Attraction", "Wide Boulevards"],
    createdAt: "2026-09-28",
    helpfulCount: 47,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "mc-rev-2004",
    authorName: "Khurram Shahzad Cheema",
    authorRole: "Resident Owner",
    block: "Block A",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 5,
    },
    title: "The Grand Jamia Mosque and thematic parks are architectural gems",
    reviewText:
      "Living in Block A right opposite the lush jogging tracks and water streams is like waking up in a resort every day. The Grand Jamia Mosque is one of the most serene and beautifully maintained mosques in the region. Full marks to the CEO and management team for maintaining such high standards year after year.",
    highlights: ["Grand Jamia Mosque", "Lush Jogging Tracks", "Resort-Style Living", "Cooperative Staff"],
    createdAt: "2026-10-01",
    helpfulCount: 39,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    photoUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mc-rev-2005",
    authorName: "Engr. Salman Butt",
    authorRole: "Tenant",
    block: "Block C",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 4,
    },
    title: "Clean drinking water RO plants and disciplined security guards",
    reviewText:
      "Even as a tenant family, the society treats every resident with equal dignity and respect. Free, ultra-pure RO mineral water filtration plants in every sector save thousands of rupees every month. The security guards at the main entry check every stranger with polite verification.",
    highlights: ["Pure RO Plants", "Respectful Community", "Low Utility Stress", "Safe Environment"],
    createdAt: "2026-09-18",
    helpfulCount: 29,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "mc-rev-2006",
    authorName: "Tariq Mahmood Bajwa",
    authorRole: "Plot Owner",
    block: "Royal Villas",
    rating: 5,
    subRatings: {
      security: 5,
      electricity: 5,
      maintenance: 5,
      greenery: 5,
    },
    title: "Possession handed over on promised timeline — unmatched credibility",
    reviewText:
      "In the real estate market of Pakistan, developers rarely deliver infrastructure on time. Master City is the golden exception. I received possession of my villa with carpeted roads, underground electricity transformers, and sewerage line already operational before the deadline. CEO Ghulam Mustafa Sahib has proven his vision with action.",
    highlights: ["Timely Possession", "100% Underground Grid", "High Trust & Transparency", "Solid Build"],
    createdAt: "2026-09-12",
    helpfulCount: 53,
    isVerified: true,
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
];

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "sos-control-room",
    title: "24/7 Society Command & Control",
    subtitle: "Central Emergency Dispatch & Security Hotline",
    phone: "+92 55 111-627-837",
    whatsapp: "+92 300 0741111",
    iconName: "ShieldAlert",
    available: "24 Hours / 7 Days",
    priority: "emergency",
  },
  {
    id: "sos-medical",
    title: "Resident Ambulance & First Aid",
    subtitle: "On-site Society Medical Trauma Van",
    phone: "+92 300 1234112",
    whatsapp: "+92 300 1234112",
    iconName: "Ambulance",
    available: "Immediate Rapid Response",
    priority: "emergency",
  },
  {
    id: "sos-fire",
    title: "Fire & Rescue Brigade",
    subtitle: "Society Fire Tender & Emergency Extinguisher Unit",
    phone: "+92 300 9988115",
    iconName: "Flame",
    available: "24 Hours Standby",
    priority: "emergency",
  },
  {
    id: "sos-electrical",
    title: "Electrical Grid & Transformer Cell",
    subtitle: "Underground Feeder & Transformer Emergency",
    phone: "+92 300 9876543",
    whatsapp: "+92 300 9876543",
    iconName: "Zap",
    available: "24/7 Field Electricians",
    priority: "urgent",
  },
  {
    id: "sos-water",
    title: "Water Supply & Emergency Bowser",
    subtitle: "Direct Water Supply & Filtration Station",
    phone: "+92 312 3456789",
    iconName: "Droplet",
    available: "6:00 AM – 11:00 PM",
    priority: "urgent",
  },
  {
    id: "sos-gate",
    title: "Gate 1 & Gate 2 Security Squad",
    subtitle: "Main Entrance Checkpoint & Guest Clearance",
    phone: "+92 300 1112222",
    iconName: "KeyRound",
    available: "24 Hours Active",
    priority: "standard",
  },
];

export const societyAnnouncements: SocietyAnnouncement[] = [
  {
    id: "ann-1",
    title: "Grand Juma'h Congregation & Special Taraweeh Schedule",
    date: "October 14, 2026",
    category: "Community",
    summary:
      "All residents are cordially invited to the Grand Jamia Mosque. Khutbah begins at 1:15 PM sharp. Valet and organized parking will be managed by security squads.",
  },
  {
    id: "ann-2",
    title: "Smart RFID Vehicle Tag Registration Campaign for Overseas & Block A",
    date: "October 12, 2026",
    category: "Important",
    summary:
      "Fast-track RFID registration counter is active at the Society Main Customer Care Center. Residents can collect their windshield tags with vehicle registration proof.",
  },
  {
    id: "ann-3",
    title: "Annual Autumn Horticulture & Flower Exhibition at Theme Park",
    date: "October 18-20, 2026",
    category: "Event",
    summary:
      "Featuring over 40 species of blooming seasonal flowers, family food stalls, children's amusement rides, and special musical fountain lighting shows.",
  },
  {
    id: "ann-4",
    title: "Bi-Weekly Water Reservoir Flushing & RO Filter Sanitation",
    date: "October 16, 2026",
    category: "Maintenance",
    summary:
      "Scheduled preventive maintenance of overhead tanks in Sector B & C. Normal supply will remain uninterrupted via auxiliary ground reservoirs.",
  },
];

export const liveUtilityStatus = [
  {
    label: "Underground Power Grid",
    status: "100% Operational",
    detail: "Zero load-shedding with automatic heavy diesel generators standby",
    isHealthy: true,
  },
  {
    label: "Water Supply & RO Plants",
    status: "Optimal Pressure (45 PSI)",
    detail: "All 8 sector filtration plants providing certified mineral quality",
    isHealthy: true,
  },
  {
    label: "Security & AI Surveillance",
    status: "High Vigilance Active",
    detail: "450+ HD CCTV cameras online, 18 mobile patrol vehicles patrolling",
    isHealthy: true,
  },
  {
    label: "Doorstep Sanitation Fleet",
    status: "Daily Schedule 98% Done",
    detail: "Compactor trucks completed morning route across all blocks",
    isHealthy: true,
  },
];
