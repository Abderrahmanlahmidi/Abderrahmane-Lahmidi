import { useEffect } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function SplashScreen({ onComplete }) {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const displayDuration = shouldReduceMotion ? 350 : 3200;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;
    const timeoutId = window.setTimeout(onComplete, displayDuration);

    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, [displayDuration, onComplete]);

  const lineTransition = (delay) => ({
    delay: shouldReduceMotion ? 0 : delay,
    duration: shouldReduceMotion ? 0 : 1.05,
    ease: [0.16, 1, 0.3, 1],
  });

  return (
    <Motion.section
      className="motion-splash"
      role="status"
      aria-live="polite"
      aria-label={t('splash.loading')}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: {
          duration: shouldReduceMotion ? 0 : 1.05,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="motion-splash-pattern" aria-hidden="true" />

      <div className="motion-splash-shell">
        <Motion.header
          className="motion-splash-header"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={lineTransition(0.12)}
        >
          <span className="motion-splash-brand">
            <span className="motion-splash-monogram" aria-hidden="true">AL</span>
            <strong>Abderrahmane Lahmidi</strong>
          </span>
          <span>{t('splash.portfolio')}</span>
        </Motion.header>

        <h1 className="motion-splash-title">
          <span className="motion-splash-title-line">
            <Motion.span
              initial={{ y: '112%' }}
              animate={{ y: '0%' }}
              transition={lineTransition(0.3)}
            >
              {t('splash.title_primary')}
            </Motion.span>
          </span>
          <span className="motion-splash-title-line motion-splash-title-line--accent">
            <Motion.strong
              initial={{ y: '112%' }}
              animate={{ y: '0%' }}
              transition={lineTransition(0.58)}
            >
              {t('splash.title_accent')}
            </Motion.strong>
          </span>
        </h1>

        <Motion.footer
          className="motion-splash-footer"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={lineTransition(0.82)}
        >
          <span>{t('splash.role')} / {t('splash.location')}</span>
          <span className="motion-splash-progress" aria-hidden="true">
            <Motion.i
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.15,
                duration: shouldReduceMotion ? 0 : (displayDuration - 180) / 1000,
                ease: 'linear',
              }}
            />
          </span>
          <span>{t('splash.loading')}</span>
        </Motion.footer>
      </div>
    </Motion.section>
  );
}
