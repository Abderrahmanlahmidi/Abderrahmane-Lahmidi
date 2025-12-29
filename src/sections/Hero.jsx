import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiDownload, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';


export default function Hero() {
    const handleDownloadCV = () => {
        const cvUrl = '../../src/assets/documents/Abderrahmane-Lahmidi.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Abderrahmane_Lahmidi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="min-h-screen bg-[#0A192F] text-[#E6F1FF] relative overflow-hidden">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center min-h-screen"
                >
                    <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-3 gap-8 items-center">
                            {/* Left Column - Main Content */}
                            <div className="lg:col-span-2">
                                {/* Intro text */}
                                <motion.p
                                    className="text-[#64FFDA] text-sm md:text-base mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    Hi, my name is
                                </motion.p>

                                {/* Name with regular animation */}
                                <motion.h1
                                    className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                >
                                    Abderrahmane Lahmidi.
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.h2
                                    className="text-3xl md:text-5xl text-[#8892B0] mt-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    I build things for the web.
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    className="mt-6 text-[#8892B0] max-w-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    I'm a passionate front-end developer with a strong background in building modern,
                                    responsive, and user-friendly web applications using technologies like React, Tailwind CSS,
                                    and Node. Currently, I'm focused on crafting accessible and high-performance interfaces that
                                    prioritize user experience.
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    className="flex flex-wrap items-center gap-4 mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                >
                                    {/* Projects Button */}
                                    <motion.div className="relative group">
                                        <motion.a
                                            href="#projects"
                                            className="relative overflow-hidden border-2 border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded flex items-center gap-2"
                                            whileHover={{ y: -3, backgroundColor: 'rgba(100, 255, 218, 0.1)' }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                        >
                                            <span className="relative z-10">View My Work</span>
                                            <motion.span
                                                className="absolute inset-0 bg-[#64FFDA]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                                            />
                                        </motion.a>
                                    </motion.div>

                                    {/* Download CV Button */}
                                    <motion.div className="relative group">
                                        <motion.button
                                            onClick={handleDownloadCV}
                                            className="relative overflow-hidden bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded flex items-center gap-2 font-medium"
                                            whileHover={{ y: -3, backgroundColor: '#52e0c4' }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                        >
                                            <FiDownload className="text-lg" />
                                            <span className="relative z-10">Download CV</span>
                                            <motion.span
                                                className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                                            />
                                        </motion.button>
                                    </motion.div>

                                    {/* Social Links */}
                                    <div className="flex gap-4">
                                        {/* GitHub */}
                                        <motion.a
                                            href="https://github.com/Abderrahmanlahmidi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative text-[#64FFDA] text-xl p-2 rounded-full border-2 border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors"
                                            whileHover={{ y: -3, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="GitHub"
                                        >
                                            <FiGithub />
                                        </motion.a>

                                        {/* LinkedIn */}
                                        <motion.a
                                            href="https://www.linkedin.com/in/lahmidi/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative text-[#64FFDA] text-xl p-2 rounded-full border-2 border-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors"
                                            whileHover={{ y: -3, rotate: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            aria-label="LinkedIn"
                                        >
                                            <FiLinkedin />
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Scroll indicator */}
                                <motion.div
                                    className="mt-16 text-center text-[#64FFDA] lg:hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.6 }}
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                            opacity: [0.6, 1, 0.6]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <FiChevronDown size={24} />
                                    </motion.div>
                                    <motion.p
                                        className="mt-2 text-sm"
                                        animate={{ opacity: [0.6, 1, 0.6] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: "easeInOut",
                                            delay: 0.3
                                        }}
                                    >
                                        Scroll Down
                                    </motion.p>
                                </motion.div>
                            </div>

                            {/* Right Column - Simple Billboard Cards */}
                            <motion.div
                                className="hidden lg:block space-y-4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                {/* Tech Card */}
                                <div className="bg-[#112240]/50 border border-[#233554] rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-[#64FFDA]/10 rounded-lg">
                                            <FiCode className="text-[#64FFDA]" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Frontend Expert</h4>
                                            <p className="text-[#8892B0] text-sm">React, TypeScript, Tailwind</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Backend Card */}
                                <div className="bg-[#112240]/50 border border-[#233554] rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-[#64FFDA]/10 rounded-lg">
                                            <FiCpu className="text-[#64FFDA]" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Backend Skills</h4>
                                            <p className="text-[#8892B0] text-sm">Node.js, Express, MongoDB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Database Card */}
                                <div className="bg-[#112240]/50 border border-[#233554] rounded-lg p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-[#64FFDA]/10 rounded-lg">
                                            <FiDatabase className="text-[#64FFDA]" size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">Database</h4>
                                            <p className="text-[#8892B0] text-sm">MongoDB, PostgreSQL</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Card */}
                                <div className="bg-[#64FFDA]/10 border border-[#64FFDA]/30 rounded-lg p-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-[#64FFDA] text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Scroll indicator for desktop */}
                        <motion.div
                            className="mt-16 text-center text-[#64FFDA] hidden lg:block"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, 10, 0],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            >
                                <FiChevronDown size={24} />
                            </motion.div>
                            <motion.p
                                className="mt-2 text-sm"
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut",
                                    delay: 0.3
                                }}
                            >
                                Scroll Down
                            </motion.p>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}