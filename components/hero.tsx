import { ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Starfield } from '@/components/starfield'
import { siteConfig } from '@/lib/site-config'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      <Starfield count={70} />

      {/* Cosmic glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />

      {/* Floating orbiting core, referencing Astra Rush */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-1/3 hidden lg:block"
      >
        <div
          className="relative flex size-40 items-center justify-center rounded-full border border-primary/30"
          style={{ animation: 'float-slow 8s ease-in-out infinite' }}
        >
          <div className="size-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_60px_-5px] shadow-primary/60" />
          <span className="absolute -right-1 top-1/2 size-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px] shadow-accent" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" />
            University of Minnesota Twin Cities
          </span>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 font-heading text-lg font-medium text-primary sm:text-xl">
            {siteConfig.role}
          </p>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<a href="#projects" />}>
              View My Work
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              render={<a href={siteConfig.github} target="_blank" rel="noopener noreferrer" />}
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" />}
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
