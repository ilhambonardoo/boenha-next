import type { Metadata } from "next";
import LiniBisnisPageTitle from "@/components/BussinessLine/LiniBisnisPageTitle";
import UtamaSection from "@/components/BussinessLine/UtamaSection";
import OtherBusinesses from "@/components/BussinessLine/OtherBusinesses";
import LiniBisnisCTA from "@/components/BussinessLine/LiniBisnisCTA";

export const metadata: Metadata = {
  title: "Lini Bisnis - Boenha | CV Boenha Makmur Utama",
  description: "Jelajahi berbagai lini bisnis yang kami tawarkan di Boenha",
  keywords: "lini bisnis, layanan boenha, bisnis peternakan",
};

export default function BusinessLinePage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiniBisnisPageTitle />
        <UtamaSection />
        <OtherBusinesses />
        <LiniBisnisCTA />
      </div>
    </div>
  );
}
