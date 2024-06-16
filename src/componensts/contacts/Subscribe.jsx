import React, { useRef, useState } from 'react'
import Lcover from '../../assets/Lcover.jpg'
import GW from '../../assets/GW.png'
import Image from '../layer/Image'
import Button from '../layer/Button'


   

const Subscribe = () => {


    const formRef = useRef(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
          "service_qegpces",
          "template_9oyrm84",
          formRef.current,
          "ccJYIr_NBfu69fLwu"
        )
        .then(
          (result) => {
            setSuccess(true)
          },
          (error) => {
            setError(true);
          }
          );
      };

  return (
    <div className='bg-bg-img py-32'>
        <div className='w-[1300px] flex justify-between items-center mx-auto'>
        <div className="left w-[635px] h-[400px]">
        <div className="flex flex-col mx-auto gap-5 w-[330px] lg:w-full">
      <form
        className="flex flex-col mx-auto gap-5 w-[330px] lg:w-full"
        ref={formRef}
        onSubmit={sendEmail}
      >
        <input
          className="p-4 lg:p-5 bg-transparent border border-[#F5EFDB] rounded-md text-white"
          type="text"
          required
          placeholder="Name"
          name="name"
        />
        <input
          className="p-4 lg:p-5 bg-transparent border border-[#F5EFDB] rounded-md text-white"
          type="email"
          required
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-4 lg:p-5 bg-transparent border border-[#F5EFDB] rounded-md text-white "
          rows={5}
          // style={{ "@media (min-width: 1024px)": { rows: 8 } }}
          placeholder="Message"
          name="message"
        />
        <Button
          className="p-2 w-[129px]"
          type="submit"
          text="Subscribe"
        >
          
        </Button>
        {error && <span className="text-red-500">Error</span>}
        {success && <span className="text-green-500">Success</span>}
      </form>
    </div>
        </div>





        <div className="right w-[483px] h-[691px] flex justify-center items-center">
        <div className='right relative '>
            <Image src={Lcover}/>
            <Image className='absolute bottom-0 translate-x-[-20%] ' src={GW}/>
          </div>


        </div>
    </div>
    </div>
  )
}

export default Subscribe