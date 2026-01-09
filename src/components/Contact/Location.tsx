"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="pt-6"
    >
      <h3 className="font-semibold text-boen-text mb-4">
        {t("contact.locationMap")}
      </h3>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.605784475588!2d106.7453958!3d-6.8177077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6833ee5a73c60d%3A0xc22cbd0f4d107210!2sCV%20BOENHA%20MAKMUR%20UTAMA!5e0!3m2!1sen!2sid!4v1767946191592!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi CV. Boenha Makmur Utama"
        ></iframe>
      </motion.div>
      <p className="text-xs text-gray-500 mt-2 text-center italic">
        {t("contact.mapPlaceholder")}
      </p>
    </motion.div>
  );
};

export default Location;
