'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Intersection Observer Hook ──────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.anim-hidden')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-border/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center glow-indigo-sm transition-all duration-300 group-hover:scale-110">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="white" fillOpacity="0.3"/>
            </svg>
          </div>
          <span className="font-display text-lg text-snow tracking-tight">Nexus</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Solutions', 'Docs', 'Pricing', 'Blog'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-slate hover:text-snow transition-colors duration-200 link-hover"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-slate hover:text-snow transition-colors duration-200">
            Sign in
          </a>
          <a
            href="#"
            className="btn-primary relative z-10 text-sm font-medium text-white px-5 py-2 rounded-lg"
          >
            <span className="relative z-10">Get started</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate hover:text-snow transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-obsidian/95 border-b border-border">
          {['Product', 'Solutions', 'Docs', 'Pricing', 'Blog'].map((item) => (
            <a key={item} href="#" className="text-sm text-slate hover:text-snow transition-colors">
              {item}
            </a>
          ))}
          <a href="#" className="btn-primary text-center text-sm font-medium text-white px-5 py-2.5 rounded-lg mt-2">
            <span className="relative z-10">Get started free</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-drift absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="orb-drift-delay absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[140px] animate-glow-pulse" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2.5 bg-surface/80 border border-border rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          <span className="text-xs text-slate font-mono tracking-wider uppercase">Now in public beta</span>
          <span className="text-xs text-accent font-medium">→ What's new</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] mb-8 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <span className="block text-snow">Build without</span>
          <span className="block gradient-text text-glow italic">limits.</span>
        </h1>

        {/* Subhead */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Nexus gives your team the infrastructure, tools, and confidence to ship world-class products
          at any scale — from prototype to production.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          <a href="#" className="btn-primary relative z-10 flex items-center gap-2 text-white font-medium px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto justify-center">
            <span className="relative z-10">Start building free</span>
            <span className="relative z-10 text-white/70">→</span>
          </a>
          <a href="#" className="btn-ghost flex items-center gap-2 text-silver px-8 py-3.5 rounded-xl text-sm w-full sm:w-auto justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Watch demo — 2 min
          </a>
        </div>

        {/* Social proof */}
        <div
          className="mt-16 flex flex-col items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
        >
          <div className="flex -space-x-2">
            {['6366f1','818cf8','10b981','f59e0b','f43f5e'].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-obsidian flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: `#${color}` }}
              >
                {['A','B','C','D','E'][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-ghost">
            Trusted by <span className="text-silver font-medium">12,000+</span> engineers worldwide
          </p>
        </div>

        {/* Hero visual */}
        <div
          className="mt-20 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          <HeroTerminal />
        </div>
      </div>
    </section>
  )
}

