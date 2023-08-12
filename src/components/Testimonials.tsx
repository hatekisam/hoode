import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Testimonials: React.FC = () => {
        const responsive = {
                superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5
                },
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1
                }
        };
        const reviews = [
                {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }, {
                        stars: 4,
                        body: "Hoode has been a lifesaver! From finding a skilled plumber for a leaky faucet ",
                        by: "Tooles"
                }
        ]
        return (
                <div className='w-full text-center py-5'>
                        <p className='text-[1.2vw] text-[rgba(0,0,0,0.4)] font-medium'>Testmonials</p>
                        <p className='text-[3.5vw] font-medium'>User Reviews</p>
                        <Carousel responsive={responsive} draggable renderDotsOutside={false} showDots infinite className="owl-carousel owl-theme skill-slider my-10 pb-20">
                                {reviews.map((review, index) => {
                                        return (
                                                <div key={index} className='w-full flex items-center justify-center'>
                                                        <div className='w-[90%]  bg-[#F5F5F5] rounded-xl  p-[2vw]'>
                                                                <div className="flex flex-row gap-1 items-center my-[1vh]">
                                                                        <img src="/image/star.png" alt="" className='w-[2vw]' />
                                                                        <img src="/image/star.png" alt="" className='w-[2vw]' />
                                                                        <img src="/image/star.png" alt="" className='w-[2vw]' />
                                                                        <img src="/image/star.png" alt="" className='w-[2vw]' />
                                                                        <img src="/image/star.png" alt="" className='w-[2vw]' />
                                                                </div>
                                                                <p className='text-[2.2vw] my-[1vh]'>{review.body}</p>
                                                                <div className="flex flex-row gap-5 my-[1vh]">
                                                                        <div className='bg-[rgba(0,0,0,0.06)] p-1 rounded-full'>
                                                                                <img src="/svg/profile.svg" alt="" className='w-[2vw]' />
                                                                        </div>
                                                                        <p className='text-[1.7vw]'>By {review.by}</p>
                                                                </div>
                                                        </div>  
                                                </div>
                                        )
                                })}

                        </Carousel>
                </div>
        )
}

export default Testimonials