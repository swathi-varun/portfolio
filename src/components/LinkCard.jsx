import {
  ArrowUpRight,
  FileText,
  Globe,
  IdCard,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Youtube,
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  catalogue: FileText,
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  map: MapPin,
  message: MessageCircle,
  phone: Phone,
  portfolio: IdCard,
  reviews: Star,
  website: Globe,
  whatsapp: MessageCircle,
  youtube: Youtube,
};

export function LinkCard({ item, index = 0 }) {
  const Icon = iconMap[item.icon] ?? Globe;

  return (
    <motion.a
      className={[
        'ys-link-card group relative flex min-h-40 min-w-0 items-start gap-4 rounded-2xl border-2 p-5',
        item.featured ? 'ys-link-card--featured' : '',
      ].join(' ')}
      href={item.href}
      rel="noreferrer"
      target="_blank"
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      whileHover={{ y: -5, scale: 1.016, transition: { type: 'spring', stiffness: 340, damping: 22 } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.12 } }}
    >
      {item.badge ? (
        <span className="ys-link-badge absolute right-4 top-4 rounded-full border-2 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em]">
          {item.badge}
        </span>
      ) : null}

      <div className={[
        'mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
        item.featured ? 'ys-link-icon ys-link-icon--featured' : 'ys-link-icon'
      ].join(' ')}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="min-w-0 flex-1 pr-6">
        <h3 className="ys-heading text-base font-extrabold sm:text-lg">{item.title}</h3>
        <p className="ys-copy mt-2 text-sm leading-6">{item.description}</p>
      </div>

      <motion.span
        className="ys-kicker mt-1 flex h-5 w-5 shrink-0 items-center justify-center"
        initial={{ opacity: 0, x: -4, y: 4 }}
        whileHover={{ opacity: 1, x: 2, y: -2 }}
        transition={{ duration: 0.22 }}
      >
        <ArrowUpRight className="h-5 w-5" />
      </motion.span>
    </motion.a>
  );
}