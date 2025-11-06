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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Enhanced background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f6] via-white to-[#f5f3f0]" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4739f' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Modern layered text effect - hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-[var(--font-elegant)] text-[#d4739f]/8 blur-sm transform scale-105">
            Distance may separate us, but our friendship carries us through every moment, every challenge, every dream we share.
          </div>
          
          <h2 className="relative text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance font-[var(--font-elegant)] px-2 sm:px-4">
            <span className="inline-block text-[#4a3c3c] break-words hyphens-auto" lang="en">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="text-[#d4739f] ml-1 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              |
            </motion.span>
          </h2>
          
          {/* Decorative elements - smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d4739f]/20 to-[#c94f6d]/10 rounded-full blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-tl from-[#f4d4e1]/30 to-transparent rounded-full blur-xl"
          />
        </motion.div>

        {/* Simplified floating elements - reduced for performance and mobile */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#d4739f]/30"
              style={{
                top: `${30 + i * 30}%`,
                left: `${25 + i * 25}%`,
              }}
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
