
const HalSection = () => {
  return (
    <section id="hal" className="hal-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src="https://images.unsplash.com/photo-1677442135136-760c813260b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
              alt="HAL 2001 Interface"
              className="rounded-xl shadow-2xl max-w-full mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">HAL 2001: Your AI Assistant for Space Conquest</h2>
            <p className="text-lg opacity-90 mb-8">HAL 2001 is not a simple assistant, but a strategic coordinator that connects your company with our team, orchestrating specialized AI agents and ensuring efficient communication throughout the entire process.</p>
            
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">HAL 2001 is waiting for your specific questions:</h4>
              
              <div className="mb-4">
                <div className="bg-white/20 p-4 rounded-xl max-w-[80%]">
                  "How can I monetize my company's automation systems expertise in a space context?"
                </div>
              </div>
              
              <div className="mb-4 flex justify-end">
                <div className="bg-primary p-4 rounded-xl max-w-[80%]">
                  "What concrete opportunities does a textile company have in the space tourism market?"
                </div>
              </div>
              
              <div className="mb-4">
                <div className="bg-white/20 p-4 rounded-xl max-w-[80%]">
                  "What's the average return on investment 12 months after implementing a new space business line?"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalSection;
