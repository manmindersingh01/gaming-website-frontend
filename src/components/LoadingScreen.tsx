import { Loader } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative">
        <Loader className="h-12 w-12 text-primary animate-spin" />
        <div className="absolute inset-0 h-12 w-12 rounded-full border-t-2 border-primary animate-pulse"></div>
      </div>
      <h2 className="mt-4 text-xl font-display text-primary text-glow animate-pulse">
        Loading...
      </h2>
    </div>
  );
}