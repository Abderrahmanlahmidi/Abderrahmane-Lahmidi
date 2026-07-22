import { motion as Motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profile from '../assets/images/abderrahmane.jpeg';
import SectionHeading from '../components/SectionHeading';

const toolkit = [
  'JavaScript (ES6+)',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'Git & GitHub',
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="motion-section motion-section--ink motion-about">
      <div className="motion-section-shell">
        <SectionHeading
          index="01"
          label={t('about.badge')}
          title={t('about.title')}
          description={t('about.p1')}
        />

        <div className="motion-about-layout">
          <Motion.figure
            className="motion-about-portrait"
            initial={{ opacity: 0, clipPath: 'inset(0 0 18% 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="motion-about-image-stage">
              <img src={profile} alt="Abderrahmane Lahmidi" loading="lazy" />
              <div className="motion-about-image-grid" aria-hidden="true" />
              <div className="motion-about-years">
                <strong>2+</strong>
                <span>{t('about.years_exp')}</span>
              </div>
            </div>
            <figcaption>
              <span>Portrait / AL-01</span>
              <span>Casablanca, MA</span>
            </figcaption>
          </Motion.figure>

          <Motion.div
            className="motion-about-copy"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="motion-about-copy-meta">
              <span>Profile / 2026</span>
              <span>Full-stack engineering</span>
            </div>
            <p className="motion-about-lead">{t('about.p2')}</p>
            <blockquote>{t('about.p3')}</blockquote>

            <div className="motion-about-principles" aria-label="Working principles">
              <div>
                <span>01</span>
                <strong>{t('about.principles.systems')}</strong>
              </div>
              <div>
                <span>02</span>
                <strong>{t('about.principles.motion')}</strong>
              </div>
              <div>
                <span>03</span>
                <strong>{t('about.principles.interfaces')}</strong>
              </div>
            </div>
          </Motion.div>
        </div>

        <div className="motion-about-toolkit" aria-label="Core toolkit">
          {toolkit.map((skill, index) => (
            <div key={skill}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
