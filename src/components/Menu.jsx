import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'home', path: '#home' },
  { name: 'about', path: '#about' },
  { name: 'skills', path: '#skills' },
  { name: 'certificates', path: '#certificates' },
  { name: 'experience', path: '#experiences' },
  { name: 'packages', path: '#packages' },
  { name: 'projects', path: '#projects' },
];

export default function Menu() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);

      const scrollPosition = window.scrollY + 120;
      for (let index = navItems.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(navItems[index].path.slice(1));
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[index].path);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeDesktopMenu = () => {
      if (window.innerWidth > 980) setIsMenuOpen(false);
    };

    window.addEventListener('resize', closeDesktopMenu);
    return () => window.removeEventListener('resize', closeDesktopMenu);
  }, []);

  const handleSmoothScroll = (event, path) => {
    event.preventDefault();
    const target = document.getElementById(path.slice(1));

    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    setActiveSection(path);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header className="motion-navbar-shell" data-scrolled={scrolled}>
      <nav className="motion-navbar" aria-label="Primary navigation">
        <Motion.a
          href="#home"
          onClick={(event) => handleSmoothScroll(event, '#home')}
          className="motion-navbar-brand"
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Abderrahmane Lahmidi, home"
        >
          <span className="motion-brand-mark" aria-hidden="true">
            <span>AL</span>
            <i />
          </span>
          <span className="motion-brand-name">Abderrahmane</span>
        </Motion.a>

        <div className="motion-navbar-links">
          {navItems.map((item, index) => (
            <Motion.a
              key={item.name}
              href={item.path}
              onClick={(event) => handleSmoothScroll(event, item.path)}
              className={activeSection === item.path ? 'is-active' : undefined}
              aria-current={activeSection === item.path ? 'page' : undefined}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * index, duration: 0.45 }}
            >
              {t(`nav.${item.name}`)}
            </Motion.a>
          ))}
        </div>

        <div className="motion-navbar-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="motion-nav-icon-button"
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            type="button"
            onClick={toggleLanguage}
            className="motion-nav-language"
            aria-label={i18n.language.startsWith('en') ? 'Afficher le site en français' : 'View site in English'}
          >
            {i18n.language.startsWith('en') ? 'FR' : 'EN'}
          </button>

          <a className="motion-nav-primary" href="mailto:contact@abderrahmanelahmidi.com">
            <span>{t('nav.contact')}</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="motion-navbar-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Motion.button
              type="button"
              className="motion-mobile-backdrop"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <Motion.div
              id="mobile-navigation"
              className="motion-mobile-menu"
              initial={{ opacity: 0, y: -16, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              exit={{ opacity: 0, y: -12, clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="motion-mobile-menu-meta">
                <span>Navigation</span>
                <span>{String(navItems.length).padStart(2, '0')} / links</span>
              </div>

              <div className="motion-mobile-menu-links">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(event) => handleSmoothScroll(event, item.path)}
                    className={activeSection === item.path ? 'is-active' : undefined}
                    aria-current={activeSection === item.path ? 'page' : undefined}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{t(`nav.${item.name}`)}</strong>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                ))}
              </div>

              <div className="motion-mobile-menu-actions">
                <button type="button" onClick={toggleTheme}>
                  {theme === 'light' ? <FiMoon /> : <FiSun />}
                  <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
                </button>
                <button type="button" onClick={toggleLanguage}>
                  <span>{i18n.language.startsWith('en') ? 'Français' : 'English'}</span>
                </button>
                <a href="mailto:contact@abderrahmanelahmidi.com">
                  <span>{t('nav.contact')}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
