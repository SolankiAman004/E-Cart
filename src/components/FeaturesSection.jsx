import { Search, ShoppingCart, CreditCard, PackageCheck } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Browse Products",
    description: "Explore thousands of quality products across categories.",
    icon: Search,
  },
  {
    step: "02",
    title: "Add to Cart",
    description: "Select your favorite items and add them to the cart.",
    icon: ShoppingCart,
  },
  {
    step: "03",
    title: "Secure Checkout",
    description: "Complete your purchase with secure payment options.",
    icon: CreditCard,
  },
  {
    step: "04",
    title: "Fast Delivery",
    description: "Get your order delivered quickly to your doorstep.",
    icon: PackageCheck,
  },
]

export default function WorkProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-600 mt-3">
            Simple steps to shop smarter and faster
          </p>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <li key={index} className="relative text-center">
                
                {/* Connector line (desktop only) */}
                {index !== steps.length - 1 && (
                  <span className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gray-200"></span>
                )}

                {/* Icon */}
                <div className="relative z-10 mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-orange-100">
                  <Icon className="h-9 w-9 text-orange-500" />
                </div>

                {/* Step number */}
                <span className="text-orange-500 font-bold text-sm">
                  Step {step.step}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
