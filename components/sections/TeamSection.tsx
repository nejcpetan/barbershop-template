"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Luka Novak",
    role: "Master Brivec",
    image: "https://i.pravatar.cc/400?img=33",
    experience: "15 let izkušenj",
    specialties: ["Klasično britje", "Fade", "Brade"],
    instagram: "@luka.barber",
  },
  {
    name: "Marko Kovač",
    role: "Stilist",
    image: "https://i.pravatar.cc/400?img=12",
    experience: "8 let izkušenj",
    specialties: ["Moderne pričeske", "Barvanje", "Styling"],
    instagram: "@marko.style",
  },
  {
    name: "Nina Kralj",
    role: "Brivka",
    image: "https://i.pravatar.cc/400?img=23",
    experience: "10 let izkušenj",
    specialties: ["Kreativno striženje", "Teksture", "Brade"],
    instagram: "@nina.cuts",
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-32 z-10" id="ekipa">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 relative">
            NAŠA EKIPA
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative">
                {/* Glass reflections */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center p-6"
                      >
                        <h4 className="text-white font-bold mb-4">
                          SPECIALNOSTI
                        </h4>
                        <ul className="space-y-2">
                          {member.specialties.map((specialty, idx) => (
                            <li key={idx} className="text-white/80 text-sm">
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-white/10 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/60 mb-2">{member.role}</p>
                  <p className="text-white/40 mb-4">{member.experience}</p>

                  <a
                    href={`https://instagram.com/${member.instagram.substring(
                      1
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {member.instagram}
                  </a>

                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}
