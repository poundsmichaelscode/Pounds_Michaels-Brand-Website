import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Database, Server } from "lucide-react";

type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
  icon: typeof Code2;
};

const projects: Project[] = [
  {
    title: "Pounds Michaels Brand Website",
    type: "Owned project · Frontend website",
    description: "A responsive business site with service pages, consultation enquiries and deployment to Vercel. It demonstrates production-facing UI development; it is not described as a full-stack application.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    href: "https://pounds-michaels-brand-website.vercel.app/",
    linkLabel: "View live site",
    icon: Code2,
  },
  {
    title: "SkillGraph CognODB",
    type: "Web project · Live demo · Stack unverified",
    description: "A deployed web project presented as a live demonstration. Frontend/backend implementation and feature scope are pending source review.",
    stack: [],
    href: "https://skillgraph-cognodb-web-elbq.vercel.app/",
    linkLabel: "View demo",
    icon: Code2,
  },
  {
    title: "Ground Break Tech Prototype",
    type: "Web project · Live demo · Stack unverified",
    description: "A technology prototype presented as a live web demonstration. Production readiness and full-stack functionality have not yet been verified.",
    stack: [],
    href: "https://ground-break-tech-prototype.vercel.app/",
    linkLabel: "View demo",
    icon: Code2,
  },
  {
    title: "Financial Platform",
    type: "Web project · Live demo · Stack unverified",
    description: "A financial-platform web demonstration. No claims are made about real financial transactions, security certifications or production integrations.",
    stack: [],
    href: "https://financial-platform-orpin.vercel.app/",
    linkLabel: "View demo",
    icon: Code2,
  },
  {
    title: "Moedify Media",
    type: "Web project · Live demo · Stack unverified",
    description: "A media/agency website demonstration. Commercial engagement details and technical implementation are not independently verified.",
    stack: [],
    href: "https://moedifymedia.vercel.app/",
    linkLabel: "View demo",
    icon: Code2,
  },
  {
    title: "ALAT Defence Threat Detection Dashboard",
    type: "Web project · Live demo · Stack unverified",
    description: "A threat-detection dashboard interface demonstration. It is not presented as a validated live security monitoring system.",
    stack: [],
    href: "https://alat-defence-threat-detection-dashb.vercel.app/",
    linkLabel: "View demo",
    icon: Code2,
  },
  {
    title: "Skillproof API",
    type: "Public technical project · Backend",
    description: "A Django REST Framework API using PostgreSQL, environment-based configuration, health checks and tests. This public repository showcases backend engineering rather than a fabricated client outcome.",
    stack: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    href: "https://github.com/poundsmichaelscode/skillproof-api",
    linkLabel: "Explore repository",
    icon: Database,
  },
  {
    title: "Bincom OpenProject Deployment",
    type: "Public technical project · Application infrastructure",
    description: "Containerized OpenProject application deployment with PostgreSQL, reverse proxy, health checks and backup/recovery documentation. The application itself is open-source; the documented deployment work is the technical contribution.",
    stack: ["Docker", "OpenProject", "PostgreSQL", "Caddy"],
    href: "https://github.com/poundsmichaelscode/Bincom-OpenProject",
    linkLabel: "Explore repository",
    icon: Layers,
  },
  {
    title: "Docker Webapp Deployment",
    type: "Public technical project · Web app deployment",
    description: "A containerized static web application using Nginx and Docker Compose, with a health endpoint and deployment documentation. Included as deployment experience, not as a fabricated full-stack customer project.",
    stack: ["HTML", "Nginx", "Docker", "Docker Compose"],
    href: "https://github.com/poundsmichaelscode/docker-webapp-deployment",
    linkLabel: "Explore repository",
    icon: Server,
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-background">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-gold text-sm uppercase tracking-widest">Selected work</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
          Web, Backend & <span className="text-gradient-gold">Application Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Selected website demos and public repositories showcasing web interfaces,
          backend APIs and application deployment. A live demo alone does not
          establish that a project is full-stack. Technical stacks and client
          outcomes are only claimed where supported by available evidence.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="glass-card rounded-2xl p-8 flex flex-col">
              <Icon className="w-9 h-9 text-gold mb-5" aria-hidden="true" />
              <p className="text-gold text-xs uppercase tracking-wide mb-3">{project.type}</p>
              <h3 className="font-display text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
              {project.stack.length > 0 && <ul className="flex flex-wrap gap-2 mb-6" aria-label={`Technologies for ${project.title}`}>
                {project.stack.map((tech) => (
                  <li key={tech} className="px-3 py-1 text-xs rounded-full bg-gold/10 text-gold border border-gold/20">
                    {tech}
                  </li>
                ))}
              </ul>}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline mt-auto"
              >
                {project.linkLabel} <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          );
        })}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/poundsmichaelscode"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:underline"
        >
          <Github className="w-5 h-5" aria-hidden="true" />
          More public projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Portfolio;
