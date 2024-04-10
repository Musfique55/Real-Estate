// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './../../index.css';
import { useEffect, useState } from 'react';
import Estatecards from '../Estatecards/Estatecards';
import { useLoaderData } from 'react-router-dom';
import Stuffs from '../Stuffs/Stuffs';
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
            <div>
                <h3 className='text-5xl font-bold text-center my-12'>Popular Estates</h3>
                <div className='grid grid-cols-3 gap-6 mb-12'>
                {
                    estates.map(estate => {
                    return  <Estatecards key={estate.id} estate={estate}></Estatecards>
                    })
                }
                </div>
            </div>
            <div >
                <h2 className='text-4xl font-semibold text-center mb-12'>Our Stuffs</h2>
                <div className='grid grid-cols-3 gap-y-10'>
                {
                    stuffs.map((stuff,idx) => {
                       return  <Stuffs key={idx} stuff={stuff}></Stuffs>
                    })
                }
                </div>
            </div>
        </div>
    );
};

export default Home;