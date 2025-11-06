"use client"

import { motion } from "framer-motion"

export default function Closing() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      {/* Enhanced background matching the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f6] via-[#fef5f7] to-[#f5f3f0]" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4739f' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background text effect */}
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#d4739f]/5 blur-sm transform scale-110">
            No matter where we are, you'll always be my best friend.
          </div>
          
          <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-12 leading-tight text-balance text-[#4a3c3c]">
            No matter where we are, you'll always be my best friend.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-[#8b6b7f] mb-12 leading-relaxed font-light">
            True friendship knows no distance, only souls that understand each other.
          </p>
          
          {/* Enhanced Arabic text with heart */}
          <div className="relative inline-block">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#d4739f] mb-8"
            >
              <span className="inline-block mx-2">YUSSEF</span>
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block mx-4 text-[#c94f6d]"
              >
                🤍
              </motion.span>
              <span className="inline-block mx-2">MARAH</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-[#a97e96] italic font-light tracking-wide">
            Friends forever, from every corner of the world
          </p>
        </motion.div>

        {/* Simplified decorative elements - reduced for performance */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-32 -right-32 w-64 h-64 border border-[#f4d4e1]/20 rounded-full pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-64 h-64 border border-[#d4739f]/10 rounded-full pointer-events-none"
        />
      </div>
    </section>
  )
}
