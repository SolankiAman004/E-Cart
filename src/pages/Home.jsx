import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const featuredCategories = categories.slice(0, 4);

  const testimonialsData = [
    {
      name: "Dhurvi Patel",
      rating: 5,
      comment: "Amazing products and fast shipping! Highly recommend E-Cart.",
    },
    {
      name: " Vishal Shah",
      rating: 5,
      comment:
        "Great customer service and quality products. Will shop here again!",
    },
    {
      name: "Kunj Rathod",
      rating: 5,
      comment:
        "Love the variety of products and competitive prices. Excellent experience!",
    },
    {
      name: "Nikita Patel",
      rating: 5,
      comment: "Quick delivery and excellent support. Highly satisfied!",
    },
    {
      name: "Foram Metha",
      rating: 5,
      comment: "Products are as described and very good quality. Five stars!",
    },
    {
      name: "Raj Doshi",
      rating: 6,
      comment: "One should buy these products and  they are good quality. Five stars!",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="bg-white">
        <FeaturesSection />
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-lg">
              Explore our wide range of product categories
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 bg-white/80 backdrop-blur-md border border-transparent hover:border-orange-400"
              >
                {/* Image */}
                <div className="relative h-36 sm:h-44 lg:h-52 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 relative inline-block">
                    {category.name}
                    <span className="block h-1 w-12 mt-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-orange-500"></span>
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-2 line-clamp-2">
                    {category.description}
                  </p>
                  <p className="text-orange-500 font-semibold text-sm sm:text-base">
                    {category.productCount} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-lg">
              Discover our carefully curated selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors text-sm sm:text-base"
            >
              Explore More
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div>
        <TestimonialsCarousel testimonials={testimonialsData} />
      </div>
    </div>
  );
}
