"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Mail, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-32 z-10" id="kontakt">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

        {/* Additional decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/5 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Enhanced Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold text-white mb-4 relative"
          >
            KONTAKT
          </motion.h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mt-4 text-lg"
          >
            Rezervirajte svoj termin že danes
          </motion.p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl relative overflow-hidden group">
            {/* Glass reflections */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative">
              {/* Left Column - Info */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Obiščite Nas
                  </h3>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-white/60 mt-1" />
                    <div>
                      <p className="text-white">Slovenska ulica 1</p>
                      <p className="text-white">1000 Ljubljana</p>
                      <p className="text-white/60">Slovenija</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-white/60 mt-1" />
                    <div>
                      <p className="text-white">Pon - Pet: 9:00 - 20:00</p>
                      <p className="text-white">Sob: 9:00 - 16:00</p>
                      <p className="text-white/60">Ned: Zaprto</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-white/60 mt-1" />
                    <p className="text-white">+386 1 234 5678</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-white/60 mt-1" />
                    <p className="text-white">info@brivnica-style.si</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="w-6 h-6 text-white/60 mt-1" />
                    <p className="text-white">@brivnica.style</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative overflow-hidden">
                  {/* Enhanced glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/20 to-white/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="text-3xl font-bold text-white mb-4">
                    Rezervirajte Termin
                  </h3>
                  <p className="text-white/80 mb-8">
                    Izberite svoj termin in se prepustite rokam naših izkušenih
                    mojstrov
                  </p>
                  <Button className="w-full bg-white text-black hover:bg-white/90 relative group overflow-hidden h-16 text-xl font-bold tracking-wider">
                    <a
                      href="https://lime-booking.si"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        REZERVIRAJ ZDAJ
                      </span>
                      <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
    </section>
  );
}
