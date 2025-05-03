
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
              <div className="bg-gray-600/70 p-4 rounded-xl max-w-[80%] mx-auto text-white">
                "After our preliminary analysis, I see our production line automation technology has potential for space habitats. Which strategic partners should we contact first to validate this application?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="bg-primary p-4 rounded-xl max-w-[80%]">
                "We've reviewed the SRL report and we're interested in composite materials for structural components. What specific certifications does ESA require for internal habitat module walls?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="bg-gray-600/70 p-4 rounded-xl max-w-[80%]">
                "Looking at phase two data, our purification systems seem more promising than our filtration technology. What metrics should we use to quantify our competitive advantage in this space market segment?"
              </div>
            </div>
            
            <div className="mb-4">
              <div className="bg-primary p-4 rounded-xl max-w-[80%] mx-auto">
                "Our killer idea was just approved by the board. Before proceeding, what are the most common mistakes companies make in strategic planning for textile applications in space habitats?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="bg-gray-600/70 p-4 rounded-xl max-w-[80%]">
                "The business opportunity in environmental monitoring from space looks promising, but our CFO is concerned about investment recovery time. Can you show us a comparable case in Earth observation with quarterly ROI details for the first 24 months?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalSection;
