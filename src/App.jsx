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

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

function GlassCard({ className = '', children }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void-blue text-white">
      <BackgroundFx />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/25 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold tracking-wide text-soft-cyan">ALEX DEV</span>
        <ul className="hidden gap-6 text-sm text-white/80 md:flex">
          {navLinks.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="transition hover:text-soft-cyan">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero-bg mx-auto grid min-h-screen max-w-6xl items-center px-6 py-20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="w-full text-center"
      >
        <h1 className="text-5xl font-extrabold leading-tight text-yellow-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] md:text-7xl">
          Building intelligent digital experiences.
        </h1>
      </motion.div>
    </section>
  );
}


function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <h3 className="mb-6 text-3xl font-bold">About Me</h3>
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <GlassCard className="p-8">
          <p className="text-white/75">
            I’m a product-minded developer focused on crafting fast, scalable, and emotionally resonant digital experiences. My work combines precise engineering with a contemporary visual style.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80">
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>
        <div className="grid gap-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-6">
              <p className="text-3xl font-bold text-soft-cyan">{stat.value}</p>
              <p className="text-white/70">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Projects() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariant}
    >
      <h3 className="mb-10 text-3xl font-bold">Featured Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article key={project.name} whileHover={{ scale: 1.03, y: -6 }} transition={{ duration: 0.25 }}>
            <GlassCard className="h-full p-5">
              <div className="mb-4 flex h-40 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-cyan-300/20 to-indigo-500/20 text-sm text-white/75">
                {project.preview}
              </div>
              <h4 className="mb-2 text-xl font-semibold">{project.name}</h4>
              <p className="mb-4 text-sm text-white/70">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-soft-cyan">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="btn-secondary w-full text-sm">Live Demo</button>
                <button className="btn-primary w-full text-sm">GitHub</button>
              </div>
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariant}
    >
      <GlassCard className="p-8 md:p-10">
        <h3 className="mb-4 text-3xl font-bold">Let&apos;s Build Something Great</h3>
        <p className="mb-8 text-white/70">Open to creative collaborations, product builds, and ambitious ideas.</p>
        <form className="space-y-4">
          <input className="glass-input" placeholder="Name" type="text" />
          <input className="glass-input" placeholder="Email" type="email" />
          <textarea className="glass-input min-h-32" placeholder="Message" />
          <button className="btn-primary w-full">Send Message</button>
        </form>
        <div className="mt-6 flex gap-4 text-white/70">
          <span className="social-dot">in</span>
          <span className="social-dot">gh</span>
          <span className="social-dot">𝕏</span>
        </div>
      </GlassCard>
    </motion.section>
  );
}

function BackgroundFx() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-[130px]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${14 + (i % 8)}s`,
          }}
        />
      ))}
    </div>
  );
}
