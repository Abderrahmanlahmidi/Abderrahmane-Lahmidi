import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiExternalLink, FiLinkedin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

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
             <motion.h1 
  className="text-4xl md:text-6xl font-bold text-white leading-tight overflow-hidden inline-block"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.07 }
    }
  }}
>
  {"Abderrahmane Lahmidi.".split("").map((char, i) => (
    <motion.span
      key={i}
      className="inline-block whitespace-pre"
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30,
          letterSpacing: "-0.5em"  // Starts with tight spacing
        },
        visible: {
          opacity: 1,
          y: 0,
          letterSpacing: "0em",  // Ends with normal spacing
          transition: { 
            type: "spring",
            stiffness: 400,
            damping: 15,
            mass: 0.5
          }
        }
      }}
      custom={i}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.h1>
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
  {/* Projects Button */}
  <motion.div className="relative group">
    <motion.a
      href="#projects"
      className="relative overflow-hidden border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Check work</span>
      <motion.span
        className="absolute inset-0 bg-[#64FFDA]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
      />
    </motion.a>
   
  </motion.div>

  {/* GitHub Link */}
  <motion.div className="relative group">
    <motion.a
      href="https://github.com/Abderrahmanlahmidi"
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[#64FFDA] text-xl"
      aria-label="GitHub"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiGithub className="relative z-10" />
      <motion.span
        className="absolute bottom-0 left-1/2 w-0 h-px bg-[#64FFDA] group-hover:w-full transform -translate-x-1/2 transition-all duration-300"
      />
    </motion.a>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#112240] text-[#E6F1FF] text-sm px-3 py-1 rounded whitespace-nowrap border border-[#64FFDA]/30">
      Visit my GitHub
      <div className="absolute top-full left-1/2 w-2 h-2 bg-[#112240] border-r border-b border-[#64FFDA]/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    </div>
  </motion.div>

  {/* LinkedIn Link */}
  <motion.div className="relative group">
    <motion.a
      href="https://www.linkedin.com/in/lahmidi/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[#64FFDA] text-xl"
      aria-label="LinkedIn"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiLinkedin className="relative z-10" />
      <motion.span
        className="absolute bottom-0 left-1/2 w-0 h-px bg-[#64FFDA] group-hover:w-full transform -translate-x-1/2 transition-all duration-300"
      />
    </motion.a>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#112240] text-[#E6F1FF] text-sm px-3 py-1 rounded whitespace-nowrap border border-[#64FFDA]/30">
      Connect on LinkedIn
      <div className="absolute top-full left-1/2 w-2 h-2 bg-[#112240] border-r border-b border-[#64FFDA]/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    </div>
  </motion.div>

  {/* Portfolio Link */}
  <motion.div className="relative group">
    <motion.a
      onClick={() => navigate("/resume")}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-[#64FFDA] text-xl"
      aria-label="Portfolio"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiExternalLink className="relative z-10" />
      <motion.span
        className="absolute bottom-0 left-1/2 w-0 h-px bg-[#64FFDA] group-hover:w-full transform -translate-x-1/2 transition-all duration-300"
      />
    </motion.a>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-[#112240] text-[#E6F1FF] text-sm px-3 py-1 rounded whitespace-nowrap border border-[#64FFDA]/30">
      View my Resume
      <div className="absolute top-full left-1/2 w-2 h-2 bg-[#112240] border-r border-b border-[#64FFDA]/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
    </div>
  </motion.div>
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
