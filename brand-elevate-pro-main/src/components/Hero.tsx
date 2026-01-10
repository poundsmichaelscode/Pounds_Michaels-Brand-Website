import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-pounds.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/2349055515211?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse-gold" />
              <img
                src={logo}
                alt="Pounds Michaels Digitals"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gold/30 relative z-10"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            We Build Digital Experiences That{" "}
            <span className="text-gradient-gold">Elevate Brands</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gold font-medium tracking-widest uppercase text-sm md:text-base mb-6"
          >
            Web Development • UI/UX Design • Digital Marketing • Branding
          </motion.p>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10"
          >
            At Pounds Michaels Digitals, we help businesses stand out, scale faster, 
            and convert better through modern technology and powerful brand experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-6 text-lg glow-gold hover:glow-gold-intense transition-all duration-300 shine-effect"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat With Us on WhatsApp
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold font-semibold px-8 py-6 text-lg transition-all duration-300"
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Free Consultation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
