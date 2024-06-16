import React from 'react'
import Video from '../Video'
import Image from '../layer/Image'
import fork from '../../assets/fork.png'
import spoon from '../../assets/spoon.png'
import AboutHeader from './AboutHeader'

const AboutVideo = () => {
  return (
    <div className='max-w-[1300px] pb-[152px] mx-auto flex flex-col items-center'>
        <p className='text-[#fff] font-CU text-[23px] font-bold leading-[30px]'>About Us</p>
            <div className="flex  gap-x-2 my-2 justify-center items-center">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className='cursor-auto' src={spoon} />
          </div>
        <p className="text-[#DCCA87] font-CU text-[64px] font-semibold leading-[83pxpx] tracking-[3.6px]">Happy Hours with Us</p>
        <p className='text-[#aaa] font-OS text-base font-normal leading-7 max-w-[824px] text-center mb-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <div className='w-full h-[763px]'>
        <Video/>
        </div>
    </div>
  )
}

export default AboutVideo