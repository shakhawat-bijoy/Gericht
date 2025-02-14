import React from 'react';
import Container from './layer/Container';
import Image from './layer/Image';
import spoon from '../assets/spoon.png';
import fork from '../assets/fork.png';
import Button from './layer/Button';
import DatePicker from 'react-datepicker'; // Import React Date Picker
import 'react-datepicker/dist/react-datepicker.css'; // Import Date Picker CSS

const Reservations = () => {
  return (
    <div className='h-[959px] bg-[#070707] bg-home-bg flex justify-center items-center'>
      <Container>
        <div className='w-[1364px] bg-[#070707] border text-center py-12 px-8'>
          <div className='header m-auto'>
            <p className='text-[#FFFFFF] font-CU text-[23px] font-bold leading-[30px]'>Reservations</p>
            <p className='mt-2 flex justify-center gap-x-2'>
              <Image className="rotate-180 cursor-auto" src={fork} alt={"fork"} />
              <Image className="cursor-auto" src={spoon} alt={"spoon"} />
            </p>
            <p className='text-[#DCCA87] font-CU text-[64px] font-semibold leading-[83px] capitalize'>Book A Table</p>
          </div>

          <div className='my-16 flex gap-x-8 justify-center'>
            {/* Person Selection */}
            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] lg:text-sm text-xs flex-grow'>
              <select className='outline-none text-[#AAAAAA] py-4 flex justify-start bg-transparent w-full'>
                <option className='bg-[#0C0B08]'>
                  <span className="py-4">1 person</span>
                </option>
                <option className='bg-[#0C0B08]'>
                  <span className="py-4">2 person</span>
                </option>
                <option className='bg-[#0C0B08]'>
                  <span className="py-4">3 person</span>
                </option>
              </select>
            </div>

            {/* Date Picker */}
            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] text-sm flex-grow'>
              <DatePicker
                className='outline-none text-[#aaa] py-4 flex justify-start bg-transparent w-full'
                selected={new Date()}
                onChange={(date) => console.log(date)}
              />
            </div>

            {/* Time Selection */}
            <div className='border bg-transparent border-[#AAAAAA] text-[#767676] lg:text-sm text-xs flex-grow'>
              <select className='outline-none text-[#AAAAAA] py-4 flex justify-start bg-transparent w-full'>
                <option className='bg-[#0C0B08] py-4'>
                  <span className="py-4">11:00 AM</span>
                </option>
                <option className='bg-[#0C0B08]'>
                  <span className="py-">12:00 PM</span>
                </option>
                <option className='bg-[#0C0B08]'>
                  <span className="py-4">1:00 PM</span>
                </option>
              </select>
            </div>
          </div>

          <Button className='w-[133px]' text="Book Now" />
        </div>
      </Container>
    </div>
  );
}

export default Reservations;
