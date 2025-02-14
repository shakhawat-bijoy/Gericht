import React from 'react'
import Image from '../layer/Image'
import chef1 from '../../assets/chef01.jpg'
import chef2 from '../../assets/chef2.jpg'
import chef3 from '../../assets/chef3.jpg'
import chef4 from '../../assets/chef4.jpg'
import chef5 from '../../assets/chef5.jpg'
import chef6 from '../../assets/chef6.jpg'
import Line2 from '../../assets/Line2.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FiTwitter } from 'react-icons/fi'

const Chefss = () => {
  return (
    <div className='py-[152px] flex flex-col justify-center items-center gap-y-16 bg-[#070707] bg-home-bg'>
      
        <div className='flex gap-x-8'>
          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
        <div className='relative'>
        <div className='border border-[#DCCA87]'>
            <Image src={chef1}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
          </div>
          </div>
          <Link to="/chef-details">
            <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Kevin Luo</h5>
            <p className='font-OS text-base leading-7 text-[#FFF]'>Head Chef</p>
          </Link>
            


            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>


          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
          <div className='relative'>
            <Image src={chef2}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
              </div>
            <Link to="/chef-details">
              <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Patrick Choi</h5>
              <p className='font-OS text-base leading-7 text-[#FFF]'>Deputy Chef</p>
            </Link>


            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>



          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
          <div className='relative'>
            <Image src={chef3}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
              </div>

              <Link to="/chef-details">
            <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Jack Biscoff</h5>
            <p className='font-OS text-base leading-7 text-[#FFF]'>Station Chef</p>
            </Link>


            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>

        </div>




        <div className='flex gap-x-8'>

          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
            <div className='relative'>
            <Image src={chef4}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
              </div>
              <Link to="/chef-details">
            <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Stacy Lee</h5>
            <p className='font-OS text-base leading-7 text-[#FFF]'>Station Chef</p>
            </Link>


            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>



          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
          <div className='relative'>
            <Image src={chef5}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
              </div>
              <Link to="/chef-details">
            <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Aren Goodman </h5>
            <p className='font-OS text-base leading-7 text-[#FFF]'>Junior Chef</p>
            
            </Link>

            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>



          <div className='w-[412px] h-[646px] relative overflow-hidden group'>
          <div className='relative'>
            <Image src={chef6}/>
              <p className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 group"></p>
              </div>
              <Link to="/chef-details">
            <h5 className='text-[#DCCA87] text-[45px] font-semibold leading-[58.5px] tracking-[1.8px] font-CU mt-8 mb-2'>Javier Dowsing</h5>
            <p className='font-OS text-base leading-7 text-[#FFF]'>Junior Chef</p>
            </Link>


            <div className="overlay w-full absolute bottom-0 translate-y-[110%] left-0 group-hover:translate-y-[-220%] transition-all duration-200 group">

                <ul className='flex justify-center items-center gap-x-4 mb-4'>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaFacebookF />
                        </Link>

                        <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FiTwitter />
                      </Link>

                      <Link className='hover:text-[#DCCA87] text-[#fff] w-6 h-6'>
                         <FaInstagram />
                      </Link>


                </ul>
                      <Link className='flex items-center justify-center'>
                        <Image src={Line2}/>
                        <button className='w-[97px] text-white hover:text-[#DCCA87] text-base font-bold leading-7 font-CU bg-transparent '>Read More</button>
                      </Link>
            </div>
          </div>

        </div>



       
    </div>
  )
}

export default Chefss



{/* called in Team Page */}