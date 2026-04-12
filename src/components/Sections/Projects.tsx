// EnhancedProjectsComponent.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import projectVID from "@/assets/vid-project.png";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  learnings: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "ATM Simulator — Automated Teller Machine practice banking operations ",
      description:
        "A console-based ATM simulator developed in Java that replicates basic banking operations such as balance inquiry, cash withdrawal, deposit, and transaction history. The project demonstrates object-oriented programming concepts, user authentication, and menu-driven interaction..",
      fullDescription:
        "The ATM Simulator is a Java-based application that mimics the functionality of a real-world ATM. It allows users to perform essential banking operations such as user authentication, balance inquiry, cash withdrawal, deposit, and transaction tracking through a menu-driven interface.  The project is built using core Java concepts including Object-Oriented Programming (OOP), classes and objects, loops, conditional statements, and exception handling. The system verifies user credentials for secure access and updates account balances dynamically after each transaction.  This project strengthened my understanding of Java fundamentals, problem-solving, and building interactive console-based applications.",
      image: projectVID,
      technologies: [
        "Java (Core Java)",
        "Java Swing (GUI)",
        "Java AWT (GUI Components)",
        "MySQL Database",
        "NetBeans IDE",
        "JDBC (Database Connectivity)",
      
      ],
      category: "all",
      githubUrl: "https://github.com/Govind799",
      liveUrl: "https://www.google.com",
      features: [
        "User authentication (PIN-based login)",
        "Balance inquiry",
        "Cash withdrawal",
        "Deposit functionality",
        "Transaction history",
        "Menu-driven console interface",
        "Input validation and error handling"
      ],
      learnings: [
        "Implementing Object-Oriented Programming concepts in real projects",
        "Designing GUI using Java Swing and AWT",
        "Connecting Java applications with MySQL using JDBC",
        "Handling user authentication and secure transactions",
        "Managing database operations (insert, update, select)"
      ],
    },
  ];

  const categories = [{ id: "all", label: "All Projects" }];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#0f0c29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-100/10 border border-purple-300/20 rounded-full text-purple-400 font-medium text-sm mb-4">
              Systems Engineering
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Project
              </span>
            </h2>

            <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
              A Java-based ATM simulator that performs basic banking operations like balance inquiry, withdrawal, 
              and deposit, demonstrating OOP concepts and user authentication..
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex justify-center mb-12"
          >
            <div className="bg-card rounded-xl p-2 border border-border">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white ${filter === category.id
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex justify-center p-4">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className="project-card group w-full max-w-md rounded-3xl overflow-hidden cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-transform transform hover:-translate-y-3 hover:scale-[1.02] duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="gradient"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="text-white border border-white hover:brightness-110 transition-all"
                      >
                        <FiExternalLink className="mr-2" />
                        Java (Core Java)
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, "_blank");
                        }}
                      >
                        <FiGithub className="mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-card rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-fit rounded-t-3xl"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/70 backdrop-blur-md"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX size={20} />
                </Button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  {selectedProject.title}
                </h3>

                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Engineering Insights
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">
                            {learning}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() =>
                      window.open(selectedProject.liveUrl, "_blank")
                    }
                    className="text-black border border-black hover:brightness-110 transition-all"
                  >
                    <FiExternalLink className="mr-2 text-black" />
                    Java swing
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      window.open(selectedProject.githubUrl, "_blank")
                    }
                  >
                    <FiGithub className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;