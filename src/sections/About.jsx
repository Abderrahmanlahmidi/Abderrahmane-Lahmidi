import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import profile from "../../src/assets/images/abderrahmane.jpeg";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="badge mb-4 flex w-fit">{t('about.badge')}</div>
          <h2 className="section-title !text-left">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 text-lg text-[var(--muted-foreground)] leading-relaxed font-medium">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[var(--foreground)] first-letter:mr-3 first-letter:float-left">{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p className="bg-[var(--foreground)] text-[var(--background)] p-6 rounded-2xl italic border-l-4 border-[var(--primary)]">{t('about.p3')}</p>
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-10 mt-12 bg-[var(--border)]/10 p-8 rounded-3xl border border-[var(--border)]">
              {[
                "JavaScript (ES6+)",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Framer Motion",
                "Git & GitHub",
              ].map((skill) => (
                <div key={skill} className="flex items-center group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)] mr-4 shadow-[0_0_8px_var(--primary)] group-hover:scale-125 transition-transform" />
                  <span className="text-[var(--foreground)] font-bold text-base tracking-tight group-hover:text-[var(--primary)] transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-full max-w-[450px] group">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-[var(--border)] bg-[var(--border)]/10 shadow-2xl transition-all duration-700 group-hover:rounded-[4rem] group-hover:border-[var(--primary)]">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src={profile}
                  alt="Abderrahmane Lahmidi"
                  loading="lazy"
                />
              </div>
              {/* Decorative background glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[80px] -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Feature Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[var(--background)] border border-[var(--border)] p-6 rounded-2xl shadow-xl animate-float backdrop-blur-md hidden sm:block">
                <div className="text-2xl font-black text-[var(--foreground)]">2+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[var(--muted-foreground)]">{t('about.years_exp')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
