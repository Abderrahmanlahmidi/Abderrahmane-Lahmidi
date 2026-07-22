import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiEye,
  FiX,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import SectionHeading from '../components/SectionHeading';
import figmaCert from '../assets/images/Certificates/FIGMA CF-1.png';
import gitCert from '../assets/images/Certificates/GIT-GITHUB CF-1.png';
import htmlCssCert from '../assets/images/Certificates/HTML-CSS CF-1.png';
import javascriptCert from '../assets/images/Certificates/JAVASCRIPT CF-1.png';
import linuxCert from '../assets/images/Certificates/LINUX CF-1.png';
import mongoDbCert from '../assets/images/Certificates/MONGODB-CF-1.png';
import reactCert from '../assets/images/Certificates/REACT BASICS CF-1.png';
import typescriptCert from '../assets/images/Certificates/TYPSCRIPT CF-1.png';
import uxCert from '../assets/images/Certificates/UX-DESIGN CF-1.png';
import wireframeCert from '../assets/images/Certificates/WIREFRAME CF-1.png';

const certificates = [
  {
    titleKey: 'figma',
    issuer: 'Google',
    date: 'January 31, 2024',
    skills: ['Figma', 'UI/UX'],
    link: 'https://www.coursera.org/account/accomplishments/verify/FERKX3V4GYBG',
    image: figmaCert,
  },
  {
    titleKey: 'git',
    issuer: 'Google',
    date: 'December 19, 2023',
    skills: ['GitHub', 'Version Control'],
    link: 'https://www.coursera.org/account/accomplishments/verify/B36TMBB3PRQQ',
    image: gitCert,
  },
  {
    titleKey: 'html_css',
    issuer: 'Meta',
    date: 'October 22, 2023',
    skills: ['HTML', 'CSS'],
    link: 'https://www.coursera.org/account/accomplishments/verify/K4YVL7DVV4XS',
    image: htmlCssCert,
  },
  {
    titleKey: 'js',
    issuer: 'Meta',
    date: 'November 30, 2023',
    skills: ['JavaScript'],
    link: 'https://www.coursera.org/account/accomplishments/verify/WU46BRYN7LGX',
    image: javascriptCert,
  },
  {
    titleKey: 'linux',
    issuer: 'IBM',
    date: 'November 5, 2023',
    skills: ['Linux', 'Shell'],
    link: 'https://www.coursera.org/account/accomplishments/verify/FY87C4XJMK4S',
    image: linuxCert,
  },
  {
    titleKey: 'mongodb',
    issuer: 'Mongo DB',
    date: 'January 7, 2024',
    skills: ['Mongodb', 'Databases'],
    link: 'https://www.coursera.org/account/accomplishments/verify/736TFXHTBXN6',
    image: mongoDbCert,
  },
  {
    titleKey: 'typescript',
    issuer: 'SCRIMBA',
    date: 'December 21, 2023',
    skills: ['Typescript', 'JavaScript'],
    link: 'https://www.coursera.org/account/accomplishments/verify/2CHKZ9M77X44',
    image: typescriptCert,
  },
  {
    titleKey: 'ux_foundations',
    issuer: 'Google',
    date: 'November 4, 2023',
    skills: ['UI/UX'],
    link: 'https://www.coursera.org/account/accomplishments/verify/EVLPBZTXC3KN',
    image: uxCert,
  },
  {
    titleKey: 'wireframes',
    issuer: 'Google',
    date: 'January 18, 2024',
    skills: ['UI/UX'],
    link: 'https://www.coursera.org/account/accomplishments/verify/46LULZ39VQYT',
    image: wireframeCert,
  },
  {
    titleKey: 'react',
    issuer: 'Meta',
    date: 'January 10, 2024',
    skills: ['React', 'Javascript'],
    link: 'https://www.coursera.org/account/accomplishments/verify/5G4N28EJV2RV',
    image: reactCert,
  },
];

