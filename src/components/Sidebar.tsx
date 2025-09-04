import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Circle as Home, Gamepad2, Trophy, Users, ShoppingBag, User, Bell, Search } from








"lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Gamepad2, label: "Games", path: "/games" },
  { icon: Trophy, label: "Tournaments", path: "/tournaments" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: ShoppingBag, label: "Store", path: "/store" }];


  return (
    <div className="w-64 h-screen border-r border-border bg-card flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-display text-primary text-glow">NexusGaming</h1>
      </div>
      
      {/* Navigation */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-2">
          {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
              location.pathname === item.path ?
              "bg-primary/10 text-primary font-medium" :
              "hover:bg-muted text-foreground hover:text-primary"
            )}>

              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
              {item.label === "Tournaments" &&
            <Badge variant="outline" className="ml-auto bg-primary/20 text-primary border-primary/30">
                  LIVE
                </Badge>
            }
            </Link>
          )}
        </div>
        
        <div className="mt-6">
          <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">Recommended Games</h3>
          <div className="space-y-1">
            {["Cyberpunk 2077", "Elden Ring", "Starfield"].map((game) =>
            <Link
              key={game}
              to="/games"
              className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted text-sm">

                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span>{game}</span>
              </Link>
            )}
          </div>
        </div>
      </ScrollArea>
      
      {/* Search */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full justify-start text-muted-foreground">
          <Search className="mr-2 h-4 w-4" />
          Search...
        </Button>
      </div>
      
      {/* User & Settings */}
      <div className="p-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/avatars/01.png" />
            <AvatarFallback className="bg-primary/20 text-primary">NG</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Player1</p>
            <p className="text-xs text-muted-foreground">Level 42</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>);

}