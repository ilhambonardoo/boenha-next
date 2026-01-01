import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const change = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  const baseClass =
    "text-sm px-2 py-1 rounded hover:bg-white/10 transition-colors cursor-pointer";
  const activeClass = "bg-[#fc812b] ";
  const inactiveClass = "bg-white/20";

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={() => change("en")}
        className={`${baseClass} ${
          i18n.language === "en" ? activeClass : inactiveClass
        }`}
        aria-label="Choose English"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            i18n.language === "en"
              ? "rgb(252, 129, 43)"
              : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.2 }}
      >
        EN
      </motion.button>
      <motion.button
        onClick={() => change("id")}
        className={`${baseClass} ${
          i18n.language === "id" ? activeClass : inactiveClass
        }`}
        aria-label="Pilih Bahasa Indonesia"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          backgroundColor:
            i18n.language === "id"
              ? "rgb(252, 129, 43)"
              : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.2 }}
      >
        ID
      </motion.button>
    </div>
  );
};

export default LanguageSwitcher;
