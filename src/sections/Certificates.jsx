import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiEye } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
  { titleKey: "figma", issuer: "Google", date: "January 31, 2024", skills: ["Figma", "UI/UX"], link: "https://www.coursera.org/account/accomplishments/verify/FERKX3V4GYBG", image: figmaCert },
  { titleKey: "git", issuer: "Google", date: "December 19, 2023", skills: ["GitHub", "Version Control"], link: "https://www.coursera.org/account/accomplishments/verify/B36TMBB3PRQQ", image: gitCert },
  { titleKey: "html_css", issuer: "Meta", date: "October 22, 2023", skills: ["HTML", "CSS"], link: "https://www.coursera.org/account/accomplishments/verify/K4YVL7DVV4XS", image: htmlCssCert },
  { titleKey: "js", issuer: "Meta", date: "November 30, 2023", skills: ["JavaScript"], link: "https://www.coursera.org/account/accomplishments/verify/WU46BRYN7LGX", image: JavascriptCert },
  { titleKey: "linux", issuer: "IBM", date: "November 5, 2023", skills: ["Linux", "Shell"], link: "https://www.coursera.org/account/accomplishments/verify/FY87C4XJMK4S", image: LinuxCert },
  { titleKey: "mongodb", issuer: "Mongo DB", date: "January 7, 2024", skills: ["Mongodb", "Databases"], link: "https://www.coursera.org/account/accomplishments/verify/736TFXHTBXN6", image: MongoDbCert },
  { titleKey: "typescript", issuer: "SCRIMBA", date: "December 21, 2023", skills: ["Typescript", "JavaScript"], link: "https://www.coursera.org/account/accomplishments/verify/2CHKZ9M77X44", image: TypescriptCert },
  { titleKey: "ux_foundations", issuer: "Google", date: "November 4, 2023", skills: ["UI/UX"], link: "https://www.coursera.org/account/accomplishments/verify/EVLPBZTXC3KN", image: UXCert },
  { titleKey: "wireframes", issuer: "Google", date: "January 18, 2024", skills: ["UI/UX"], link: "https://www.coursera.org/account/accomplishments/verify/46LULZ39VQYT", image: UXCert },
  { titleKey: "react", issuer: "Meta", date: "January 10, 2024", skills: ["React", "Javascript"], link: "https://www.coursera.org/account/accomplishments/verify/5G4N28EJV2RV", image: ReactCert }
];

export default function Certificates() {
  const { t } = useTranslation();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage, setCertificatesPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCertificatesPerPage(1);
      else if (window.innerWidth < 1024) setCertificatesPerPage(2);
      else setCertificatesPerPage(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, startIndex + certificatesPerPage);

  const handleCertificateOpen = (cert) => { setSelectedCertificate(cert); setIsOverlayOpen(true); };
  const handleCertificateClose = () => { setIsOverlayOpen(false); setTimeout(() => setSelectedCertificate(null), 300); };

  return (
    <section id="certificates" className="py-24 md:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="badge mx-auto mb-4 flex w-fit">{t('certificates.badge')}</div>
          <h2 className="section-title">
            {t('certificates.title')}
          </h2>
          <p className="section-subtitle">
            {t('certificates.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCertificates.map((cert, index) => (
            <motion.div
              key={startIndex + index}
              className="next-card group flex flex-col bg-[var(--card)] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-[260px] relative overflow-hidden bg-[var(--border)]/10 flex items-center justify-center p-8">
                <img
                  src={cert.image.src || cert.image}
                  alt={t(`certificates.items.${cert.titleKey}`)}
                  className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <button
                    onClick={() => handleCertificateOpen(cert)}
                    className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[var(--foreground)] hover:bg-white/40 transition-all shadow-xl"
                  >
                    <FiEye size={20} />
                  </button>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">{t(`certificates.items.${cert.titleKey}`)}</h3>

                <div className="flex justify-between items-center text-[10px] font-black text-[var(--muted-foreground)] uppercase tracking-[0.2em] mb-6">
                  <span className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full shadow-[0_0_8px_var(--primary)]" />
                    {cert.issuer}
                  </span>
                  <span className="bg-[var(--border)]/20 px-3 py-1 rounded-full">{cert.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-[9px] uppercase font-black px-2.5 py-1 rounded-md bg-[var(--border)]/40 text-[var(--muted-foreground)] tracking-tight">
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="next-button-secondary w-full py-4 text-center text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 mt-auto group/btn"
                  whileHover={{ scale: 1.02 }}
                >
                  <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  {t('certificates.verify')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 border-t border-[var(--border)] pt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <FiChevronLeft size={16} />
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Prev</span>
            </button>

            <div className="text-sm font-black text-[var(--muted-foreground)] uppercase tracking-widest">
              Page <span className="text-[var(--foreground)]">{currentPage}</span> / {totalPages}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] hover:bg-[var(--border)] transition-all ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Next</span>
              <FiChevronRight size={16} />
            </button>
          </div>
        )}

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
              onClick={handleCertificateClose}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-5xl w-full p-2 bg-[var(--background)] rounded-2xl relative shadow-2xl border border-[var(--border)]"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={handleCertificateClose}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
                >
                  <FiX size={32} />
                </button>
                <img
                  src={selectedCertificate.image.src || selectedCertificate.image}
                  alt={t(`certificates.items.${selectedCertificate.titleKey}`)}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
