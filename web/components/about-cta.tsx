import React from 'react';
import { geist } from '../fonts';

function AboutCta() {
  return (
    <div className="mx-[133px]">
      <div className="grid grid-cols-2">
        <div>
          <p className="text-3xl font-bold font-geist">About Me</p>
          <p className={`${geist.className} mt-3 font-regular text-xl leading-6`}>
            You really want to know about me? Okay.👍🏻<br />
            Yeah! I am a developer 👨🏻‍💻 who has no life 😅. I will be found lingering around on  LinkedIn🕵🏻 or watching anime.<br/> 
            <a href="" className="font-bold"> My Anime List (MAL)</a><br />

            I am also an hobby Photographer, who only clicks Mother Nature
            
          </p>
          <p>
            
          </p>
        </div>
        <div className="w-full px-20 py-20">
          <div className='flex flex-col gap-4'>
            <img src="https://skillicons.dev/icons?i=python,c,cpp,js,ts,rust" alt="skills" />
            <img src="https://skillicons.dev/icons?i=figma,spring,nextjs,react,threejs,mysql" alt="skills" />
            <img src="https://skillicons.dev/icons?i=bash,latex,md,notion,postgres,prisma" alt="skills" />
            <img src="https://skillicons.dev/icons?i=aws,gcp,supabase,kubernetes,docker,terraform" alt="skills" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCta;