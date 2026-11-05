import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pounds Michaels Brand Website",
    type: "Own project · Live website",
    description: "Responsive business website built with React, TypeScript, Vite and Tailwind CSS. Includes service sections, pricing and an enquiry form.",
    href: "https://pounds-michaels-brand-website.vercel.app/",
    linkLabel: "Visit website",
  },
  {
    title: "Bincom OpenProject Deployment",
    type: "Technical project · Public repository",
    description: "Docker-based OpenProject deployment with PostgreSQL, reverse proxy, health checks, backup and recovery documentation. Shown as technical experience, not a consultancy client case study.",
    href: "https://github.com/poundsmichaelscode/Bincom-OpenProject",
    linkLabel: "View source",
  },
  {
    title: "Skillproof API",
    type: "Technical project · Public repository",
    description: "Django REST Framework API work with PostgreSQL, environment-based configuration, health endpoint and tests. Shown as technical experience, not a commercial client result.",
    href: "https://github.com/poundsmichaelscode/skillproof-api",
    linkLabel: "View source",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="text-gold text-sm uppercase tracking-widest">Selected work</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">Projects & <span className="text-gradient-gold">Technical Experience</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">A selection of publicly viewable projects demonstrating website development, backend engineering and deployment capabilities. These are not presented as paid consultancy engagements or verified client outcomes.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article key={project.title} className="glass-card rounded-2xl p-8 flex flex-col">
            <p className="text-gold text-xs uppercase tracking-wide mb-3">{project.type}</p>
            <h3 className="font-display text-xl font-bold mb-4">{project.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{project.description}</p>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:underline">
              {project.linkLabel} <ExternalLink className="w-4 h-4" />
            </a>
          </article>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="https://github.com/poundsmichaelscode" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:underline"><Github className="w-5 h-5" /> More projects on GitHub</a>
      </div>
    </div>
  </section>
);
export default Portfolio;
