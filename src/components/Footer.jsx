import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
          <div className="text-center md:text-left">
            <p className="text-[#64FFDA] text-lg mb-2">Abderrahmane Lahmidi</p>
            <p className="text-[#8892B0] text-sm">
              &copy; {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>

          <nav className="hidden md:flex gap-6">
            {[
              "home",
              "about",
              "skills",
              "certificates",
              "experience",
              "projects",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-sm capitalize"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </nav>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:hidden mt-8 pt-6 border-t border-[#233554]"
        >
          <nav className="flex flex-wrap justify-center gap-3 px-4">
            {[
              "home",
              "about",
              "skills",
              "certificates",
              "experience",
              "projects",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors text-xs sm:text-sm px-2 py-1 capitalize"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item}`)}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
