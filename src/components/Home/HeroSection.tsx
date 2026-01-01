"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const pillars = t("hero.pillars", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#00A99D] to-teal-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                {t("hero.title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white text-lg font-light"
              >
                {t("hero.intro")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-white text-base leading-relaxed"
              >
                {t("hero.about")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/produk"
                  className="bg-white text-[#00A99D] px-6 py-3 rounded-lg font-semibold hover:bg-[#00A99D] hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  {t("hero.btnProducts")}
                </Link>
                <Link
                  href="/kontak"
                  className="bg-white text-[#00A99D] px-6 py-3 rounded-lg font-semibold hover:bg-[#005461] hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  {t("hero.btnContact")}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/assets/owner/ahdi_owner.jpeg"
                alt="Owner Boenha"
                width={400}
                height={500}
                className="w-full rounded-4xl max-w-sm shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full bg-[#00A99D]/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("hero.pillarTitle")}
              </h2>
              <div className="w-20 h-1 bg-[#00A99D] mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-24 bg-gradient-to-r from-[#00A99D] to-[#00B7B5] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute text-8xl font-bold text-white/10">
                      {index + 1}
                    </div>
                    <div className="relative text-6xl font-bold text-white">
                      {index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#00A99D] mb-4 group-hover:text-[#005461] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {pillar.description}
                    </p>
                    <button
                      onClick={() => setSelectedPillar(index)}
                      className="text-[#00A99D] font-semibold text-sm hover:text-[#005461] transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    >
                      {t("hero.readMore")}
                      <span className="text-lg">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedPillar !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPillar(null)}
          className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00A99D] to-[#00B7B5] flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {selectedPillar + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#00A99D]">
                    {pillars[selectedPillar].title}
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setSelectedPillar(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {pillars[selectedPillar].description}
              </p>
            </div>

            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedPillar(null)}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-[#00A99D] text-[#00A99D] font-semibold hover:bg-[#00A99D] hover:text-white cursor-pointer transition-all duration-300"
              >
                {t("hero.close")}
              </button>
              <Link
                href="/kontak"
                onClick={() => setSelectedPillar(null)}
                className="flex-1 px-6 py-3 rounded-lg bg-[#00A99D] text-white font-semibold hover:bg-[#005461] transition-all duration-300 text-center"
              >
                {t("hero.btnContact")}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
