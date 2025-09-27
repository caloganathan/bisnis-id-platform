'use client'

import { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-indonesia-red rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Bisnis.ID</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-600 hover:text-indonesia-red px-3 py-2 rounded-md text-sm font-medium">Beranda</a>
              <a href="/layanan" className="text-gray-600 hover:text-indonesia-red px-3 py-2 rounded-md text-sm font-medium">Layanan</a>
              <a href="/harga" className="text-gray-600 hover:text-indonesia-red px-3 py-2 rounded-md text-sm font-medium">Harga</a>
              <a href="/tentang" className="text-gray-600 hover:text-indonesia-red px-3 py-2 rounded-md text-sm font-medium">Tentang</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="/masuk" className="text-gray-600 hover:text-indonesia-red px-3 py-2 text-sm font-medium">Masuk</a>
            <a href="/daftar" className="btn-primary text-sm">Mulai Sekarang</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
