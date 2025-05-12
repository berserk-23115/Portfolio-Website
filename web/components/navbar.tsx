import { div } from 'motion/react-client'
import React from 'react'

function navbar() {
  return (
    <div className='mx-[48px]'>
        <div className='flex justify-between items-center'>
        <div>
            <p className='italic font-inter font-bold text-3xl'>BERSERK</p>
        </div>
        <div className='flex flex-row gap-12'>
            <a className="text-lg font-bold italic font-inter" href=''>About Me</a>
            <a className="text-lg font-bold italic font-inter" href=''>Projects</a>
            <a className="text-lg font-bold italic font-inter" href=''>Publications</a>
            <a className="text-lg font-bold italic font-inter" href=''>Resume</a>
        </div>
    </div>
    </div>
  )
}

export default navbar