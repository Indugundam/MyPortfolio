
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import BlogCard from "./BlogCard";

const Blog = () => {
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
  
  // Sample blog posts from Medium - replace with your actual posts
  const blogPosts = [
    {
      title: "Building Robust Web Applications with React and TypeScript",
      excerpt: "Learn how to create scalable and maintainable web applications using React with TypeScript for improved developer experience and code quality.",
      image: "https://miro.medium.com/max/1400/1*yjH3SiDaVWtpBX0g_2q68g.jpeg",
      date: "May 15, 2023",
      url: "https://medium.com/@yourusername/article1",
    },
    {
      title: "Cloud Architecture: Building Scalable Solutions with AWS",
      excerpt: "Discover the best practices for designing cloud-native applications on AWS that can scale effortlessly while maintaining reliability and performance.",
      image: "https://miro.medium.com/max/1400/1*9KPgGFpPiLXSRoRfSzd8Iw.jpeg",
      date: "Aug 22, 2023",
      url: "https://medium.com/@yourusername/article2",
    },
    {
      title: "Mastering Data Structures and Algorithms in Java",
      excerpt: "A comprehensive guide to understanding and implementing essential data structures and algorithms using Java, with practical examples and performance analysis.",
      image: "https://miro.medium.com/max/1400/1*CfoISgLRa_OxTnT9q7M7Yw.jpeg",
      date: "Nov 10, 2023",
      url: "https://medium.com/@yourusername/article3",
    },
  ];
  
  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 scroll-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 text-primary transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Blog
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Thoughts, ideas, and insights on technology and development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              url={post.url}
              delay={index * 100 + 300}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
