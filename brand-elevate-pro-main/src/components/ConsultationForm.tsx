import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and service selection are required.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzddpraw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request submitted successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="consultation" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Get Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get a Free <span className="text-gradient-gold">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll help you turn your ideas into a 
            powerful digital solution tailored to your business goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {isSubmitted ? (
            <div className="glass-card-gold rounded-2xl p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Thank You!</h3>
              <p className="text-muted-foreground text-lg">
                Your consultation request has been received. Our team will contact you 
                within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-gold/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address <span className="text-gold">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-gold/50 h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-secondary/50 border-border/50 focus:border-gold/50 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Interested In <span className="text-gold">*</span>
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange("service", value)}
                    >
                      <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-gold/50 h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your project
                  </label>
                  <Textarea
                    placeholder="Describe your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-secondary/50 border-border/50 focus:border-gold/50 min-h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-primary-foreground font-semibold py-6 text-lg glow-gold hover:glow-gold-intense transition-all duration-300 shine-effect disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Request Free Consultation
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  No pressure. No obligation. Just expert guidance.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;
