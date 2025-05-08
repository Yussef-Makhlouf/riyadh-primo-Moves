import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المدونة | رياض بريمو",
  description: "تصفح أحدث المقالات والنصائح المتعلقة بالعقارات والانتقال في مدينة الرياض",
  keywords: [
    'مدونة نقل العفش',
    'مدونة عقارات الرياض',
    'نصائح انتقال',
    'أحياء الرياض',
    'شركات نقل الأثاث',
    'دليل الانتقال في الرياض',
    'نقل عفش الرياض'
  ],
  robots: "index, follow",
  openGraph: {
    title: "مدونة رياض بريمو",
    description: "نصائح ومقالات عن العقارات ونقل العفش في الرياض",
    url: "https://primomoves.com/blog",
    siteName: "رياض بريمو - المدونة",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مدونة رياض بريمو"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة رياض بريمو",
    description: "نصائح ومقالات عن العقارات ونقل العفش في الرياض",
    images: ["/blog-og-image.jpg"]
  }
}; 