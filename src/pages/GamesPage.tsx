import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ListFilter as Filter, Star, Clock, ArrowUp as ArrowUpDown, Tag, Gamepad2, Monitor, Calendar1 as Calendar } from









"lucide-react";
import { games, popularGenres } from "@/data/games";
import { cn } from "@/lib/utils";

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  // Filter games based on search query and filters
  const filteredGames = games.filter((game) => {
    // Search filter
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Genre filter
    const matchesGenre = selectedGenres.length === 0 ||
    game.genre.some((g) => selectedGenres.includes(g));

    // Platform filter
    const matchesPlatform = selectedPlatforms.length === 0 ||
    game.platforms.some((p) => selectedPlatforms.includes(p));

    return matchesSearch && matchesGenre && matchesPlatform;
  });

  // Toggle genre selection
  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  // Toggle platform selection
  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  // Get all unique platforms
  const allPlatforms = Array.from(new Set(games.flatMap((game) => game.platforms)));

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display mb-2">Game Library</h1>
            <p className="text-muted-foreground">
              Discover and explore our collection of {games.length} games
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search games..."
                className="pl-10 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />

            </div>
            <Button variant="outline" className="gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Filter className="mr-2 h-5 w-5" /> Filters
                  </h3>
                  {(selectedGenres.length > 0 || selectedPlatforms.length > 0) &&
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedGenres([]);
                      setSelectedPlatforms([]);
                    }}>

                      Clear All
                    </Button>
                  }
                </div>
                
                {/* Genre Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium flex items-center mb-3">
                    <Tag className="mr-2 h-4 w-4" /> Genres
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {popularGenres.slice(0, 8).map((genre) =>
                    <Badge
                      key={genre.name}
                      variant={selectedGenres.includes(genre.name) ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer",
                        selectedGenres.includes(genre.name) ?
                        "bg-primary text-primary-foreground" :
                        "hover:bg-primary/10"
                      )}
                      onClick={() => toggleGenre(genre.name)}>

                        {genre.icon} {genre.name}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Platform Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium flex items-center mb-3">
                    <Monitor className="mr-2 h-4 w-4" /> Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {allPlatforms.map((platform) =>
                    <Badge
                      key={platform}
                      variant={selectedPlatforms.includes(platform) ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer",
                        selectedPlatforms.includes(platform) ?
                        "bg-secondary text-secondary-foreground" :
                        "hover:bg-secondary/10"
                      )}
                      onClick={() => togglePlatform(platform)}>

                        {platform}
                      </Badge>
                    )}
                  </div>
                </div>
                
                {/* Release Year Filter */}
                <div>
                  <h4 className="text-sm font-medium flex items-center mb-3">
                    <Calendar className="mr-2 h-4 w-4" /> Release Year
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["2023", "2022", "2021", "2020", "Older"].map((year) =>
                    <Badge
                      key={year}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent/10">

                        {year}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Games Grid */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full mb-6">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="all"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}>

                  <Gamepad2 className="mr-2 h-5 w-5" />
                  All Games
                </TabsTrigger>
                <TabsTrigger
                  value="new"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}>

                  <Star className="mr-2 h-5 w-5" />
                  New Releases
                </TabsTrigger>
                <TabsTrigger
                  value="upcoming"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}>

                  <Clock className="mr-2 h-5 w-5" />
                  Upcoming
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                {filteredGames.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGames.map((game) =>
                  <Link to={`/games/${game.id}`} key={game.id}>
                        <Card className="game-card h-full">
                          <div className="relative h-48 overflow-hidden">
                            <img
                          src={game.coverImage}
                          alt={game.title}
                          className="w-full h-full object-cover" />

                            {game.discount &&
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                                {game.discount}% OFF
                              </div>
                        }
                          </div>
                          <CardContent className="p-4">
                            <h3 className="text-lg font-bold mb-1">{game.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{game.description}</p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {game.genre.slice(0, 3).map((genre) =>
                          <Badge key={genre} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                  {genre}
                                </Badge>
                          )}
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                <span className="text-sm font-medium">{game.rating}</span>
                              </div>
                              <div className="text-right">
                                {game.discount ?
                            <div>
                                    <span className="text-sm line-through text-muted-foreground mr-2">${game.price}</span>
                                    <span className="text-base font-bold">${(game.price * (1 - game.discount / 100)).toFixed(2)}</span>
                                  </div> :

                            <span className="text-base font-bold">${game.price}</span>
                            }
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                  )}
                  </div> :

                <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No games found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your filters or search query</p>
                    <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedGenres([]);
                      setSelectedPlatforms([]);
                    }}>

                      Clear Filters
                    </Button>
                  </div>
                }
              </TabsContent>
              
              <TabsContent value="new" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {games.slice(0, 6).map((game) =>
                  <Link to={`/games/${game.id}`} key={game.id}>
                      <Card className="game-card h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img
                          src={game.coverImage}
                          alt={game.title}
                          className="w-full h-full object-cover" />

                          {game.discount &&
                        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                              {game.discount}% OFF
                            </div>
                        }
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold mb-1">{game.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{game.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {game.genre.slice(0, 3).map((genre) =>
                          <Badge key={genre} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                {genre}
                              </Badge>
                          )}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-sm font-medium">{game.rating}</span>
                            </div>
                            <div className="text-right">
                              {game.discount ?
                            <div>
                                  <span className="text-sm line-through text-muted-foreground mr-2">${game.price}</span>
                                  <span className="text-base font-bold">${(game.price * (1 - game.discount / 100)).toFixed(2)}</span>
                                </div> :

                            <span className="text-base font-bold">${game.price}</span>
                            }
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Placeholder for upcoming games */}
                  <Card className="overflow-hidden border-primary/20 bg-card/50">
                    <div className="relative h-40">
                      <img
                        src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Dragon Age: The Veilguard"
                        className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">Dragon Age: The Veilguard</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-200">Oct 31, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">BioWare</span>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs">PC</Badge>
                          <Badge variant="outline" className="text-xs">PS5</Badge>
                          <Badge variant="outline" className="text-xs">Xbox</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden border-primary/20 bg-card/50">
                    <div className="relative h-40">
                      <img
                        src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="Star Wars Outlaws"
                        className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">Star Wars Outlaws</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-200">Aug 30, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Massive Entertainment</span>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs">PC</Badge>
                          <Badge variant="outline" className="text-xs">PS5</Badge>
                          <Badge variant="outline" className="text-xs">Xbox</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="overflow-hidden border-primary/20 bg-card/50">
                    <div className="relative h-40">
                      <img
                        src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="Fable"
                        className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-lg font-bold text-white">Fable</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm text-gray-200">Jan 15, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Playground Games</span>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs">PC</Badge>
                          <Badge variant="outline" className="text-xs">Xbox</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </div>);

}