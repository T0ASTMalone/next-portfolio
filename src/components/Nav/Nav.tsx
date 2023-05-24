'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import styles from './Nav.module.css';
import useEventListener from '@/hooks/utils';
import { List } from '@phosphor-icons/react';
import Link from 'next/link';

const container = {
  hidden: { y: -20, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const listItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 }
};

function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(!isHome);


  useEventListener('resize', () => setOpen(false));

  useEventListener('scroll', () => {
    if (!isHome) {
      return;
    }

    if (window.scrollY < 100 && show) {
      setShow(false);
    }

    if (window.scrollY > 100 && !show) {
      setShow(true);
    }
  });

  return (
    <>
      <motion.nav variants={container} initial="hidden" animate="show" className={styles.nav}>
        <div className={styles.container}>
          <p className={`${styles.name} ${!show && isHome ? styles.hideName : styles.showName}`} >
            <Link href="/">
              Miguel Ponce
            </Link>
          </p>
          <button onClick={() => setOpen((state) => !state)} className={styles.button}>
            <List size={24} /> 
          </button>
          <div className={open ? styles.linksOpen : styles.links}>
            <motion.div variants={listItem}>
              <Link className={styles.link} href="/about">
                About
              </Link>
            </motion.div>
            <motion.a variants={listItem} className={styles.link} href="#skills">Skills</motion.a>
            <motion.a variants={listItem} className={styles.link} href="#projects">Projects</motion.a>
            <motion.a variants={listItem} className={styles.link} href="#contact">Contact</motion.a>
          </div>
        </div>
      </motion.nav>
    </> 
  );
}

export default Nav;
