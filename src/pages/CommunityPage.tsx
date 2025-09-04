import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageSquare, Users, ThumbsUp, MessageCircle, TrendingUp, Hash, Circle as PlusCircle, ListFilter as Filter, Share2 } from










"lucide-react";
import { communityPosts, trendingTopics, communityGroups } from "@/data/community";
import { cn } from "@/lib/utils";

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const filteredPosts = communityPosts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-display mb-2">Community</h1>
            <p className="text-muted-foreground">
              Connect with other gamers, share experiences, and join discussions
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-10 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />

            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Create Post Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Create Post</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage src="/avatars/01.png" />
                    <AvatarFallback className="bg-primary/20 text-primary">P1</AvatarFallback>
                  </Avatar>
                  <Input placeholder="What's on your mind?" className="flex-1" />
                </div>
                <Button className="w-full">Create Post</Button>
              </CardContent>
            </Card>
            
            {/* Trending Topics */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" /> Trending Topics
                  </h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) =>
                  <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Hash className="h-4 w-4 text-primary mr-2" />
                        <span>{topic.name}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {topic.posts}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Community Groups */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" /> Groups
                  </h3>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {communityGroups.map((group, index) =>
                  <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md overflow-hidden">
                        <img
                        src={group.image}
                        alt={group.name}
                        className="w-full h-full object-cover" />

                      </div>
                      <div>
                        <p className="font-medium">{group.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {group.members.toLocaleString()} members
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Group
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full mb-6">
              <div className="flex justify-between items-center mb-4">
                <TabsList className="bg-transparent p-0">
                  <TabsTrigger
                    value="all"
                    className={cn(
                      "rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    )}>

                    All Posts
                  </TabsTrigger>
                  <TabsTrigger
                    value="trending"
                    className={cn(
                      "rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    )}>

                    Trending
                  </TabsTrigger>
                  <TabsTrigger
                    value="following"
                    className={cn(
                      "rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    )}>

                    Following
                  </TabsTrigger>
                </TabsList>
                
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <TabsContent value="all" className="mt-0">
                {filteredPosts.length > 0 ?
                <div className="space-y-6">
                    {filteredPosts.map((post) =>
                  <Card key={post.id} className={cn(
                    "overflow-hidden hover:shadow-neon-purple transition-all duration-300",
                    post.pinned && "border-primary/30"
                  )}>
                        <CardContent className="p-6">
                          {post.pinned &&
                      <div className="flex items-center text-primary mb-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <line x1="12" x2="12" y1="17" y2="22" />
                                <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
                              </svg>
                              <span className="text-xs font-medium">Pinned Post</span>
                            </div>
                      }
                          
                          <div className="flex items-center gap-3 mb-4">
                            <Avatar>
                              <AvatarImage src={post.author.avatar} />
                              <AvatarFallback className="bg-primary/20 text-primary">
                                {post.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center">
                                <p className="font-medium">{post.author.name}</p>
                                {post.author.badges && post.author.badges.length > 0 &&
                            <Badge className="ml-2 bg-primary/20 text-primary border-primary/30">
                                    {post.author.badges[0]}
                                  </Badge>
                            }
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Level {post.author.level} • {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                          
                          <p className="text-muted-foreground mb-4">{post.content}</p>
                          
                          {post.media &&
                      <div className="mb-4">
                              {post.media.type === "image" &&
                        <div className="rounded-lg overflow-hidden">
                                  <img
                            src={post.media.urls[0]}
                            alt="Post media"
                            className="w-full h-auto" />

                                </div>
                        }
                            </div>
                      }
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) =>
                        <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                                {tag}
                              </Badge>
                        )}
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <ThumbsUp className="h-4 w-4" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <MessageCircle className="h-4 w-4" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <Share2 className="h-4 w-4" />
                                Share
                              </Button>
                            </div>
                            <Button variant="outline" size="sm">
                              View Discussion
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                  )}
                  </div> :

                <div className="text-center py-12">
                    <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-medium mb-2">No posts found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search query</p>
                    <Button onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </div>
                }
              </TabsContent>
              
              <TabsContent value="trending" className="mt-0">
                <div className="space-y-6">
                  {communityPosts.
                  filter((post) => post.likes > 200).
                  map((post) =>
                  <Card key={post.id} className="overflow-hidden hover:shadow-neon-purple transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Avatar>
                              <AvatarImage src={post.author.avatar} />
                              <AvatarFallback className="bg-primary/20 text-primary">
                                {post.author.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center">
                                <p className="font-medium">{post.author.name}</p>
                                {post.author.badges && post.author.badges.length > 0 &&
                            <Badge className="ml-2 bg-primary/20 text-primary border-primary/30">
                                    {post.author.badges[0]}
                                  </Badge>
                            }
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Level {post.author.level} • {new Date(post.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                          
                          <p className="text-muted-foreground mb-4">{post.content}</p>
                          
                          {post.media &&
                      <div className="mb-4">
                              {post.media.type === "image" &&
                        <div className="rounded-lg overflow-hidden">
                                  <img
                            src={post.media.urls[0]}
                            alt="Post media"
                            className="w-full h-auto" />

                                </div>
                        }
                            </div>
                      }
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) =>
                        <Badge key={tag} variant="outline" className="bg-secondary/10 text-secondary border-secondary/30">
                                {tag}
                              </Badge>
                        )}
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <ThumbsUp className="h-4 w-4" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <MessageCircle className="h-4 w-4" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground">
                                <Share2 className="h-4 w-4" />
                                Share
                              </Button>
                            </div>
                            <Button variant="outline" size="sm">
                              View Discussion
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="following" className="mt-0">
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-medium mb-2">Follow more creators</h3>
                  <p className="text-muted-foreground mb-4">
                    Follow your favorite content creators to see their posts here
                  </p>
                  <Button>
                    Discover Creators
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </div>);

}