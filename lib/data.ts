export const WHATSAPP_NUMBER = "923313767837";

export const site = {
  name: "Porter Pakistan",
  tagline: "Travel with freedom",
  description:
    "Pakistan's first one stop solution for travel enthusiasts looking to book travel services.",
  phones: ["+92 330 2767837", "+92 331 3767837"],
  phoneLinks: ["+923302767837", "+923313767837"],
  email: "info@porterpakistan.com",
  socials: [
    { label: "Facebook", href: "https://facebook.com/PorterPakistanOfficial" },
    { label: "Instagram", href: "https://instagram.com/PorterPakistanOfficial" },
    { label: "TikTok", href: "https://www.tiktok.com/@porterpakistan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/porter-pakistan" },
    { label: "X", href: "https://twitter.com/PorterPakistan" },
  ],
  apps: {
    ios: "https://apps.apple.com/us/app/porter-pakistan/id1661225211",
    android:
      "https://play.google.com/store/apps/details?id=com.application.porterpakistan&hl=en&gl=US",
  },
  sharkTank: "https://www.youtube.com/watch?v=HFkhfvnZjeo",
};

export const stats = [
  { value: "1M+", label: "km travelled" },
  { value: "75+", label: "destinations" },
  { value: "150+", label: "verified hotels" },
  { value: "5.0", label: "user rating" },
];

export type ArtKind = "mountain" | "lake" | "valley" | "city" | "beach" | "farm";

export type Region =
  | "Hunza & Gilgit"
  | "Skardu & Deosai"
  | "Swat & Kalam"
  | "Murree & Galiyat"
  | "Kaghan & Kashmir"
  | "Cities";

export const regions: Region[] = [
  "Hunza & Gilgit",
  "Skardu & Deosai",
  "Swat & Kalam",
  "Murree & Galiyat",
  "Kaghan & Kashmir",
  "Cities",
];

export type Destination = {
  slug: string;
  name: string;
  blurb: string;
  from: number | null; // PKR per person
  region: Region;
  kind: ArtKind;
  /** true = only offered inside the Trip Designer, not in the destination grid */
  designerOnly?: boolean;
};

