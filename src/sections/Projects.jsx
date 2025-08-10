import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiPlay, FiX } from 'react-icons/fi';
import Video from "../../src/assets/videos/video.mp4"

const projects = [
  {
    title: "YOUQUIZ",
    description: "Interactive quiz application with real-time scoring and leaderboard functionality.",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Abderrahmanlahmidi/F_AQ",
    live: "https://youquiz-app.com",
    video: Video  
  },
  {
    title: "RentEase",
    description: "Property rental management system with tenant tracking and payment processing.",
    technologies: ["React", "Laravel", "MySQL"],
    github: "https://github.com/Abderrahmanlahmidi/RentEase",
    live: "https://renteasy-demo.com",
    video: Video  
  },
  {
    title: "Ultimate Team",
    description: "Sports team management platform with player statistics and match scheduling.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Abderrahmanlahmidi/Ultimate_Team",
    live: "https://ultimate-team-app.com",
    video: Video  
  }
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoOpen = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    setTimeout(() => setSelectedVideo(null), 300); // Wait for animation to complete
  };

  return (
    <section id="projects" className="py-20 bg-[#0A192F] text-[#E6F1FF] relative">
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
            Here are some of my notable projects that showcase my skills and problem-solving approach.
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
              className="group relative bg-[#112240]/50 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all overflow-hidden shadow-lg"
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
                      <FiGithub size={20} />
                    </a>
                    {/*{project.video && (*/}
                    {/*  <button*/}
                    {/*    onClick={() => handleVideoOpen(project.video)}*/}
                    {/*    className="text-[#64FFDA] hover:text-[#64FFDA]/80 cursor-pointer transition-colors"*/}
                    {/*    aria-label={`View ${project.title} demo`}*/}
                    {/*  >*/}
                    {/*    <FiPlay size={20} />*/}
                    {/*  </button>*/}
                    {/*)}*/}
                    {/*{project.live && (*/}
                    {/*  <a*/}
                    {/*    href={project.live}*/}
                    {/*    target="_blank"*/}
                    {/*    rel="noopener noreferrer"*/}
                    {/*    className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"*/}
                    {/*    aria-label={`Live ${project.title} demo`}*/}
                    {/*  >*/}
                    {/*    <FiExternalLink size={20} />*/}
                    {/*  </a>*/}
                    {/*)}*/}
                  </div>
                </div>

                <p className="text-[#8892B0] mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
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

        {/* Video Demo Overlay */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoPlaying ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0A192F]/95 z-50 flex items-center justify-center p-4"
              onClick={handleVideoClose}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: isVideoPlaying ? 1 : 0.9,
                  opacity: isVideoPlaying ? 1 : 0
                }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleVideoClose}
                  className="absolute -top-12 right-0 text-[#64FFDA] hover:text-white transition-colors p-2"
                  aria-label="Close video"
                >
                  <FiX size={24} />
                </button>
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
                  <video 
                    src={selectedVideo} 
                    controls 
                    autoPlay
                    className="w-full h-full object-contain"
                    onEnded={handleVideoClose}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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