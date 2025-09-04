import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile Sidebar */}
      <MobileNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(true)}
            className="text-foreground"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-display text-primary text-glow">NexusGaming</h1>
        </header>
        
        {/* Content */}
        <main className={cn(
          "flex-1 overflow-auto",
          "scrollbar scrollbar-track-transparent scrollbar-thumb-primary/20 scrollbar-thumb-rounded-md"
        )}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}