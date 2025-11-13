import { ExternalLink, Code, Eye, Github, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useState } from "react";

import userInteractionImg from '../images/user.png';
import sweetSliceImg from '../images/cake2.jpg';
import loungeCafeImg from '../images/lounge.png';

const projects = [
  {
    title: "User Interaction Analysis to Recommend Suitable Jobs",
    tag: "college project",
    description:
      "An intelligent job recommender system that analyzes user interaction data (search history, job views, and application patterns) to recommend suitable roles using advanced similarity algorithms.",
    technologies: ["Java", "JSP", "Servlet", "JavaScript", "MySQL", "SQL Yog", "Apache Tomcat"],
    highlights: [
      "Applied similarity computation algorithm for user-user and item-item comparisons.",
      "Improved job matching efficiency with weighted factors from training datasets.",
      "Optimized database operations for efficient storage and retrieval.",
      "Enhanced recommendation accuracy through multi-factor analysis."
    ],
    image: userInteractionImg,
    demoUrl: "#",
    githubUrl: "#",
    liveDemoUrl: "",
    gradient: "from-blue-600 to-cyan-600",
    featured: true
  },
  {
    title: "E-Commerce Web Application – Buy Hive",
    tag: "full stack Django project",
    description:
      "A comprehensive e-commerce platform featuring product management, real-time cart updates, secure checkout, and an advanced admin panel for inventory and order management.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "Bootstrap"],
    highlights: [
      "Developed complete admin panel for product and order management.",
      "Implemented real-time cart updates with automated stock reduction.",
      "Designed responsive UI/UX with seamless cross-device experience.",
      "Applied MVC architecture with Django ORM for scalability."
    ],
    image: "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?w=800&h=600&fit=crop",
    demoUrl: "https://youtu.be/3RaHH0b9UlM",
    githubUrl: "https://github.com/soorajsudheeshofficial-sudo/DjangoEcommece.git",
    liveDemoUrl: "https://buyhive-demo.vercel.app",
    gradient: "from-purple-600 to-pink-600",
    featured: true
  },
  {
    title: "Lounge Cafe",
    tag: "mini_project",
    description:
      "A visually rich frontend webpage for a café, showcasing hospitality and comfort through sections like homepage introduction, menu, gallery, testimonials, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Warm welcome landing with café branding and menu highlights.",
      "Interactive menu with item descriptions and clear pricing.",
      "Gallery section of high-quality images to showcase products.",
      "Testimonials to add credibility and customer trust.",
      "Footer with contact, open hours, subscription, and social links.",
      "Responsive, modern, and user-friendly hospitality industry design."
    ],
    image: loungeCafeImg,
    demoUrl: "https://youtu.be/w5-ZC2tp7PI",
    githubUrl: "https://github.com/soorajsudheeshofficial-sudo/mini_project.git",
    liveDemoUrl: "https://soorajsudheeshofficial-sudo.github.io/mini_project/",
    gradient: "from-orange-400 to-yellow-300",
    featured: true
  },
  {
    title: "Sweet Slice Review System",
    tag: "Django mini_project",
    description:
      "A Django-based customer review system for an e-commerce (cake) website, displaying customer feedback, star ratings, and review details in an admin-manageable interface for trust and engagement.",
    technologies: ["Python", "Django", "Django Template Language", "HTML", "CSS", "Unicode"],
    highlights: [
      "Stores customer reviews as Django model instances with name, rating, text, and date.",
      "Django views fetch review data and pass to templates for dynamic rendering.",
      "Frontend uses DTL with Unicode stars (★ ☆) for accurate ratings display.",
      "Visually styled review cards with customizable design.",
      "Admin dashboard for adding and managing reviews.",
      "Fully integrated stack for an attractive, functional review section."
    ],
    image: sweetSliceImg,
    demoUrl: "https://youtu.be/OSt_aQXxsT4",
    githubUrl: "https://github.com/soorajsudheeshofficial-sudo/mini_project_django.git",
    liveDemoUrl: "https://sweetslice-django-demo.vercel.app",
    gradient: "from-pink-600 to-orange-400",
    featured: true
  }
];

const badgeStyles = {
  "full stack Django project": "bg-gradient-to-r from-pink-600 to-purple-600 text-white",
  "college project": "bg-gradient-to-r from-blue-600 to-cyan-600 text-white",
  "mini_project": "bg-gradient-to-r from-blue-600 to-cyan-600 text-white",
  "Django mini_project": "bg-gradient-to-r from-pink-600 to-purple-600 text-white",
};

const demoButtonStyles = {
  "mini_project": "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-none hover:from-blue-700 hover:to-cyan-400 hover:scale-105 hover:shadow-lg transition-all",
  "full stack Django project": "bg-gradient-to-r from-pink-600 to-purple-600 text-white border-none hover:from-pink-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all",
  "college project": "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-none hover:from-blue-700 hover:to-cyan-400 hover:scale-105 hover:shadow-lg transition-all",
  "Django mini_project": "bg-gradient-to-r from-pink-600 to-purple-600 text-white border-none hover:from-pink-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg transition-all"
};

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <span className="text-cyan-400">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Latest Work
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Explore my latest projects showcasing full-stack development skills and innovative solutions
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="relative aspect-video bg-slate-900/50 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        {project.title !== "User Interaction Analysis to Recommend Suitable Jobs" && (
                          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-slate-950/50 backdrop-blur-sm">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Button
                                size="lg"
                                className={demoButtonStyles[project.tag] || "bg-slate-900 text-white border-none hover:bg-slate-700 hover:scale-105 hover:shadow-lg transition-all"}
                                asChild
                              >
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                  <Eye className="mr-2 h-4 w-4" />
                                  Video Demo
                                </a>
                              </Button>
                            </motion.div>
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <Button
                                className="bg-slate-900 text-white border-none hover:bg-slate-700 transition-colors"
                                asChild
                              >
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" />
                                  Source Code
                                </a>
                              </Button>
                            </motion.div>
                            {project.liveDemoUrl && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                <Button
                                  className="bg-green-500 text-white border-none hover:bg-green-700 transition-colors"
                                  asChild
                                >
                                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Demo
                                  </a>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                          <Zap className="h-4 w-4 text-slate-900" />
                          <span className="text-sm text-slate-900">Featured</span>
                        </div>
                      )}
                    </div>
                    <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                  </div>

                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border border-white/20 ${badgeStyles[project.tag] || ''}`}>
                      <Code className="h-4 w-4" />
                      <span className="text-sm">{project.tag}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-slate-800/50 border border-white/10 hover:border-white/30 transition-colors px-3 py-1 text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-400 mb-3">Key Features</h4>
                      <ul
                        style={{
                          listStyle: "disc",
                          paddingLeft: "1.5rem",
                          color: "#fff",
                          marginBottom: "1rem"
                        }}
                      >
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            style={{
                              color: "#fff",
                              fontWeight: 400,
                              fontSize: "1rem",
                              lineHeight: 1.7
                            }}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.title !== "User Interaction Analysis to Recommend Suitable Jobs" && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        <Button
                          size="lg"
                          className={demoButtonStyles[project.tag] || "bg-slate-900 text-white border-none hover:bg-slate-700 hover:scale-105 hover:shadow-lg transition-all"}
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="mr-2 h-4 w-4" />
                            Video Demo
                          </a>
                        </Button>
                        <Button
                          className="bg-slate-900 text-white border-none hover:bg-slate-700 transition-colors"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                        {project.liveDemoUrl && (
                          <Button
                            className="bg-green-500 text-white border-none hover:bg-green-700 transition-colors"
                            asChild
                          >
                            <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
