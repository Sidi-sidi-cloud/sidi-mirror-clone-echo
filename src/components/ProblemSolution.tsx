
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Strategic Transformation",
    description: "We convert your existing skills into strategic assets for the space market, creating dual-use business models with both terrestrial and space value.",
    image: "/lovable-uploads/dc80da50-41df-462a-b56a-17f758d4b2a5.png"
  },
  {
    title: "Accessibility",
    description: "No space experience required. Our guided journey takes you step by step into the most promising market of the future.",
    image: "/lovable-uploads/4148ee6c-e552-41c6-8e07-aedb49457fab.png"
  },
  {
    title: "Efficiency",
    description: "Concrete results thanks to HAL 2001's artificial intelligence, which optimizes every phase of the journey, reducing time and costs.",
    image: "/lovable-uploads/84eb81b2-5311-4475-86ac-f1d5684484ec.png"
  }
];

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">The Future is in Space</h2>
          <p>The space market is worth trillions, but traditional companies don't know how to access it. Discovery One is the bridge between your company and the infinite opportunities of space.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0 overflow-hidden hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-20 h-20 rounded-full object-cover mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
