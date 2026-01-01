"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { businessLine } from "../../constants";
import Image from "next/image";

export default function BusinessLinesSection() {
  const { t } = useTranslation();
  const businessItems = t("businessLines.items", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {t("businessLines.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("businessLines.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {businessItems.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <Link
                href={"/lini-bisnis"}
                className="bg-white rounded-xl overflow-hidden shadow-lg lg:w-[370px] lg:h-[390px] mx-auto hover:shadow-xl transition-all block"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-video overflow-hidden relative w-full h-48"
                >
                  <Image
                    src={businessLine[index]?.url || "/assets/ayam/ayam5.jpeg"}
                    alt={business.title}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {business.title}
                  </h3>
                  <p className="text-gray-600">{business.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
