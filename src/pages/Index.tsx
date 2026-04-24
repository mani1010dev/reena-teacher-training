import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import BrandStory from "@/components/BrandStory";
import Curriculum from "@/components/Curriculum";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <BrandStory />
      <Curriculum />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsApp />
    </main>
  );
};

export default Index;
