'use client'
import React, { useState } from 'react';
import styles from './Nav.module.css';
import useEventListener from '@/hooks/utils';
import { List } from '@phosphor-icons/react';
import Link from 'next/link';

function Nav() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEventListener('resize', () => setOpen(false));

  useEventListener('scroll', () => {
    if (window.scrollY < 100 && show) {
      setShow(false);
    }

    if (window.scrollY > 100 && !show) {
      setShow(true);
    }
  });

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <p className={`${styles.name} ${!show ? styles.hideName : styles.showName}`} >
            Miguel Ponce
          </p>
          <button onClick={() => setOpen((state) => !state)} className={styles.button}>
            <List size={24} /> 
          </button>
          <div className={open ? styles.linksOpen : styles.links}>
            <Link className={styles.link} href="/about">About</Link>
            <a className={styles.link} href="#skills">Skils</a>
            <a className={styles.link} href="#projects">Projects</a>
            <a className={styles.link} href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </> 
  );
}

export default Nav;
