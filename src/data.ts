import work1Image from "./assets/work-1.png";
import work2Image from "./assets/work-2.png";
import work3Image from "./assets/work-3.png";
import backgroundImageNew from "./assets/background-image-new.png";

export const heroSocials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iashish15",
    icon: "in",
  },
  { label: "GitHub", href: "https://github.com/ashish", icon: "GH" },
  { label: "Instagram", href: "https://instagram.com/ashish", icon: "IG" },
  { label: "Email", href: "mailto:ashish@example.com", icon: "✉" },
];

export const aboutSummary =
  "I combine polished UI design with modern engineering discipline to build enterprise-ready React products. My process emphasizes clear communication, component reuse, performance, and product-market fit.";

export const highlights = [
  {
    title: "High-value builds",
    value: "SaaS dashboards, marketing sites, admin tools",
  },
  { title: "Fast delivery", value: "Design to production in under 6 weeks" },
  {
    title: "User-focused",
    value: "Accessibility, speed and conversion-first flows",
  },
  {
    title: "Product mindset",
    value: "Collaboration with PMs, designers and founders",
  },
];

export const focusPoints = [
  "Design system architecture for React teams",
  "Performance-first UI with Tailwind CSS and Framer Motion",
  "API-first frontend work using REST and GraphQL",
  "Accessible, scalable and brand-aligned interfaces",
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "⚡",
    accent: "from-sky-500 to-violet-500",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    category: "Backend",
    icon: "🧠",
    accent: "from-emerald-400 to-cyan-400",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    accent: "from-pink-500 to-rose-500",
    items: ["Git", "Figma", "Storybook", "Cypress", "Vercel"],
  },
];

export const projects = [
  {
    title: "ScaleFlow Dashboard",
    category: "SaaS analytics dashboard",
    type: "Dashboard",
    imageSrc: work1Image,
    screenshotLabel: "Admin preview",
    description:
      "Built a polished analytics dashboard for B2B operations that surfaced live metrics, user insights, and conversion signals in a single pane.",
    features: [
      "Realtime charts and KPI tracking",
      "Configurable workspace panels",
      "Responsive grid for desktop and tablet",
    ],
    contribution:
      "Led frontend implementation with React, Tailwind, and Chart.js while integrating backend metrics APIs and reusable dashboard components.",
    problemSolved:
      "Created a stable dashboard UI that reduced navigation friction and improved stakeholder visibility into growth performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Vite"],
    liveLink: "https://example.com/demo/scale-flow",
    repoLink: "https://github.com/ashish/scaleflow",
  },
  {
    title: "NIX HRMS System",
    category: "Enterprise HR management",
    type: "HRMS",
    imageSrc: work2Image,
    screenshotLabel: "Workflow preview",
    description:
      "Delivered a modern HRMS interface for employee profiles, leave approvals, and payroll workflows with clean data-driven interactions.",
    features: [
      "Employee directory and attendance tracking",
      "API-driven approvals and notifications",
      "Accessible forms and responsive layouts",
    ],
    contribution:
      "Built reusable UI components and integrated REST APIs for employee data, approval flows, and document management.",
    problemSolved:
      "Replaced a fragmented HR workflow with a single cohesive interface that simplified daily operations for managers and staff.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    liveLink: "https://example.com/demo/nix-hrms",
    repoLink: "https://github.com/ashish/nix-hrms",
  },
  {
    title: "CommercePulse Storefront",
    category: "Customer-facing e-commerce",
    type: "E-commerce",
    imageSrc: work3Image,
    screenshotLabel: "Shop preview",
    description:
      "Developed a responsive storefront with product discovery, checkout flow, and performance optimizations tailored for conversion and speed.",
    features: [
      "Search and filtered product browsing",
      "Cart and checkout UI with state persistence",
      "Stripe-ready checkout and API cart management",
    ],
    contribution:
      "Owned the frontend build for product pages, interactive filters, and checkout experiences, plus API integration with backend inventory services.",
    problemSolved:
      "Improved mobile usability and checkout clarity while reducing page load time for product browsing.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe", "Vite"],
    liveLink: "https://example.com/demo/commercepulse",
    repoLink: "https://github.com/ashish/commercepulse",
  },
  {
    title: "Nova Launch Suite",
    category: "Growth marketing website",
    type: "Marketing",
    imageSrc: backgroundImageNew,
    screenshotLabel: "Landing preview",
    description:
      "Created a premium launch site for a SaaS product with animation-led storytelling, responsive hero sections, and conversion-focused messaging.",
    features: [
      "High-performance landing pages",
      "Animated content sections",
      "Accessible navigation and fast load times",
    ],
    contribution:
      "Designed and built the site structure, motion interactions, and content layout to increase engagement and demo requests.",
    problemSolved:
      "Delivered a polished marketing experience that supports brand storytelling without compromising performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com/demo/nova-suite",
    repoLink: "https://github.com/ashish/nova-launch",
  },
];

