import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Code2, BrainCircuit, BarChart3 } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Software Engineering',
    body: 'Designing and building clean, maintainable applications from the ground up.',
  },
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    body: 'Experimenting with AI-assisted development and intelligent product features.',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    body: 'Turning data into insight through analysis, modeling, and visualization.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading eyebrow="About Me" title="Curious about how things work — and how to build them better." />

      <Reveal className="mt-8 max-w-3xl" delay={100}>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m a Computer Science student with a Data Science minor at the University of
          Minnesota Twin Cities. I&apos;m interested in software engineering, artificial
          intelligence, data science, and building practical technology that solves real
          problems. I love learning by shipping — taking an idea, breaking it down, and turning
          it into something that actually works.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 120}>
            <div className="group h-full rounded-xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-primary/50">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <item.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
