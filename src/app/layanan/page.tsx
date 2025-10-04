import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Business & Regulatory Services in Indonesia
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Navigating the legal, tax, and regulatory landscape in Indonesia requires trusted guidance and localized expertise. 
              JCSS Indonesia offers comprehensive business support services, combining legal compliance, financial structuring, 
              and strategic advisory under one roof.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Personalized Consultation?
            </h2>
            <p className="text-orange-100 mb-6">
              Contact us today for expert guidance on your Indonesia business setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/628119801985" target="_blank" rel="noopener noreferrer" 
                 className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                WhatsApp: +62 81 1980 1985
              </a>
              <a href="mailto:ask@jcss.co.id" 
                 className="bg-orange-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-900 transition-colors">
                Email: ask@jcss.co.id
              </a>
            </div>
          </div>

          {/* Service Categories - All with consistent left alignment */}
          
          {/* 1. Corporate Advisory Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Corporate Advisory Services</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Indonesia's evolving regulatory environment demands businesses to stay compliant while being agile. 
              At JCSS, we provide end-to-end corporate advisory—from setting up new entities to mergers, restructuring, 
              and navigating policy shifts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Setup & OSS Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Online Single Submission (OSS) platform assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>NIB (Business Identification Number) processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>NPWP (Tax ID) registration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business structure optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Due Diligence Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Preliminary Business Review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial Due Diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tax Due Diligence (Direct and Indirect)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Legal Compliance Review</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Structuring & Restructuring</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Joint Venture structuring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share Purchase Agreements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mergers & Demergers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Exit strategy planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Enterprise Support Services */}
          <section className="mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">2. Enterprise Support Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Financial Reporting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Indonesian GAAP / IFRS / US-GAAP preparation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>ERP-compliant financial statements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure remote access reporting</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Tax & Compliance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Annual Corporate Income Tax Returns (SPT Badan)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Withholding Tax (PPh 21, 22, 23)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>VAT (PPN) compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>BPJS (Social Security) compliance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Payroll Administration</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Employment contract administration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Monthly salary processing & payroll taxes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pension and retirement fund submissions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Accounting Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Day-to-day bookkeeping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Asset depreciation & inventory management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Intra-group accounting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Direct Tax Solutions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Direct Tax Solutions</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              JCSS delivers end-to-end direct tax services in Indonesia—from strategic planning to dispute resolution. 
              Our tax advisors bring deep expertise in international tax treaties, transfer pricing documentation, 
              and corporate income tax compliance.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">International Taxation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• BEPS compliance advisory</li>
                  <li>• POEM structuring</li>
                  <li>• DTAA advisory</li>
                  <li>• Royalty & technical fee taxation</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Transfer Pricing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• TP certification & compliance</li>
                  <li>• Benchmarking studies</li>
                  <li>• Advance Pricing Agreements</li>
                  <li>• CbCR & Master File preparation</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tax Litigation Support</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Tax audit documentation</li>
                  <li>• Litigation preparation</li>
                  <li>• Appellate representation</li>
                  <li>• Senior counsel briefing</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Expatriate Taxation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Expat compensation structuring</li>
                  <li>• Tax registration for foreign staff</li>
                  <li>• Monthly filing compliance</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tax Advisory Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Inbound investment structuring</li>
                  <li>• Regulatory representation</li>
                  <li>• Risk-based audit handling</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Corporate Tax Compliance</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Annual tax return filing</li>
                  <li>• Monthly tax computations</li>
                  <li>• Withholding tax management</li>
                  <li>• Tax incentives advisory</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Indirect Tax & VAT Solutions */}
          <section className="mb-16">
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">4. Indirect Tax & VAT Solutions</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Goods and Services Tax (GST / PPN)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>PPN transaction advisory & interpretation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>VAT due diligence and audit trail review</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Structuring indirect taxes in M&A deals</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tax refund claims & credits assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>e-Faktur, e-Bupot compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Internal finance team training</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Cyber Assurance & ISA */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cyber Assurance & Information Systems Audit (ISA)</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Strengthen cybersecurity and governance in Indonesia with JCSS's end-to-end Cyber Assurance and ISA services. 
              We help enterprises meet regulatory expectations, reduce cyber risk, and harden systems against threats.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Implementation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security solution architecture scoping</li>
                  <li>• Security tool selection & gap analysis</li>
                  <li>• Implementation oversight</li>
                  <li>• IT capability assessment</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Implementation & Review</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ERP, HRMS system requirements</li>
                  <li>• RFP development & vendor evaluation</li>
                  <li>• Pre & post-implementation reviews</li>
                  <li>• Segregation of Duties (SoD) review</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Threat & Vulnerability Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vulnerability Assessment & Penetration Testing (VAPT)</li>
                  <li>• Application security assessments</li>
                  <li>• Insider threat monitoring</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Risk & Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Information security risk assessment</li>
                  <li>• SOX 404, GDPR, PCI DSS, HIPAA compliance</li>
                  <li>• Enterprise Risk Management (ERM)</li>
                  <li>• Business Continuity Planning (BCP)</li>
                  <li>• Disaster Recovery planning</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our 25 years of expertise guide your Indonesia business journey
            </p>
            <Link
              href="/harga"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              View Our Pricing
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
