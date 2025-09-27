import { CheckIcon } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ name, price, description, features, popular = false }: PricingCardProps) {
  return (
    <div className={`relative rounded-lg border-2 p-8 ${popular ? 'border-red-600 bg-red-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-red-600 text-white px-3 py-1 text-sm font-medium rounded-full">
            Paling Populer
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        popular 
          ? 'bg-red-600 text-white hover:bg-red-700' 
          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
      }`}>
        Pilih Paket
      </button>
    </div>
  )
}
