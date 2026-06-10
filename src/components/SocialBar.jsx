import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MessageCircle, Phone, Youtube } from 'lucide-react';

const iconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
};

export function SocialBar({ links }) {
  return (
    <div className="flex flex-nowrap items-center gap-2">
      {links.map((link, i) => {
        const Icon = iconMap[link.key];
        const isLocal = link.href.startsWith('mailto:') || link.href.startsWith('tel:');

        return (
          <motion.a
            key={link.label}
            aria-label={link.label}
            className="ys-social-icon inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border shadow-sm"
            href={link.href}
            rel={isLocal ? undefined : 'noreferrer'}
            target={isLocal ? undefined : '_blank'}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            whileHover={{ y: -4, scale: 1.14, transition: { type: 'spring', stiffness: 420, damping: 18 } }}
            whileTap={{ scale: 0.92 }}
          >
            <Icon className="h-4 w-4" />
          </motion.a>
        );
      })}
    </div>
  );
}
