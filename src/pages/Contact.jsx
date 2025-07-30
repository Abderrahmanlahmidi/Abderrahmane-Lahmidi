import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiArrowLeft, FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


export default function ContactPage() {

  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6F1FF]">
      {/* Back button */}
      <motion.button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-10 flex items-center gap-2 text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
        <span>Back to Portfolio</span>
      </motion.button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's <span className="text-[#64FFDA]">Connect</span>
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
            className="space-y-8 bg-[#112240]/30 p-8 rounded-xl border border-[#233554] backdrop-blur-sm"
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#E6F1FF] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contact Details
            </motion.h2>

            <div className="space-y-6">
              <motion.a 
                href="mailto:your.email@example.com" 
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-colors">
                  <FiMail className="text-2xl text-[#64FFDA]" />
                </div>
                <div>
                  <p className="text-sm text-[#8892B0]">Email</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">dvabderrahmane@gmail.com</p>
                </div>
              </motion.a>

              <motion.a 
                href="tel:+1234567890"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-colors">
                  <FiPhone className="text-2xl text-[#64FFDA]" />
                </div>
                <div>
                  <p className="text-sm text-[#8892B0]">Phone</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">+212 639311730</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-colors">
                  <FiLinkedin className="text-2xl text-[#64FFDA]" />
                </div>
                <div>
                  <p className="text-sm text-[#8892B0]">LinkedIn</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">https://www.linkedin.com/in/lahmidi/</p>
                </div>
              </motion.a>

              <motion.a 
                href="https://github.com/Abderrahmanlahmidi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-3 bg-[#112240] rounded-lg group-hover:bg-[#64FFDA]/10 transition-colors">
                  <FiGithub className="text-2xl text-[#64FFDA]" />
                </div>
                <div>
                  <p className="text-sm text-[#8892B0]">GitHub</p>
                  <p className="text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">github.com/Abderrahmanlahmidi</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 bg-[#112240]/30 p-8 rounded-xl border border-[#233554] backdrop-blur-sm"
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#E6F1FF] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Send Me a Message
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="name" className="block text-sm text-[#8892B0] mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-sm text-[#8892B0] mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition"
                  placeholder="Your email"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="subject" className="block text-sm text-[#8892B0] mb-2">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition"
                placeholder="Subject"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <label htmlFor="message" className="block text-sm text-[#8892B0] mb-2">Message *</label>
              <textarea 
                id="message" 
                rows="5"
                required
                className="w-full bg-[#0A192F] border border-[#233554] rounded-lg px-4 py-3 text-[#E6F1FF] focus:border-[#64FFDA] focus:outline-none transition"
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="pt-2"
            >
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#64FFDA]/10 border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded-lg hover:bg-[#64FFDA]/20 transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend />
                <span>Send Message</span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}