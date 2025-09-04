import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ShoppingCart, ShoppingBag, Tag, Gamepad2, Package, Headphones, ShoppingBasket, Gift, ListFilter as Filter, Star } from











"lucide-react";
import { storeItems, storeCategories } from "@/data/store";
import { cn } from "@/lib/utils";

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter items based on search query and category
  const filteredItems = storeItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = !selectedCategory || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Group items by category
  const gameItems = filteredItems.filter((item) => item.category === "games");
  const dlcItems = filteredItems.filter((item) => item.category === "dlc");
  const hardwareItems = filteredItems.filter((item) => item.category === "hardware");
  const merchandiseItems = filteredItems.filter((item) => item.category === "merchandise");
  const giftcardItems = filteredItems.filter((item) => item.category === "giftcards");

  // Category icon mapping
  const categoryIcons = {
    games: Gamepad2,
    dlc: Package,
    hardware: Headphones,
    merchandise: ShoppingBasket,
    giftcards: Gift
  };

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display mb-2">Store</h1>
            <p className="text-muted-foreground">
              Browse games, hardware, merchandise, and more
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search store..."
                className="pl-10 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />

            </div>
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
        
        {/* Featured Banner */}
        <Card className="mb-8 overflow-hidden border-primary/20">
          <div className="relative h-[300px] md:h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1605899435973-ca2d1a8431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                filter: "brightness(0.4)"
              }} />

            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex-1">
                  <Badge className="mb-2 bg-accent text-accent-foreground">33% OFF</Badge>
                  <h2 className="text-3xl md:text-4xl font-display text-white mb-2">Cyberpunk 2077</h2>
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    An open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.
                  </p>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="flex items-center">
                      <Star className="mr-1 h-5 w-5 text-yellow-500" />
                      <span>4.2</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="mr-2 h-5 w-5 text-primary" />
                      <span className="line-through mr-2">$59.99</span>
                      <span className="text-xl font-bold text-white">$39.99</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-3">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {Object.entries(categoryIcons).map(([category, Icon]) =>
          <Card
            key={category}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-neon-purple",
              selectedCategory === category && "border-primary bg-primary/5"
            )}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>

              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Icon className={cn(
                "h-8 w-8 mb-2",
                selectedCategory === category ? "text-primary" : "text-muted-foreground"
              )} />
                <p className={cn(
                "capitalize font-medium",
                selectedCategory === category && "text-primary"
              )}>
                  {category.replace("dlc", "DLC & Add-ons").replace("giftcards", "Gift Cards")}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Store Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Filter className="mr-2 h-5 w-5" /> Filters
                  </h3>
                  {selectedCategory &&
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategory(null)}>

                      Clear
                    </Button>
                  }
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Price Range</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      Under $20
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      $20 - $50
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      $50 - $100
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      Over $100
                    </Badge>
                  </div>
                </div>
                
                {/* Discounts */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Discounts</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent/10">

                      On Sale
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent/10">

                      10% or more
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent/10">

                      25% or more
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent/10">

                      50% or more
                    </Badge>
                  </div>
                </div>
                
                {/* Platforms */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary/10">

                      PC
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary/10">

                      PlayStation 5
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary/10">

                      Xbox Series X/S
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary/10">

                      Nintendo Switch
                    </Badge>
                  </div>
                </div>
                
                {/* Rating */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Rating</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                      4+ Stars
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10">

                      <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                      3+ Stars
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Store Items */}
          <div className="lg:col-span-3">
            <Tabs defaultValue={selectedCategory || "all"} className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
                <TabsTrigger
                  value="all"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
                  )}>

                  <ShoppingBag className="mr-2 h-5 w-5" />
                  All Items
                </TabsTrigger>
                <TabsTrigger
                  value="games"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
                  )}>

                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Games
                </TabsTrigger>
                <TabsTrigger
                  value="dlc"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
                  )}>

                  <Package className="mr-2 h-5 w-5" />
                  DLC & Add-ons
                </TabsTrigger>
                <TabsTrigger
                  value="hardware"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
                  )}>

                  <Headphones className="mr-2 h-5 w-5" />
                  Hardware
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                {filteredItems.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) =>
                  <Card key={item.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                        <div className="relative h-48">
                          <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover" />

                          {item.discount &&
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                              {item.discount}% OFF
                            </div>
                      }
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-black/50 text-white border-0 capitalize">
                              {item.category.replace("dlc", "DLC")}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">{item.rating}</span>
                            </div>
                            <div className="text-right">
                              {item.discount ?
                          <div>
                                  <span className="text-sm line-through text-muted-foreground mr-2">${item.price}</span>
                                  <span className="text-base font-bold">${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                                </div> :

                          <span className="text-base font-bold">${item.price.toFixed(2)}</span>
                          }
                            </div>
                          </div>
                          <Button className="w-full mt-3">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </CardContent>
                      </Card>
                  )}
                  </div> :

                <div className="text-center py-12">
                    <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No items found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                    <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}>

                      Clear Filters
                    </Button>
                  </div>
                }
              </TabsContent>
              
              <TabsContent value="games" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gameItems.map((item) =>
                  <Card key={item.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                      <div className="relative h-48">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover" />

                        {item.discount &&
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                            {item.discount}% OFF
                          </div>
                      }
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                          <div className="text-right">
                            {item.discount ?
                          <div>
                                <span className="text-sm line-through text-muted-foreground mr-2">${item.price}</span>
                                <span className="text-base font-bold">${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                              </div> :

                          <span className="text-base font-bold">${item.price.toFixed(2)}</span>
                          }
                          </div>
                        </div>
                        <Button className="w-full mt-3">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="dlc" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dlcItems.map((item) =>
                  <Card key={item.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                      <div className="relative h-48">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover" />

                        {item.discount &&
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                            {item.discount}% OFF
                          </div>
                      }
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                          <div className="text-right">
                            {item.discount ?
                          <div>
                                <span className="text-sm line-through text-muted-foreground mr-2">${item.price}</span>
                                <span className="text-base font-bold">${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                              </div> :

                          <span className="text-base font-bold">${item.price.toFixed(2)}</span>
                          }
                          </div>
                        </div>
                        <Button className="w-full mt-3">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="hardware" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hardwareItems.map((item) =>
                  <Card key={item.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                      <div className="relative h-48">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover" />

                        {item.discount &&
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                            {item.discount}% OFF
                          </div>
                      }
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                          <div className="text-right">
                            {item.discount ?
                          <div>
                                <span className="text-sm line-through text-muted-foreground mr-2">${item.price}</span>
                                <span className="text-base font-bold">${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                              </div> :

                          <span className="text-base font-bold">${item.price.toFixed(2)}</span>
                          }
                          </div>
                        </div>
                        <Button className="w-full mt-3">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </div>);

}