import { ShoppingCart, X, Plus, Minus } from "lucide-react"
import { Link } from "react-router-dom"
import { useApp } from "../App"
import { formatPrice } from "../utils/currency"

export default function CartSidebar() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
  } = useApp()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl animate-slide-in">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-2 py-3 border-b">
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-orange-500" />
              <h3 className="text-lg font-bold text-gray-900">Your Cart</h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-14 w-14 text-gray-300 mb-4" />
                <p className="text-gray-500 mb-6">Your cart is empty</p>
                <Link
                  to="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-2xl bg-gray-50 shadow-lg hover:shadow-md transition"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-orange-500 font-medium">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 rounded-lg bg-white border hover:bg-gray-100 transition"
                        >
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="min-w-[2rem] text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 rounded-lg bg-white border hover:bg-gray-100 transition"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-lg text-red-500 hover:bg-red-00 transition"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-medium">Total</span>
                <span className="text-2xl font-bold text-orange-500">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-orange-500 text-white py-3 rounded-xl font-semibold text-center hover:bg-orange-600 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
