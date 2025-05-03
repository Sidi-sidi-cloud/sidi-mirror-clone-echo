import { Card } from "./ui/card";

const stories = [
  {
    title: "From Traditional Textiles to Space Materials",
    description: "A textile company in crisis developed innovative materials for the space sector, creating a new business line for extreme sports with a 45% increase in turnover over 3 years.",
    image: "/lovable-uploads/fdb1f7a9-8acc-47fe-8db5-22ca16c9f4e3.png", // Corrected path by removing "public"
    client: {
      name: "Marco Rossi",
      position: "CEO, TextileTech",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  },
  {
    title: "Computer Vision Software for Satellites",
    description: "A software startup adapted its computer vision algorithms for Earth monitoring from space, securing €2 million in funding and partnerships with space agencies.",
    image: "/lovable-uploads/73aec1dc-3086-4049-b46c-c432d5d72bc0.png", // Corrected path by removing "public"
    client: {
      name: "Laura Bianchi",
      position: "CTO, SpaceVision",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  },
  {
    title: "Cultivation Systems for Extreme Environments",
    description: "An agricultural company developed vertical farming technologies for space habitats, creating a new market on Earth for highly efficient, low water consumption urban agriculture.",
    image: "/lovable-uploads/9a130aea-4197-40af-a0e1-ae787cfa0226.png", // Corrected path by removing "public"
    client: {
      name: "Antonio Verdi",
      position: "Founder, GreenSpace",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  }
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="section bg-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 className="text-secondary">Success Stories</h2>
          <p>Companies that have transformed their business through Discovery One</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden border-0 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="h-52 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={story.client.image} 
                      alt={story.client.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{story.client.name}</h4>
                    <p className="text-sm text-gray-500">{story.client.position}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
