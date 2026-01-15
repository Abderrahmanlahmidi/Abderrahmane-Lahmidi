import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
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
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => document.getElementById(item.path.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    const target = document.getElementById(path.substring(1));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setActiveSection(path);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const nextLanguage = i18n.language.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="text-2xl font-black tracking-tighter group flex items-center gap-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">A.</span>
            <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">LAH</span>
            <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full shadow-[0_0_8px_var(--primary)]" />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleSmoothScroll(e, item.path)}
                  className={`relative text-[13px] font-bold uppercase tracking-widest transition-all hover:text-[var(--primary)] ${activeSection === item.path ? 'text-[var(--foreground)]' : 'text-[var(--muted-foreground)]'
                    }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  {t('nav.' + item.name)}
                  {activeSection === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[var(--primary)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-5 pl-8 border-l border-[var(--border)]">
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
              </motion.button>

              <motion.button
                onClick={toggleLanguage}
                className="text-[10px] font-black tracking-widest px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
              >
                {i18n.language.startsWith('en') ? 'FR' : 'EN'}
              </motion.button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] bg-[var(--card)]/50 backdrop-blur-md"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 bg-[var(--card)] border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden p-6"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleSmoothScroll(e, item.path)}
                    className={`text-lg font-black tracking-tight p-4 rounded-2xl transition-all ${activeSection === item.path
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/30'
                      }`}
                  >
                    {t('nav.' + item.name)}
                  </a>
                ))}

                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-[var(--border)]">
                  <button
                    onClick={toggleTheme}
                    className="flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl bg-[var(--border)]/20 text-sm font-bold text-[var(--foreground)]"
                  >
                    {theme === 'light' ? <><FiMoon /> DARK</> : <><FiSun /> LIGHT</>}
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="flex-1 p-4 rounded-2xl bg-[var(--border)]/20 text-sm font-bold text-[var(--foreground)]"
                  >
                    {i18n.language.startsWith('en') ? 'FRANÇAIS' : 'ENGLISH'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

  );
}