export const destinations: Destination[] = [
  { slug: "hunza", name: "Hunza", blurb: "Famous valley with majestic mountain scenery", from: 17000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "karimabad-hunza", name: "Karimabad, Hunza", blurb: "Historic town with forts in Hunza", from: 28000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "attabad-lake", name: "Attabad Lake", blurb: "Stunning turquoise lake in Hunza valley", from: 65000, region: "Hunza & Gilgit", kind: "lake" },
  { slug: "passu", name: "Passu", blurb: "Village known for cones and mountain peaks", from: 78000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "gulmit", name: "Gulmit", blurb: "Quiet village along Hunza river valley", from: 23000, region: "Hunza & Gilgit", kind: "valley" },
  { slug: "hussaini-bridge", name: "Hussaini Bridge", blurb: "Thrilling suspension bridge over Hunza river", from: 32000, region: "Hunza & Gilgit", kind: "lake" },
  { slug: "eagle-nest-hunza", name: "Eagle's Nest Hunza", blurb: "Scenic viewpoint overlooking Hunza valley landscapes", from: 33000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "khunjerab", name: "Khunjerab", blurb: "Highest paved border crossing in the world", from: 36000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "gilgit", name: "Gilgit", blurb: "Mountain city gateway to northern Pakistan", from: 51000, region: "Hunza & Gilgit", kind: "mountain" },
  { slug: "naltar-valley", name: "Naltar Valley", blurb: "Colorful valley known for lakes and forests", from: 67000, region: "Hunza & Gilgit", kind: "lake" },
  { slug: "skardu", name: "Skardu", blurb: "Gateway to mountains and stunning lakes region", from: 27000, region: "Skardu & Deosai", kind: "lake" },
  { slug: "shigar", name: "Shigar", blurb: "Historic valley with forts and desert landscapes", from: 36000, region: "Skardu & Deosai", kind: "valley" },
  { slug: "deosai", name: "Deosai", blurb: "High altitude plains with wildlife beauty", from: 22000, region: "Skardu & Deosai", kind: "valley" },
  { slug: "sheosar-lake", name: "Sheosar Lake", blurb: "Serene lake located in Deosai plains", from: 53000, region: "Skardu & Deosai", kind: "lake" },
  { slug: "kalam", name: "Kalam", blurb: "Lush green valley with rivers and forests", from: 23000, region: "Swat & Kalam", kind: "valley" },
  { slug: "mahodand-lake", name: "Mahodand Lake", blurb: "Beautiful alpine lake in upper Kalam region", from: 45000, region: "Swat & Kalam", kind: "lake" },
  { slug: "malam-jabba", name: "Malam Jabba", blurb: "Popular ski resort with scenic mountain views", from: 31000, region: "Swat & Kalam", kind: "mountain" },
  { slug: "timergara", name: "Timergara", blurb: "Gateway to Swat and Kumrat", from: null, region: "Swat & Kalam", kind: "valley" },
  { slug: "murree", name: "Murree", blurb: "Famous hill station with cool climate views", from: 12000, region: "Murree & Galiyat", kind: "valley" },
  { slug: "nathia-gali", name: "Nathia Gali", blurb: "Charming hill station with pine forest views", from: 26000, region: "Murree & Galiyat", kind: "valley" },
  { slug: "bhurban", name: "Bhurban", blurb: "Peaceful hill station near Murree hills", from: 33000, region: "Murree & Galiyat", kind: "valley" },
  { slug: "naran", name: "Naran", blurb: "Popular tourist valley with lakes and rivers", from: 35000, region: "Kaghan & Kashmir", kind: "lake" },
  { slug: "ratti-gali", name: "Ratti Gali", blurb: "Glacial lake with breathtaking alpine surroundings", from: 72000, region: "Kaghan & Kashmir", kind: "lake" },
  { slug: "muzaffarabad", name: "Muzaffarabad", blurb: "Capital of Azad Kashmir with scenic beauty", from: 45000, region: "Kaghan & Kashmir", kind: "valley" },
  { slug: "islamabad", name: "Islamabad", blurb: "Capital city with modern and natural charm", from: 51000, region: "Cities", kind: "city" },
  { slug: "lahore", name: "Lahore", blurb: "Cultural hub with history and vibrant food", from: 23000, region: "Cities", kind: "city" },
  // Only used by the Trip Designer (matches the Swat and Kashmir packages)
  { slug: "swat", name: "Swat", blurb: "Often called the Switzerland of Pakistan", from: null, region: "Swat & Kalam", kind: "valley", designerOnly: true },
  { slug: "kashmir", name: "Kashmir & Neelum Valley", blurb: "Rolling hills, dense forests and serene rivers", from: null, region: "Kaghan & Kashmir", kind: "valley", designerOnly: true },
];

export const gridDestinations = destinations.filter((d) => !d.designerOnly);

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

export type Package = {
  id: string;
  days: number;
  title: string;
  destinationSlug: string;
  blurb: string;
  inclusions: string[];
  from: number; // PKR per person
  kind: ArtKind;
};

