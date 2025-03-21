
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  delay?: number;
  visible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  delay = 0,
  visible
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "group relative glass-morphism overflow-hidden rounded-xl transition-all duration-700 shadow-lg h-full scale-on-hover",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-gradient-to-br from-secondary/50 to-secondary/20 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span>Project Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gradient-blue bg-opacity-10 rounded-full text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-indigo-500 transition-all duration-300">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center space-x-3">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </a>
          )}
          
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-500 transition-transform duration-500",
          isHovered ? "translate-y-0" : "translate-y-full"
        )}
      ></div>
    </div>
  );
};

export default ProjectCard;
