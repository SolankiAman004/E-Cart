import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all products. Items must be in original condition with all packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. Express shipping options are available at checkout.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. International shipping will be available soon.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email to monitor your package's progress.",
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative font-inter antialiased mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Quick answers to common questions
        </p>
      </div>

      <div className="divide-y divide-slate-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="py-2">
              <h2>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`flex items-center justify-between w-full text-left font-semibold py-4 px-6 rounded-2xl transition-colors duration-300 focus:outline-none ${
                    isOpen ? "bg-gradient-to-r from-orange-100 to-orange-50" : "bg-white"
                  }`}
                >
                  <span className="text-gray-900 text-lg sm:text-xl">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-orange-500" : ""
                    }`}
                  />
                </button>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-500 text-gray-600 text-sm sm:text-base px-6 ${
                  isOpen ? "max-h-96 pt-2" : "max-h-0"
                }`}
              >
                <p className="pb-3">{faq.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
