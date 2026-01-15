import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const GoToTop = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--border)] text-[var(--foreground)] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center justify-center group"
          title={t('common.scroll_top')}
          aria-label={t('common.scroll_top')}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowUp size={24} className="group-hover:-translate-y-1 transition-transform stroke-[3px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;