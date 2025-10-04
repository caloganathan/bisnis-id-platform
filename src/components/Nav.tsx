'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('EN')

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'EN' ? 'ID' : 'EN')
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/harga' },
    { name: 'Services', href: '/layanan' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/tentang' },
    { name: 'Contact', href: '/kontak' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/jcss-logo.png"
                alt="JCSS Management Consulting"
                width={120}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              <GlobeAltIcon className="h-4 w-4" />
              <span>{currentLang}</span>
            </button>

            <Link
              href="/daftar"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-orange-600">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-orange-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
