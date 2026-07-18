import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, Github, Linkedin, Phone, Send, Code, Twitter, MapPin, CheckCircle2, Loader2 
} from 'lucide-react'

function FadeInSection({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const contactCards = [
  {
    title: "Email",
    detail: "tesfayemikiyas142@gmail.com",
    icon: <Mail size={24} />,
    link: "mailto:tesfayemikiyas142@gmail.com"
  },
  {
    title: "GitHub",
    detail: "miki-ts",
    icon: <Github size={24} />,
    link: "https://github.com/miki-ts"
  },
  {
    title: "LinkedIn",
    detail: "Mikiyas Tesafye",
    icon: <Linkedin size={24} />,
    link: "https://www.linkedin.com/in/mikiyastesfaye/"
  },
  {
    title: "Phone",
    detail: "+251900056030",
    icon: <Phone size={24} />,
    link: "tel:+251900056030"
  },
  {
    title: "Telegram",
    detail: "@cj_miki",
    icon: <Send size={24} />,
    link: "https://t.me/cj_miki"
  },
  {
    title: "Location",
    detail: "Addis Ababa, Ethiopia",
    icon: <MapPin size={24} />,
    link: "https://maps.google.com/?q=Addis+Ababa"
  }
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "d020ee7f-6742-41bb-8571-a05eb146374f")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const result = await response.json()
      if (result.success) {
        setIsSubmitted(true)
        e.target.reset()
      } else {
        console.error("Submission error:", result)
        alert(result.message || "Something went wrong.")
      }
    } catch (err) {
      console.error("Network error:", err)
      alert("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-24 bg-[#f5f5f5] text-black">
      
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
        
        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex flex-col items-center justify-center p-6 bg-white border border-black rounded-xl 
                transition-all duration-300 text-center cursor-pointer hover:bg-black hover:text-white group
              "
            >
              <div className="mb-3 text-black group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1 text-black group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm transition-colors break-all">
                {card.detail}
              </p>
            </a>
          ))}
        </div>

       
    </section>
  )
}
