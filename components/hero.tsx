"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

interface HeroProps {
  onExplore: () => void
}

export default function Hero({ onExplore }: HeroProps) {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef5f7] via-[#faf8f6] to-[#f5f3f0]" />
        
        {/* Romantic pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4739f' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm15 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Simplified floating hearts - reduced for performance */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xl text-[#d4739f]/15"
              initial={{ 
                x: `${20 + i * 20}%`, 
                y: "100%",
                rotate: 0
              }}
              animate={{
                y: "-10%",
                rotate: 180,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                delay: i * 5,
                ease: "linear"
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
      </div>


      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-[#c94f6d] fill-[#c94f6d] drop-shadow-lg" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <div className="relative">
            {/* Background text effect - hidden on mobile for performance */}
            <div className="hidden sm:block absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-elegant)] text-[#d4739f]/10 blur-sm transform scale-110">
              To MARAH, from Youssef with Friendship
            </div>
            
            <h1 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight text-balance font-[var(--font-elegant)] text-[#4a3c3c] px-2">
              To{" "}
              <motion.span
                className="text-[#d4739f] soft-glow inline-block relative break-words"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 15px rgba(212, 115, 159, 0.3)",
                    "0 0 25px rgba(212, 115, 159, 0.5)",
                    "0 0 15px rgba(212, 115, 159, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                MARAH
                {/* Sparkle effects - smaller on mobile */}
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-sm sm:text-lg">
                  ✨
                </span>
              </motion.span>
              ,
            </h1>
            <h1 className="relative text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-balance font-[var(--font-elegant)] text-[#4a3c3c] px-2">
              from Youssef with Friendship{" "}
              <span className="inline-block">
                🤝
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#8b6b7f] mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed italic px-4">
            "True friendship blooms beyond borders"
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#a97e96] mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            A heartfelt journey celebrating our deep and timeless friendship across continents, shared dreams in sacred lands, and a bond
            that knows no distance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(201, 79, 109, 0.4)",
              background: "linear-gradient(45deg, #c94f6d, #d4739f)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onExplore}
            className="relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-full bg-gradient-to-r from-[#d4739f] to-[#c94f6d] text-white font-bold text-sm sm:text-base md:text-lg shadow-2xl shadow-[#d4739f]/40 border-2 border-white/20 backdrop-blur-sm overflow-hidden group"
            aria-label="Explore our friendship journey"
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c94f6d] to-[#d4739f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect - reduced on mobile */}
            <motion.div
              className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="whitespace-nowrap">Explore Our Story</span>
              <span className="text-sm sm:text-base">✨</span>
            </span>
          </motion.button>
          
          {/* Floating elements around button - smaller on mobile */}
          <motion.div
            className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-2 h-2 sm:w-4 sm:h-4 bg-[#d4739f]/30 rounded-full blur-sm"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-[#c94f6d]/40 rounded-full blur-sm"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div>
          <Heart className="w-8 h-8 text-[#d4739f] fill-[#d4739f]/50" />
        </div>
        <div className="text-xs text-[#8b6b7f] font-medium tracking-wider uppercase">
          Scroll Down
        </div>
      </div>
    </section>
  )
}
