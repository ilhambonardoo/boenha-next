"use client";

import { motion } from "framer-motion";
import SwiperSlider from "@/utils/Feature/SwiperSlider";
import { businessLine } from "@/constants";
import { useTranslation } from "react-i18next";

const UtamaSection = () => {
  const { t } = useTranslation();

  const chickenNutrition = t("chicken_benefits.items", {
    returnObjects: true,
  }) as Array<{ emoji: string; title: string; description: string }>;

  const farmingPractices = t("farming_practices", {
    returnObjects: true,
  }) as {
    title: string;
    feed: { title: string; description: string };
    coop: { title: string; description: string };
    management: { title: string; description: string };
  };

  const targetMarketsData = t("targetMarkets.items", {
    returnObjects: true,
  }) as Array<{
    emoji: string;
    title: string;
    desc: string;
  }>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="bg-linear-to-r from-boen-primary/10 to-boen-secondary/10 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-boen-text mb-6"
            >
              {t("nav.lini_bisnis")} - {t("liniBisnis.title")}
            </motion.h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("liniBisnis.intro")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <strong className="text-boen-text block mb-2">
                  {farmingPractices.feed.title}:
                </strong>
                <p>{farmingPractices.feed.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <strong className="text-boen-text block mb-2">
                  {farmingPractices.coop.title}:
                </strong>
                <p>{farmingPractices.coop.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <strong className="text-boen-text block mb-2">
                  {farmingPractices.management.title}:
                </strong>
                <p>{farmingPractices.management.description}</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlider slides={businessLine} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-boen-text mb-2 text-center">
            {t("chicken_benefits.title")}
          </h3>
          <p className="text-gray-600 text-center mb-8">
            {t("chicken_benefits.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chickenNutrition.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg text-center p-6 shadow-md border border-gray-100 hover:border-boen-primary transition-colors"
              >
                <div className="text-3xl mb-2">{benefit.emoji}</div>
                <h4 className="text-lg font-semibold text-boen-text mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <h3 className="text-2xl font-bold text-boen-text mb-4">
            {t("targetMarkets.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarketsData.map((target, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-boen-text mb-2">
                  {target.emoji} {target.title}
                </h4>
                <p className="text-gray-600 text-sm">{target.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-8 p-6 bg-linear-to-r from-boen-primary/20 to-boen-secondary/20 rounded-lg border-2 border-boen-primary/30"
          >
            <h4 className="text-xl font-bold text-boen-text mb-4">
              🌍 {t("export.title")}
            </h4>
            <p className="text-gray-700 leading-relaxed">
              {t("export.description")}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default UtamaSection;
