"use client";

import { motion } from "framer-motion";

interface OtherBusiness {
  title: string;
  image: string;
}

import Image from "next/image";

const OtherBusinesses = () => {
  const otherBusinesses: OtherBusiness[] = [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherBusinesses.map((business: OtherBusiness, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            whileHover={{ scale: 1.03, y: -10 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="aspect-video overflow-hidden"
            >
              <Image
                src={business.image}
                alt={business.title}
                width={200}
                height={300}
              />
            </motion.div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-boen-text mb-3">
                {business.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deskripsi singkat tentang bisnis lain yang sedang dikembangkan.
                Informasi lebih lanjut akan segera tersedia.
              </p>
              <div className="mt-4">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  Coming Soon
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OtherBusinesses;
