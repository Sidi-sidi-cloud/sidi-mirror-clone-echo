
import { Button } from "./ui/button";
const Hero = () => {
  return <section className="hero">
      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-logo mb-8">
            <img alt="Mars Planet Logo" src="/lovable-uploads/0dd9fcae-ac71-4b75-b82d-3cc9c6c3ef6b.png" className="h-40 mx-auto object-scale-down" />
          </div>
          
          <h1>Discovery One</h1>
          <h2>Service Platform for Space Market Penetration</h2>
          <p className="py-2 mx-auto max-w-xl">Transforming companies into protagonists of the space economy, regardless of their sector or size.</p>
          
          <div className="flex flex-wrap justify-center gap-4 py-[19px] px-0 mx-0 my-[90px]">
            <a href="#services" className="btn-primary">Start Your Space Journey</a>
            <a href="#how-it-works" className="btn-secondary">How It Works</a>
          </div>
          
          <div className="video-container">
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
