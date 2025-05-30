import { Antenna, ListTreeIcon, Server, Tv2, Video, Zap } from "lucide-react";
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
  "Google",
  "Apple",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Nvidia",
  "Adobe",
  "Intel",
  "Salesforce",
  "Cisco",
  "Oracle",
  "IBM",
  "Tesla",
  "Samsung",
  "AMD",
  "Spotify",
  "Uber",
  "Airbnb",
  "Zoom",
];

export const associatedCompanies = [
  "/companies/airbnb.svg",
  "/companies/amazon.svg",
  "/companies/amd.svg",
  "/companies/apple.svg",
  "/companies/cisco.svg",
  "/companies/google.svg",
  "/companies/immer.svg",
  "/companies/intel.svg",
  "/companies/meta.svg",
  "/companies/microstation.svg",
  "/companies/netflix.svg",
  "/companies/nvidia.svg",
  "/companies/salesforce.svg",
  "/companies/samsung.svg",
  "/companies/spotify.svg",
  "/companies/tacobell.svg",
  "/companies/tesla.svg",
  "/companies/uber.svg",
  "/companies/virtualbox.svg",
  "/companies/zoom.svg",
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
    icon: Antenna,
    header: "Distributed Antenna Systems",
    text: "We design and install customized DAS solutions that enhance wireless coverage in large or signal-challenged environments, ensuring reliable connectivity throughout your facility.",
  },
  {
    icon: Zap,
    header: "Electrical",
    text: "Our licensed electricians provide comprehensive electrical services, from new installations to system upgrades and maintenance, with a focus on safety, code compliance, and efficiency.",
  },
  {
    icon: Tv2,
    header: "IT Services",
    text: "We offer end-to-end IT solutions including network setup, server configuration, system integration, and ongoing support to keep your technology infrastructure secure and optimized.",
  },
  {
    icon: Server,
    header: "Fiber Optics",
    text: "We specialize in the installation and termination of high-speed fiber optic networks, delivering fast, reliable data transmission for both enterprise and commercial applications.",
  },
  {
    icon: Video,
    header: "Security Systems",
    text: "Our team installs and maintains advanced security systems, including surveillance cameras, access control, and monitoring solutions tailored to protect your assets and personnel.",
  },
  {
    icon: ListTreeIcon,
    header: "Structured Cabling",
    text: "We design and implement structured cabling systems that support high-performance data and voice networks, ensuring scalability, reliability, and ease of maintenance.",
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
