import type { Product, ProductBenefit } from "../types";

export const WHATSAPP_NUMBER = "+6282315403127";
export const WHATSAPP_MESSAGE =
  "Halo, saya tertarik dengan produk ayam kampung Anda.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    image: "/assets/ayam/ayam5.jpeg",
    ctaLink: WHATSAPP_URL,
  },
  {
    id: 2,
    image: "/assets/ayam/ayam6.jpeg",
    ctaLink: WHATSAPP_URL,
  },
] as const;

export const PRODUCT_BENEFITS: ProductBenefit[] = [
  {
    emoji: "🐔",
    title: "Kualitas Premium",
    desc: "Ayam kampung sehat dengan standar kualitas terbaik",
  },
  {
    emoji: "✓",
    title: "Halal & Higienis",
    desc: "Proses pemotongan terstandar dan dijamin halal",
  },
  {
    emoji: "🚚",
    title: "Pengiriman Cepat",
    desc: "Layanan pengiriman yang cepat dan terpercaya",
  },
] as const;

export const CHICKEN_NUTRITION_BENEFITS: ProductBenefit[] = [
  {
    emoji: "💪",
    title: "Protein Tinggi",
    desc: "Kaya akan protein hewani untuk pertumbuhan dan pemulihan otot",
  },
  {
    emoji: "💧",
    title: "Lemak Lebih Rendah",
    desc: "Kandungan lemak total lebih rendah dibanding ayam konvensional",
  },
  {
    emoji: "❤️",
    title: "Rendah Kolesterol",
    desc: "Kandungan kolesterol yang lebih rendah untuk kesehatan jantung",
  },
  {
    emoji: "🩸",
    title: "Kaya Zat Besi",
    desc: "Penting untuk pembentukan sel darah merah dan energi",
  },
  {
    emoji: "🧠",
    title: "Vitamin B Kompleks",
    desc: "Sumber Vitamin B6 dan B12 untuk fungsi saraf optimal",
  },
  {
    emoji: "⚡",
    title: "Mineral Penting",
    desc: "Mengandung fosfor dan selenium untuk tulang dan imunitas",
  },
] as const;
