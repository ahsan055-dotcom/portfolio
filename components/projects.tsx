import Image from 'next/image'
import { ExternalLink, Plus, Sparkles } from 'lucide-react'
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
        <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card/50 transition-colors hover:border-primary/50">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden lg:aspect-auto">
              <Image
                src="/images/astra-rush.png"
                alt="Astra Rush — spaceships racing through a neon space arena collecting glowing cosmic cores"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  Featured
                </span>
                <span className="text-xs text-muted-foreground">
                  Handshake AI Skills Studio
                </span>
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Astra Rush
              </h3>

              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                A real-time multiplayer space arena web game. Players create or join rooms,
                compete to collect cosmic cores, and race to be the first to 10 points. Built
                through the Handshake AI Skills Studio using AI-assisted development, with a
                focus on multiplayer functionality, debugging, version control, and deployment.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {astraTags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border/70 bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button render={<a href={astraLinks.demo} target="_blank" rel="noopener noreferrer" />}>
                  Live Demo
                  <ExternalLink className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  render={<a href={astraLinks.github} target="_blank" rel="noopener noreferrer" />}
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </article>
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
