import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import { useState, useEffect } from 'react';

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
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage, setCertificatesPerPage] = useState(3);

  // Update certificates per page based on screen size
  useEffect(() => {
    const updateCertificatesPerPage = () => {
      if (window.innerWidth < 640) {
        setCertificatesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCertificatesPerPage(2);
      } else {
        setCertificatesPerPage(3);
      }
    };

    updateCertificatesPerPage();
    window.addEventListener('resize', updateCertificatesPerPage);
    
    return () => window.removeEventListener('resize', updateCertificatesPerPage);
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, startIndex + certificatesPerPage);

  const handleCertificateOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setIsOverlayOpen(true);
  };

  const handleCertificateClose = () => {
    setIsOverlayOpen(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  const nextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Generate visible page numbers for responsive pagination
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisiblePages = window.innerWidth < 640 ? 3 : 5;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <section 
      id="certificates" 
      className="min-h-[calc(100vh-5rem)] bg-[#0A192F] text-[#E6F1FF] flex items-center py-16 md:py-20"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentCertificates.map((cert, index) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#112240]/50 rounded-lg border border-[#233554] hover:border-[#64FFDA]/30 transition-all overflow-hidden shadow-lg"
            >
              <div className="h-[200px] bg-[#233554] overflow-hidden relative">
                {cert.image ? (
                  <motion.img 
                    src={cert.image.src || cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain transition-transform duration-500 p-6"
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
                  <div className="flex gap-2">
                    {/* View Certificate Button */}
                    <motion.button
                      onClick={() => handleCertificateOpen(cert)}
                      className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors p-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <FiEye size={18} />
                    </motion.button>
                    
                    {/* External Link Button */}
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#64FFDA] hover:text-[#64FFDA]/80 transition-colors p-1"
                      aria-label={`Verify ${cert.title} certificate`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  </div>
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

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA]/10 to-[#64FFDA]/5 rounded-lg blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded border transition-all text-sm sm:text-base ${
                currentPage === 1
                  ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                  : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
              }`}
            >
              <FiChevronLeft size={16} />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Prev</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              {/* First page and ellipsis */}
              {visiblePages[0] > 1 && (
                <>
                  <button
                    onClick={() => goToPage(1)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                      currentPage === 1
                        ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                        : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                    }`}
                  >
                    1
                  </button>
                  {visiblePages[0] > 2 && (
                    <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#8892B0]">
                      ...
                    </span>
                  )}
                </>
              )}

              {/* Visible page numbers */}
              {visiblePages.map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                    currentPage === page
                      ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                      : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Last page and ellipsis */}
              {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                  {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                    <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#8892B0]">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => goToPage(totalPages)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded border transition-all text-xs sm:text-sm ${
                      currentPage === totalPages
                        ? 'border-[#64FFDA] bg-[#64FFDA]/10 text-[#64FFDA]'
                        : 'border-[#233554] text-[#8892B0] hover:border-[#64FFDA] hover:text-[#64FFDA]'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded border transition-all text-sm sm:text-base ${
                currentPage === totalPages
                  ? 'border-[#233554] text-[#8892B0] cursor-not-allowed'
                  : 'border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10'
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sm:hidden">Next</span>
              <FiChevronRight size={16} />
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-4"
          >
            <p className="text-[#8892B0] text-sm">
              Page {currentPage} of {totalPages} • Showing {currentCertificates.length} of {certificates.length} certificates
            </p>
          </motion.div>
        )}

        {/* Certificate Overlay */}
<AnimatePresence>
  {selectedCertificate && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOverlayOpen ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-[#0A192F]/95 z-50 flex items-center justify-center p-4"
      onClick={handleCertificateClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: isOverlayOpen ? 1 : 0.9,
          opacity: isOverlayOpen ? 1 : 0
        }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button at top-right */}
        <button
          onClick={handleCertificateClose}
          className="absolute -top-10 right-0 text-[#64FFDA] hover:text-white transition-colors p-2 z-10"
          aria-label="Close certificate view"
        >
          <FiX size={24} />
        </button>
        
        {/* Certificate image with reduced size and no background */}
        <div className="rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
          <img 
            src={selectedCertificate.image.src || selectedCertificate.image}
            alt={selectedCertificate.title}
            className="w-auto h-auto max-w-[75%] max-h-[70vh] object-contain"
          />
        </div>
        
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            {selectedCertificate.title}
          </h3>
          <p className="text-[#8892B0]">
            Issued by {selectedCertificate.issuer} • {selectedCertificate.date}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
}