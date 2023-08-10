import React from 'react'
import HomeBanner from '../components/HomeBanner'
import BestServices from '../components/BestServices'
import Connecting from '../components/Connecting'
import Bid from '../components/Bid'
import Unlock from '../components/Unlock'
import Corporate from '../components/Corporate'
import Testimonials from '../components/Testimonials'
import Optimize from '../components/Optimize'
import Footer from '../components/Footer'

const Home: React.FC = () => {
        return (
                <div className='w-full h-full overflow-x-hidden p-[1.2vw]'>
                        <HomeBanner />
                        <BestServices />
                        <Connecting />
                        <Bid />
                        <Unlock />
                        <Corporate />
                        <Testimonials />
                        <Optimize />
                        <Footer />
                </div>
        )
}

export default Home