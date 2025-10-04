'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { CheckIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function PricingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName)
    setTimeout(() => setSelectedPackage(null), 3000)
  }

  const setupPackages = [
    {
      name: "Business Starter",
      price: "Rp 15,000,000",
      originalPrice: "Rp 25,000,000",
      savings: "Save Rp 10,000,000!",
      description: "Complete Indonesia PT setup with full compliance support",
      features: [
        "Company registration with Kemenkumham",
        "NIB (Business Identification Number) processing",
        "Tax registration (NPWP, PKP)",
        "Bank account opening assistance",
        "Legal compliance documentation",
        "3 months free compliance support"
      ],
      popular: false,
      timeline: "7-14 business days"
    },
    {
      name: "Foreign Investor Pro",
      price: "Rp 45,000,000",
      originalPrice: "Rp 65,000,000",
      savings: "Save Rp 20,000,000!",
      description: "Perfect for foreign investors starting business in Indonesia",
      features: [
        "All Business Starter features",
        "Foreign investment license (PMA)",
        "BKPM coordination & submissions",
        "Immigration work permit assistance",
        "Multi-location business license",
        "Priority government liaisons",
        "6 months free compliance support",
        "Dedicated account manager"
      ],
      popular: true,
      timeline: "14-21 business days"
    },
    {
      name: "Enterprise Complete",
      price: "Custom Quote",
      originalPrice: "Rp 100,000,000+",
      savings: "Customized solution",
      description: "Complete setup solution for serious entrepreneurs",
      features: [
        "All Foreign Investor Pro features",
        "Multiple company structures",
        "International tax planning",
        "Supply chain setup consultation",
        "Advanced compliance automation",
        "24/7 priority support",
        "12 months free compliance support",
        "Legal retainer services"
      ],
      popular: false,
      timeline: "21-30 business days"
    }
  ]

  const ongoingServices = [
    { name: "Monthly Accounting", price: "Rp 800K - 2.5M" },
    { name: "Tax Filing & Compliance", price: "Rp 500K/month" },
    { name: "Payroll Management", price: "Rp 100K/employee" },
    { name: "Legal Documentation", price: "Rp 300K/document" },
    { name: "Virtual Office", price: "Rp 500K/month" },
    { name: "Business License Renewal", price: "Rp 1M/year" }
  ]

  const verificationServices = [
    {
      name: "Professional Inventory Verification",
      description: "Professional inventory verification and counting services",
      price: "Rp 8,500,000",
      features: [
        "Comprehensive physical count verification",
        "Inventory management system review",
        "Stock aging analysis",
        "Process improvement recommendations"
      ]
    },
    {
      name: "Supply Chain Management Review",
      description: "Complete supply chain management and logistics evaluation",
      price: "Rp 12,000,000",
      features: [
        "End-to-end supply chain analysis",
        "Vendor assessment & optimization",
        "Logistics efficiency review",
        "Cost reduction strategies"
      ]
    },
    {
      name: "Asset Verification Complete",
      description: "Comprehensive one-time fixed asset verification",
      price: "Rp 15,000,000",
      features: [
        "Complete fixed asset verification",
        "Asset lifecycle management review",
        "Depreciation analysis",
        "Asset optimization recommendations"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Business Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clear pricing for Indonesia business setup with <span className="font-semibold text-orange-600">25 years of trusted experience</span>
            </p>
          </div>

          {selectedPackage && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center">
              Thank you! You have selected: <strong>{selectedPackage}</strong>
              <br />We will contact you shortly for a free consultation!
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Professional Team</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">5000+</div>
                <div className="text-gray-600">Registered Businesses</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-gray-600">Compliance Rate</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Business Setup Packages
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {setupPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`relative bg-gradient-to-br ${
                    pkg.popular 
                      ? 'from-orange-600 to-orange-700 text-white' 
                      : 'from-gray-800 to-gray-900 text-white'
                  } rounded-2xl p-8 shadow-xl ${
                    pkg.popular ? 'scale-105 ring-4 ring-orange-200' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center">
                        <StarIcon className="h-4 w-4 mr-1" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <div className="text-3xl font-bold">{pkg.price}</div>
                      {pkg.originalPrice !== "Rp 100,000,000+" && (
                        <div className="text-sm opacity-75 line-through">{pkg.originalPrice}</div>
                      )}
                    </div>
                    <p className="text-white/90 mb-4">{pkg.description}</p>
                    <div className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {pkg.timeline}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-400 text-green-900 px-4 py-3 rounded-lg mb-6 font-semibold text-center">
                    {pkg.savings}
                  </div>

                  <button 
                    onClick={() => handlePackageSelect(pkg.name)}
                    className="w-full bg-white text-orange-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {pkg.price === "Custom Quote" ? "Get Custom Quote" : "Select Package"}
                    <ArrowRightIcon className="inline h-4 w-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Ongoing Compliance & Accounting Services
            </h2>
            <p className="text-center text-gray-600 mb-8">Indonesia Business Services</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-gray-700 font-medium">{service.name}</span>
                  <span className="font-bold text-orange-600 whitespace-nowrap ml-4">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Professional Verification Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              Professional services for inventory verification, asset management, and supply chain optimization
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {verificationServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-orange-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-orange-600 mb-6">{service.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handlePackageSelect(service.name)}
                    className="w-full border border-orange-600 text-orange-600 py-3 px-6 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-orange-50 rounded-lg">
              <p className="text-orange-800 text-center">
                <strong>Note:</strong> All verification services include comprehensive process review with benchmarking practices where applicable
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose PT. JCSS Management Consulting?</h2>
            <p className="text-xl mb-6 text-orange-100">
              25 years of proven experience in Indonesia business setup and compliance. 
              Our professional team of 500+ ensures your business is fully compliant and optimized for success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🏢</div>
                <div className="font-semibold">Registered with BKPM</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📋</div>
                <div className="font-semibold">ISO Certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="font-semibold">5000+ Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
