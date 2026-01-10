import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Target, label: "Results-Driven" },
    { icon: Lightbulb, label: "Creative Solutions" },
    { icon: TrendingUp, label: "Growth Focused" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container relative z-10 px-4 mx-auto" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium tracking-widest uppercase text-sm mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Digital <span className="text-gradient-gold">Growth Partner</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-gold rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              <span className="text-gold font-semibold">Pounds Michaels Digitals</span> is a 
              results-driven digital agency focused on building high-performing websites, 
              strong brand identities, and marketing strategies that actually convert.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We combine creativity, strategy, and modern technology to deliver digital 
              solutions that move businesses forward.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-5 py-3 bg-secondary/50 rounded-full border border-gold/20"
                >
                  <feature.icon className="w-5 h-5 text-gold" />
                  <span className="font-medium text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
