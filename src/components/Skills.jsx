import React from 'react'
import { motion } from 'framer-motion'

function FadeInSection({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "c++", "Python", "SQl"]
    },
    {
      title: "Frontend",
      skills: [
        "React", "html", "css", "Tailwind CSS", 
        "Javascript"
      ]
    },
    {
      title: "cyber security",
      skills: [
        "kali linux", "nmap", "burp suite", 
        "SQLmap","Social Engineering","John the Ripper"
      ]
    },
    {
      title: "Networking",
      skills: [
        "cisco packet tracer"
      ]
    },
   
    {
      title: "Vibe Coding & AI Agents",
      skills: [
        "Antigravity", "Cursor", "Claude", "ChatGPT", 
        "codex"
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-[#f5f5f5] text-black py-24">
      <FadeInSection className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="
                group border border-black rounded-2xl p-6 flex flex-col space-y-4 
                transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.01]
              "
            >
              <h3 className="text-lg font-semibold text-black transition-colors duration-300 text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="
                      bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg 
                      text-sm font-medium hover:bg-black hover:text-white hover:border-black 
                      transition-all duration-300 cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
