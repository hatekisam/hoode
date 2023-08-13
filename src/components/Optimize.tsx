import React from 'react'

const Optimize = () => {
        return (
                <div className='w-full py-10'>
                        <div className='rounded-md w-full text-black bg-[#9EE970] px-[4vw] py-[4.5vw] relative'>
                        <img src="/image/phone6.png" alt=""  className='absolute  bottom-0 w-[33vw] right-[12vw]'/>
                        <img src="/image/phone5.png" alt=""  className='absolute  bottom-0 w-[33vw] right-[25vw]'/>
                                <div className="w-[100%] flex flex-row justify-between">
                                        <div className='w-[50%]'>
                                                <p className='text-[4.5vw] md:text-[4vw] lg:text-[3.5vw] font-medium my-[2vh]'>Optimize your <br />time & money</p>
                                                <div className="flex flex-row gap-5 my-[1vh]">
                                                        <button>
                                                                <img src="/image/playstore.png" alt="Playstore"  className='w-[15vw] md:w-[12vw]'/>
                                                        </button>
                                                        <button>
                                                                <img src="/image/appstore.png" alt="App Store"  className='w-[15vw] md:w-[12vw]'/>
                                                        </button>
                                                </div>
                                        </div>
                                        <div className='w-[50%]'></div>
                                </div>
                        </div>
                </div>
        )
}

export default Optimize