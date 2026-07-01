import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const techGroups = [
  [
    
    
    
  ],
  [
    
   
    
   
  ],
  [
    
    
    
  ],
  [
    
    
  ],
  [
    
  ],
  [
    
  ],
  [
    
    
    
   
  ]
]

const positions = [
  { className: "top-[8%] -left-6 sm:-left-36", rotate: -12, scale: 0.9 },
  { className: "top-[32%] -left-10 sm:-left-52", rotate: 8, scale: 1.1 },
  { className: "top-[68%] -left-4 sm:-left-24", rotate: -5, scale: 1 },
  { className: "top-[12%] -right-8 sm:-right-40", rotate: 15, scale: 1.05 },
  { className: "top-[45%] -right-14 sm:-right-60", rotate: -10, scale: 0.85 },
  { className: "top-[75%] -right-4 sm:-right-20", rotate: 3, scale: 0.95 }
]

function TechBadge({ tech, index, onHover }) {
  const pos = positions[index]
  
  // Custom SVG for Cursor if needed
  const renderCursorIcon = () => (
    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.682 9.429L20 8.01l-16-6 4.9 16.5 4.782-9.081z"/>
    </svg>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, rotate: pos.rotate - 20 }}
      animate={{ opacity: 1, scale: pos.scale, rotate: pos.rotate }}
      exit={{ opacity: 0, scale: 0.3, rotate: pos.rotate + 20 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 * index }}
      className={`absolute z-30 flex items-center justify-center ${pos.className}`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="
        relative bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-full sm:rounded-2xl 
        shadow-[0_8px_30px_rgb(0,0,0,0.06)] group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
        hover:scale-110 transition-all duration-300 flex items-center gap-2 border border-black/5
      ">
        {tech.isCustom ? (
          <div className="w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center">
            {renderCursorIcon()}
          </div>
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
            alt={tech.name}
            className="w-6 h-6 sm:w-10 sm:h-10 object-contain brightness-95 group-hover:brightness-105 transition-all"
          />
        )}
        <span className="hidden group-hover:inline text-xs font-bold text-black uppercase tracking-wider pl-1 pr-1">
          {tech.name}
        </span>
      </div>
    </motion.div>
  )
}

export default function Hero({ onReadyForNavbar }) {
  const [currentGroup, setCurrentGroup] = useState(0)
  const [titleVisible, setTitleVisible] = useState(false)
  const [badgesVisible, setBadgesVisible] = useState(false)
  const isHovered = useRef(false)

  const handleHover = useCallback((hoverState) => {
    isHovered.current = hoverState
  }, [])

  useEffect(() => {
    if (!badgesVisible) return
    const interval = setInterval(() => {
      if (!isHovered.current) {
        setCurrentGroup((prev) => (prev + 1) % techGroups.length)
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [badgesVisible])

  // Simulate image load or animation triggers
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setTitleVisible(true)
      onReadyForNavbar()
    }, 600)
    
    const timer2 = setTimeout(() => {
      setBadgesVisible(true)
    }, 1800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onReadyForNavbar])

  return (
    <section id="home" className="relative h-screen bg-[#f5f5f5] text-black flex flex-col items-center overflow-hidden">
      {/* Title */}
      <div className="flex flex-col items-center pt-32 sm:pt-24 md:pt-28 z-20 relative px-4">
        <AnimatePresence>
          {titleVisible && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-[clamp(3.5rem,15vw,5.5rem)] font-extrabold tracking-tight text-center leading-[0.9] sm:leading-[1.05]"
            >
              Meet Mikiyas
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Image & Floating Tech Badges */}
      <div className="absolute bottom-0 left-0 right-0 h-[80vh] sm:h-[73vh]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-end h-full w-full">
          <div className="relative">
            {/* Desktop-only floating badges */}
            <div className="hidden sm:block absolute inset-0 z-30 pointer-events-none">
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  {badgesVisible && (
                    <motion.div className="pointer-events-auto" key={currentGroup}>
                      {techGroups[currentGroup].map((tech, idx) => (
                        <TechBadge
                          key={`${currentGroup}-${tech.name}`}
                          tech={tech}
                          index={idx}
                          onHover={handleHover}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative sm:hero-portrait-mask z-10">
              <img
                alt="Mikiyas Tesfaye"
                src="/mikiyas1.jpg"
                className="
                  w-[140%] sm:w-auto sm:max-h-[73vh] object-cover object-top 
                  -translate-y-20 sm:translate-y-5 select-none pointer-events-none
                "
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
