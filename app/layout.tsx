import FloatingButtons from '@/components/FloatingButtons'
import './globals.css'
import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import Script from 'next/script'

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
    'ونيت نقل عفش',
    'افضل شركة نقل عفش في الرياض',
    'افضل شركة نقل عفش الرياض',
    'افضل شركة نقل عفش بالرياض',
    'افضل شركة نقل اثاث',
    'أفضل شركات نقل الاثاث',
    'نقل عفش بالرياض رخيص',
    'شركة نقل عفش بالرياض رخيصة',
    'نقل عفش بالرياض حراج',
    'نقل عفش بالرياض السويدي',
    'نقل عفش بالرياض وخارج الرياض',
    'نقل عفش بالرياض نقل اثاث بالرياض',
    'شركة نقل عفش بالرياض نقل اثاث بالرياض',
    'دينا نقل عفش بالرياض نقل اثاث بالرياض',
    'نقل عفش بالرياض نقل اثاث',
    'نقل عفش بالرياض نقل اثاث بالرياض وخارج الرياض الازدهار'
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
    url: 'https://primomoves.com',
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
    canonical: 'https://primomoves.com',
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16595993654"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16595993654');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16595993654/kWc4CMLDtqIaELaIy-k9',
                'value': 1.0,
                'currency': 'EGP',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className={tajawal.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}

