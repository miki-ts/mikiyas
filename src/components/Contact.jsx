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
      <FadeInSection className="max-w-6xl w-full text-center space-y-8">
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

        {/* Contact Form Container */}
        <div className="mt-16 max-w-2xl mx-auto w-full bg-white p-8 sm:p-10 rounded-3xl border border-black/5 shadow-sm">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-20 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black transition-all outline-none text-black font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black transition-all outline-none text-black font-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can I help you?"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-black transition-all outline-none text-black font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-5 bg-black text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-sm 
                    hover:bg-neutral-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </FadeInSection>
    </section>
  )
}
