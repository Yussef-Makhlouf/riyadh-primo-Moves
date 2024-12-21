import FloatingButtons from '@/components/FloatingButtons'
import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'نقل عفش الرياض | خدمات نقل الأثاث الاحترافية في جميع أحياء الرياض',
  description: 'شركة متخصصة في نقل العفش والأثاث في الرياض. نقدم خدمات نقل سريعة وآمنة مع ضمان سلامة ممتلكاتك. فك وتركيب وتغليف احترافي للأثاث. تغطية شاملة لجميع أحياء الرياض الشمالية والجنوبية والشرقية والغربية. اتصل بنا الآن للحصول على خدمة متميزة وأسعار تنافسية!',
  keywords: [
    'نقل عفش الرياض',
    'نقل اثاث الرياض',
    'شركة نقل عفش',
    'نقل اثاث',
    'فك وتركيب اثاث',
    'تغليف اثاث',
    'نقل عفش شمال الرياض',
    'نقل عفش شرق الرياض',
    'نقل عفش غرب الرياض',
    'نقل عفش جنوب الرياض',
    'شركة نقل اثاث بالرياض',
    'افضل شركة نقل عفش',
    'نقل عفش رخيص',
    'سيارات نقل عفش',
    'دينا نقل عفش',
    'ونيت نقل عفش'
  ],
  authors: [{ name: 'نقل عفش الرياض' }],
  creator: 'نقل عفش الرياض',
  publisher: 'نقل عفش الرياض',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'نقل عفش الرياض | خدمات نقل الأثاث الاحترافية',
    description: 'شركة متخصصة في نقل العفش والأثاث في الرياض. خدمات نقل سريعة وآمنة مع ضمان سلامة ممتلكاتك',
    url: 'https://yourwebsite.com',
    siteName: 'نقل عفش الرياض',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'نقل عفش الرياض',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://yourwebsite.com',
  },
  category: 'خدمات نقل الأثاث',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}

