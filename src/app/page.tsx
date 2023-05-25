import Image from 'next/image'
import ProjectLinks from '@/components/ProjectCard/ProjectLoading';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <Image src="/svg/logo.svg" alt="my-logo" width={500} height={100} />
      </div>
      <ProjectLinks />
    </main>
  )
}
