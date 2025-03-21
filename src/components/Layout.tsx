
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <main className="w-full mx-auto">
        {children}
      </main>
      <footer className={cn(
        "w-full py-8 border-t border-primary/10 transition-all duration-300 ease-in-out",
        "text-center text-sm text-muted-foreground"
      )}>
        <div className="container">
          <p>© {new Date().getFullYear()} Indu Gundam. All rights reserved.</p>
          <p className="mt-1">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
