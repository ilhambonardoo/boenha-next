import type {
  CompanyInfo,
  SocialLinks,
  SocialMediaLink,
  OperatingHours,
} from "../types";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaShopify,
} from "react-icons/fa";

export const COMPANY_INFO: CompanyInfo = {
  name: "CV. Boenha Makmur Utama",
  address:
    "Jl. Raya Bojong Genteng Kabupaten Sukabumi Nomor 018 Blok Mangrod Rt004/001 Desa Cibodas Kecamatan Bojong Genteng Provinsi Jawa Barat",
  phone: "+6282315403127",
  email: "boenhamakmurutama@gmail.com",
  whatsapp: "+6282315403127",
} as const;

export const SOCIAL_LINKS: SocialLinks = {
  whatsapp: `https://wa.me/${COMPANY_INFO.whatsapp.replace(
    /\D/g,
    ""
  )}?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20ayam%20kampung%20Anda.`,
  email: `mailto:${COMPANY_INFO.email}`,
  phone: `tel:${COMPANY_INFO.phone}`,
  facebook: "https://www.facebook.com/profile.php?id=61584727112231",
  instagram:
    "https://www.instagram.com/boenhamakmurutama?igsh=Nmc5MTYycTM3am5u&utm_source=qr",
  tiktok: "https://www.tiktok.com/@boenha?_r=1&_t=ZS-922peobfYcEShoope",
  shopee: "https://shopee.co.id/user/account/profile",
} as const;

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Senin - Jumat", time: "08:00 - 17:00 WIB" },
  { day: "Sabtu", time: "08:00 - 12:00 WIB" },
  { day: "Minggu & Libur", time: "Tutup" },
] as const;

export const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    icon: FaWhatsapp,
    url: SOCIAL_LINKS.whatsapp,
    label: "WhatsApp",
    color: "hover:text-green-500",
    bgColor: "hover:bg-green-100",
  },
  {
    icon: FaFacebook,
    url: SOCIAL_LINKS.facebook || "",
    label: "Facebook",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-100",
  },
  {
    icon: FaInstagram,
    url: SOCIAL_LINKS.instagram || "",
    label: "Instagram",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-100",
  },
  {
    icon: FaTiktok,
    url: SOCIAL_LINKS.tiktok || "",
    label: "TikTok",
    color: "hover:text-black",
    bgColor: "hover:bg-gray-200",
  },
  {
    icon: FaShopify,
    url: SOCIAL_LINKS.shopee || "",
    label: "Shopee",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-100",
  },
] as const;
