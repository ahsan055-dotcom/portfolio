import { Reveal } from '@/components/reveal'
import { Code2, BrainCircuit, Layers, LineChart } from 'lucide-react'

const items = [
  { icon: Code2, label: 'Software Engineering' },
  { icon: BrainCircuit, label: 'Artificial Intelligence' },
  { icon: Layers, label: 'Full-Stack Development' },
  { icon: LineChart, label: 'Data Science' },
]

export function Exploring() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 p-8 md:p-12">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Currently Exploring
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-4 py-4 backdrop-blur">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <span className="font-heading text-sm font-semibold">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
