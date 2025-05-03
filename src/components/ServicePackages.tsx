
import { Card } from "./ui/card";
import { CheckIcon } from "lucide-react";

const services = [
  {
    title: "Preliminary Analysis",
    price: "€500",
    description: "Initial exploration of your company's potential in the space market. Identifies possible application areas and assesses overall potential, providing a solid foundation for deciding whether and how to proceed.",
    features: [
      "Interaction with HAL 2001",
      "First phase SRL",
      "Initial assessment",
      "Opportunity overview",
      "Final report"
    ],
    cta: "Learn More"
  },
  {
    title: "Opportunity Assessment",
    price: "€1,500",
    description: "In-depth exploration of possible space opportunities for your company.",
    features: [
      "AI-assisted brainstorming with HAL 2001",
      "Options analysis",
      "Preliminary feasibility assessment",
      "Alignment with company vision",
      "Specialized consultation"
    ],
    cta: "Learn More"
  },
  {
    title: "Killer Idea Identification",
    price: "€10,000",
    description: "Identification of the innovative idea with maximum potential for your company.",
    features: [
      "Structured ideation process",
      "Multi-parameter validation",
      "Industry specialist expertise",
      "Complete alignment with existing skills",
      "Market potential assessment"
    ],
    cta: "Learn More"
  },
  {
    title: "Strategy & Action Plan",
    price: "from €10,000",
    description: "Development of the complete strategy and detailed action plan.",
    features: [
      "Clear objectives definition",
      "Implementation timeline",
      "Responsibility allocation",
      "Required resources planning",
      "Detailed roadmap"
    ],
    cta: "Request Info"
  },
  {
    title: "Implementation",
    price: "To be defined",
    description: "Complete support in executing the strategic plan.",
    features: [
      "Specialized consulting",
      "Technical assistance",
      "Research and development",
      "Strategic partner identification",
      "Funding opportunity research"
    ],
    cta: "Contact Us"
  }
];

const ServicePackages = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">Our Service Journey</h2>
          <p>A structured pathway that takes you from exploration to implementation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard key={index + 3} service={service} />
          ))}
          
          <Card className="flex flex-col items-center justify-center p-8 bg-light border-0">
            <img 
              src="https://images.unsplash.com/photo-1673186724144-0947f2f63af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="HAL 2001 Icon" 
              className="w-20 h-20 rounded-full object-cover mb-6" 
            />
            <h3 className="text-xl font-semibold mb-4 text-center">Not sure where to start?</h3>
            <p className="text-center text-gray-600 mb-6">Talk to HAL 2001 for a personalized recommendation</p>
            <a href="#" className="btn-primary">Chat with HAL 2001</a>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <Card className="flex flex-col h-full border-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-secondary text-white p-6 text-center">
        <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
        <div className="text-2xl font-bold">{service.price}</div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <ul className="mb-8 flex-grow">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center py-2 border-b border-gray-100">
              <CheckIcon className="mr-2 h-5 w-5 text-success" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="text-center mt-auto">
          <a href="#" className="btn-primary">{service.cta}</a>
        </div>
      </div>
    </Card>
  );
};

export default ServicePackages;
