import "../testimosnials/testimosnials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { HiMiniUserCircle } from "react-icons/hi2";

const testimonialsData = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Molestiae perspiciatis voluptate sequi error totam, esse
quo libero enim. Deserunt voluptas, tenetur ipsa rerum
et placeat. Facilis doloribus perferendis amet
architecto. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Molestiae perspiciatis voluptate sequi
error totam, esse quo libero enim. Deserunt voluptas,
tenetur ipsa rerum et placeat. Facilis doloribus
perferendis amet architecto.`,
    name: "John Carter",
    title: "businessman",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Molestiae perspiciatis voluptate sequi error totam, esse
quo libero enim. Deserunt voluptas, tenetur ipsa rerum
et placeat. Facilis doloribus perferendis amet
architecto. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Molestiae perspiciatis voluptate sequi
error totam, esse quo libero enim. Deserunt voluptas,
tenetur ipsa rerum et placeat. Facilis doloribus
perferendis amet architecto.`,
    name: "Emily Davis",
    title: "designer",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Molestiae perspiciatis voluptate sequi error totam, esse
quo libero enim. Deserunt voluptas, tenetur ipsa rerum
et placeat. Facilis doloribus perferendis amet
architecto. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Molestiae perspiciatis voluptate sequi
error totam, esse quo libero enim. Deserunt voluptas,
tenetur ipsa rerum et placeat. Facilis doloribus
perferendis amet architecto.`,
    name: "Michael Brown",
    title: "developer",
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Molestiae perspiciatis voluptate sequi error totam, esse
quo libero enim. Deserunt voluptas, tenetur ipsa rerum
et placeat. Facilis doloribus perferendis amet
architecto. Lorem ipsum dolor sit amet consectetur
adipisicing elit. Molestiae perspiciatis voluptate sequi
error totam, esse quo libero enim. Deserunt voluptas,
tenetur ipsa rerum et placeat. Facilis doloribus
perferendis amet architecto.`,
    name: "Sarah Johnson",
    title: "freelancer",
  },
];

const Testimosnials = () => {
  return (
    <div className="testimosnials">
      <div className="container">
        <div className="testimosnials_main">
          <div className="testimosnials_title">
            <p>TESTIMONIALS</p>
            <h1>What Clients Say?</h1>
          </div>

          <div className="swiper_carusel_testimosnials">
            <Swiper
              navigation={false}
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed={1000}
              className="mySwiper"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimosnials_img">
                    <HiMiniUserCircle />
                  </div>
                  <div className="testimosnials_carusel_info">
                    <div className="carusel_info">
                      <p>{testimonial.text}</p>
                      <h1>{testimonial.name}</h1>
                      <p>{testimonial.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimosnials;
