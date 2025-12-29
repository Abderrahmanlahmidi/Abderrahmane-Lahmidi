import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMail } from 'react-icons/fi';

const navItems = [
  { name: 'Home', path: '#home', number: '01.' },
  { name: 'About', path: '#about', number: '02.' },
  { name: 'Skills', path: '#skills', number: '03.' },
  { name: 'Certificates', path: '#certificates', number: '04.' },
  { name: 'Experiences', path: '#experiences', number: '05.' },
  { name: 'Projects', path: '#projects', number: '06.' },
  // { name: 'Contact', path: '#contact', number: '07.' },
];

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef();




  useEffect(() => {
    const handleScroll = () => {
      // Set active section
      const sections = navItems.map(item => document.getElementById(item.path.substring(1)));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setActiveSection(navItems[i].path);
          break;
        }
      }


      setIsVisible(true);
      

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      

      scrollTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);


  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.menu-container') && !e.target.closest('.menu-button')) {
        setIsVisible(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);


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

      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={() => setIsMenuOpen(true)}
            className="fixed top-4 right-4 z-50 text-[#64FFDA] border-2 border-[#64FFDA] text-2xl bg-[#0A192F]/90 p-2 rounded-full backdrop-blur-md shadow-lg menu-button"
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isMenuOpen ? 0 : 1,
              transition: { duration: 0.2 }
            }}
            exit={{ opacity: 0 }}
          >
            <FiMenu size={24} />
          </motion.button>
        )}
      </AnimatePresence>

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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-72 h-full bg-[#0A192F] text-white z-50 shadow-xl p-6 flex flex-col menu-container"
          >

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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}