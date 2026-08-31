import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

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

const projects = [
  {
    title: "Afrirobot – Design, Edit, Develop.hire top talent today.",
    description: "Afrirobot is a technology studio that blends innovation and design. We focus on creating top notch motion graphics, futuristic visuals, and smart software that take ideas and brands to new heights. With a unique mix of artistry and technology, we develop solutions that inspire, engage, and connect with people from different cultures.",
    tech: [],
    live: "https://afrirobot.vercel.app",
    github: "https://github.com/tackkety/test10",
    image: "/new.avif",
    
  },
  {
    title: "Roha mobile store – Original Mobiles With Full Warranty",
    description: "ROHA Mobile Store is a full featured online mobile phone store built for the Ethiopian market. It provides customers with a simple way to discover and order genuine smartphones, while giving the store owner a centralized admin system for managing products, inventory, orders, payments, and revenue.",
    tech: [],
    live: "https://roha-mobile-store.mystore-roha.workers.dev/",
    image: "/roha.png",
    
  },
  {
    title: "Idtree – One destination for everything you create.",
    description: "IDTree is an all-in-one digital profile platform that helps individuals, creators, and businesses share links, portfolios, products, services, and contact info, and build a professional online representation from a single customizable page.",
    tech: [],
    live: "https://test1-r9ka.vercel.app/",
    github: "https://github.com/miki-ts/test1",
    image: "/id.png",
    
  },
  {
    title: "RedHorn – SECURITY TESTING FRAMEWORK",
    description: "Advanced automated vulnerability assessment platform built with FastAPI and React for next-generation web application security.",
    tech: [],
    live: "https://redhorn.vercel.app",
    github: "https://github.com/miki-ts/RedHorn",
    image: "/redhorn.png",
    
  },
  {
    title: "Afrirobot – Figma Design",
    description: "",
    tech: [],
    live: "https://ibb.co/Rk1w6SyH",
    
    image: "/1.png",
    
  },
  {
    title: "Redhorn – Figma Design",
    description: "",
    tech: [],
    live: "https://ibb.co/HTxxchPZ",
    image: "/2.png",
    
  },
  {
    title: "Idtree - Figma Design",
    description: "",
    tech: [],
    live: "https://ibb.co/xKmcC1JZ",
    
    image: "/3.png",
    
  }
]

function ProjectCard({ project }) {
  const isVideo = project.image.endsWith('.mp4')
  
  // Custom media render with a premium card fallback gradient
  const renderMedia = () => {
    return (
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 border-b border-black/5">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackBg} opacity-20 flex items-center justify-center`}>
          
        </div>
        {isVideo ? (
          <video
            src={project.image}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // hide element on error and display fallback gradient only
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        )}
      </div>
    )
  }

  return (
    <div className="
      group flex flex-col bg-white border border-black rounded-xl overflow-hidden 
      transition-all duration-300 h-full hover:shadow-xl hover:scale-[1.01]
    ">
      {renderMedia()}
      
      <div className="p-6 flex flex-col justify-between gap-4 flex-grow">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-left text-black transition-colors duration-300 group-hover:text-neutral-800">
            {project.title}
          </h3>
          <p className="text-gray-700 text-left text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 bg-neutral-100 text-neutral-800 rounded-full text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-black rounded-lg 
                hover:bg-black hover:text-white transition duration-300 cursor-pointer
              "
            >
              <span>Live</span>
              <ExternalLink size={12} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-black rounded-lg 
                hover:bg-black hover:text-white transition duration-300 cursor-pointer
              "
            >
              <span>GitHub</span>
              <Github size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-[#f5f5f5] text-black py-24">
      <FadeInSection className="max-w-6xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
        
        <p className="mt-12 text-neutral-500 text-sm">
          Other Projects:{" "}
          <a
            href="https://github.com/miki-ts"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-black transition duration-300"
          >
            GitHub
          </a>
        </p>
      </FadeInSection>
    </section>
  )
}
