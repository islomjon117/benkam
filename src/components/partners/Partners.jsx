import "../partners/partners.css";

import Marquee from "react-fast-marquee";

import img1 from "../../assets/partners_img/img1.png";
import img2 from "../../assets/partners_img/img2.png";
import img3 from "../../assets/partners_img/img3.png";
import img4 from "../../assets/partners_img/img4.png";
import img5 from "../../assets/partners_img/img5.png";
import img6 from "../../assets/partners_img/img6.png";
import img7 from "../../assets/partners_img/img7.png";
import img8 from "../../assets/partners_img/img8.png";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <div className="partners_main">
            <Marquee>
              <div className="partners_bigbox">
                <div className="partners_img">
                  <img src={img1} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img2} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img3} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img4} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img5} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img6} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img7} alt="" />
                </div>
                <div className="partners_img">
                  <img src={img8} alt="" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
