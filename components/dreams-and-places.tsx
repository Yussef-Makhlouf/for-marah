"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const dreamPlaces = [
  {
    id: 1,
    name: "Jerusalem",
    emoji: "🕌",
    description:
      "Walking through ancient streets where history whispers timeless tales, exploring together under the golden light of this sacred city.",
    details: "The city of peace and sacred moments",
    image: "/jerusalem.jpg",
    color: "#d4af37"
  },
  {
    id: 2,
    name: "Nablus", 
    emoji: "🌾",
    description:
      "Exploring the heart of Palestine, tasting the spirit of tradition, and creating unforgettable memories in your homeland together.",
    details: "Where roots run deep and friendships grow stronger",
    image: "/nablus.jpg",
    color: "#22c55e"
  },
  {
    id: 3,
    name: "Cairo",
    emoji: "🏺", 
    description:
      "Exploring bustling streets, sharing street food adventures, and laughing under starlit Egyptian skies.",
    details: "A city of wonder and endless possibilities",
    image: "/cairo.jpg",
    color: "#f97316"
  },
]

export default function DreamsAndPlaces() {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden" aria-labelledby="dreams-heading">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#22c55e]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-[#f97316]/5 to-[#d4739f]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 id="dreams-heading" className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[var(--font-elegant)] text-[#4a3c3c] mb-4 sm:mb-6 text-balance px-4">
            Our Dream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4739f] to-[#c94f6d]">
              Adventures
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#8b6b7f] max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Places where we'll meet, explore, and create unforgettable memories as friends
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1.5 sm:h-2 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto rounded-full" />
        </motion.div>

        {/* Modern layout with overlapping elements */}
        <div className="space-y-20 sm:space-y-24 md:space-y-32">
          {dreamPlaces.map((place, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={place.id}
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  scale: 0.9
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 60
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}>
                  {/* Image Section */}
                  <motion.div
                    whileHover={{ scale: 1.01, rotateY: isEven ? 3 : -3 }}
                    className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="relative aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={place.image}
                        alt={`${place.name} - ${place.details}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Floating city name */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-3xl">{place.emoji}</span>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{place.name}</h3>
                              <p className="text-xs sm:text-sm text-gray-600">{place.details}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative border */}
                      <div 
                        className="absolute inset-0 rounded-3xl border-4 border-transparent"
                        style={{
                          background: `linear-gradient(45deg, ${place.color}20, transparent, ${place.color}20) border-box`,
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'subtract'
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className={`space-y-4 sm:space-y-6 ${isEven ? 'lg:order-2 lg:pl-6 xl:pl-8' : 'lg:order-1 lg:pr-6 xl:pr-8'}`}>
                    <motion.div
                      whileHover={{ x: isEven ? 5 : -5 }}
                      className="space-y-3 sm:space-y-4"
                    >
                      {/* City name with gradient */}
                      <h3 
                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold font-[var(--font-elegant)] mb-3 sm:mb-4 px-2 sm:px-0"
                        style={{ color: place.color }}
                      >
                        {place.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6b5b6f] leading-relaxed px-2 sm:px-0">
                        {place.description}
                      </p>
                      
                      {/* Decorative line with city color */}
                      <div 
                        className="w-16 sm:w-20 md:w-24 h-1.5 sm:h-2 rounded-full mx-2 sm:mx-0"
                        style={{ backgroundColor: place.color }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Background decorative element */}
                <div 
                  className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: place.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 sm:mt-24 md:mt-32"
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#8b6b7f] font-[var(--font-elegant)] italic leading-relaxed px-4 sm:px-6">
              "We'll meet under the sun of Jerusalem, walk through the old streets of Nablus, and share laughter and adventures in Cairo - creating memories that will last a lifetime."
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#d4af37]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#22c55e]" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#f97316]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
