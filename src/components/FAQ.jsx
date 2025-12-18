"use client"

export default function FAQ({ onClose }) {
  const faqs = [
    {
      question: "What is your shipping policy?",
      answer: "We offer free shipping on all orders over $100. Standard shipping takes 5-7 business days, while expedited shipping (2-3 business days) is available for an additional fee."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping times vary from 7-21 business days depending on location. Customs and import duties may apply."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay for secure transactions."
    },
    {
      question: "Can I return a product?",
      answer: "Yes, we offer a 30-day return policy. Products must be in original condition with all packaging and accessories. Refunds are processed within 7-10 business days."
    },
    {
      question: "Are your products covered by warranty?",
      answer: "Yes, all our products come with manufacturer warranties. Most items have a 1-2 year warranty. Check individual product pages for specific warranty details."
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can use this number to track your package in real-time on our website."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! For orders of 5 or more items, please contact our sales team at sales@audiovista.com for a custom quote."
    },
    {
      question: "What if my product arrives damaged?",
      answer: "If your product arrives damaged, contact us within 48 hours with photos. We'll send a replacement immediately at no cost."
    }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-slate-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Frequently Asked Questions</h1>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl"
          >
            ✕
          </button>
        </div>

        <div className="p-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-700 pb-6 last:border-b-0">
              <h3 className="text-lg font-semibold text-amber-500 mb-3">{faq.question}</h3>
              <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
