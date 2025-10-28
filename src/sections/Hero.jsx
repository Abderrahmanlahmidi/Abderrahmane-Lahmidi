import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin } from 'react-icons/fi';


export default function Hero() {

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
            </AnimatePresence>
        </section>
    );
}