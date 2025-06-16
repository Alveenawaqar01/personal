"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, user authentication, and admin dashboard.",
    image: "/1.png?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://assignment-7-smoky.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 124, forks: 45 },
  },
  {
    title: "Blog Website",
    description: "A delicious journey through recipes, reviews, and foodie adventures from around the world.",
    image: "/2.png?height=400&width=600",
    tags: ["React", "Node.js", "Next.js", "TypeScript","Tailwind CSS"],
    liveUrl: "https://dynamic-blog-website-blue.vercel.app/",
    githubUrl: "#",
    featured: false,
    stats: { stars: 89, forks: 23 },
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/5.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://hackathon-portofolio-website-tailwind-css.vercel.app/",
    githubUrl: "#",
    featured: true,
    stats: { stars: 67, forks: 12 },
  },
  {
    title: "Virtual Skin Dermatologist",
    description: "I have built a virtual AI assistant using Python that intelligently performs tasks.",
    image: "/3.png?height=400&width=600",
    tags: ["Phyton"],
    liveUrl: "https://virtualaiassistanskinderma.streamlit.app/",
    githubUrl: "#",
    featured: false,
    stats: { stars: 43, forks: 8 },
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-40 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects Each project reflects my passion for creating intuitive efficient and
            visually appealing applications
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200 hover:border-transparent transition-all duration-500 hover:scale-[1.02] shadow-sm hover:shadow-xl"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[1px]">
                <div className="bg-white rounded-3xl h-full w-full"></div>
              </div>

              <div className="relative z-10">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                        Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" className="border-white text-white hover:bg-white/10 shadow-lg">
                        Code <Github className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stats.stars}
                      </span>
                      <span>{project.stats.forks} forks</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-blue-600 text-sm rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
