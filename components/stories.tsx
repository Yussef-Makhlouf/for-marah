"use client"

import { motion } from "framer-motion"
import Tooltip from "./tooltip"

const loveStories = [
  {
    id: 1,
    title: "When We First Connected",
    description:
      "The moment our chat began, a digital spark that ignited something timeless. In that first conversation, I knew I was meeting someone extraordinary.",
    icon: "💕",
    tooltip: "Our first conversation was like finding a missing piece of my soul. Every word we exchanged felt like destiny unfolding, creating an unbreakable bond that transcends time and space.",
    gradient: "from-blue-100 to-purple-100"
  },
  {
    id: 2,
    title: "Your Birthday - June 16",
    description:
      "The day that blessed the world with your presence. Every year on this date, my heart celebrates the woman who has become my greatest treasure.",
    icon: "🎉",
    tooltip: "June 16th isn't just your birthday - it's the anniversary of when the universe became more beautiful. This day marks the beginning of all the joy and love you bring to the world.",
    gradient: "from-pink-100 to-rose-100"
  },
  {
    id: 3,
    title: "Our Dream Journeys",
    description:
      "From the ancient streets of Jerusalem to the heart of Nablus, from the vibrant Cairo to wherever love leads us—every destination is beautiful because you'll be there.",
    icon: "🌍",
    tooltip: "Every place we dream of visiting becomes sacred because we'll experience it together. Our love transforms ordinary destinations into extraordinary memories waiting to be made.",
    gradient: "from-green-100 to-teal-100"
  },
]

export default function Stories() {
  return (
    <section id="stories" className="relative w-full py-24 px-4" aria-labelledby="stories-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="stories-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#4a3c3c] mb-4 text-balance">
            Our Journey Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10" role="list">
          {loveStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="group h-full"
              role="listitem"
            >
              <Tooltip content={story.tooltip} position="top">
                <div className={`relative h-full min-h-[400px] bg-gradient-to-br ${story.gradient} backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-[#d4739f]/30`} tabIndex={0} role="article" aria-labelledby={`story-${story.id}-title`}>
                  {/* Animated background elements */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-[#d4739f]/20 to-[#c94f6d]/10 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-[#f4d4e1]/30 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-all duration-500" />
                  
                  {/* Simplified particles - reduced for performance */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#d4739f]/30 rounded-full animate-pulse" />

                  <div className="relative z-10 h-full flex flex-col">
                    <motion.div 
                      className="text-6xl mb-6 text-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {story.icon}
                    </motion.div>
                    
                    <h3 id={`story-${story.id}-title`} className="text-2xl font-bold text-[#4a3c3c] mb-4 text-center font-serif group-hover:text-[#d4739f] transition-colors duration-300">
                      {story.title}
                    </h3>
                    
                    <p className="text-base text-[#6b5b6f] leading-relaxed text-center flex-grow flex items-center justify-center">
                      {story.description}
                    </p>
                    
                    {/* Decorative bottom element */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] rounded-full group-hover:w-16 transition-all duration-300" />
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
