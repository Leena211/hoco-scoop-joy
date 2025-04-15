
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-r from-hoco-cream to-hoco-peach">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-float rounded-full bg-hoco-mint"
              style={{
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-10 py-16 relative z-10">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-hoco-chocolate">
            Scoop into <span className="text-hoco-berry">Happiness</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Premium ice cream crafted with love. Every bite is a delightful journey of freshness and indulgent joy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              Order Now
            </Button>
            <Button variant="outline" className="btn-secondary">
              Find a Store
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative h-80 w-80 md:h-96 md:w-96 animate-float">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-72 w-72 md:h-80 md:w-80 bg-white rounded-full shadow-2xl"></div>
            <div className="absolute top-1/4 left-1/4 h-48 w-48 md:h-56 md:w-56 bg-hoco-peach rounded-full animate-wobble shadow-lg"></div>
            <div className="absolute top-1/3 right-1/4 h-36 w-36 md:h-44 md:w-44 bg-hoco-mint rounded-full animate-wobble shadow-lg" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 h-28 w-28 md:h-36 md:w-36 bg-hoco-lavender rounded-full animate-wobble shadow-lg" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
