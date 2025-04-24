import "../ourhistory/history.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

import { FaUsersLine } from "react-icons/fa6";
import img1 from "../../assets/history_img/img.png";

const History = () => {
  return (
    <>
      <div className="history">
        <div className="container">
          <div className="history_mian">
            <div className="history_boxs">
              <div className="history_left">
                <div className="historyBg2" />
                <img src={img1} alt="" />
                <div className="historyBg3">
                  <span>
                    <FaUsersLine />
                  </span>
                  <h3>1313</h3>
                  <p>projects done</p>
                </div>
              </div>

              <div className="history_right">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  pagination={{ clickable: true }}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  modules={[EffectCube, Pagination, Autoplay]}
                  className="mySwiper"
                  cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 0,
                    shadowScale: 0,
                  }}
                >
                  <SwiperSlide>
                    <div className="our_history_titles">
                      <p>our history</p>
                      <h1>xtra factory visions</h1>
                    </div>
                    <div className="history_info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam distinctio vel laborum commodi debitis nesciunt
                        corporis nemo delectus rerum fugiat. Nulla minus placeat
                        asperiores magni? Corporis, saepe. Maxime, perferendis
                        error. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nam distinctio vel laborum commodi
                        debitis nesciunt corporis nemo delectus rerum fugiat.
                        Nulla minus placeat asperiores magni? Corporis, saepe.
                        Maxime, perferendis error.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="our_history_titles">
                      <p>our history</p>
                      <h1>xtra factory visions</h1>
                    </div>
                    <div className="history_info">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam distinctio vel laborum commodi debitis nesciunt
                        corporis nemo delectus rerum fugiat. Nulla minus placeat
                        asperiores magni? Corporis, saepe. Maxime, perferendis
                        error. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nam distinctio vel laborum commodi
                        debitis nesciunt corporis nemo delectus rerum fugiat.
                        Nulla minus placeat asperiores magni? Corporis, saepe.
                        Maxime, perferendis error.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
