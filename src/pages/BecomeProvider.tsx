import BecomeBanner from "../components/BecomeBanner"
import Footer from "../components/Footer"
import HowItWorks from "../components/HowItWorks"
import LiveWorld from "../components/LiveWorld"
import Testimonials from "../components/Testimonials"

const BecomeProvider = () => {
        return (
                <div className='w-full h-full overflow-x-hidden'>
                        <BecomeBanner />
                        <LiveWorld />
                        <HowItWorks />
                        <Testimonials />
                        <div className='w-full py-[4vh] '>
                                <div className='rounded-md w-full text-black bg-[#9EE970] px-[4vw] py-[4.5vw] relative'>
                                        <img src="/image/phone6.png" alt="" className='absolute  bottom-0 w-[33vw] right-[12vw]' />
                                        <img src="/image/phone5.png" alt="" className='absolute  bottom-0 w-[33vw] right-[25vw]' />
                                        <div className="w-[100%] flex flex-row justify-between">
                                                <div className='w-[50%]'>
                                                        <p className='text-[3.5vw] font-medium my-[2vh]'>You Offer <br />We provide</p>
                                                        <div className="flex flex-row gap-5 my-[1vh]">
                                                                <button>
                                                                        <img src="/image/playstore.png" alt="Playstore" className='w-[15vw] md:w-[12vw]' />
                                                                </button>
                                                                <button>
                                                                        <img src="/image/appstore.png" alt="App Store" className='w-[15vw] md:w-[12vw]' />
                                                                </button>
                                                        </div>
                                                </div>
                                                <div className='w-[50%]'></div>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </div>
        )
}

export default BecomeProvider