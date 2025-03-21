
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
        "group relative bg-card overflow-hidden rounded-xl transition-all duration-700 border border-border h-full",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video bg-secondary overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered ? "scale-105" : "scale-100"
            )}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span>Project Image</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex items-center space-x-3">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
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
              className="inline-flex items-center justify-center space-x-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
      
      <div 
        className={cn(
          "absolute bottom-0 left-0 w-full h-1 bg-primary transition-transform duration-500",
          isHovered ? "translate-y-0" : "translate-y-full"
        )}
      ></div>
    </div>
  );
};

export default ProjectCard;
