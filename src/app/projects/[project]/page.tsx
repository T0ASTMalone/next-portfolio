import React, { useMemo } from 'react'
import projects from '../../../assets/data/projects.json';
import { PageProps } from '../../../../.next/types/app/page';
import Image from 'next/image';

import styles from './Projects.module.css'
import PCarousel from './PCarousel';

function Project({ params }: PageProps) {
  const project = useMemo(
    () => projects.find((p) => p.slug === params.project), 
    [params.project]
  );

  if (!project) {
    return <>Skelleto</>;
  }

  return (
    <main className={styles.project}>
      {/*
      <Image
        alt={`${project?.name} screenshot`}
        src={project?.image}
        className="mb-3"
        width={500}
        height={300}
      />
      */}
      <PCarousel images={project.images ?? []} />
      <h1 className={styles.projectName}>{project?.name}</h1>
      <div className={styles.description}>
        {project?.description}
      </div>
      <ul className='flex'>
        {project.skills.map(s => (
          <li className='mx-2' key={s}>
            <Image alt="skill" src={`/svg/skills/${s}.svg`} width={20} height={20} />
          </li>
        ))}
      </ul>
      <div className={styles.projectLinksContainer}>
        {project?.links.map((l) => (
          <a 
            rel='noreferrer noopener'
            target='_blank'
            href={l.link} 
            key={l.name}
            className={styles.projectLink}
          >
            {l.name}
          </a>
        ))}
      </div>
    </main>
  )
}

export default Project
