import { Avatar } from "@/components/ui/avatar";
const HalSection = () => {
  return <section id="hal" className="hal-section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 md:text-4xl">HAL 2001: Your AI Assistant for Space Conquest</h2>
          <p className="opacity-90 mb-8 text-xl mx-[48px]">HAL 2001 is not a simple assistant, but a strategic coordinator that connects your company with our team, orchestrating specialized AI agents and ensuring efficient communication throughout the entire process.</p>
          
          <div className="bg-white/10 p-6 rounded-xl max-w-3xl mx-auto">
            <h4 className="font-semibold mb-4 text-2xl text-left my-0 py-[17px]">HAL is always ready to answer your questions, from the most basic and straightforward to the most complex and specialized:</h4>
            
            <div className="mb-4">
              <div className="p-4 rounded-xl max-w-[80%] mx-auto text-white bg-orange-600">
                "After our preliminary analysis, I see our production line automation technology has potential for space habitats. Which strategic partners should we contact first to validate this application?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-xl max-w-[80%] bg-gray-500">
                "We've reviewed the SRL report and we're interested in composite materials for structural components. What specific certifications does ESA require for internal habitat module walls?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-xl max-w-[80%] bg-orange-600">
                "Looking at phase two data, our purification systems seem more promising than our filtration technology. What metrics should we use to quantify our competitive advantage in this space market segment?"
              </div>
            </div>
            
            <div className="mb-4">
              <div className="p-4 rounded-xl max-w-[80%] mx-auto bg-gray-500">
                "Our killer idea was just approved by the board. Before proceeding, what are the most common mistakes companies make in strategic planning for textile applications in space habitats?"
              </div>
            </div>
            
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-xl max-w-[80%] bg-orange-600">
                "The business opportunity in environmental monitoring from space looks promising, but our CFO is concerned about investment recovery time. Can you show us a comparable case in Earth observation with quarterly ROI details for the first 24 months?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HalSection;