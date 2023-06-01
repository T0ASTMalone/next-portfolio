'use client'
import Image from 'next/image';
import React, { useState } from 'react'

function PCarousel() {
  const [curr, setCurr] = useState<string>('');
  // TODO: make # off images dynamic by passing in a list of images and 
  // calculating w and h by the container w and h / number of images
  // TODO: add transitions by using layout id?
  // TODO: make preview only show a portion of the image (make fill and overlap the 
  // other images 
  return (
    <div className="flex relative rounded overflow-hidden">
      <div className='absolute w-full h-full pointer-events-none'>
        {curr && <Image className='w-full h-full' fill src={curr} alt="current" />}
      </div>
      <Image 
        onMouseEnter={() => setCurr('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s')}
        onMouseLeave={() => setCurr('')}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s"
        width={200}
        height={200}
        alt="dog" 
      />
      <Image
        onMouseEnter={() => setCurr('https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80')}
        onMouseLeave={() => setCurr('')}
        src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"
        width={200}
        height={200}
        alt="dog"
      />
      <Image
        onMouseEnter={() => setCurr('https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000')}
        onMouseLeave={() => setCurr('')}
        src="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000"
        width={200}
        height={200}
        alt="dog"
      />
    </div>
  )
}

export default PCarousel