function getCertificatesPerPage() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function Certificates() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage, setCertificatesPerPage] = useState(3);
  const previewTriggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const updatePagination = () => {
      const nextPageSize = getCertificatesPerPage();
      const nextTotalPages = Math.ceil(certificates.length / nextPageSize);

      setCertificatesPerPage(nextPageSize);
      setCurrentPage((page) => Math.min(page, nextTotalPages));
    };

    updatePagination();
    window.addEventListener('resize', updatePagination);
    return () => window.removeEventListener('resize', updatePagination);
  }, []);

  useEffect(() => {
    if (!selectedCertificate) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previewTrigger = previewTriggerRef.current;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previewTrigger?.focus();
    };
  }, [selectedCertificate]);

  const totalPages = Math.ceil(certificates.length / certificatesPerPage);
  const startIndex = (currentPage - 1) * certificatesPerPage;
  const currentCertificates = certificates.slice(startIndex, startIndex + certificatesPerPage);

  const handleCertificateOpen = (certificate, event) => {
    previewTriggerRef.current = event.currentTarget;
    setSelectedCertificate(certificate);
  };

  const handleCertificateClose = () => setSelectedCertificate(null);

  return (
    <section id="certificates" className="motion-section motion-section--ink motion-certificates-section">
      <div className="motion-section-shell motion-certificates-shell">
        <SectionHeading
          index="04"
          label={t('certificates.badge')}
          title={t('certificates.title')}
          description={t('certificates.description')}
        />

        <div className="motion-certificates-grid">
          {currentCertificates.map((certificate, index) => {
            const title = t(`certificates.items.${certificate.titleKey}`);
            const certificateNumber = String(startIndex + index + 1).padStart(2, '0');
            const titleId = `certificate-${certificate.titleKey}`;

            return (
              <Motion.article
                key={certificate.titleKey}
                className="motion-certificate-card"
                aria-labelledby={titleId}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  duration: shouldReduceMotion ? 0 : 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <div className="motion-certificate-media">
                  <span className="motion-certificate-number" aria-hidden="true">
                    {certificateNumber}
                  </span>
                  <img
                    src={certificate.image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="motion-certificate-content">
                  <div className="motion-certificate-meta">
                    <span>{certificate.issuer}</span>
                    <time>{certificate.date}</time>
                  </div>

                  <h3 id={titleId}>{title}</h3>

                  <ul className="motion-certificate-skills" aria-label={`${title} skills`}>
                    {certificate.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>

                  <div className="motion-certificate-actions">
                    <button
                      type="button"
                      className="motion-certificate-preview"
                      onClick={(event) => handleCertificateOpen(certificate, event)}
                      aria-label={`Preview ${title}`}
                      aria-haspopup="dialog"
                    >
                      <FiEye aria-hidden="true" />
                      <span>{t('certificates.preview')}</span>
                    </button>

                    <a
                      className="motion-certificate-verify"
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('certificates.verify')}: ${title}`}
                    >
                      <span>{t('certificates.verify')}</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Motion.article>
            );
          })}
        </div>

        {totalPages > 1 && (
          <nav className="motion-pagination" aria-label="Certificate pages">
            <button
              type="button"
              className="motion-pagination-button motion-pagination-previous"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={currentPage === 1}
              aria-label="Previous certificate page"
            >
              <FiChevronLeft aria-hidden="true" />
              <span>{t('certificates.previous')}</span>
            </button>

            <div className="motion-pagination-status" aria-live="polite">
              <span>{t('certificates.page')}</span>
              <strong>{String(currentPage).padStart(2, '0')}</strong>
              <span aria-hidden="true">/</span>
              <span>{String(totalPages).padStart(2, '0')}</span>
            </div>

            <button
              type="button"
              className="motion-pagination-button motion-pagination-next"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next certificate page"
            >
              <span>{t('certificates.next')}</span>
              <FiChevronRight aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <Motion.div
            className="motion-certificate-dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
            onClick={handleCertificateClose}
          >
            <Motion.div
              className="motion-certificate-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-dialog-title"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28, scale: shouldReduceMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 18, scale: shouldReduceMotion ? 1 : 0.98 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="motion-certificate-dialog-header">
                <div>
                  <span>{selectedCertificate.issuer}</span>
                  <h3 id="certificate-dialog-title">
                    {t(`certificates.items.${selectedCertificate.titleKey}`)}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="motion-certificate-dialog-close"
                  onClick={handleCertificateClose}
                  aria-label={`Close ${t(`certificates.items.${selectedCertificate.titleKey}`)} preview`}
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>

              <div className="motion-certificate-dialog-media">
                <img
                  src={selectedCertificate.image}
                  alt={t(`certificates.items.${selectedCertificate.titleKey}`)}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="motion-certificate-dialog-footer">
                <time>{selectedCertificate.date}</time>
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t('certificates.verify')}</span>
                  <FiExternalLink aria-hidden="true" />
                </a>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
