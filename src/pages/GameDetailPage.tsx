import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Info, 
  Image, 
  MessageSquare, 
  Award, 
  Cpu, 
  HardDrive, 
  Monitor, 
  ChevronLeft 
} from "lucide-react";
import { games } from "@/data/games";
import { cn } from "@/lib/utils";

export default function GameDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find the game by ID
  const game = games.find(g => g.id === id);
  
  // If game not found, show error
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <p className="text-muted-foreground mb-6">The game you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/games">Back to Games</Link>
        </Button>
      </div>
    );
  }
  
  // Calculate discounted price
  const discountedPrice = game.discount 
    ? (game.price * (1 - game.discount / 100)).toFixed(2) 
    : game.price.toFixed(2);
  
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[400px] md:h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${game.coverImage})`,
            filter: "brightness(0.4)"
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-4 left-4 z-10">
          <Button variant="ghost" asChild className="gap-1 text-white hover:bg-black/20">
            <Link to="/games">
              <ChevronLeft className="h-5 w-5" />
              Back to Games
            </Link>
          </Button>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Game Cover */}
                <div className="w-full md:w-48 lg:w-64 aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-white/10">
                  <img 
                    src={game.coverImage} 
                    alt={game.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Game Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {game.genre.map((genre) => (
                      <Badge key={genre} className="bg-primary/20 text-primary border-primary/30">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-display mb-2">{game.title}</h1>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="font-medium">{game.rating}</span>
                      <span className="text-muted-foreground ml-1">/5</span>
                    </div>
                    <Separator orientation="vertical" className="h-6" />
                    <div className="text-muted-foreground">
                      Released: {new Date(game.releaseDate).toLocaleDateString()}
                    </div>
                    <Separator orientation="vertical" className="h-6 hidden md:block" />
                    <div className="hidden md:block text-muted-foreground">
                      Developer: {game.developer}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 max-w-3xl">
                    {game.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <div>
                      {game.discount ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg line-through text-muted-foreground">${game.price.toFixed(2)}</span>
                          <span className="text-2xl font-bold">${discountedPrice}</span>
                          <Badge className="bg-accent text-accent-foreground ml-2">
                            {game.discount}% OFF
                          </Badge>
                        </div>
                      ) : (
                        <span className="text-2xl font-bold">${game.price.toFixed(2)}</span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Game Details */}
      <div className="container mx-auto px-4 py-8">
        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent overflow-x-auto flex-nowrap">
            <TabsTrigger 
              value="overview" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
              )}
            >
              <Info className="mr-2 h-5 w-5" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="screenshots" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
              )}
            >
              <Image className="mr-2 h-5 w-5" />
              Screenshots
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
              )}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Reviews
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
              )}
            >
              <Award className="mr-2 h-5 w-5" />
              Achievements
            </TabsTrigger>
            <TabsTrigger 
              value="system" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none whitespace-nowrap"
              )}
            >
              <Cpu className="mr-2 h-5 w-5" />
              System Requirements
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display mb-4">About {game.title}</h2>
                <p className="text-muted-foreground mb-6">
                  {game.description}
                </p>
                
                <h3 className="text-xl font-medium mb-3">Features</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                  {game.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-medium mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {game.playerCount && (
                  <div className="mb-6">
                    <h3 className="text-xl font-medium mb-3">Player Activity</h3>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Current Players Online</p>
                            <p className="text-2xl font-bold">{game.playerCount.online.toLocaleString()}</p>
                          </div>
                          {game.playerCount.trending && (
                            <Badge className="bg-accent text-accent-foreground">
                              Trending
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Game Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Developer</p>
                        <p className="font-medium">{game.developer}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Publisher</p>
                        <p className="font-medium">{game.publisher}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Release Date</p>
                        <p className="font-medium">
                          {new Date(game.releaseDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Platforms</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {game.platforms.map((platform) => (
                            <Badge key={platform} variant="outline">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star}
                                className={cn(
                                  "h-5 w-5",
                                  star <= Math.floor(game.rating) 
                                    ? "text-yellow-500 fill-yellow-500" 
                                    : star <= game.rating 
                                      ? "text-yellow-500 fill-yellow-500 opacity-50" 
                                      : "text-muted-foreground"
                                )}
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium">{game.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Similar Games</h3>
                  <div className="space-y-4">
                    {games
                      .filter(g => g.id !== game.id && g.genre.some(genre => game.genre.includes(genre)))
                      .slice(0, 3)
                      .map((similarGame) => (
                        <Link to={`/games/${similarGame.id}`} key={similarGame.id}>
                          <Card className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                            <div className="flex">
                              <div className="w-24 h-24">
                                <img 
                                  src={similarGame.coverImage} 
                                  alt={similarGame.title} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-3 flex-1">
                                <h4 className="font-medium">{similarGame.title}</h4>
                                <div className="flex items-center mt-1">
                                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                  <span className="text-sm">{similarGame.rating}</span>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="screenshots" className="mt-6">
            <h2 className="text-2xl font-display mb-6">Screenshots & Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {game.screenshots.map((screenshot, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video">
                    <img 
                      src={screenshot} 
                      alt={`${game.title} screenshot ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-4">Player Reviews</h3>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-4xl font-bold">{game.rating}</div>
                      <div className="flex-1">
                        <div className="flex mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={cn(
                                "h-5 w-5",
                                star <= Math.floor(game.rating) 
                                  ? "text-yellow-500 fill-yellow-500" 
                                  : star <= game.rating 
                                    ? "text-yellow-500 fill-yellow-500 opacity-50" 
                                    : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on 1,245 reviews</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2">
                          <div className="w-8 text-right">{rating}</div>
                          <Star className="h-4 w-4 text-yellow-500" />
                          <Progress 
                            value={100 - (Math.abs(rating - game.rating) * 20)} 
                            className="h-2 flex-1" 
                          />
                          <div className="w-8 text-right text-sm text-muted-foreground">
                            {Math.floor(100 - (Math.abs(rating - game.rating) * 20))}%
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6">
                      Write a Review
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-medium mb-4">Recent Reviews</h3>
                
                <div className="space-y-6">
                  {/* Placeholder reviews */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                          alt="User" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">CyberWanderer</p>
                          <p className="text-xs text-muted-foreground">
                            Level 42 • 187 hours played
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={cn(
                                "h-4 w-4",
                                star <= 5 
                                  ? "text-yellow-500 fill-yellow-500" 
                                  : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-2">
                        This game is absolutely incredible! The world-building is top-notch, and the story kept me engaged from start to finish. The combat system is deep and rewarding, and the visuals are stunning.
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>July 12, 2023</span>
                        <div>
                          <Button variant="ghost" size="sm" className="h-8 px-2">Helpful (42)</Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">Not Helpful (3)</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                          alt="User" 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">EldenLord</p>
                          <p className="text-xs text-muted-foreground">
                            Level 89 • 312 hours played
                          </p>
                        </div>
                        <div className="ml-auto flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star 
                              key={star}
                              className={cn(
                                "h-4 w-4",
                                star <= 4 
                                  ? "text-yellow-500 fill-yellow-500" 
                                  : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-2">
                        Great game overall, but there are some performance issues on PC that need to be addressed. The story and characters are excellent, and the side quests are actually meaningful and interesting.
                      </p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>July 8, 2023</span>
                        <div>
                          <Button variant="ghost" size="sm" className="h-8 px-2">Helpful (28)</Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">Not Helpful (1)</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  Load More Reviews
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-6">
            <h2 className="text-2xl font-display mb-6">Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Placeholder achievements */}
              <Card className="overflow-hidden border-primary/20">
                <div className="flex p-4">
                  <div className="w-16 h-16 rounded-md bg-primary/20 flex items-center justify-center mr-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Master Hacker</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete all hacking challenges</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        Rare
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">8.2% of players</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-primary/20">
                <div className="flex p-4">
                  <div className="w-16 h-16 rounded-md bg-primary/20 flex items-center justify-center mr-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Night City Legend</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete all main story missions</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                        Uncommon
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">24.5% of players</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-primary/20">
                <div className="flex p-4">
                  <div className="w-16 h-16 rounded-md bg-primary/20 flex items-center justify-center mr-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Completionist</h4>
                    <p className="text-sm text-muted-foreground mb-2">Complete all side quests and activities</p>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                        Legendary
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">2.1% of players</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <Button variant="outline" className="mt-6">
              View All Achievements
            </Button>
          </TabsContent>
          
          <TabsContent value="system" className="mt-6">
            <h2 className="text-2xl font-display mb-6">System Requirements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Cpu className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Minimum Requirements</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">OS</p>
                      <p className="font-medium">Windows 10 (64-bit)</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Processor</p>
                      <p className="font-medium">Intel Core i5-8400 or AMD Ryzen 3 3200G</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Memory</p>
                      <p className="font-medium">8 GB RAM</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Graphics</p>
                      <p className="font-medium">NVIDIA GeForce GTX 970 or AMD Radeon RX 570</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Storage</p>
                      <p className="font-medium">70 GB available space (SSD recommended)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Monitor className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Recommended Requirements</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">OS</p>
                      <p className="font-medium">Windows 10 (64-bit)</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Processor</p>
                      <p className="font-medium">Intel Core i7-10700K or AMD Ryzen 5 5600X</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Memory</p>
                      <p className="font-medium">16 GB RAM</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Graphics</p>
                      <p className="font-medium">NVIDIA GeForce RTX 3060 or AMD Radeon RX 6700 XT</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Storage</p>
                      <p className="font-medium">70 GB available space (SSD required)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <HardDrive className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="text-xl font-medium">Additional Notes</h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    For the best experience, we recommend playing on an SSD. Ray tracing features require an RTX 2060 or higher. HDR requires a compatible monitor and Windows 10 HDR settings enabled. Internet connection required for initial activation and updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}