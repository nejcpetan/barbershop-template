"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
              <span className="text-black font-bold text-xl relative z-10">
                BS
              </span>
              <div className="absolute inset-0 bg-white opacity-50 group-hover:blur-md transition-all duration-300" />
            </div>
            <span className="text-white font-bold text-xl hidden md:block">
              BRIVNICA STYLE
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["DOMOV", "STORITVE", "GALERIJA", "EKIPA", "KONTAKT"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+38612345678"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+386 1 234 5678</span>
            </a>
            <div className="h-4 w-[1px] bg-white/20" />
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
