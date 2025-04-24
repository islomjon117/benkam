import "../footer/footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_main">
            <div className="footer_logo">
              <img src={logo} alt="" />
            </div>

            <div className="footer_boxs">
              <div className="footer_box2">
                <p>BENKAM in Europe</p>
                <h3>Galines g. 1, LT-14247, GALINĖS K. AVIŽIENIŲ SEN. VILNIAUS R.</h3>
                <p>+370 648 45 075</p>
                <Link>b.bekbaev@benkam.eu</Link>
              </div>
              <div className="footer_box2">
                <p>BENKAM in Europe</p>
                <h3>Galines g. 1, LT-14247, GALINĖS K. AVIŽIENIŲ SEN. VILNIAUS R.</h3>
                <p>+370 648 45 075</p>
                <Link>b.bekbaev@benkam.eu</Link>
              </div>
              <div className="footer_box1">
                <Link>Company profile</Link>
                <Link>Mission and vision</Link>
                <Link>Quality policy</Link>
                <Link>News</Link>
              </div>
              <div className="footer_box1">
                <Link>Aluminium profiles</Link>
                <Link>Fabrication</Link>
                <Link>Surface treatment</Link>
                <Link>Application</Link>
                <Link>Individual extrusion solutions</Link>
              </div>
              <div className="footer_box1">
                <Link>Die Design Shop</Link>
                <Link>Production capacity</Link>
                <Link>Standards and alloys</Link>
                <Link>Quality control</Link>
                <Link>Equipment</Link>
                <Link>Packaging and logistics</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
