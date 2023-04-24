import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image src="/svg/logo.svg" alt="my-logo" width={500} height={100} />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
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
          name="Modular Synth"
          src="/images/projects/modular-synth/modular-synth-in-progress.png"
          desc="Instantly deploy your Next.js site to a shareable URL with Vercel."
          building
        />
        <ProjectCard
          name="WorkPlace"
          src="/images/projects/workplace/workplace.png"
          desc="WorkPlace is where team members can communicate and share ideas with one another in order to keep everyone in the loop and up to date with the day to day events of their workplace."
        />
      </div>
    </main>
  )
}
