"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black/90 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center relative group">
                <span className="text-black font-bold text-xl relative z-10">
                  BS
                </span>
                <div className="absolute inset-0 bg-white opacity-50 group-hover:blur-md transition-all duration-300" />
              </div>
              <div className="text-white font-bold text-xl">BRIVNICA STYLE</div>
            </div>
            <p className="text-white/60">
              Vrhunska brivnica s tradicijo in sodobnim pristopom. Poskrbimo za
              vašo popolno urejenost in dobro počutje.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Hitri Dostop</h3>
            <ul className="space-y-3">
              {["Domov", "Storitve", "Galerija", "Ekipa", "Kontakt"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5" />
                <span>Slovenska ulica 1, 1000 Ljubljana</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5" />
                <span>+386 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5" />
                <span>info@brivnica-style.si</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-bold">Delovni Čas</h3>
            <ul className="space-y-3">
              <li className="text-white/60">Pon - Pet: 9:00 - 20:00</li>
              <li className="text-white/60">Sob: 9:00 - 16:00</li>
              <li className="text-white/60">Ned: Zaprto</li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Brivnica Style. Vse pravice pridržane.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm">
                Pogoji uporabe
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm">
                Zasebnost
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
    </footer>
  );
}
