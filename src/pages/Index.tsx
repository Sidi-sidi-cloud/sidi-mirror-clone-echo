
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSolution from "../components/ProblemSolution";
import HowItWorks from "../components/HowItWorks";
import HalSection from "../components/HalSection";
import ServicePackages from "../components/ServicePackages";
import SuccessStories from "../components/SuccessStories";
import Credibility from "../components/Credibility";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

const Index = () => {
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <HalSection />
      <ServicePackages />
      <SuccessStories />
      <Credibility />
      <FAQ />
      <CTA />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
