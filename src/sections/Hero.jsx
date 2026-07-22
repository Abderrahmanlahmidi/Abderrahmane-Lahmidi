import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion as Motion,
    useReducedMotion,
} from 'framer-motion';
import {
    FiArrowDown,
    FiArrowRight,
    FiDownload,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
    SiExpress,
    SiMongodb,
    SiNextdotjs,
    SiTypescript,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import cvUrl from '../assets/documents/Abderrahmane-Lahmidi.pdf';

const socialLinks = [
    {
        icon: FiGithub,
        href: 'https://github.com/Abderrahmanlahmidi',
        label: 'GitHub',
    },
    {
        icon: FiLinkedin,
        href: 'https://www.linkedin.com/in/lahmidi/',
        label: 'LinkedIn',
    },
];

const technologyMarks = [
    { name: 'React', slug: 'react', icon: FaReact },
    { name: 'TypeScript', slug: 'typescript', icon: SiTypescript },
    { name: 'Next.js', slug: 'nextjs', icon: SiNextdotjs },
    { name: 'Node.js', slug: 'node', icon: FaNodeJs },
    { name: 'Express', slug: 'express', icon: SiExpress },
    { name: 'MongoDB', slug: 'mongodb', icon: SiMongodb },
];

export default function Hero() {
    const { t } = useTranslation();
    const shouldReduceMotion = useReducedMotion();
    const [activeTechnologyIndex, setActiveTechnologyIndex] = useState(0);
    const activeTechnology = technologyMarks[activeTechnologyIndex];
    const ActiveTechnologyIcon = activeTechnology.icon;

    useEffect(() => {
        if (shouldReduceMotion) return undefined;

        const intervalId = window.setInterval(() => {
            setActiveTechnologyIndex((currentIndex) => (currentIndex + 1) % technologyMarks.length);
        }, 2800);

        return () => window.clearInterval(intervalId);
    }, [shouldReduceMotion]);

    const scrollToNextSection = () => {
        document.getElementById('ai-workflow')?.scrollIntoView({
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
        });
    };

    return (
        <section
            id="home"
            className="motion-hero"
        >
            <div className="motion-hero-tech-mark" aria-hidden="true">
                <Motion.div
                    className="motion-hero-tech-mark-inner"
                    initial={{ opacity: 0, x: 36, rotate: 3 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <Motion.div
                            key={activeTechnology.slug}
                            className="motion-hero-tech-icon"
                            data-tech={activeTechnology.slug}
                            initial={{ opacity: 0, scale: 0.72, rotate: -10, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.14, rotate: 10, filter: 'blur(8px)' }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.48, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ActiveTechnologyIcon />
                        </Motion.div>
                    </AnimatePresence>
                </Motion.div>
            </div>

            <div className="motion-hero-panel-wrap">
                <Motion.div
                    className="motion-hero-panel"
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Motion.div
                        className="motion-hero-meta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.45, duration: 0.45 }}
                    >
                        <span>{t('hero.eyebrow')}</span>
                        <span className="motion-hero-status">
                            <i aria-hidden="true" />
                            {t('hero.status_short')}
                        </span>
                    </Motion.div>

                    <Motion.div
                        className="motion-hero-copy"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1>
                            <em>Abderrahmane.</em>
                            <br />
                            <span>{t('hero.subtitle')}</span>
                        </h1>
                        <p>{t('hero.description')}</p>
                    </Motion.div>

                    <Motion.div
                        className="motion-hero-actions"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.55, duration: 0.55 }}
                    >
                        <a className="motion-hero-primary" href="#projects">
                            <span>{t('hero.view_work')}</span>
                            <FiArrowRight aria-hidden="true" />
                        </a>
                        <a className="motion-hero-secondary" href={cvUrl} download="Abderrahmane_Lahmidi_CV.pdf">
                            <FiDownload aria-hidden="true" />
                            <span>{t('hero.download_cv')}</span>
                        </a>
                    </Motion.div>

                    <Motion.div
                        className="motion-hero-connect"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: shouldReduceMotion ? 0 : 0.75, duration: 0.45 }}
                    >
                        <span className="motion-hero-connect-label">
                            <b aria-hidden="true">&gt;</b>
                            {t('hero.social_intro')}
                        </span>
                        <div>
                            {socialLinks.map((social) => (
                                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                                    <social.icon aria-hidden="true" />
                                    <span>{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </Motion.div>
                </Motion.div>
            </div>

            <Motion.div
                className="motion-hero-readout"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.55 }}
            >
                <span>React 19</span>
                <span>Node / Express</span>
                <span>MongoDB</span>
                <button type="button" onClick={scrollToNextSection}>
                    <span>{t('hero.scroll_down')}</span>
                    <FiArrowDown aria-hidden="true" />
                </button>
            </Motion.div>
        </section>
    );
}
