import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeBanner: React.FC = () => {
        const [mobileNav, setMobileNav] = useState(false)
        const [changeLanguage,setChangeLanguage] =useState(false)
        return (
                <div className='rounded-md w-full text-white bg-[#232323] px-[5vw] py-5 relative'>
                        <img src="/image/texture1.png" alt="" className="w-full h-full absolute  top-0 left-0" />
                        <img src="/image/phone1.png" alt="" className="w-[20vw] absolute  bottom-0 right-[28vw]" />
                        <img src="/image/phone2.png" alt="" className="w-[20vw] absolute  bottom-0 right-[5vw]" />
                        <div className='flex flex-row justify-between items-center relative  p-[1vw] rounded-full text-white'>
                                {mobileNav && (
                                        <div className="block md:hidden absolute top-[110%] right-0 rounded-md  bg-[#232323] p-[2vw]  w-[70vw]">
                                                {changeLanguage && (
                                                        <div className='block md:hidden absolute rounded-md  bg-[#232323] p-[2vw] top-[103%] -left-10 w-[30vw]'>
                                                                <div className="flex flex-row justify-between">
                                                                        <div></div>
                                                                        <button onClick={() => setChangeLanguage(false)} >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 h-5 fill-white'>
                                                                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                                </svg>
                                                                        </button>
                                                                </div>
                                                                <button onClick={() => setChangeLanguage(false)} className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                        <p className='font-medium'>Arab</p>
                                                                </button>
                                                                <button onClick={() => setChangeLanguage(false)} className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                        <p className='font-medium'>Eng(USA)</p>
                                                                </button>
                                                                <button onClick={() => setChangeLanguage(false)} className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                        <p className='font-medium'>Eng(UK)</p>
                                                                </button>
                                                                <button onClick={() => setChangeLanguage(false)} className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                        <p className='font-medium'>Arab</p>
                                                                </button>
                                                        </div>)}
                                                <div className="flex flex-col gap-1  text-sm w-full">
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
                                                        <div className='flex flex-row  items-center  justify-between '>
                                                                <button className="flex flex-row gap-3 items-center  py-[0.8vh]  px-[2vw]" onClick={() => setChangeLanguage(true)}>
                                                                        <img src="/image/usa.png" alt="United States English" />
                                                                        <p className='font-medium'>Eng</p>
                                                                </button>
                                                                <button className='text-black font-medium bg-[#9EE970] py-[0.8vh]  px-[2vw]  rounded-full'>Become a Provider</button>
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
                                        {changeLanguage && (
                                                <div className='hidden md:block absolute rounded-md  bg-[#232323] p-[1vw] pr-[3vw] top-[110%] right-[10vw] w-[40vw]'>
                                                        <div className="flex flex-row justify-between">
                                                                <div></div>
                                                                <button onClick={() => setChangeLanguage(false)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='w-5 h-5 fill-white'>
                                                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                        <div className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                <p className='font-medium'>Arab</p>
                                                        </div>
                                                        <div className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                <p className='font-medium'>Eng(USA)</p>
                                                        </div>
                                                        <div className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                <p className='font-medium'>Eng(UK)</p>
                                                        </div>
                                                        <div className="flex flex-row gap-3 items-center p-1  rounded-md ">
                                                                <p className='font-medium'>Arab</p>
                                                        </div>
                                                </div>
                                        )}
                                        <div className="flex flex-row gap-3 items-center p-1 hover:border rounded-md transition-all  relative" onClick={() => setChangeLanguage(true)}>
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
                        <div className='my-[4vh] w-[45%]'>
                                <p className='text-[5vw]'>Get your work done with <span className='text-[rgba(255,255,255,0.5)]'>Hoode</span></p>
                                <p className='font-medium text-[rgba(255,255,255,0.4)] text-[1.7vw]'>Lorem ipsum dolor sit amet consectetur. Felis facilisis amet ornare sagittis vestibulum nibh nulla facilisis vel. Orci in et vitae tellus. orem ipsum.  vestibulum nibh nu</p>
                                <div className="flex flex-row items-center gap-3 my-[2vh]">
                                        <div className="flex flex-row items-center gap-3 bg-white text-black px-[2vw] py-[0.6vh] rounded-full">
                                                <img src="/svg/playstore.svg" alt="Playstore" className="w-[1.5vw]" />
                                                <p className='font-medium text-[1.7vw]'>Google Play</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-3 bg-[rgba(255,255,255,0.1)] px-[2vw] py-[0.6vh] rounded-full">
                                                <img src="/svg/apple.svg" alt="App Store" className="w-[1.5vw]" />
                                                <p className='font-medium text-[1.7vw]'>App Store</p>
                                        </div>
                                </div>
                        </div>
                        <div className="flex flex-row items-center w-[50%] justify-around">
                                <div>
                                        <p className='text-[4vw] font-bold'>20k</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Happy Customer</p>
                                </div>
                                <div>
                                        <p className='text-[4vw] font-bold'>6+</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Total Services</p>
                                </div>
                                <div>
                                        <p className='text-[4vw] font-bold'>8k</p>
                                        <p className='text-[rgba(154,161,143)] text-[1.8vw] font-medium'>Years of Experience</p>
                                </div>
                        </div>
                </div>
        )
}

export default HomeBanner