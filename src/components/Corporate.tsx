import React from 'react'

const Corporate = () => {
        return (
                <div className='w-full py-[4vh]'>
                        <div className='rounded-md w-full text-black bg-[#EBEBEB] px-[4vw] py-[4.5vw] relative'>
                        <img src="/image/phone4.png" alt=""  className='absolute  -top-[13vw] w-[45vw] right-[2vw]'/>
                                <div className="w-[100%] flex flex-row justify-between">
                                        <div className='w-[50%]'>
                                                <p className="text-[rgba(35,35,35,0.4)] uppercase font-medium my-[1vh] text-[1.2vw]">CORPORATE</p>
                                                <p className='text-[3.5vw] font-medium my-[2vh]'>We help providers,Experienced with expertise</p>
                                                <p className='font-medium text-[rgba(35,35,35,0.4)] my-[1vh] text-[1.5vw]'>Lorem ipsum dolor sit amet consectetur. Felis facilisis amet ornare sagittis vestibulum nibh nulla facilisis vel. Orci in et vitae tellus. orem ipsum.  </p>
                                                <button className='bg-[#9EE970] px-[2vw] py-[0.3vh] text-black my-[2vh] text-[1.5vw] rounded-full'>Become a Provider</button>
                                        </div>
                                        <div className='w-[50%]'></div>
                                </div>
                        </div>
                </div>
        )
}

export default Corporate