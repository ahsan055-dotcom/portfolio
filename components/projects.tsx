import Image from 'next/image'
import { ExternalLink, Plus, Sparkles, Gamepad2, Users, Trophy, Radio } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { siteConfig } from '@/lib/site-config'

const astraTags = [
  'AI-Assisted Development',
  'Real-Time Multiplayer',
  'Debugging',
  'Git & GitHub',
  'Deployment',
]

const astraStats = [
  { icon: Users, label: 'Multiplayer', value: 'Rooms & lobbies' },
  { icon: Radio, label: 'Real-time', value: 'Live sync' },
  { icon: Trophy, label: 'Win condition', value: 'First to 10' },
]

// Replace the placeholder links below with the real Astra Rush URLs.
const astraLinks = {
  demo: '#', // TODO: live demo URL
  github: siteConfig.github, // TODO: Astra Rush repo URL
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Things I've designed, built, and shipped."
        description="A selection of work that reflects how I like to build — hands-on, iterative, and focused on real, working products."
      />

      {/* Featured: Astra Rush */}
      <Reveal className="mt-12" delay={80}>
        <div className="group relative">
          {/* Animated glow halo behind the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_140deg,var(--color-primary),var(--color-accent),var(--color-chart-3),var(--color-primary))] opacity-40 blur-lg transition-all duration-700 group-hover:opacity-80 group-hover:blur-xl"
          />

          <article className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 backdrop-blur-sm transition-colors duration-500 group-hover:border-primary/60">
            <div className="grid lg:grid-cols-[1.15fr_1fr]">
              {/* Cinematic image panel */}
              <div className="relative min-h-64 overflow-hidden lg:min-h-full">
                <Image
                  src="/images/astra-rush.png"
                  alt="Astra Rush — spaceships racing through a neon space arena collecting glowing cosmic cores"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  priority
                />

                {/* Arena grid overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    backgroundImage:
                      'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                    maskImage:
                      'radial-gradient(ellipse at 50% 100%, black 10%, transparent 75%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse at 50% 100%, black 10%, transparent 75%)',
                  }}
                />

                {/* Cinematic gradient scrim */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card"
                />

                {/* Floating status chip */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-accent" />
                  </span>
                  Live Arena
                </div>

                <span className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-sm">
                  <Sparkles className="size-3.5" />
                  Featured Build
                </span>
              </div>

              {/* Content panel */}
              <div className="relative flex flex-col justify-center p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary/60 px-2.5 py-1 font-medium text-foreground/80">
                    <Gamepad2 className="size-3.5 text-primary" />
                    Web Game
                  </span>
                  <span className="text-muted-foreground">Handshake AI Skills Studio</span>
                </div>

                <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                  Astra Rush
                </h3>

                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  A real-time multiplayer space arena web game. Players create or join rooms,
                  compete to collect cosmic cores, and race to be the first to 10 points. Built
                  through the Handshake AI Skills Studio using AI-assisted development, with a
                  focus on multiplayer functionality, debugging, version control, and deployment.
                </p>

                {/* Stat row */}
                <dl className="mt-6 grid grid-cols-3 gap-3">
                  {astraStats.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-border/60 bg-secondary/30 p-3 transition-colors duration-300 group-hover:border-primary/30"
                    >
                      <Icon className="size-4 text-primary" />
                      <dt className="mt-2 text-[0.7rem] uppercase tracking-wide text-muted-foreground">
                        {label}
                      </dt>
                      <dd className="text-sm font-medium text-foreground/90">{value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {astraTags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground/90"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5"
                    render={<a href={astraLinks.demo} target="_blank" rel="noopener noreferrer" />}
                  >
                    Live Demo
                    <ExternalLink className="size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="transition-transform duration-300 hover:-translate-y-0.5"
                    render={
                      <a href={astraLinks.github} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    <GithubIcon className="size-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Reveal>

      {/* Placeholder cards for future projects */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {[0, 1].map((i) => (
          <Reveal key={i} delay={i * 120}>
            <article className="group flex h-full min-h-56 flex-col justify-between rounded-2xl border border-dashed border-border/70 bg-card/30 p-8 transition-colors hover:border-primary/50">
              <div>
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary/60 text-muted-foreground transition-colors group-hover:bg-primary/15 group-hover:text-primary">
                  <Plus className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground/90">
                  Project coming soon
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A reusable card ready for the next thing I build. Drop in a title, a short
                  description, tech tags, and links.
                </p>
              </div>
              <div className="mt-6 flex gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <ExternalLink className="size-4" /> Demo
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <GithubIcon className="size-4" /> Code
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
