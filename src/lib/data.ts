export const IMG = {
  heroStage:
    "https://image.qwenlm.ai/generated-images/3f5725f7-279b-4afa-94b7-c046e7378c61/_result.png",
  corporate:
    "https://image.qwenlm.ai/generated-images/e240e937-b8f5-44d2-9b78-71cdaf33f060/_result.png",
  wedding:
    "https://image.qwenlm.ai/generated-images/d8241f74-93a9-4406-b719-20e6db8fec94/_result.png",
  concert:
    "https://image.qwenlm.ai/generated-images/b8a8218f-e825-4d5e-8ae6-73b9d0d78cb1/_result.png",
  launch:
    "https://image.qwenlm.ai/generated-images/e3c92708-0bb6-41f3-a147-f6b9d3d0adf3/_result.png",
  expo:
    "https://image.qwenlm.ai/generated-images/c2dcf210-276c-4eb9-ba23-824ccc989257/_result.png",
  hoarding:
    "https://image.qwenlm.ai/generated-images/bfa4d70a-4374-406f-8860-cfe5c2327999/_result.png",
  branding:
    "https://image.qwenlm.ai/generated-images/b2eb1e66-3c39-46fe-bca4-b8398fb45921/_result.png",
};

export const PHONE_DISPLAY = "+91 90225 53637";
export const PHONE_TEL = "tel:+919022553637";
export const WHATSAPP = "https://wa.me/919022553637";
export const MAPS_LINK = "https://maps.app.goo.gl/uLDt9LHX9Juy5i2L7";
export const MAP_EMBED =
  "https://www.google.com/maps?q=Pimpalgaon%20Road%2C%20Nashik%2C%20Maharashtra&output=embed";
export const EMAIL = "hello@akshantevents.in";
export const ADDRESS = "Pimpalgaon Road, Near Dwarka Circle, Nashik, Maharashtra 422011";

/* ---------------- services ---------------- */

export type Service = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  bullets: string[];
  icon: string;
  quoteType: string;
};

export const AD_SERVICES: Service[] = [
  {
    id: "hoardings",
    name: "Hoarding & OOH Media",
    tag: "Out-of-home",
    desc: "Prime unipoles, hoardings and bus-shelter panels across Nashik, Sinnar, Ozar and the Mumbai–Agra highway corridor. Owned sites plus negotiated media, with site recce photos before you commit.",
    bullets: [
      "40+ owned & partner sites across Nashik district",
      "Print, mount & maintain included",
      "Monthly geo-wise campaign reports",
      "Illuminated & non-illuminated options",
    ],
    icon: "hoarding",
    quoteType: "Hoarding / OOH",
  },
  {
    id: "vehicle",
    name: "Vehicle & Fleet Branding",
    tag: "Moving media",
    desc: "Full wraps, part wraps and vinyl graphics for cars, tempos, school vans and full fleets — printed in-house and applied at our Pimpalgaon Road workshop with RTO-compliant layouts.",
    bullets: [
      "3M-grade vinyl with 3-yr outdoor life",
      "Fleet onboarding in 48–72 hours",
      "RTO-compliant design & paperwork help",
      "Removal without paint damage",
    ],
    icon: "van",
    quoteType: "Vehicle Branding",
  },
  {
    id: "signage",
    name: "Glow Signs & Acrylic Lettering",
    tag: "Storefront",
    desc: "Backlit glow signs, 3D acrylic letters, neon-flex and ACP cladding that make a shopfront impossible to miss — fabricated and installed by our own fitters.",
    bullets: [
      "LED modules with 2-yr warranty",
      "3D letters in acrylic, SS & MDF",
      "Neon-flex for cafés & studios",
      "Night-time visibility audits",
    ],
    icon: "glow",
    quoteType: "Signage & Glow Sign",
  },
  {
    id: "print",
    name: "Flex, Print & Fabrication Studio",
    tag: "In-house press",
    desc: "Our 3,200 sq ft press runs large-format flex, vinyl, sunboard, standees, backdrops and wedding welcome boards — same-day delivery for most jobs in Nashik city.",
    bullets: [
      "Eco-solvent + UV flatbed printing",
      "Standees, roll-ups, backlit frames",
      "Stage backdrops up to 60 ft wide",
      "Same-day city delivery",
    ],
    icon: "printer",
    quoteType: "Flex & Print",
  },
  {
    id: "shopbranding",
    name: "Shop Branding & Facades",
    tag: "Retail",
    desc: "End-to-end shop makeovers: facade design, ACP cladding, window graphics, menu boards and in-store branding for franchises, jewellers, showrooms and clinics.",
    bullets: [
      "Facade design in 3D before build",
      "ACP cladding & canopies",
      "Window & glass graphics",
      "Multi-outlet rollout management",
    ],
    icon: "store",
    quoteType: "Shop Branding",
  },
  {
    id: "digital",
    name: "Digital & Social Creatives",
    tag: "Always-on",
    desc: "The offline look, carried online — social creatives, ad films, Google/Insta campaigns and WhatsApp launch kits that match your hoardings frame to frame.",
    bullets: [
      "Monthly creative calendars",
      "15-sec ad films & reels",
      "Meta + Google campaign setup",
      "Lead dashboards you can read",
    ],
    icon: "monitor",
    quoteType: "Digital Ads",
  },
];

