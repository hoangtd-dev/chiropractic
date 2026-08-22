import type { NavLink, OpeningHour, SocialLink } from "@/types";

export const SITE_NAME = "Bodyology Chiropractic";

export const SITE_TAGLINE = "Better Flow. Better Life.";

export const SITE_DESCRIPTION =
  "We provide personalised chiropractic care to help you move better, feel better and get back to doing the things you enjoy.";

export const SITE_URL = "https://www.bodyologychiropractic.com.au";

export const BOOKING_URL = "#booking";

export const HERO_IMAGE = "/images/hero.jpg";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
];


export const PRACTITIONER = {
  name: "Dr. Dong Tran",
  role: "Chiropractor",
  intro: [
    "At Bodyology Chiropractic, we are passionate about helping people move and live better through personalised, evidence-informed chiropractic care.",
    "We take the time to find the root cause of pain and create a treatment plan tailored to each person's goals.",
  ],
  credentials: [
    "Master of Chiropractic – Macquarie University",
    "AHPRA Registered – Chiropractor",
    "Dry Needling Certified",
    "Committed to ongoing education and patient outcomes",
  ],
};

export const ADDRESS = {
  street: "Suite 3.06, 5 Celebration Drive",
  suburb: "Bella Vista",
  state: "NSW",
  postcode: "2153",
  country: "AU",
};

export const PHONE_E164 = "+61466353888";

export const CONTACT = {
  phone: "0466 353 888",
  email: "info@bodyologychiropractic.com.au",
  website: "www.bodyologychiropractic.com.au",
  addressLines: [
    ADDRESS.street,
    `${ADDRESS.suburb} ${ADDRESS.state} ${ADDRESS.postcode}`,
  ],
  parking: "Free parking available on-site.",
  region: "Bella Vista, NSW",
};

export const OPENING_HOURS: OpeningHour[] = [
  { days: "Mon – Fri", hours: "8:00am – 6:00pm" },
  { days: "Saturday", hours: "8:00am – 2:00pm" },
  { days: "Sunday", hours: "Closed" },
];

export const OPENING_HOURS_SPEC = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  { days: ["Saturday"], opens: "08:00", closes: "14:00" },
];

export const MAP_QUERY = `${SITE_NAME}, ${CONTACT.addressLines.join(", ")}`;

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;
