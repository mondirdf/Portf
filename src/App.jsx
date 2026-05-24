import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['Home', 'About', 'Projects', 'Contact'];

const skills = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion', 'UI/UX'];

const stats = [
  { label: 'Projects', value: '24+' },
  { label: 'Technologies', value: '18' },
  { label: 'Experience', value: '4 Years' },
];

const projects = [
  {
    name: 'Nexus Analytics',
    description: 'A realtime business intelligence dashboard with predictive insights and custom reporting.',
    stack: ['React', 'D3', 'Firebase'],
    preview: 'Data Visualization UI',
  },
  {
    name: 'Pulse Commerce',
    description: 'A conversion-focused storefront with AI-powered product recommendations and checkout optimization.',
    stack: ['Next.js', 'Stripe', 'Prisma'],
    preview: 'Commerce Experience',
  },
  {
    name: 'Orbit Workspace',
    description: 'A collaborative productivity suite for distributed teams with shared docs and workflow automation.',
    stack: ['React', 'Node', 'PostgreSQL'],
    preview: 'Team Workspace',
  },
];

const glassUsageRules = [
  'Keep blur moderate; avoid stacking many high-blur layers.',
  'Reserve strongest glass treatment for hero/nav/CTA areas.',
  'Use flatter surfaces in content-dense sections for clarity.',
];

const motionTokens = {
  microDuration: 0.2,
  sectionDuration: 0.42,
  particleBaseDuration: 14,
  easeNatural: [0.22, 1, 0.36, 1],
};

const sectionFadeUp = {
  hidden: { opacity: 0, transform: 'translate3d(0, 28px, 0)' },
  visible: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: { duration: motionTokens.sectionDuration, ease: motionTokens.easeNatural },
  },
};

const sectionSlideIn = {
  hidden: { opacity: 0, transform: 'translate3d(22px, 0, 0)' },
  visible: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: { duration: motionTokens.sectionDuration, ease: motionTokens.easeNatural },
  },
};

function GlassPanel({ className = '', emphasis = 'flat', children }) {
  return <div className={`glass-panel glass-panel--${emphasis} ${className}`}>{children}</div>;
}

function GlassButton({ className = '', variant = 'primary', children, ...props }) {
  return (
    <button className={`glass-button glass-button--${variant} motion-button-feedback ${className}`} {...props}>
      {children}
    </button>
  );
}

function GlassNav({ className = '', children }) {
  return <header className={`glass-nav ${className}`}>{children}</header>;
}

function GlassModal({ className = '', title = 'Usage Rules', children }) {
  return (
    <div className={`glass-modal ${className}`} role="dialog" aria-modal="true" aria-label={title}>
      <div className="glass-modal__tint" />
      <div className="glass-modal__content">{children}</div>
    </div>
  );
}

