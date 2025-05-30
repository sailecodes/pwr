import {
  Antenna,
  BadgeCheck,
  Building2,
  DollarSign,
  ListTreeIcon,
  Server,
  ServerCog,
  ShieldCheck,
  ThumbsUp,
  Tv2,
  Video,
  Zap,
} from "lucide-react";
import { EStatType } from "./enums";

export const homeHeroPhrases = [
  "24/7 IT Support",
  "Complete IT Solutions for Any Size Business",
  "Enterprise-Level IT—Priced for SMBs",
  "End-to-End Managed IT Services",
  "Fully Outsourced IT Department",
  "Fast, Local IT Support That Actually Responds",
  "IT Services That Just Work",
  "Proactive IT That Prevents Downtime",
  "IT That Grows With Your Business",
  "Server & Network Setup, Maintenance, and Support",
  "Full-Spectrum IT—From Planning to Execution",
  "Secure, Scalable IT Infrastructure",
  "Affordable Enterprise-Grade IT",
  "IT Helpdesk With Real People, No Robots",
  "Future-Proof IT Built for Performance",
  "One Call for All Your IT Needs",
  "IT Designed for Hotels, Schools, and Warehouses",
  "Data Security and Business Continuity You Can Rely On",
  "Cloud, On-Prem, or Hybrid—We Handle It All",
  "Reliable IT That Keeps Your Operations Running",
  "Customized IT Support for Every Business Type",
  "MSP-Level IT Without the Corporate Overhead",
  "IT Support With a Construction-Grade Work Ethic",
  "High-Speed Fiber Optic Installations",
  "Enterprise-Grade Structured Cabling",
  "Custom DAS Solutions That Eliminate Dead Zones",
  "Commercial Electrical Installations & Upgrades",
  "Advanced Surveillance & Access Control Systems",
  "Low Voltage Cabling That’s Clean, Fast, and Reliable",
  "Integrated Security Systems for Business Protection",
  "Signal-Boosting DAS for Stadiums, Hotels, and Large Spaces",
];

export const homeAssociatedCompanies = [
  "/companies/224-2247342_finding-your-location-mariners-church-mariners-church-logo.png",
  "/companies/1213px-W_Hotels_Logo.svg.png",
  "/companies/2091746.png",
  "/companies/21180970-cox-logo-2084x692.png",
  "/companies/Alo_Yoga_logo.svg.png",
  "/companies/att-logo_brandlogos.net_g9nxm.png",
  "/companies/avatar.4.png",
  "/companies/ChargePoint-logo.png",
  "/companies/City+of+Hope+Logo+2020.png",
  "/companies/crypto.com-logo.png",
  "/companies/dce4cd211d1ffaf428770b889559.png",
  "/companies/e2a73622ceff522e8ebb529a9bdd8b4eadf12130.png",
  "/companies/FP_logo4.png",
  "/companies/Greenlots_Co-Brand-Logo-2.jpg",
  "/companies/Henkel-Logo.svg.png",
  "/companies/Innova_Logo.jpg",
  "/companies/KB_Home-Logo.wine.png",
  "/companies/logo+2.png",
  "/companies/Marriott_hotels_logo14.svg.png",
  "/companies/MBW+LLC+Logo.png",
  "/companies/neurovasc-300x182.png",
  "/companies/Regent_Hotels_&_Resorts_(new_logo).png",
  "/companies/rok-hardware-and-cabinets-1280x1280.jpg",
  "/companies/SCVi_Circle_Logo.png",
  "/companies/Seal_of_Culver_City,_California.png",
  "/companies/SoFi_Stadium_Logo.svg.png",
  "/companies/Spectrum-logo.png",
  "/companies/thelio_logo.jpg",
  "/companies/T-Mobile_US_Logo_2022_RGB_Magenta_on_Transparent.svg.png",
];

export const homeGuarantees = [
  {
    icon: DollarSign,
    header: "We Beat Any Quote — Guaranteed",
  },
  {
    icon: Building2,
    header: "Enterprise-Level Solutions, Without Enterprise Pricing",
  },
  {
    icon: ThumbsUp,
    header: "Work Done Right the First Time — Or We Fix It Free",
  },
];

export const homeTestimonies = [
  {
    company: "AT&T",
    name: "James T., Facilities Manager",
    review:
      "We struggled with poor cell reception throughout our facility until this team came in. Their DAS solution completely transformed our connectivity. Calls and data are seamless now, even in previously dead zones.",
    rating: 4.5,
  },
  {
    company: "TikTok",
    name: "Linda M., Business Owner",
    review:
      "As a small business, we needed reliable IT support without breaking the bank. This company delivered a custom solution that covered everything from network setup to data protection. They've been responsive, professional, and surprisingly affordable.",
    rating: 5,
  },
  {
    company: "Tesla",
    name: "Carlos R., IT Director",
    review:
      "Their cabling work was flawless—clean, efficient, and future-proof. The fiber optic installation boosted our speed dramatically. Our office now runs smoother than ever, and the team made the entire process painless.",
    rating: 4,
  },
  {
    company: "OC Grace",
    name: "Angela D., Manager",
    review:
      "From the initial consultation to final installation, they were extremely thorough and professional. Our new security system, complete with access control and HD surveillance, gives us real peace of mind. A job well done!",
    rating: 5,
  },
];

