import React from 'react';
import { PiCarProfileDuotone } from 'react-icons/pi';
import { FaMotorcycle } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';
import { FaTruckMoving } from 'react-icons/fa';
import { TbMotorbike } from 'react-icons/tb';
import { GiCargoShip } from 'react-icons/gi';
import Image from 'next/image';
import Car from './car';
import Footer from './footer';

const iconStyle = 'bg-gray-200 w-full sm:w-1/6 h-full flex items-center justify-center pt-2 pb-2';

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative h-[950px]">
        {/* Image div */}
        <div className="absolute z-1">
          <Image src="/hero.JPG" alt="logo" width="1920" height="496" />
        </div>

        {/* Specification div */}
        <div className="absolute top-0 sm:top-20 md:top-32 lg:top-52 left-1/2 transform -translate-x-1/2 z-2 w-full sm:w-5/6 md:w-[80%] lg:w-[1160px] bg-white border rounded-lg" style={{ boxShadow: '0px 5px 20px 0px rgba(78, 78, 78, 0.25)' }}>

          {/* icons div */}
          <div className='flex flex-wrap justify-center mx-auto sm:flex-row w-full sm:border sm:rounded-lg sm:border-white'>
            <button className='bg-white w-full sm:w-1/6 h-full flex items-center justify-center pt-2 pb-2'> <PiCarProfileDuotone size={25} color="red" /></button>
            <button className={iconStyle}> <FaMotorcycle size={25} /></button>
            <button className={iconStyle}> <TbMotorbike size={25} /></button>
            <button className={iconStyle}> <FaTruckMoving size={25} /></button>
            <button className={iconStyle}> <ImTruck size={25} /></button>
            <button className={iconStyle}> <GiCargoShip size={25} /></button>
          </div>

          {/* Specification of car div */}
          <Car />
          
          {/* Footer */}
          <div className="mt-8 block lg:hidden">
            <Footer />
          </div>

        </div>

      </div>

      <div className="mt-8 lg:block hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Hero;
