import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiGithub, FiExternalLink, FiLinkedin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import BubbleBackground from '../components/BubbleBackground';

export default function Hero() {
    const [showIntro, setShowIntro] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isExiting) {
                setShowIntro(false);
            }
        }, 6000);

        return () => clearTimeout(timer);
    }, [isExiting]);

    const handleSkip = () => {
        setIsExiting(true);
        setShowIntro(false);
    };

    return (
        <section className="min-h-screen bg-[#0A192F] text-[#E6F1FF] relative overflow-hidden">
            {/* Intro Screen */}
            <BubbleBackground/>
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A192F]"
                    >
                        {/* Skip button */}
                        <motion.button
                            onClick={handleSkip}
                            className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Skip Intro
                        </motion.button>

                        <div className="relative text-center">
                            {/* Main text with elegant reveal */}
                            <motion.div
                                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                                transition={{ duration: 1.5, ease: [0.83, 0, 0.17, 1] }}
                                className="overflow-hidden"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold text-[#64FFDA] mb-4">
                                    Hello World
                                </h1>
                            </motion.div>

                            {/* Subtitle with staggered letters */}
                            <motion.div
                                className="text-[#CCD6F6] text-xl md:text-2xl mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                            >
                                {"I build digital experiences".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 1.5 + i * 0.03,
                                            duration: 0.5,
                                            ease: "backOut"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Progress indicator */}
                            <div className="relative h-[2px] w-64 mx-auto bg-[#233554] overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ scaleX: 0, transformOrigin: 'left' }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        delay: 2.2,
                                        duration: 2.5,
                                        ease: [0.65, 0, 0.35, 1]
                                    }}
                                    className="absolute top-0 left-0 h-full w-full bg-[#64FFDA] rounded-full"
                                />
                            </div>

                            {/* Signature reveal */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5, duration: 0.8, ease: "backOut" }}
                                className="mt-12 text-[#8892B0] text-sm tracking-widest"
                            >
                                ABDERRAHMANE LAHMIDI
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Actual Hero Content */}
            <AnimatePresence>
                {!showIntro && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center min-h-screen"
                    >
                        <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                            <div className="max-w-3xl">
                                {/* Intro text */}
                                <motion.p
                                    className="text-[#64FFDA] text-sm md:text-base mb-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                >
                                    Hi, my name is
                                </motion.p>

                                {/* Name animation */}
                                <motion.h1
                                    className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: { staggerChildren: 0.05 }
                                        }
                                    }}
                                >
                                    {"Abderrahmane Lahmidi.".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            className="inline-block"
                                            variants={{
                                                hidden: {
                                                    opacity: 0,
                                                    y: 30,
                                                    letterSpacing: "-0.5em"
                                                },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    letterSpacing: "0em",
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                        damping: 15,
                                                        mass: 0.5
                                                    }
                                                }
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.h1>

                                {/* Subtitle */}
                                <motion.h2
                                    className="text-3xl md:text-5xl text-[#8892B0] mt-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                >
                                    I build things for the web.
                                </motion.h2>

                                {/* Description */}
                                <motion.p
                                    className="mt-6 text-[#8892B0] max-w-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    I'm a passionate front-end developer with a strong background in building modern,
                                    responsive, and user-friendly web applications using technologies like React, Tailwind CSS,
                                    and Node. Currently, I'm focused on crafting accessible and high-performance interfaces that
                                    prioritize user experience.
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    className="flex items-center gap-6 mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
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
                                            onHoverStart={() => setIsHovering(true)}
                                            onHoverEnd={() => setIsHovering(false)}
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
                                    className="mt-16 text-center text-[#64FFDA]"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}