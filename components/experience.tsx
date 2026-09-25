import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const timeline = [
  {
    period: 'Dec 2025 — Aug 2026',
    title: 'AI Fellowship',
    org: 'Handshake',
    body: 'Participated in an AI-focused fellowship and applied AI concepts through hands-on projects. Built AI-based applications while strengthening programming, data analysis, and problem-solving skills.',
  },
  {
    period: 'Jan 2026 — May 2026',
    title: 'Volunteer STEM Instructor',
    org: 'Code the Gap',
    body: 'Designed and delivered engaging coding and STEM lessons for middle school students. Created hands-on activities and adapted instruction to different learning styles and skill levels.',
  },
  {
    period: 'Jun 2025 — Aug 2025',
    title: 'Manufacturing Engineering Intern — R&D',
    org: 'Abbott · Minnesota',
    body: 'Developed Python automation tools to streamline engineering reports and reduce manual data processing. Analyzed engineering data, debugged workflow issues, supported validation efforts, and documented technical processes and improvements.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've learned, built, and contributed."
        description="Professional, technical, and community experiences that have shaped how I approach engineering and problem-solving."
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
