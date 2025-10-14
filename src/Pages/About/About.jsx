import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import img1 from '../../assets/technology 2.png';
import img2 from '../../assets/Rectangle 117.png'
import img3 from '../../assets/Rectangle 118.png'
import services from '../../assets/Services (1).png'
import services2 from '../../assets/Services (2).png'
import services3 from '../../assets/Services (3).png'
import services4 from '../../assets/Services.png';
import SwiperAbout from './SwiperAbout/SwiperAbout';

const About = () => {
    return (
        <div className='container py-6 px-4'>
            {/* Breadcrumb */}
            <div className='flex items-center gap-2 mt-6 font-secondry text-sm sm:text-base'>
                <Link className='text-gray' to={'/'}>Home</Link>
                <IoIosArrowForward className='text-arrow' />
                <Link className='text-arrow' to={''}>About</Link>
            </div>

            {/* About Section */}
            <div className="flex flex-col lg:flex-row justify-between font-primary font-bold mt-10 gap-8 lg:gap-0">
                {/* Left Side - Text */}
                <div className="flex flex-col gap-4 lg:basis-[45%]">
                    <h1 className='text-blue text-3xl sm:text-4xl lg:text-[54px] font-semibold'>
                        About Us
                    </h1>
                    <p className='capitalize leading-[2.5] text-[#545454] font-secondry font-semibold'>At E-Commerce, we believe online shopping is more than just buying products; it's an experience that reflects your needs and aspirations. Our app was created to blueefine online shopping by offering innovative solutions that provide both convenience and satisfaction. We are committed to offering a wide range of products that cater to your daily needs, whether it's electronics, clothing, or household items.</p>
                </div>

                {/* Right Side - Images */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 w-full flex-wrap">
                        <img src={img3} alt="Img" className='flex-1 object-cover rounded-md' />
                        <img src={img2} alt="Img" className='flex-1 md:w-1/2 object-cover rounded-md' />
                    </div>
                    <img className='w-full object-cover rounded-md' src={img1} alt="Img" />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-6 flex flex-col items-center text-center gap-4 font-primary">
                    <img src={services} className='w-[60px]' alt="" />
                    <h1 className='font-bold text-2xl sm:text-3xl'>10.5k</h1>
                    <span className='capitalize text-sm sm:text-base'>Sellers active on our site</span>
                </div>

                <div className="shadow-main text-white bg-blue rounded-md p-6 flex flex-col items-center text-center gap-4 font-primary">
                    <img src={services4} className='w-[60px]' alt="" />
                    <h1 className='font-bold text-2xl sm:text-3xl'>33k</h1>
                    <span className='capitalize text-sm sm:text-base'>Monthly Product Sale</span>
                </div>

                <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-6 flex flex-col items-center text-center gap-4 font-primary">
                    <img src={services2} className='w-[60px]' alt="" />
                    <h1 className='font-bold text-2xl sm:text-3xl'>25k</h1>
                    <span className='capitalize text-sm sm:text-base'>Annual gross sale on our site</span>
                </div>

                <div className="shadow-main hover:bg-blue hover:text-white text-dark transition-all duration-300 rounded-md p-6 flex flex-col items-center text-center gap-4 font-primary">
                    <img src={services3} className='w-[60px]' alt="" />
                    <h1 className='font-bold text-2xl sm:text-3xl'>45.5k</h1>
                    <span className='capitalize text-sm sm:text-base'>Customers active on our site</span>
                </div>
            </div>

            {/* Swiper Section */}
            <div className="mt-10">
                <SwiperAbout />
            </div>
        </div>
    )
}

export default About
