import React from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import fork from '../assets/fork.png'
import spoon from '../assets/spoon.png'
import Blog1 from '../assets/Blog1.jpg'
import Blog2 from '../assets/Blog2.jpg'
import Blog3 from '../assets/Blog3.jpg'
import Blog4 from '../assets/Blog4.jpg'
import { Link } from 'react-router-dom'
import Button from './layer/Button'
import Slider from 'react-slick'

import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import UpdateBlogSlider from './UpdateBlogSlider'




function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='w-14 h-14 absolute right-5 top-1/2 bg-[#c3c3c2] translate-y-[-50%] rounded-full border !flex justify-center items-center cursor-pointer'
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        <FaArrowRightLong className='text-white'/>
  
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className='w-14 h-14 absolute left-5 top-1/2 bg-[#c3c3c2] translate-y-[-50%] rounded-full border !flex justify-center items-center z-50 cursor-pointer'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong className='text-white'/>
  
    </div>
    );
  }



const UpdateBlogs = () => {


  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,



  };

  return (
    <div className='py-[152px] bg-[#070707] bg-home-bg'>
      
        <div className=''>


        <div className=' flex flex-col justify-center items-center gap-y-2 mb-16'>
          <h3 className='font-CU text-[#FFF] text-[23px] font-semibold leading-[30px]'>Blogs</h3>
          <div className="flex  gap-x-2 ">
            <Image className="rotate-180 cursor-auto" src={fork} />
            <Image className='cursor-auto' src={spoon} />
          </div>
          <p className='text-[#DCCA87] font-CU text-[64px] leading-[83px] font-semibold capitalize'>Gerícht updates</p>
        </div>



        <Container className="w-[1360px]">
        <div>
            <Slider {...settings}>
              <div>
                <UpdateBlogSlider 
                  className="mx-auto"
                  src={Blog1}
                  date="16 Apr 2021"
                  writer="- Annalisa L"
                  title1="tips for prepping and caring"
                  title2="for your grill"
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
                  to="/blogs-detail"
                  />
              </div>

              <div>
              <UpdateBlogSlider 
                src={Blog2}
                className="mx-auto"
                date="23 May 2021"
                writer="-John Micheal"
                title1="summer cocktails and "
                title2="mocktails"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
                to="/blogs-detail"
               />
              </div>

              <div>
                <UpdateBlogSlider 
                  src={Blog3}
                  className="mx-auto" 
                  date="06 Aug 2021"
                  writer="-Fred W"
                  title1="easy cooking for college "
                  title2="students"
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
                  to="/blogs-detail"
                />
              </div>
              <div>
                <UpdateBlogSlider 
                  src={Blog4}
                  className="mx-auto" 
                  date="06 Mar 2020"
                  writer="- Andrial M"
                  title1="How to make your food "
                  title2="Photographs look aesthetic"
                  details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."
                  to="/blogs-detail"
                />
              </div>

            </Slider>
          </div>

          </Container>

        </div>
        <div className='flex justify-center items-center mt-16'>
        <Button text='View More'/>
        </div>
        
          
        
    
    </div>
  )
}

export default UpdateBlogs
