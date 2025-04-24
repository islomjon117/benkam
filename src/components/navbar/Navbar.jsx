import "../navbar/navbar.css";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFilterContext } from "../context/Context";
import "../../i18/i18";


import logo from "../../assets/logo/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  
  const { t,  changeLanguage, } = useFilterContext();

  const navigate = useNavigate();
  const [scrollToId, setScrollToId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/certificates") {
      setActiveLink("certificates");
    } else if (location.pathname === "/contact") {
      setActiveLink("contact");
    } else if (location.pathname === "/projects") {
      setActiveLink("projects");
    } else {
      setActiveLink("");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveLink(scrollToId);
        setScrollToId(null);
      }
    }
  }, [location.pathname, scrollToId]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_main">
          <div className="logo_and_links">
            <div className="nav_logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            {/* Hamburger menu for mobile */}
            <div
              className="hamburger"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Sidebar (nav links + lang dropdown + social media) */}
            <div className={`nav_links ${sidebarOpen ? "open" : ""}`}>
              <div className="navbar_links2">
                <Link
                  to="/"
                  className={activeLink === "home" ? "active" : ""}
                  onClick={() => {
                    if (location.pathname === "/") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                    setActiveLink("home");
                    setSidebarOpen(false);
                  }}
                >
                  {t("navLink1")}
                </Link>

                <Link
                  className={activeLink === "about" ? "active" : ""}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      setScrollToId("about");
                      navigate("/");
                    } else {
                      const el = document.getElementById("about");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      setActiveLink("about");
                    }
                    setSidebarOpen(false);
                  }}
                >
                   {t("navLink2")}
                </Link>

                <Link
                  className={activeLink === "services" ? "active" : ""}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      setScrollToId("services");
                      navigate("/");
                    } else {
                      const el = document.getElementById("services");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      setActiveLink("services");
                    }
                    setSidebarOpen(false);
                  }}
                >
                   {t("navLink3")}
                </Link>

                <Link
                  to="/certificates"
                  className={activeLink === "certificates" ? "active" : ""}
                  onClick={() => {
                    setActiveLink("certificates");
                    setSidebarOpen(false);
                  }}
                >
                  {t("navLink4")}
                </Link>

                <Link
                  className={activeLink === "projects" ? "active" : ""}
                  onClick={() => {
                    if (location.pathname !== "/") {
                      setScrollToId("projects");
                      navigate("/");
                    } else {
                      const el = document.getElementById("projects");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      setActiveLink("projects");
                    }
                    setSidebarOpen(false);
                  }}
                >
                   {t("navLink5")}
                </Link>

                <Link
                  to="/contact"
                  className={activeLink === "contact" ? "active" : ""}
                  onClick={() => {
                    setActiveLink("contact");
                    setSidebarOpen(false);
                  }}
                >
                   {t("navLink6")}
                </Link>

                <Link
                  to="/jobs"
                  className={activeLink === "jobs" ? "active" : ""}
                  onClick={() => {
                    setActiveLink("jobs");
                    setSidebarOpen(false);
                  }}
                >
                   {t("navLink7")}
                </Link>

                <select className="custom-select" onClick={(e) => changeLanguage(e.target.value)}>
                  <option value="en">English</option>
                  <option value="ru">Rus</option>
                  <option value="uz">Uzbek</option>
                </select>
              </div>

              {/* Social media icons */}
              <div className="social_media">
                <div className="facebook">
                  <Link to="https://facebook.com">
                    <FaFacebook />
                  </Link>
                </div>
                <div className="twitter">
                  <Link to="https://twitter.com">
                    <FaTwitter />
                  </Link>
                </div>
                <div className="instagram">
                  <Link to="https://instagram.com">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