export const EVENT_SERVICES: Service[] = [
  {
    id: "corporate",
    name: "Corporate Events & Conferences",
    tag: "Work hard",
    desc: "Annual meetings, dealer summits, townhalls and award nights — from LED-wall staging and registration desks to anchors, artistes and after-parties.",
    bullets: [
      "Full venue scouting & tie-ups",
      "LED walls, sound & lighting rigs",
      "Anchor, DJ & artiste booking",
      "Registration & guest management",
    ],
    icon: "stage",
    quoteType: "Corporate Event",
  },
  {
    id: "weddings",
    name: "Weddings & Celebrations",
    tag: "Play hard",
    desc: "Haldi to reception under one contract. Mandap decor, lighting, catering coordination, baraat logistics and a show-caller who keeps the pandit and the DJ on the same clock.",
    bullets: [
      "Theme mandaps & stage decor",
      "Haldi / sangeet / reception plans",
      "Catering & vendor coordination",
      "Drone + cinema photography",
    ],
    icon: "rings",
    quoteType: "Wedding",
  },
  {
    id: "launches",
    name: "Product & Store Launches",
    tag: "First day",
    desc: "Unveilings that trend locally — ribbon-cutting choreography, influencer invites, live demo zones, media kits and a hoarding plan that warms up the city beforehand.",
    bullets: [
      "Unveil choreography & staging",
      "Media & influencer invitations",
      "Pre-launch OOH + digital burst",
      "Live demo & experience zones",
    ],
    icon: "spark",
    quoteType: "Product Launch",
  },
  {
    id: "concerts",
    name: "Concerts & Entertainment Nights",
    tag: "Full volume",
    desc: "DJ nights, college fests, Ganeshotsav programmes and public shows with concert-grade sound, line-array lighting, barricading, passes and crowd-flow planning.",
    bullets: [
      "Line-array sound & lighting",
      "DJ / artiste booking & rider handling",
      "Barricading, passes & security plan",
      "Ticketing & gate management",
    ],
    icon: "mic",
    quoteType: "Concert / DJ Night",
  },
  {
    id: "expos",
    name: "Exhibitions & Expo Stalls",
    tag: "Floor space",
    desc: "Custom stall fabrication for trade fairs at CIDCO and beyond — backlit counters, product theatres, lead-capture desks and teardown, all on the expo's strict clock.",
    bullets: [
      "Custom stall design in 3D",
      "Fabrication, transport & setup",
      "Lead-capture desk & staffing",
      "Overnight teardown handled",
    ],
    icon: "booth",
    quoteType: "Expo Stall",
  },
  {
    id: "public",
    name: "School, Sports & Public Events",
    tag: "Community",
    desc: "Annual days, sports meets, blood-donation drives and municipal programmes — budgets respected, permissions handled, and a show that families remember.",
    bullets: [
      "Annual day & sports meet kits",
      "Permission & liaison support",
      "Trophies, medals & mementos",
      "Budget-first planning",
    ],
    icon: "trophy",
    quoteType: "Public / School Event",
  },
];

