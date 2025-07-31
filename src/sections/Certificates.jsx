import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import figmaCert from '../../src/assets/images/Certificates/FIGMA CF-1.png';
import gitCert from '../../src/assets/images/Certificates/GIT-GITHUB CF-1.png';
import htmlCssCert from '../../src/assets/images/Certificates/HTML-CSS CF-1.png';
import JavascriptCert from '../../src/assets/images/Certificates/JAVASCRIPT CF-1.png';
import LinuxCert from '../../src/assets/images/Certificates/LINUX CF-1.png';
import MongoDbCert from '../../src/assets/images/Certificates/MONGODB-CF-1.png';
import TypescriptCert from '../../src/assets/images/Certificates/TYPSCRIPT CF-1.png';
import UXCert from '../../src/assets/images/Certificates/UX-DESIGN CF-1.png';
import ReactCert from '../../src/assets/images/Certificates/REACT BASICS CF-1.png';



const certificates = [
  {
    title: "Figma Certification",
    issuer: "Google",
    date: "January 31, 2024",
    skills: ["Figma", "UI/UX"],
    link: "https://www.coursera.org/account/accomplishments/verify/FERKX3V4GYBG",
    image: figmaCert 
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    date: "December 19, 2023",
    skills: ["GitHub", "Version Control"],
    link: "https://www.coursera.org/account/accomplishments/verify/B36TMBB3PRQQ",
    image: gitCert 
  },
  {
    title: "HTML and CSS in depth",
    issuer: "Meta",
    date: "October 22, 2023",
    skills: ["HTML", "CSS"],
    link: "https://www.coursera.org/account/accomplishments/verify/K4YVL7DVV4XS",
    image: htmlCssCert 
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "November 30, 2023",
    skills: ["JavaScript"],
    link: "https://www.coursera.org/account/accomplishments/verify/WU46BRYN7LGX",
    image: JavascriptCert 
  },
  {
    title: "Linux Commands and Shell",
    issuer: "IBM",
    date: "November 5, 2023",
    skills: ["Linux", "Shell"],
    link: "https://www.coursera.org/account/accomplishments/verify/FY87C4XJMK4S",
    image: LinuxCert 
  },
  {
    title: "Introduction to MongoDB",
    issuer: "Mongo DB",
    date: "January 7, 2024",
    skills: ["Mongodb", "Databases"],
    link: "https://www.coursera.org/account/accomplishments/verify/736TFXHTBXN6",
    image: MongoDbCert 
  },
  {
    title: "Learn Typescript",
    issuer: "SCRIMBA",
    date: "December 21, 2023",
    skills: ["Typescript", "JavaScript"],
    link: "https://www.coursera.org/account/accomplishments/verify/2CHKZ9M77X44",
    image: TypescriptCert
  },
  {
    title: "Foundations of User Experience",
    issuer: "Google",
    date: "November 4, 2023",
    skills: ["UI/UX"],
    link: "https://www.coursera.org/account/accomplishments/verify/EVLPBZTXC3KN",
    image: UXCert 
  },
  {
    title: "Wireframes and L-F Prototypes",
    issuer: "Google",
    date: "January 18, 2024",
    skills: ["UI/UX"],
    link: "https://www.coursera.org/account/accomplishments/verify/46LULZ39VQYT",
    image: UXCert 
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "January 10, 2024",
    skills: ["React", "Javascript"],
    link: "https://www.coursera.org/account/accomplishments/verify/5G4N28EJV2RV",
    image: ReactCert 
  }
  
];  

export default function Certificates() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;



  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const currentItems = certificates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section 
      id="certificates" 
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
            <span className="text-[#64FFDA] mr-4">04.</span>
            Certifications
            <span className="hidden md:block h-px bg-[#233554] flex-grow ml-6 max-w-xs"></span>
          </h2>
          <p className="text-[#8892B0] max-w-2xl">
            My professional certifications that validate my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#112240]/50 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all overflow-hidden"
            >
              <div className="h-[230px] bg-[#233554] overflow-hidden relative">
                {cert.image ? (
                  <motion.img 
                    src={cert.image.src || cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#8892B0]">
                    Certificate Image
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-80"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-[#E6F1FF]">{cert.title}</h3>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <FiExternalLink />
                  </a>
                </div>

                <div className="flex justify-between text-sm text-[#8892B0] mb-4">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="text-xs text-[#64FFDA] bg-[#64FFDA]/10 px-2 py-1 rounded"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>


              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA]/10 to-[#64FFDA]/5 rounded-lg blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>


        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === index
                    ? 'bg-[#64FFDA] text-[#0A192F]'
                    : 'bg-[#112240] text-[#E6F1FF] hover:bg-[#64FFDA]/20'
                }`}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

    
      </div>
    </section>
  );
}