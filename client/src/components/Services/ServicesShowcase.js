import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRegFileAlt, FaWallet, FaChartLine, FaUsers, FaCalendarCheck, FaRegComments, FaCalculator } from 'react-icons/fa';
import './Services.css';
import { servicesData } from './servicesData';
import { servicesContainer, serviceItemShowcase, reducedMotionImmediate } from './serviceAnimations';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { AnimatedText } from '../Animated/AnimatedText';
import { Link, useNavigate } from 'react-router-dom';

const iconMap = [FaCalculator, FaRegFileAlt, FaChartLine, FaWallet, FaUsers, FaCalendarCheck];

function ServicesShowcase() {
  const reduce = usePrefersReducedMotion();
  const navigate = useNavigate();
  const innerRef = React.useRef(null);
  const isSmall = useMediaQuery('(max-width: 900px)');
  const inView = useInView(innerRef, { once: true, amount: isSmall ? 0.2 : 0.45 });
  const skipAnim = reduce || isSmall; // show immediately on small screens or reduced motion

  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };
  const line = {
    hidden: { y: 30, opacity: 0, filter: 'blur(6px)' },
    visible: { y: 0, opacity: 1, filter: 'blur(0)', transition: { duration: 0.6, ease: [0.22,0.9,0.24,1] } }
  };

  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div ref={innerRef} className="services-showcase-inner">
        <motion.div className="services-left"
          variants={skipAnim ? undefined : textContainer}
            initial={skipAnim ? undefined : 'hidden'}
            animate={skipAnim ? undefined : (inView ? 'visible' : 'hidden')}
        >
          <motion.h3 variants={skipAnim ? undefined : line} style={{ marginTop: 0, color: 'var(--color-muted)', fontSize: '0.95rem', letterSpacing: '1px' }}>
            {skipAnim ? <span>Våra tjänster</span> : <AnimatedText text="Våra tjänster" as="span" />}
          </motion.h3>
          <motion.h2 variants={skipAnim ? undefined : line} style={{ margin: '8px 0 12px', fontSize: '48px', lineHeight: 1.02, color: 'var(--color-text)', fontWeight: 500 }}>
            {skipAnim ? <span>Vad kan vi erbjuda dig som kund</span> : <AnimatedText text="Vad kan vi erbjuda dig som kund" as="span" delay={0.15} />}
          </motion.h2>
          <motion.div variants={skipAnim ? undefined : line} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <a
              href="/tjanster"
              onClick={(e) => {
                e.preventDefault();
                navigate('/tjanster');
                setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 8);
              }}
              style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              {skipAnim ? <span>Läs om våra tjänster här</span> : <AnimatedText text="Läs om våra tjänster här" as="span" delay={0.3} />} <span style={{ fontSize: 18 }}>→</span>
            </a>
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            className="services-grid"
            variants={skipAnim ? undefined : servicesContainer(0.1)}
            initial={skipAnim ? undefined : 'hidden'}
            animate={skipAnim ? undefined : (inView ? 'visible' : 'hidden')}
          >
            {servicesData.map((s, i) => {
              const Icon = iconMap[i] || FaRegComments;
              return (
                <motion.article
                  className="service-card"
                  key={s.title}
                  variants={reduce ? undefined : serviceItemShowcase}
                  initial={reduce ? { opacity: 1 } : undefined}
                  whileHover={reduce ? undefined : 'hover'}
                >
                  <div className="service-top">
                    <div className="service-icon" aria-hidden="true"><Icon className="service-svg" /></div>
                    <h3>{s.title}</h3>
                  </div>
                  <p className="service-desc">{s.excerpt}</p>
                  <div className="divider" />
                  <div className="service-cta">
                    <Link className="btn-outline" to="/tjanster" aria-label={`Läs mer om ${s.title}`} onClick={() => setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 8)}>
                      <span className="btn-label">Läs mer här</span>
                      <svg className="btn-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                        <path d="M1 6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 2l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;
