import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';

const skills = [
  {
    category: "Frontend",
    icon: <FiCode className="text-3xl text-[#64FFDA]" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: <FiCpu className="text-3xl text-[#64FFDA]" />,
    items: ["Node.js", "Express", "Python", "Django", "REST APIs"]
  },
  {
    category: "Database",
    icon: <FiDatabase className="text-3xl text-[#64FFDA]" />,
    items: ["MongoDB", "PostgreSQL", "Firebase", "Prisma", "MySQL"]
  },
  {
    category: "Other",
    icon: <FiLayers className="text-3xl text-[#64FFDA]" />,
    items: ["Git", "Docker", "AWS", "Figma", "Jest"]
  }
];

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240]/50 p-6 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {skill.icon}
                <h3 className="text-xl font-semibold text-[#E6F1FF]">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <motion.li 
                    key={item}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#64FFDA] mr-2">▹</span>
                    <span className="text-[#8892B0]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional skills visualization
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-[#E6F1FF] mb-6">Proficiency Levels</h3>
          <div className="space-y-4">
            {[
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Node.js", level: 80 },
              { name: "TypeScript", level: 75 },
              { name: "UI/UX Design", level: 70 }
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm text-[#8892B0]">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#233554] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#64FFDA] to-[#64FFDA]/70 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}