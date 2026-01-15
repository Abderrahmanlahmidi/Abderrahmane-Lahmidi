import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Server,
  Database,
  Box,
  Palette,
  TestTube2,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiAmazoncloudwatch,
  SiFigma,
  SiJest,
  SiMocha,
  SiChai
} from "react-icons/si";

const skillsData = [
  {
    name: "React",
    category: "Frontend",
    descriptionKey: "react",
    icon: <SiReact className="text-xl" />,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    descriptionKey: "typescript",
    icon: <SiTypescript className="text-xl" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    descriptionKey: "nextjs",
    icon: <SiNextdotjs className="text-xl" />,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    descriptionKey: "tailwindcss",
    icon: <SiTailwindcss className="text-xl" />,
  },
  {
    name: "Node.js",
    category: "Backend",
    descriptionKey: "nodejs",
    icon: <SiNodedotjs className="text-xl" />,
  },
  {
    name: "Express",
    category: "Backend",
    descriptionKey: "express",
    icon: <SiExpress className="text-xl" />,
  },
  {
    name: "Python",
    category: "Backend",
    descriptionKey: "python",
    icon: <SiPython className="text-xl" />,
  },
  {
    name: "MongoDB",
    category: "Database",
    descriptionKey: "mongodb",
    icon: <SiMongodb className="text-xl" />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    descriptionKey: "postgresql",
    icon: <SiPostgresql className="text-xl" />,
  },
  {
    name: "Firebase",
    category: "Database",
    descriptionKey: "firebase",
    icon: <SiFirebase className="text-xl" />,
  },
  {
    name: "Git",
    category: "Tools",
    descriptionKey: "git",
    icon: <SiGit className="text-xl" />,
  },
  {
    name: "Docker",
    category: "Tools",
    descriptionKey: "docker",
    icon: <SiDocker className="text-xl" />,
  },
  {
    name: "AWS",
    category: "Tools",
    descriptionKey: "aws",
    icon: <SiAmazoncloudwatch className="text-xl" />,
  },
  {
    name: "Figma",
    category: "Design",
    descriptionKey: "figma",
    icon: <SiFigma className="text-xl" />,
  },
  {
    name: "Jest",
    category: "Testing",
    descriptionKey: "jest",
    icon: <SiJest className="text-xl" />,
  },
  {
    name: "Mocha",
    category: "Testing",
    descriptionKey: "mocha",
    icon: <SiMocha className="text-xl" />,
  },
  {
    name: "Chai",
    category: "Testing",
    descriptionKey: "chai",
    icon: <SiChai className="text-xl" />,
  },
  {
    name: "Supertest",
    category: "Testing",
    descriptionKey: "supertest",
    icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>,
  },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Frontend": return <Code2 size={14} />;
    case "Backend": return <Server size={14} />;
    case "Database": return <Database size={14} />;
    case "Tools": return <Box size={14} />;
    case "Design": return <Palette size={14} />;
    case "Testing": return <TestTube2 size={14} />;
    default: return <Code2 size={14} />;
  }
};

export default function Skills() {
  const { t } = useTranslation();
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  const categories = ["All", ...new Set(skillsData.map((skill) => skill.category))];
  const filteredSkills = currentCategory === "All" ? skillsData : skillsData.filter((skill) => skill.category === currentCategory);
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + skillsPerPage);

  const nextPage = () => { if (currentPage < totalPages) setCurrentPage((prev) => prev + 1); };
  const prevPage = () => { if (currentPage > 1) setCurrentPage((prev) => prev - 1); };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="badge mx-auto mb-4 flex w-fit">{t('skills.badge')}</div>
          <h2 className="section-title">
            {t('skills.title')}
          </h2>
          <p className="section-subtitle">
            {t('skills.description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 text-sm font-bold rounded-full border transition-all duration-300 flex items-center gap-2.5 shadow-sm ${currentCategory === category
                ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] scale-105"
                : "bg-[var(--card)] text-[var(--muted-foreground)] border-[var(--border)] hover:border-[var(--foreground)] hover:text-[var(--foreground)] hover:scale-105"
                }`}
            >
              {category !== "All" && <span className="opacity-70">{getCategoryIcon(category)}</span>}
              <span className="tracking-tight">{category === "All" ? t('skills.categories.all') : t(`skills.categories.${category.toLowerCase()}`)}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory}-${currentPage}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="next-card p-8 flex flex-col group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="p-4 rounded-2xl bg-[var(--border)]/30 text-[var(--foreground)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110 shadow-sm">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--primary)] transition-colors">
                      {skill.name}
                    </h3>
                    <div className="text-[10px] uppercase font-black tracking-[0.2em] text-[var(--muted-foreground)] mt-1">
                      {t(`skills.categories.${skill.category.toLowerCase()}`)}
                    </div>
                  </div>
                </div>

                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed relative z-10 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {t(`skills.items.${skill.descriptionKey}`)}
                </p>

                <div className="mt-8 flex items-center gap-2 absolute bottom-4 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-[1px] bg-[var(--primary)]" />
                  <span className="text-[10px] font-black uppercase text-[var(--primary)] tracking-widest">{t('skills.expert')}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 border-t border-[var(--border)] pt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-md border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-md border text-sm font-medium transition-all ${currentPage === page
                    ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                    : "border-[var(--border)] hover:border-[var(--foreground)]"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