/* ---------------- work / portfolio ---------------- */

export type WorkItem = {
  id: string;
  title: string;
  client: string;
  category: "Events" | "Advertising";
  tags: string[];
  location: string;
  year: string;
  img: string;
  tall?: boolean;
};

export const WORK: WorkItem[] = [
  {
    id: "w1",
    title: "Annual Dealers' Summit 2025",
    client: "Godavari Motors",
    category: "Events",
    tags: ["Corporate", "Conference", "800 pax"],
    location: "Express Inn, Nashik",
    year: "2025",
    img: IMG.corporate,
    tall: true,
  },
  {
    id: "w2",
    title: "Kulkarni × Deshpande Wedding",
    client: "Private client",
    category: "Events",
    tags: ["Wedding", "Mandap", "3-day"],
    location: "Lawns off Gangapur Rd",
    year: "2024",
    img: IMG.wedding,
  },
  {
    id: "w3",
    title: "Bass Drop Nashik — DJ Night",
    client: "BlueKite Cinemas",
    category: "Events",
    tags: ["Concert", "DJ", "4,000 crowd"],
    location: "CIDCO Grounds",
    year: "2025",
    img: IMG.concert,
  },
  {
    id: "w4",
    title: "EV Launch & City Takeover",
    client: "BlueKite EV",
    category: "Advertising",
    tags: ["Launch", "Hoarding", "OOH"],
    location: "College Rd + 12 city sites",
    year: "2025",
    img: IMG.launch,
  },
  {
    id: "w5",
    title: "Nashik Trade Expo — Stall 14",
    client: "Trimbak Agro",
    category: "Events",
    tags: ["Expo", "Stall build", "Lead desk"],
    location: "CIDCO Exhibition Centre",
    year: "2024",
    img: IMG.expo,
  },
  {
    id: "w6",
    title: "Junction Hoarding Blitz",
    client: "Orchid Mall",
    category: "Advertising",
    tags: ["OOH", "Unipole", "30-day"],
    location: "Pimpalgaon Rd junction",
    year: "2025",
    img: IMG.hoarding,
  },
  {
    id: "w7",
    title: "Fleet Wrap — 26 Delivery Vans",
    client: "Nashik Mart",
    category: "Advertising",
    tags: ["Fleet", "Vinyl wrap", "48-hr"],
    location: "Akshant Workshop",
    year: "2024",
    img: IMG.branding,
  },
  {
    id: "w8",
    title: "Sangeet Night Under Beams",
    client: "More–Joshi families",
    category: "Events",
    tags: ["Sangeet", "Lighting", "600 pax"],
    location: "Pimpalgaon Rd lawns",
    year: "2025",
    img: IMG.heroStage,
  },
];

export const WORK_FILTERS = [
  "All",
  "Events",
  "Advertising",
  "Corporate",
  "Wedding",
  "Concert",
  "Expo",
  "OOH",
  "Fleet",
];

/* ---------------- packages ---------------- */

export type Package = {
  id: string;
  name: string;
  marathi: string;
  price: string;
  per: string;
  scale: string;
  popular?: boolean;
  features: string[];
  note: string;
};

