"use client"

export default function Warranty({ onClose }) {
  const warranties = [
    {
      category: "Microphones",
      duration: "2 Years",
      coverage: "Defects in materials and workmanship, including internal components and circuitry"
    },
    {
      category: "Speakers",
      duration: "2 Years",
      coverage: "Manufacturing defects, driver failure, and amplifier issues"
    },
    {
      category: "Amplifiers",
      duration: "2 Years",
      coverage: "Component failures, power supply issues, and audio distortion caused by defects"
    },
    {
      category: "Karaoke Machines",
      duration: "1 Year",
      coverage: "Hardware defects, hard drive failures, and system malfunctions"
    },
    {
      category: "Professional Equipment",
      duration: "3 Years",
      coverage: "Comprehensive coverage including parts and labor for all defects"
    }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Warranty Information</h1>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Warranty Coverage</h2>
            <div className="space-y-4">
              {warranties.map((warranty, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-500">{warranty.category}</h3>
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded text-sm font-semibold">{warranty.duration}</span>
                  </div>
                  <p className="text-slate-300">{warranty.coverage}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What's Covered</h2>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                <span>Manufacturing defects and material flaws</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                <span>Component and hardware failures</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                <span>Defective power supplies and batteries</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">✓</span>
                <span>Factory-installed accessories</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What's NOT Covered</h2>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✕</span>
                <span>Accidental damage, misuse, or neglect</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✕</span>
                <span>Physical damage from drops or impacts</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✕</span>
                <span>Water damage or liquid exposure</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✕</span>
                <span>Unauthorized repairs or modifications</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3">✕</span>
                <span>Normal wear and tear</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Claim Warranty</h2>
            <ol className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">1</span>
                <span>Contact our support team with proof of purchase and product serial number</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">2</span>
                <span>Describe the issue and provide photos if applicable</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">3</span>
                <span>We'll provide a return shipping label and instructions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-semibold">4</span>
                <span>Ship the product to us for evaluation and repair/replacement</span>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Extended Warranty</h2>
            <p className="text-slate-300 mb-4">
              Interested in extended coverage? We offer extended warranty plans that can add an additional 1-3 years of protection to any product. Contact our sales team for details.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
