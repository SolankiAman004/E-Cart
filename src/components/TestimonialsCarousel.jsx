import { Star } from "lucide-react";

export default function TestimonialsCarousel({ testimonials }) {
  // Duplicate array for seamless infinite scroll
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-scroll whitespace-nowrap mb-8">
            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex-shrink-0 sm:w-80"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Comment */}
                <p className="text-gray-600 mb-3 text-sm sm:text-base overflow-hidden truncate">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info with Avatar */}
                <div className="flex items-center mt-2">
                  {/* Dummy Image */}
                  <img
                    src={`https://i.pravatar.cc/40?img=${index + 1}`} // generates dummy avatars
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3"
                  />
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
