
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
    <section id="how-it-works" className="section" style={{ backgroundColor: "#FEC6A1" }}>
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">How Discovery One Works</h2>
          <p>A structured 5-step journey designed to transform your expertise into space opportunities</p>
        </div>
        
        <div className="mt-24 mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Timeline visualization */}
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Top row: Discs with numbers and connecting arrows */}
                  <div className="flex items-center mb-8">
                    {/* Numbered disc */}
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl">
                      {step.number}
                    </div>
                    
                    {/* Arrow connector (except after the last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute" style={{ left: `calc(${(index + 1) * 20}% - 8px)` }}>
                        <ArrowRight className="w-16 h-16 text-primary" />
                      </div>
                    )}
                  </div>
                  
                  {/* Bottom row: Titles and descriptions */}
                  <div className="px-2">
                    <h3 className="text-xl font-semibold text-secondary mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{step.description}</p>
                  </div>
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
