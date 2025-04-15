
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-hoco-lavender bg-opacity-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="mb-6">
              <span className="inline-block bg-hoco-berry text-white text-sm font-medium px-4 py-1 rounded-full mb-4">Our Story</span>
              <h2 className="section-title text-left">Crafted with <span className="text-hoco-berry">Love</span> Since 2012</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              Hoco began with a simple mission: to create the most delicious ice cream that brings people together and creates moments of pure joy.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 shadow-md">
                  <Heart className="h-5 w-5 text-hoco-berry" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Premium Ingredients</h4>
                  <p className="text-gray-600">We use only the freshest, highest quality ingredients sourced from local farmers and ethical suppliers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 shadow-md">
                  <Heart className="h-5 w-5 text-hoco-berry" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Artisanal Process</h4>
                  <p className="text-gray-600">Every batch is churned with care by our skilled ice cream artisans, maintaining the perfect creamy texture.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-2 mr-4 shadow-md">
                  <Heart className="h-5 w-5 text-hoco-berry" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Community Values</h4>
                  <p className="text-gray-600">We believe in giving back to our community through sustainable practices and local partnerships.</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-primary">
              Learn More About Us
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 bg-hoco-peach h-32 w-32 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 bg-hoco-mint h-40 w-40 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 z-10">
                <div className="aspect-[4/3] bg-hoco-cream flex items-center justify-center">
                  <p className="text-4xl font-playfair text-hoco-chocolate">Ice Cream Studio</p>
                </div>
              </div>
              
              <div className="absolute bottom-10 -left-8 rounded-3xl overflow-hidden shadow-xl border-8 border-white transform -rotate-6 w-2/3 z-0">
                <div className="aspect-square bg-hoco-mint flex items-center justify-center">
                  <p className="text-2xl font-playfair text-hoco-chocolate">Fresh Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
