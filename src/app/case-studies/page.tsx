import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { CheckCircleIcon, BriefcaseIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      industry: "Education Sector",
      title: "Financial Transformation for Indonesia's Largest Intercontinental School Network",
      icon: "🎓",
      profile: "A multi-location intercontinental school chain in Indonesia, operating under a fragmented, manual, and cash-based accounting environment.",
      challenges: [
        "No centralized or standardized accounting process",
        "Fully manual bookkeeping across campuses",
        "Reliance on cash-basis reporting, causing compliance blind spots",
        "Zero automation across finance, tax, and payroll functions",
        "High dependency on manual manpower without internal controls"
      ],
      solution: [
        "Implemented robust end-to-end accounting and internal control framework tailored for school operations",
        "Automated finance, tax compliance, and payroll workflows",
        "Deployed cloud-based documentation and reconciliation system",
        "Trained in-house staff while gradually shifting to co-sourced execution"
      ],
      results: [
        "Achieved 30%-40% manpower cost savings through automation",
        "Transitioned to fully digital, accrual-based accounting within 12 months",
        "Zero non-compliance instances across payroll, PPh 21, BPJS and institutional tax filings",
        "Freed up leadership time to focus on academic growth"
      ]
    },
    {
      id: 2,
      industry: "Manufacturing & Engineering",
      title: "Turning Aged Receivables into Cash Flow for a Global Elevator Brand",
      icon: "🏗️",
      profile: "A top 3 multinational elevator and escalator company operating in Indonesia, facing chronic challenges in accounts receivable recovery.",
      challenges: [
        "AR aging had balances outstanding for 5+ years",
        "Internal collection teams struggled with prioritization and follow-up",
        "Ineffective communication with long-standing debtors",
        "High working capital strain despite healthy sales",
        "Internal team was demotivated due to lack of collection success"
      ],
      solution: [
        "Deployed dedicated AR recovery team combining financial acumen with negotiation skills",
        "Implemented segmentation and risk-based prioritization of AR balances",
        "White-labeled follow-up services under client's brand guidelines",
        "Provided weekly dashboards and collection performance visibility",
        "Coordinated with sales and legal teams to unlock disputes"
      ],
      results: [
        "Increased monthly AR recovery from 5% to 35% of aging balances",
        "Within 12 months, total recovery multiplied more than 20 times the entire annual cost of engagement",
        "Significantly improved cash flow and reduced write-offs",
        "Success led to new client referral in luxury retail sector"
      ]
    },
    {
      id: 3,
      industry: "FMCG & Consumer Goods",
      title: "Strengthening Distributor Controls for a Global FMCG Leader",
      icon: "🛒",
      profile: "A multinational Fast-Moving Consumer Goods enterprise with an extensive network of distributors across Indonesia.",
      challenges: [
        "Frequent stock pilferage and abnormal inventory losses across distribution network",
        "Invoicing discrepancies causing disputes and revenue leakages",
        "Inefficient logistics operations with minimal traceability",
        "Large annual write-offs due to poor inventory visibility",
        "Lack of control at distributor and vendor level"
      ],
      solution: [
        "Conducted end-to-end review of logistics workflows from factory gate to distributor warehouse",
        "Performed surprise on-site audits at distributor and vendor locations",
        "Implemented bad stock tracking system to identify leakages in real time",
        "Developed corrective SOPs for stock handling, reconciliation, and reporting",
        "Integrated finance controls into logistics touchpoints"
      ],
      results: [
        "Pilferage and stock losses reduced significantly within 12 months",
        "Inventory write-offs cut down substantially, improving P&L hygiene",
        "Enhanced vendor accountability and invoice traceability",
        "Improved collaboration between operations and finance teams",
        "Established culture of discipline and compliance across manufacturing and distribution ecosystem"
      ]
    },
    {
      id: 4,
      industry: "Mining & Explosives",
      title: "Enabling Compliance Confidence for High-Growth India-Indonesia Joint Venture",
      icon: "⛏️",
      profile: "A publicly listed Indian explosives manufacturing company operating in a strategic joint venture with an Indonesian government entity, holding a monopoly in industrial explosives.",
      challenges: [
        "Rapid growth created compliance overload",
        "Inability to manage multi-jurisdictional statutory obligations",
        "Complex reporting needs related to tax, licensing, and safety audits",
        "Risk of non-compliance in heavily regulated sector",
        "Language and operational barriers"
      ],
      solution: [
        "Performed comprehensive Compliance Wellness Assessment across tax, payroll, and regulatory filings",
        "Implemented compliance calendar system aligned to Indonesian regulations",
        "Established quarterly internal audit programs covering factory operations and licensing",
        "Localized tax and statutory reporting with dual-language summaries",
        "Full outsourcing of payroll compliance, PPh 21, VAT filings, and sectoral returns"
      ],
      results: [
        "Client now enjoys 100% on-time compliance reporting",
        "Internal teams freed up to focus entirely on production, safety, and growth strategy",
        "Avoided potential penalties through early detection of gaps",
        "Strengthened trust with Indonesian government partners due to clean regulatory track record",
        "Became single-point partner for all compliance and audit services"
      ]
    },
    {
      id: 5,
      industry: "Textiles & Polyester Manufacturing",
      title: "Driving Global GRC Transformation for Top-3 Polyester Conglomerate",
      icon: "🏭",
      profile: "A globally integrated polyester business ranked among the top 3 polyester manufacturers in the world, with operations across Asia, Europe, and the Middle East.",
      challenges: [
        "Required specialist support in Governance, Risk & Compliance (GRC) functions",
        "Needed agile partners for co-sourcing critical functions across AR, AP, and internal audit",
        "Faced challenges in cost control and cyber governance",
        "Operational discipline issues at distributed global sites"
      ],
      solution: [
        "Conducted ITGC assessments to strengthen cybersecurity hygiene and process integrity",
        "Identified cost-optimization opportunities within inventory, procurement, and shared services",
        "Recommended scalable GRC co-sourcing model with clear SLAs and bilingual reporting",
        "Provided specialized teams for AR, AP, tax reviews, and internal audit support"
      ],
      results: [
        "Engagement expanded from Indonesia to multiple Eurasian entities within 12 months",
        "Significantly reduced manpower costs without compromising quality",
        "Internal teams refocused on strategic growth",
        "Cybersecurity posture improved with cleaner audit trails and access controls",
        "Value delivered exceeded cost of engagement in every project"
      ]
    },
    {
      id: 6,
      industry: "Agribusiness",
      title: "Securing Africa's Largest Agribusiness through IT Wellness & Cyber Resilience",
      icon: "🌾",
      profile: "One of Africa's largest agribusiness groups spanning poultry, animal feed, agro-processing, fish farming, olive oil, and veterinary services. Recognized as the continent's largest egg producer.",
      challenges: [
        "Dissatisfied with depth of previous cybersecurity assessments from global firm",
        "Operated across millions of data points with high-value IP but lacked understanding of network risks",
        "Critical infrastructure vulnerabilities not properly identified",
        "Internal audit team wanted to build in-house capacity for IT controls"
      ],
      solution: [
        "Led comprehensive IT System Wellness Review and VAPT",
        "Full-spectrum review of infrastructure, access controls, firewall policies, and endpoint security",
        "Hands-on collaboration with Internal Audit team for knowledge transfer",
        "Delivered bilingual, executive-friendly cyber risk report",
        "Provided advisory on cyber hygiene SOPs tailored for agribusiness"
      ],
      results: [
        "Exposed critical vulnerabilities previously overlooked, including risks of data theft",
        "Client took swift corrective actions with technical assistance",
        "Internal audit team empowered with practical exposure and capability-building",
        "Elevated cybersecurity governance standards across operations",
        "Discussions underway to extend IT risk reviews across group subsidiaries"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real-world success stories showcasing how JCSS transforms businesses across industries. 
              Discover how our 25 years of expertise delivers measurable results for enterprises in Indonesia and beyond.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 mb-16">
            <div className="grid md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl font-bold mb-2">6</div>
                <div className="text-orange-100">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-orange-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <div className="text-orange-100">Average Cost Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-orange-100">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{study.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-orange-600 mb-2">
                        Case Study {study.id} • {study.industry}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {study.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {study.profile}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-2 rounded-lg mr-3">
                          <ChartBarIcon className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Challenges</h3>
                      </div>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <BriefcaseIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Our Solution</h3>
                      </div>
                      <ul className="space-y-2">
                        {study.solution.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">Results Delivered</h3>
                      </div>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join these industry leaders who trusted JCSS to deliver measurable results. 
              Let's discuss how we can help your organization achieve similar success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontak"
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center justify-center"
              >
                Contact Us Today
              </Link>
              <Link
                href="/harga"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                View Our Pricing
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
