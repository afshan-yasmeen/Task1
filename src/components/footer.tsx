import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { IoLogoYoutube } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
const Footer = () => {
    return (
     
        <div className='bg-blue-900 text-white'>
            <div className='flex flex-col md:flex-row px-4 md:px-8 lg:px-12 py-10'>
                {/*  first column  */}
                <div className='w-full md:w-1/2 lg:pr-8'>
                    <h1 className='text-2xl md:text-4xl pb-5 md:pb-9'>
                        The most wanted makes and models
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 '>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-lg md:text-xl text-white'>Audi A4</button>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-[18px] text-white'>Audi A4</button>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-[18px] text-white'>Audi A4</button>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-[18px] text-white'>Audi A4</button>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-[18px] text-white'>Audi A4</button>
                        <button className='bg-white/30 border rounded-lg border-white/30 m-2 p-2 text-[18px] text-white'>Audi A4</button>

                        {/*  Add more buttons as needed  */}
                    </div>
                </div>
                {/*  second column   */}
                <div className='w-full lg:w-1/3 hidden lg:block lg:pr-8'>
                    <h1 className='text-2xl md:text-4xl pb-4 md:pb-5'>
                        Quick Links
                    </h1>
                    <div className='flex flex-col'>
                        <a href="#" className='pb-2'>Vehicle Assessment</a>
                        <a href="#" className='pb-2'>Safe, scam free used car shopping</a>
                        <a href="#" className='pb-2'>Email Ads</a>
                        <a href="#" className='pb-2'>Book of impressions</a>
                        <a href="#" className='pb-2'>Advantages of advertising</a>
                        <a href="#" className='pb-2'>Frequently asked question</a>
                        <a href="#" className='pb-2'>Digital Advertising</a>
                        <a href="#" className='pb-2'>About us</a>
                        <a href="#" className='pb-2'>Term of use</a>
                        <a href="#" className='pb-2'>Privacy notice</a>
                        <a href="#" className='pb-2'>You provide car services</a>
                        <a href="#" className='pb-2'>Mobile application</a>
                        <a href="#" className='pb-2'>Friends of the site</a>
                    </div>
                </div>
                {/* third column   */}
                <div className='w-full md:w-1/3 pl-5 lg:pl-0'>
                    <h1 className='text-2xl md:text-4xl pb-4 md:pb-30'>
                        Lets connect
                    </h1>
                    <div className='flex flex-row gap-3 pb-5 md:pb-30'>
                        {/* Add your social media icons here */}
                        <FaFacebook size={32} />
                        <BsInstagram size={32} />
                        <SiLinkedin size={32} />
                        <IoLogoYoutube size={32} />
                        <FaTwitter size={32} />
                    </div>
                    <div className='flex flex-row pr-5 gap-3'>
                        {/* Add your app store images here  */}
                        <div className='bg-black border rounded-lg border-gray-400 w-[143px] h-[47px]'>
                            <Image src="/googleplay.JPG" alt="logo" width="143" height="47" className='border rounded-lg border-black' />
                        </div>

                        <div className='bg-black border rounded-lg border-gray-400 w-[143px] h-[47px]'>
                            <Image src="/applestore.JPG" alt="logo" width="143" height="47" className='border rounded-lg border-black' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer