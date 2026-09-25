import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

// Edit these entries as your experience grows. Keep or remove placeholders as needed.
const timeline = [
  {
    period: '2024 — Present',
    title: 'B.S. Computer Science, Data Science Minor',
    org: 'University of Minnesota Twin Cities',
    body: 'Coursework and projects across software engineering, algorithms, data science, and AI.',
  },
  {
    period: 'Placeholder',
    title: 'Role / Project Title',
    org: 'Organization',
    body: 'Add a short, specific description of what you built or contributed here.',
  },
  {
    period: 'Placeholder',
    title: 'Role / Project Title',
    org: 'Organization',
    body: 'Add another entry — this timeline is designed to be easy to edit and extend.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline of learning and building."
        description="Clean, editable cards — swap in real roles, projects, and dates as you go."
      />

      <ol className="mt-12 space-y-4">
        {timeline.map((item, i) => (
          <Reveal as="li" key={i} delay={i * 100}>
            <div className="relative rounded-2xl border border-border/70 bg-card/50 p-6 pl-8 transition-colors hover:border-primary/50 md:p-8 md:pl-10">
              <span className="absolute left-3 top-8 size-2.5 rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70 md:left-4" />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <span className="text-sm font-medium text-primary">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{item.org}</p>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
