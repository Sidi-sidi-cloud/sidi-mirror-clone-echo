
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  "https://placehold.co/1200x800/0A0A0A/222222?text=Discovery+One+Image+1",
  "https://placehold.co/1200x800/0A0A0A/222222?text=Discovery+One+Image+2",
  "https://placehold.co/1200x800/0A0A0A/222222?text=Discovery+One+Image+3",
  "https://placehold.co/1200x800/0A0A0A/222222?text=Discovery+One+Image+4"
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="section bg-sidi-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h2>
          <p className="text-gray-400 text-balance">
            Explore the Discovery One from every angle
          </p>
        </div>

        <div className="relative embla overflow-hidden mb-8">
          <div 
            className="embla__container transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <div key={index} className="embla__slide">
                <div className="aspect-video bg-sidi-gray rounded-lg overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Discovery One Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full bg-sidi-dark bg-opacity-70 border-0 hover:bg-sidi-blue"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full bg-sidi-dark bg-opacity-70 border-0 hover:bg-sidi-blue"
            onClick={nextSlide}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? 'w-8 bg-sidi-blue' : 'w-2 bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
