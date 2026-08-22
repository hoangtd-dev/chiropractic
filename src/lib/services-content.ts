import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "chiropractic-adjustments",
    title: "Chiropractic Adjustments",
    description:
      "Hands-on spinal adjustments to restore movement and relieve pain.",
    icon: "spine",
  },
  {
    slug: "dry-needling",
    title: "Dry Needling",
    description:
      "Target trigger points to reduce pain and improve muscle function.",
    icon: "needle",
  },
  {
    slug: "soft-tissue-therapy",
    title: "Soft Tissue Therapy",
    description:
      "Release muscle tension and improve mobility with targeted soft tissue techniques.",
    icon: "hands",
  },
  {
    slug: "fascial-manipulation",
    title: "Fascial Manipulation",
    description:
      "Helps with musculoskeletal issues that come from restricted fascia due to injury, post-injury states, and immobilisation.",
    icon: "fascia",
  },
  {
    slug: "rehabilitation",
    title: "Rehabilitation",
    description:
      "Tailored, prescribed home exercises to support recovery and achieve the best outcome.",
    icon: "rehab",
  },
];

export function findService(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
