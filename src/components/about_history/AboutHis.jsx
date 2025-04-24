import "../about_history/abouthis.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { FaUsersLine } from "react-icons/fa6";
import img1 from "../../assets/history_img/img.png";

const AboutHis = () => {
  return (
    <>
      <div className="about_his">
        <div className="container">
          <div className="about_his_main">
            <div className="about_his_boxs">
              <div className="about_his_left">
                <div className="about_hisBg2" />
                <img src={img1} alt="" />
              </div>

              <div className="about_his_right">
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
                    <div className="about_his_info">
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
                    <div className="about_his_info">
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

export default AboutHis;
