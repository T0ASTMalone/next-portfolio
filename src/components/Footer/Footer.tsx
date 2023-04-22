'use client'
import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none `}>
      <div className={styles.container}>
        <Link className={styles.linkIcon} href="https://github.com/T0ASTMalone">
          <GithubLogo size={32} />      
        </Link>
        <Link className={styles.linkIcon}  rel='noopener noreferrer' href="https://www.linkedin.com/in/miguelangelponce/">
          <LinkedinLogo size={32} />
        </Link>
        <Link className={styles.linkIcon} href="mailto:miguelaponce258@gmail.com">
          <Envelope size={32} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
