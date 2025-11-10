import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiCode, FiCpu, FiDatabase, FiLayers, FiChevronLeft, FiChevronRight, FiStar, FiAward, FiZap } from 'react-icons/fi';

const skillsData = [
  {
    name: "React",
    level: 90,
    category: "Frontend",
    description: "Building dynamic and responsive user interfaces with modern React patterns and hooks",
    icon: <FiCode className="text-xl" />
  },
  {
    name: "TypeScript",
    level: 85,
    category: "Frontend",
    description: "Developing type-safe applications with enhanced code quality and better developer experience",
    icon: <FiCode className="text-xl" />
  },
  {
    name: "Next.js",
    level: 88,
    category: "Frontend",
    description: "Creating server-rendered React applications with optimal performance and SEO",
    icon: <FiCode className="text-xl" />
  },
  {
    name: "Tailwind CSS",
    level: 95,
    category: "Frontend",
    description: "Building modern, responsive layouts with utility-first CSS framework",
    icon: <FiCode className="text-xl" />
  },
  {
    name: "Node.js",
    level: 88,
    category: "Backend",
    description: "Developing scalable server-side applications and RESTful APIs",
    icon: <FiCpu className="text-xl" />
  },
  {
    name: "Express",
    level: 85,
    category: "Backend",
    description: "Building robust web applications and APIs with minimal and flexible Node.js framework",
    icon: <FiCpu className="text-xl" />
  },
  {
    name: "Python",
    level: 82,
    category: "Backend",
    description: "Writing efficient backend services and automation scripts",
    icon: <FiCpu className="text-xl" />
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Database",
    description: "Designing and managing NoSQL databases with flexible document models",
    icon: <FiDatabase className="text-xl" />
  },
  {
    name: "PostgreSQL",
    level: 80,
    category: "Database",
    description: "Working with relational databases and complex SQL queries",
    icon: <FiDatabase className="text-xl" />
  },
  {
    name: "Firebase",
    level: 82,
    category: "Database",
    description: "Implementing real-time databases and authentication services",
    icon: <FiDatabase className="text-xl" />
  },
  {
    name: "Git",
    level: 92,
    category: "Tools",
    description: "Version control and collaborative development workflows",
    icon: <FiLayers className="text-xl" />
  },
  {
    name: "Docker",
    level: 75,
    category: "Tools",
    description: "Containerizing applications for consistent development and deployment",
    icon: <FiLayers className="text-xl" />
  },
  {
    name: "AWS",
    level: 70,
    category: "Tools",
    description: "Deploying and managing cloud infrastructure and services",
    icon: <FiLayers className="text-xl" />
  },
  {
    name: "Figma",
    level: 85,
    category: "Design",
    description: "Creating and collaborating on UI/UX designs and prototypes",
    icon: <FiAward className="text-xl" />
  },
  {
    name: "Jest",
    level: 80,
    category: "Testing",
    description: "Writing comprehensive unit and integration tests",
    icon: <FiZap className="text-xl" />
  }
];

export default function Skills() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6;

  // Get unique categories
  const categories = ["All", ...new Set(skillsData.map(skill => skill.category))];

  // Filter skills by category
  const filteredSkills = currentCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === currentCategory);

  // Pagination
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const startIndex = (currentPage - 1) * skillsPerPage;
  const currentSkills = filteredSkills.slice(startIndex, startIndex + skillsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1);
  };

  const getSkillLevelColor = (level) => {
    if (level >= 90) return "from-green-400 to-green-600";
    if (level >= 80) return "from-blue-400 to-blue-600";
    if (level >= 70) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section 
      id="skills" 
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
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
            Here are the technologies and tools I work with to create exceptional digital experiences.
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
              className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                currentCategory === category
                  ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                  : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
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
                className="bg-[#112240]/50 p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all group"
                whileHover={{ y: -5 }}
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#64FFDA]/10 rounded-lg flex items-center justify-center text-[#64FFDA] group-hover:bg-[#64FFDA] group-hover:text-[#0A192F] transition-all">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-1 rounded-full">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#64FFDA] font-bold text-lg">
                      {skill.level}%
                    </div>
                    <div className="text-xs text-[#8892B0]">
                      {getSkillLevelText(skill.level)}
                    </div>
                  </div>
                </div>

                {/* Skill Description */}
                <p className="text-[#8892B0] text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>

                {/* Animated Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#8892B0]">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#233554] rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${getSkillLevelColor(skill.level)}`}
                    />
                  </div>
                </div>
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
            className="flex items-center justify-between mt-12"
          >
            <div className="text-[#8892B0] text-sm">
              Showing {startIndex + 1}-{Math.min(startIndex + skillsPerPage, filteredSkills.length)} of {filteredSkills.length} skills
              {currentCategory !== "All" && ` in ${currentCategory}`}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  currentPage === 1
                    ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                    : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
                }`}
                whileHover={{ x: currentPage === 1 ? 0 : -2 }}
              >
                <FiChevronLeft size={16} />
                Prev
              </motion.button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg border transition-all text-sm font-medium ${
                      currentPage === page
                        ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                        : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <motion.button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  currentPage === totalPages
                    ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                    : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
                }`}
                whileHover={{ x: currentPage === totalPages ? 0 : 2 }}
              >
                Next
                <FiChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}