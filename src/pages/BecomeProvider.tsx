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
                        <Footer />
                </div>
        )
}

export default BecomeProvider