export const EVENT_PACKAGES: Package[] = [
  {
    id: "utsav",
    name: "Utsav",
    marathi: "उत्सव",
    price: "₹75,000",
    per: "starting",
    scale: "Up to 200 guests",
    features: [
      "Stage & backdrop décor (12×8 ft)",
      "Basic sound system + 2 wireless mics",
      "Entry arch & welcome board",
      "LED string + warm lighting",
      "1 event coordinator on-ground",
      "Photography (1 photographer, 6 hrs)",
      "Flex printing for all creatives",
    ],
    note: "Best for haldi, anniversaries, shop openings & small corporate functions.",
  },
  {
    id: "shubh",
    name: "Shubh",
    marathi: "शुभ",
    price: "₹1,80,000",
    per: "starting",
    scale: "Up to 600 guests",
    popular: true,
    features: [
      "Theme stage + mandap décor (20×12 ft)",
      "Full sound rig + DJ with controller",
      "Truss lighting with moving heads",
      "Anchor / emcee for the evening",
      "Catering coordination (per-plate tie-ups)",
      "3 coordinators + show caller",
      "Photo + cinematography (8 hrs)",
      "Invitation design + 500 printed cards",
      "Backup generator on standby",
    ],
    note: "Our most-booked plan — full wedding receptions & corporate annual days.",
  },
  {
    id: "royal",
    name: "Royal Baarahat",
    marathi: "बाराहात",
    price: "₹4,50,000+",
    per: "custom quote",
    scale: "Up to 2,000 guests",
    features: [
      "Designer multi-zone décor & mandap",
      "Line-array concert sound + LED wall",
      "Celebrity anchor / artiste booking",
      "Drone shoot + 3-camera cinema unit",
      "Full vendor command centre",
      "Fireworks / cold-pyros (with permits)",
      "Guest RSVP & valet management",
      "City-wide pre-event hoarding blast",
      "Dedicated producer, 30-day runway",
    ],
    note: "Destiny weddings, big launches and public shows — everything on one contract.",
  },
];

export const AD_PACKAGES: Package[] = [
  {
    id: "buzz",
    name: "Street Buzz",
    marathi: "गल्ली",
    price: "₹25,000",
    per: "per month",
    scale: "5 OOH sites",
    features: [
      "5 hoarding / banner sites in Nashik",
      "Creative design (2 concepts)",
      "Print + mount + maintenance",
      "1 shopfront glow-sign refresh",
      "Monthly photo-proof report",
    ],
    note: "For clinics, coaching classes, restaurants & local retail.",
  },
  {
    id: "blitz",
    name: "Brand Blitz",
    marathi: "दणका",
    price: "₹60,000",
    per: "per month",
    scale: "12 OOH sites + fleet",
    popular: true,
    features: [
      "12 hoardings incl. 2 unipoles",
      "Branding for up to 6 vehicles",
      "Social creatives (12 posts + 4 reels)",
      "WhatsApp launch broadcast kit",
      "Flex standees for 3 partner outlets",
      "Fortnightly campaign review call",
    ],
    note: "For showrooms, jewellers, real estate & franchise rollouts.",
  },
  {
    id: "takeover",
    name: "City Takeover",
    marathi: "शहर",
    price: "₹1,20,000+",
    per: "per month",
    scale: "25+ sites citywide",
    features: [
      "25+ hoardings incl. highway unipoles",
      "Bus-shelter & auto branding add-ons",
      "Launch event with media invites",
      "Meta + Google performance campaigns",
      "Ad film (15 sec) & press kit",
      "Weekly lead & reach dashboards",
      "Dedicated account manager",
    ],
    note: "For launches, mall festives & brands that want the whole city looking.",
  },
];

export const ADDONS = [
  "Drone shoot — ₹8,000",
  "Cold pyros / fireworks — ₹15,000",
  "Celebrity anchor — on request",
  "Extra hoarding week — ₹4,500/site",
  "Photo booth with prints — ₹12,000",
  "Live LED telecast van — ₹25,000",
  "Baraat band & dhol pathak — ₹9,000",
  "Neon-flex welcome sign — ₹6,500",
];

/* ---------------- clients ---------------- */

export type Client = { name: string; short: string; geo: string };

export const CLIENTS: Client[] = [
  { name: "Godavari Motors", short: "GM", geo: "●" },
  { name: "Orchid Mall", short: "OM", geo: "▲" },
  { name: "Trimbak Agro", short: "TA", geo: "◆" },
  { name: "Nashik Mart", short: "NM", geo: "■" },
  { name: "Kalpana Jewels", short: "KJ", geo: "✦" },
  { name: "BlueKite Cinemas", short: "BK", geo: "●" },
  { name: "Deccan Fitness", short: "DF", geo: "▲" },
  { name: "Sahyadri Textiles", short: "ST", geo: "◆" },
  { name: "Metro Mart", short: "MM", geo: "■" },
  { name: "Ritu Clinics", short: "RC", geo: "✦" },
];

