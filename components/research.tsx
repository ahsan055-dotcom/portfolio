import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Research() {
  return (
    <section
      id="research"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32"
    >
      <SectionHeading
        eyebrow="Research"
        title="Exploring how AI understands visual information."
        description="Undergraduate research at the University of Minnesota focused on multimodal AI, dataset quality, and generative models."
      />

      <Reveal>
        <div className="mt-12 rounded-2xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-primary/50 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold">
                Research Assistant
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                University of Minnesota · Prof. Ding
              </p>
            </div>

            <span className="text-sm font-medium text-primary">
              Apr 2026 — Present
            </span>
          </div>

          <div className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Verified and validated AI-generated diagram datasets for a
              university research project, reviewing dataset structures and
              labeling methodologies for consistency and accuracy.
            </p>

            <p>
              Evaluated multimodal AI models, including GPT and Gemini, by
              testing their ability to reproduce diagrams from textual labels
              and prompts.
            </p>

            <p>
              Assisted in assessing how effectively generative AI systems
              interpret and reconstruct visual information while using AI
              tools and Excel to support dataset review and validation.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              'Artificial Intelligence',
              'Multimodal AI',
              'Generative AI',
              'Dataset Validation',
              'Data Labeling',
              'GPT',
              'Gemini',
              'Excel',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
