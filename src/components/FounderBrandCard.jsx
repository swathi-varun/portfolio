import { motion } from 'framer-motion';
import { Award, Leaf, MapPin, ShieldCheck, Wheat } from 'lucide-react';
import { publicAsset } from '../utils/assets';

const highlightIcons = [Leaf, Wheat, ShieldCheck, Award];
const fruitAssetMap = {
  almond: publicAsset('dryfruit-almond.png'),
  cashew: publicAsset('dryfruit-cashew.png'),
  raisin: publicAsset('dryfruit-raisin.png'),
  pistachio: publicAsset('dryfruit-pistachio.png'),
};
const fallingPieces = [
  { type: 'cashew',    left: '7%',  size: 86, duration: '11.5s', delay: '-1.5s',  driftX: '18px',  spin: '240deg',  start: '0px',   travel: '950px' },
  { type: 'almond',   left: '22%', size: 72, duration: '14.2s', delay: '-4s',    driftX: '-14px', spin: '-200deg', start: '0px',   travel: '980px' },
  { type: 'pistachio',left: '34%', size: 82, duration: '13.4s', delay: '-8.5s',  driftX: '14px',  spin: '210deg',  start: '0px',   travel: '960px' },
  { type: 'raisin',   left: '48%', size: 50, duration: '9.8s',  delay: '-3s',    driftX: '-12px', spin: '-170deg', start: '0px',   travel: '920px' },
  { type: 'cashew',   left: '60%', size: 80, duration: '12.2s', delay: '-10.5s', driftX: '12px',  spin: '230deg',  start: '0px',   travel: '970px' },
  { type: 'almond',   left: '74%', size: 78, duration: '12.8s', delay: '-5.5s',  driftX: '-16px', spin: '-220deg', start: '0px',   travel: '990px' },
  { type: 'pistachio',left: '86%', size: 68, duration: '15.1s', delay: '-7s',    driftX: '10px',  spin: '190deg',  start: '0px',   travel: '940px' },
  { type: 'raisin',   left: '15%', size: 46, duration: '10.6s', delay: '-12s',   driftX: '-8px',  spin: '-150deg', start: '0px',   travel: '910px' },
  { type: 'cashew',   left: '92%', size: 58, duration: '11.9s', delay: '-2.5s',  driftX: '-10px', spin: '200deg',  start: '0px',   travel: '950px' },
];

export function FounderBrandCard({ founder }) {
  return (
    <motion.aside
      className="ys-surface-emphasis relative min-w-0 overflow-hidden rounded-3xl border-2 p-4 sm:p-6 lg:self-stretch"
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
    >
      <img
        src={publicAsset('watermark-1.png')}
        alt=""
        aria-hidden="true"
        className="ys-section-mark pointer-events-none absolute -right-28 -top-28 w-80 max-w-none"
      />
      <div aria-hidden="true" className="ys-fall-scene pointer-events-none absolute inset-0 overflow-hidden opacity-80">
        {fallingPieces.map((piece, index) => (
          <img
            key={`${piece.type}-${index}`}
            className={`ys-fall-piece ys-fall-piece--${piece.type}`}
            src={fruitAssetMap[piece.type]}
            alt=""
            loading="lazy"
            style={{
              left: piece.left,
              width: `${piece.size}px`,
              animationDuration: piece.duration,
              animationDelay: piece.delay,
              ['--ys-drift-x']: piece.driftX,
              ['--ys-spin-end']: piece.spin,
              ['--ys-start']: piece.start,
              ['--ys-travel']: piece.travel,
            }}
          />
        ))}
      </div>
      <div className="ys-section-corner absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[color:var(--accent-soft)]" />
      <div className="relative flex min-h-0 flex-col justify-between gap-4 lg:h-full lg:gap-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 lg:block">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-[color:var(--border-strong)] bg-[color:var(--accent)] shadow-[0_22px_60px_-28px_rgba(234,179,8,0.7)] sm:h-24 sm:w-24 sm:rounded-3xl lg:mx-auto lg:h-28 lg:w-28">
            <img src={founder.initials} alt={`${founder.brand} Logo`} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0 max-w-full">
            <p className="ys-kicker text-xs font-black uppercase tracking-[0.24em] lg:mt-5 lg:tracking-[0.3em]">Brand</p>
            <h2 className="ys-heading mt-1 max-w-[11ch] break-words text-[1.55rem] font-black leading-[1.02] tracking-tight sm:mt-2 sm:max-w-none sm:text-3xl lg:text-[2.35rem]">
              {founder.brand}
            </h2>
            <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em] text-black">Healthy Living</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-2.5">
          {founder.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index] ?? Leaf;

            return (
              <motion.div
                key={highlight}
                className="ys-mini-card flex items-center gap-2 rounded-2xl border p-2.5 sm:gap-3 sm:p-3.5 lg:p-3"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 + index * 0.07 }}
                whileHover={{ x: 3, transition: { type: 'spring', stiffness: 380, damping: 22 } }}
              >
                <span className="ys-mini-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-9 sm:w-9">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="ys-text-strong text-xs font-bold leading-4 sm:text-sm sm:leading-5">{highlight}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="ys-location-card rounded-2xl p-3.5 sm:p-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--accent)]" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[color:var(--accent)]">Location</p>
              <p className="mt-2 text-sm font-semibold leading-6">{founder.location}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}