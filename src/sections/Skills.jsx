import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
    level: "Expert",
    category: "Frontend",
    description: "Building dynamic and responsive user interfaces with modern React patterns and hooks",
    icon: <SiReact className="text-xl text-[#61DAFB]" />,
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Frontend",
    description: "Developing type-safe applications with enhanced code quality and better developer experience",
    icon: <SiTypescript className="text-xl text-[#3178C6]" />,
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    description: "Creating server-rendered React applications with optimal performance and SEO",
    icon: <SiNextdotjs className="text-xl text-white" />,
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    category: "Frontend",
    description: "Building modern, responsive layouts with utility-first CSS framework",
    icon: <SiTailwindcss className="text-xl text-[#06B6D4]" />,
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    description: "Developing scalable server-side applications and RESTful APIs",
    icon: <SiNodedotjs className="text-xl text-[#339933]" />,
  },
  {
    name: "Express",
    level: "Advanced",
    category: "Backend",
    description: "Building robust web applications and APIs with minimal and flexible Node.js framework",
    icon: <SiExpress className="text-xl text-white" />,
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "Backend",
    description: "Writing efficient backend services and automation scripts",
    icon: <SiPython className="text-xl text-[#3776AB]" />,
  },
  {
    name: "MongoDB",
    level: "Advanced",
    category: "Database",
    description: "Designing and managing NoSQL databases with flexible document models",
    icon: <SiMongodb className="text-xl text-[#47A248]" />,
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
    description: "Working with relational databases and complex SQL queries",
    icon: <SiPostgresql className="text-xl text-[#336791]" />,
  },
  {
    name: "Firebase",
    level: "Intermediate",
    category: "Database",
    description: "Implementing real-time databases and authentication services",
    icon: <SiFirebase className="text-xl text-[#FFCA28]" />,
  },
  {
    name: "Git",
    level: "Expert",
    category: "Tools",
    description: "Version control and collaborative development workflows",
    icon: <SiGit className="text-xl text-[#F05032]" />,
  },
  {
    name: "Docker",
    level: "Intermediate",
    category: "Tools",
    description: "Containerizing applications for consistent development and deployment",
    icon: <SiDocker className="text-xl text-[#2496ED]" />,
  },
  {
    name: "AWS",
    level: "Beginner",
    category: "Tools",
    description: "Deploying and managing cloud infrastructure and services",
    icon: <SiAmazoncloudwatch className="text-xl text-[#FF9900]" />,
  },
  {
    name: "Figma",
    level: "Advanced",
    category: "Design",
    description: "Creating and collaborating on UI/UX designs and prototypes",
    icon: <SiFigma className="text-xl text-[#F24E1E]" />,
  },
  {
    name: "Jest",
    level: "Intermediate",
    category: "Testing",
    description: "Writing comprehensive unit and integration tests",
    icon: <SiJest className="text-xl text-[#C21325]" />,
  },
  {
    name: "Mocha",
    level: "Advanced",
    category: "Testing",
    description: "Feature-rich JavaScript test framework running on Node.js and in the browser",
    icon: <SiMocha className="text-xl text-[#8D6748]" />,
  },
  {
    name: "Chai",
    level: "Advanced",
    category: "Testing",
    description: "BDD/TDD assertion library for Node.js and browser that pairs well with any testing framework",
    icon: <SiChai className="text-xl text-[#A30701]" />,
  },
  {
    name: "Supertest",
    level: "Intermediate",
    category: "Testing",
    description: "HTTP assertion library for testing Node.js HTTP servers with a fluent API",
    icon: <svg className="w-5 h-5 text-[#2E8B57]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>,
  },
];

export default function Skills() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  // Get unique categories
  const categories = [
    "All",
    ...new Set(skillsData.map((skill) => skill.category)),
  ];

  // Filter skills by category
  const filteredSkills =
    currentCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === currentCategory);

  // Pagination
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(
    startIndex,
    startIndex + skillsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const getSkillLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Beginner":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-[#233554] text-[#8892B0] border-[#233554]";
    }
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Frontend":
        return <Code2 size={16} />;
      case "Backend":
        return <Server size={16} />;
      case "Database":
        return <Database size={16} />;
      case "Tools":
        return <Box size={16} />;
      case "Design":
        return <Palette size={16} />;
      case "Testing":
        return <TestTube2 size={16} />;
      default:
        return <Code2 size={16} />;
    }
  };

  return (
    <section
      id="skills"
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: "5rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-[#64FFDA] mr-4">03.</span>
            Skills & Technologies
            <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6 max-w-xs"></span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl">
            Here are the technologies and tools I work with to create
            exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all flex items-center gap-2 ${
                currentCategory === category
                  ? "border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]"
                  : "border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {getCategoryIcon(category)}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#112240]/50 p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all"
                whileHover={{ y: -5 }}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#E6F1FF]">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#8892B0] bg-[#233554] px-2 py-1 rounded-full flex items-center gap-1">
                          {getCategoryIcon(skill.category)}
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-sm font-bold px-3 py-1 rounded-full border ${getSkillLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </div>
                  </div>
                </div>

                {/* Skill Description */}
                <p className="text-[#8892B0] text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12"
          >
            {/* Showing info - hidden on mobile, shown on sm and up */}
            <div className="text-[#8892B0] text-sm hidden sm:block">
              Showing {startIndex + 1}-
              {Math.min(startIndex + skillsPerPage, filteredSkills.length)} of{" "}
              {filteredSkills.length} skills
              {currentCategory !== "All" && ` in ${currentCategory}`}
            </div>

            {/* Compact info for mobile */}
            <div className="text-[#8892B0] text-sm sm:hidden">
              Page {currentPage} of {totalPages}
            </div>

            <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-center">
              {/* Previous Button */}
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded border transition-all text-sm ${
                  currentPage === 1
                    ? "border-[#233554] text-[#8892B0] cursor-not-allowed"
                    : "border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                }`}
                whileHover={{ x: currentPage === 1 ? 0 : -2 }}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Prev</span>
              </motion.button>

              {/* Page Numbers - hidden on mobile, shown on md and up */}
              <div className="hidden md:flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm font-medium ${
                        currentPage === page
                          ? "border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]"
                          : "border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Mobile page indicator */}
              <div className="md:hidden flex items-center gap-2">
                <span className="text-[#64FFDA] font-medium">
                  {currentPage}
                </span>
                <span className="text-[#8892B0]">/</span>
                <span className="text-[#8892B0]">{totalPages}</span>
              </div>

              {/* Next Button */}
              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                  currentPage === totalPages
                    ? "border-[#233554] text-[#8892B0] cursor-not-allowed"
                    : "border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                }`}
                whileHover={{ x: currentPage === totalPages ? 0 : 2 }}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={16} />
              </motion.button>
            </div>

            {/* Showing info for mobile (bottom) */}
            <div className="text-[#8892B0] text-xs text-center sm:hidden w-full">
              {Math.min(startIndex + skillsPerPage, filteredSkills.length)} of{" "}
              {filteredSkills.length} skills shown
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