export const packages: Package[] = [
  {
    id: "hunza-6",
    days: 6,
    title: "Hunza, Attabad & Passu",
    destinationSlug: "hunza",
    blurb: "A charming valley known for its stunning mountain views and warm local culture. Ideal for scenic escapes, historic forts, and sunsets.",
    inclusions: ["5 nights of stay with breakfast", "6 days of vehicle with driver", "Fuel, toll taxes, parking fee", "Driver's allowance"],
    from: 51500,
    kind: "lake",
  },
  {
    id: "swat-3",
    days: 3,
    title: "Swat & Malam Jabba",
    destinationSlug: "swat",
    blurb: "Often called the Switzerland of Pakistan, filled with lush greenery and flowing rivers. A perfect retreat for relaxation and alpine scenery.",
    inclusions: ["2 nights of stay with breakfast", "3 days of vehicle with driver", "Fuel, toll taxes, parking fee", "Driver's allowance"],
    from: 25700,
    kind: "valley",
  },
  {
    id: "skardu-6",
    days: 6,
    title: "Skardu",
    destinationSlug: "skardu",
    blurb: "A breathtaking gateway to the Karakoram, surrounded by towering peaks and crystal-clear lakes. Perfect for nature and peaceful landscapes.",
    inclusions: ["5 nights of stay with breakfast", "6 days of vehicle with driver", "Fuel, toll taxes, parking fee", "Jeep routes: Sok Valley"],
    from: 54800,
    kind: "mountain",
  },
  {
    id: "kashmir-3",
    days: 3,
    title: "Kashmir & Neelum Valley",
    destinationSlug: "kashmir",
    blurb: "A paradise of rolling hills, dense forests, and serene rivers. Known for its romantic landscapes and tranquil escapes into untouched nature.",
    inclusions: ["2 nights of stay with breakfast", "3 days of vehicle with driver", "Fuel, toll taxes, parking fee", "Driver's allowance"],
    from: 22500,
    kind: "valley",
  },
];

export type Hotel = {
  slug: string;
  name: string;
  city: string;
  destinationSlug?: string;
  score: number;
  perNight: number;
  kind: ArtKind;
};

export const hotels: Hotel[] = [
  { slug: "diyar-resort", name: "Diyar Resort", city: "Dhirkot", score: 9, perNight: 13500, kind: "valley" },
  { slug: "famree-resort", name: "Famree Resort", city: "Attabad Lake", destinationSlug: "attabad-lake", score: 9, perNight: 26500, kind: "lake" },
  { slug: "cordillera-resort", name: "Cordillera Resort", city: "Balakot", score: 10, perNight: 13000, kind: "valley" },
  { slug: "rockcity-resort", name: "Rockcity Resort", city: "Swat", destinationSlug: "swat", score: 10, perNight: 14000, kind: "valley" },
  { slug: "hotel-reego", name: "Hotel Reego", city: "Skardu", destinationSlug: "skardu", score: 7.8, perNight: 10000, kind: "lake" },
  { slug: "ayun-fort", name: "Ayun Fort", city: "Chitral", score: 9.8, perNight: 17500, kind: "mountain" },
  { slug: "besham-hilton-hotel", name: "Besham Hilton Hotel", city: "Besham", score: 7.9, perNight: 13000, kind: "valley" },
  { slug: "hotel-elites", name: "Hotel Elites", city: "Nathia Gali", destinationSlug: "nathia-gali", score: 10, perNight: 24500, kind: "valley" },
  { slug: "frontier-tower", name: "Frontier Tower", city: "Malam Jabba", destinationSlug: "malam-jabba", score: 9.3, perNight: 9200, kind: "mountain" },
];

export const hotelCities = Array.from(new Set(hotels.map((h) => h.city)));

export type Review = { name: string; text: string };

export const reviews: Review[] = [
  { name: "Shoaib Aleem", text: "Huge thanks to Porter Pakistan for an unforgettable Skardu–Hunza trip with top-notch service that exceeded expectations." },
  { name: "Nawaz Malik", text: "Our 8-days Skardu and Hunza escapade was a resounding success, with flawless planning and friendly drivers!" },
  { name: "Muhammad Abdul Vassy", text: "Discover the hidden gems of Pakistan with Porter Pakistan, your one-stop solution for unforgettable adventures." },
  { name: "Zain ul Haq", text: "Huge shoutout Porter Pakistan for an unforgettable trip. Exceeding expectations for the third time." },
  { name: "Javeria Waqas Sheikh", text: "Porter Pakistan's meticulous planning and attention to detail made our Shogran trip unforgettable & flawless arrangements!" },
  { name: "Asma Khowaja", text: "Porter Pakistan team is super helpful. They ensured extra convenience for us on an all girls trip." },
  { name: "Farhan Khatri", text: "Brilliant customer service. Family friendly service providers. Very economical." },
  { name: "Waleed Sherwani", text: "Very localized experience. Extremely good prices." },
];

