"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}

export default function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-3",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-3",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-3"
  }

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900",
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900"
  }

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: position === "top" ? 10 : -10 }}
            transition={{ duration: 0.2 }}
             className={`absolute z-50 p-4 text-sm text-white bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm w-72 max-w-xs ${positionClasses[position]}`}
            role="tooltip"
           >
             <div className={`absolute w-0 h-0 border-6 ${arrowClasses[position]}`} />
             {/* Enhanced tooltip styling */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#d4739f]/10 to-[#c94f6d]/10 rounded-2xl" />
             <div className="relative z-10">
               <div className="text-xs text-gray-300 mb-2 uppercase tracking-wider font-semibold">Details</div>
               <div className="text-sm leading-relaxed whitespace-normal">{content}</div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
