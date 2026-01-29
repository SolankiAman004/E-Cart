import { Star, Heart, PlusSquareIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { useApp } from "../App"
import { formatPrice } from "../utils/currency"

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp()

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform duration-500 transform  overflow-hidden group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-52 sm:h-60 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full shadow-md transition-all ${
            isInWishlist(product.id)
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Heart
            className={`h-5 w-5 sm:h-6 sm:w-6 ${
              isInWishlist(product.id) ? "fill-current" : ""
            }`}
          />
        </button>

        {/* Sale Badge */}
        {product.originalPrice > product.price && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
            Sale
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-6 text-center sm:text-left">
        <Link to={`/product/${product.id}`}>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 hover:text-orange-500 transition-colors line-clamp-2">
            {product.name}
          </h4>
        </Link>

        {/* Rating */}
        <div className="flex items-center justify-center sm:justify-start mb-3">
          <div className="flex items-center space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 sm:h-5 sm:w-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price & Cart */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 justify-center sm:justify-start">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm sm:text-base lg:text-lg text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2 sm:p-2.5 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all shadow-md flex-shrink-0"
          >
            <PlusSquareIcon className="h-5 w-5 sm:h-6 sm:w-6 focus:border-none" />
          </button>
        </div>
      </div>
    </div>
  )
}
