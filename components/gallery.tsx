"use client"

import { motion } from "framer-motion"

const galleryItems = [
  { id: 1, title: "First Hello", emoji: "💬", meaning: "The moment everything began" },
  { id: 2, title: "Birthday Joy", emoji: "🎂", meaning: "June 16 - Your special day" },
  { id: 3, title: "Street Food Dreams", emoji: "🍲", meaning: "Culinary adventures await" },
  { id: 4, title: "Jerusalem's Call", emoji: "🕊️", meaning: "Sacred moments together" },
  { id: 5, title: "Nablus' Heart", emoji: "🌿", meaning: "Home and heritage" },
  { id: 6, title: "Cairo's Magic", emoji: "🏙️", meaning: "Laughter under stars" },
]

export default function Gallery() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold font-serif text-center text-[#4a3c3c] mb-4 text-balance"
        >
          Our Memory Gallery
        </motion.h2>
        <div className="flex justify-center mb-16">
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                boxShadow: "0 20px 40px rgba(212, 115, 159, 0.15)",
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-white via-[#f4d4e1]/20 to-white rounded-2xl overflow-hidden aspect-square cursor-pointer border border-[#f4d4e1] transition-all duration-300 soft-glow flex items-center justify-center p-6">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                    className="text-6xl mb-4"
                  >
                    {item.emoji}
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#4a3c3c] font-serif mb-1">{item.title}</h3>
                  <p className="text-sm text-[#d4739f]">{item.meaning}</p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#d4739f]/0 to-[#f4d4e1]/0 group-hover:from-[#d4739f]/10 group-hover:to-[#f4d4e1]/10 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
