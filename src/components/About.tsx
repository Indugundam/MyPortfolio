
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Download, FileText } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  return (
    <section
      id="about"
      ref={ref}
      className="py-20 scroll-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h2 
                className={cn(
                  "text-3xl font-bold mb-8 text-primary transition-all duration-700",
                  visible ? "opacity-100" : "opacity-0 translate-y-10"
                )}
              >
                About Me
              </h2>
              
              <div 
                className={cn(
                  "relative overflow-hidden rounded-2xl w-full max-w-xs transition-all duration-700 delay-300",
                  visible ? "opacity-100" : "opacity-0 translate-y-10"
                )}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary rounded-2xl flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Your Photo Here</span>
                </div>
                
                <div className="absolute inset-0 rounded-2xl border border-primary/10"></div>
              </div>
              
              <div 
                className={cn(
                  "mt-6 flex justify-center md:justify-start space-x-4 transition-all duration-700 delay-500",
                  visible ? "opacity-100" : "opacity-0 translate-y-10"
                )}
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2 text-sm border border-primary/20 rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
                
                <a
                  href="#"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
            
            <div 
              className={cn(
                "md:col-span-3 transition-all duration-700 delay-300",
                visible ? "opacity-100" : "opacity-0 translate-y-10"
              )}
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Passionate and dedicated student currently pursuing my undergraduate studies in Information Technology. I have a strong academic background with real-time exposure in implementing various projects in Java, Cloud (Azure), and Web related technologies.
                </p>
                
                <p>
                  My focus lies in problem solving (Algorithms), debugging, and communication skills. I'm committed to continuous learning and applying cutting-edge technologies to solve real-world problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
