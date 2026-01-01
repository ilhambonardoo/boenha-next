"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const GalleryCTA = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-20 text-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-[#f97316] rounded-2xl p-8 md:p-12 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("cta.interestedProduct")}
        </h2>
        <p className="text-xl mb-6 opacity-90">{t("cta.seeMore")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/produk">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
            >
              {t("cta.viewProducts")}
            </motion.button>
          </Link>
          <Link href="/kontak">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ea580c] transition-colors"
            >
              {t("cta.contactUs")}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GalleryCTA;
