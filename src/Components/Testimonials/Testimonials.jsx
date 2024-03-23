import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import im1 from "../../im1.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaPlay } from "react-icons/fa";
import './style.css';
import alo from "../../alo.jpg"
import ARYA from "../../ARYA.jpg"
import sak from "../../shaksham.jpg"
import ary from "../../aryaman.mp4"
import saks from "../../shaksham.mp4"
import shlok from "../../shlok.mp4"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    < div className='testimonial-container'>
        <div className='heading'>What Our Students Say</div>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper testimonial"
      >
        <SwiperSlide className='slide swiper-slide'> <div className='black-box' style={{cursor:"pointer"}}>
        <img src={sak}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.open(saks, '_blank')}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            “Shaksham Kumar clears  the SSB in his FIRST ATTEMPT. Out of 85 candidates who reported at Naval Selection Board ( NSB)Visakhapatnam, 5 finally got recommended. Shaksham being one of them.”
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Shaksham Kumar</span>
              <span class="job">Recommended for NDA - 148</span>
            </div></SwiperSlide>
        <SwiperSlide className='swiper-slide slide'> <div className='black-box'>
        <img src={alo}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.open(shlok, '_blank')}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Shlok Anaokar</span>
              <span class="job">AirForce(Flying Branch)</span>
            </div></SwiperSlide>
        <SwiperSlide className='swiper-slide slide'> <div className='black-box'>
        <img src={ARYA}  alt="" />
        <div className='black-box-circle' onClick={()=>{window.open(ary, '_blank')}}>
        <FaPlay />
            <div className="yellow-circle3"></div>
        <div className="yellow-circle4"></div>
        </div>
        </div>
            <p>
            “Aryaman Bhatt gets recommended by 2 AFSB Mysore, in his FIRST ATTEMPT. 160 candidates reported, 49 screened in and finally 6 candidates recommended, Aryaman being the ONLY FRESHER to be recommended.”
            </p>
            <i class="bx bxs-quote-alt-left quote-icon"></i>
            <div class="details">
              <span class="name">Aryaman Bhatt</span>
              <span class="job">Recommended for AirForce(Non Flying Branch)</span>
            </div></SwiperSlide>
       
      </Swiper>
    </div>
  );
}
