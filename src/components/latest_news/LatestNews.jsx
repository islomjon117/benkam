import "../latest_news/latestnews.css";

import img1 from "../../assets/latest_img/img2.png";
import img2 from "../../assets/latest_img/img4.png";
import img3 from "../../assets/latest_img/img5.png";

const LatestNews = () => {
  return (
    <>
      <div className="latest">
        <div className="container">
          <div className="latest_main">
            <div className="latest_title">
              <p>LATEST NEWS</p>
              <h1>Don't Miss Anything</h1>
            </div>

            <div className="latest_boxs">
              <div className="latest_box">
                <div className="latest_img_box">
                  <img src={img2} alt="" />
                </div>
                <div className="lates_img_info">
                  <h3>How to Be Ahead of Stock Changes</h3>
                </div>
              </div>
              <div className="latest_box">
                <div className="latest_img_box">
                  <img src={img3} alt="" />
                </div>
                <div className="lates_img_info">
                  <h3>Online reputation and management</h3>
                </div>
              </div>
              <div className="latest_box">
                <div className="latest_img_box">
                  <img src={img1} alt="" />
                </div>
                <div className="lates_img_info">
                  <h3>Tips To Move Your Project More Forward</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
