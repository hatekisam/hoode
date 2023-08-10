import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
        const [mobileNav, setMobileNav] = useState(false)
        return (
                <div className='flex flex-row justify-between items-center relative bg-[#232323] p-[3vw] rounded-full text-white'>
                        {mobileNav && (
                                <div className="block md:hidden absolute -bottom-[22vw] right-0 rounded-md  bg-[#232323] p-[2vw]">
                                        <div className="flex flex-col gap-1 text-[1.5vw]">
                                                <div className="flex flex-row justify-between">
                                                        <div></div>
                                                        <button onClick={() => setMobileNav(false)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 h-5 fill-white'>
                                                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                </svg>
                                                        </button>
                                                </div>
                                                <Link to={"/about"}>About us</Link>
                                                <Link to={"/blog"}>Blog</Link>
                                                <Link to={"/contact-us"}>Contact us</Link>
                                                <div className='flex flex-row gap-3 items-center  '>
                                                        <div className="flex flex-row gap-3 items-center">
                                                                <img src="/image/usa.png" alt="United States English" className='w-[2vw]' />
                                                                <p className='font-medium'>Eng</p>
                                                        </div>
                                                        <button className='text-black font-medium bg-[#9EE970] py-[1.2vh]  px-[2vw] text-[1vw] rounded-full'>Become a Provider</button>
                                                </div>
                                        </div>
                                </div>
                        )}
                        <div className="hidden md:flex flex-row gap-4 text-xs lg:text-base">
                                <Link to={"/about"}>About us</Link>
                                <Link to={"/blog"}>Blog</Link>
                                <Link to={"/contact-us"}>Contact us</Link>
                        </div>
                        <img src='/svg/logo.svg' alt='logo' className='w-[10vw]' />
                        <div className='hidden md:flex flex-row gap-3 items-center text-[10px] sm:text-base   '>
                                <div className="flex flex-row gap-3 items-center">
                                        <img src="/image/usa.png" alt="United States English" />
                                        <p className='font-medium'>Eng</p>
                                </div>
                                <button className='text-black font-medium bg-[#9EE970] py-4  px-5 rounded-full'>Become a Provider</button>
                        </div>
                        <button className="block md:hidden" onClick={() => setMobileNav(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                                </svg>
                        </button>
                </div>
        )
}

export default Navbar