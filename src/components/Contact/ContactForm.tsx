"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "@/constants";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.name} (${formData.phone}). ${formData.message}`;
    const whatsappUrl = `${SOCIAL_LINKS.whatsapp}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-xl p-8 border border-gray-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl font-bold text-boen-text mb-6"
      >
        {t("contactForm.title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-600 mb-8"
      >
        {t("contactForm.subtitle")}
      </motion.p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-boen-text mb-2"
          >
            {t("contactForm.nameLabel")} {t("contactForm.required")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors"
            placeholder={t("contactForm.namePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-boen-text mb-2"
          >
            {t("contactForm.phoneLabel")} {t("contactForm.required")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors"
            placeholder={t("contactForm.phonePlaceholder")}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-boen-text mb-2"
          >
            {t("contactForm.messageLabel")} {t("contactForm.required")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-boen-accent focus:ring-2 focus:ring-boen-accent/20 outline-none transition-colors resize-none"
            placeholder={t("contactForm.messagePlaceholder")}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-amber-600 cursor-pointer text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={20} />
          {t("contactForm.sendButton")}
        </motion.button>
      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-xs text-gray-500 mt-4 text-center"
      >
        {t("contactForm.disclaimer")}
      </motion.p>
    </motion.div>
  );
};

export default ContactForm;
