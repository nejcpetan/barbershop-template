"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="relative py-32 z-10" id="galerija">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          NAŠA DELA
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Add your gallery images here */}
          {[1, 2, 3, 4, 5, 6, 8].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square relative overflow-hidden rounded-lg"
            >
              <Image
                src={`/gallery/gallery-${item}.jpg`}
                alt={`Gallery image ${item}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
