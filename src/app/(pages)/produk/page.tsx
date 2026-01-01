import type { Metadata } from "next";
import ProductPageTitle from "@/components/Product/ProductPageTitle";
import ProductGrid from "@/components/Product/ProductGrid";
import ProductBenefits from "@/components/Product/ProductBenefits";
import ProductCTA from "@/components/Product/ProductCTA";

export const metadata: Metadata = {
  title: "Produk - Boenha | Ayam Kampung Berkualitas",
  description:
    "Koleksi produk ayam kampung berkualitas tinggi dari Boenha dengan berbagai pilihan",
  keywords: "boenha, produk ayam, ayam kampung, harga ayam, beli ayam",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductPageTitle />
        <ProductGrid />
        <ProductBenefits />
        <ProductCTA />
      </div>
    </div>
  );
}
