import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiArrowLeft, FiPhone, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const navigate = useNavigate();
const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Hide button when scrolling
    setIsVisible(true);
    
    // Clear any existing timeout
    if (scrollTimeout) clearTimeout(scrollTimeout);
    
    // Show button after scrolling stops for 1 second
    setScrollTimeout(setTimeout(() => {
      setIsVisible(false);
    }, 4000));
  });
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6F1FF] overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#64FFDA] blur-[80px] opacity-20"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 rounded-full bg-[#FF6B6B] blur-[100px] opacity-20"></div>
      </motion.div>

      {/* Circular Home Button */}
 <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={() => navigate("/")}
          className="fixed top-6 left-6 z-10 p-3 rounded-full border-2 border-[#64FFDA] hover:border-white bg-[#0A192F]/50 backdrop-blur-sm text-[#64FFDA] hover:text-white transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(100, 255, 218, 0.1)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Return to home"
        >
          <motion.div
            animate={{ rotate: 0 }}
            whileHover={{ rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full relative">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#64FFDA] to-transparent opacity-50"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's <span className="text-[#64FFDA] relative">
              Connect
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-[#64FFDA]"
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#8892B0] text-lg md:text-xl max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 bg-[#112240]/30 p-8 rounded-xl border border-[#233554] backdrop-blur-sm relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#64FFDA]/10 blur-[60px]"></div>
            
            <motion.h2 
              className="text-2xl font-semibold text-[#E6F1FF] mb-6 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contact Details
              <motion.div 
                className="absolute bottom-0 left-0 w-20 h-0.5 bg-[#64FFDA]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <div className="space-y-6">
              <motion.a 
                href="mailto:dvabderrahmane@gmail.com" 
                className="flex items-center gap-4 group relative overflow-hidden p-2 rounded-lg"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-all duration-300 z-10">
                  <FiMail className="text-2xl text-[#64FFDA]" />
                </div>
                <div className="z-10">
                  <p className="text-sm text-[#8892B0]">Email</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">dvabderrahmane@gmail.com</p>
                </div>
                <div className="absolute inset-0 bg-[#64FFDA]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.a>

              <motion.a 
                href="tel:+212639311730"
                className="flex items-center gap-4 group relative overflow-hidden p-2 rounded-lg"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-all duration-300 z-10">
                  <FiPhone className="text-2xl text-[#64FFDA]" />
                </div>
                <div className="z-10">
                  <p className="text-sm text-[#8892B0]">Phone</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">+212 639311730</p>
                </div>
                <div className="absolute inset-0 bg-[#64FFDA]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.a>

              <motion.a 
                href="https://linkedin.com/in/lahmidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group relative overflow-hidden p-2 rounded-lg"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-all duration-300 z-10">
                  <FiLinkedin className="text-2xl text-[#64FFDA]" />
                </div>
                <div className="z-10">
                  <p className="text-sm text-[#8892B0]">LinkedIn</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">linkedin.com/in/lahmidi</p>
                </div>
                <div className="absolute inset-0 bg-[#64FFDA]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.a>

              <motion.a 
                href="https://github.com/Abderrahmanlahmidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group relative overflow-hidden p-2 rounded-lg"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-all duration-300 z-10">
                  <FiGithub className="text-2xl text-[#64FFDA]" />
                </div>
                <div className="z-10">
                  <p className="text-sm text-[#8892B0]">GitHub</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">github.com/Abderrahmanlahmidi</p>
                </div>
                <div className="absolute inset-0 bg-[#64FFDA]/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-[#112240]/30 p-8 rounded-xl border border-[#233554] backdrop-blur-sm relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#FF6B6B]/10 blur-[60px]"></div>
            
            <motion.h2 
              className="text-2xl font-semibold text-[#E6F1FF] mb-6 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Send Me a Message
              <motion.div 
                className="absolute bottom-0 left-0 w-20 h-0.5 bg-[#64FFDA]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm text-[#8892B0] mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition placeholder-[#8892B0]/50"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm text-[#8892B0] mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition placeholder-[#8892B0]/50"
                  placeholder="Your email"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <label htmlFor="subject" className="block text-sm text-[#8892B0] mb-2">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition placeholder-[#8892B0]/50"
                placeholder="Subject"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm text-[#8892B0] mb-2">Message *</label>
              <textarea 
                id="message" 
                rows="5"
                required
                className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition placeholder-[#8892B0]/50"
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              viewport={{ once: true }}
              className="pt-2"
            >
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#64FFDA]/10 border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg hover:bg-[#64FFDA]/20 transition-colors w-full relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiSend className="transition-transform group-hover:translate-x-1" />
                  <span>Send Message</span>
                </span>
                <span className="absolute inset-0 bg-[#64FFDA]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}