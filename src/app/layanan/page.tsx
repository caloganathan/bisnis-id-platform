import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Layanan Kami</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Pendirian PT/CV</h3>
              <p className="text-gray-600">Registrasi bisnis lengkap dengan integrasi Kemenkumham dan semua dokumen yang diperlukan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4">Akuntansi & Pajak</h3>
              <p className="text-gray-600">Pembukuan otomatis dengan kepatuhan pajak Indonesia dan manajemen e-Faktur.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
