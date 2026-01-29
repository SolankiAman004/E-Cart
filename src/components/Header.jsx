import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";
import { useApp } from "../App";

export default function Header() {
  const {
    getTotalItems,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    wishlist,
  } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/categories", label: "Categories" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-orange-500 hover:text-orange-600 transition"
          >
            E-Cart
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-semibold transition ${
                    isActive
                      ? "text-orange-500 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center group bg-orange-400 rounded-full  px-1 py-2 transition-all duration-300"
            >
              <Search className="h-5 w-5  text-white cursor-pointer ml-2 " />

              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
    bg-transparent
    ml-2
    w-1
    focus:text-white
    opacity-0
    text-white
    placeholder:text-white
    outline-none
    focus:outline-none
    focus:ring-0
    transition-all
    duration-300
    group-hover:w-40
    group-hover:opacity-100
    focus:w-40
    focus:opacity-100
  "
              />
            </form>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 rounded-full hover:bg-orange-100 transition"
            >
              <Heart
                className="h-6 w-6 text-gray-700"
                title="Add your product"
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to="/account"
              className="p-2 rounded-full hover:bg-orange-100 transition hidden sm:block"
            >
              <User className="h-6 w-6 text-gray-700" title="Profile" />
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full hover:bg-orange-100 transition"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-orange-100 transition"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 rounded-2xl bg-white shadow-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium transition ${
                    isActive
                      ? "bg-orange-100 text-orange-600"
                      : "hover:bg-orange-100 text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-gray-100"
            >
              Cart ({getTotalItems()})
            </NavLink>

            <NavLink
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-gray-100"
            >
              Wishlist ({wishlist.length})
            </NavLink>

            <NavLink
              to="/account"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 rounded-xl hover:bg-gray-100"
            >
              Account
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
