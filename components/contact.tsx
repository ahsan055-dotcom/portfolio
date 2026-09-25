import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { Starfield } from '@/components/starfield'
import { siteConfig } from '@/lib/site-config'

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden px-6 py-24 md:py-32">
      <Starfield count={40} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          I&apos;m open to internships, collaborations, and conversations about software, AI,
          and data. Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<a href={`mailto:${siteConfig.email}`} />}>
            <Mail className="size-4" />
            Email Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" />}
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href={siteConfig.github} target="_blank" rel="noopener noreferrer" />}
          >
            <GithubIcon className="size-4" />
            GitHub
          </Button>
        </div>
      </Reveal>

      <footer className="relative mx-auto mt-20 max-w-6xl border-t border-border/60 pt-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with Next.js &amp; Tailwind
          CSS.
        </p>
      </footer>
    </section>
  )
}
