import React from 'react'

const BestServices: React.FC = () => {
        return (
                <div className='px-[5vw] py-[4vh] flex flex-col md:flex-row w-full gap-[4vw] '>
                        <img src="/image/topographic1.png" alt="" className='absolute top-0 left-0  w-[25vw]'/>
                        <div className='w-full md:w-[50%]'>
                                <p className='text-[2vw] md:text-[1.6vw] lg:text-[1.4vw] text-[rgba(0,0,0,0.4)] capitalize my-2'>Why choose Us</p>
                                <p className='text-[4.2vw] md:text-[3.8vw] font-medium my-2'>Best services provided by Hoode</p>
                                <p className='text-[2.2vw] md:text-[1.7vw] text-[rgba(0,0,0,0.4)] font-medium my-[2vh]'>Lorem ipsum dolor sit amet consectetur. Felis facilisis amet ornare sagittis vestibulum nibh nulla facilisis vel. Orci in et vitae tellus. orem ipsum.  vestibulum nibh nu Lorem ipsum dolor sit amet consectetur. Felis facilisis amet ornare sagittis vestibulum nibh nulla facilisis vel. Orci in et vitae tellus. orem ipsum.  vestibulum nibh nu</p>
                                <button className='bg-[#232323] rounded-full px-[3vw] py-[1vh] text-white text-[2.2vw] md:text-[1.7vw]'>Learn more</button>
                        </div>
                        <div className="grid-box text-[2.2vw] md:text-[1.7vw] h-[80vw] md:h-[35vw]">
                                <div className="cleaning-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Cleaning</div>
                                <div className="ac-div bg-[#9EE970] rounded-md flex items-center justify-center text-center">AC Repair</div>
                                <div className="painting-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Painting</div>
                                <div className="furniture-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Furniture</div>
                                <div className="plumbing-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Plumbing</div>
                                <div className="gardening-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Gardening</div>
                                <div className="electrical-div bg-[#F3F3F3] rounded-md flex items-center justify-center text-center">Electrical</div>
                                <div className="home-ap-div bg-[#9EE970] rounded-md flex items-center justify-center text-center">Home Appliances</div>
                        </div>
                </div>
        )
}

export default BestServices