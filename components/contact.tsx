"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities Feel free to reach out to me using the
            form below or through my contact information
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Location</h4>
                  <p className="text-gray-600">Karachi Pakistan Country</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Email</h4>
                  <p className="text-gray-600">alvna7@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
                  <p className="text-gray-600">0311111111</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/80 rounded-xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-xl mb-4 text-gray-800">Lets Connect</h4>
              <p className="text-gray-600 mb-4">
                Im currently available for freelance work and fulltime positions If you have a project that needs
                some creative touch Id love to hear about it
              </p>
              <p className="text-blue-600 font-medium">Response time within 24 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Send Message</h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <p>Your message has been sent successfully</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>There was an error sending your message Please try again</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      required
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="I d like to discuss a project"
                    rows={5}
                    required
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
