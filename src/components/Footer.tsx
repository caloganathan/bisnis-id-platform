import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-orange-500" style={{ fontFamily: 'Georgia, serif' }}>JCSS</span>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 leading-tight">
                  PT. JCSS Management Consulting
                </span>
                <span className="text-xs text-gray-500 leading-tight">
                  Delivering Transparency
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Indonesian entrepreneurs with digital business solutions. 
              25 years of excellence with 500+ professionals ensuring your business 
              is fully compliant and optimized.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-white transition-colors">
                  PT/CV Registration
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 hover:text-white transition-colors">
                  Accounting & Tax
                </Link>
              </li>
              <li>
                <Link href="/harga" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tentang" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Graha Casablanca 45</div>
                  <div>Jl. Raya Casablanca, Tebet</div>
                  <div>Jakarta Selatan 12960, INDONESIA</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:indonesia@jcssglobal.com" className="text-gray-300 text-sm hover:text-white">
                  indonesia@jcssglobal.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <PhoneIcon className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div>Phone: +62 (021) 3882 5222</div>
                  <div>WhatsApp: +62 81 1980 1985</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Monday - Friday: 10:00 - 18:00 WIB
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} PT. JCSS Management Consulting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
