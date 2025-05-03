
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductSpecs from "../components/ProductSpecs";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-sidi-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductSpecs />
      <Gallery />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
