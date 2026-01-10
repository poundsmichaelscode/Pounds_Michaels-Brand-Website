import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const whatsappLink = "https://wa.me/2349055515211?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information.";

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-background to-gold/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="text-gradient-gold">Exceptional?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's create a digital presence that works as hard as you do.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold px-10 py-7 text-xl glow-gold-intense hover:scale-105 transition-all duration-300 shine-effect"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                Start a WhatsApp Chat Now
                <ArrowRight className="w-5 h-5 ml-3" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
