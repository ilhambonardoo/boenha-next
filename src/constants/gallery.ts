import type { GalleryAlbum, GalleryTab } from "../types";

export type AlbumType = "peternakan" | "proses" | "distribusi";

export const GALLERY_ALBUMS: Record<AlbumType, GalleryAlbum> = {
  peternakan: {
    images: [
      { url: "/assets/ayam/ayam4.jpeg", alt: "Ayam Kampung Sehat" },
      { url: "/assets/ayam/ayam5.jpeg", alt: "Peternakan Modern" },
      { url: "/assets/ayam/ayam6.jpeg", alt: "Ayam Kampung Berkualitas" },
      { url: "/assets/ayam/ayam7.jpeg", alt: "Kandang Higienis" },
    ],
  },
  proses: {
    images: [
      { url: "/assets/ayam/ayam4.jpeg", alt: "Kontrol Kualitas" },
      { url: "/assets/ayam/ayam5.jpeg", alt: "Produk Higienis" },
      { url: "/assets/ayam/ayam6.jpeg", alt: "Proses Produksi" },
    ],
  },
  distribusi: {
    images: [
      { url: "/assets/ayam/ayam4.jpeg", alt: "Tim Distribusi" },
      { url: "/assets/ayam/ayam5.jpeg", alt: "Proses Pengiriman" },
      { url: "/assets/ayam/ayam6.jpeg", alt: "Distribusi Terpercaya" },
      { url: "/assets/ayam/ayam7.jpeg", alt: "Layanan Cepat" },
    ],
  },
} as const;

export const GALLERY_TABS: GalleryTab[] = [
  { key: "peternakan" as AlbumType, label: "peternakan" },
  { key: "proses" as AlbumType, label: "proses" },
  { key: "distribusi" as AlbumType, label: "distribusi" },
] as const;
