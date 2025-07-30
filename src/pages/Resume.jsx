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
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6F1FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-40 h-40 rounded-full border-4 border-[#64FFDA] overflow-hidden">
            <div className="w-full h-full bg-[#112240] flex items-center justify-center">
              <img src={resumeData.personalInfo.profileImage} alt='profile' className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#64FFDA] mb-2">
              {resumeData.personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-[#CCD6F6] mb-4">
              {resumeData.personalInfo.title}
            </h2>
            <button className="flex items-center gap-2 mx-auto md:mx-0 bg-[#0A192F] text-[#64FFDA] border-1 border-[#64FFDA] px-6 py-3 rounded-lg font-semibold">
              <FiDownload />
              <span>Télécharger le CV</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            {/* Contact */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">CONTACT</h3>
              <ul className="space-y-3">
                {resumeData.personalInfo.contact.map((item, index) => {
                  const Icon = iconComponents[item.icon];
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <Icon className="text-[#64FFDA] min-w-[20px]" />
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Skills */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">COMPÉTENCES</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#CCD6F6]">FRONTEND:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.frontend}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#CCD6F6]">UI/UX DESIGN:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.uiUx}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#CCD6F6]">MÉTHODOLOGIES:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.methodologies}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#CCD6F6]">CONTROLE DE VERSION:</h4>
                  <p className="text-[#8892B0]">{resumeData.skills.versionControl}</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">LANGUES</h3>
              <ul className="space-y-2 text-[#8892B0]">
                {resumeData.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">EXPÉRIENCE</h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-[#CCD6F6]">{exp.company}</h4>
                    <p className="text-[#8892B0]">{exp.position} • {exp.period}</p>
                    <ul className="mt-2 space-y-2 text-[#8892B0] list-disc list-inside">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">PROJETS RÉALISÉS</h3>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-[#CCD6F6] flex items-center gap-2">
                      {project.name}
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className="text-[#64FFDA]" />
                      </a>
                    </h4>
                    <p className="text-[#8892B0]">Technologies : {project.technologies}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">EDUCATION</h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-[#CCD6F6]">{edu.institution}</h4>
                    {edu.period && <p className="text-[#8892B0]">{edu.period}</p>}
                    {edu.details.map((detail, i) => (
                      <p key={i} className="text-[#8892B0]">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-[#0A192F] p-6 rounded-xl border border-[#64FFDA]">
              <h3 className="text-xl font-bold text-[#64FFDA] mb-4">CERTIFICATS</h3>
              <ul className="space-y-2 text-[#8892B0] list-disc list-inside">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}