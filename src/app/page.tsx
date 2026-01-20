import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import BusinessLinesSection from "@/components/Home/BusinessLinesSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HomeCTA from "@/components/Home/HomeCTA";

export const metadata: Metadata = {
  title: "Beranda - Boenha | CV Boenha Makmur Utama",
  description:
    "Boenha adalah spesialis dalam budidaya dan suplai ayam kampung berkualitas tinggi. Kami memiliki sistem peternakan yang modern dengan standar higienis yang ketat untuk memastikan kualitas produk terbaik.",
  openGraph: {
    title: "Beranda - Boenha",
    description:
      "Penyedia ayam kampung berkualitas tinggi dengan sistem peternakan modern",
    images: [
      {
        url: "/assets/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Boenha Logo",
      },
    ],
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
