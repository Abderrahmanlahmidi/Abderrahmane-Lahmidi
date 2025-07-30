import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiExternalLink, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#0A192F] text-[#E6F1FF] relative overflow-hidden">
      {/* Intro Screen */}
    {showIntro && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A192F]"
  >
    <div className="relative text-center">
      {/* Main text with elegant reveal */}
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
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
        transition={{ delay: 1, duration: 0.8 }}
      >
        {"I build digital experiences".split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2 + i * 0.03,
              duration: 0.4
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Minimal progress indicator */}
      <div className="relative h-[2px] w-64 mx-auto bg-[#233554] overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: 1 }}
          transition={{ 
            delay: 1.8,
            duration: 2,
            ease: [0.65, 0, 0.35, 1]
          }}
          className="absolute top-0 left-0 h-full w-full bg-[#64FFDA]"
        />
      </div>

      {/* Signature reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="mt-12 text-[#8892B0] text-sm tracking-widest"
      >
        ABDERRAHMANE LAHMIDI
      </motion.div>
    </div>
  </motion.div>
)}
  
      {/* Actual Hero Content */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center min-h-screen"
        >
          <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <p className="text-[#64FFDA] text-sm md:text-base mb-2">Hi, my name is</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Abderrahmane Lahmidi.
              </h1>
              <h2 className="text-3xl md:text-5xl text-[#8892B0] mt-2">
                I build things for the web.
              </h2>
              <p className="mt-6 text-[#8892B0] max-w-md">
                I'm a passionate front-end developer with a strong background in building modern,
                responsive, and user-friendly web applications using technologies like React, Tailwind CSS,
                and Node. Currently, I'm focused on crafting accessible and high-performance interfaces that
                prioritize user experience.
              </p>

              <div className="flex items-center gap-6 mt-8">
                <a
                  href="#projects"
                  className="border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded hover:bg-[#64FFDA1A] transition"
                >
                  Check out my work
                </a>

                <a
                  href="https://github.com/Abderrahmanlahmidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] text-xl hover:scale-110 transition"
                >
                  <FiGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/lahmidi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] text-xl hover:scale-110 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>

                <a
                  href="https://yourportfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] text-xl hover:scale-110 transition"
                  aria-label="Portfolio"
                >
                  <FiExternalLink />
                </a>
              </div>

              <motion.div
                className="mt-16 text-center text-[#64FFDA]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FiChevronDown size={24} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
