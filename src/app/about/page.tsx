import Image from 'next/image';
import React, { useMemo } from 'react'
import styles from './About.module.css';
import { Skills } from '@/components/Skills';
import TimeLine from '@/components/TimeLine/TimeLine';


function About() {
  const age = useMemo(() => new Date().getFullYear() - new Date('12-10-1994').getFullYear(), []);
  return (
    <main className={styles.aboutMe}>
      <div className={styles.headerContainer}>
        <Image
          className={styles.image}
          src="/images/its-mee.jpg"
          width={200}
          height={200}
          alt="Miguel Ponce (me)"
        />
        <div className={styles.headerContent}>
          <h1 className={styles.header}>
            Hey 👋, my name is Miguel Angel Ponce
            {' '}
            <span className={styles.age}>
              {age}
            </span>
          </h1>
        </div>
      </div>
      <p className={styles.content}>
        I&apos;m a Softwqare engineer for
        {' '}
        <a
          href="https://rondayapp.com"
          target='_blank'
          rel='noreferrer noopener'
          className={`${styles.link} group`}
        >
          Ronday
          <span className={`${styles.underline} group-hover:max-w-full`}></span>
        </a>
        {' '}
        in Bennett, Colorado.
        I have a passion for efficiency, performance and creating intuiative
        and pleasent user experiences.
        {' '}
        <a
          href="https://www.linkedin.com/in/miguelangelponce/"
          target='_blank'
          rel='noreferrer noopener'
          className={`${styles.link} group`}
        >
          Let&apos;s bring your vision to life!
          <span className={`${styles.underline} group-hover:max-w-full`}></span>
        </a>
      </p>
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
      <TimeLine />
    </main>
  )
}

export default About;
