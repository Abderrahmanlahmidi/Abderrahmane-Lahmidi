import { AnimatePresence, motion as Motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Palette,
  Server,
  TestTube2,
} from 'lucide-react';
import {
  SiAmazoncloudwatch,
  SiChai,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiJest,
  SiMocha,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import SectionHeading from '../components/SectionHeading';

const skillsData = [
  { name: 'React', category: 'Frontend', descriptionKey: 'react', icon: <SiReact /> },
  { name: 'TypeScript', category: 'Frontend', descriptionKey: 'typescript', icon: <SiTypescript /> },
  { name: 'Next.js', category: 'Frontend', descriptionKey: 'nextjs', icon: <SiNextdotjs /> },
  { name: 'Tailwind CSS', category: 'Frontend', descriptionKey: 'tailwindcss', icon: <SiTailwindcss /> },
  { name: 'Node.js', category: 'Backend', descriptionKey: 'nodejs', icon: <SiNodedotjs /> },
  { name: 'Express', category: 'Backend', descriptionKey: 'express', icon: <SiExpress /> },
  { name: 'Python', category: 'Backend', descriptionKey: 'python', icon: <SiPython /> },
  { name: 'MongoDB', category: 'Database', descriptionKey: 'mongodb', icon: <SiMongodb /> },
  { name: 'PostgreSQL', category: 'Database', descriptionKey: 'postgresql', icon: <SiPostgresql /> },
  { name: 'Firebase', category: 'Database', descriptionKey: 'firebase', icon: <SiFirebase /> },
  { name: 'Git', category: 'Tools', descriptionKey: 'git', icon: <SiGit /> },
  { name: 'Docker', category: 'Tools', descriptionKey: 'docker', icon: <SiDocker /> },
  { name: 'AWS', category: 'Tools', descriptionKey: 'aws', icon: <SiAmazoncloudwatch /> },
  { name: 'Figma', category: 'Design', descriptionKey: 'figma', icon: <SiFigma /> },
  { name: 'Jest', category: 'Testing', descriptionKey: 'jest', icon: <SiJest /> },
  { name: 'Mocha', category: 'Testing', descriptionKey: 'mocha', icon: <SiMocha /> },
  { name: 'Chai', category: 'Testing', descriptionKey: 'chai', icon: <SiChai /> },
  {
    name: 'Supertest',
    category: 'Testing',
    descriptionKey: 'supertest',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
];

const categoryIcons = {
  Frontend: <Code2 />,
  Backend: <Server />,
  Database: <Database />,
  Tools: <Box />,
  Design: <Palette />,
  Testing: <TestTube2 />,
};

export default function Skills() {
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  const categories = ['All', ...new Set(skillsData.map((skill) => skill.category))];
  const filteredSkills = currentCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === currentCategory);
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + skillsPerPage);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="skills" className="motion-section motion-section--ink motion-skills">
      <div className="motion-section-shell">
        <SectionHeading
          index="02"
          label={t('skills.badge')}
          title={t('skills.title')}
          description={t('skills.description')}
        />

        <div className="motion-filter-rail" role="group" aria-label="Skill categories">
          {categories.map((category) => {
            const count = category === 'All'
              ? skillsData.length
              : skillsData.filter((skill) => skill.category === category).length;
            const translatedCategory = category === 'All'
              ? t('skills.categories.all')
              : t(`skills.categories.${category.toLowerCase()}`);

            return (
              <button
                type="button"
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={currentCategory === category ? 'is-active' : undefined}
                aria-pressed={currentCategory === category}
              >
                <span className="motion-filter-icon" aria-hidden="true">
                  {category === 'All' ? <Code2 /> : categoryIcons[category]}
                </span>
                <strong>{translatedCategory}</strong>
                <span>{String(count).padStart(2, '0')}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <Motion.div
            key={`${currentCategory}-${currentPage}`}
            className="motion-skills-atlas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentSkills.map((skill, index) => (
              <Motion.article
                key={skill.name}
                className="motion-skill-card"
                data-category={skill.category.toLowerCase()}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.045, duration: 0.4 }}
              >
                <div className="motion-skill-card-meta">
                  <span>{String(startIndex + index + 1).padStart(2, '0')}</span>
                  <span>{t(`skills.categories.${skill.category.toLowerCase()}`)}</span>
                </div>
                <div className="motion-skill-card-stage" aria-hidden="true">
                  <span>{skill.icon}</span>
                  <i />
                  <i />
                </div>
                <div className="motion-skill-card-copy">
                  <h3>{skill.name}</h3>
                  <p>{t(`skills.items.${skill.descriptionKey}`)}</p>
                </div>
                <div className="motion-skill-card-footer">
                  <span>{t('skills.expert')}</span>
                  <span>↗</span>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        </AnimatePresence>

        {totalPages > 1 && (
          <nav className="motion-pagination" aria-label="Skills pages">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label="Previous skills page"
            >
              <ChevronLeft />
            </button>
            <div>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? 'is-active' : undefined}
                  aria-current={currentPage === page ? 'page' : undefined}
                  aria-label={`Skills page ${page}`}
                >
                  {String(page).padStart(2, '0')}
                </button>
              ))}
            </div>
            <span>{String(startIndex + 1).padStart(2, '0')}—{String(Math.min(startIndex + skillsPerPage, filteredSkills.length)).padStart(2, '0')} / {String(filteredSkills.length).padStart(2, '0')}</span>
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next skills page"
            >
              <ChevronRight />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
