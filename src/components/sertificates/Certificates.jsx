import { Link } from "react-router-dom";
import "../sertificates/certificates.css";
import { FaRegFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const data = [
  {
    sectionTitle: "Bo‘lim 1",
    items: Array(6).fill("Bo‘lim 1 sertifikati"),
  },
  {
    sectionTitle: "Bo‘lim 2",
    items: Array(6).fill("Bo‘lim 2 sertifikati"),
  },
  {
    sectionTitle: "Bo‘lim 3",
    items: Array(6).fill("Bo‘lim 3 sertifikati"),
  },
  {
    sectionTitle: "Bo‘lim 4",
    items: Array(6).fill("Bo‘lim 4 sertifikati"),
  },
];

const Certificates = () => {
  const [activeSection, setActiveSection] = useState(null); 

  useEffect(() => {
    setActiveSection(0);
  }, []); 
  const toggleSection = (index) => {
    setActiveSection((prev) => (prev === index ? null : index)); 
  };

  return (
    <>
      <div className="certificates">
        <div className="container">
          <div className="certificates_main">
            <div className="certificates_title">
              <h1>Certificates</h1>
            </div>

            <div className="certificates_box">
              <div className="certificates_left">
                <h2>Certification</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  facilis similique repudiandae fugit est quidem ducimus. Illum
                  error reiciendis veniam expedita aspernatur, rerum quia
                  possimus iusto, illo autem, ducimus tempore! Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. In facilis similique
                  repudiandae fugit est quidem ducimus. Illum error reiciendis
                  veniam expedita aspernatur, rerum quia possimus iusto, illo
                  autem, ducimus tempore!
                </p>
                <Link to='/usa'>
                  Read more about quality management <br />
                  <br /> approach
                </Link>
              </div>

              <div className="certificates_right">
                <div className="sertifications_box_map">
                  {data.map((section, index) => (
                    <div key={index}>
                      <h2
                        onClick={() => toggleSection(index)}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color:"#52b947"
                        }}
                      >
                        <span>{section.sectionTitle}</span>
                        <span>
                          {activeSection === index ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </h2>
                      <div
                        className={`dropdown ${activeSection === index ? "open" : ""}`}
                        style={{
                          maxHeight: activeSection === index ? "500px" : "0", 
                          transition: "max-height 0.4s ease-out", 
                        }}
                      >
                        <div className="dropdown-content">
                          {section.items.map((item, idx) => (
                            <div className="certificates_right_box" key={idx}>
                              <div className="sertifications_icon">
                                <span>
                                  <FaRegFilePdf />
                                </span>
                                <p>
                                  {item} - {idx + 1}
                                </p>
                              </div>
                              <p>Qo‘shimcha ma’lumot</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
