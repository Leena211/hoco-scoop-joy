
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <span className="text-3xl font-bold font-playfair text-hoco-chocolate">Hoco</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-hoco-berry font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-hoco-berry font-medium">Flavors</a>
            <a href="#" className="text-gray-700 hover:text-hoco-berry font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-hoco-berry font-medium">Locations</a>
            <a href="#" className="text-gray-700 hover:text-hoco-berry font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full h-10 w-10 p-0">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-hoco-berry hover:bg-hoco-berry/90 text-white rounded-full px-6">
              Order Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button variant="ghost" className="rounded-full h-10 w-10 p-0">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-700 hover:text-hoco-berry font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-hoco-berry font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Flavors
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-hoco-berry font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-hoco-berry font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-hoco-berry font-medium py-2 px-4 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-hoco-berry hover:bg-hoco-berry/90 text-white rounded-full w-full mt-2">
                Order Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
