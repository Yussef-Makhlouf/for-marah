"use client"

import { motion } from "framer-motion"
import Tooltip from "./tooltip"

const dreamPlaces = [
  {
    id: 1,
    name: "Jerusalem 🕌",
    description:
      "Walking through ancient streets where history whispers timeless tales, exploring together under the golden light of this sacred city.",
    details: "The city of peace and sacred moments",
    tooltip: "In Jerusalem, we'll walk where prophets walked, pray where saints prayed, and create memories as friends. Every stone tells a story, and our friendship will add another beautiful chapter.",
    gradient: "from-amber-100 to-yellow-100"
  },
  {
    id: 2,
    name: "Nablus 🌾",
    description:
      "Exploring the heart of Palestine, tasting the spirit of tradition, and creating unforgettable memories in your homeland together.",
    details: "Where roots run deep and friendships grow stronger",
    tooltip: "Nablus holds your heritage, your stories, your roots. Together we'll taste the sweetness of knafeh and the richness of tradition, creating new friendship memories on ancient soil.",
    gradient: "from-emerald-100 to-green-100"
  },
  {
    id: 3,
    name: "Cairo 🏺",
    description:
      "Exploring bustling streets, sharing street food adventures, and laughing under starlit Egyptian skies.",
    details: "A city of wonder and endless possibilities",
    tooltip: "Cairo, the city of a thousand minarets and endless dreams. We'll explore to the rhythm of the Nile, feast under pyramid shadows, and write our friendship story in the stars above the eternal city.",
    gradient: "from-orange-100 to-red-100"
  },
]

export default function DreamsAndPlaces() {
  return (
    <section className="relative w-full py-24 px-4" aria-labelledby="dreams-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="dreams-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#4a3c3c] mb-4 text-balance">
            Our Dream Adventures
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#8b6b7f] max-w-2xl mx-auto mb-8 px-4">
            Places where we'll meet, explore, and create unforgettable memories as friends
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10" role="list">
          {dreamPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateX: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateX: 5,
                scale: 1.03,
                transition: { duration: 0.4 } 
              }}
              className="group h-full"
            >
              <Tooltip content={place.tooltip} position="bottom">
                <div className={`relative h-full min-h-[450px] bg-gradient-to-br ${place.gradient} rounded-3xl p-8 border-2 border-white/60 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-[#d4739f]/40`} tabIndex={0} role="article" aria-labelledby={`place-${place.id}-title`}>
                  {/* Enhanced background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#d4739f]/15 to-[#c94f6d]/5 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-125 transition-all duration-700" />
                  <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-[#f4d4e1]/25 to-transparent rounded-full blur-3xl group-hover:scale-125 transition-all duration-700" />
                  
                  {/* Simplified decorative elements - reduced for performance */}
                  <motion.div 
                    className="absolute top-6 right-6 w-2 h-2 bg-[#d4739f]/40 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 h-full flex flex-col">
                    <motion.h3 
                      id={`place-${place.id}-title`} 
                      className="text-3xl font-bold text-[#4a3c3c] mb-6 text-center font-serif group-hover:text-[#d4739f] transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {place.name}
                    </motion.h3>
                    
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="text-base text-[#6b5b6f] leading-relaxed text-center mb-6">
                        {place.description}
                      </p>
                      
                      <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 border border-white/40">
                        <p className="text-sm text-[#d4739f] italic font-semibold text-center">
                          {place.details}
                        </p>
                      </div>
                    </div>
                    
                    {/* Enhanced decorative bottom element */}
                    <div className="mt-6 flex justify-center items-center space-x-2">
                      <div className="w-2 h-2 bg-[#d4739f]/60 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <div className="w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] rounded-full group-hover:w-20 transition-all duration-300" />
                      <div className="w-2 h-2 bg-[#c94f6d]/60 rounded-full group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Tooltip>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8b6b7f] font-serif italic px-4">
            "We'll meet under the sun of Jerusalem, walk through the old streets of Nablus, and share laughter and
            adventures in Cairo - creating memories that will last a lifetime."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
