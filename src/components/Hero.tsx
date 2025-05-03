
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-sidi-black">
          <img 
            src="https://placehold.co/1920x1080/000000/222222?text=SIDI+Discovery+One" 
            alt="SIDI Discovery One" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 mt-16 md:mt-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            DISCOVERY ONE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{animationDelay: '200ms'}}>
            The next generation of security solutions. Redefining how we protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{animationDelay: '400ms'}}>
            <Button className="btn-primary">Reserve Now</Button>
            <Button variant="outline" className="btn-outline">Learn More</Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
