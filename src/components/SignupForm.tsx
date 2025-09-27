'use client'

import { useState } from 'react'

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    companyName: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'Account Registration',
          message: `Business Type: ${formData.businessType}\nCompany Name: ${formData.companyName}`
        })
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-lg font-semibold text-green-600 mb-2">
          Registration Request Sent!
        </h3>
        <p className="text-gray-600">
          We'll contact you within 24 hours to set up your business account and discuss next steps.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="input"
          placeholder="Your full name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input"
          placeholder="your@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input"
          placeholder="+62 812 3456 7890"
        />
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
          Business Type
        </label>
        <select
          id="businessType"
          name="businessType"
          required
          value={formData.businessType}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select business type</option>
          <option value="PT">PT (Perseroan Terbatas)</option>
          <option value="CV">CV (Comanditaire Vennootschap)</option>
          <option value="Individual">Individual/Freelancer</option>
          <option value="Foreign">Foreign Company (expanding to Indonesia)</option>
        </select>
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name (if applicable)
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
          className="input"
          placeholder="Your company name"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Business Account'}
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        By creating an account, you agree to our Terms of Service and Privacy Policy
      </p>
    </form>
  )
}
