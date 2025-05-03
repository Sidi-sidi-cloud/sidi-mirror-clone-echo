
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Biometric Access",
    description: "Advanced fingerprint and facial recognition technology for secure access."
  },
  {
    title: "Real-time Monitoring",
    description: "24/7 surveillance with AI-powered threat detection systems."
  },
  {
    title: "Encrypted Communications",
    description: "Military-grade encryption for all data transmissions."
  },
  {
    title: "Multi-layer Protection",
    description: "Comprehensive security with physical and digital safeguards."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-sidi-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cutting-Edge Features</h2>
          <p className="text-gray-400 text-balance">
            Discovery One brings together the most advanced security technologies in one seamless system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-sidi-blue-glow flex items-center justify-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-sidi-blue"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
