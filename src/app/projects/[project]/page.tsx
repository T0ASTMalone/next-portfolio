import React, { useMemo } from 'react'
import projects from '../../../assets/data/projects.json';
import { PageProps } from '../../../../.next/types/app/page';

function Project({ params }: PageProps) {
  const project = useMemo(
    () => projects.find((p) => p.slug === params.project), 
    [params.project]
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>{project?.name}</h1>
      <div>
        {project?.description}
      </div>
      <div>
        {project?.links.map((l) => (
          <a 

            rel='noreferrer noopener'
            target='_blank'
            href={l.link} 
            key={l.name}
          >
            {l.name}
          </a>
        ))}
      </div>
    </main>
  )
}

export default Project
