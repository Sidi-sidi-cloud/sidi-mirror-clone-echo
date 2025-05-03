import { Button } from "./ui/button";
const Hero = () => {
  return <section className="hero">
      <div className="container-custom">
        <div className="hero-content">
          <div className="hero-logo mb-8">
            <img src="https://marsplanet.org/wp-content/uploads/2023/04/logo-mars-planet-nuovo.png" alt="Mars Planet Logo" className="h-16 mx-auto" />
          </div>
          
          <h1>Discovery One</h1>
          <h2>Service Platform for Space Market Penetration</h2>
          <p>Transforming companies into protagonists of the space economy, regardless of their sector or size</p>
          
          <div className="flex flex-wrap justify-center gap-4">
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