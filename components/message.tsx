"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Message() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Distance may separate us, but our friendship carries us through every moment, every challenge, every dream we share."

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="message"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20"
    >
      {/* Enhanced background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f6] via-white to-[#f5f3f0]" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4739f' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Modern layered text effect */}
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-elegant)] text-[#d4739f]/8 blur-sm transform scale-105">
            Distance may separate us, but our friendship carries us through every moment, every challenge, every dream we share.
          </div>
          
          <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance font-[var(--font-elegant)] px-4">
            <span className="inline-block text-[#4a3c3c]">{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="text-[#d4739f] ml-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            >
              |
            </motion.span>
          </h2>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#d4739f]/20 to-[#c94f6d]/10 rounded-full blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tl from-[#f4d4e1]/30 to-transparent rounded-full blur-xl"
          />
        </motion.div>

        {/* Simplified floating elements - reduced for performance */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#d4739f]/30"
              style={{
                top: `${30 + i * 20}%`,
                left: `${20 + i * 30}%`,
              }}
              animate={{
                y: [0, 20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
