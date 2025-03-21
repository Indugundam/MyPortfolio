
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Send, Github, Linkedin, AtSign, Smartphone, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [visible, setVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    { 
      icon: <AtSign className="w-5 h-5" />,
      label: "Email",
      value: "indugundam2004@gmail.com",
      href: "mailto:indugundam2004@gmail.com"
    },
    { 
      icon: <Smartphone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9676067989",
      href: "tel:+919676067989"
    },
    { 
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Visakhapatnam, AP",
      href: "#"
    },
    { 
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/indugundam",
      href: "https://github.com/indugundam"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/indugundam",
      href: "https://linkedin.com/in/indugundam"
    },
  ];
  
  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 scroll-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl font-bold mb-4 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Get In Touch
          </h2>
          
          <p 
            className={cn(
              "text-muted-foreground transition-all duration-700 delay-200",
              visible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div 
              className={cn(
                "transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-card p-8 rounded-xl border border-border h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className={cn(
                "transition-all duration-700 delay-300",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-6">Send Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className={cn(
                      "w-full px-6 py-3 flex items-center justify-center space-x-2 rounded-lg font-medium transition-colors",
                      formStatus === "sending" ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary/90",
                      "text-primary-foreground"
                    )}
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <span>Message Sent!</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
