import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden bg-[var(--background)]">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10">
            {t('footer.cta_title')} <br />
            <span className="gradient-text">{t('footer.cta_highlight')}</span>
          </h2>
          <motion.a
            href="mailto:contact@abderrahmanelahmidi.com"
            className="next-button-primary text-xl px-12 py-5 shadow-2xl shadow-primary/20 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('footer.contact_button')}
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start border-t border-[var(--border)] pt-16">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black tracking-tighter mb-4">
              A.LAH<span className="text-[var(--primary)]">.</span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs mx-auto md:mx-0 font-medium opacity-80">
              {t('footer.bio_short')}
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              {[
                { icon: FiGithub, href: "https://github.com/Abderrahmanlahmidi" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/lahmidi/" },
                { icon: FiTwitter, href: "https://x.com/Abderra47978756" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border)] text-[var(--muted-foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--foreground)]">{t('footer.navigation')}</h4>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
              {["home", "about", "skills", "projects", "certificates", "experience"].map(item => (
                <a key={item} href={`#${item}`} className="text-[10px] font-black text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest">
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--foreground)]">{t('footer.status')}</h4>
            <div className="flex items-center gap-3 bg-[var(--border)]/10 px-6 py-3 rounded-2xl border border-[var(--border)]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-widest">{t('hero.available')}</span>
            </div>
            <p className="text-[10px] font-black text-[var(--muted-foreground)] uppercase tracking-[0.2em] mt-auto opacity-50">
              &copy; {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
