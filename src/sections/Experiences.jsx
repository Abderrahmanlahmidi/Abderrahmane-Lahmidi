import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const experiences = [

  {
    type: "experience",
    key: "intern_fullstack",
    period: "May 15, 2025 - July 15, 2025",
    responsibilitiesCount: 3,
    awards: []
  },
  {
    type: "experience",
    key: "student",
    period: "September 2024 - Present",
    responsibilitiesCount: 3,
    awards: []
  },
  {
    type: "experience",
    key: "intern_frontend",
    period: "August 7, 2023 - October 2023",
    responsibilitiesCount: 3,
    awards: []
  },

  {
    type: "experience",
    key: "economics",
    period: "2024",
    responsibilitiesCount: 3,
    awards: []
  },
  {
    type: "experience",
    key: "bac",
    period: "2019",
    responsibilitiesCount: 3,
    awards: []
  }
];


export default function Experiences() {
  const { t } = useTranslation();
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
            {t('experience.title')}
            <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6 max-w-xs"></span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl">
            {t('experience.description')}
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
                      <h3 className="text-lg md:text-xl font-semibold text-[#E6F1FF]">{t(`experience.items.${exp.key}.role`)}</h3>
                      <p className="text-sm md:text-base text-[#64FFDA]">{t(`experience.items.${exp.key}.company`)} • {exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {Array.from({ length: exp.responsibilitiesCount }).map((_, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-[#64FFDA] mr-2 mt-1 text-xs md:text-sm">▹</span>
                        <span className="text-sm md:text-base text-[#8892B0]">{t(`experience.items.${exp.key}.r${i + 1}`)}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {exp.awards.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-[#233554]">
                      <div className="flex items-center gap-2 text-[#64FFDA] mb-2 md:mb-3">
                        <FiAward className="text-sm md:text-base" />
                        <span className="font-medium text-sm md:text-base">{t('experience.achievements')}</span>
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