import "../servisesPage/servisespage.css";

import img1 from "../../assets/servisespage/img1.png";
import img2 from "../../assets/servisespage/img2.png";
import img3 from "../../assets/servisespage/img3.png";
import img4 from "../../assets/servisespage/img4.png";
import img5 from "../../assets/servisespage/img5.png";
import img6 from "../../assets/servisespage/img6.png";

const servicesData = [
  {
    id: 1,
    icon: img1,
    title: "Lorem ipsum",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
  {
    id: 2,
    icon: img2,
    title: "Dolor sit amet",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
  {
    id: 3,
    icon: img3,
    title: "Consectetur elit",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
  {
    id: 4,
    icon: img4,
    title: "Adipisicing elit",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
  {
    id: 5,
    icon: img5,
    title: "Sit amet lorem",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
  {
    id: 6,
    icon: img6,
    title: "Ipsum dolor",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur adipisicing elit",
  },
];

const Servisespg = () => {
  return (
    <div>
      <div className="servisespg">
        <div className="container">
          <div className="servisespg_main">
            <div className="servisespg_title">
              <p>SERVICES</p>
              <h1>What We Do?</h1>
            </div>

            <div className="servises_bigbox">
              <div className="servises_boxs">
                {servicesData.map((service) => (
                  <div className="servises_box" key={service.id}>
                    <div className="box_icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <div className="box_title">
                      <h1>{service.title}</h1>
                    </div>
                    <div className="box_subtitle">
                      <p>{service.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Servisespg;
