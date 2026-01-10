import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, TrendingUp, Award, Cpu, Video } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern technologies — fast, scalable, and conversion-focused.",
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description:
      "Custom software solutions engineered for reliability, performance, and scalability to solve complex business challenges.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs crafted to engage users and guide them effortlessly toward action.",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Engaging content that tells your brand story — from videos and graphics to copy that connects and converts.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility, attract the right audience, and drive measurable growth.",
  },
  {
    icon: Award,
    title: "Branding",
    description:
      "Strong brand identities that communicate trust, clarity, and professionalism across all digital touchpoints.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            What We Do <span className="text-gradient-gold">Best</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold/30 hover:glow-gold">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
