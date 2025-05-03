
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="section bg-sidi-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reserve Your Discovery One</h2>
          <p className="text-gray-400 text-balance">
            Be among the first to experience the next generation of security technology
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-gradient-to-b from-sidi-gray to-sidi-dark p-8 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <p className="text-gray-400 mb-1">Starting at</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">$2,499</span>
                <span className="text-gray-400 ml-2">USD</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-sidi-blue/10 text-sidi-blue text-sm py-1 px-3 rounded-full">
                Pre-order Discount: 15%
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-gray-300">
              <span className="text-sidi-blue">✓</span> Premium hardware with 2-year warranty
            </p>
            <p className="text-gray-300">
              <span className="text-sidi-blue">✓</span> 24/7 priority technical support
            </p>
            <p className="text-gray-300">
              <span className="text-sidi-blue">✓</span> Free software updates for life
            </p>
            <p className="text-gray-300">
              <span className="text-sidi-blue">✓</span> 30-day risk-free trial
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <Button className="btn-primary w-full py-6 text-lg">
              Reserve Now
            </Button>
            <p className="text-gray-500 text-sm text-center">
              Expected shipping: Q3 2023. $500 refundable deposit required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
