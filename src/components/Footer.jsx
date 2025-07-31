import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-[#E6F1FF] border-t border-[#233554]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[#64FFDA] text-lg mb-2">Abderrahmane Lahmidi</p>
            <p className="text-[#8892B0] text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          {/* Middle - Navigation */}
          <nav className="hidden md:flex gap-6">
            {['Home', 'About', 'Skills', 'Certificates', 'Experiences', 'Projects'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side - Social links ..*/}
          <div className="flex gap-6">
            <a 
              href="https://github.com/Abderrahmanlahmidi" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xl"
            >
              <FiGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/lahmidi/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xl"
            >
              <FiLinkedin />
            </a>
            <a 
              href="dvabderrahman@gmail.com" 
              aria-label="Email"
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xl"
            >
              <FiMail />
            </a>
            <a 
              href="https://x.com/Abderra47978756" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xl"
            >
              <FiTwitter />
            </a>
          </div>
        </motion.div>

        {/* Mobile navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="md:hidden mt-8 pt-8 border-t border-[#233554]"
        >
          <nav className="flex justify-center gap-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;