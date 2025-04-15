
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Downtown Flagship",
    address: "123 Main Street, Downtown",
    hours: "10am - 10pm Daily",
    popular: true,
  },
  {
    id: 2,
    name: "Westside Scoop Shop",
    address: "456 Ocean Ave, Westside",
    hours: "11am - 9pm Daily",
    popular: false,
  },
  {
    id: 3,
    name: "Northridge Mall",
    address: "789 Mall Way, Northridge",
    hours: "10am - 9pm Mon-Sat, 11am - 7pm Sun",
    popular: true,
  },
];

const StoreLocator = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-hoco-mint bg-opacity-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Find a <span className="text-hoco-berry">Store</span></h2>
          <p className="section-subtitle">
            Visit us in person to enjoy the full Hoco experience with over 30 locations nationwide
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative animate-slide-up">
            <Input 
              type="text" 
              placeholder="Enter your location or zip code" 
              className="w-full py-6 pl-12 pr-4 rounded-full border-2 border-hoco-mint focus:border-hoco-berry text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-hoco-berry hover:bg-hoco-berry/90 text-white py-2 px-6">
              Search
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className="bg-white rounded-3xl shadow-lg p-6 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {location.popular && (
                <div className="absolute top-4 right-4 bg-hoco-berry text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-hoco-mint bg-opacity-20 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-hoco-berry" />
                </div>
                <h3 className="text-xl font-bold">{location.name}</h3>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 mb-1">{location.address}</p>
                <p className="text-sm text-gray-500">{location.hours}</p>
              </div>
              <Button variant="outline" className="w-full rounded-full border-hoco-berry text-hoco-berry hover:bg-hoco-berry hover:text-white">
                Get Directions
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <Button className="btn-primary">
            View All Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
