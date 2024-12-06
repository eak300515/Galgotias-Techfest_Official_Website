// Importing assets from the assets folder
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Navigation links for the techfest website
export const navigation = [
  {
    id: "0",
    title: "Event Attractions",
    url: "#features",
  },
  {
    id: "1",
    title: "Sponsor",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Know US",
    url: "#gtc",
  },
  {
    id: "3",
    title: "Insights",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Register",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },

  {
    id: "6",
    title: "Workshop",
    url: "#Workshops",
  },

  {
    id: "7",
    title: "Events",
    url: "#Events",
  },

  {
    id: "8",
    title: "Competitions",
    url: "#Competitions",
  },
];

// Hero section icons to highlight tech features
export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

// Notification images for updates and announcements
export const notificationImages = [notification4, notification3, notification2];

// Company logos or partner logos (can replace `yourlogo` with actual sponsor logos if available)
export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

// Highlighted services or themes of the techfest
export const brainwaveServices = [
  "Innovate",
  "Collaborate",
  "Explore",
];

// Icons to represent techfest offerings or event highlights
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Techfest roadmap for upcoming or featured sessions and upgrades
export const roadmap = [
  {
    id: "0",
    title: "AI Revolution",
    text: "Dive into the latest advancements in artificial intelligence and its transformative impact.",
    date: "January 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Game DEV & Blockchain Breakthrough",
    text: "Discover blockchain technology and multiple gamifications with their potentials in secure, decentralized environments.",
    date: "January 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Quantum Computing",
    text: "Explore the cutting-edge possibilities of quantum technology and future applications.",
    date: "January 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Tech Analysis",
    text: "Experience the process of evaluating technology trends, tools and systems to derive insights for strategic decision-making.",
    date: "January 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// Collaboration section text for team and networking emphasis
export const collabText =
  "Empower your vision with smart tools and secure, seamless collaboration – the perfect solution for forward-thinking teams.";

// Collaboration highlights with descriptions
export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Networking",
  },
  {
    id: "2",
    title: "Advanced Tech Showcases",
  },
];

// App icons to showcase tech stack used in the event or available resources
export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

// Ticket pricing and descriptions
export const pricing = [
  {
    id: "0",
    title: "Silver",
    description: "Access to exhibitions and guest lectures",
    price: "99K",
    features: [
      "Entry to all exhibition zones",
      "Access to guest lectures",
      "Networking opportunities with peers",
    ],
  },
  {
    id: "1",
    title: "Gold",
    description: "All-access pass, priority seating, exclusive workshops",
    price: "2.99L",
    features: [
      "Priority seating at guest lectures",
      "Exclusive access to advanced workshops",
      "Dedicated support and event materials",
    ],
  },
  {
    id: "2",
    title: "Platinum",
    description: "Full access with backstage entry and networking lounges",
    price: "6.99L",
    features: [
      "Backstage access for select events",
      "VIP networking lounge access",
      "Personalized event itinerary",
    ],
  },
];

// Event benefits for attendees
export const benefits = [
  {
    id: "0",
    title: "Access Experts of Keynote Sessions",
    text: "Gain insights from world-renowned industry speakers & leaders and tech experts through panels and discussions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Interactive Hands-on Workshops",
    text: "Learn through interactive workshops in emerging technologies with hands-on experience, designed to enhance your skills.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Networking opportunities",
    text: "Connect with tech enthusiasts, industry professionals, visionaries, founders and like-minded peers.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Showcase & Exhibition Areas",
    text: "Get a first-hand look at emerging technologies and future innovations, featuring innovative projects and research.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Tech Challenges & Exciting Competitions",
    text: "Participate in multiple competitions like hackathons, RoboWars, Esports & many more..",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Fun Activities",
    text: "Enjoy the techfest atmosphere with fun zones, games, and huge amazing giveaways.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

// Social media links
export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
