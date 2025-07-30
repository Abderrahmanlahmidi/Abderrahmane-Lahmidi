import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "YOUQUIZ",
    description: "Interactive quiz application with real-time scoring and leaderboard functionality.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Abderrahmanlahmidi/F_AQ",
    live: "https://youquiz-app.com"
  },
  {
    title: "RentEase",
    description: "Property rental management system with tenant tracking and payment processing.",
    technologies: ["React", "Laravel", "MySQL"],
    github: "https://github.com/Abderrahmanlahmidi/RentEase",
    live: "https://renteasy-demo.com"
  },
  {
    title: "Ultimate Team",
    description: "Sports team management platform with player statistics and match scheduling.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Abderrahmanlahmidi/Ultimate_Team",
    live: "https://ultimate-team-app.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0A192F] text-[#E6F1FF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-[#64FFDA] mr-4">06.</span>
            Projects
            <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6 max-w-xs"></span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl">
            Here are some of my  notable projects that showcase my skills and  problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#112240]/50 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#E6F1FF]">{project.title}</h3>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FiGithub />
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"
                        aria-label={`Live ${project.title} demo`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#8892B0] mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA]/10 to-[#64FFDA]/5 rounded-lg blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Abderrahmanlahmidi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded hover:bg-[#64FFDA]/10 transition-colors"
          >
            View All Projects
            <FiExternalLink className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}