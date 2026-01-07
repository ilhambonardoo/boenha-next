"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Home,
  ShoppingBag,
  Briefcase,
  Image as ImageIcon,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { STYLES } from "@/constants/styles";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  const { t } = useTranslation();

  const suggestions = [
    {
      icon: ShoppingBag,
      label: t("notfound.suggestions.items.0"),
      href: ROUTES.PRODUCTS,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Briefcase,
      label: t("notfound.suggestions.items.1"),
      href: ROUTES.BUSINESS_LINES,
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: ImageIcon,
      label: t("notfound.suggestions.items.2"),
      href: ROUTES.GALLERY,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Phone,
      label: t("notfound.suggestions.items.3"),
      href: ROUTES.CONTACT,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20">
      <div className={STYLES.container}>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <motion.h1
                className="text-[180px] sm:text-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00A99D] to-teal-300"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                404
              </motion.h1>
              <motion.div
                className="absolute -top-8 -right-8 text-6xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🐔
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {t("notfound.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t("notfound.subtitle")}
            </p>
            <p className="text-base text-gray-500 max-w-xl">
              {t("notfound.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Link
              href={ROUTES.HOME}
              className="flex items-center gap-2 bg-gradient-to-r from-[#00A99D] to-teal-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Home size={20} />
              {t("notfound.btnHome")}
            </Link>
            <Link
              href={ROUTES.CONTACT}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone size={20} />
              {t("notfound.btnContact")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t("notfound.suggestions.title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {suggestions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className={`block p-6 rounded-xl ${item.bgColor} hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div
                          className={`${item.color} p-3 rounded-full bg-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon size={28} strokeWidth={2} />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-gray-900">
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12"
          >
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">
                Kembali ke halaman sebelumnya
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
