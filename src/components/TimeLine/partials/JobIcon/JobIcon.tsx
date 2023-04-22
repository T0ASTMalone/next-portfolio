'use client'
import React from 'react';
import { AppWindow, Factory, Stack } from '@phosphor-icons/react';

function JobIcon({ job, className }) {
  switch (job) {
    case 'GroovyTek': 
      return <Stack className={className} />;
    case 'Thinkful':
      return <Stack className={className} />;
    case 'Ronday':
      return <AppWindow className={className} />;
    default:
      return <Factory className={className} />;
  }
}

export default JobIcon
