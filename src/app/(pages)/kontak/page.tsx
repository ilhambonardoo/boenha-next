import type { Metadata } from "next";
import ContactPageTitle from "@/components/Contact/ContactPageTitle";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/Location";
import OperationalHours from "@/components/Contact/OperationalHours";

export const metadata: Metadata = {
  title: "Kontak - Boenha | Hubungi Kami",
  description:
    "Hubungi Boenha untuk informasi produk, pesanan, dan pertanyaan lainnya",
  keywords: "kontak boenha, whatsapp boenha, hubungi boenha",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactPageTitle />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ContactForm />
          <ContactInfo />
        </div>

        <Location />
        <div className="mt-20">
          <OperationalHours />
        </div>
      </div>
    </div>
  );
}
