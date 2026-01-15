import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink, FiPackage } from 'react-icons/fi';
import harmonyImg from '../assets/images/Package/Harmony.jpg';

export default function Packages() {
    const { t } = useTranslation();

    return (
        <section id="packages" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[var(--primary)]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="badge mb-4 flex w-fit">{t('packages.badge')}</div>
                    <h2 className="section-title !text-left !mx-0">
                        {t('packages.title')}
                    </h2>
                    <p className="section-subtitle !text-left !mx-0">
                        {t('packages.description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="next-card group overflow-hidden bg-[var(--card)] border border-[var(--border)] relative"
                >
                    <div className="flex flex-col lg:flex-row items-stretch">
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto min-h-[400px] bg-[#0c0c0e] flex items-center justify-center">
                            <img
                                src={harmonyImg}
                                alt="Harmony UI Library"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 select-none"
                                draggable="false"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-2xl">
                                <FiPackage className="text-[var(--primary)]" />
                                <span className="text-xs font-black uppercase tracking-widest">Available on NPM</span>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-6 text-[var(--primary)]">
                                <div className="w-8 h-[2px] bg-current rounded-full" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Featured Project</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--foreground)] mb-6 tracking-tighter leading-tight group-hover:text-[var(--primary)] transition-colors">
                                {t('packages.harmony.title')}
                            </h3>

                            <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed font-medium">
                                {t('packages.harmony.desc')}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-auto">
                                <motion.a
                                    href="https://www.npmjs.com/package/harmony-react-ui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="next-button-primary flex items-center gap-3 px-8 py-4 shadow-xl shadow-blue-500/20"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FiPackage size={18} />
                                    <span>{t('packages.harmony.npm')}</span>
                                </motion.a>

                                <motion.a
                                    href="https://harmony-ui-kohl.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="next-button-secondary flex items-center gap-3 px-8 py-4"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FiExternalLink size={18} />
                                    <span>{t('packages.harmony.docs')}</span>
                                </motion.a>

                                <motion.a
                                    href="https://github.com/Abderrahmanlahmidi/Harmony"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl border border-[var(--border)] hover:border-[var(--foreground)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-all bg-[var(--card)] shadow-sm hover:shadow-lg"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="GitHub Repository"
                                >
                                    <FiGithub size={22} />
                                </motion.a>
                            </div>

                            {/* Stats / Tech Tags */}
                            <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-[var(--border)]">
                                {['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'NPM'].map((tag, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg bg-[var(--border)]/30 text-[var(--muted-foreground)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
