import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiExternalLink, FiDownload } from 'react-icons/fi';
import resumeData from '../data/dataResume.json';

const iconComponents = {
  phone: FiPhone,
  email: FiMail,
  linkedin: FiLinkedin,
  github: FiGithub
};

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0A192F] text-[#E6F1FF] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with Profile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          <div className="w-40 h-40 rounded-full border-4 border-[#64FFDA] overflow-hidden shadow-lg">
            <div className="w-full h-full bg-[#112240] flex items-center justify-center text-4xl text-[#64FFDA]">
              <img src={resumeData.personalInfo.profileImage} alt='profile' />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-[#64FFDA] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {resumeData.personalInfo.name}
            </motion.h1>
            <motion.h2 
              className="text-2xl sm:text-3xl text-[#CCD6F6] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {resumeData.personalInfo.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <button className="flex items-center gap-2 mx-auto md:mx-0 bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded-lg font-semibold hover:bg-[#48AFF0] transition-colors">
                <FiDownload />
                <span>Télécharger le CV</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div 
            className="md:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">CONTACT</h3>
              <motion.ul className="space-y-3" variants={containerVariants}>
                {resumeData.personalInfo.contact.map((item, index) => {
                  const Icon = iconComponents[item.icon];
                  return (
                    <motion.li key={index} variants={itemVariants} className="flex items-center gap-3">
                      <Icon className="text-[#64FFDA] min-w-[20px]" />
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>

            {/* Skills */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">COMPÉTENCES</h3>
              <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold text-[#CCD6F6]">FRONTEND:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.frontend}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold text-[#CCD6F6]">UI/UX DESIGN:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.uiUx}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold text-[#CCD6F6]">MÉTHODOLOGIES:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.methodologies}</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h4 className="font-semibold text-[#CCD6F6]">CONTROLE DE VERSION:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.versionControl}</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Languages */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">LANGUES</h3>
              <motion.ul className="space-y-2 text-[#8892B0]" variants={containerVariants}>
                {resumeData.languages.map((language, index) => (
                  <motion.li key={index} variants={itemVariants}>{language}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="md:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Experience */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">EXPÉRIENCE</h3>
              <motion.div className="space-y-6" variants={containerVariants}>
                {resumeData.experience.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <h4 className="font-bold text-[#CCD6F6]">{exp.company}</h4>
                    <p className="text-[#8892B0]">{exp.position} • {exp.period}</p>
                    <motion.ul className="mt-2 space-y-2 text-[#8892B0] list-disc list-inside" variants={containerVariants}>
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li key={i} variants={itemVariants}>{resp}</motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Projects */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">PROJETS RÉALISÉS</h3>
              <motion.div className="space-y-6" variants={containerVariants}>
                {resumeData.projects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <h4 className="font-bold text-[#CCD6F6] flex items-center gap-2">
                      {project.name}
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="text-[#64FFDA] hover:text-[#48AFF0] transition-colors" />
                      </a>
                    </h4>
                    <p className="text-[#8892B0]">Technologies : {project.technologies}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Education */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">EDUCATION</h3>
              <motion.div className="space-y-4" variants={containerVariants}>
                {resumeData.education.map((edu, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <h4 className="font-bold text-[#CCD6F6]">{edu.institution}</h4>
                    {edu.period && <p className="text-[#8892B0]">{edu.period}</p>}
                    {edu.details.map((detail, i) => (
                      <p key={i} className="text-[#8892B0]">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={sectionVariants} className="bg-[#112240] p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4 pb-2 border-b border-[#233554]">CERTIFICATS</h3>
              <motion.ul className="space-y-2 text-[#8892B0] list-disc list-inside" variants={containerVariants}>
                {resumeData.certifications.map((cert, index) => (
                  <motion.li key={index} variants={itemVariants}>{cert}</motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}