export function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[var(--color-text-primary)]">
      <BackgroundFx />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <GlassNav className={isScrolled ? 'glass-nav--scrolled' : 'glass-nav--top'}>
      <motion.nav
        animate={{
          y: isScrolled ? 10 : 0,
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-[90%] max-w-6xl items-center justify-between px-5 py-3 md:px-6"
      >
        <a href="#home" className="text-xl font-extrabold tracking-[0.08em] text-[#3B82F6]">DF</a>

        <ul className="hidden gap-6 text-sm font-medium uppercase tracking-[var(--tracking-button)] text-[var(--color-text-secondary)] md:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="motion-hover-lift transition-colors hover:text-[#3B82F6]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Open menu"
          className="nav-menu-btn"
        >
          <span aria-hidden="true" className="nav-menu-icon" />
        </button>
      </motion.nav>
    </GlassNav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-bg section-shell mx-auto grid min-h-screen max-w-6xl items-center motion-section-transition">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionFadeUp} className="w-full text-center motion-enter-fade-up">
        <h1 className="text-display text-[var(--color-hero-heading)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
          Building intelligent digital experiences.
        </h1>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <motion.section id="about" className="section-shell motion-section-transition mx-auto max-w-6xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionSlideIn}>
      <h3 className="text-heading mb-6">About Me</h3>
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <GlassPanel className="p-8" emphasis="hero">
          <p className="text-body text-measure">
            I’m a product-minded developer focused on crafting fast, scalable, and emotionally resonant digital experiences. My work combines precise engineering with a contemporary visual style.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="motion-hover-glow rounded-full border border-[var(--color-border-hairline)] bg-[var(--surface-glass-low)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]">
                {skill}
              </span>
            ))}
          </div>
        </GlassPanel>
        <div className="grid gap-4">
          {stats.map((stat) => (
            <GlassPanel key={stat.label} className="motion-enter-scale-in p-6" emphasis="flat">
              <p className="text-3xl font-bold tracking-[var(--tracking-heading)] text-[var(--color-accent)]">{stat.value}</p>
              <p className="text-caption uppercase tracking-[var(--tracking-button)]">{stat.label}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section id="projects" className="section-shell motion-section-transition mx-auto max-w-6xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionFadeUp}>
      <h3 className="text-heading mb-10">Featured Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.name} whileHover={{ transform: 'translate3d(0,-6px,0) scale(1.02)' }} transition={{ duration: motionTokens.microDuration, ease: motionTokens.easeNatural }} className="motion-hover-lift motion-hover-parallax">
            <GlassPanel className="glass-panel--liquid-card h-full p-5" emphasis="liquid">
              <div className="mb-4 flex h-40 items-center justify-center rounded-2xl border border-[var(--color-border-hairline)] bg-gradient-to-br from-[var(--surface-preview-start)] to-[var(--surface-preview-end)] text-sm text-[var(--color-text-secondary)]">
                {project.preview}
              </div>
              <h4 className="text-card-title mb-2">{project.name}</h4>
              <p className="text-caption text-measure mb-4">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-[var(--surface-glass-mid)] px-3 py-1 text-xs font-medium uppercase tracking-[var(--tracking-button)] text-[var(--color-accent)]">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <GlassButton variant="secondary" className="w-full text-sm">Live Demo</GlassButton>
                <GlassButton className="w-full text-sm">GitHub</GlassButton>
              </div>
            </GlassPanel>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section id="contact" className="motion-section-transition mx-auto max-w-4xl px-6 py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFadeUp}>
      <GlassModal>
        <h3 className="text-heading mb-4">Let&apos;s Build Something Great</h3>
        <p className="text-body text-measure mb-8">Open to creative collaborations, product builds, and ambitious ideas.</p>
        <form className="space-y-4">
          <input className="glass-input" placeholder="Name" type="text" />
          <input className="glass-input" placeholder="Email" type="email" />
          <textarea className="glass-input min-h-32" placeholder="Message" />
          <GlassButton className="w-full">Send Message</GlassButton>
        </form>
        <div className="mt-6 flex gap-4 text-[var(--color-text-caption)]">
          <span className="social-dot motion-hover-glow">in</span>
          <span className="social-dot motion-hover-glow">gh</span>
          <span className="social-dot motion-hover-glow">𝕏</span>
        </div>
      </GlassModal>
      <GlassPanel className="mt-8 p-6" emphasis="flat">
        <h4 className="text-card-title mb-3">Glass Usage Rules</h4>
        <ul className="space-y-2 text-body">
          {glassUsageRules.map((rule) => (
            <li key={rule} className="text-[var(--color-text-secondary)]">• {rule}</li>
          ))}
        </ul>
      </GlassPanel>
    </motion.section>
  );
}

function BackgroundFx() { return <div className="pointer-events-none absolute inset-0 overflow-hidden" />; }

function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border-hairline)] bg-[var(--surface-footer)] px-6 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="text-caption">© {new Date().getFullYear()} Alex Dev. Crafted with intention.</p>
        <p className="text-caption uppercase tracking-[var(--tracking-button)]">React · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
