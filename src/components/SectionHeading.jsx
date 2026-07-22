import { motion as Motion, useReducedMotion } from 'framer-motion';

export default function SectionHeading({ index, label, title, description }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Motion.header
      className="motion-section-heading"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="motion-section-index" aria-hidden="true">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <div className="motion-section-heading-copy">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </Motion.header>
  );
}
