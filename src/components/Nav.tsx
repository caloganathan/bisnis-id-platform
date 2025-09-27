'use client'

import { useState } from 'react'
import { MenuIcon, XIcon, GlobeIcon } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'ID' : 'EN')
    // In a real app, this would trigger a language change
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Bisnis.ID</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                {language === 'EN' ? 'Home' : 'Beranda'}
              </a>
              <a href="/layanan" className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                {language === 'EN' ? 'Services' : 'Layanan'}
              </a>
              <a href="/harga" className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                {language === 'EN' ? 'Pricing' : 'Harga'}
              </a>
              <a href="/tentang" className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                {language === 'EN' ? 'About' : 'Tentang'}
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-600 hover:text-red-600 px-2 py-1 rounded-md text-sm"
            >
              <GlobeIcon className="h-4 w-4 mr-1" />
              {language}
            </button>
            <a href="/masuk" className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium">
              {language === 'EN' ? 'Login' : 'Masuk'}
            </a>
            <a href="/daftar" className="btn-primary text-sm">
              {language === 'EN' ? 'Get Started' : 'Mulai Sekarang'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
