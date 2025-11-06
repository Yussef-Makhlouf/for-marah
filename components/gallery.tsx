"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  { id: 1, title: "First Hello", emoji: "💬", meaning: "The moment everything began", position: "left" },
  { id: 2, title: "Birthday Joy", emoji: "🎂", meaning: "June 16 - Your special day", position: "center" },
  { id: 3, title: "Street Food Dreams", emoji: "🍲", meaning: "Culinary adventures await", position: "right" },
  { id: 4, title: "Jerusalem's Call", emoji: "🕊️", meaning: "Sacred moments together", position: "left", image: "/jerusalem.jpg" },
  { id: 5, title: "Nablus' Heart", emoji: "🌿", meaning: "Home and heritage", position: "center", image: "/nablus.jpg" },
  { id: 6, title: "Cairo's Magic", emoji: "🏙️", meaning: "Laughter under stars", position: "right", image: "/cairo.jpg" },
]

export default function Gallery() {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#d4739f]/10 to-[#c94f6d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#f4d4e1]/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-[var(--font-elegant)] font-bold text-[#4a3c3c] mb-6 text-balance">
            Our Memory
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4739f] to-[#c94f6d]">
              Gallery
            </span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto rounded-full" />
        </motion.div>

        {/* Asymmetric layout */}
        <div className="space-y-16">
          {galleryItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const hasImage = item.image;
            
            return (
              <motion.div
                key={item.id}
                initial={{ 
                  opacity: 0, 
                  x: isEven ? -100 : 100,
                  rotateY: isEven ? -15 : 15
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 lg:gap-16 ${
                  isEven ? 'flex-row' : 'flex-row-reverse'
                } ${index < 3 ? 'lg:flex-row' : isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="space-y-4"
                  >
                    {/* <div className="text-8xl md:text-9xl inline-block">
                      {item.emoji}
                    </div> */}
                    
                    <h3 className="text-3xl md:text-4xl font-[var(--font-elegant)] font-bold text-[#4a3c3c] mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-lg md:text-xl text-[#6b5b6f] leading-relaxed max-w-md">
                      {item.meaning}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`w-20 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] rounded-full ${
                      isEven ? 'ml-0' : 'ml-auto'
                    }`} />
                  </motion.div>
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: isEven ? 5 : -5
                    }}
                    className="relative"
                  >
                    {hasImage ? (
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        
                        {/* Floating badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                          <span className="text-2xl">{item.emoji}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#f4d4e1]/30 via-white to-[#fae8f0]/20 rounded-3xl border-2 border-[#f4d4e1]/50 shadow-xl flex items-center justify-center relative overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4739f' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }} />
                        
                        <div className="text-9xl opacity-80">
                          {item.emoji}
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-6 left-6 w-3 h-3 bg-[#d4739f]/40 rounded-full" />
                        <div className="absolute bottom-6 right-6 w-2 h-2 bg-[#c94f6d]/60 rounded-full" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="flex justify-center items-center space-x-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#d4739f] to-[#c94f6d] flex items-center justify-center text-white font-bold">
              ✨
            </div>
            <p className="text-lg md:text-xl text-[#8b6b7f] font-[var(--font-elegant)] italic">
              Every moment tells our story
            </p>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#c94f6d] to-[#d4739f] flex items-center justify-center text-white font-bold">
              💫
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
