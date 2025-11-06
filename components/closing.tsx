"use client"

import { motion } from "framer-motion"

export default function Closing() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f6] via-[#fef5f7] to-[#f5f3f0]" />
      
      {/* Organic floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#d4739f]/10 to-[#c94f6d]/5 organic-shape-1" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tl from-[#f4d4e1]/20 to-transparent organic-shape-2" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[var(--font-elegant)] mb-6 sm:mb-8 leading-tight text-balance px-2">
            <span className="text-[#4a3c3c] block sm:inline">No matter where we are,</span>
            <br className="hidden sm:block" />
            <span className="gradient-text block sm:inline">you'll always be my best friend.</span>
          </h2>
        </motion.div>

        {/* Connection visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {/* Yussef side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center flex-shrink-0"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#d4739f] to-[#c94f6d] rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-2xl">
                <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">Y</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[var(--font-elegant)] text-[#4a3c3c]">YUSSEF</p>
            </motion.div>

            {/* Connection line with heart */}
            <div className="flex-1 flex items-center justify-center relative min-w-0">
              <div className="w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#d4739f] via-[#f4d4e1] to-[#c94f6d] rounded-full" />
              <div className="absolute bg-white rounded-full p-2 sm:p-3 shadow-lg">
                <span className="text-lg sm:text-xl md:text-2xl">🤍</span>
              </div>
            </div>

            {/* Marah side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center flex-shrink-0"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#c94f6d] to-[#d4739f] rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-2xl">
                <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">M</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-[var(--font-elegant)] text-[#4a3c3c]">MARAH</p>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8b6b7f] leading-relaxed font-[var(--font-modern)] px-4"
          >
            True friendship knows no distance, only souls that understand each other.
          </motion.p>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 modern-shadow"
        >
          <p className="text-base sm:text-lg md:text-xl text-[#a97e96] italic font-light tracking-wide font-[var(--font-modern)] mb-4 px-2">
            Friends forever, from every corner of the world
          </p>
        </motion.div>
      </div>
    </section>
  )
}
