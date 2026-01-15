import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const experiences = [
  { type: "experience", key: "intern_fullstack", period: "May 15, 2025 - July 15, 2025", responsibilitiesCount: 3, awards: [] },
  { type: "experience", key: "student", period: "September 2024 - Present", responsibilitiesCount: 3, awards: [] },
  { type: "experience", key: "intern_frontend", period: "August 7, 2023 - October 2023", responsibilitiesCount: 3, awards: [] },
  { type: "experience", key: "economics", period: "2024", responsibilitiesCount: 3, awards: [] },
  { type: "experience", key: "bac", period: "2019", responsibilitiesCount: 3, awards: [] }
];

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <section id="experiences" className="py-24 md:py-32 bg-[var(--background)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="badge mx-auto mb-4 flex w-fit">{t('experience.badge')}</div>
          <h2 className="section-title">
            {t('experience.title')}
          </h2>
          <p className="section-subtitle">
            {t('experience.description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--border)] to-transparent hidden md:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-center md:gap-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-0 md:top-12 -translate-x-1/2 w-4 h-4 rounded-full z-10 hidden md:flex items-center justify-center border-4 border-[var(--background)] shadow-lg bg-[var(--primary)] ring-4 ring-[var(--primary)]/10" />

                <div className="hidden md:block w-1/2" />

                <div className="w-full md:w-1/2">
                  <div className="next-card p-8 md:p-10 group relative border-l-4 md:border-l border-l-[var(--primary)] md:border-l-[var(--border)] hover:border-l-[var(--primary)] transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-5">
                        <div className="p-4 rounded-2xl bg-[var(--border)]/30 text-[var(--foreground)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-sm">
                          <FiBriefcase size={22} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black tracking-tight text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight">
                            {t(`experience.items.${exp.key}.role`)}
                          </h3>
                          <p className="text-[var(--primary)] font-bold text-sm tracking-tight mt-1">
                            {t(`experience.items.${exp.key}.company`)}
                          </p>
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--border)]/20 px-4 py-2 rounded-full h-fit border border-[var(--border)]">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {Array.from({ length: exp.responsibilitiesCount }).map((_, i) => (
                        <li key={i} className="flex items-start text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed font-medium">
                          <span className="text-[var(--primary)] mr-4 mt-2.5 w-2 h-[2px] rounded-full bg-current flex-shrink-0" />
                          <span>{t(`experience.items.${exp.key}.r${i + 1}`)}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.awards.length > 0 && (
                      <div className="mt-10 pt-8 border-t border-[var(--border)] border-dashed relative">
                        <div className="absolute -top-3 left-4 bg-[var(--background)] px-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)]">
                          {t('experience.achievements')}
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {exp.awards.map((award, i) => (
                            <li key={i} className="text-[var(--muted-foreground)] text-xs flex items-center font-bold bg-[var(--border)]/10 p-3 rounded-lg border border-[var(--border)]/30">
                              <FiAward className="text-[var(--primary)] mr-3 flex-shrink-0" size={16} />
                              {award}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
