import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import BusinessLinesSection from "@/components/Home/BusinessLinesSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HomeCTA from "@/components/Home/HomeCTA";

export const metadata: Metadata = {
  title: "Beranda - Boenha | CV Boenha Makmur Utama",
  description:
    "Boenha adalah penyedia ayam kampung berkualitas tinggi dengan sistem peternakan modern, berkelanjutan, dan terpercaya di Indonesia.",
  keywords:
    "boenha, ayam kampung, peternakan ayam, ayam organik, berkualitas, Sukabumi",
  robots: "index, follow",
  openGraph: {
    title: "Beranda - Boenha",
    description:
      "Penyedia ayam kampung berkualitas tinggi dengan sistem peternakan modern",
    type: "website",
    url: "https://boenha.com",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Boenha Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://boenha.com",
    languages: {
      en: "/en",
      id: "/id",
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BusinessLinesSection />
      <FeaturesSection />
      <HomeCTA />
    </>
  );
}
