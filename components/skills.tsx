"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa"
import { FaPython } from "react-icons/fa6"
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "from-orange-400 to-red-500", level: 95 },
  { name: "CSS3", icon: FaCss3Alt, color: "from-blue-400 to-blue-600", level: 90 },
  { name: "JavaScript", icon: FaJs, color: "from-yellow-400 to-yellow-500", level: 92 },
  { name: "TypeScript", icon: SiTypescript, color: "from-blue-500 to-blue-700", level: 88 },
  { name: "React", icon: FaReact, color: "from-cyan-400 to-cyan-600", level: 94 },
  { name: "Next.js", icon: SiNextdotjs, color: "from-gray-600 to-gray-800", level: 90 },
  { name: "Node.js", icon: FaNodeJs, color: "from-green-400 to-green-600", level: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "from-cyan-400 to-teal-500", level: 93 },
  { name: "Python", icon: FaPython , color: "from-blue-500 to-blue-700", level: 82 },
  { name: "SQL", icon: FaDatabase, color: "from-blue-400 to-blue-600", level: 87 },
  { name: "Git", icon: FaGitAlt, color: "from-orange-500 to-red-600", level: 89 },
  { name: "Docker", icon: FaDocker, color: "from-blue-400 to-cyan-500", level: 78 },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
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
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I've worked with a variety of technologies in the web development world. Here are the main skills I've
            acquired and refined over the years.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-transparent transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-[1px]">
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl`}></div>
                <div className="relative bg-white rounded-2xl h-full w-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div
                    className={`bg-gradient-to-r ${skill.color} p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <skill.icon className="text-3xl text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-center mb-3 text-gray-800">{skill.name}</h3>

                {/* Skill Level Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className={`bg-gradient-to-r ${skill.color} h-2 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <div className="text-center text-sm text-gray-600">{skill.level}%</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
