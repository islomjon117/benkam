import React, { useRef, useState } from "react";
import "../last_projects/lastprojects.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../assets/lastproject/img1.png";
import img2 from "../../assets/lastproject/img2.png";
import img3 from "../../assets/lastproject/img3.png";
import img4 from "../../assets/lastproject/img5.png";
import img5 from "../../assets/lastproject/img5.png";

const LastProjects = () => {
  return (
    <>
      <div className="lastproject" id="projects">
        <div className="container">
          <div className="lastproject_main">
            <div className="lastproject_title">
              <div className="titles">
                <h3>LATEST PROJECTS</h3>
                <h1>Featured Projects</h1>
              </div>
              <button className="lastproject_title_btn">Projects</button>
            </div>
          </div>
        </div>

        <div className="carusels">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
              <button className="swiper_btn">factory is safe & sercure</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="swiper_btn" />
              <button className="swiper_btn">petrochemical indastury</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="swiper_btn" />
              <button className="swiper_btn">Welding & Laser cut</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="swiper_btn" />
              <button className="swiper_btn">CNC Machinery</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="swiper_btn" />
              <button className="swiper_btn">Aircraft Jet Turbine</button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LastProjects;
