import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiPackage } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import harmonyImg from '../assets/images/Package/Harmony.jpg';
import SectionHeading from '../components/SectionHeading';

const harmonyTags = ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'NPM'];

export default function Packages() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="packages" className="motion-section motion-section--ink motion-package">
      <div className="motion-section-shell">
        <SectionHeading
          index="05"
          label={t('packages.badge')}
          title={t('packages.title')}
          description={t('packages.description')}
        />

        <Motion.article
          className="motion-package-feature"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <figure className="motion-package-visual">
            <div className="motion-package-image-stage">
              <img
                src={harmonyImg}
                alt="Harmony UI Library"
                loading="lazy"
                draggable="false"
              />
              <div className="motion-package-image-grid" aria-hidden="true" />
            </div>
            <figcaption>
              <span><FiPackage aria-hidden="true" /> {t('packages.harmony.available')}</span>
              <span>Package / HMY-01</span>
            </figcaption>
          </figure>

          <div className="motion-package-copy">
            <header className="motion-package-copy-header">
              <div className="motion-package-kicker">
                <span aria-hidden="true">01</span>
                <span>{t('packages.harmony.featured')}</span>
              </div>
              <h3>{t('packages.harmony.title')}</h3>
              <p>{t('packages.harmony.desc')}</p>
            </header>

            <ul className="motion-package-tags" aria-label="Harmony UI technologies">
              {harmonyTags.map((tag, index) => (
                <li key={tag}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>

            <div className="motion-package-actions" aria-label="Harmony UI links">
              <a
                href="https://www.npmjs.com/package/harmony-react-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-package-link motion-package-link--primary"
              >
                <FiPackage aria-hidden="true" />
                <span>{t('packages.harmony.npm')}</span>
                <FiExternalLink aria-hidden="true" />
              </a>
              <a
                href="https://harmony-ui-kohl.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-package-link"
              >
                <span>{t('packages.harmony.docs')}</span>
                <FiExternalLink aria-hidden="true" />
              </a>
              <a
                href="https://github.com/Abderrahmanlahmidi/Harmony"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-package-link"
              >
                <FiGithub aria-hidden="true" />
                <span>{t('packages.harmony.github')}</span>
                <FiExternalLink aria-hidden="true" />
              </a>
            </div>
          </div>
        </Motion.article>
      </div>
    </section>
  );
}
