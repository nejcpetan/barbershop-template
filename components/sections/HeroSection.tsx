"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen z-20 pt-8">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Brivnica ozadje"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative h-[calc(100vh-6rem)] flex items-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[90%] mx-auto bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden group translate-y-24 z-30"
          >
            {/* Glass reflections */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 border border-white/20 rounded-2xl glow-effect" />

            {/* Top Row with Logo */}
            <div className="flex justify-between items-start mb-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-16 h-16 bg-white rounded-lg flex items-center justify-center relative group"
              >
                <span className="text-black font-bold text-xl relative z-10">
                  BS
                </span>
                <div className="absolute inset-0 bg-white rounded-lg opacity-50 group-hover:blur-md transition-all duration-300" />
              </motion.div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Hero Text */}
              <div className="space-y-1 relative">
                {texts.map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="overflow-hidden relative group"
                  >
                    <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                      {text}
                    </h1>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>

              {/* Right Column - CTA Content */}
              <div className="flex flex-col justify-center space-y-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-white/80 text-xl md:text-2xl mb-8 hover:text-white transition-colors duration-300">
                    DOBRODOŠLI V NAŠI PREMIUM BRIVNICI
                  </p>
                  <div className="space-y-4">
                    <p className="text-white/60">
                      Doživite vrhunsko izkušnjo striženja in nege
                    </p>
                    <p className="text-white/60">
                      Tradicija in sodobnost v popolni harmoniji
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    asChild
                    className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300 relative group overflow-hidden"
                  >
                    <a
                      href="https://lime-booking.si"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 px-8 py-3"
                    >
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                        REZERVIRAJ TERMIN
                      </span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <a
            href="#"
            className="text-white/60 hover:text-white writing-vertical transform rotate-180 transition-colors duration-300"
          >
            FOLLOW
          </a>
          {socialLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              {link}
            </a>
          ))}
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>

      {/* Bottom Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-12 border-2 border-white/20 rounded-full flex items-center justify-center relative group">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce group-hover:bg-white transition-colors duration-300" />
          <div className="absolute inset-0 border-2 border-white/0 rounded-full group-hover:border-white/20 group-hover:scale-110 transition-all duration-300" />
        </div>
      </motion.div>
    </section>
  );
}

const texts = ["STIL", "IN", "BRADA"];
const socialLinks = ["IG", "FB", "TW"];
