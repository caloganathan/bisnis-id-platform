'use client'

import { useState } from 'react'
import { ChevronRightIcon, PlayIcon } from 'lucide-react'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setError(result.error || 'Something went wrong')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                🇮🇩 Made for Indonesia
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Start & Run Your Indonesian Business with Confidence
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-lg">
                Complete PT/CV incorporation, automated bookkeeping, and Indonesian tax compliance. Everything you need to start and grow your business in Indonesia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="/daftar"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Start My Business
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </a>
              <button 
                onClick={() => alert('Demo video: A comprehensive walkthrough showing PT incorporation process, dashboard features, and tax compliance tools. Coming soon!')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto">
              {submitted ? (
                <div className="text-center">
                  <div className="text-green-600 text-5xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold text-green-600 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">Thank you for your interest. We'll contact you within 24 hours to discuss your Indonesian business setup needs.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-red-600 hover:text-red-700 text-sm underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Get Free Consultation
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (+62 or international)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input"
                      required
                    >
                      <option value="">Select Service Interest</option>
                      <option value="PT Incorporation">PT Incorporation</option>
                      <option value="CV Incorporation">CV Incorporation</option>
                      <option value="Accounting Services">Accounting Services</option>
                      <option value="Complete Package">Complete Package</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Tell us about your business plans (optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="input resize-none"
                    />
                    {error && (
                      <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                        {error}
                      </div>
                    )}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    We'll respond within 24 hours • No spam, promise
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
