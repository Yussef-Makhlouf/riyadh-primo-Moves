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


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />

      <ServiceCardsWithImages />
<RiyadhDistricts />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

