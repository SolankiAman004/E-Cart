import { useState } from "react"
import { useForm } from "react-hook-form"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { validationRules } from "../utils/validation"
import FAQAccordion from "../components/FAQAccordion"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Contact form submitted:", data)
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or need support? Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 space-y-16">

  {/* ===== Contact Info Cards ===== */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Email */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
      <div className="bg-orange-100 p-3 rounded-lg">
        <Mail className="h-6 w-6 text-orange-500" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">Email</h3>
        <p className="text-gray-600 text-sm">support@E-Cart.com</p>
      </div>
    </div>

    {/* Phone */}
    

    {/* Address */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
      <div className="bg-purple-100 p-3 rounded-lg">
        <MapPin className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
        <p className="text-gray-600 text-sm">
           Parul PG, Ankur Complex, Town Hall, Ellisbridge, Ahmedabad, Gujarat 380006
        </p>
      </div>
    </div>

    {/* Business Hours */}
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4">
      <div className="bg-orange-100 p-3 rounded-lg">
        <Clock className="h-6 w-6 text-orange-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">Business Hours</h3>
        <p className="text-gray-600 text-sm">
          Mon–Fri: 12AM – 10PM<br />
        </p>
      </div>
    </div>
  </div>

  {/* ===== Map + Form Section ===== */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

  {/* ===== Map Section (ADDED) ===== */}
  <div className="w-full h-[400px] lg:h-full rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.5311165994394!2d72.5652151777673!3d23.022496825474853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84566d5fe3ad%3A0xc16e8264abe2c1ee!2sParul%20PG!5e1!3m2!1sen!2sin!4v1769605046315!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />
</div>


  {/* ===== Contact Form (UNCHANGED) ===== */}
  <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg p-6 sm:p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      Send us a Message
    </h2>

    {isSubmitted && (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
        <p className="text-green-700">
          Thank you for your message! We'll get back to you soon.
        </p>
      </div>
    )}

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Full name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register("email", validationRules.email)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Subject *
        </label>
        <input
          type="text"
          {...register("subject", validationRules.subject)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="What is this regarding?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          {...register("message", validationRules.message)}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Please describe your inquiry in detail..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
        <p className="text-gray-500 text-sm mt-1">
          Minimum 20 characters required
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className="w-48 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  </div>
</div>

</div>


        {/* FAQ Section */}
        <div>
          <FAQAccordion/>
        </div>
      </div>
    </div>
  )
}
