"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin,  } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import {  MapPin, Mail, Phone, Sparkles } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full Stack Developer"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 overflow-hidden pt-16 bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white z-0"></div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-96 h-96 mx-auto">
              {/* Rotating Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-500 rounded-full animate-spin-slow p-1">
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>

              {/* Profile Image */}
              <img
                src="/pic1.jpg?height=300&width=300"
                alt="Profile"
                className="absolute inset-4 w-[22rem] h-[22rem] rounded-full object-cover border-4 border-blue-400/50 shadow-2xl"
              />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 shadow-lg"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-3 shadow-lg"
              >
                <span className="text-white font-bold text-sm">1+</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left order-1 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Hello Im
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 bg-clip-text text-transparent">
                Alveena
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="animate-blink text-blue-800">|</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg"
            >
              I create beautiful responsive web applications with modern technologies Passionate about clean code
              user experience and bringing ideas to life
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-gray-800">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span className="text-sm">Karachi Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">alvna7@gmai.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">03111111111</span>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 mb-8"
            >
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-2xl text-gray-500 hover:scale-125 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div> */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="flex gap-4 mb-8"
>
  {[
    { Icon: FaGithub, url: "https://github.com/Alveenawaqar01" },
    { Icon: FaLinkedin, url: "https://linkedin.com/in/alveena-2086b42b4" },
    { Icon: FaXTwitter , url: "https://x.com/Alveena67?t=oTgchR9eVvMMJ24m1E6nUg&s=09" },
  ].map(({ Icon, url }, index) => (
    <motion.a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-700 hover:scale-125 hover:text-blue-400 transition-all duration-300"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon />
    </motion.a>
  ))}
</motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Lets Talk
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-600 text-sm mb-2">Scroll to explore</p>
          <ArrowDown className="animate-bounce h-6 w-6 text-blue-400 mx-auto" />
        </motion.div> */}
      </div>
    </section>
  )
}
