
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StoreLocator from "@/components/StoreLocator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <ProductShowcase />
        <AboutSection />
        <TestimonialsSection />
        <StoreLocator />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
