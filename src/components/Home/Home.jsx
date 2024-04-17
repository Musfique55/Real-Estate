import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import client1 from '../../../public/client-1.png';
import client2 from '../../../public/client-2.png';
import client3 from '../../../public/client-3.png';
import client4 from '../../../public/client-4.png';
import client5 from '../../../public/client-5.png';
import client6 from '../../../public/client-6.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './../../index.css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import Estatecards from '../Estatecards/Estatecards';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
import Testimonial from './../Testimonial/Testimonial';
import  CountUp  from 'react-countup';
import Team from '../Team/Team';
const Home = () => {
    const [estates,setEstates] = useState([]);
    const stuffs = useLoaderData();
    useEffect(() => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => {
            setEstates(data);
        })
    },[])
    return (
        <div className='mx-5 md:mx-12 lg:20'>
            <Helmet>
                <title>Alex Estate | Home</title>
            </Helmet>
            <div className='rounded-lg'>
            <Swiper
                style={{
                    borderRadius : '16px'
                }}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                navigation={true}
                
                autoplay = {{
                    delay :  2500,
                    enable : true,
                    disableOnInteraction : false
                    
                }}
                modules={[Autoplay,Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="slider-1 first-swiper-slider">
                        <h3 className=' text-5xl text-white'>Discover the Best Properties</h3>
                        <p className='text-white mt-5'>Discover a world of possibilities with our expert team of real estate professionals. Whether you{`'`}re buying, selling, or investing, we{`'`}re here to guide you every step of the way. Explore our vast portfolio of properties, from luxurious estates to cozy apartments, and find the perfect match for your lifestyle. With our commitment to excellence and personalized service, we{`'`}ll help you turn your real estate dreams into reality.</p>
                        <a href='#estates' className='text-white font-semibold px-6 py-3 rounded-full bg-[#CA9C6A] mt-5'>Get Started</a>
                </SwiperSlide>
                <SwiperSlide className="slider-2 first-swiper-slider">
                        <h3 className=' text-5xl text-white'>Discover the Best Properties</h3>
                        <p className='text-white mt-5'>Discover a world of possibilities with our expert team of real estate professionals. Whether you{`'`}re buying, selling, or investing, we{`'`}re here to guide you every step of the way. Explore our vast portfolio of properties, from luxurious estates to cozy apartments, and find the perfect match for your lifestyle. With our commitment to excellence and personalized service, we{`'`}ll help you turn your real estate dreams into reality.</p>
                        <a href='#estates' className='text-white font-semibold px-6 py-3 rounded-full bg-[#CA9C6A] mt-5'>Get Started</a>
                </SwiperSlide>
                <SwiperSlide className="slider-3 first-swiper-slider">
                        <h3 className=' text-5xl text-white'>Discover the Best Properties</h3>
                        <p className='text-white mt-5'>Discover a world of possibilities with our expert team of real estate professionals. Whether you{`'`}re buying, selling, or investing, we{`'`}re here to guide you every step of the way. Explore our vast portfolio of properties, from luxurious estates to cozy apartments, and find the perfect match for your lifestyle. With our commitment to excellence and personalized service, we{`'`}ll help you turn your real estate dreams into reality.</p>
                        <a href='#estates' className='text-white font-semibold px-6 py-3 rounded-full bg-[#CA9C6A] mt-5'>Get Started</a>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className='my-12'>
                <h5 className='text-center text-lg text-gray-500 mb-3'>Discover</h5>
                <h3 className='text-5xl font-bold text-center mb-8'>Popular Estates</h3>
                <div className='grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3' id='estates'>
                {
                    estates.map(estate => {
                    return  <Estatecards key={estate.id} estate={estate}></Estatecards>
                    })
                }
                </div>
            </div>
            <div className="flex justify-around items-center bg-[#CA9C6A] px-12 py-16">
      <div className="flex gap-3  items-center">
        <CountUp
          end={450}
          duration={3}
          suffix=" "
          enableScrollSpy={true}
          className="text-6xl text-white font-semibold"
        ></CountUp>
        <div>
        <p className="font-extralight text-2xl text-[#1E1E1E]">SQUARE AREAS</p>
        <p className="text-white font-extralight text-base">COMPLEX</p>
        </div>
      </div>
      <div className="flex gap-3  items-center">
        <CountUp
          end={97}
          duration={3}
          suffix=" "
          enableScrollSpy={true}
          className="text-6xl text-white font-semibold"
        ></CountUp>
        <div>
        <p className="font-extralight text-2xl text-[#1E1E1E]">HAPPY</p>
        <p className="text-white font-extralight text-base">CLIENTS</p>
        </div>
      </div>
      <div className="flex gap-3  items-center">
        <CountUp
          end={80}
          duration={3}
          enableScrollSpy={true}
          className="text-6xl text-white font-semibold"
        ></CountUp>
        <div>
        <p className="font-extralight text-2xl text-[#1E1E1E]">COMPLETED</p>
        <p className="text-white font-extralight text-base">Projects</p>
        </div>
      </div>
      <div className="flex gap-3  items-center">
        <CountUp
          end={40}
          duration={3}
          suffix=" "
          enableScrollSpy={true}
          className="text-6xl text-white font-semibold"
        ></CountUp>
        <div>
        <p className="font-extralight text-2xl text-[#1E1E1E]">TEAM</p>
        <p className="text-white font-extralight text-base">Members</p>
        </div>
      </div>
    </div>
            <div >
                <h5 className='text-center text-lg text-gray-500 mb-2 mt-16'>Meet</h5>
                <h2 className='text-4xl font-semibold text-center mb-12'>Our Dynamic Agents</h2>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    stuffs.map((stuff,idx) => {
                       return <Team key={idx} stuff={stuff}></Team>
                    })
                }
                </div>
            </div>
            <h5 className='text-center text-lg text-gray-500 mb-2 mt-16'>Trusted by the Best</h5>
            <h2 className='text-4xl font-semibold text-center mb-16'>Real Estate Partners</h2>
            <Marquee className='mb-12'>
                <img src={client1} alt="" className='w-[150px] h-14 mr-20'/>
                <img src={client2} alt="" className='w-[150px] h-14 mr-20'/>
                <img src={client3} alt="" className='w-[150px] h-14 mr-20'/>
                <img src={client4} alt="" className='w-[150px] h-14 mr-20'/>
                <img src={client5} alt="" className='w-[150px] h-14 mr-20'/>
                <img src={client6} alt="" className='w-[150px] h-14 mr-20'/>
            </Marquee>
            <div>
                <Testimonial></Testimonial>
            </div>
            {/* <Team></Team> */}
        </div>
    );
};

export default Home;