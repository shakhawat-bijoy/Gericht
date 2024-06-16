import React, { useState } from 'react'
import Container from './layer/Container'
import Image from './layer/Image'
import spoon from '../assets/spoon.png'
import fork from '../assets/fork.png'
import banner01 from '../assets/banner01.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import waveline from '../assets/waveline.png'
import Button from './layer/Button'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const Banner = () => {

  let [active, setActive] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,

    beforeChange: (prev, next) => {
      setActive(next);
    },

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "0",
          transform: "translateY(100%)",
        }}
      >
        <ul style={{ 
                  margin: "0px",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  

         }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === active
            ? {
              color: "#fff",
              padding: "9px 10px 9px 0",
              fontSize: "20px",
            }
            : {
              color: "#aaa",
              padding: "9px 10px 9px 0",
              fontSize: "20px",
            }
        }
      >
        0{i + 1}
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {}
      },
      {
        breakpoint: 600,
        settings: {}
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "10px",
                transform: "translateX(-50%)",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  gap: "20px"
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: i => (
            <div
              className={`text-xs ${
                i === active
                  ? "text-[#262626] border-b-2 border-[#262626] pb-1"
                  : "text-transparent border-b-2 border-[#fff] pb-1"
              }`}
              style={{
                
                padding: "0px 5px 4px 5px",
                marginRight: "10px" 
              }}
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ],
  };

  return (
    <div className='bg-[#0C0C0C] pb-5'>
      <Container  className="relative pt-12 pb-[92px] bg-[#0C0C0C]">
        <p className='-rotate-90 text-white font-OS text-lg leading-8 inline-block my-auto absolute top-1/2'>
            <Link>#Gericht</Link>
        </p>



        <Slider {...settings}>
      <div>
      <div className='h-[736px] flex  '>
            <div className="left flex flex-col w-[453px] my-auto ml-[158px] mr-[180px]">
                 <Image className="mb-2" src={waveline} alt={"spoon"} />
                <p className='text-[23px] text-[#FFF] font-CU leading-7 tracking-[0.92px] capitalize font-bold'>Chase the new Flavour</p>
                <p className='mt-2 flex gap-x-2'>
                <Image className="rotate-180" src={fork} alt={"fork"} />
                  <Image src={spoon} alt={"spoon"} />
                </p>
                <h2  className='text-[90px] text-[#DCCA87] font-CU leading-[117px]  capitalize font-bold '>
                The key to Fine dining
                </h2>
                <p className='text-base text-[#AAA] leading-7 font-OS my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Button text="Explore Menu"/>

            </div>




            <div className="right w-[667px] relative">
                <div className="top size-[435px] bg-[#DCCA87] absolute right-0">

                </div>
                <div>
                <Image src={banner01} className="z-20 absolute top-6 left-6" />
                </div>
                <div className="bottom size-[435px] bg-[#DCCA87] absolute left-0 bottom-0">

                </div>
                
            </div>
        </div>
      </div>


      <div>
      <div className='h-[736px] flex  '>
            <div className="left flex flex-col w-[453px] my-auto ml-[158px] mr-[180px]">
            <Image className="mb-2" src={waveline} alt={"spoon"} />
                <p className='text-[23px] text-[#FFF] font-CU leading-7 tracking-[0.92px] capitalize font-bold'>Chase the new Flavour</p>
                <p className='mt-2 flex gap-x-2'>
                  <Image className="rotate-180" src={fork} alt={"fork"} />
                  <Image src={spoon} alt={"spoon"} />
                </p>
                <h2  className='text-[90px] text-[#DCCA87] font-CU leading-[117px]  capitalize font-bold '>
                The key to Fine dining
                </h2>
                <p className='text-base text-[#AAA] leading-7 font-OS my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Button text="Explore Menu"/>

            </div>




            <div className="right w-[667px] relative">
                <div className="top size-[435px] bg-[#DCCA87] absolute right-0">

                </div>
                <div>
                <Image src={banner2} className="z-20 absolute top-6 left-6" />
                </div>
                <div className="bottom size-[435px] bg-[#DCCA87] absolute left-0 bottom-0">

                </div>
                
            </div>
        </div>
        
      </div>


      <div>
      <div className='h-[736px] flex  '>
            <div className="left flex flex-col w-[453px] my-auto ml-[158px] mr-[180px]">
            <Image className="mb-2" src={waveline} alt={"spoon"} />
                <p className='text-[23px] text-[#FFF] font-CU leading-7 tracking-[0.92px] capitalize font-bold'>Chase the new Flavour</p>
                <p className='mt-2 flex gap-x-2'>
                <Image className="rotate-180" src={fork} alt={"fork"} />
                  <Image src={spoon} alt={"spoon"} />
                </p>
                <h2  className='text-[90px] text-[#DCCA87] font-CU leading-[117px]  capitalize font-bold '>
                The key to Fine dining
                </h2>
                <p className='text-base text-[#AAA] leading-7 font-OS my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Button text="Explore Menu"/>

            </div>




            <div className="right w-[667px] relative">
                <div className="top size-[435px] bg-[#DCCA87] absolute right-0">

                </div>
                <div>
                <Image src={banner3} className="z-20 absolute top-6 left-6" />
                </div>
                <div className="bottom size-[435px] bg-[#DCCA87] absolute left-0 bottom-0">

                </div>
                
            </div>
        </div>
        
      </div>


      <div>
      <div className='h-[736px] flex  '>
            <div className="left flex flex-col w-[453px] my-auto ml-[158px] mr-[180px]">
            <Image className="mb-2" src={waveline} alt={"spoon"} />
                <p className='text-[23px] text-[#FFF] font-CU leading-7 tracking-[0.92px] capitalize font-bold'>Chase the new Flavour</p>
                <p className='mt-2 flex gap-x-2'>
                <Image className="rotate-180" src={fork} alt={"fork"} />
                  <Image src={spoon} alt={"spoon"} />
                </p>
                <h2  className='text-[90px] text-[#DCCA87] font-CU leading-[117px]  capitalize font-bold '>
                The key to Fine dining
                </h2>
                <p className='text-base text-[#AAA] leading-7 font-OS my-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <Button text="Explore Menu"/>

            </div>




            <div className="right w-[667px] relative">
                <div className="top size-[435px] bg-[#DCCA87] absolute right-0">

                </div>
                <div>
                <Image src={banner01} className="z-20 absolute top-6 left-6" />
                </div>
                <div className="bottom size-[435px] bg-[#DCCA87] absolute left-0 bottom-0">

                </div>
                
            </div>
        </div>
      </div>


    </Slider>


       
      </Container>
    </div>
  )
}

export default Banner
