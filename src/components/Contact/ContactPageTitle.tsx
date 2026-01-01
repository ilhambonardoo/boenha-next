"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ContactPageTitle = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-boen-text mb-4">
        {t("contact.title")}
      </h1>
      <p className="text-xl text-gray-600">{t("contact.infoSubtitle")}</p>
    </motion.div>
  );
};

export default ContactPageTitle;
