'use client';
import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion';

import ProjectCard from './ProjectCard';
import Image from 'next/image';

import styles from './ProjectLoading.module.css';


const container = {
  hide: { 
    opacity: 0,
    scale: 0 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: {
      staggerChildren: 0.2,
      duration: .1,
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      duration: 1,
    }
  }
}

const listItem = {
  hidden: { 
    opacity: 0, 
    scale: 0
  },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: .1,
    }
  },
  exit: {
    opacity: 0,
    transition: { 
      duration: 1,
    }
  }
};

function ProjectPreview() {
  const [showImages, setShowImages] = useState(true);

  return (
    <div className={styles.loader}>
      <AnimatePresence>
        {/* motion component must be a direct decendant of AnimatePresence */}
        {showImages && (
          <motion.div 
            key="project-images"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationComplete={() => setShowImages(false)}
            className={styles.previewContainer}
          >
            <div className={styles.relativePreviewContainer}>
              <motion.div 
                key="project-1" 
                variants={listItem} 
                className='absolute top-0 right-0'
                // Dont need AnimateSharedLayout as of Framer 5.0, just need the 
                // layout id
                layoutId="ronday-preview"
              >
                <Image
                  alt="screenshot"
                  src="/images/projects/ronday/all the butterflies.png"
                  className="mb-3"
                  width={100}
                  height={33}
                />
              </motion.div>
              <motion.div 
                key="project-2" 
                layoutId="gt-preview"
                variants={listItem} 
                className='absolute left-0 right-0'
              >
                <Image
                  alt="screenshot"
                  src="/images/projects/groovytek/groovytek-home.png"
                  className="mb-3"
                  width={100}
                  height={33}
                />
              </motion.div>
              <motion.div 
                key="project-3" 
                layoutId="st-preview"
                variants={listItem} 
                className='absolute bottom-0 left-0'
              >
                <Image
                  alt="screenshot"
                  src="/images/projects/modular-synth/modular-synth-in-progress.png"
                  className="mb-3"
                  width={100}
                  height={33}
                />
              </motion.div>
              <motion.div 
                key="project-4" 
                layoutId="wp-preview"
                variants={listItem} 
                className='absolute bottom-0 right-0'
              >
                <Image
                  alt="screenshot"
                  src="/images/projects/workplace/workplace.png"
                  className="mb-3"
                  width={100}
                  height={33}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mb-32 grid text-center lg:mb-0 md:grid-cols-2 md:text-left"
        >
          <ProjectCard
            name="Ronday"
            layoutId="ronday-preview"
            src="/images/projects/ronday/all the butterflies.png"
            desc="The world’s only truly immersive space to hang out and foster stronger connections."
          />
          <ProjectCard
            layoutId="gt-preview"
            name="GroovyTek"
            src="/images/projects/groovytek/groovytek-home.png"
            desc="GroovyTek takes a personalized approach anchored in respect and patience to help folks become confident navigating personal technology independently and on their own terms."
          />
          <ProjectCard
            layoutId="st-preview"
            name="Signal Toast"
            src="/images/projects/modular-synth/modular-synth-in-progress.png"
            desc="Play, Experiment, and Create Unique Sounds"
          />
          <ProjectCard
            layoutId="wp-preview"
            name="WorkPlace"
            src="/images/projects/workplace/workplace.png"
            desc="WorkPlace is where team members can communicate and share ideas with one another in order to keep everyone in the loop and up to date with the day to day events of their workplace."
            building
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ProjectPreview
