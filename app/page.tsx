import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RiyadhDistricts from "@/components/RiyadhDistricts";
import ServiceCardsWithImages from "@/components/ServiceCardsWithImages";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Contact } from "lucide-react";
import { Metadata } from "next";
import { servicesData, districtsData, faqData } from "@/lib/data";
import HomeBlogSection from "@/components/home/HomeBlogSection";

export const metadata: Metadata = {
  title: "بريمو موفز - خدمات نقل أثاث متميزة في الرياض",
  description: "خدمات نقل احترافية في الرياض. خدمات نقل متميزة للمنازل والمكاتب. احصل على عرض سعر مجاني اليوم!",
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
  robots: "index, follow",
  openGraph: {
    title: "بريمو موفز",
    description: "خدمات نقل احترافية في الرياض",
    url: "https://primomoves.com",
    siteName: "بريمو موفز",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شعار بريمو موفز"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "بريمو موفز",
    description: "خدمات نقل احترافية في الرياض",
    images: ["/og-image.jpg"]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <HomeBlogSection />
      <ServiceCardsWithImages data={servicesData} />
      <RiyadhDistricts />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
