"use client"

import { motion } from "framer-motion"
import Tooltip from "./tooltip"

const sharedJoys = [
  {
    id: 1,
    title: "Food Adventures",
    emoji: "🍽️",
    description:
      "Every bite becomes better when shared with a friend. Street food from bustling markets, homemade meals, and late-night snacks that taste like comfort and joy.",
    tooltip: "From Palestinian knafeh to Egyptian koshari, from street food adventures to homemade meals - every flavor is enhanced by good company. Food becomes a language of friendship when we're together.",
    gradient: "from-orange-100 to-amber-100"
  },
  {
    id: 2,
    title: "Travel & Exploration",
    emoji: "🎡",
    description:
      "Discovering new cultures, watching sunsets in foreign lands, and creating unforgettable memories. Every journey is an adventure to cherish as friends.",
    tooltip: "Every destination becomes magical when explored with a good friend. From ancient ruins to modern cities, from quiet beaches to bustling markets - the world is our playground of memories.",
    gradient: "from-sky-100 to-blue-100"
  },
  {
    id: 3,
    title: "Our Memory Gallery",
    emoji: "📝",
    description:
      "Moments frozen in time - from the first hello to dreams yet to unfold. Every photograph holds a piece of our beautiful friendship.",
    tooltip: "Each photo captures not just a moment, but an emotion, a laugh, a shared experience. Our gallery is a treasure chest of friendship memories that grows more precious with time.",
    gradient: "from-purple-100 to-pink-100"
  },
]

export default function SharedJoys() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#4a3c3c] mb-4 text-balance px-4">What We Share</h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {sharedJoys.map((joy, index) => (
            <motion.div
              key={joy.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 } 
              }}
              className="group h-full"
            >
              <Tooltip content={joy.tooltip} position="top">
                <div className={`relative h-full min-h-[350px] sm:min-h-[400px] bg-gradient-to-br ${joy.gradient} rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-white/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-[#d4739f]/30`}>
                  {/* Enhanced background effects - smaller on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#d4739f]/15 to-[#c94f6d]/5 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tr from-[#f4d4e1]/25 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-all duration-700" />
                  
                  {/* Simplified sparkles - reduced for performance */}
                  <motion.div 
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-sm sm:text-base"
                    animate={{ scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>

                  <div className="relative z-10 h-full flex flex-col text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Number.POSITIVE_INFINITY, 
                        delay: index * 1 
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
                    >
                      {joy.emoji}
                    </motion.div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4a3c3c] mb-3 sm:mb-4 font-serif group-hover:text-[#d4739f] transition-colors duration-300 px-2">
                      {joy.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#6b5b6f] leading-relaxed flex-grow flex items-center justify-center px-2">
                      {joy.description}
                    </p>
                    
                    {/* Decorative bottom element */}
                    <div className="mt-4 sm:mt-6 flex justify-center items-center space-x-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#d4739f]/60 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#c94f6d]/60 rounded-full group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '0.1s'}} />
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#d4739f]/60 rounded-full group-hover:scale-125 transition-transform duration-300" style={{animationDelay: '0.2s'}} />
                    </div>
                  </div>
                </div>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
