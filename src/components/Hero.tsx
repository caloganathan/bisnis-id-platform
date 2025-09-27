'use client'

import { ChevronRightIcon, PlayIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-indonesia-red to-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                🇮🇩 Dibuat untuk Indonesia
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Mulai & Jalankan Bisnis Indonesia Anda dengan Percaya Diri
              </h1>
              <p className="text-xl text-red-100 mb-8 max-w-lg">
                Pendirian PT/CV lengkap, pembukuan otomatis, dan kepatuhan pajak Indonesia. Semua yang Anda butuhkan untuk memulai dan mengembangkan bisnis di Indonesia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-indonesia-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Mulai Bisnis Saya
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indonesia-red transition-colors flex items-center justify-center">
                <PlayIcon className="mr-2 h-5 w-5" />
                Lihat Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Mulai Hari Ini
              </h3>
              <form className="space-y-4">
                <input type="text" placeholder="Nama Lengkap" className="input" />
                <input type="email" placeholder="Alamat Email" className="input" />
                <input type="tel" placeholder="Nomor Telepon" className="input" />
                <select className="input">
                  <option value="">Pilih Layanan</option>
                  <option value="incorporation">Pendirian PT/CV</option>
                  <option value="accounting">Layanan Akuntansi</option>
                  <option value="complete">Paket Lengkap</option>
                </select>
                <button type="submit" className="w-full btn-primary">
                  Konsultasi Gratis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
