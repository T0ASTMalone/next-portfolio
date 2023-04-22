import Image from 'next/image';
import React from 'react';
import styles from './Skills.module.css'

function Skills() {
  return (
    <div className={styles.skillsMarquee}>
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <SkillList />
          <SkillList />
          <SkillList />
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.marqueeContentReverse}>
          <SkillList reverse />
          <SkillList reverse />
          <SkillList reverse />
        </div>
      </div>
    </div>
  );
}

export default Skills;

function SkillList({ reverse }: { reverse?: boolean }) {
  return (
    <ul className={!reverse ? styles.skills : styles.skillsReverse}>
      <li className={styles.skillsItem}>
        <Image
          alt="react logo"
          src="/svg/skills/react-original.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="typescript logo"
          src="/svg/skills/typescript-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="postgresql logo"
          src="/svg/skills/postgresql-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="java logo"
          src="/svg/skills/java-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="spring logo"
          src="/svg/skills/spring-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="javascript logo"
          src="/svg/skills/javascript-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="tailwind logo"
          src="/svg/skills/tailwindcss-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="electron logo"
          src="/svg/skills/electron-original.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="html logo"
          src="/svg/skills/html5-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="css logo"
          src="/svg/skills/css3-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="knex logo"
          src="/svg/skills/knex-svgrepo-com.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      {/*
        <li className={styles.skillsItem}><Image
          alt="thymeleaf logo"
          src="/svg/skills/thymeleaf-icon.svg"
          width={100}
          className={styles.skill}
          height={100}
        /></li>
        */}
      <li className={styles.skillsItem}>
        <Image
          alt="bootstrap logo"
          src="/svg/skills/bootstrap-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="jquery logo"
          src="/svg/skills/jquery-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="mocha logo"
          src="/svg/skills/mocha-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="jest logo"
          src="/svg/skills/jest-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="auth0 logo"
          src="/svg/skills/auth0-svgrepo-com.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="storybook logo"
          src="/svg/skills/storybook-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="git logo"
          src="/svg/skills/git-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="github logo"
          src="/svg/skills/github-original.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="vite"
          src="/svg/skills/vitejs-svgrepo-com.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="maven logo"
          src="/svg/skills/maven-svgrepo-com.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="jira logo"
          src="/svg/skills/jira-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="confluence logo"
          src="/svg/skills/confluence-original.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="bitbucket logo"
          src="/svg/skills/bitbucket-original.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="figma logo"
          src="/svg/skills/figma-plain.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
      <li className={styles.skillsItem}>
        <Image
          alt="notion logo"
          src="/svg/skills/notion-svgrepo-com.svg"
          width={100}
          className={styles.skill}
          height={100}
        />
      </li>
    </ul>

  );
}
