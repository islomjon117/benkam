import "../sevices/services.css";

import { MdOutlineFactory } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <>
      <div className="services" id="services">
        <div className="container">
          <div className="services_main">
            <div className="services_title">
              <h3>OUR SERVICES</h3>
              <h1>What We Offer & What We Do</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                aspernatur
              </p>
            </div>

            <div className="services_boxs">
              <div className="services_box">
                <Link to="/servises">
                  <span>
                    <TbBuildingSkyscraper />
                  </span>
                  <h2>Building Materials</h2>
                  <div className="box_short_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                  </div>
                </Link>
              </div>
              <div className="services_box">
                <Link to="/servises">
                  <span>
                    <FaPeopleGroup />
                  </span>
                  <h2>top specialists</h2>
                  <div className="box_short_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                  </div>
                </Link>
              </div>

              <div className="services_box">
                <Link to="/servises">
                  <span>
                    <TbReportAnalytics />
                  </span>
                  <h2>accurate Planning</h2>
                  <div className="box_short_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                  </div>
                </Link>
              </div>

              <div className="services_box">
                <Link to="/servises">
                  <span>
                    <TbBuildingSkyscraper />
                  </span>
                  <h2>Building Materials</h2>
                  <div className="box_short_info">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="media_screen">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1.2,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2.5,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="services_box">
                    <Link to="/servises">
                      <span>
                        <TbBuildingSkyscraper />
                      </span>
                      <h2>Building Materials</h2>
                      <div className="box_short_info">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="services_box">
                    <Link to="/servises">
                      <span>
                        <FaPeopleGroup />
                      </span>
                      <h2>top specialists</h2>
                      <div className="box_short_info">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="services_box">
                    <Link to="/servises">
                      <span>
                        <TbReportAnalytics />
                      </span>
                      <h2>accurate Planning</h2>
                      <div className="box_short_info">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="services_box">
                    <Link to="/servises">
                      <span>
                        <TbBuildingSkyscraper />
                      </span>
                      <h2>Building Materials</h2>
                      <div className="box_short_info">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
