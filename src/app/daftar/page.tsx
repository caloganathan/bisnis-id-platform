import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SignupForm from '@/components/SignupForm'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Create Your Business Account
            </h1>
            <p className="text-gray-600">
              Join thousands of entrepreneurs building successful businesses in Indonesia
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
