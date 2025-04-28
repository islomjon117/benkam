import { Link } from "react-router-dom";
import "../sertificates/certificates.css";
import { FaRegFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const data = [
  {
    sectionTitle: "International Certificates",
    items: [
      {
        title: "ISO 9001",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "ITF 16949",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "ISO 14001 / ISO 45001 / ISO 50001",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "ISO 17020",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "ISO 17025",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
    ],
  },
  {
    sectionTitle: "Quality Certificates",
    items: [
      {
        title: "Qualanod Architectural",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Qualanod Industrial",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Qualanod Decorative",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 2 sertifikati",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Qualicoat Seaside",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
    ],
  },
  {
    sectionTitle: "National certificates",
    items: [
      {
        title: "Bo‘lim 3 sertifikati 1",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 3 sertifikati 2",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 3 sertifikati 3",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 3 sertifikati 4",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 3 sertifikati 5",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 3 sertifikati 6",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
    ],
  },
  {
    sectionTitle: "Environmental certificates",
    items: [
      {
        title: "Bo‘lim 4 sertifikati 1",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 4 sertifikati 2",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 4 sertifikati 3",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 4 sertifikati 4",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 4 sertifikati 5",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
      {
        title: "Bo‘lim 4 sertifikati 6",
        link: "https://drive.google.com/file/d/1aekNEaj725dyHH8rUxKk9aB6XgtkYfO5/view?usp=sharing",
      },
    ],
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                facilis similique repudiandae fugit est quidem ducimus. Illum
                error reiciendis veniam expedita aspernatur, rerum quia possimus
                iusto, illo autem, ducimus tempore!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                facilis similique repudiandae fugit est quidem ducimus. Illum
                error reiciendis veniam expedita aspernatur, rerum quia possimus
                iusto, illo autem, ducimus tempore!error reiciendis veniam expedita aspernatur, rerum quia possimus
                
              </p>
              <Link to="/usa">
                Read more about quality management <br /> <br /> approach
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
                        color: "#52b947",
                      }}
                    >
                      <span>{section.sectionTitle}</span>
                      <span>
                        {activeSection === index ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    </h2>
                    <div
                      className={`dropdown ${
                        activeSection === index ? "open" : ""
                      }`}
                      style={{
                        maxHeight: activeSection === index ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease-out",
                      }}
                    >
                      <div className="dropdown-content">
                        {section.items.map((item, idx) => (
                          <div className="certificates_right_box" key={idx}>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="sertifications_icon">
                                <span>
                                  <FaRegFilePdf />
                                </span>
                                <p>{item.title}</p>
                              </div>
                              <p>Qo‘shimcha ma’lumot</p>
                            </a>
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
  );
};

export default Certificates;
