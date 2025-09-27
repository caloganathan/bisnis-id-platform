import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
  const plans = [
    {
      name: "PT/CV Incorporation",
      price: "IDR 15,000,000",
      description: "Complete business setup with all legal requirements",
      features: [
        "Kemenkumham registration",
        "NPWP and NIB application", 
        "Local registered address",
        "Bank account assistance"
      ]
    },
    {
      name: "Accounting & Tax",
      price: "From IDR 2.5M/year",
      description: "Automated bookkeeping and tax compliance",
      features: [
        "Monthly financial reports",
        "Tax filing automation",
        "E-Faktur management", 
        "Unlimited transactions"
      ],
      popular: true
    },
    {
      name: "Complete Business",
      price: "From IDR 18M/year", 
      description: "Everything you need to run your business",
      features: [
        "All incorporation services",
        "Full accounting & tax",
        "Corporate secretary",
        "Priority support"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Paket Bisnis Transparan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harga yang jelas untuk setiap tahap bisnis Anda
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
