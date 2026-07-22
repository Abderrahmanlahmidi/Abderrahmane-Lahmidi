import { motion as Motion, useReducedMotion } from 'framer-motion';
import {
  BrainCircuit,
  Code2,
  SearchCheck,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';

const workflowStages = [
  { key: 'context', icon: BrainCircuit },
  { key: 'explore', icon: SearchCheck },
  { key: 'build', icon: Code2 },
  { key: 'verify', icon: ShieldCheck },
];

const workflowSignals = ['direction', 'acceleration', 'verification'];

export default function AIWorkflow() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const transition = {
    duration: shouldReduceMotion ? 0 : 0.68,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <section id="ai-workflow" className="motion-section motion-section--ink motion-ai-workflow">
      <div className="motion-section-shell">
        <SectionHeading
          index="01"
          label={t('ai_workflow.badge')}
          title={t('ai_workflow.title')}
          description={t('ai_workflow.description')}
        />

        <div className="motion-ai-layout">
          <Motion.article
            className="motion-ai-manifesto"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transition}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="motion-ai-manifesto-meta">
              <span>{t('ai_workflow.kicker')}</span>
              <span>{t('ai_workflow.collaboration')}</span>
            </div>

            <div className="motion-ai-mark" aria-hidden="true">
              <span>A</span>
              <span>I</span>
            </div>

            <h3>{t('ai_workflow.statement')}</h3>
            <p>{t('ai_workflow.body')}</p>

            <div className="motion-ai-review">
              <UserRoundCheck aria-hidden="true" />
              <span>{t('ai_workflow.reviewed')}</span>
            </div>
          </Motion.article>

          <Motion.div
            className="motion-ai-process"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.08 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="motion-ai-process-meta" aria-hidden="true">
              <span>{t('ai_workflow.process')}</span>
              <span>{t('ai_workflow.stage_count')}</span>
            </div>

            <ol className="motion-ai-stages">
              {workflowStages.map(({ key, icon }, index) => {
                const StageIcon = icon;

                return (
                  <li className="motion-ai-stage" key={key}>
                    <span className="motion-ai-stage-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="motion-ai-stage-icon" aria-hidden="true">
                      <StageIcon />
                    </span>
                    <span className="motion-ai-stage-copy">
                      <strong>{t(`ai_workflow.stages.${key}.title`)}</strong>
                      <span>{t(`ai_workflow.stages.${key}.description`)}</span>
                    </span>
                  </li>
                );
              })}
            </ol>
          </Motion.div>
        </div>

        <Motion.ul
          className="motion-ai-signals"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.14 }}
          viewport={{ once: true, margin: '-60px' }}
          aria-label={t('ai_workflow.signals_label')}
        >
          {workflowSignals.map((signal, index) => (
            <li key={signal}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{t(`ai_workflow.signals.${signal}`)}</strong>
            </li>
          ))}
        </Motion.ul>
      </div>
    </section>
  );
}
