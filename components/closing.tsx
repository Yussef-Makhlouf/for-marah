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

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-elegant)] mb-8 leading-tight text-balance">
            <span className="text-[#4a3c3c]">No matter where we are,</span>
            <br />
            <span className="gradient-text">you'll always be my best friend.</span>
          </h2>
        </motion.div>

        {/* Connection visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-8 mb-12">
            {/* Yussef side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#d4739f] to-[#c94f6d] rounded-full flex items-center justify-center mb-4 shadow-2xl">
                <span className="text-3xl text-white font-bold">Y</span>
              </div>
              <p className="text-xl font-[var(--font-elegant)] text-[#4a3c3c]">YUSSEF</p>
            </motion.div>

            {/* Connection line with heart */}
            <div className="flex-1 flex items-center justify-center relative">
              <div className="w-full h-1 bg-gradient-to-r from-[#d4739f] via-[#f4d4e1] to-[#c94f6d] rounded-full" />
              <div className="absolute bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">🤍</span>
              </div>
            </div>

            {/* Marah side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#c94f6d] to-[#d4739f] rounded-full flex items-center justify-center mb-4 shadow-2xl">
                <span className="text-3xl text-white font-bold">M</span>
              </div>
              <p className="text-xl font-[var(--font-elegant)] text-[#4a3c3c]">MARAH</p>
            </motion.div>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl text-[#8b6b7f] leading-relaxed font-[var(--font-modern)]"
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
          className="glass-effect rounded-3xl p-8 modern-shadow"
        >
          <p className="text-lg text-[#a97e96] italic font-light tracking-wide font-[var(--font-modern)] mb-4">
            Friends forever, from every corner of the world
          </p>
          
     
        </motion.div>
      </div>
    </section>
  )
}
