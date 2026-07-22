import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';

const experienceEntries = [
  {
    key: 'intern_fullstack',
    kind: 'work',
    period: 'May 15, 2025 - July 15, 2025',
    responsibilities: ['r1', 'r2', 'r3'],
  },
  {
    key: 'student',
    kind: 'education',
    period: 'September 2024 - Present',
    responsibilities: ['r1', 'r2', 'r3'],
  },
  {
    key: 'intern_frontend',
    kind: 'work',
    period: 'August 7, 2023 - October 2023',
    responsibilities: ['r1', 'r2', 'r3'],
  },
  {
    key: 'economics',
    kind: 'education',
    period: '2024',
    responsibilities: ['r1', 'r2', 'r3'],
  },
  {
    key: 'bac',
    kind: 'education',
    period: '2019',
    responsibilities: ['r1', 'r2', 'r3'],
  },
];

const kindMeta = {
  work: { code: 'WK', icon: FiBriefcase },
  education: { code: 'EDU', icon: FiBookOpen },
};

export default function Experiences() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experiences" className="motion-section motion-section--paper motion-experience">
      <div className="motion-section-shell">
        <SectionHeading
          index="04"
          label={t('experience.badge')}
          title={t('experience.title')}
          description={t('experience.description')}
        />

        <ol className="motion-experience-ledger">
          {experienceEntries.map((entry, index) => {
            const KindIcon = kindMeta[entry.kind].icon;

            return (
              <Motion.li
                key={entry.key}
                className="motion-experience-ledger-item"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: '-70px' }}
              >
                <article className="motion-experience-entry" data-kind={entry.kind}>
                  <div className="motion-experience-sequence" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <header className="motion-experience-entry-header">
                    <div className="motion-experience-kind" aria-hidden="true">
                      <KindIcon />
                      <span>{kindMeta[entry.kind].code}</span>
                    </div>
                    <div className="motion-experience-title-group">
                      <h3>{t(`experience.items.${entry.key}.role`)}</h3>
                      <p>{t(`experience.items.${entry.key}.company`)}</p>
                    </div>
                    <time>{entry.period}</time>
                  </header>

                  <ul className="motion-experience-responsibilities">
                    {entry.responsibilities.map((responsibility, responsibilityIndex) => (
                      <li key={responsibility}>
                        <span aria-hidden="true">
                          {String(responsibilityIndex + 1).padStart(2, '0')}
                        </span>
                        <p>{t(`experience.items.${entry.key}.${responsibility}`)}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
