import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              E-Cart
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your one-stop destination for premium tech products,
              accessories, and seamless online shopping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", to: "/" },
                { label: "Products", to: "/products" },
                { label: "Categories", to: "/categories" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Customer Service
            </h2>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Contact Us", to: "/contact" },
                { label: "Shipping Information", to: "#" },
                { label: "Returns & Refunds", to: "#" },
                { label: "FAQ", to: "/contact#FAQ" },
              ].map((link) => (
                <li key={link.label}>
                  {link.to.startsWith("/") ? (
                    <Link
                      to={link.to}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.to}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              Get in Touch
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>support@ecart.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>+91 98936 63940</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-0.5" />
                <span>
                  Bangalore, India
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} E-Cart. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
