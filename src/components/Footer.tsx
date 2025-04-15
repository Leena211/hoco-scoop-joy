
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hoco-chocolate text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">Hoco</h3>
              <p className="text-hoco-cream opacity-80">Premium ice cream crafted for happiness in every bite</p>
            </div>
            <p className="mb-6 text-sm opacity-70 max-w-md">
              Bringing joy through artisanal ice cream since 2012. Made with love using only the finest ingredients and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Flavors</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Locations</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Catering</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 opacity-70" />
                <span className="opacity-70">123 Ice Cream Way, Dessert City, DC 10001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 opacity-70" />
                <span className="opacity-70">(123) 456-7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 opacity-70" />
                <span className="opacity-70">hello@hocoicecream.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Newsletter</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white bg-opacity-10 border-0 rounded-l-full text-white placeholder:text-white placeholder:opacity-50 focus-visible:ring-offset-0 focus-visible:ring-0"
                />
                <Button className="rounded-r-full bg-hoco-berry hover:bg-hoco-berry/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hoco Ice Cream. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
