

"use client";
import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineStar, AiOutlineMessage } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from './burgerMenu';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };

    return (
        <div className='p-5'>
            {/* Main container */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">

                {/* Left logo */}
                <div className="flex flex-row justify-between mb-4 md:mb-0 lg:w-1/4 w-full">
                    <Image src="/logo.png" alt="logo" width="200" height="200" />
                    <div className='lg:hidden block '>
                    <BurgerMenu/>
                    </div>
                </div>



                {/* Centered buttons */}
                <div className="flex flex-row  justify-center items-center gap-4 md:gap-9">
                    {/* Search */}
                    <div className="relative flex items-center mb-4 md:mb-0">
                        <button onClick={toggleDropdown} className="lg:flex hidden  items-center gap-3">
                            Search <BsChevronDown />
                        </button>
                        {isOpen && (
                            <div className="absolute bg-gray-400/90 z-20 mt-[95px] lg:ml-[100px] border rounded shadow-md p-2">
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    1
                                </a>
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    2
                                </a>
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    3
                                </a>
                            </div>
                        )}
                    </div>

                    {/* News & Guides */}
                    <button className="mb-4 md:mb-0 lg:block hidden">
                        News & Guides
                    </button>

                    {/* Sell */}
                    <button className='lg:block hidden bg-red-500 text-white pl-4 pr-4 pt-2 pb-2 md:text-[16px] md:pl-5 md:pr-5 md:pt-2 md:pb-2 border rounded-lg'>
                        <Link href={'/sell'}>Sell</Link>
                    </button>
                </div>

                {/* Right buttons */}
                <div className='flex items-center gap-4'>
                    <div className="relative flex items-center mb-4 md:mb-0">
                       
                        <button onClick={toggleDropdown1} className="lg:flex hidden items-center gap-1">
                            <AiOutlineBell size={24} />
                            <BsChevronDown />
                        </button>
                        {isOpen1 && (
                            <div className="absolute bg-gray-400/90 z-20 mt-[95px] lg:ml-[100px] border rounded shadow-md p-2">
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    1
                                </a>
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    2
                                </a>
                                <a href="#" className=" block px-4 py-2 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out">
                                    3
                                </a>
                            </div>
                        )}
                    </div>
                    <div className='flex gap-3 items-center'>

                    </div>
                    <AiOutlineStar size={24} className="lg:block hidden"/>
                    <AiOutlineMessage size={24} className="lg:block hidden" />
                    <button className='lg:block hidden bg-blue-900 text-white pr-4 pl-4 pt-2 pb-2 md:pr-8 md:pl-8 md:pt-2 md:pb-2 border rounded-lg'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}
