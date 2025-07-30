import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '#home', number: '01.' },
  { name: 'About', path: '#about', number: '02.' },
  { name: 'Skills', path: '#skills', number: '03.' },
  { name: 'Certificates', path: '#certificates', number: '04.' },
  { name: 'Experiences', path: '#experiences', number: '05.' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const navigate = useNavigate();

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.path.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const handleSmoothScroll = (e, path) => {
    e.preventDefault();
    
    if (path === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const target = document.getElementById(path.substring(1));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    }

    setActiveSection(path);
    window.history.pushState(null, null, path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 right-4 z-50 text-[#64FFDA] text-2xl bg-[#0A192F]/90 p-2 rounded-full backdrop-blur-md shadow-lg"
        whileTap={{ scale: 0.95 }}
        aria-label="Open menu"
        animate={{ 
          opacity: isMenuOpen ? 0 : 1,
          transition: { duration: 0.2 }
        }}
      >
        <FiMenu size={24} />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full bg-[#0A192F] text-white z-50 shadow-xl p-6 flex flex-col menu-container"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#64FFDA] text-2xl"
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiX size={24} />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 mt-8 flex-grow">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleSmoothScroll(e, item.path)}
                  className={`text-lg transition-colors ${
                    activeSection === item.path 
                      ? 'text-[#64FFDA]' 
                      : 'text-[#8892B0] hover:text-[#64FFDA]'
                  }`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: 0.1 + index * 0.05 }
                  }}
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-[#64FFDA] mr-2">{item.number}</span>
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Contact Button - Fixed at the bottom */}
            <motion.button
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-[#64FFDA]/10 border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg hover:bg-[#64FFDA]/20 transition-colors mt-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1,
                y: 0,
                transition: { delay: 0.3 + navItems.length * 0.05 }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiMail />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}