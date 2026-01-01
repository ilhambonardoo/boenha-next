"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { PRODUCTS } from "@/constants";
import { useTranslation } from "react-i18next";

const ProductGrid = () => {
  const { t } = useTranslation();
  const productData = t("products", { returnObjects: true }) as {
    title: string;
    productSpecifications: string;
    chickenLive: {
      name: string;
      description: string;
      specifications: string[];
      ctaText: string;
    };
    chickenCutup: {
      name: string;
      description: string;
      specifications: string[];
      ctaText: string;
    };
  };
  const productList = [
    {
      id: 1,
      image: PRODUCTS[0].image,
      ctaLink: PRODUCTS[0].ctaLink,
      ...productData.chickenLive,
    },
    {
      id: 2,
      image: PRODUCTS[1].image,
      ctaLink: PRODUCTS[1].ctaLink,
      ...productData.chickenCutup,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
      {productList.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-video overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="p-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
              className="text-2xl md:text-3xl font-bold text-boen-text mb-4"
            >
              {product.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="text-gray-600 leading-relaxed mb-6"
            >
              {product.description}
            </motion.p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-boen-text mb-3">
                {productData.productSpecifications}:
              </h3>
              <ul className="space-y-2">
                {product.specifications?.map(
                  (spec: string, specIndex: number) => (
                    <motion.li
                      key={specIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.4 + specIndex * 0.05,
                      }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-boen-primary mt-1">✓</span>
                      <span>{spec}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <motion.a
              href={product.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center"
            >
              <FaWhatsapp size={20} />
              {product.ctaText}
            </motion.a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
