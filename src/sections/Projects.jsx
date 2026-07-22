import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Circle,
  Clock,
  Github,
  Image as ImageIcon,
  X,
  Zap,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import clinicflowimage1 from '../assets/images/projects/clinicflow/1.jpg';
import clinicflowimage2 from '../assets/images/projects/clinicflow/2.jpg';
import clinicflowimage3 from '../assets/images/projects/clinicflow/3.jpg';
import clinicflowimage4 from '../assets/images/projects/clinicflow/4.jpg';
import clinicflowimage5 from '../assets/images/projects/clinicflow/5.jpg';
import clinicflowimage6 from '../assets/images/projects/clinicflow/6.png';
import clinicflowimage7 from '../assets/images/projects/clinicflow/7.jpg';
import clinicflowimage8 from '../assets/images/projects/clinicflow/8.jpg';
import clinicflowimage9 from '../assets/images/projects/clinicflow/9.jpg';
import clinicflowimage10 from '../assets/images/projects/clinicflow/10.jpg';
import clinicflowimage11 from '../assets/images/projects/clinicflow/11.jpg';
import clinicflowimage12 from '../assets/images/projects/clinicflow/12.jpg';
import clinicflowimage13 from '../assets/images/projects/clinicflow/13.jpg';
import logiximage1 from '../assets/images/projects/logix/1.png';
import logiximage2 from '../assets/images/projects/logix/2.jpg';
import logiximage3 from '../assets/images/projects/logix/3.png';
import logiximage4 from '../assets/images/projects/logix/4.jpg';
import logiximage5 from '../assets/images/projects/logix/4.png';
import logiximage6 from '../assets/images/projects/logix/5.png';
import logiximage7 from '../assets/images/projects/logix/6.jpg';
import logiximage8 from '../assets/images/projects/logix/6.png';
import logiximage9 from '../assets/images/projects/logix/7.png';
import logiximage10 from '../assets/images/projects/logix/8.png';
import logiximage11 from '../assets/images/projects/logix/9.png';
import logiximage12 from '../assets/images/projects/logix/10.png';
import logiximage13 from '../assets/images/projects/logix/11png.png';
import logiximage14 from '../assets/images/projects/logix/12.png';
import devnest1 from '../assets/images/projects/devnest/1.jpg';
import devnest2 from '../assets/images/projects/devnest/2.jpg';
import devnest3 from '../assets/images/projects/devnest/3.jpg';
import devnest4 from '../assets/images/projects/devnest/4.jpg';
import devnest5 from '../assets/images/projects/devnest/5.jpg';
import devnest6 from '../assets/images/projects/devnest/6.jpg';
import devnest7 from '../assets/images/projects/devnest/7.jpg';

const projects = [
  {
    key: 'clinicflow',
    technologies: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Abderrahmanlahmidi/ClinicFlow',
    live: '#',
    status: 'in-progress',
    images: [
      clinicflowimage1,
      clinicflowimage2,
      clinicflowimage3,
      clinicflowimage4,
      clinicflowimage5,
      clinicflowimage6,
      clinicflowimage7,
      clinicflowimage8,
      clinicflowimage9,
      clinicflowimage10,
      clinicflowimage11,
      clinicflowimage12,
      clinicflowimage13,
    ],
    featured: true,
  },
  {
    key: 'logix',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Abderrahmanlahmidi/Logix',
    live: '#',
    status: 'completed',
    images: [
      logiximage1,
      logiximage2,
      logiximage3,
      logiximage4,
      logiximage5,
      logiximage6,
      logiximage7,
      logiximage8,
      logiximage9,
      logiximage10,
      logiximage11,
      logiximage12,
      logiximage13,
      logiximage14,
    ],
    featured: true,
  },
  {
    key: 'devnest',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'GraphQL'],
    github: 'https://github.com/Abderrahmanlahmidi/DevNest',
    live: '#',
    status: 'completed',
    images: [devnest1, devnest2, devnest3, devnest4, devnest5, devnest6, devnest7],
    featured: true,
  },
];

