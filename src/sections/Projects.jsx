import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiPlay, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import TicTacToe from "../../src/assets/videos/TicTacToe.mp4"
import Flowence from "../../src/assets/videos/Flowence.mp4"
import CvSharp from "../../src/assets/videos/CvSharp.mp4"

const projects = [
{
  title: "Tic-Tac-Toe",
  description: "Classic Tic-Tac-Toe game built for web browsers with a responsive design, interactive gameplay, and real-time score tracking. Users can challenge friends or play against the computer, with a leaderboard to showcase top players.",
  technologies: ["JavaScript", "HTML", "CSS"],
  github: "https://github.com/Abderrahmanlahmidi/Tic-Tac-Toe",
  // live: "https://youquiz-app.com",
  video: TicTacToe
},
{
  title: "Flowence",
  description: "Flowence is a personal finance organizer that helps users track their income, expenses, savings, and financial goals. Built with Node.js, EJS, and TailwindCSS, it provides a responsive and interactive interface, allowing users to manage their finances efficiently and plan for future objectives.",
  technologies: ["Node.js", "HTML", "TailwindCSS", "JavaScript", "EJS"],
  github: "https://github.com/Abderrahmanlahmidi/Flowence",
  // live: "https://youquiz-app.com",
  video: Flowence
},
{
  title: "CvSharp",
  description: "CvSharp is an AI-powered CV analyzer that evaluates your resume using Gemini AI and provides a detailed score along with personalized recommendations for improvement. Built with Python, Django, React.js, and TailwindCSS, it offers a responsive and interactive interface for users to enhance their CVs effectively.",
  technologies: ["Python", "Django", "React.js", "TailwindCSS", "Gemeni Ai"],
  github: "https://github.com/Abderrahmanlahmidi/Hirely",
  // live: "https://youquiz-app.com",
  video: CvSharp
}




];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  // Update projects per page based on screen size
  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
    };

    updateProjectsPerPage();
    window.addEventListener('resize', updateProjectsPerPage);
    
    return () => window.removeEventListener('resize', updateProjectsPerPage);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handleVideoOpen = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Generate visible page numbers for responsive pagination
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <section id="projects" className="py-20 bg-[#0A192F] text-[#E6F1FF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={startIndex + index}
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
                    
                    {/* Video Play Button */}
                    {project.video && (
                      <button
                        onClick={() => handleVideoOpen(project.video)}
                        className="text-[#64FFDA] hover:text-[#64FFDA]/80 cursor-pointer transition-colors"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FiPlay size={20} />
                      </button>
                    )}
                    
                    {/* Live Demo Button 
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"
                        aria-label={`Live ${project.title} demo`}
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}*/}
                  </div>
                </div>

                <p className="text-[#8892B0] mb-6 text-sm sm:text-base">{project.description}</p>

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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded border transition-all text-sm sm:text-base ${
                currentPage === 1
                  ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                  : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
              }`}
            >
              <FiChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              {/* First page and ellipsis */}
              {visiblePages[0] > 1 && (
                <>
                  <button
                    onClick={() => goToPage(1)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                      currentPage === 1
                        ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                        : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                    }`}
                  >
                    1
                  </button>
                  {visiblePages[0] > 2 && (
                    <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#8892B0]">
                      ...
                    </span>
                  )}
                </>
              )}

              {/* Visible page numbers */}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                    currentPage === page
                      ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                      : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Last page and ellipsis */}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                    <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#8892B0]">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => goToPage(totalPages)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                      currentPage === totalPages
                        ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                        : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded border transition-all text-sm sm:text-base ${
                currentPage === totalPages
                  ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                  : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <FiChevronRight size={16} />
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-4"
          >
            <p className="text-[#8892B0] text-sm">
              Page {currentPage} of {totalPages} • Showing {currentProjects.length} of {projects.length} projects
            </p>
          </motion.div>
        )}

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
      </div>
    </section>
  );
}