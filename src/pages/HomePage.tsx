import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronRight, 
  Play, 
  Trophy, 
  Users, 
  ShoppingBag, 
  Star, 
  Clock, 
  Gamepad2 
} from "lucide-react";
import { featuredGames, upcomingGames } from "@/data/games";
import { featuredTournaments } from "@/data/tournaments";
import { communityPosts } from "@/data/community";
import { featuredStoreItems } from "@/data/store";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            filter: "brightness(0.4)"
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <Badge className="mb-4 bg-primary text-primary-foreground">Featured Game</Badge>
            <h1 className="text-4xl md:text-6xl font-display text-white mb-4 text-glow">
              Cyberpunk 2077
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Enter the immersive open-world of Night City, a megalopolis obsessed with power, glamour, and body modification.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Play className="mr-2 h-4 w-4" /> Play Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Games */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display">Featured Games</h2>
          <Button variant="ghost" asChild>
            <Link to="/games" className="flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <Link to={`/games/${game.id}`} key={game.id}>
              <Card className="game-card h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover"
                  />
                  {game.discount && (
                    <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                      {game.discount}% OFF
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{game.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {game.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                    <div className="text-right">
                      {game.discount ? (
                        <div>
                          <span className="text-sm line-through text-muted-foreground mr-2">${game.price}</span>
                          <span className="text-base font-bold">${(game.price * (1 - game.discount / 100)).toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="text-base font-bold">${game.price}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Upcoming Games */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display">Upcoming Releases</h2>
            <Button variant="ghost" asChild>
              <Link to="/games" className="flex items-center">
                View Calendar <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingGames.map((game) => (
              <Card key={game.id} className="overflow-hidden border-primary/20 bg-card/50">
                <div className="relative h-40">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{game.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-gray-200">
                          {new Date(game.releaseDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{game.developer}</span>
                    <div className="flex gap-1">
                      {game.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Multi-section Tabs */}
      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="tournaments" className="w-full">
          <TabsList className="mb-8 w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger 
              value="tournaments" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}
            >
              <Trophy className="mr-2 h-5 w-5" />
              Tournaments
            </TabsTrigger>
            <TabsTrigger 
              value="community" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}
            >
              <Users className="mr-2 h-5 w-5" />
              Community
            </TabsTrigger>
            <TabsTrigger 
              value="store" 
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Store
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tournaments" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTournaments.map((tournament) => (
                <Link to="/tournaments" key={tournament.id}>
                  <Card className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                    <div className="relative h-48">
                      <img 
                        src={tournament.image} 
                        alt={tournament.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className={cn(
                              "bg-primary/20 text-primary border-primary/30",
                              tournament.status === "ongoing" ? "animate-pulse" : ""
                            )}>
                              {tournament.status === "ongoing" ? "LIVE NOW" : "UPCOMING"}
                            </Badge>
                            <span className="text-white font-bold">${tournament.prizePool.toLocaleString()}</span>
                          </div>
                          <h3 className="text-lg font-bold text-white">{tournament.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Gamepad2 className="h-4 w-4 text-gray-300" />
                            <span className="text-sm text-gray-300">{tournament.game}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link to="/tournaments">View All Tournaments</Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityPosts.slice(0, 4).map((post) => (
                <Link to="/community" key={post.id}>
                  <Card className="overflow-hidden hover:shadow-neon-cyan transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Level {post.author.level} • {new Date(post.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.content}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-4">{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link to="/community">Join the Community</Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="store" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredStoreItems.map((item) => (
                <Link to="/store" key={item.id}>
                  <Card className="overflow-hidden hover:shadow-neon-green transition-all duration-300">
                    <div className="relative h-40">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      {item.discount && (
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                          {item.discount}% OFF
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-black/50 text-white border-0">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                      <div className="flex justify-between items-center">
                        {item.discount ? (
                          <div>
                            <span className="text-sm line-through text-muted-foreground mr-2">${item.price}</span>
                            <span className="text-base font-bold">${(item.price * (1 - item.discount / 100)).toFixed(2)}</span>
                          </div>
                        ) : (
                          <span className="text-base font-bold">${item.price}</span>
                        )}
                        <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link to="/store">Browse Store</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-game from-primary-900 via-primary-800 to-primary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4 text-glow">Join the Gaming Revolution</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Create your account today and get access to exclusive games, tournaments, and a vibrant community of gamers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}