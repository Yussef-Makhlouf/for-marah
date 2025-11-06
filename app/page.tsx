"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import Stories from "@/components/stories"
import BirthdayMessage from "@/components/birthday-message"
import DreamsAndPlaces from "@/components/dreams-and-places"
import SharedJoys from "@/components/shared-joys"
import Message from "@/components/message"
// import Gallery from "@/components/gallery"
import Closing from "@/components/closing"
import AudioPlayer from "@/components/audio-player"
import LoadingScreen from "@/components/loading-screen"
import SkipNavigation from "@/components/skip-navigation"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    
    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(loadingTimer)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <SkipNavigation />
      <LoadingScreen isLoading={isLoading} />
      <main id="main-content" className="relative w-full overflow-hidden bg-gradient-to-b from-[#faf8f6] via-white to-[#f5f3f0]" role="main">
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f4d4e1]/20 via-transparent to-[#fae8f0]/20" />
      </div>

      {/* Soft particle background */}
      <ParticleBackground />

      <AudioPlayer 
        isPlaying={isAudioPlaying} 
        onToggle={() => setIsAudioPlaying(!isAudioPlaying)} 
      />
      
      <motion.button
        onClick={() => setIsAudioPlaying(!isAudioPlaying)}
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#d4739f] text-white hover:bg-[#c94f6d] transition-colors shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={isAudioPlaying ? "Pause ambient music" : "Play ambient music"}
        aria-label={isAudioPlaying ? "Pause ambient music" : "Play ambient music"}
      >
        {isAudioPlaying ? "🔊" : "🔇"}
      </motion.button>

      <div className="relative z-10">
        <Hero onExplore={() => scrollToSection("stories")} />
        <Stories />
        <BirthdayMessage />
        <DreamsAndPlaces />
        <SharedJoys />
        <Message />
        {/* <Gallery /> */}
        <Closing />
      </div>
    </main>
    </>
  )
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Reduce particles on mobile for better performance
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 15 : 25
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    updateCanvasSize()

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      color: string
    }> = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 0.8 + 0.4,
        opacity: Math.random() * 0.25 + 0.1,
        color: ["#d4739f", "#f4d4e1", "#c94f6d"][Math.floor(Math.random() * 3)],
      })
    }

    let lastTime = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles.forEach((p) => {
          p.x += p.vx
          p.y += p.vy

          if (p.x < 0 || p.x > canvas.width) p.vx *= -1
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1

          ctx.fillStyle =
            p.color +
            Math.floor(p.opacity * 255)
              .toString(16)
              .padStart(2, "0")
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fill()
        })
        
        lastTime = currentTime
      }

      if (isVisible) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      updateCanvasSize()
    }

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [isVisible])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" />
}
