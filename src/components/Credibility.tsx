
const Credibility = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" 
              alt="Mars Planet Team" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-semibold text-secondary mb-6">Mars Planet: Over 20 Years of Space Experience</h3>
            <p className="text-gray-600 mb-6">Mars Planet has been operating in the space sector for more than two decades, actively contributing to technology development and business opportunity creation. Our experience ranges from scientific research to simulated missions, from technological innovation to training.</p>
            <p className="text-gray-600 mb-8">Our goal is to make space accessible to all companies, regardless of their sector or size, creating an innovation ecosystem that generates value both in space and on Earth.</p>
            <a href="#" className="btn-primary">Learn More About Mars Planet</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
