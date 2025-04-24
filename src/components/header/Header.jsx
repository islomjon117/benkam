import "../header/header.css";

import bg from "../../assets/header/header_bg.mp4";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/Context";

const Header = () => {
  const { t } = useFilterContext();
  return (
    <>
      <div className="header" id="home">
        <video autoPlay muted loop>
          <source src={bg} type="video/mp4" />
        </video>
        <div className="container">
          <div className="header_main">
            <div className="header_title">
              <h1>we build trust, we're Xtra factory</h1>
            </div>
            <div className="header_buttons">
              <button className="contact_btn">{t("header_btn1")}</button>
              <Link
                to="https://akfagroup.com/benkam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="wiev_360">{t("header_btn2")}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