// ─── Hero Terminal ────────────────────────────────────────────────────────────
function HeroTerminal() {
  const lines = [
    { type: 'cmd', text: '$ nexus deploy --prod' },
    { type: 'info', text: '  ✦ Building project...' },
    { type: 'success', text: '  ✓ Build completed in 4.2s' },
    { type: 'info', text: '  ✦ Running 48 checks...' },
    { type: 'success', text: '  ✓ All checks passed' },
    { type: 'info', text: '  ✦ Deploying to edge network...' },
    { type: 'highlight', text: '  ✓ Live → https://app.nexus.dev' },
  ]

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Glow behind terminal */}
      <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl" />

      <div className="relative bg-surface/90 border border-border rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Terminal titlebar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-void/50">
          <div className="w-3 h-3 rounded-full bg-rose/70" />
          <div className="w-3 h-3 rounded-full bg-amber/70" />
          <div className="w-3 h-3 rounded-full bg-emerald/70" />
          <span className="ml-3 text-xs text-ghost font-mono">terminal</span>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm space-y-1.5 text-left">
          {lines.map((line, i) => (
            <div
              key={i}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.8 + i * 0.18}s`, animationFillMode: 'both' }}
            >
              <span
                className={
                  line.type === 'cmd' ? 'text-snow font-medium' :
                  line.type === 'success' ? 'text-emerald' :
                  line.type === 'highlight' ? 'text-accent-bright font-medium' :
                  'text-ghost'
                }
              >
                {line.text}
              </span>
            </div>
          ))}
          {/* Cursor */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-ghost font-mono text-sm">$</span>
            <span className="w-2 h-4 bg-accent animate-pulse rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Logos Marquee ────────────────────────────────────────────────────────────
function LogosSection() {
  const logos = [
    'Stripe', 'Linear', 'Vercel', 'Figma', 'Notion', 'Loom',
    'Raycast', 'Clerk', 'PlanetScale', 'Resend', 'Supabase', 'Framer'
  ]
  const doubled = [...logos, ...logos]

  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <p className="text-center text-xs font-mono text-ghost uppercase tracking-widest mb-10">
        Trusted by teams at
      </p>
      <div className="relative">
        <div className="flex gap-16 marquee-track whitespace-nowrap">
          {doubled.map((logo, i) => (
            <span
              key={i}
              className="text-muted font-display text-lg italic hover:text-ghost transition-colors duration-300 cursor-default select-none"
            >
              {logo}
            </span>
          ))}
        </div>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent" />
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: '99.99%', label: 'Uptime SLA', suffix: '' },
    { value: '< 80', label: 'Global edge nodes', suffix: 'ms' },
    { value: '12k+', label: 'Teams worldwide', suffix: '' },
    { value: '4.2s', label: 'Avg. deploy time', suffix: '' },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`anim-hidden delay-${(i + 1) * 100} text-center p-8 rounded-2xl bg-surface/40 border border-border hover:border-accent/30 transition-all duration-300`}
          >
            <div className="font-display text-4xl sm:text-5xl gradient-text mb-2">
              {stat.value}<span className="text-2xl text-ghost">{stat.suffix}</span>
            </div>
            <div className="text-sm text-ghost">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      icon: '⚡',
      title: 'Edge-native deploys',
      desc: 'Ship to 80+ PoPs in under 5 seconds. Your users get sub-50ms response times, everywhere.',
      tag: 'Infrastructure',
    },
    {
      icon: '🔍',
      title: 'Deep observability',
      desc: 'Real-time logs, traces, and metrics unified in one pane. Catch issues before your users do.',
      tag: 'Monitoring',
    },
    {
      icon: '🔐',
      title: 'Zero-trust security',
      desc: 'End-to-end encryption, SOC 2 Type II certified, and granular RBAC out of the box.',
      tag: 'Security',
    },
    {
      icon: '🤝',
      title: 'Team workflows',
      desc: 'Preview environments for every PR. Comment, review, and approve right in your Git flow.',
      tag: 'Collaboration',
    },
    {
      icon: '🧩',
      title: '100+ integrations',
      desc: 'Connect your favorite tools in one click. GitHub, Slack, Datadog, PagerDuty, and more.',
      tag: 'Ecosystem',
    },
    {
      icon: '📈',
      title: 'Auto-scaling',
      desc: 'Handle 10 or 10 million requests with zero config. Scale up, scale down, automatically.',
      tag: 'Performance',
    },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="max-w-2xl mb-16">
        <p className="anim-hidden font-mono text-xs text-accent uppercase tracking-widest mb-4">
          Platform capabilities
        </p>
        <h2 className="anim-hidden delay-100 font-display text-4xl sm:text-5xl text-snow mb-6 leading-tight">
          Everything you need,<br />
          <span className="italic text-slate">nothing you don't.</span>
        </h2>
        <p className="anim-hidden delay-200 text-slate text-lg leading-relaxed">
          We've obsessed over the details so your team can focus on what matters — building great products.
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`anim-hidden delay-${(i % 3 + 1) * 100} card-hover group bg-surface/40 border border-border rounded-2xl p-7 flex flex-col gap-4`}
          >
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-void border border-border flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <span className="text-[10px] font-mono text-ghost border border-border rounded-full px-2.5 py-1 uppercase tracking-wider">
                {feature.tag}
              </span>
            </div>
            <div>
              <h3 className="font-medium text-snow text-lg mb-2">{feature.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{feature.desc}</p>
            </div>
            <a href="#" className="mt-auto text-xs text-accent hover:text-accent-bright transition-colors link-hover w-fit">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Bento ────────────────────────────────────────────────────────────────────
function BentoSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="anim-hidden font-display text-4xl sm:text-5xl text-snow mb-4">
          One platform,<br />
          <span className="gradient-text-emerald italic">infinite possibilities.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Large card */}
        <div className="anim-hidden md:col-span-2 card-hover relative bg-surface/40 border border-border rounded-2xl p-8 overflow-hidden min-h-[280px] flex flex-col justify-between">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Deploy</div>
            <h3 className="font-display text-2xl text-snow mb-3">From commit to global<br />in under 5 seconds.</h3>
            <p className="text-slate text-sm">Push your code. Nexus handles the rest — building, testing, optimizing, and shipping to every edge node simultaneously.</p>
          </div>
          <div className="flex gap-3 mt-6">
            {['Build', 'Test', 'Deploy', 'Monitor'].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald/20 border border-emerald/40 flex items-center justify-center">
                  <span className="text-emerald text-[8px]">✓</span>
                </div>
                <span className="text-xs text-slate">{step}</span>
                {i < 3 && <span className="text-border text-xs ml-1">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Small card */}
        <div className="anim-hidden delay-100 card-hover relative bg-surface/40 border border-border rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[280px]">
          <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-emerald/8 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="font-mono text-xs text-emerald uppercase tracking-widest mb-3">Uptime</div>
            <div className="font-display text-5xl text-snow mb-1">99.99%</div>
            <p className="text-ghost text-sm">SLA guaranteed</p>
          </div>
          <div className="mt-6 flex gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm ${i === 6 ? 'h-2 bg-amber/60' : 'h-5 bg-emerald/50'}`}
                style={{ opacity: 0.5 + Math.random() * 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Small card */}
        <div className="anim-hidden delay-200 card-hover relative bg-surface/40 border border-border rounded-2xl p-8 overflow-hidden flex flex-col justify-between min-h-[220px]"> <div>
            <div className="font-mono text-xs text-amber uppercase tracking-widest mb-3">Scale</div>
            <h3 className="font-display text-2xl text-snow mb-2">Zero-config autoscaling</h3>
            <p className="text-slate text-sm">Handle sudden traffic spikes without breaking a sweat.</p>
          </div>
          <div className="mt-6 h-12 flex items-end gap-1">
            {[20,30,25,40,35,60,55,80,90,75,95,100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-amber/40 rounded-sm transition-all"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* Medium card */}
        <div className="anim-hidden delay-300 md:col-span-2 card-hover relative bg-surface/40 border border-border rounded-2xl p-8 overflow-hidden min-h-[220px] flex flex-col justify-between">
          <div className="absolute -right-8 -bottom-8 w-56 h-56 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Integrations</div>
            <h3 className="font-display text-2xl text-snow mb-2">Connect everything you already use.</h3>
            <p className="text-slate text-sm">100+ integrations with one click. Your workflow, supercharged.</p>
          </div>
          <div className="flex gap-3 mt-6 flex-wrap">
            {['GitHub', 'Slack', 'Datadog', 'PagerDuty', 'Jira', 'Linear', '+94'].map((tool, i) => (
              <span key={i} className="text-xs text-ghost border border-border rounded-full px-3 py-1 hover:border-accent/40 hover:text-silver transition-all duration-200 cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Nexus cut our deploy times from 20 minutes to under 5 seconds. It's not just a tool — it's changed how our entire team works.",
      name: 'Sarah Chen',
      role: 'VP Engineering, Meridian',
      color: '6366f1',
    },
    {
      quote: "The observability features alone are worth it. We caught a production issue in 30 seconds that would have taken us hours to debug.",
      name: 'Marcus Webb',
      role: 'Staff Engineer, Arkive',
      color: '10b981',
    },
    {
      quote: "We scaled from 10k to 10M requests overnight during a product launch. Zero downtime, zero intervention needed.",
      name: 'Priya Nair',
      role: 'CTO, Launchpad',
      color: 'f59e0b',
    },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="anim-hidden font-mono text-xs text-accent uppercase tracking-widest mb-4">Testimonials</p>
        <h2 className="anim-hidden delay-100 font-display text-4xl sm:text-5xl text-snow">
          Loved by engineers,<br />
          <span className="italic text-slate">trusted by leaders.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`anim-hidden delay-${(i + 1) * 100} card-hover bg-surface/40 border border-border rounded-2xl p-7 flex flex-col gap-6`}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, j) => (
                <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={`#${t.color}`}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-silver text-sm leading-relaxed flex-1">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: `#${t.color}` }}
              >
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-medium text-snow">{t.name}</div>
                <div className="text-xs text-ghost">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function PricingSection() {
  const [annual, setAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      price: annual ? 0 : 0,
      desc: 'For side projects and experiments.',
      features: ['3 projects', '1 team member', '1GB bandwidth/mo', 'Community support'],
      cta: 'Get started',
      highlight: false,
    },
    {
      name: 'Pro',
      price: annual ? 29 : 39,
      desc: 'For growing teams shipping fast.',
      features: ['Unlimited projects', '10 team members', '100GB bandwidth/mo', 'Priority support', 'Custom domains', 'Analytics'],
      cta: 'Start free trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: null,
      desc: 'For orgs that demand the best.',
      features: ['Unlimited everything', 'Dedicated support', 'SSO & SAML', 'Custom SLA', 'Security audit', 'Onboarding'],
      cta: 'Contact sales',
      highlight: false,
    },
  ]

  return (
    <section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
      <div className="text-center mb-16">
        <p className="anim-hidden font-mono text-xs text-accent uppercase tracking-widest mb-4">Pricing</p>
        <h2 className="anim-hidden delay-100 font-display text-4xl sm:text-5xl text-snow mb-8">
          Simple, transparent pricing.
        </h2>
        {/* Toggle */}
        <div className="anim-hidden delay-200 inline-flex items-center gap-3 bg-surface border border-border rounded-full p-1">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 ${!annual ? 'bg-void text-snow shadow' : 'text-ghost'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200 flex items-center gap-2 ${annual ? 'bg-void text-snow shadow' : 'text-ghost'}`}
          >
            Annual
            <span className="text-[10px] bg-emerald/20 text-emerald px-2 py-0.5 rounded-full">Save 25%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`anim-hidden delay-${(i + 1) * 100} relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 ${
              plan.highlight
                ? 'bg-accent/10 border-2 border-accent/50 glow-indigo'
                : 'bg-surface/40 border border-border card-hover'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-white text-[10px] font-mono font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
            )}
            <div>
              <div className="text-sm font-mono text-ghost uppercase tracking-wider mb-2">{plan.name}</div>
              <div className="flex items-end gap-1 mb-2">
                {plan.price !== null ? (
                  <>
                    <span className="font-display text-5xl text-snow">${plan.price}</span>
                    <span className="text-ghost text-sm mb-2">/mo</span>
                  </>
                ) : (
                  <span className="font-display text-3xl text-snow">Custom</span>
                )}
              </div>
              <p className="text-sm text-ghost">{plan.desc}</p>
            </div>
            <ul className="flex flex-col gap-2.5 flex-1">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2.5 text-sm text-slate">
                  <span className="text-emerald text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`text-center text-sm font-medium py-3 rounded-xl transition-all duration-200 ${
                plan.highlight
                  ? 'btn-primary text-white'
                  : 'btn-ghost text-silver'
              }`}
            >
              <span className="relative z-10">{plan.cta}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="relative rounded-3xl overflow-hidden bg-surface/60 border border-border p-12 sm:p-20 text-center">
        {/* BG orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />

        <div className="relative z-10">
          <p className="anim-hidden font-mono text-xs text-accent uppercase tracking-widest mb-6">Get started today</p>
          <h2 className="anim-hidden delay-100 font-display text-4xl sm:text-6xl text-snow mb-6 leading-tight">
            Ready to ship<br />
            <span className="italic gradient-text">faster than ever?</span>
          </h2>
          <p className="anim-hidden delay-200 text-slate text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join 12,000+ engineering teams who trust Nexus to power their most critical infrastructure.
          </p>
          <div className="anim-hidden delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary relative z-10 text-white font-medium px-10 py-4 rounded-xl text-sm w-full sm:w-auto text-center">
              <span className="relative z-10">Start for free — no credit card</span>
            </a>
            <a href="#" className="btn-ghost text-silver px-8 py-4 rounded-xl text-sm w-full sm:w-auto text-center">
              Talk to our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
    },
    {
      title: 'Developers',
      links: ['Documentation', 'API Reference', 'CLI', 'SDKs', 'GitHub'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookies'],
    },
  ]

  return (
    <footer className="border-t border-border bg-void/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" fillOpacity="0.9"/>
                  <path d="M8 5L11 6.75V10.25L8 12L5 10.25V6.75L8 5Z" fill="white" fillOpacity="0.3"/>
                </svg>
              </div>
              <span className="font-display text-snow">Nexus</span>
            </div>
            <p className="text-sm text-ghost leading-relaxed">
              The platform for teams who build what's next.
            </p>
          </div>

          {/* Links */}
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-mono text-ghost uppercase tracking-wider mb-4">{col.title}</div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate hover:text-snow transition-colors duration-200 link-hover">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ghost">© 2025 Nexus, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="text-xs text-ghost hover:text-slate transition-colors duration-200">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal()

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogosSection />
      <StatsSection />
      <FeaturesSection />
      <BentoSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
      