import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ isLoaded }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full"
        >
          {/* Main Navigation Bar */}
          <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
            {/* Desktop Navbar */}
            <div
              className={`hidden md:flex items-center rounded-full px-2 py-1.5 transition-all duration-500 ${
                isScrolled
                  ? 'bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-black/5'
                  : 'bg-gray-100/80 backdrop-blur-sm border border-gray-200/60'
              }`}
            >
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={600}
                      spy={true}
                      offset={-70}
                      onSetActive={() => setActiveSection(item.to)}
                      className={`relative cursor-pointer text-[14px] font-medium tracking-wide transition-all duration-300 px-4 py-1.5 rounded-full block ${
                        activeSection === item.to
                          ? 'text-black bg-white shadow-sm font-semibold'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Navbar Hamburger Trigger */}
            <div className="md:hidden flex w-full justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-black bg-white/80 backdrop-blur-md rounded-full border border-black/5 shadow-sm transition-all active:scale-95"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-x-0 top-24 mx-6 z-40 bg-white/95 backdrop-blur-2xl rounded-3xl border border-black/5 shadow-2xl p-6 md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={600}
                        spy={true}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        onSetActive={() => setActiveSection(item.to)}
                        className={`cursor-pointer text-lg font-semibold tracking-wide block py-2 px-4 rounded-xl transition-all duration-300 ${
                          activeSection === item.to
                            ? 'text-black bg-neutral-100'
                            : 'text-gray-500 hover:text-gray-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
