
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Preliminary Analysis",
    description: "Initial assessment of your company's potential in the space market",
  },
  {
    number: 2,
    title: "Opportunity Assessment",
    description: "Guided exploration of possible options in the space sector",
  },
  {
    number: 3,
    title: "Killer Idea Identification",
    description: "Finding the idea with maximum potential for your company",
  },
  {
    number: 4,
    title: "Strategy & Action Plan",
    description: "Defining the detailed roadmap for implementation",
  },
  {
    number: 5,
    title: "Implementation",
    description: "Concrete support in project realization",
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
        
        <div className="flex justify-center mt-24 mb-16">
          <div className="relative">
            {/* Horizontal timeline with steps and connecting arrows */}
            <div className="flex items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  {/* Step with number */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-3xl shadow-md z-10">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Arrow connector (except after the last item) */}
                  {index < steps.length - 1 && (
                    <div className="flex mx-4">
                      <ArrowRight className="w-12 h-12 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Titles and descriptions positioned below the timeline */}
            <div className="flex mt-8">
              {steps.map((step, index) => (
                <div 
                  key={`text-${step.number}`} 
                  className="flex flex-col items-center"
                  style={{ width: index < steps.length - 1 ? 'calc(20% + 64px)' : '20%' }}
                >
                  <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
