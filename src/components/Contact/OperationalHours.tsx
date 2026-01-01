"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OperationalHours = () => {
  const { t } = useTranslation();

  const days = [
    { key: "monday", day: "Senin" },
    { key: "tuesday", day: "Selasa" },
    { key: "wednesday", day: "Rabu" },
    { key: "thursday", day: "Kamis" },
    { key: "friday", day: "Jumat" },
    { key: "saturday", day: "Sabtu" },
    { key: "sunday", day: "Minggu" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-br from-boen-primary/10 to-boen-secondary/10 rounded-2xl p-8 md:p-12 border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-boen-text mb-6 text-center">
        {t("operatingHours.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {days.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`rounded-lg p-4 text-center shadow-md transition-all ${
              index === 6 // Sunday
                ? "bg-red-50 border border-red-200"
                : "bg-white"
            }`}
          >
            <h3 className="font-semibold text-boen-text mb-2">
              {t(`operatingHours.${day.key}`)}
            </h3>
            <p
              className={`${
                index === 6 ? "text-red-600 font-semibold" : "text-gray-600"
              }`}
            >
              {index === 6
                ? t("operatingHours.closed")
                : t("operatingHours.hours")}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-sm text-gray-600 italic bg-white/50 p-4 rounded-lg">
          💬 {t("operatingHours.note")}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default OperationalHours;
