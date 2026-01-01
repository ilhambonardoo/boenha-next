"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const GalleryPageTitle = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-boen-text mb-4">
        {t("gallery.title")}
      </h1>
      <p className="text-xl text-gray-600 mb-4">{t("gallery.subtitle")}</p>
      <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {t("gallery.description")}
      </p>
    </motion.div>
  );
};

export default GalleryPageTitle;