export const articles = [
  { title: "A Winter Trip to Swat Valley", tag: "Swat", href: "https://porterpakistan.com/a-winter-trip-to-swat-valley", kind: "valley" as ArtKind },
  { title: "Winter in Pakistan: The Destinations You Can't Miss", tag: "Murree", href: "https://porterpakistan.com/winter-in-pakistan-the-destinations-you-cant-miss", kind: "mountain" as ArtKind },
];

export type StayService = {
  slug: "car-rentals" | "beach-huts" | "farmhouses";
  label: string;
  title: string;
  intro: string;
  kind: ArtKind;
  cta: string;
  options: { name: string; note: string }[];
  steps: { title: string; text: string }[];
  notePlaceLabel: string;
  notePlacePlaceholder: string;
};

export const stayServices: Record<StayService["slug"], StayService> = {
  "car-rentals": {
    slug: "car-rentals",
    label: "Car Rental",
    title: "Explore Pakistan with flexible and affordable rentals",
    intro: "Drive through scenic routes with comfort. Every rental can come with a driver who knows the mountain roads, with fuel, tolls and parking handled for you.",
    kind: "mountain",
    cta: "Rent a car",
    options: [
      { name: "Sedan (Corolla)", note: "Comfortable for city trips and the Murree and Galiyat roads." },
      { name: "Group van (Hiace)", note: "Space for families and friend groups, with luggage room." },
      { name: "4x4 (Prado)", note: "For rough Karakoram routes and jeep tracks." },
    ],
    steps: [
      { title: "Tell us your route", text: "Pickup city, destination and dates." },
      { title: "Pick a vehicle", text: "Choose with or without a driver." },
      { title: "Get confirmation", text: "We confirm availability and the price on WhatsApp." },
    ],
    notePlaceLabel: "Pickup city and route",
    notePlacePlaceholder: "Islamabad to Hunza and back",
  },
  "beach-huts": {
    slug: "beach-huts",
    label: "Beach Huts",
    title: "Relax by the Arabian Sea",
    intro: "Cozy huts in Karachi and Gwadar for a day out or a weekend by the water. Experience coastal serenity without the planning.",
    kind: "beach",
    cta: "Book beach stay",
    options: [
      { name: "Karachi coast", note: "Quick weekend escapes close to the city." },
      { name: "Gwadar", note: "Quiet beaches and open sea views." },
    ],
    steps: [
      { title: "Choose your coast", text: "Karachi or Gwadar." },
      { title: "Share dates and group size", text: "Families and groups are both welcome." },
      { title: "Get confirmation", text: "We confirm the hut and the price on WhatsApp." },
    ],
    notePlaceLabel: "Preferred location",
    notePlacePlaceholder: "Karachi or Gwadar",
  },
  farmhouses: {
    slug: "farmhouses",
    label: "Farmhouses",
    title: "Unwind in green escapes across Punjab and Sindh",
    intro: "Experience rural hospitality and nature, with space for family gatherings, birthdays and quiet weekends away from the city.",
    kind: "farm",
    cta: "Find farmhouses",
    options: [
      { name: "Punjab", note: "Green fields and open lawns near the big cities." },
      { name: "Sindh", note: "Peaceful stays outside Karachi and Hyderabad." },
    ],
    steps: [
      { title: "Choose your area", text: "Punjab or Sindh." },
      { title: "Share dates and group size", text: "Day use and overnight stays." },
      { title: "Get confirmation", text: "We confirm the farmhouse and the price on WhatsApp." },
    ],
    notePlaceLabel: "Preferred area",
    notePlacePlaceholder: "Near Lahore",
  },
};

export function pkr(n: number) {
  return "PKR " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
