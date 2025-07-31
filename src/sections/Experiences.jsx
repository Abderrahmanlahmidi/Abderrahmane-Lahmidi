import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Jaag Advisory",
    period: "May 15, 2025 - July 15, 2025",
    responsibilities: [
      "Worked on a financial website project using Django and React",
      "Built dynamic components and API integrations",
      "Collaborated with backend team to ensure smooth deployment"
    ],
    awards: []
  },
  {
    role: "Student Developer",
    company: "YouCode (Training Program)",
    period: "September 2024 - Present",
    responsibilities: [
      "Completed first year of training focusing on React, Laravel, UML, GitHub and modern web technologies",
      "Participated in real-world projects and peer reviews",
      "Currently continuing second year of full-stack development program"
    ],
    awards: []
  },
  {
    role: "Frontend Developer Intern",
    company: "Centoria Services",
    period: "August 7, 2023 - October 2023",
    responsibilities: [
      "Built UI components with HTML, CSS, and JavaScript",
      "Worked on three projects: two for French clients and one in Morocco",
      "Gained experience in real-world front-end development in a corporate setting"
    ],
    awards: []
  },
];


export default function Experiences() {
  return (
    <section 
      id="experiences" 
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 px-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-[#64FFDA] mr-4">05.</span>
            Professional Journey
            <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6 max-w-xs"></span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl">
            My career path and the valuable experiences I've gained along the way.
          </p>
        </motion.div>

        <div className="relative px-2">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-4 md:left-1/2 h-full w-0.5 bg-[#233554] origin-top"></div>

          <div className="flex flex-col gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:grid md:grid-cols-2 md:items-start gap-6 md:gap-8"
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 bg-[#64FFDA] rounded-full z-10"></div>

                {/* Left column spacing (for right side alignment) */}
                <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}></div>

                {/* Experience card */}
                <div className="bg-[#112240]/50 p-6 md:p-8 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-colors shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <FiBriefcase className="hidden md:block text-2xl text-[#64FFDA]" />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-[#E6F1FF]">{exp.role}</h3>
                      <p className="text-sm md:text-base text-[#64FFDA]">{exp.company} • {exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#64FFDA] mr-2 mt-1 text-xs md:text-sm">▹</span>
                        <span className="text-sm md:text-base text-[#8892B0]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {exp.awards.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-[#233554]">
                      <div className="flex items-center gap-2 text-[#64FFDA] mb-2 md:mb-3">
                        <FiAward className="text-sm md:text-base" />
                        <span className="font-medium text-sm md:text-base">Achievements</span>
                      </div>
                      <ul className="space-y-1 md:space-y-2">
                        {exp.awards.map((award, i) => (
                          <li key={i} className="text-[#8892B0] text-xs md:text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] mr-2"></span>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}