import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tooltip'

import ArrowRight from '@/components/Icons/ArrowRight'
import Barricade from '@/components/Icons/Barricade'

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
type ProjectCardProps = {
  name: string;
  src: string;
  desc: string;
  building?: boolean;
}

function ProjectCard({ name, src, desc, building }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${name.toLowerCase().split(' ').join('-')}`}
      className="
            group rounded-lg border border-transparent px-5 py-4 
            transition-colors hover:border-gray-300 hover:bg-gray-100 
            hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30
          "
    >
      <Image
        alt={`${name} screenshot`}
        src={src}
        className="mb-3"
        width={300}
        height={100}
      />
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {name}
        {building && (
          <>
            {' '}
            <Barricade
              size={24}
              weight="fill"
              color="#F0DC00"
              className="inline-block"
              id="baracade"
              data-tooltip-id="baracade"
              data-tooltip-content="Under construction"
            />
          </>
        )}
        {' '}
        <ArrowRight
          size={24}
          className="
            inline-block transition-transform group-hover:translate-x-1 
            motion-reduce:transform-none
          "
        />
      </h2>
      <p
        className={`${inter.className} text-left m-0 max-w-[30ch] text-sm opacity-50 truncate`}
      >
        {desc}
      </p>
      <Tooltip id="baracade"/>
    </Link>
  );
}

export default ProjectCard;
