
import { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden scroll-section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            className={cn(
              "px-3 py-1 rounded-full bg-secondary inline-flex items-center mb-8 transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-sm">Bachelor of Information Technology</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight transition-all duration-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <span className="block">Hello, I'm Indu Gundam</span>
          </h1>
          
          <div 
            className={cn(
              "h-12 md:h-16 overflow-hidden transition-all duration-700 delay-300",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <AnimatedText 
              text="Developer, Problem Solver, Innovation Enthusiast"
              className="text-2xl md:text-3xl text-muted-foreground font-light"
              speed={35}
            />
          </div>
          
          <div 
            className={cn(
              "mt-8 max-w-xl text-muted-foreground text-balance leading-relaxed transition-all duration-700 delay-500",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <p>
              Passionate student with a focus on Java, Cloud technologies, and Web development. 
              Building solutions that solve real problems.
            </p>
          </div>
          
          <div
            className={cn(
              "mt-10 space-x-4 transition-all duration-700 delay-700",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 border border-primary/20 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float transition-all duration-700 delay-1000",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center justify-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
