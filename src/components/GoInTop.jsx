import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const GoToTop = () => {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 300,
  );

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          type="button"
          onClick={scrollToTop}
          className="motion-go-top"
          title={t('common.scroll_top')}
          aria-label={t('common.scroll_top')}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 8, scale: shouldReduceMotion ? 1 : 0.92 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
        >
          <span>Top</span>
          <FiArrowUp aria-hidden="true" />
        </Motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
