import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { services2 } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getUrlString(str: string): string {
  const decoded = decodeURIComponent(str);
  const words = decoded.split("-");

  const formattedWords = words.map((word) => {
    // Special cases
    if (!word) return "";
    else if (word.toLowerCase() === "it") return "IT";
    else if (word.toLowerCase() === "voip") return "VoIP";
    else if (word.toLowerCase() === "ip") return "IP";
    else if (word.toLowerCase() === "das") return "DAS";
    else if (word.toLowerCase() === "(das)") return "(DAS)";
    else if (word.toLowerCase() === "av") return "AV";
    else if (word.toLowerCase() === "for") return "for";
    else if (word.toLowerCase() === "(ppc)") return "(PPC)";
    else if (word.toLowerCase() === "(seo)") return "(SEO)";
    else if (word.toLowerCase() === "pa") return "PA";

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  let joinedWords = formattedWords.filter(Boolean).join(" ");

  // Special case
  joinedWords = joinedWords.replace("Multi ", "Multi-");

  return joinedWords;
}

export function formatToUrlString(str: string) {
  return str.toLowerCase().replaceAll(" ", "-");
}

export function isValidPair(category: string, service: string) {
  return services2.some((e) => e.category === category && !!e.services.find((e2) => e2.service === service));
}

export function findServiceByCategoryAndName(category: string, service: string) {
  const matchingCategory = services2.find((e) => e.category === category);
  const matchingService = matchingCategory?.services.find((e) => e.service === service);

  return matchingService;
}