const statusConfig = {
  completed: { Icon: CheckCircle, labelKey: 'completed' },
  'in-progress': { Icon: Zap, labelKey: 'in_progress' },
  planned: { Icon: Clock, labelKey: 'planned' },
  'on-hold': { Icon: Circle, labelKey: 'on_hold' },
};

const interfaceCopy = {
  en: {
    close: 'Close gallery',
    gallery: 'Open image gallery for',
    image: 'Image',
    images: 'images',
    next: 'Next',
    nextImage: 'Show next image',
    nextPage: 'Show next projects page',
    of: 'of',
    page: 'Page',
    previous: 'Previous',
    previousImage: 'Show previous image',
    previousPage: 'Show previous projects page',
    source: 'View source code for',
    thumbnails: 'Choose a gallery image',
  },
  fr: {
    close: 'Fermer la galerie',
    gallery: "Ouvrir la galerie d'images de",
    image: 'Image',
    images: 'images',
    next: 'Suivant',
    nextImage: "Afficher l'image suivante",
    nextPage: 'Afficher la page suivante des projets',
    of: 'sur',
    page: 'Page',
    previous: 'Précédent',
    previousImage: "Afficher l'image précédente",
    previousPage: 'Afficher la page précédente des projets',
    source: 'Voir le code source de',
    thumbnails: 'Choisir une image de la galerie',
  },
};

