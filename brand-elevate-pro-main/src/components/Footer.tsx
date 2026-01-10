import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logo-pounds.jpg";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/iam_poundsmichaels/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/PoundsMichael3", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/olayenikan-michael", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/pounds.michaels", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <img
              src={logo}
              alt="Pounds Michaels Digitals"
              className="w-16 h-16 rounded-full object-cover border border-gold/30"
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-xl font-bold text-gradient-gold mb-2"
          >
            Pounds Michaels Digitals
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Crafting Digital Excellence
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-sm text-muted-foreground">Follow us:</span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Pounds Michaels Digitals. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
