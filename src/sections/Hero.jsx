import { useRef } from 'react';
import {
    motion as Motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
} from 'framer-motion';
import {
    FiArrowDown,
    FiArrowRight,
    FiDownload,
    FiGithub,
    FiLinkedin,
} from 'react-icons/fi';
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

const asciiRows = Array.from({ length: 48 }, (_, row) => {
    let line = '';

    for (let column = 0; column < 96; column += 1) {
        const x = column - 54;
        const y = (row - 23.5) * 1.8;
        const radius = Math.hypot(x, y);
        const angle = Math.atan2(y, x);
        const wave = Math.sin(radius * 0.32 - angle * 3.2 + row * 0.08);

        if ((row + column) % 23 === 0) line += '+';
        else if (wave > 0.62) line += '/';
        else if (wave < -0.62) line += '\\';
        else if (Math.abs(Math.cos(angle)) > 0.72) line += '-';
        else if (Math.abs(Math.sin(angle)) > 0.72) line += '|';
        else line += '.';
    }

    return line;
});

export default function Hero() {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const fieldX = useMotionValue(0);
    const fieldY = useMotionValue(0);
    const smoothX = useSpring(fieldX, { stiffness: 90, damping: 24, mass: 0.8 });
    const smoothY = useSpring(fieldY, { stiffness: 90, damping: 24, mass: 0.8 });

    const handlePointerMove = (event) => {
        if (shouldReduceMotion || !heroRef.current) return;

        const bounds = heroRef.current.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        fieldX.set(x * 22);
        fieldY.set(y * 16);
    };

    const resetFieldPosition = () => {
        fieldX.set(0);
        fieldY.set(0);
    };

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            ref={heroRef}
            className="motion-hero"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetFieldPosition}
        >
            <div className="motion-hero-field" aria-hidden="true">
                <div className="motion-hero-color-field" />
                <Motion.div
                    className="motion-hero-ascii"
                    style={{ x: smoothX, y: smoothY }}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="motion-hero-ascii-lines">
                        {asciiRows.map((row, index) => (
                            <span key={`${index}-${row.slice(0, 8)}`}>{row}</span>
                        ))}
                    </div>
                </Motion.div>
                <div className="motion-hero-orbit motion-hero-orbit-one" />
                <div className="motion-hero-orbit motion-hero-orbit-two" />
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
                <button type="button" onClick={scrollToAbout}>
                    <span>{t('hero.scroll_down')}</span>
                    <FiArrowDown aria-hidden="true" />
                </button>
            </Motion.div>
        </section>
    );
}
