import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Image as ImageIcon, X, ChevronLeft, ChevronRight, CheckCircle, Zap, Clock, Circle } from 'lucide-react';
import clinicflowimage1 from "../../src/assets/images/projects/clinicflow/1.jpg";
import clinicflowimage2 from "../../src/assets/images/projects/clinicflow/2.jpg";
import clinicflowimage3 from "../../src/assets/images/projects/clinicflow/3.jpg";
import clinicflowimage4 from "../../src/assets/images/projects/clinicflow/4.jpg";
import clinicflowimage5 from "../../src/assets/images/projects/clinicflow/5.jpg";
import clinicflowimage6 from "../../src/assets/images/projects/clinicflow/6.png";
import clinicflowimage7 from "../../src/assets/images/projects/clinicflow/7.jpg";
import clinicflowimage8 from "../../src/assets/images/projects/clinicflow/8.jpg";
import clinicflowimage9 from "../../src/assets/images/projects/clinicflow/9.jpg";
import clinicflowimage10 from "../../src/assets/images/projects/clinicflow/10.jpg";
import clinicflowimage11 from "../../src/assets/images/projects/clinicflow/11.jpg";
import clinicflowimage12 from "../../src/assets/images/projects/clinicflow/12.jpg";
import clinicflowimage13 from "../../src/assets/images/projects/clinicflow/13.jpg";

import logiximage1 from "../../src/assets/images/projects/logix/1.png";
import logiximage2 from "../../src/assets/images/projects/logix/2.jpg";
import logiximage3 from "../../src/assets/images/projects/logix/3.png";
import logiximage4 from "../../src/assets/images/projects/logix/4.jpg";
import logiximage5 from "../../src/assets/images/projects/logix/4.png";
import logiximage6 from "../../src/assets/images/projects/logix/5.png";
import logiximage7 from "../../src/assets/images/projects/logix/6.jpg";
import logiximage8 from "../../src/assets/images/projects/logix/6.png";
import logiximage9 from "../../src/assets/images/projects/logix/7.png";
import logiximage10 from "../../src/assets/images/projects/logix/8.png";
import logiximage11 from "../../src/assets/images/projects/logix/9.png";
import logiximage12 from "../../src/assets/images/projects/logix/10.png";
import logiximage13 from "../../src/assets/images/projects/logix/11png.png";
import logiximage14 from "../../src/assets/images/projects/logix/12.png";

import devnest1 from "../../src/assets/images/projects/devnest/1.jpg";
import devnest2 from "../../src/assets/images/projects/devnest/2.jpg";
import devnest3 from "../../src/assets/images/projects/devnest/3.jpg";
import devnest4 from "../../src/assets/images/projects/devnest/4.jpg";
import devnest5 from "../../src/assets/images/projects/devnest/5.jpg";
import devnest6 from "../../src/assets/images/projects/devnest/6.jpg";
import devnest7 from "../../src/assets/images/projects/devnest/7.jpg";

const projects = [
  { "key": "clinicflow", "technologies": ["React", "Express", "MongoDB", "Tailwind CSS"], "github": "https://github.com/Abderrahmanlahmidi/ClinicFlow", "live": "#", "status": "in-progress", "images": [clinicflowimage1, clinicflowimage2, clinicflowimage3, clinicflowimage4, clinicflowimage5, clinicflowimage6, clinicflowimage7, clinicflowimage8, clinicflowimage9, clinicflowimage10, clinicflowimage11, clinicflowimage12, clinicflowimage13], "featured": true },
  { "key": "logix", "technologies": ["React", "Node.js", "MongoDB", "Tailwind CSS"], "github": "https://github.com/Abderrahmanlahmidi/Logix", "live": "#", "status": "completed", "images": [logiximage1, logiximage2, logiximage3, logiximage4, logiximage5, logiximage6, logiximage7, logiximage8, logiximage9, logiximage10, logiximage11, logiximage12, logiximage13, logiximage14], "featured": true },
  { "key": "devnest", "technologies": ["React", "Framer Motion", "Tailwind CSS", "Vite", "GraphQL"], "github": "https://github.com/Abderrahmanlahmidi/DevNest", "live": "#", "status": "completed", "images": [devnest1, devnest2, devnest3, devnest4, devnest5, devnest6, devnest7], "featured": true }
];

