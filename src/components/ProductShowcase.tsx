
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IceCream, Star } from "lucide-react";

const flavorCategories = [
  { id: "all", name: "All Flavors" },
  { id: "signature", name: "Signature" },
  { id: "seasonal", name: "Seasonal" },
  { id: "vegan", name: "Vegan" },
];

const flavors = [
  {
    id: 1,
    name: "Vanilla Dream",
    description: "Rich Madagascan vanilla beans in creamy perfection",
    categories: ["signature"],
    colors: ["bg-hoco-cream", "from-hoco-cream", "to-white"],
    rating: 4.9,
  },
  {
    id: 2,
    name: "Double Chocolate",
    description: "Velvety chocolate with premium cocoa nibs",
    categories: ["signature"],
    colors: ["bg-hoco-chocolate", "from-hoco-chocolate", "to-[#3E2723]"],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    description: "Fresh strawberries blended into a sweet cream base",
    categories: ["signature", "seasonal"],
    colors: ["bg-hoco-berry", "from-hoco-berry", "to-[#E91E63]"],
    rating: 4.7,
  },
  {
    id: 4,
    name: "Mint Chip",
    description: "Cool mint with chocolate flakes for a refreshing treat",
    categories: ["signature"],
    colors: ["bg-hoco-mint", "from-hoco-mint", "to-[#81C784]"],
    rating: 4.6,
  },
  {
    id: 5,
    name: "Lavender Honey",
    description: "Delicate lavender infused with local wildflower honey",
    categories: ["seasonal"],
    colors: ["bg-hoco-lavender", "from-hoco-lavender", "to-[#BA68C8]"],
    rating: 4.8,
  },
  {
    id: 6,
    name: "Peachy Keen",
    description: "Ripe summer peaches in a creamy base",
    categories: ["seasonal"],
    colors: ["bg-hoco-peach", "from-hoco-peach", "to-[#FFAB91]"],
    rating: 4.7,
  },
  {
    id: 7,
    name: "Coconut Almond",
    description: "Creamy coconut with toasted almond pieces",
    categories: ["vegan"],
    colors: ["bg-hoco-cream", "from-hoco-cream", "to-[#EFEBE9]"],
    rating: 4.5,
  },
  {
    id: 8,
    name: "Berry Medley",
    description: "Mixed berries in a rich vegan cream",
    categories: ["vegan", "seasonal"],
    colors: ["bg-hoco-berry", "from-[#AD1457]", "to-hoco-berry"],
    rating: 4.6,
  },
];

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFlavors = activeTab === "all" 
    ? flavors 
    : flavors.filter(flavor => flavor.categories.includes(activeTab));

  return (
    <section className="py-20 bg-gradient-to-b from-white to-hoco-cream">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Our Delightful <span className="text-hoco-berry">Flavors</span></h2>
          <p className="section-subtitle">
            Indulge in premium ice cream crafted with the finest ingredients and bursting with flavor
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-hoco-cream p-1 rounded-full">
              {flavorCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full py-3 px-6 data-[state=active]:bg-white data-[state=active]:text-hoco-berry data-[state=active]:shadow-md transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFlavors.map((flavor) => (
                <div 
                  key={flavor.id} 
                  className="flavor-card group animate-fade-in"
                  style={{ animationDelay: `${(flavor.id % 4) * 0.1}s` }}
                >
                  <div className={`aspect-square ${flavor.colors[0]} rounded-t-3xl relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-b ${flavor.colors[1]} ${flavor.colors[2]} opacity-50`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"></div>
                      <IceCream className="w-20 h-20 absolute text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{flavor.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-hoco-sunshine text-hoco-sunshine" />
                        <span className="text-sm ml-1">{flavor.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{flavor.description}</p>
                    <Button variant="ghost" className="w-full justify-center bg-hoco-cream hover:bg-hoco-peach text-hoco-chocolate font-medium rounded-full py-2">
                      Explore Flavor
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button className="btn-primary">
                View All Flavors
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductShowcase;
