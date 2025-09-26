'use client'

import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indonesia-red rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">Bisnis.ID</span>
            </div>
            <p className="text-gray-400 mb-4">
              Memberdayakan pengusaha Indonesia dengan solusi bisnis digital
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/incorporation" className="hover:text-white">Pendirian PT/CV</a></li>
              <li><a href="/accounting" className="hover:text-white">Akuntansi</a></li>
              <li><a href="/secretary" className="hover:text-white">Sekretaris Perusahaan</a></li>
              <li><a href="/banking" className="hover:text-white">Setup Perbankan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/careers" className="hover:text-white">Karir</a></li>
              <li><a href="/contact" className="hover:text-white">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2" />
                <span>hello@bisnis.id</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bisnis.ID. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
