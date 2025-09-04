import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Circle as Home, Gamepad2, Trophy, Users, ShoppingBag, User, Settings, LogOut, X } from









"lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const location = useLocation();

  const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Gamepad2, label: "Games", path: "/games" },
  { icon: Trophy, label: "Tournaments", path: "/tournaments" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: ShoppingBag, label: "Store", path: "/store" }];


  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 h-screen max-h-screen" hideClose>
        <div className="flex flex-col h-full bg-card">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h1 className="text-xl font-display text-primary text-glow">NexusGaming</h1>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* User Profile */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback className="bg-primary/20 text-primary">NG</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Player1</p>
                <p className="text-sm text-muted-foreground">Level 42</p>
              </div>
              <ThemeToggle className="ml-auto" />
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 overflow-auto p-4">
            <nav className="space-y-2">
              {navItems.map((item) =>
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
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
            </nav>
            
            <div className="mt-6">
              <h3 className="px-4 text-sm font-medium text-muted-foreground mb-2">Recommended Games</h3>
              <div className="space-y-1">
                {["Cyberpunk 2077", "Elden Ring", "Starfield"].map((game) =>
                <Link
                  key={game}
                  to="/games"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted text-sm">

                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span>{game}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link
                to="/profile"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted">

                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
              <Link
                to="/settings"
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-muted">

                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
              <Button variant="ghost" className="justify-start px-4 py-2 h-auto">
                <LogOut className="h-5 w-5 mr-3" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>);

}