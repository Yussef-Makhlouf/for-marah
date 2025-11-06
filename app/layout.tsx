import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap"
})
const lora = Lora({ 
  subsets: ["latin"], 
  variable: "--font-serif-body",
  display: "swap"
})

export const metadata: Metadata = {
  title: "To Marah - A Heartfelt Journey | From Youssef with Love",
  description: "An elegant romantic experience celebrating love and connection across continents. A personalized birthday message filled with dreams, memories, and endless love.",
  keywords: ["love", "birthday", "romantic", "celebration", "Palestine", "heartfelt message"],
  authors: [{ name: "Youssef" }],
  creator: "Youssef",
  publisher: "Youssef",
  robots: "index, follow",
  openGraph: {
    title: "To Marah - A Heartfelt Journey",
    description: "An elegant romantic experience celebrating love and connection across continents",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "To Marah - A Heartfelt Journey",
    description: "An elegant romantic experience celebrating love and connection across continents",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#d4739f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
