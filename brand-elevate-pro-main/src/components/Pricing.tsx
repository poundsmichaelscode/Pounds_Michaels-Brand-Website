import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";

const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "1,500",
    description: "Perfect for small businesses getting started online",
    features: [
      "5-page responsive website",
      "Basic SEO setup",
      "Mobile optimization",
      "Contact form integration",
      "1 month support",
      "Social media links",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: "3,500",
    description: "Ideal for growing businesses seeking comprehensive solutions",
    features: [
      "10-page custom website",
      "Advanced SEO optimization",
      "UI/UX design consultation",
      "CMS integration",
      "3 months support",
      "Analytics dashboard",
      "Performance optimization",
      "Brand guidelines",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "7,500",
    description: "Complete digital transformation for established brands",
    features: [
      "Unlimited pages",
      "Full branding package",
      "Custom web application",
      "E-commerce integration",
      "Digital marketing strategy",
      "6 months priority support",
      "Dedicated account manager",
      "Monthly analytics reports",
      "A/B testing setup",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-6">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Investment in Your{" "}
            <span className="text-gradient-gold">Digital Future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that aligns with your business goals. All packages include our commitment to excellence and results-driven approach.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={cardVariants}
              className={`relative group ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-gradient-gold text-primary-foreground px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-8 transition-all duration-500 ${
                  pkg.popular
                    ? "glass-card-gold border-gold/30 hover:border-gold/50"
                    : "glass-card hover:border-gold/20"
                } group-hover:glow-gold`}
              >
                {/* Package Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    pkg.popular
                      ? "bg-gradient-gold"
                      : "bg-secondary border border-border"
                  }`}
                >
                  <pkg.icon
                    className={`w-7 h-7 ${
                      pkg.popular ? "text-primary-foreground" : "text-gold"
                    }`}
                  />
                </div>

                {/* Package Name */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gradient-gold">
                    ${pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-2">starting</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-8">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.popular
                            ? "bg-gold/20 text-gold"
                            : "bg-secondary text-gold"
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full shine-effect ${
                    pkg.popular
                      ? "bg-gradient-gold hover:opacity-90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-gold/30"
                  }`}
                >
                  <a
                    href="https://wa.me/2349055515211?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Need a custom solution?{" "}
          <a
            href="#contact"
            className="text-gold hover:text-gold-light underline-offset-4 hover:underline transition-colors"
          >
            Contact us for a tailored quote
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
