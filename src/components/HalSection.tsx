
import { Avatar } from "@/components/ui/avatar";

const HalSection = () => {
  return (
    <section id="hal" className="hal-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">HAL 2001: Your AI Assistant for Space Conquest</h2>
          <p className="text-lg opacity-90 mb-8">HAL 2001 is not a simple assistant, but a strategic coordinator that connects your company with our team, orchestrating specialized AI agents and ensuring efficient communication throughout the entire process.</p>
          
          <div className="bg-white/10 p-6 rounded-xl max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">HAL 2001 is waiting for your specific questions:</h4>
            
            <div className="mb-4">
              <div className="bg-white/20 p-4 rounded-xl max-w-[80%] mx-auto">
                "How can I monetize my company's automation systems expertise in a space context?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="bg-primary p-4 rounded-xl max-w-[80%]">
                "What concrete opportunities does a textile company have in the space tourism market?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="bg-white/20 p-4 rounded-xl max-w-[80%]">
                "What's the average return on investment 12 months after implementing a new space business line?"
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center">
            <Avatar className="w-24 h-24 mb-4">
              <img 
                src="/lovable-uploads/317bcf42-f17a-42b2-be88-c2334b9bef80.png" 
                alt="HAL 2001" 
                className="w-full h-full object-contain"
              />
            </Avatar>
            <p className="text-xl font-medium">HAL 2001 Icon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalSection;
