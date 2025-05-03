
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Preliminary Analysis",
    description: "Initial assessment of your company's potential in the space market",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80"
  },
  {
    number: 2,
    title: "Opportunity Assessment",
    description: "Guided exploration of possible options in the space sector",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    number: 3,
    title: "Killer Idea Identification",
    description: "Finding the idea with maximum potential for your company",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    number: 4,
    title: "Strategy & Action Plan",
    description: "Defining the detailed roadmap for implementation",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    number: 5,
    title: "Implementation",
    description: "Concrete support in project realization",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-light">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">How Discovery One Works</h2>
          <p>A structured 5-step journey designed to transform your expertise into space opportunities</p>
        </div>
        
        <div className="process-container relative pt-8">
          {/* Steps content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="step flex flex-col items-center">
                {/* Step image and number */}
                <div className="relative mb-8">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}`}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                  />
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                
                {/* Step content */}
                <h3 className="text-lg font-semibold text-secondary mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.description}</p>
                
                {/* Arrow connector (except after the last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[40px] left-[calc(50%+60px)] transform -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Process progression visualization */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '100%' }}></div>
            
            {/* Progress dots */}
            {steps.map((step, index) => {
              const position = (index / (steps.length - 1)) * 100;
              return (
                <div 
                  key={index} 
                  className="absolute top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-y-1/2"
                  style={{ left: `${position}%` }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
