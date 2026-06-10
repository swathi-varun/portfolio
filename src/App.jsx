import { motion } from 'framer-motion';
import { Menu, MoonStar, Sparkles, SunMedium, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FounderHero } from './components/FounderHero';
import { FounderSnapshot } from './components/FounderSnapshot';
import { LinkSection } from './components/LinkSection';
import { founder, sections, snapshot } from './data/linksData';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';

    return window.localStorage.getItem('ys-theme') ?? 'light';
  });
  const [showIntro, setShowIntro] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('ys-theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="ys-app min-h-screen overflow-x-hidden bg-transparent">
      {showIntro ? (
        <div className="ys-intro">
          <div className="ys-intro-panel">
            <img src="/logo.jpg" alt="Yellow Spoon logo" className="ys-intro-logo" />
            <div className="ys-intro-copy">
              <p className="ys-intro-kicker">Founder Portfolio</p>
              <h1>Yellow Spoon</h1>
              <p>Founder story, brand links, and healthy snacking presence.</p>
            </div>
          </div>
        </div>
      ) : null}

      <motion.header
        className="ys-nav-wrap fixed inset-x-0 top-0 z-30"
        initial={{ opacity: 0, y: -28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-5 lg:px-6 lg:pt-6">
          <div className="ys-navbar">
            <a className="ys-navbar-brand" href="#home">
              <img src="/logo.jpg" alt="Yellow Spoon logo" className="ys-navbar-logo" />
              <span>
                <strong>Swathi Varun</strong>
                <small>Founder of Yellow Spoon</small>
              </span>
            </a>

            <nav className={`ys-navbar-links ${isNavOpen ? 'ys-navbar-links--open' : ''}`} aria-label="Page sections">
              <a href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
              <a href="#snapshot" onClick={() => setIsNavOpen(false)}>Snapshot</a>
              <a href="#brand" onClick={() => setIsNavOpen(false)}>Brand</a>
              <a href="#contact" onClick={() => setIsNavOpen(false)}>Connect</a>
              <a href="#social" onClick={() => setIsNavOpen(false)}>Social</a>
            </nav>

            <div className="ys-navbar-actions">
              <button
                type="button"
                className="ys-nav-menu-toggle"
                onClick={() => setIsNavOpen((current) => !current)}
                aria-expanded={isNavOpen}
                aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>

              <button
                type="button"
                className="ys-theme-toggle"
                onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="relative mx-auto flex min-h-screen w-full min-w-0 max-w-6xl flex-col gap-5 px-4 pb-4 pt-28 sm:px-5 sm:pt-32 lg:px-6 lg:pb-6">
        <div className="ys-top-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]" />
        <img
          src="/watermark-2.png"
          alt=""
          aria-hidden="true"
          className="ys-floating-mark pointer-events-none absolute -right-32 top-10 -z-10 hidden w-[34rem] max-w-none lg:block"
        />
        <img
          src="/watermark-2.png"
          alt=""
          aria-hidden="true"
          className="ys-floating-mark ys-floating-mark--left pointer-events-none absolute -left-36 top-[42rem] -z-10 hidden w-[30rem] max-w-none rotate-180 lg:block"
        />

        <FounderHero founder={founder} />

        <FounderSnapshot snapshot={snapshot} />

        {sections.map((section) => (
          <LinkSection key={section.id} section={section} />
        ))}

        <footer className="ys-footer">
          <div>
            <p className="ys-footer-label">Healthy Living</p>
            <p className="ys-footer-title">Yellow Spoon Founder Portfolio</p>
          </div>
          <a href={founder.website} target="_blank" rel="noreferrer" className="ys-footer-link">
            <Sparkles className="h-4 w-4" />
            Visit Brand Website
          </a>
        </footer>
      </main>
    </div>
  );
}

export default App;
