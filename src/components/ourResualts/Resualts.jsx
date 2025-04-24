import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "../ourResualts/resualts.css";

const Resualts = () => {
  const [startCounting, setStartCounting] = useState(false);
  
  // ref yaratamiz
  const countRef1 = useRef(null);
  const countRef2 = useRef(null);
  const countRef3 = useRef(null);
  const countRef4 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStartCounting(true),
      { threshold: 0.5 }
    );

    // Barcha reflarni observer bilan kuzatamiz
    observer.observe(countRef1.current);
    observer.observe(countRef2.current);
    observer.observe(countRef3.current);
    observer.observe(countRef4.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resualts">
      <div className="container">
        <div className="resualts_main">
          <div className="resualts_title">
            <p>OUR RESULTS</p>
            <h1>What We Did?</h1>
          </div>
          <div className="resualts_box">
            <div className="resualts_box1" ref={countRef1}>
              <h1>{startCounting && <CountUp start={0} end={23} duration={3} />}+</h1>
              <hr />
              <p>Years of Experience</p>
            </div>
            <div className="resualts_box1" ref={countRef2}>
              <h1>{startCounting && <CountUp start={0} end={150} duration={3} />}+</h1>
              <hr />
              <p>Expert Engineers</p>
            </div>
            <div className="resualts_box1" ref={countRef3}>
              <h1>{startCounting && <CountUp start={0} end={96} duration={3} />}</h1>
              <hr />
              <p>Branches in World</p>
            </div>
            <div className="resualts_box1" ref={countRef4}>
              <h1>{startCounting && <CountUp start={0} end={3000} duration={3} separator="," />}</h1>
              <hr />
              <p>Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resualts;