/* ---------------- testimonials ---------------- */

export const TESTIMONIALS = [
  {
    quote:
      "Our dealers' summit had 800 people, 3 LED walls and zero hiccups. Akshant's show-caller ran it like a TV broadcast. The hoarding campaign before the summit doubled our walk-ins that month.",
    name: "Sneha Patil",
    role: "HR & Admin Head, Godavari Motors",
    tag: "Corporate Summit + OOH",
  },
  {
    quote:
      "Three days of wedding functions, one contract, and my only job was to enjoy it. The mandap looked exactly like the 3D design — if not better. Their team even managed the baraat traffic!",
    name: "Rajesh Kulkarni",
    role: "Father of the groom, Nashik",
    tag: "Royal Baarahat package",
  },
  {
    quote:
      "We took the City Takeover plan for our festive sale. 25 hoardings, auto branding, social creatives — Nashik literally could not miss us. Footfall up 40% year on year.",
    name: "Amit Deshmukh",
    role: "Marketing Manager, Orchid Mall",
    tag: "City Takeover retainer",
  },
  {
    quote:
      "As a school we work on tight budgets. They planned our annual day to the rupee, handled permissions, and the parents are still talking about the lighting. Rare combination of craft and honesty.",
    name: "Dr. Vaishali More",
    role: "Principal, Sunrise Public School",
    tag: "Annual Day — Utsav plan",
  },
];

/* ---------------- misc ---------------- */

export const STATS = [
  { value: 5.0, decimals: 1, suffix: "", label: "Google rating" },
  { value: 141, decimals: 0, suffix: "+", label: "Google reviews" },
  { value: 250, decimals: 0, suffix: "+", label: "Events produced" },
  { value: 400, decimals: 0, suffix: "+", label: "Ad campaigns" },
  { value: 12, decimals: 0, suffix: " yrs", label: "On Pimpalgaon Rd" },
];

export const TICKER = [
  "Hoardings",
  "Weddings",
  "Corporate Summits",
  "Flex Printing",
  "DJ Nights",
  "Vehicle Branding",
  "Expo Stalls",
  "Glow Signs",
  "Product Launches",
  "Fleet Wraps",
];

export const TIMELINE = [
  {
    year: "2013",
    title: "A print shop on Pimpalgaon Road",
    text: "Akshant starts as a two-machine flex printing unit serving local shops — banners by day, wedding boards by night.",
  },
  {
    year: "2016",
    title: "First 1,000-pax event",
    text: "A textile association annual day goes so well that three more corporate bookings follow in the same quarter.",
  },
  {
    year: "2019",
    title: "40-site OOH network",
    text: "We stop renting other people's hoardings and start building our own — unipoles on the Mumbai–Agra highway corridor.",
  },
  {
    year: "2022",
    title: "Weddings & celebrations wing",
    text: "A dedicated wedding team, 3D mandap design studio and vendor network across Nashik, Sinnar & Ozar.",
  },
  {
    year: "2025",
    title: "5.0 ★ with 141 reviews",
    text: "Nashik's highest-rated ads-and-events team. Private limited, fully insured, and still answering the phone ourselves.",
  },
];

export const PROCESS = [
  {
    step: "01",
    name: "Discover",
    text: "A call or a chai at our office. We understand the occasion, the audience, the budget line and the date — no jargon.",
  },
  {
    step: "02",
    name: "Design",
    text: "3D stage renders, décor mood boards, media maps for hoardings. You approve exactly what you'll get, frame by frame.",
  },
  {
    step: "03",
    name: "Produce",
    text: "Printing, fabrication, vendor lock-ins and permissions — all running in our own workshop and command sheet.",
  },
  {
    step: "04",
    name: "Showtime",
    text: "A show-caller runs the clock on the day. You greet guests; we chase generators, DJs and caterers so you never have to.",
  },
];

