import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/+966565265233" // Replace with your WhatsApp number
        target="_blank"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(0,200,0,0.5)]"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          تواصل عبر واتساب
        </span>
      </Link>

      {/* Phone Button */}
      <Link
        href="tel:0565265233" // Replace with your phone number
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,137,53,0.5)]"
      >
        <Phone className="h-7 w-7 text-white" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
          اتصل بنا
        </span>
      </Link>
    </div>
  )
}

export default FloatingButtons
