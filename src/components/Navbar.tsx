
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-sidi-black bg-opacity-90 backdrop-blur-md py-4' : 'py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-2xl">SIDI</a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-sidi-blue transition-colors">Features</a>
            <a href="#specs" className="text-white hover:text-sidi-blue transition-colors">Specs</a>
            <a href="#gallery" className="text-white hover:text-sidi-blue transition-colors">Gallery</a>
            <Button className="btn-primary">Reserve Now</Button>
          </nav>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-sidi-dark absolute top-full left-0 w-full py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-white hover:text-sidi-blue transition-colors py-2" onClick={toggleMenu}>Features</a>
            <a href="#specs" className="text-white hover:text-sidi-blue transition-colors py-2" onClick={toggleMenu}>Specs</a>
            <a href="#gallery" className="text-white hover:text-sidi-blue transition-colors py-2" onClick={toggleMenu}>Gallery</a>
            <Button className="btn-primary w-full">Reserve Now</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
