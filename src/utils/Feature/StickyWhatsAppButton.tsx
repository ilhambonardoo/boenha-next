"use client";

import { FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../constants";
import { useState } from "react";

const StickyWhatsAppButton = () => {
  const whatsappUrl = SOCIAL_LINKS.whatsapp;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isHovered && (
        <div className="fixed bottom-24 right-6 z-50 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
          Hubungi kami
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl flex items-center justify-center w-16 h-16"
        aria-label="Hubungi via WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={28} className="group-hover:animate-bounce" />
      </a>
    </>
  );
};

export default StickyWhatsAppButton;
