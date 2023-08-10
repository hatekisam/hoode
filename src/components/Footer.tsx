import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
        return (
                <div className='w-full  '>
                        <div className="flex flex-row px-[4vw] py-[4.5vw]">
                                <div className='w-[45%]'>
                                        <img src='/image/logo.png' alt='logo'  className='w-[15vw]'/>
                                        <p className='text-[1.8vw] font-medium text-[rgba(0,0,0,0.4)] my-4'>Get your work done on fingertips</p>
                                </div>
                                <div className='flex flex-row justify-around w-[55%] text-[1.4vw]'>
                                        <div className='flex flex-col gap-2'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"/about"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"/contact"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"/joinus"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"/about"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"/contact"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"/joinus"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                                <p className=' font-medium '>Company</p>
                                                <Link to={"/about"} className=' font-medium text-[rgba(0,0,0,0.4)]'>About us</Link>
                                                <Link to={"/contact"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Contact us</Link>
                                                <Link to={"/joinus"} className=' font-medium text-[rgba(0,0,0,0.4)]'>Join Our Team</Link>
                                        </div>
                                </div>
                        </div>
                        <div className="w-full h-1 bg-[rgba(0,0,0,0.1)] rounded-md" />
                        <div className="flex flex-row justify-between items-center px-[4vw] py-[2vw] text-[1.7vw]">
                                <div className="flex flex-row gap-3 items-center font-medium">
                                        <p>&copy;{new Date().getFullYear()} tols.design</p>
                                        <p className='text-[rgba(0,0,0,0.4)]'>All rights reserved</p>
                                </div>
                                <div className="flex flex-row gap-3 items-center text-[rgba(0,0,0,0.4)] font-medium">
                                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                                        <Link to={"/terms-conditions"}>Terms Conditions</Link>
                                </div>
                        </div>
                </div>
        )
}

export default Footer