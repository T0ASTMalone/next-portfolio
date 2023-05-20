import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <Image src="/svg/logo.svg" alt="my-logo" width={500} height={100} />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 md:grid-cols-2 md:text-left">
        <ProjectCard
          name="Ronday"
          src="/images/projects/ronday/all the butterflies.png"
          desc="The world’s only truly immersive space to hang out and foster stronger connections."
        />
        <ProjectCard
          name="GroovyTek"
          src="/images/projects/groovytek/groovytek-home.png"
          desc="GroovyTek takes a personalized approach anchored in respect and patience to help folks become confident navigating personal technology independently and on their own terms."
        />
        <ProjectCard
          name="Signal Toast"
          src="/images/projects/modular-synth/modular-synth-in-progress.png"
          desc="Play, Experiment, and Create Unique Sounds"
        />
        <ProjectCard
          name="WorkPlace"
          src="/images/projects/workplace/workplace.png"
          desc="WorkPlace is where team members can communicate and share ideas with one another in order to keep everyone in the loop and up to date with the day to day events of their workplace."
          building
        />
      </div>
    </main>
  )
}
