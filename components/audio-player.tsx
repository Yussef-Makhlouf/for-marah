"use client"

import { useEffect, useRef, useState } from "react"

interface AudioPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      setError(false)
    }

    const handleError = () => {
      setError(true)
      setIsLoaded(false)
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("error", handleError)

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("error", handleError)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    if (isPlaying) {
      audio.play().catch(() => {
        setError(true)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, isLoaded])

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
      />
      {error && (
        <div className="fixed bottom-20 right-8 z-40 p-2 bg-red-100 text-red-800 text-xs rounded-lg shadow-lg">
          Audio unavailable
        </div>
      )}
    </>
  )
}
