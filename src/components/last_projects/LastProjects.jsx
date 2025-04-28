import React, { useState, useEffect } from "react";
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
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(1); // Default for very small screens
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

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
            slidesPerView={slidesPerView}
            spaceBetween={32}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
              <button className="swiper_btn">factory is safe & secure</button>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="swiper_btn" />
              <button className="swiper_btn">petrochemical industry</button>
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
