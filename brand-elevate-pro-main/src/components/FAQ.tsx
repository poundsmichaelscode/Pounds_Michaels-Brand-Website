import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web development, UI/UX design, digital marketing, branding, e-commerce solutions, and mobile app development. Each service is tailored to meet your specific business needs and goals.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects like e-commerce platforms or custom web applications can take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing options including fixed-price packages and custom quotes based on project requirements. Our packages start from $1,499 for basic websites. For custom projects, we provide detailed proposals after understanding your specific needs.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimization, and technical support. This ensures your website remains secure, fast, and up-to-date.",
  },
  {
    question: "Can you help with existing websites?",
    answer:
      "Absolutely! We can redesign, optimize, or add new features to your existing website. We'll start with an audit to identify areas for improvement and create a plan to enhance your online presence.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend solutions, we work with Node.js, Python, and various cloud platforms to ensure scalable and reliable solutions.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "We believe in collaborative development. Each project includes multiple revision rounds at key milestones. We use clear communication channels and project management tools to ensure your feedback is incorporated effectively.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "Yes, we can set up and manage hosting for your website on reliable cloud platforms. We handle everything from domain configuration to SSL certificates, ensuring your site is fast, secure, and always available.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know
            about our services and process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-border/50 hover:border-gold/30 transition-colors duration-300 data-[state=open]:border-gold/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold transition-colors py-5 [&[data-state=open]]:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#consultation"
              className="text-gold hover:text-gold/80 font-medium transition-colors"
            >
              Get in touch
            </a>{" "}
            and we'll be happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
