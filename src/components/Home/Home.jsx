import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import client1 from '../../../public/client-1.png';
import client2 from '../../../public/client-2.png';
import client3 from '../../../public/client-3.png';
import client4 from '../../../public/client-4.png';
import client5 from '../../../public/client-5.png';
import client6 from '../../../public/client-6.png';
import 'swiper/css';
import 'swiper/css/pagination';
import './../../index.css';
import { useEffect, useState } from 'react';
import Estatecards from '../Estatecards/Estatecards';
import { useLoaderData } from 'react-router-dom';
import Stuffs from '../Stuffs/Stuffs';
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
import Testimonial from './../Testimonial/Testimonial';
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
        <div className='mx-12'>
            <Helmet>
                <title>Alex Estate | Home</title>
            </Helmet>
            <div className='rounded-lg'>
            <Swiper
                style={{
                    borderRadius : '16px'
                    // height: '100vh'
                }}
                // direction={'vertical'}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                
                autoplay = {{
                    delay :  2500,
                    enable : true
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="slider-1 items-center justify-start first-swiper-slider">
                        <h3 className=' text-5xl text-white'>Buying Residence for Family <br />  and Future Investment</h3>
                </SwiperSlide>
                <SwiperSlide className="slider-2 flex items-center justify-center first-swiper-slider">
                        <h3 className='text-5xl text-white'>Buying Residence for Family <br /> and Future Investment</h3>
                </SwiperSlide>
                <SwiperSlide className="slider-3 flex items-center justify-center first-swiper-slider">
                        <h3 className='text-5xl text-white'>Buying Residence for Family <br /> and Future Investment</h3>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className='my-12'>
                <h5 className='text-center text-lg text-gray-500 mb-3'>Discover</h5>
                <h3 className='text-5xl font-bold text-center mb-8'>Popular Estates</h3>
                <div className='grid grid-cols-3 gap-6 mb-12'>
                {
                    estates.map(estate => {
                    return  <Estatecards key={estate.id} estate={estate}></Estatecards>
                    })
                }
                </div>
            </div>
            <div >
                <h5 className='text-center text-lg text-gray-500 mb-2 mt-16'>Meet</h5>
                <h2 className='text-4xl font-semibold text-center mb-12'>Our Dynamic Agents</h2>
                <div className='grid grid-cols-3 gap-y-10'>
                {
                    stuffs.map((stuff,idx) => {
                       return  <Stuffs key={idx} stuff={stuff}></Stuffs>
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
        </div>
    );
};

export default Home;