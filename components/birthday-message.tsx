"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BirthdayMessage() {
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = `في هذا و في كل عام ستكونين تلك الورده التي لا يضاهي جمالها بساتين فلسطين، و لا يمكن لأي وردة أخرى أن تأتي تقتسم معها هذا الجمال. كم تمنيت ألا تخذلني الجغرافيا وأن أكون بجانبك طوال الوقت، على الأقل في لحظاتك الأكثر تميزاً كتلك التي أكتب لك فيها الآن. لكن اليوم نحن نجوم في سماء بعضنا، أو طيور تحلق بعيداً عن الحواجز والعقبات، لا تمسنا صواريخ الشرق ولا حواجز الغرب... نكون كما نكون أينما نكون. سأظل معك دائماً وأبداً، أتمنى لك عاماً كاسمك مليئاً بالمرح والسعادة. من كل قلبي إليكِ، كل عام وأنتِ بخير، تكبرين وتنضجين، ولا تزالين تلك الوردة التي لا يضاهي جمالها جميع بساتين فلسطين. ❤️ يوسف`

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(interval)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full py-24 px-4" aria-labelledby="birthday-heading">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="birthday-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#4a3c3c] mb-4 text-balance">
            To Marah, On Your Birthday
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4739f] to-[#c94f6d] mx-auto mb-8" />
          <p className="text-base sm:text-lg text-[#d4739f] font-semibold px-4">June 16 - The Day The World Became More Beautiful</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
            <div className="bg-gradient-to-br from-white via-[#fef5f7] to-white rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-[#f4d4e1] shadow-lg overflow-hidden">

            <div className="relative z-10 text-right">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#4a3c3c] font-serif mb-8 text-balance" lang="ar" role="article" aria-live="polite" aria-label="Birthday message in Arabic">
                {displayedText}
              </p>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                className="text-[#d4739f] text-xl"
              >
                |
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
