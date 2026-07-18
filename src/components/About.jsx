import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Laptop, Lightbulb, FileText, Badge, BadgeIcon, BadgeAlert, BadgeCheck } from 'lucide-react'

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

export default function About() {
  const cards = [
    {
      icon: <GraduationCap size={36} className="text-black" />,
      title: "Education",
      description: "Third year computer science student"
    },
    {
      icon: <Laptop size={36} className="text-black" />,
      title: "Experience",
      description: "Founder of Afrirobot and Co-Founder of Red Horn "
    },
    {
      icon: <BadgeCheck size={36} className="text-black" />,
      title: "Graduate",
      description: "Insa 4th batch Graduate"
    }
  ]

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-24 bg-[#f5f5f5] text-black">
      <FadeInSection className="max-w-6xl w-full text-left space-y-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Me</h2>
        
        {/* Description Text */}
        <div className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 space-y-4 text-neutral-600">
          <p>
           I'm a passionate developer, designer, and cybersecurity enthusiast who enjoys turning ideas into digital experiences that are both functional and visually engaging. Ever since I started exploring technology, I've been fascinated by how software can solve real-world problems, automate tasks, and connect people. That curiosity continues to drive me to learn, build, and improve every day.{" "}
           
          </p>
          <p>
            My work spans web development, UI/UX design, graphic design, and cybersecurity. I enjoy creating modern, responsive websites and web applications using technologies like React, JavaScript, TypeScript, Tailwind CSS, and Node.js. Whether I'm designing clean user interfaces, developing scalable applications, or building automation tools, I focus on creating solutions that are intuitive, reliable, and built for long-term use.
          </p>
          <p >
            I'm also passionate about creativity. From designing YouTube thumbnails and branding assets to creating engaging digital content, I believe good design plays an important role in how people experience technology. Combining technical skills with creativity allows me to deliver products that are both powerful and visually appealing.
          </p>
        </div>

        {/* View Resume Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-start pb-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-center gap-2.5 px-6 py-3 
              bg-black text-white text-sm font-semibold tracking-wider uppercase rounded-full 
              transition-all duration-300 hover:bg-neutral-800 active:scale-95 
              shadow-md hover:shadow-lg cursor-pointer
            "
          >
            <FileText size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            View Resume
          </a>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="
                flex flex-col items-center justify-center p-6 rounded-xl border border-black 
                transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-[1.02]
              "
            >
              <div className="mb-4">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center text-black">{card.title}</h3>
              <p className="text-center text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  )
}
