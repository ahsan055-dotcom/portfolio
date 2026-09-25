import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'APIs', 'Google Cloud', 'MySQL', 'Figma'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="Technical Skills"
        title="The tools I use to bring ideas to life."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 120}>
            <div className="rounded-2xl border border-border/70 bg-card/50 p-8">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border/70 bg-secondary/40 px-3.5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
