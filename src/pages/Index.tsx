import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import ResourcesSection from "@/components/ResourcesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductsSection />
        <ResourcesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
