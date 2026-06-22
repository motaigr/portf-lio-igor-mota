import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { About } from '@/components/sections/About'
import { TechStack } from '@/components/sections/TechStack'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Education />
      <Contact />
    </div>
  )
}
