import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { publicAsset } from '../utils/assets';

const iconMap = {
  mail: Mail,
  map: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
};

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

function SnapshotCard({ card }) {
  const Icon = iconMap[card.icon] ?? Mail;

  return (
    <motion.a
      className="ys-mini-card flex min-w-0 items-start gap-4 rounded-2xl border p-4 text-sm font-bold leading-6 sm:p-5"
      href={card.href}
      rel={card.external ? 'noreferrer' : undefined}
      target={card.external ? '_blank' : undefined}
      variants={cardItem}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
    >
      <span className="ys-mini-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 break-words">
        <span className="ys-mini-card-label block text-xs uppercase tracking-[0.22em]">{card.label}</span>
        {card.value}
      </span>
    </motion.a>
  );
}

export function FounderSnapshot({ snapshot }) {
  return (
    <motion.section
      id="snapshot"
      className="ys-surface-soft relative grid scroll-mt-28 gap-4 overflow-hidden rounded-3xl border-2 p-5 sm:p-6 lg:grid-cols-3"
      initial={{ opacity: 0, y: 32, scale: 0.982 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={publicAsset('watermark-2.png')}
        alt=""
        aria-hidden="true"
        className="ys-section-mark ys-section-mark--soft pointer-events-none absolute -bottom-36 -left-40 w-96 max-w-none"
      />
      <div className="lg:col-span-1">
        <p className="ys-kicker text-xs font-bold uppercase tracking-[0.28em]">{snapshot.eyebrow}</p>
        <h2 className="ys-heading mt-3 text-2xl font-black tracking-tight sm:text-3xl">
          {snapshot.title}
        </h2>
      </div>
      <motion.div
        className="grid gap-3 sm:grid-cols-2 lg:col-span-2"
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {snapshot.cards.map((card) => (
          <SnapshotCard key={card.label} card={card} />
        ))}
      </motion.div>
    </motion.section>
  );
}