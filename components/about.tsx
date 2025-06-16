"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Award, Coffee, Users, Clock } from "lucide-react"

const stats = [
  { icon: Award, label: "Projects Completed", value: "10+" },
  { icon: Coffee, label: "Cups of Coffee", value: "20+" },
  { icon: Users, label: "Happy Clients", value: "15+" },
  { icon: Clock, label: "Years Experience", value: "1+" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-200 rounded-full transform rotate-6 opacity-30"></div> */}
              <div className="relative w-96 h-96 mx-auto rounded-full overflow-hidden border-4 border-blue-300 shadow-2xl bg-white">
                <img src="/pic1.jpg?height=400&width=400" alt="Profile" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who am I?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I m a passionate Full Stack Developer with expertise in creating responsive and dynamic web applications
              With a strong foundation in both frontend and backend technologies I bring ideas to life through clean
              efficient code
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development started 1 years ago and since then Ive worked on various projects ranging
              from small business websites to complex enterprise applications
            </p>

            <div className="grid grid-cols-2 gap-6 my-8">
              {[
                { label: "Name", value: "Alveena waqar" },
                { label: "Email", value: "alvna7@gmail.com" },
                { label: "Location", value: "Karachi, Pakistan" },
                { label: "Availability", value: "Full-time" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                  <h4 className="font-bold text-blue-600 text-sm uppercase tracking-wide">{item.label}:</h4>
                  <p className="text-gray-700 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Download CV <Download className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
