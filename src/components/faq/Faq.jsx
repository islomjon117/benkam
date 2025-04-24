import { useState, useRef, useEffect } from "react";
import "../faq/faq.css";
import { GoArrowDownRight } from "react-icons/go";
import img from "../../assets/aboutcom/img.png";

const dropdownItems = [
  {
    title: "Entire Production Line Installation",
    text: "This alloy is used for building structures and is used only for extruded profiles. It has a fairly high strength and, at the same time, can be pressed into more complex profiles than 6082 and 6061 alloys. Special advantage is in pressing thin-walled hollow profiles.",
  },
  {
    title: "Small & Large Component Fabrication",
    text: "The alloy with the highest compressibility (easy pressing) and the lowest sensitivity to hardening is the European aluminum alloy 6060 due to the lowest concentration of alloying elements. Typical applications: windows, stairs, handrails, truck body parts.",
  },
  {
    title: "Hard Facing & Corrosion Resistant Overlay",
    text: "Alloy 6063 has a finer grain structure than the 6060, provides a better cosmetic appearance after anodizing. It has high corrosion resistance and good workability and weldability. Common use includes a cylinder tube, electrical bus conductors and architectural applications.",
  },
  {
    title: "Pipe fitting Complete Piping Systems",
    text: "Aluminum alloy 6082 is most widely used in construction. Usually, this alloy is the main building aluminum alloy for both welded structures and structures without the use of welding. Alloy 6082 is a high-strength alloy, which is used in various types of aluminum rolled products.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // <--- Birinchi accordion ochiq turadi
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const contentRefs = useRef([]);

  useEffect(() => {
    if (openIndex !== null) {
      const contentEl = contentRefs.current[openIndex];
      if (contentEl) {
        contentEl.style.height = `${contentEl.scrollHeight}px`;
      }
    }

    // Boshqalarni yopish
    contentRefs.current.forEach((el, i) => {
      if (i !== openIndex && el) {
        el.style.height = "0px";
      }
    });
  }, [openIndex]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="faq">
      <div className="container">
        <div className="faq_main">
          <div className="faq_left">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className={`alloy-6005a_drop_down_box1 ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <div className="alloy-6005a_dropdown_left">
                  <div
                    className="title_and_arrow"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <h1>{item.title}</h1>
                    <span
                      className={`dropdownarrow ${
                        openIndex === index ? "rotate" : ""
                      }`}
                    >
                      <GoArrowDownRight />
                    </span>
                  </div>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      overflow: "hidden",
                      height: "0px",
                      transition: "height 0.4s ease",
                    }}
                  >
                    <p className="accordion-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq_right">
            <div className="big_img">
              <div
                className="about_right_img"
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    transform: `rotateX(${-tilt.y * 30}deg) rotateY(${
                      tilt.x * 30
                    }deg)`,
                    transformOrigin: "center",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
              <div className="img_bg_about" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Faq;
