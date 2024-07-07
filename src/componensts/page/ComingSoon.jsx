import React, { useState, useEffect } from 'react';
import wave from '../../assets/wave.png';
import leftwave from '../../assets/leftwave.png';
import rightwave from '../../assets/rightwave.png';
import spoon from '../../assets/spoon.png';
import fork from '../../assets/fork.png';
import Image from '../layer/Image';

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-07-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col gap-x-[140px]">
        <span className="text-[64px] font-semibold leading-[83.2px] tracking-[1.92px] capitalize font-CU text-[#F5EFDB]">{timeLeft[interval]}</span>
        <span className="text-sm text-[#AAA] font-CU text-[23px] font-bold leading-[30px] capitalize tracking-[0.92px]">{interval.charAt(0).toUpperCase() + interval.slice(1)}</span>
      </div>
    );
  });

  return (
    <div className='bg-bg-img bg-cover relative h-[90vh]'>

      <div className="max-w-[1300px] mx-auto text-[#DCCA87] flex flex-col items-center gap-y-5 py-20">
        <h1 className="text-[90px] font-bold font-CU leading-[117px] tracking-[3.6px] capitalize">Coming Soon</h1>
        <div className='flex justify-center gap-x-4'>
          <Image src={fork} />
          <Image src={spoon} />
        </div>
        <p className="text-[#fff] font-OS text-base leading-7 tracking-[0.64px] w-[741px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique feugiat orci tristique bibendum sollicitudin at aliquam. Nulla varius augue eu orci vel.
        </p>
        <div className="flex space-x-8 mb-6">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
        <button 
          onClick={() => window.location.href = '/'} 
          className="px-6 py-2 bg-[#DCCA87] text-black font-bold rounded-md"
        >
          Back To Home
        </button>
      </div>

      <p className='text-[#aaa] text-base leading-7 flex justify-center font-OS tracking-wide absolute bottom-20 w-full text-center'>
        2024 Gerícht, Made with ❣️ by 
        <span className='text-[#aaa] text-2xl leading-7 flex justify-center font-CU tracking-wide pl-4 font-extrabold '>
          <a target='_blank' href="https://shakhawat-bijoy.vercel.app/">Shakhawat Bijoy</a>
        </span> 
      </p>

      <Image className="absolute top-0 inset-0 w-full" src={wave} />
      <Image className="absolute top-0 inset-0" src={leftwave} />
      <Image className="absolute top-0 inset-0" src={rightwave} />
    </div>
  );
};

export default ComingSoon;
