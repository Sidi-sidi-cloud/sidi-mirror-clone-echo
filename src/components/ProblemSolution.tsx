
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Accessibility",
    description: "No space experience required. Our guided journey takes you step by step into the most promising market of the future.",
    image: "https://images.unsplash.com/photo-1596388497930-eda152194426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    title: "Strategic Transformation",
    description: "We convert your existing skills into strategic assets for the space market, creating dual-use business models with both terrestrial and space value.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Efficiency",
    description: "Concrete results thanks to HAL 2001's artificial intelligence, which optimizes every phase of the journey, reducing time and costs.",
    image: "https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
