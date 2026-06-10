import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FounderBrandCard } from './FounderBrandCard';
import { SocialBar } from './SocialBar';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.74, ease: [0.16, 1, 0.3, 1] } },
};

export function FounderHero({ founder }) {
  return (
    <motion.section
      id="home"
      className="ys-surface-main relative grid min-h-0 min-w-0 scroll-mt-28 items-center gap-6 overflow-hidden rounded-3xl border-2 p-4 sm:p-6 lg:min-h-[calc(100vh-3rem)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-7 lg:p-7"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <img
        src="/watermark-2.png"
        alt=""
        aria-hidden="true"
        className="ys-section-mark pointer-events-none absolute -bottom-40 -right-44 w-[34rem] max-w-none"
      />
      <motion.div className="relative min-w-0" variants={container}>
        <motion.div className="flex flex-wrap items-center gap-4 sm:flex-nowrap sm:gap-5" variants={item}>
          <img
            src="./swathi varun.jpg"
            alt="Swathi Varun"
            className="h-24 w-24 shrink-0 rounded-[1.45rem] border-4 border-yellow-400 object-cover object-center shadow-[0_18px_48px_-24px_rgba(234,179,8,0.5)] sm:h-28 sm:w-28 lg:h-32 lg:w-32"
          />
          <div className="min-w-0">
            <div className="ys-badge inline-flex max-w-full items-center gap-2 rounded-full border-2 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] sm:px-4 sm:text-xs sm:tracking-[0.26em]">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">Founder Portfolio</span>
            </div>
            <p className="ys-kicker mt-3 text-sm font-extrabold uppercase tracking-[0.18em]">Yellow Spoon</p>
          </div>
        </motion.div>

        <motion.h1 className="ys-heading mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl" variants={item}>
          {founder.name}
        </motion.h1>

        <motion.p className="ys-kicker mt-3 text-lg font-extrabold sm:text-xl lg:text-2xl" variants={item}>
          {founder.title}
        </motion.p>

        <motion.p className="ys-copy mt-3 max-w-2xl text-base leading-7 sm:text-lg" variants={item}>
          {founder.tagline}
        </motion.p>

        <motion.div className="ys-copy-soft mt-4 max-w-3xl space-y-3 text-sm leading-7 sm:text-base lg:space-y-2 lg:text-[0.95rem]" variants={item}>
          {founder.bio.map((line, index) => (
            <p key={line} className={index > 0 ? 'hidden sm:block' : undefined}>{line}</p>
          ))}
        </motion.div>

        <motion.div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center" variants={item}>
          <motion.a
            className="ys-button-primary inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.16em]"
            href={founder.primaryCta.href}
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 380, damping: 20 }}
          >
            {founder.primaryCta.label}
          </motion.a>
          <SocialBar links={founder.socialLinks} />
        </motion.div>
      </motion.div>

      <motion.div variants={item}>
        <FounderBrandCard founder={founder} />
      </motion.div>
    </motion.section>
  );
}