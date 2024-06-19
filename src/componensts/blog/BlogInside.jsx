import React from 'react'
import Image from '../layer/Image'
import Blog1 from '../../assets/Blog1.jpg'
import blogdetail1 from '../../assets/blogdetail1.jpg'
import Line2 from "../../assets/Line2.png"
import comma from "../../assets/comma.png"
import Video from '../Video'
import Sidebar from './Sidebar'
import { BiComment } from 'react-icons/bi'
import { FaRegHeart } from 'react-icons/fa'

const BlogInside = () => {
  return (
    <div className='py-[152px]'>
        <div className='max-w-[1300px] flex flex-col  mx-auto gap-y-10'>
            <div className='flex justify-between mb-6'>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7 '>16 Apr 2021</p>
            <p className='text-[#FAFAFA] font-OS text-[16px] leading-7'>- Annalisa L</p>
            
            </div>
            <div>

            <p className='text-[#DCCA87] font-CU text-[64px] leading-[83.2px] capitalize font-semibold
                mb-10 tracking-[1.92px] relative group inline-block'>tips for prepping and caring for your grill<span className="absolute -bottom-[0.5px] left-0 w-0 h-[1px] bg-[#DCCA87] transition-all duration-300 group-hover:w-full"></span>
            </p>
                <Image className='cursor-auto object-cover w-full h-[475px]' src={Blog1}/>
            </div>


            <div className='flex gap-x-[69px]'>
                <div className='max-w-[856px] h-[1747px] flex flex-col gap-y-10'>
                    <p className='font-OS text-[#AAA] leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>

                    <div className='flex flex-col gap-y-8'>
                        <h5 className='text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] tracking-[0.92px] capitalize'>How to prepare your grill</h5>
                        <p className='font-OS text-[#AAA] leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>




                        <div className='flex flex-col gap-y-6 font-OS'>
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base leading-7 capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </p>
                            
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base  leading-7 capitalize'> Tincidunt pharetra ut lobortis id.</p>
                            </p>
                            
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base  leading-7 capitalize'>Commodo sit libero lacus a egestas penatibus pretium quis lorem. </p>
                            </p>
                            
                            
                        </div>
                    </div>

                        <Video/>

                        <p className='font-OS text-[#AAA] leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.</p>

                        <div className='bg-[#545454] flex justify-center border border-[#DCCA87] relative'>
                            <h5 className='text-[#fff] font-CU text-[32px] leading-[42px] tracking-[1.28px] capitalize my-[73px]'>There is no love sincerer than the love of food.</h5>
                            <Image className="absolute left-4 top-0 text-[#aaa]"  src={comma}/>
                            <Image className="absolute right-4 bottom-0 rotate-180 text-[#aaa]"  src={comma}/>
                        </div>


                    <div className='flex gap-x-8'>
                    <div className='flex flex-col gap-y-8 max-w-[523px]'>
                        <h5 className='text-[#DCCA87] font-CU text-[23px] font-bold leading-[30px] tracking-[0.92px] capitalize'>How to prepare your grill</h5>
                        <p className='font-OS text-[#AAA] leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin cidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem.</p>




                        <div className='flex flex-col gap-y-6 font-OS'>
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base leading-7 capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </p>
                            
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base  leading-7 capitalize'> Tincidunt pharetra ut lobortis id.</p>
                            </p>
                            
                            <p className='flex items-center gap-x-2'>
                                <Image src={Line2}/>
                                <p className='text-[#aaa] text-base  leading-7 capitalize'>Commodo sit libero lacus a egestas penatibus. </p>
                            </p>
                            
                            
                        </div>
                    </div>
                        <Image src={blogdetail1}/>
                    </div>

                    <p className='font-OS text-[#AAA] leading-7 tracking-[0.64px] text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.</p>

                    
                </div>

                <Sidebar/>
            </div>


            <div className='flex items-center justify-between mt-4 max-w-[856px]'>

                <div className='flex gap-x-4 items-center'>
                    <p className='text-[#C4C4C4] font-OS text-base leading-7 tracking-[0.64px]'>#Grilling</p>
                    <p className='text-[#C4C4C4] font-OS text-base leading-7 tracking-[0.64px]'>#Outdoors</p>
                    <p className='text-[#C4C4C4] font-OS text-base leading-7 tracking-[0.64px]'>#Cooking</p>
                </div>

                <div className='flex items-center gap-x-8  cursor-pointer'>
                    <span className='flex gap-x-4 items-center'>

                    <BiComment className='text-[#DCCA87] h-6 w-6 hover:text-white'/>
                    <p className='text-[#C4C4C4] font-OS text-base leading-7 tracking-[0.64px] hover:font-bold transition-all duration-300'>Comment</p>
                    </span>

                    <span className='flex gap-x-4 items-center'>

                    <FaRegHeart className='text-[#DCCA87] hover:text-white h-6 w-6'/>
                    <p className='text-[#C4C4C4] font-OS text-base leading-7 tracking-[0.64px] hover:font-bold transition-all duration-300'>Like</p>
                    </span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BlogInside