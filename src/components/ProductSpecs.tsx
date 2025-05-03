
const specs = [
  {
    category: "Design",
    items: [
      "Dimensions: 140mm x 80mm x 25mm",
      "Weight: 350g",
      "Materials: Aircraft-grade aluminum, tempered glass"
    ]
  },
  {
    category: "Hardware",
    items: [
      "Processor: Custom SIDI Security Chip",
      "Storage: 256GB encrypted SSD",
      "Battery: 72-hour standby time"
    ]
  },
  {
    category: "Security",
    items: [
      "Biometric: Fingerprint + 3D Facial Recognition",
      "Encryption: 256-bit AES",
      "Authentication: Multi-factor with zero-trust architecture"
    ]
  }
];

const ProductSpecs = () => {
  return (
    <section id="specs" className="section bg-gradient-to-b from-sidi-black to-sidi-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Specifications</h2>
            <p className="text-gray-400 mb-8 text-balance">
              The Discovery One is built with precision engineering and cutting-edge technology to deliver unparalleled security and performance.
            </p>
            
            <div className="space-y-8">
              {specs.map((specGroup, index) => (
                <div key={index}>
                  <h3 className="text-sidi-blue font-semibold mb-4">{specGroup.category}</h3>
                  <ul className="space-y-2">
                    {specGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-sidi-blue mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-sidi-gray rounded-lg overflow-hidden">
              <img 
                src="https://placehold.co/600x600/0A0A0A/222222?text=Product+Image" 
                alt="Discovery One Product" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-sidi-blue text-white p-4 rounded-lg">
              <p className="text-sm font-semibold">Enterprise-grade Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