export const homeSpecialties = [
  {
    icon: Tv2,
    header: "IT Services",
    text: "Comprehensive IT support and infrastructure — from cloud solutions to cybersecurity and managed services. We keep your business connected, secure, and running smoothly.",
  },
  {
    icon: Zap,
    header: "Electrical Services",
    text: "Licensed electrical work for residential, commercial, and industrial projects — from lighting to full power systems.",
  },
  {
    icon: ListTreeIcon,
    header: "Structured Cabling",
    text: "Professional-grade cabling for voice, data, and devices. Clean, labeled, and scalable systems that support your network today and tomorrow.",
  },
  {
    icon: Antenna,
    header: "DAS (Distributed Antenna Systems)",
    text: "Boost indoor cellular coverage in large buildings with custom DAS design, installation, and carrier coordination.",
  },
  {
    icon: Server,
    header: "Fiber Optics",
    text: "High-speed fiber installations, splicing, and testing for fast, reliable connectivity across your building or campus.",
  },
  {
    icon: Video,
    header: "Audio/Visual (AV)",
    text: "From LED walls to sound systems, we design and install AV setups for churches, events, offices, and retail spaces.",
  },
];

export const homeStats = [
  {
    stat: 200,
    text: "Commercial Sites Fully Networked by Powercom",
    statType: EStatType.PLUS,
  },
  {
    stat: 99.9,
    text: "Network Uptime Across All Managed Clients",
    statType: EStatType.PERCENTAGE,
  },
  {
    stat: 1000000,
    text: "Of Fiber & Cabling Installed Across California, Nevada, and Arizona",
    statType: EStatType.PLUS,
  },
];

export const services = [
  {
    service: "Managed IT",
    serviceOutline: [
      "Proactive Monitoring & 24/7 Support",
      "Scalable Solutions for Growing Businesses",
      "Cybersecure, Streamlined, & Fully Managed Infrastructure",
    ],
    serviceSummary:
      "At Power Communications, our Managed IT Services provide full-spectrum technology support designed to keep your business running securely, efficiently, and without interruptions. From day-to-day help desk support to long-term infrastructure management, we become your dedicated IT partner — allowing you to focus on what matters most: growing your business.",
    serviceBenefits: [
      {
        header: "Reduce Downtime & Boost Productivity",
        text: "Our proactive monitoring and rapid response support minimize technical issues before they escalate, keeping your team focused and operations running smoothly.",
      },
      {
        header: "Eliminate the IT Headache",
        text: "No more guessing games. We handle updates, troubleshooting, data backups, and vendor coordination — so you don’t have to.",
      },
      {
        header: "Scalable Support That Grows With You",
        text: "Whether you're a startup or a multi-site business, our flexible IT solutions expand with your needs, ensuring tech never becomes a bottleneck.",
      },
    ],
    serviceBest:
      "We don’t just fix IT problems — we prevent them. Power Communications delivers enterprise-level IT management backed by decades of experience, deep infrastructure knowledge, and an unmatched client-first approach. From custom-built solutions to real-time remote support, we tailor every part of your IT environment to meet your business goals. Plus, our team is local, responsive, and invested in your long-term success.",
    faq: [
      {
        question: "What’s included in your Managed IT Services package?",
        answer:
          "Our package typically includes 24/7 monitoring, help desk support, software updates, patch management, backup and recovery, cybersecurity tools, network administration, and regular IT health checkups. We also customize services based on your business type and needs.",
      },
      {
        question: "How does your support work — remote or on-site?",
        answer:
          "We offer both. Most issues are resolved remotely in real time through our helpdesk or monitoring platform. However, we also provide on-site support as needed — especially for system installations, hardware upgrades, or emergencies.",
      },
      {
        question: "Can you work with our existing systems and software?",
        answer:
          "Absolutely. We evaluate your current setup and build around it when possible. Our goal is to optimize, not overhaul, unless needed. We also liaise directly with software vendors to manage compatibility and licensing issues for you.",
      },
      {
        question: "Is Managed IT secure? How do you protect our data?",
        answer:
          "Yes — cybersecurity is baked into every part of our service. We implement firewalls, endpoint protection, encrypted backups, MFA, and continuous monitoring. Our team also ensures your systems follow compliance standards like HIPAA, PCI, or SOC 2 when required.",
      },
      {
        question: "How much does Managed IT cost?",
        answer:
          "Costs vary based on the size of your network, number of users/devices, and required services. We offer flexible pricing — flat monthly rates, per-user plans, or fully custom solutions. After a quick consultation, we’ll provide a clear quote with no hidden fees.",
      },
    ],
  },
];
