'use client'
import React, { useState } from 'react';
import experience from '../../assets/data/experience.json';
import styles from './TimeLine.module.css';
import JobIcon from './partials/JobIcon/JobIcon';
import useEventListener from '@/hooks/utils';
import Canvas from '../Globe/Canvas';


type Experience = {
  co: string,
  title: string,
  from: string,
  to: string,
  duties: string[],
}

function ExperienceItem({ co, title, from, to, duties }: Experience) {
  return (
    <li className={styles.exp}>
      <p className={styles.company}>
        {co}
      </p>
      <p className={styles.title}>
        {title}
        <JobIcon className="ml-2" job={co} />
      </p>
      <p className={styles.fromTo}>
        {from}
        {' '}
        -
        {' '}
        {to}
      </p>
      <ul className={styles.duities}>
        {duties?.map?.((d, i) => (<li key={i}>{d}</li>))}
      </ul>
    </li>
  );
}

function TimeLine() {
  const [ref, setRef] = useState<HTMLUListElement | null>(null);
  const [per, setPer] = useState<number>(0);

  useEventListener('scroll', () => {
    if (!ref) {
      return;
    }

    const { top } = ref.getBoundingClientRect();
    // TODO: make header height constant
    // move min height into this file from styles
    if (top <= 150) {
      ref.style.overflowY = 'scroll';
      return;
    }

    ref.style.overflowY = 'hidden';
  });
  // TODO: figure out how to use with refs 
  // Either make hook return ref to use or just use state like we are now
  useEventListener('scroll', () => {
    if (!ref) {
      return;
    }

    const height = ref.scrollHeight;
    const pos = ref.scrollTop;
    setPer(pos / height);
  }, ref);

  const handleMouseOver = () => {
    console.log('[Timeline] Mousing over Timeline')
    ref?.focus()
  }

  return (
    <div onMouseOver={handleMouseOver} className={styles.timelineContainer}>
      <Canvas percent={per} />
      <ul ref={(el) => setRef(el)} className={styles.timeline}>
        {experience.map?.((exp) => <ExperienceItem key={exp?.co} {...exp} />)}
      </ul>
    </div>
  )
}

export default TimeLine
