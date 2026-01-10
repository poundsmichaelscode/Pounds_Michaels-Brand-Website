import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/2349055515211?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center glow-gold-intense animate-pulse-gold cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
