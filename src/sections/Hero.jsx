import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Hero() {
    const { t } = useTranslation();
    const handleDownloadCV = () => {
        const cvUrl = '/Abderrahmane-Lahmidi.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abderrahmane_Lahmidi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-24 md:pt-32 pb-24 next-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--background)]/50 backdrop-blur-md shadow-sm"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
                        <span className="text-[10px] font-bold text-[var(--muted-foreground)] uppercase tracking-[0.2em]">{t('hero.available')}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
                            <span className="gradient-text">Abderrahmane</span><br />
                            <span className="text-[var(--foreground)]">Lahmidi</span><span className="text-[var(--primary)]">.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-base md:text-xl lg:text-2xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed mb-12 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <motion.a
                                href="#projects"
                                className="next-button-primary text-sm px-8 py-4 !bg-[var(--primary)] !text-white"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {t('hero.view_work')}
                            </motion.a>

                            <motion.button
                                onClick={handleDownloadCV}
                                className="next-button-secondary text-sm px-8 py-4 flex items-center gap-3 bg-transparent border-[var(--border)]"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FiDownload className="text-lg" />
                                <span>{t('hero.download_cv')}</span>
                            </motion.button>
                        </div>

                        <div className="hidden sm:block w-[1px] h-8 bg-[var(--border)] mx-2" />

                        <div className="flex gap-4">
                            {[
                                { icon: FiGithub, href: "https://github.com/Abderrahmanlahmidi", label: "GitHub" },
                                { icon: FiLinkedin, href: "https://www.linkedin.com/in/lahmidi/", label: "LinkedIn" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3.5 rounded-full border border-[var(--border)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 text-[var(--foreground)] shadow-sm"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--muted-foreground)] flex flex-col items-center gap-2 z-20 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[9px] uppercase tracking-[0.4em] font-black opacity-60 hover:opacity-100 transition-opacity">{t('hero.scroll_down')}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <FiChevronDown size={24} className="opacity-40" />
                </motion.div>
            </motion.div>
        </section>
    );
}

