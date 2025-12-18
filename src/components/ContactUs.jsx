"use client"

import { useState } from "react"

export default function ContactUs({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-amber-500">support@audiovista.com</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-amber-500">1-800-AUDIO-VISTA</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Hours</h3>
                <p className="text-slate-300">Monday - Friday: 9AM - 6PM</p>
                <p className="text-slate-300">Saturday: 10AM - 4PM</p>
                <p className="text-slate-300">Sunday: Closed</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted && (
                <div className="bg-green-900 border border-green-700 text-green-200 p-4 rounded">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:border-amber-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:border-amber-500 focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:border-amber-500 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white placeholder-slate-400 focus:border-amber-500 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
