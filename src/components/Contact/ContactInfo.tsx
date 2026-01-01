"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { COMPANY_INFO, SOCIAL_LINKS } from "@/constants";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-boen-text mb-6">
          {t("contact.infoTitle")}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {t("contact.infoSubtitle")}
        </p>
      </motion.div>

      <div className="space-y-6">
        {[
          {
            icon: FaMapMarkerAlt,
            bgClass: "bg-boen-primary/10",
            textClass: "text-boen-primary",
            title: t("contact.address"),
            content: <>{COMPANY_INFO.address}</>,
          },
          {
            icon: FaEnvelope,
            bgClass: "bg-boen-secondary/10",
            textClass: "text-boen-secondary",
            title: t("contact.email"),
            href: SOCIAL_LINKS.email,
            content: (
              <a
                href={SOCIAL_LINKS.email}
                className="text-gray-600 text-sm hover:text-boen-accent transition-colors"
              >
                boenhamakmurutama@gmail.com
              </a>
            ),
          },
          {
            icon: FaPhone,
            bgClass: "bg-boen-accent/10",
            textClass: "text-boen-accent",
            title: t("contact.phone"),
            href: SOCIAL_LINKS.phone,
            content: (
              <a
                href={SOCIAL_LINKS.phone}
                className="text-gray-600 text-sm hover:text-boen-accent transition-colors"
              >
                082315403127
              </a>
            ),
          },
          {
            icon: FaWhatsapp,
            bgClass: "bg-[#f97316]/10",
            textClass: "text-green-600",
            title: t("contact.whatsapp"),
            href: SOCIAL_LINKS.whatsapp,
            content: (
              <a
                href={SOCIAL_LINKS.whatsapp}
                className="text-gray-600 text-sm hover:text-green-600 transition-colors"
              >
                082315403127
              </a>
            ),
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`${contact.bgClass} p-3 rounded-lg`}
            >
              <contact.icon className={contact.textClass} size={24} />
            </motion.div>
            <div>
              <h3 className="font-semibold text-boen-text mb-1">
                {contact.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {contact.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="pt-6"
      >
        <h3 className="font-semibold text-boen-text mb-4">
          {t("contact.followSocial")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              icon: FaWhatsapp,
              label: "WhatsApp",
              href: SOCIAL_LINKS.whatsapp,
              bgColor: "bg-[#f97316]/10 hover:bg-[#f97316]/20",
              textColor: "text-green-600",
            },
            {
              icon: FaFacebook,
              label: "Facebook",
              href: SOCIAL_LINKS.facebook,
              bgColor: "bg-blue-100 hover:bg-blue-200",
              textColor: "text-blue-600",
            },
            {
              icon: FaInstagram,
              label: "Instagram",
              href: SOCIAL_LINKS.instagram,
              bgColor: "bg-pink-100 hover:bg-pink-200",
              textColor: "text-pink-600",
            },
            {
              icon: FaTiktok,
              label: "TikTok",
              href: SOCIAL_LINKS.tiktok,
              bgColor: "bg-black/10 hover:bg-black/20",
              textColor: "text-black",
            },
            {
              icon: SiShopee,
              label: "Shopee",
              href: SOCIAL_LINKS.shopee,
              bgColor: "bg-red-100 hover:bg-red-200",
              textColor: "text-red-600",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all ${social.bgColor}`}
            >
              <social.icon className={`${social.textColor} text-2xl`} />
              <span className="text-xs font-semibold text-center">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="pt-6"
      ></motion.div>
    </motion.div>
  );
};

export default ContactInfo;