const getProjectsPerPage = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function Projects() {
  const { t, i18n } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(getProjectsPerPage);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);
  const copy = interfaceCopy[i18n.language.startsWith('fr') ? 'fr' : 'en'];

  useEffect(() => {
    const updatePagination = () => {
      const nextProjectsPerPage = getProjectsPerPage();
      const nextTotalPages = Math.max(1, Math.ceil(projects.length / nextProjectsPerPage));

      setProjectsPerPage(nextProjectsPerPage);
      setCurrentPage((page) => Math.min(page, nextTotalPages));
    };

    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const returnFocusTarget = returnFocusRef.current;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setSelectedProject(null);
        setCurrentImageIndex(0);
        return;
      }

      if (event.key === 'ArrowLeft' && selectedProject.images.length > 1) {
        event.preventDefault();
        setCurrentImageIndex((index) =>
          index > 0 ? index - 1 : selectedProject.images.length - 1,
        );
        return;
      }

      if (event.key === 'ArrowRight' && selectedProject.images.length > 1) {
        event.preventDefault();
        setCurrentImageIndex((index) =>
          index < selectedProject.images.length - 1 ? index + 1 : 0,
        );
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (!dialogRef.current.contains(activeElement)) {
        event.preventDefault();
        firstElement.focus();
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      returnFocusTarget?.focus();
    };
  }, [selectedProject]);

  const totalPages = Math.max(1, Math.ceil(projects.length / projectsPerPage));
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);
  const selectedProjectTitle = selectedProject
    ? t(`projects.items.${selectedProject.key}.title`)
    : '';

  const handleImageOpen = (project, index, trigger) => {
    returnFocusRef.current = trigger;
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const handleImageClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="motion-section motion-section--ink motion-projects">
      <div className="motion-section-shell motion-projects-inner">
        <SectionHeading
          index="07"
          label={t('projects.badge')}
          title={t('projects.title')}
          description={t('projects.description')}
        />

        <div className="motion-project-grid">
          {currentProjects.map((project, index) => {
            const status = statusConfig[project.status] || statusConfig.completed;
            const StatusIcon = status.Icon;
            const projectTitle = t(`projects.items.${project.key}.title`);

            return (
              <Motion.article
                key={project.key}
                className="motion-project-card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <button
                  type="button"
                  className="motion-project-cover"
                  onClick={(event) => handleImageOpen(project, 0, event.currentTarget)}
                  aria-label={`${copy.gallery} ${projectTitle}`}
                >
                  <span className="motion-project-number" aria-hidden="true">
                    {String(startIndex + index + 1).padStart(2, '0')}
                  </span>
                  <img src={project.images[0]} alt="" loading="lazy" />
                  <span className="motion-project-cover-shade" aria-hidden="true" />
                  <span className="motion-project-gallery-count" aria-hidden="true">
                    <ImageIcon />
                    <span>
                      {String(project.images.length).padStart(2, '0')} {copy.images}
                    </span>
                  </span>
                </button>

                <div className="motion-project-content">
                  <div className="motion-project-meta">
                    <span className={`motion-project-status is-${project.status}`}>
                      <StatusIcon aria-hidden="true" />
                      {t(`projects.status.${status.labelKey}`)}
                    </span>
                    <span aria-hidden="true">{String(startIndex + index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="motion-project-title-row">
                    <h3>{projectTitle}</h3>
                    <a
                      className="motion-project-source"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${copy.source} ${projectTitle}`}
                    >
                      <Github aria-hidden="true" />
                    </a>
                  </div>

                  <p className="motion-project-description">
                    {t(`projects.items.${project.key}.desc`)}
                  </p>

                  <ul className="motion-project-technologies" aria-label="Technologies">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </Motion.article>
            );
          })}
        </div>

        {totalPages > 1 && (
          <nav className="motion-project-pagination" aria-label={t('projects.title')}>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label={copy.previousPage}
            >
              <ChevronLeft aria-hidden="true" />
              <span>{copy.previous}</span>
            </button>

            <span className="motion-project-page-count" aria-live="polite" aria-atomic="true">
              {copy.page} <strong>{String(currentPage).padStart(2, '0')}</strong>
              <span aria-hidden="true"> / </span>
              {String(totalPages).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              aria-label={copy.nextPage}
            >
              <span>{copy.next}</span>
              <ChevronRight aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            className="motion-gallery-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            onClick={handleImageClose}
          >
            <Motion.div
              ref={dialogRef}
              className="motion-gallery-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-gallery-title"
              aria-describedby="project-gallery-description"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <header className="motion-gallery-header">
                <div>
                  <span>{t('projects.badge')}</span>
                  <h2 id="project-gallery-title">{selectedProjectTitle}</h2>
                  <p id="project-gallery-description">
                    {copy.image} {currentImageIndex + 1} {copy.of} {selectedProject.images.length}
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="motion-gallery-close"
                  onClick={handleImageClose}
                  aria-label={`${copy.close}: ${selectedProjectTitle}`}
                >
                  <X aria-hidden="true" />
                </button>
              </header>

              <div className="motion-gallery-stage">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProjectTitle} — ${copy.image} ${currentImageIndex + 1} ${copy.of} ${selectedProject.images.length}`}
                  draggable="false"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="motion-gallery-previous"
                      onClick={() =>
                        setCurrentImageIndex((index) =>
                          index > 0 ? index - 1 : selectedProject.images.length - 1,
                        )
                      }
                      aria-label={copy.previousImage}
                    >
                      <ChevronLeft aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="motion-gallery-next"
                      onClick={() =>
                        setCurrentImageIndex((index) =>
                          index < selectedProject.images.length - 1 ? index + 1 : 0,
                        )
                      }
                      aria-label={copy.nextImage}
                    >
                      <ChevronRight aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>

              {selectedProject.images.length > 1 && (
                <div
                  className="motion-gallery-thumbnails"
                  role="group"
                  aria-label={copy.thumbnails}
                >
                  {selectedProject.images.map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      className={imageIndex === currentImageIndex ? 'is-active' : undefined}
                      onClick={() => setCurrentImageIndex(imageIndex)}
                      aria-label={`${copy.image} ${imageIndex + 1}`}
                      aria-pressed={imageIndex === currentImageIndex}
                    >
                      <img
                        src={image}
                        alt=""
                        loading="lazy"
                        draggable="false"
                      />
                    </button>
                  ))}
                </div>
              )}
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
