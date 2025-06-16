"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const services = ["Web Development", "Web Application Apps", "UI/UX Design", "Consulting", "Graphic Design"]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Alveena
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full Stack Developer passionate about creating beautiful functional web applications that make a
                difference
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                    whileHover={{ y: -2 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span>alvna7@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span>0311111111</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span>Karachi Pakistan</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 py-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Stay Updated</h4>
            <p className="text-gray-600 mb-6">Subscribe to get notified about my latest projects and articles</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm mb-4 md:mb-0 flex items-center gap-1"
            >
              © {currentYear} Alveena Made with <FaHeart className="text-red-500 mx-1" /> All rights reserved
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 rounded-full transition-all duration-300 hover:scale-110 group"
              whileHover={{ y: -2 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-gray-600 group-hover:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
