import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import BusinessLinesSection from "@/components/Home/BusinessLinesSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HomeCTA from "@/components/Home/HomeCTA";

export const metadata: Metadata = {
  title: "Beranda - Boenha | CV Boenha Makmur Utama",
  description:
    "Boenha adalah spesialis dalam budidaya dan suplai ayam kampung berkualitas tinggi. Kami memiliki sistem peternakan yang modern dengan standar higienis yang ketat untuk memastikan kualitas produk terbaik.",
  keywords:
    "boenha, ayam kampung, peternakan ayam, ayam organik, berkualitas, Sukabumi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "none",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
