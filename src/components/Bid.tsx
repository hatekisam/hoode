import React from 'react'
import { Link } from 'react-router-dom'

const Bid = () => {
        return (
                <div className='w-full py-[4vh]' >

                        <div className='rounded-md w-full text-white bg-[#232323] px-[4vw] py-[4.5vw] relative'>
                                <img src="/image/texture2.png" alt="" className='absolute  top-0 left-0 ' />
                                <img src="/image/phone3.png" alt="" className='absolute  -top-[13vw] w-[45vw]' />
                                <div className="w-[100%] flex flex-row justify-between">
                                        <div className='w-[50%] relative '></div>
                                        <div className='w-[50%]'>
                                                <p className="text-[rgba(255,255,255,0.4)] uppercase font-medium my-[2vh] text-[1.2vw]">our overview</p>
                                                <p className='text-[3.5vw] font-medium my-[2vh]'>Simply Bid,Your home, expertly served</p>
                                                <p className='font-medium text-[rgba(255,255,255,0.4)] my-[2vh] text-[1.5vw]'>Lorem ipsum dolor sit amet consectetur. Felis facilisis amet ornare sagittis vestibulum nibh nulla facilisis vel. Orci in et vitae tellus. orem ipsum.  </p>
                                                <button className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[1vh] rounded-full text-[1.5vw]'>Learn more</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Bid