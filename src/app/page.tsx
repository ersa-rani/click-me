"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Gift, Sparkles, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import confetti from "canvas-confetti"

export default function BirthdaySurprise() {
  const [stage, setStage] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const fullMessage =
    "You make every day special just by being you. I'm so grateful to have you in my life. Happy Birthday, my love! ❤️"

  useEffect(() => {
    if (stage === 1) {
      const timer = setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [stage])

  useEffect(() => {
    if (stage === 2 && !showMessage) {
      setShowMessage(true)
      let i = 0
      const interval = setInterval(() => {
        if (i < fullMessage.length) {
          setMessage(fullMessage.substring(0, i + 1))
          i++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    }
  }, [stage])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-100 flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        {stage === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">I have a surprise for you...</h1>
            <Button
              size="lg"
              onClick={() => setStage(1)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-full text-xl"
            >
              Click to open your gift
            </Button>
          </motion.div>
        )}

        {stage === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 1, repeat: 1 }}
              className="mb-8"
            >
              <Gift className="w-24 h-24 mx-auto text-pink-500" />
            </motion.div>

            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
            >
              Happy Birthday!
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <Button
                size="lg"
                onClick={() => setStage(2)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl mt-6"
              >
                See your message ❤️
              </Button>
            </motion.div>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="p-8 bg-white/80 backdrop-blur shadow-xl border-pink-200 rounded-2xl">
              <div className="flex justify-between mb-6">
                <Heart className="text-pink-500 w-6 h-6" />
                <Sparkles className="text-yellow-500 w-6 h-6" />
                <Music className="text-purple-500 w-6 h-6" />
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-pink-600 mb-6">For My Special Someone</h2>
                <p className="text-lg text-gray-700 leading-relaxed min-h-[100px]">{message}</p>
              </div>

              <div className="flex justify-center space-x-4 mt-8">
                <Button
                  variant="outline"
                  onClick={() => {
                    confetti({
                      particleCount: 150,
                      spread: 70,
                      origin: { y: 0.6 },
                    })
                  }}
                  className="border-pink-300 text-pink-600 hover:bg-pink-50"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  More Confetti
                </Button>

                <Button onClick={() => setStage(3)} className="bg-pink-500 hover:bg-pink-600 text-white">
                  Continue
                </Button>
              </div>
            </Card>
          </motion.div>
        )}

        {stage === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl"
          >
            <Card className="p-8 bg-white/80 backdrop-blur shadow-xl border-pink-200 rounded-2xl">
              <h2 className="text-2xl font-bold text-pink-600 mb-4">I LOVE YOU SO MUCH MUJTABA💗</h2>
              <p className="text-gray-700 mb-6">FROM ERSA RANI</p>
              <ul className="text-left text-gray-700 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>You make every moment better with your kindness, humor, and endless support</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>To the one who holds my heart—Happy Birthday!</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>I hope this year brings you as much joy as you bring into my life.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cheers to a year as amazing as you are! </span>
                </li>
              </ul>

              <Button onClick={() => setStage(1)} className="bg-pink-500 hover:bg-pink-600 text-white">
                Back to Birthday Wish
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: "110%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: "-10%",
              transition: {
                duration: Math.random() * 10 + 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            <Heart fill="currentColor" size={Math.random() * 30 + 10} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

