import "../about/about.css";
import { useFilterContext } from "../context/Context";

import img2 from "../../assets/about_img/img2.png";
import img3 from "../../assets/about_img/img3.png";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useFilterContext();
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="about_main">
            <div className="about_left">
              <div className="about_title">
                <h2> {t("about_title")}</h2>
              </div>
              <p>
              {t("about_p")}
              </p>
              <p>
              {t("about_p2")}
              </p>

              <div className="about_btn">
                <Link to="/about">
                  <button className="about_us_btn">About us</button>
                </Link>
              </div>
            </div>

            <div className="about_right">
              <div className="img_first">
                <img src={img2} alt="" />
              </div>

              <div className="img_second">
                <img src={img3} alt="" />
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
