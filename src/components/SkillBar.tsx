
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  delay = 0,
  inView
}) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(percentage);
      }, delay);
    }
    
    return () => clearTimeout(timeout);
  }, [inView, percentage, delay]);
  
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
