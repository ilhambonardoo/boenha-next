import type { Metadata } from "next";
import GalleryPageTitle from "@/components/Gallery/GalleryPageTitle";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import GalleryCTA from "@/components/Gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Galeri - Boenha | Dokumentasi Produk & Peternakan",
  description:
    "Galeri foto dokumentasi peternakan, proses produksi, dan distribusi Boenha",
  keywords: "boenha, galeri boenha, foto peternakan, galeri ayam kampung",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryPageTitle />
        <GalleryGrid />
        <GalleryCTA />
      </div>
    </div>
  );
}