const statusConfig = {
  "completed": { icon: <CheckCircle size={14} />, labelKey: "completed", color: "text-emerald-500" },
  "in-progress": { icon: <Zap size={14} />, labelKey: "in_progress", color: "text-amber-500" },
  "planned": { icon: <Clock size={14} />, labelKey: "planned", color: "text-blue-500" },
  "on-hold": { icon: <Circle size={14} />, labelKey: "on_hold", color: "text-gray-500" }
};

export default function Projects() {
  const { t } = useTranslation();
  const [selectedImages, setSelectedImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setProjectsPerPage(1);
      else if (window.innerWidth < 1024) setProjectsPerPage(2);
      else setProjectsPerPage(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const handleImageOpen = (images, index = 0) => { setSelectedImages(images); setCurrentImageIndex(index); };
  const handleImageClose = () => { setSelectedImages(null); setCurrentImageIndex(0); };

  return (
    <section id="projects" className="min-h-screen py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="badge mx-auto mb-4 flex w-fit">{t('projects.badge')}</div>
          <h2 className="section-title">
            {t('projects.title')}
          </h2>
          <p className="section-subtitle">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => {
            const status = statusConfig[project.status] || statusConfig.completed;
            return (
              <motion.div
                key={startIndex + index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="next-card group flex flex-col h-full bg-[var(--card)] hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={`${t(`projects.items.${project.key}.title`)}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onClick={() => handleImageOpen(project.images, 0)}
                  />

                  {project.images.length > 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleImageOpen(project.images); }}
                      className="absolute bottom-4 right-4 p-2 rounded-lg bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                    >
                      <ImageIcon size={16} />
                    </button>
                  )}
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--border)]/30 text-[8px] font-black uppercase tracking-widest mb-2 ${status.color}`}>
                        {status.icon}
                        <span>{t(`projects.status.${status.labelKey}`)}</span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight">
                        {t(`projects.items.${project.key}.title`)}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg border border-[var(--border)] hover:border-[var(--foreground)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                    {t(`projects.items.${project.key}.desc`)}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[8px] uppercase font-black px-2 py-0.5 rounded-sm bg-[var(--border)]/30 text-[var(--muted-foreground)] tracking-tighter border border-[var(--border)]/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 border-t border-[var(--border)] pt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronLeft size={16} />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Prev</span>
            </button>

            <div className="text-sm font-black text-[var(--muted-foreground)] uppercase tracking-widest">
              Page <span className="text-[var(--foreground)]">{currentPage}</span> / {totalPages}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-4 md:p-12"
              onClick={handleImageClose}
            >
              <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <button
                  onClick={handleImageClose}
                  className="absolute -top-10 md:top-4 md:-right-16 text-white/50 hover:text-white transition-colors z-50 p-2"
                  aria-label="Close modal"
                >
                  <X size={32} />
                </button>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    src={selectedImages[currentImageIndex]}
                    alt="Project view"
                    className="max-w-full max-h-full object-contain select-none"
                    draggable="false"
                  />

                  {selectedImages.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : selectedImages.length - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev < selectedImages.length - 1 ? prev + 1 : 0)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {selectedImages.length > 1 && (
                  <div className="flex gap-2.5 mt-8 overflow-x-auto max-w-full px-6 py-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent bg-white/5 rounded-2xl border border-white/10">
                    {selectedImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all border-2 ${i === currentImageIndex ? "border-[var(--primary)] scale-105 shadow-lg shadow-primary/20" : "border-transparent opacity-40 hover:opacity-100"
                          }`}
                      >
                        <img src={img} className="w-full h-full object-cover" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
