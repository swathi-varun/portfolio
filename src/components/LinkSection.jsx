import { motion } from 'framer-motion';
import { LinkCard } from './LinkCard';
import { publicAsset } from '../utils/assets';

export function LinkSection({ section }) {
  return (
    <motion.section
      id={section.id}
      className="ys-surface-plain relative min-w-0 scroll-mt-28 overflow-hidden rounded-3xl border-2 p-5 sm:p-6"
      initial={{ opacity: 0, y: 32, scale: 0.982 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={publicAsset('watermark-1.png')}
        alt=""
        aria-hidden="true"
        className="ys-section-mark ys-section-mark--soft pointer-events-none absolute -right-44 -top-48 w-[30rem] max-w-none"
      />
      <div className="relative">
        <p className="ys-kicker text-xs font-bold uppercase tracking-[0.28em]">
          {section.eyebrow}
        </p>
        <h2 className="ys-heading mt-3 text-2xl font-black tracking-tight sm:text-3xl">
          {section.title}
        </h2>
        <p className="ys-copy mt-3 max-w-2xl text-sm leading-7 sm:text-base">
          {section.subtitle}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {section.links.map((item, index) => (
            <LinkCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
