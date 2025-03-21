
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import SkillBar from "./SkillBar";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  visible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  visible
}) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl p-6 transition-all duration-700 border border-border",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        delay ? `transition-delay-${delay}` : ""
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  const programmingSkills = [
    { name: "Java", percentage: 95 },
    { name: "Python", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "SQL", percentage: 90 },
    { name: "HTML/CSS", percentage: 85 },
  ];
  
  const developmentSkills = [
    { name: "React", percentage: 80 },
    { name: "Cloud (AWS & Azure)", percentage: 85 },
    { name: "Node.js", percentage: 75 },
    { name: "Git/GitHub", percentage: 90 },
    { name: "Debugging", percentage: 95 },
  ];
  
  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-secondary/30 scroll-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Skills & Expertise
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Here are the technologies and skills I've developed throughout my academic journey and projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCard
            icon={<span className="text-xl">💻</span>}
            title="Programming Languages"
            description="Proficient in Java, Python, and various web technologies. Experienced in building robust applications."
            delay={300}
            visible={visible}
          />
          
          <SkillCard
            icon={<span className="text-xl">☁️</span>}
            title="Cloud Technologies"
            description="Experienced with AWS and Azure services. Completed certifications and built cloud-native applications."
            delay={400}
            visible={visible}
          />
          
          <SkillCard
            icon={<span className="text-xl">🔍</span>}
            title="Problem Solving"
            description="Strong algorithm skills and analytical thinking. Capable of debugging complex issues efficiently."
            delay={500}
            visible={visible}
          />
          
          <SkillCard
            icon={<span className="text-xl">🌐</span>}
            title="Web Development"
            description="Experience with React, HTML, CSS, and JavaScript to create responsive and interactive web applications."
            delay={600}
            visible={visible}
          />
          
          <SkillCard
            icon={<span className="text-xl">🗄️</span>}
            title="Database Management"
            description="Proficient in SQL, MySQL, Oracle, and NoSQL databases. Experience in database design and optimization."
            delay={700}
            visible={visible}
          />
          
          <SkillCard
            icon={<span className="text-xl">🔄</span>}
            title="Version Control"
            description="Experienced with Git and GitHub for collaboration, code management, and version control."
            delay={800}
            visible={visible}
          />
        </div>
        
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto transition-all duration-700 delay-500",
            visible ? "opacity-100" : "opacity-0 translate-y-10"
          )}
        >
          <div>
            <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
            {programmingSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100}
                inView={visible}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Development Skills</h3>
            {developmentSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 100 + 300}
                inView={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
