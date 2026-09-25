import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Research } from '@/components/research'
import { Exploring } from '@/components/exploring'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Exploring />
        <Contact />
      </main>
    </>
  )
}
