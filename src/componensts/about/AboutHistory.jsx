import React from 'react'
import fork from '../../assets/fork.png'
import spoon from '../../assets/spoon.png'
import abouthistory from '../../assets/abouthistory.jpg'
import abouthistory2 from '../../assets/abouthistory2.jpg'
import aboutLine from '../../assets/aboutLine.png'
import Image from '../layer/Image'


const AboutHistory = () => {
  return (
    <div className='max-w-[1300px] py-[152px] mx-auto flex flex-col items-center gap-y-16'>
        <div className='text-center'>
            <p className='text-[#fff] font-CU text-[23px] font-bold leading-[30px]'>Our History</p>
            <div className="flex  gap-x-2 my-2 justify-center items-center">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className='cursor-auto' src={spoon} />
          </div>
          <h5 className='text-[#DCCA87] font-CU text-[64px] leading-[84px] tracking-[1.39px] capitalize'>serving customers for over a decade</h5>
        </div>


        <div className='w-full flex justify-center gap-x-[143px]'>
            <div className="left max-w-[523px] flex flex-col gap-y-10">
                <p className='text-[#aaa] font-OS text-base font-normal leading-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <Image src={abouthistory}/>
            </div>


            <div className="right max-w-[523px] flex flex-col gap-y-10">
                <Image className="!h-[386px] object-cover" src={abouthistory2}/>

                <div>
                    <p className='text-[#DCCA87] font-CU text-[45px] font-semibold leading-[58.5px] capitalize mb-10'>Over the years</p>

                        <div className='flex justify-between'>
                        <div>
                        <p className='text-[#DCCA87] font-CU text-[45px] font-semibold leading-[58.5px] capitalize'>30+</p>
                        <div className="flex  gap-x-2 my-2 items-center">
                            <Image className="rotate-180 cursor-auto" src={fork} />
                            <Image className='cursor-auto' src={spoon} />
                        </div>
                            <p className='text-[#fff] text-[32px] leading-[41.6px] capitalize max-w-[126px] font-CU'>Breakfast Options</p>
                        
                        </div>

                        <div className='m-auto'>
                        <Image src={aboutLine}/>
                        </div>

                        <div>
                        <p className='text-[#DCCA87] font-CU text-[45px] font-semibold leading-[58.5px] capitalize'>50+</p>
                        <div className="flex  gap-x-2 my-2 items-center">
                            <Image className="rotate-180 cursor-auto" src={fork} />
                            <Image className='cursor-auto' src={spoon} />
                        </div>
                            <p className='text-[#fff] text-[32px] leading-[41.6px] capitalize max-w-[126px] font-CU'>Dinner Options</p>
                        
                        </div>

                        <div className='m-auto'>
                        <Image src={aboutLine}/>
                        </div>

                        <div>
                        <p className='text-[#DCCA87] font-CU text-[45px] font-semibold leading-[58.5px] capitalize'>8</p>
                        <div className="flex  gap-x-2 my-2 items-center">
                            <Image className="rotate-180 cursor-auto" src={fork} />
                            <Image className='cursor-auto' src={spoon} />
                        </div>
                            <p className='text-[#fff] text-[32px] leading-[41.6px] capitalize max-w-[126px] font-CU'>New Locations</p>
                        
                        </div>
                        </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHistory