"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "STRIŽENJE",
    price: "25€",
    description: "Klasično ali moderno striženje las po vaši želji",
    features: ["Posvet", "Pranje", "Styling"],
    image: "/haircut.jpg",
  },
  {
    title: "BRITJE",
    price: "20€",
    description: "Tradicionalno britje z britvico in toplim brisačam",
    features: ["Priprava kože", "Masaža", "Nega"],
    image: "/shaving.jpg",
  },
  {
    title: "BRADA",
    price: "15€",
    description: "Oblikovanje in nega brade s profesionalnimi izdelki",
    features: ["Striženje", "Oblikovanje", "Nega"],
    image: "/beard.jpg",
  },
  {
    title: "VIP",
    price: "50€",
    description: "Striženje, britje in nega obraza z premium izdelki",
    features: ["Vse storitve", "Premium izdelki", "Daljša nega"],
    image: "/vip.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative py-32 overflow-hidden min-h-screen -mt-48 z-10"
      id="storitve"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24 pt-48"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            NAŠE STORITVE
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Service Card */}
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Floating Price Tag */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 right-6"
                  >
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                      <span className="text-2xl font-bold text-white">
                        {service.price}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  <h3 className="text-3xl font-bold text-white mb-4 relative">
                    {service.title}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white/20 group-hover:w-full transition-all duration-300" />
                  </h3>

                  <div className="text-white/60 mb-6 relative pl-4">
                    <div className="absolute left-0 top-0 w-1 h-full bg-white/20" />
                    {service.description}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        className="text-white/80 flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-white/20 rounded-full" />
                        <span className="relative group-hover:translate-x-2 transition-transform duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
