import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Achievements from "@/components/Achievements";
import Curriculum from "@/components/Curriculum";
import AcademyInfo from "@/components/AcademyInfo";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <Curriculum />
      <AcademyInfo />
      <Achievements />
      <Gallery />
      <Testimonials />
      <Contact />
      <Locations />
      <Footer />
      <WhatsApp />
    </main>
  );
};

export default Index;
