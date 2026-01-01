"use client";

import { motion } from "framer-motion";
import { GALLERY_ALBUMS } from "@/constants";
import { useTranslation } from "react-i18next";

const GalleryGrid = () => {
  const { t } = useTranslation();
  const albumsData = t("gallery.albums", { returnObjects: true }) as Record<
    string,
    { title: string; description: string }
  >;

  const albumKey = "peternakan";
  const activeAlbumData = GALLERY_ALBUMS[albumKey];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-boen-text mb-2">
          {albumsData[albumKey]?.title}
        </h2>
        <p className="text-gray-600">{albumsData[albumKey]?.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="columns-1 md:columns-2 gap-4 space-y-4"
      >
        {activeAlbumData.images.map((image, index) => (
          <motion.div
            key={`${albumKey}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid mb-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-auto">
              <motion.img
                src={image.url}
                alt={image.alt}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/20"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default GalleryGrid;
