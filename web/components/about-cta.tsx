import Image from 'next/image'
import React from 'react'
import { geist } from '../fonts'
function aboutcta() {
  return (
    <>
    <div className='mx-[133px]'>
        <div className="grid grid-cols-2">
            <div>
                <p className='text-3xl font-bold font-geist'>About Me</p>
                <p className={`${geist.className} mt-3 font-regular text-lg leading-5`}>
                    You really want to know about me? Okay.<br />
                    Yeah! I am a developer who has no life. I am often found lingering on LinkedIn and watching anime.<a href="" className='font-black'>MAL</a><br />
                    Jokes aside, here’s what I do:
                </p>
            </div>
            <div className='w-full'>
                <Image src="https://skillicons.dev/icons?i=java,kotlin,nodejs,figma&theme=dark" alt="skills" height={1200} width={1200}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default aboutcta