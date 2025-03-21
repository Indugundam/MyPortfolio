
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import TimelineItem from "./TimelineItem";

const Experience = () => {
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
  
  const experiences = [
    {
      title: "AWS Cloud Architecting Virtual Internship",
      company: "AWS / Fashion Startup",
      date: "May 2023 - Oct 2023",
      description: [
        "Built a serverless e-commerce platform using AWS S3 for hosting, CloudFront for global delivery, and Lambda for backend functionality.",
        "Leveraged DynamoDB for product storage, and IAM for secure access.",
        "Automated infrastructure with CloudFormation, followed AWS Well-Architected Framework for scalability and reliability.",
      ],
    },
    {
      title: "President",
      company: "Code Chronicles",
      date: "2024",
      description: [
        "Led the college's premier coding club, organizing technical workshops and coding competitions.",
        "Mentored junior students in programming and problem-solving techniques.",
        "Established partnerships with industry professionals for guest lectures and career guidance sessions.",
      ],
    },
    {
      title: "Vice President",
      company: "AlgoRhythm",
      date: "2023 - 2024",
      description: [
        "Managed a competitive coding club focused on algorithm optimization and data structures.",
        "Conducted regular coding challenges and hackathons to enhance problem-solving skills.",
        "Collaborated with faculty to integrate competitive programming into the curriculum.",
      ],
    },
  ];
  
  return (
    <section
      id="experience"
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
            Experience & Achievements
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            My professional journey and key leadership roles
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              description={experience.description}
              visible={visible}
              delay={index * 200 + 300}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
