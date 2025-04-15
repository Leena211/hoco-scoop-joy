
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Ice Cream Enthusiast",
    content: "Hoco's Double Chocolate is simply divine! The rich, velvety texture and deep cocoa flavor make it my absolute favorite treat.",
    avatar: "/placeholder.svg",
    initials: "ET",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Foodie Blogger",
    content: "As someone who's tried ice cream all over the world, I can confidently say Hoco offers some of the most innovative and delightful flavors.",
    avatar: "/placeholder.svg",
    initials: "DC",
  },
  {
    id: 3,
    name: "Sophie Williams",
    role: "Local Customer",
    content: "The Lavender Honey flavor is a game-changer! It's subtle, sophisticated, and perfectly balanced. My family looks forward to our Hoco nights.",
    avatar: "/placeholder.svg",
    initials: "SW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hoco-cream to-white opacity-50 z-0"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                "#C8E6C9", "#FFCCBC", "#E1BEE7", "#FFF9E6", "#C2185B"
              ][Math.floor(Math.random() * 5)],
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Happy <span className="text-hoco-berry">Customers</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it, hear what our customers have to say about their Hoco experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card rounded-3xl p-8 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="h-10 w-10 text-hoco-berry opacity-20 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4 border-2 border-hoco-berry">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-hoco-peach text-hoco-chocolate">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
