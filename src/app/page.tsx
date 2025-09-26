import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Bisnis.ID?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami memahami kebutuhan bisnis Indonesia dan membuat kepatuhan menjadi sederhana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indonesia-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Pendirian PT dengan persetujuan Kemenkumham
              </h3>
              <p className="text-gray-600">
                Registrasi bisnis lengkap dengan integrasi Kemenkumham dan semua dokumen yang diperlukan
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indonesia-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Pembukuan otomatis dengan kepatuhan pajak Indonesia
              </h3>
              <p className="text-gray-600">
                Akuntansi sesuai GAAP dengan manajemen PPh, PPN, dan e-Faktur otomatis
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-indonesia-red rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Alamat terdaftar lokal di kawasan bisnis Jakarta
              </h3>
              <p className="text-gray-600">
                Alamat bisnis profesional yang memenuhi semua persyaratan regulasi
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
