import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { categories } from "../data/products"

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg sm:text-lg">
            Explore our wide range of product categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-white rounded-xl shadow-lg  transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl  font-bold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.productCount} products</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-md font-semibold mb-4">{category.description}</p>
                <div className="flex items-center text-orange-500 font-medium group-hover:text-orange-400">
                  Shop {category.name}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
