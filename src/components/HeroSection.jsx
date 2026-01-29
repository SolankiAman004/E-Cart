import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1601524909162-ae8725290836?auto=format&fit=crop&w=1920&q=80", // Tech
  "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1920&q=80", // Smart watch
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1920&q=80", // Phone case
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1920&q=80", // Cables
  "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=1920&q=80", // Fitness
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1920&q=80", // Headphones
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1920&q=80", // Audio, // Fitness tracker
];

export default function HeroSection() {
  // ✅ ADD IT HERE (inside the component)
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] sm:h-[600px] lg:h-[650px] overflow-hidden">
      <img
        src={backgroundImages[activeBg]}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center mx-auto">
          <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-white mb-4">
            Everything You Need in One Place
          </h1>

          <p className="text-base sm:text-lg text-white/90 mb-6 max-w-xl mx-auto">
            Explore audio gear, wearables, electronics, and everyday tech
            accessories curated for quality and performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-100 transition"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/categories"
              className="inline-flex items-center border border-white/70 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              View Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
