import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Github, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Luxe Fashion Brand",
    category: "Branding & Web Development",
    description: "Complete brand identity and e-commerce platform for a premium fashion retailer.",
    fullDescription: "We partnered with Luxe Fashion to create a comprehensive digital presence that reflects their premium brand positioning. The project involved developing a custom e-commerce platform with seamless checkout, inventory management, and personalized product recommendations. The brand identity work included logo design, color palette, typography, and a complete style guide that ensures consistency across all touchpoints.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Next.js", "Shopify", "Branding"],
    results: ["300% increase in online sales", "2.5s average load time", "45% conversion boost"],
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe", "Cloudinary"],
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "UI/UX Design & Development",
    description: "Modern financial analytics dashboard with real-time data visualization.",
    fullDescription: "A comprehensive financial analytics platform designed for enterprise clients. The dashboard provides real-time insights into financial metrics, portfolio performance, and market trends. We implemented complex data visualizations using D3.js and created an intuitive interface that makes complex financial data accessible to users of all skill levels.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "D3.js"],
    results: ["50K+ active users", "99.9% uptime", "4.8 star rating"],
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Wellness App",
    category: "Digital Marketing & Design",
    description: "Health and wellness mobile app with integrated marketing campaign.",
    fullDescription: "A holistic health and wellness application designed to help users track their fitness journey, meditation practice, and nutrition goals. The project included UI/UX design for both iOS and Android platforms, along with a comprehensive digital marketing strategy that drove organic downloads and user engagement.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Mobile App", "Marketing", "UI/UX"],
    results: ["100K downloads", "35% user retention", "Featured on App Store"],
    technologies: ["React Native", "Firebase", "Node.js", "AWS"],
  },
  {
    id: 4,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing platform with virtual tours and smart search functionality.",
    fullDescription: "An innovative real estate platform that revolutionizes property discovery. Features include 360° virtual tours, AI-powered property recommendations, advanced filtering, and an intuitive map-based search. The platform connects buyers, sellers, and agents in a seamless digital experience.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Next.js", "Maps API", "3D Tours"],
    results: ["200+ properties listed", "60% faster search", "2M monthly views"],
    technologies: ["Next.js", "Three.js", "Google Maps API", "Supabase"],
  },
  {
    id: 5,
    title: "Restaurant Chain",
    category: "Branding & Marketing",
    description: "Complete rebrand and digital presence for a growing restaurant franchise.",
    fullDescription: "A comprehensive rebranding initiative for an expanding restaurant franchise. The project encompassed brand strategy, visual identity redesign, menu design, social media presence, and a new website with online ordering capabilities. The cohesive brand experience helped establish their position in the competitive dining market.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["Branding", "Social Media", "Web Design"],
    results: ["150% social growth", "New locations opened", "Award-winning design"],
    technologies: ["WordPress", "WooCommerce", "Figma", "Adobe Creative Suite"],
  },
  {
    id: 6,
    title: "Tech Startup",
    category: "Full Digital Solution",
    description: "End-to-end digital transformation for an emerging SaaS company.",
    fullDescription: "A complete digital transformation for a B2B SaaS startup. We developed their web application, created marketing collateral, designed the product interface, and built a scalable infrastructure. Our work helped them secure Series A funding and establish enterprise partnerships.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["SaaS", "UI/UX", "Development"],
    results: ["$2M funding raised", "10x user growth", "Enterprise clients"],
    technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
  },
];

const categories = ["All", "Web Development", "Branding", "UI/UX Design", "Digital Marketing"];

const GITHUB_URL = "https://github.com/poundsmichaelscode";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase().replace(" & ", " ")));

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-6 border border-gold/20"
          >
            Our Work
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations and see how we've helped brands achieve extraordinary results.
          </p>
          
          {/* GitHub Link */}
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-card/50 border border-gold/20 rounded-full text-gold hover:bg-gold/10 hover:border-gold/40 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-gold to-gold-light text-background shadow-lg shadow-gold/25"
                  : "bg-card/50 text-muted-foreground hover:text-gold border border-border/50 hover:border-gold/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Overlay Content */}
                  <motion.div
                    initial={false}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      initial={false}
                      animate={{ scale: hoveredProject === project.id ? 1 : 0.8 }}
                      className="px-6 py-3 bg-gold text-background rounded-full font-medium flex items-center gap-2 hover:bg-gold-light transition-colors cursor-pointer"
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-gold text-xs font-medium rounded-full border border-gold/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gold/10 text-gold text-xs rounded-md border border-gold/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Key Results</p>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <ArrowRight className="w-3 h-3 text-gold" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-gold text-gold rounded-full font-semibold hover:bg-gold hover:text-background transition-all duration-300 group"
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-gold/20 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 hover:bg-gold/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full border border-gold/30">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gold/10 text-gold text-sm rounded-lg border border-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-3">
                  Key Results
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {selectedProject.results.map((result, i) => (
                    <div
                      key={i}
                      className="p-4 bg-background/50 rounded-lg border border-border/50 text-center"
                    >
                      <ArrowRight className="w-4 h-4 text-gold mx-auto mb-2" />
                      <span className="text-foreground font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background rounded-full font-medium hover:bg-gold-light transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-full font-medium hover:bg-gold/10 transition-colors"
                >
                  Start Similar Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Portfolio;
