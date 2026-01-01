"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiShieldCheck } from "react-icons/hi";
import { HiBanknotes, HiTrophy } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

export default function FeaturesSection() {
  const { t } = useTranslation();
  const featuresData = t("features", { returnObjects: true }) as {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string }>;
  };

  const featureIcons: Record<number, React.ElementType> = {
    0: HiTrophy,
    1: HiBanknotes,
    2: HiBriefcase,
    3: HiShieldCheck,
    4: HiBriefcase,
    5: HiShieldCheck,
  };

  const features: Feature[] = featuresData.items.map((item, index) => ({
    name: item.title,
    description: item.description,
    icon: featureIcons[index] || HiBriefcase,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {featuresData.title}
          </h2>
          <p className="text-xl text-gray-600">{featuresData.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="flex justify-center mb-4"
              >
                <div className="bg-[#00A99D]/10 p-4 rounded-full">
                  <feature.icon className="text-[#00A99D]" size={48} />
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
