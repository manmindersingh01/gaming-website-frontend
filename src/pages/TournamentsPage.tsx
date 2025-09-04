import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Trophy, Calendar1 as Calendar, Clock, Users, Gamepad2, DollarSign, Tv } from








"lucide-react";
import { tournaments } from "@/data/tournaments";
import { cn } from "@/lib/utils";

export default function TournamentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tournaments based on search query
  const filteredTournaments = tournaments.filter((tournament) => {
    return tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tournament.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Group tournaments by status
  const ongoingTournaments = filteredTournaments.filter((t) => t.status === "ongoing");
  const upcomingTournaments = filteredTournaments.filter((t) => t.status === "upcoming");
  const completedTournaments = filteredTournaments.filter((t) => t.status === "completed");

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display mb-2">Tournaments</h1>
            <p className="text-muted-foreground">
              Compete in esports tournaments and win prizes
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tournaments..."
                className="pl-10 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />

            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create Tournament
            </Button>
          </div>
        </div>
        
        {/* Featured Tournament */}
        <Card className="mb-8 overflow-hidden border-primary/20">
          <div className="relative h-[300px] md:h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                filter: "brightness(0.4)"
              }} />

            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end gap-6">
                <div className="flex-1">
                  <Badge className="mb-2 bg-primary text-primary-foreground animate-pulse">LIVE NOW</Badge>
                  <h2 className="text-3xl md:text-4xl font-display text-white mb-2">Nexus Championship Series</h2>
                  <p className="text-gray-300 mb-4 max-w-2xl">
                    The premier Valorant tournament featuring the top 16 teams from around the world competing for glory and a massive prize pool.
                  </p>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center">
                      <Gamepad2 className="mr-2 h-5 w-5 text-primary" />
                      Valorant
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-primary" />
                      $100,000 Prize Pool
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      16 Teams
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-3">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Tv className="mr-2 h-4 w-4" />
                    Watch Live
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Tournament Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Tournament Tabs */}
        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="ongoing"
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}>

              <Clock className="mr-2 h-5 w-5" />
              Live Now
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}>

              <Calendar className="mr-2 h-5 w-5" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className={cn(
                "rounded-none border-b-2 border-transparent pb-2 pt-2 px-4 -mb-[2px] data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              )}>

              <Trophy className="mr-2 h-5 w-5" />
              Completed
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing" className="mt-6">
            {ongoingTournaments.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ongoingTournaments.map((tournament) =>
              <Card key={tournament.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                    <div className="relative h-48">
                      <img
                    src={tournament.gameImage}
                    alt={tournament.title}
                    className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-primary/20 text-primary border-primary/30 animate-pulse">
                              LIVE NOW
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
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">
                            {tournament.participants.current}/{tournament.participants.max} Teams
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {tournament.format}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                          <Tv className="mr-2 h-4 w-4" />
                          Watch
                        </Button>
                        <Button size="sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
              )}
              </div> :

            <div className="text-center py-12">
                <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No ongoing tournaments</h3>
                <p className="text-muted-foreground mb-4">Check back later for live tournaments</p>
              </div>
            }
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-6">
            {upcomingTournaments.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingTournaments.map((tournament) =>
              <Card key={tournament.id} className="overflow-hidden hover:shadow-neon-cyan transition-all duration-300">
                    <div className="relative h-48">
                      <img
                    src={tournament.gameImage}
                    alt={tournament.title}
                    className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                              UPCOMING
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
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">
                            Starts: {new Date(tournament.startDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {tournament.format}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary/10">
                          <Bell className="mr-2 h-4 w-4" />
                          Remind Me
                        </Button>
                        <Button size="sm">
                          Register
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
              )}
              </div> :

            <div className="text-center py-12">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No upcoming tournaments</h3>
                <p className="text-muted-foreground mb-4">Check back later for upcoming tournaments</p>
              </div>
            }
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            {completedTournaments.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {completedTournaments.map((tournament) =>
              <Card key={tournament.id} className="overflow-hidden hover:shadow-neon-green transition-all duration-300">
                    <div className="relative h-48">
                      <img
                    src={tournament.gameImage}
                    alt={tournament.title}
                    className="w-full h-full object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <Badge className="bg-accent/20 text-accent border-accent/30">
                              COMPLETED
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
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-1" />
                          <span className="text-sm text-muted-foreground">
                            Ended: {new Date(tournament.endDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {tournament.format}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
                          <Trophy className="mr-2 h-4 w-4" />
                          Results
                        </Button>
                        <Button size="sm" variant="outline">
                          Highlights
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
              )}
              </div> :

            <div className="text-center py-12">
                <Trophy className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No completed tournaments</h3>
                <p className="text-muted-foreground mb-4">Check back later for tournament results</p>
              </div>
            }
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>);

}

// Import Bell icon for the upcoming tournaments section
import { Bell } from "lucide-react";