'use client'
import React, { useRef } from 'react';
import experience from '../../assets/data/experience.json';
import styles from './TimeLine.module.css';
import JobIcon from './partials/JobIcon/JobIcon';
import useEventListener from '@/hooks/utils';


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
  const ref = useRef<HTMLUListElement>(null);

  useEventListener('scroll', () => {
    if (!ref.current) {
      return;
    }

    if (ref.current.clientTop <= 70) {
      ref.current.style.overflowY = 'scroll';
      return;
    } 
    ref.current.style.overflowY = 'hidden';
  });

  return (
    <ul ref={ref} className={styles.timeline}>
      {experience?.map?.((exp) => <ExperienceItem key={exp?.co} {...exp} />)}
    </ul>
  )
}

export default TimeLine
