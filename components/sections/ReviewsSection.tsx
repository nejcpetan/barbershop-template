"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
  {
    name: "Sergej Horvat",
    role: "Stranka",
    review:
      "Najboljša brivnica v mestu. Vsakič znova navdušen nad storitvijo in profesionalnim pristopom.",
    rating: 5,
    date: "15.3.2024",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Žiga Petek",
    role: "Stranka",
    review:
      "Odlična izkušnja. Brivci so pravi mojstri svojega poklica. Vedno odhajam zadovoljen.",
    rating: 5,
    date: "10.3.2024",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Peter Novak",
    role: "Stranka",
    review:
      "Vrhunska storitev v elegantnem ambientu. Priporočam vsakemu, ki ceni kakovost.",
    rating: 5,
    date: "1.3.2024",
    image: "https://i.pravatar.cc/150?img=67",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative py-32 z-10" id="mnenja">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black" />
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-gradient-slow" />
        </div>
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
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-white/60 text-lg uppercase tracking-widest">
              Kaj pravijo naši
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 relative">
            ZADOVOLJNI STRANKE
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Decorative line connecting reviews */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative h-full">
                {/* Glass reflections */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Quote mark */}
                  <div className="absolute top-4 right-4 text-6xl text-white/10 font-serif">
                    &ldquo;
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i }}
                        className="text-white text-xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="min-h-[120px] mb-8">
                    <p className="text-white/80 text-lg leading-relaxed">
                      &ldquo;{review.review}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 relative">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden relative">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute -inset-1 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">
                        {review.name}
                      </p>
                      <p className="text-white/60">{review.role}</p>
                    </div>
                    <div className="absolute bottom-0 right-0 text-white/20 text-sm">
                      {review.date}
                    </div>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/10 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
    </section>
  );
}
