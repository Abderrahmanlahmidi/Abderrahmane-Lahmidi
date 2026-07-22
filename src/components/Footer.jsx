import { motion as Motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Abderrahmanlahmidi',
    Icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lahmidi/',
    Icon: FiLinkedin,
  },
  {
    label: 'X',
    href: 'https://x.com/Abderra47978756',
    Icon: FiTwitter,
  },
];

const footerNavigation = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'certificates', href: '#certificates' },
  { key: 'experience', href: '#experiences' },
  { key: 'packages', href: '#packages' },
  { key: 'projects', href: '#projects' },
];

const Footer = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="motion-footer">
      <section className="motion-footer-cta" aria-labelledby="footer-cta-title">
        <Motion.div
          className="motion-footer-cta-inner"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="motion-footer-cta-meta">
            <span>07</span>
            <span>{t('nav.contact')}</span>
          </div>

          <div className="motion-footer-cta-copy">
            <h2 id="footer-cta-title">
              <span>{t('footer.cta_title')}</span>
              <strong>{t('footer.cta_highlight')}</strong>
            </h2>

            <Motion.a
              className="motion-footer-cta-link"
              href="mailto:contact@abderrahmanelahmidi.com"
              whileHover={shouldReduceMotion ? undefined : { x: 4, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <span>{t('footer.contact_button')}</span>
              <FiArrowUpRight aria-hidden="true" />
            </Motion.a>
          </div>
        </Motion.div>
      </section>

      <div className="motion-footer-main">
        <div className="motion-footer-main-inner">
          <div className="motion-footer-grid">
            <div className="motion-footer-brand">
              <a className="motion-footer-brand-link" href="#home" aria-label="Abderrahmane Lahmidi">
                <span className="motion-footer-brand-mark" aria-hidden="true">AL</span>
                <span>Abderrahmane Lahmidi</span>
              </a>
              <p>{t('footer.bio_short')}</p>
              <a className="motion-footer-email" href="mailto:contact@abderrahmanelahmidi.com">
                contact@abderrahmanelahmidi.com
              </a>
            </div>

            <nav className="motion-footer-navigation" aria-label={t('footer.navigation')}>
              <h3>{t('footer.navigation')}</h3>
              <ol>
                {footerNavigation.map((item, index) => (
                  <li key={item.key}>
                    <a href={item.href}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                      <strong>{t(`nav.${item.key}`)}</strong>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="motion-footer-status-column">
              <h3>{t('footer.status')}</h3>
              <div className="motion-footer-status" role="status">
                <i aria-hidden="true" />
                <span>{t('hero.available')}</span>
              </div>

              <div className="motion-footer-socials" aria-label="Social links">
                {socialLinks.map((social) => {
                  const SocialIcon = social.Icon;

                  return (
                    <Motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    >
                      <span>{social.label}</span>
                      <SocialIcon aria-hidden="true" />
                    </Motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="motion-footer-bottom">
            <span>Casablanca, Morocco</span>
            <p>
              &copy; {currentYear} {t('footer.rights')}
            </p>
            <a href="#home">
              <span>{t('common.scroll_top')}</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