export const timeline = [
  {
    company: "Plutonic Services",
    role: "Senior Frontend Engineer",
    period: "2024 – Present",
    location: "Remote / Global",
    points: [
      "Built a scalable React design system used across 5 products.",
      "Streamlined frontend deployment pipelines to improve release cadence.",
      "Delivered UX-led SaaS modules for revenue operations.",
    ],
  },
  {
    company: "Birbals Inc.",
    role: "Frontend Developer",
    period: "2022 – 2024",
    location: "Hybrid",
    points: [
      "Led UI rebuilds for client websites with responsive, accessible HTML/CSS.",
      "Implemented reusable components for marketing and dashboard experiences.",
      "Collaborated with product and design teams to refine user journeys.",
    ],
  },
];

export const services = [
  {
    title: "Dashboard Development",
    description:
      "High-performance data products with analytics, charts, and workflows.",
    icon: "📊",
  },
  {
    title: "React Development",
    description: "Reusable component systems and polished interactive UI.",
    icon: "⚛️",
  },
  {
    title: "API Integration",
    description:
      "REST and GraphQL integration with clean client-side interfaces.",
    icon: "🔌",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Premium layouts, product polish, and brand-aligned digital experiences.",
    icon: "🎨",
  },
];

export const stats = [
  {
    title: "Validated projects",
    value: "18+",
    detail: "B2B products, dashboards and landing systems",
    icon: "✅",
  },
  {
    title: "GitHub activity",
    value: "1.2k+",
    detail: "Commits and open-source contributions",
    icon: "🐙",
  },
  {
    title: "Live launches",
    value: "12+",
    detail: "Deployed with Vercel, Netlify, and custom CI",
    icon: "🚀",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of Product, Nova Labs",
    company: "Nova Labs",
    quote:
      "Ashish transformed our app into a polished experience. The interface feels premium, fast and aligned perfectly with our product vision.",
    rating: 5,
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Pulse Ventures",
    company: "Pulse Ventures",
    quote:
      "The team noticed a clear improvement in usability and speed after Ashish took over the frontend. He is reliable and design-minded.",
    rating: 5,
  },
  {
    name: "Meera Jain",
    role: "Product Lead, GrowthEdge",
    company: "GrowthEdge",
    quote:
      "We launched on schedule and the UI received excellent feedback. His attention to detail made the product feel premium.",
    rating: 5,
  },
];

export const educationEntries = [
  {
    degree: "B.Sc. in Mathematics",
    institution: "Veer Bahadur Singh Purvanchal University",
    duration: "2020 – 2023",
    coursework: [
      "Data structures and algorithms",
      "Database systems and web development",
      "Software design and user interface principles",
    ],
    achievement:
      "Maintained a strong academic record while working on web development projects.",
    icon: "🎓",
  },
  {
    degree: "Professional Frontend Path",
    institution: "Coursera / Self-paced",
    duration: "2023 – 2024",
    coursework: [
      "React and TypeScript application architecture",
      "Responsive layout systems with Tailwind CSS",
      "API integration and state management",
    ],
    achievement:
      "Completed project-based coursework focused on practical frontend delivery.",
    icon: "💻",
  },
];

export const certifications = [
  {
    name: "Front-End Web Development with React",
    provider: "Coursera",
    year: "2024",
    link: "https://www.coursera.org/",
    categories: ["React", "Frontend", "UI"],
    icon: "C",
  },
  {
    name: "Responsive Web Design",
    provider: "freeCodeCamp",
    year: "2023",
    link: "https://www.freecodecamp.org/",
    categories: ["Responsive", "HTML", "CSS"],
    icon: "F",
  },
  {
    name: "Modern JavaScript Practices",
    provider: "Udemy",
    year: "2023",
    link: "https://www.udemy.com/",
    categories: ["JavaScript", "ES6", "Best practices"],
    icon: "U",
  },
];

export const contactChannels = [
  {
    label: "Email",
    detail: "ashish@example.com",
    href: "mailto:ashish@example.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/iashish15",
    href: "https://www.linkedin.com/in/iashish15",
    icon: "in",
  },
  {
    label: "GitHub",
    detail: "github.com/ashish",
    href: "https://github.com/ashish",
    icon: "GH",
  },
];
