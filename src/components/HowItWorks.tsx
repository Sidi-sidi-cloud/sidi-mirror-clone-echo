
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
        
        <div className="process-container relative pt-12 mt-8">
          {/* Steps content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={step.number} className="step flex flex-col items-center">
                {/* Only show the number in an orange disc */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl shadow-md">
                    {step.number}
                  </div>
                </div>
                
                {/* Step content */}
                <h3 className="text-lg font-semibold text-secondary mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.description}</p>
                
                {/* Larger and more central arrows (except after the last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[32px] left-[calc(50%+68px)] transform -translate-x-1/2">
                    <ArrowRight className="w-10 h-10 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
