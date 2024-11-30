"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Instagram, Facebook, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const menuItems = ["DOMOV", "STORITVE", "GALERIJA", "EKIPA", "KONTAKT"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-wider"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Info */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-lg tracking-wider block"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-8 border-t border-white/10 space-y-6"
              >
                <a
                  href="tel:+38612345678"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>+386 1 234 5678</span>
                </a>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
