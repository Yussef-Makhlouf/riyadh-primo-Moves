import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="animate-fadeIn rounded-lg border border-gray-200 bg-white p-10 shadow-md md:mx-auto md:max-w-2xl">
          <h1 className="mb-4 text-6xl font-bold text-blue-600">404</h1>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">الصفحة غير موجودة</h2>
          <p className="mb-8 text-gray-600">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
          
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-center font-medium text-white transition-all hover:bg-blue-700"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 