export const VALUES = [
  {
    icon: "pin",
    name: "Local first",
    text: "Nashik-born. We know which junction gets evening traffic, which lawn floods in July, and which caterer over-salts the sabzi.",
  },
  {
    icon: "bolt",
    name: "Own the chaos",
    text: "Rain plan, power plan, plan C. Every show we run carries written contingencies — boring on paper, magical on the day.",
  },
  {
    icon: "diamond",
    name: "Craft over cut-rate",
    text: "Our flex doesn't fade in a fortnight and our stages don't creak. In-house workshop means we control quality ourselves.",
  },
  {
    icon: "clock",
    name: "Show up early",
    text: "If the event is at 7, the stage lights are tested by 3. Punctuality is the cheapest luxury in this business — we give it free.",
  },
];

export const FAQS = [
  {
    q: "How far in advance should we book an event?",
    a: "For weddings and large corporate events, 45–60 days is comfortable. Smaller functions can be done in 10–15 days, and we've pulled off respectable shop openings in 72 hours. Peak wedding dates (Nov–Feb) fill fastest, so earlier is safer.",
  },
  {
    q: "Do you handle permissions and licences?",
    a: "Yes — we prepare and submit applications for sound permissions, temporary structures, fire NOC and police intimation, and liaise with local authorities. Statutory fees are billed at actuals with receipts.",
  },
  {
    q: "Can hoarding campaigns be booked for just 2 weeks?",
    a: "Most of our sites have a 15-day minimum, though highway unipoles usually run 30 days. The Street Buzz plan is built exactly for short, sharp local bursts.",
  },
  {
    q: "Do you work outside Nashik?",
    a: "Regularly. We've produced events in Sinnar, Ozar, Igatpuri, Shirdi and Trimbak, and run OOH campaigns on the Mumbai–Agra highway corridor. Travel and stay for crew are quoted transparently up front.",
  },
  {
    q: "What does 'lead tracking' mean on your quote page?",
    a: "Every quote request gets a reference number (like AKX-2026-0147). Our Lead Desk shows where your enquiry stands — New, Contacted, Quoted or Booked — so nothing ever falls into a WhatsApp void.",
  },
  {
    q: "Is there a payment plan?",
    a: "Yes. Standard terms are 40% on booking, 40% a week before the event and 20% after. Advertising retainers are monthly in advance. GST invoices for everything.",
  },
];

/* ---------------- leads (local demo CRM) ---------------- */

export type LeadStatus = "New" | "Contacted" | "Quoted" | "Booked";
export const LEAD_STATUSES: LeadStatus[] = ["New", "Contacted", "Quoted", "Booked"];

export type Lead = {
  id: string;
  ref: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  date: string;
  scale: string;
  budget: string;
  message: string;
  status: LeadStatus;
  createdAt: number;
};

export const QUOTE_TYPES = [
  "Corporate Event",
  "Wedding",
  "Concert / DJ Night",
  "Product Launch",
  "Expo Stall",
  "Public / School Event",
  "Hoarding / OOH",
  "Vehicle Branding",
  "Signage & Glow Sign",
  "Flex & Print",
  "Shop Branding",
  "Digital Ads",
  "Something else",
];

export const SEED_LEADS: Omit<Lead, "id" | "createdAt">[] = [
  {
    ref: "AKX-2026-0142",
    name: "Prakash Ahire",
    phone: "+91 98765 22310",
    email: "p.ahire@sahyadritex.co.in",
    type: "Corporate Event",
    date: "2026-03-14",
    scale: "≈ 450 guests",
    budget: "₹3–5 Lakh",
    message: "Annual day + dealer meet at one venue in Nashik. Need LED wall and anchor.",
    status: "Quoted",
  },
  {
    ref: "AKX-2026-0145",
    name: "Neha & Sagar Joshi",
    phone: "+91 91560 88214",
    email: "neha.joshi@gmail.com",
    type: "Wedding",
    date: "2026-11-27",
    scale: "≈ 900 guests",
    budget: "₹8–12 Lakh",
    message: "3-day wedding near Gangapur. Interested in Shubh + Royal mix. Drone shoot a must.",
    status: "Contacted",
  },
];
