
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  return (
    <section id="how-it-works" className="section bg-light">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">How Discovery One Works</h2>
          <p>A structured 5-step journey designed to transform your expertise into space opportunities</p>
        </div>
        
        {isMobile ? (
          // Mobile layout
          <div className="mt-12 mb-16">
            <div className="flex flex-col space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-3xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-center px-4">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="mt-6">
                      <ArrowRight className="w-6 h-6 text-primary transform rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Desktop layout
          <div className="mt-24 mb-16">
            <div className="max-w-6xl mx-auto">
              {/* Timeline visualization */}
              <div className="relative grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex flex-col items-center">
                    {/* Top row: Discs with numbers */}
                    <div className="flex items-center mb-8">
                      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white font-bold text-4xl">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Bottom row: Titles and descriptions */}
                    <div className="px-2">
                      <h3 className="text-xl font-semibold text-secondary mb-3 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-sm text-center">{step.description}</p>
                    </div>
                  </div>
                ))}

                {/* Separate arrows layer that overlays on top of the circles */}
                {[0, 1, 2, 3].map((index) => (
                  <div 
                    key={`arrow-${index}`} 
                    className="absolute flex items-center justify-center"
                    style={{ left: `calc(${index * 20 + 16.5}%)`, width: "7%", top: "12px", height: "24px" }}
                  >
                    <ArrowRight className="w-10 h-10 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;
