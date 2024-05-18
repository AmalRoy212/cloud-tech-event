import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/66.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
import logoImage from "../../../src/assets/logo/dits.png";
// import calender from "../../../src/assets/img/images/calender.png";


import CountDownOne from "../CountDown/CountDownOne";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">

      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">

              <h4 style={{fontSize:"44px"}} className="title">
                CLOUD <span> AND DATA CENTRES</span> CONFERENCE
                <span style={{fontSize:"24px", display:"flex", justifyContent:'center', alignItems:"center"}}>
                  <span>INITIATIVE BY{" "}</span>
                  <img
                    width={130}
                    height={50}
                    src={logoImage}
                    alt="DITS Logo"
                  />
                </span>
                <p style={{fontSize:"23px"}} className="title">
                  <span> 
                    <img style={{ width: "35px", marginTop: "10px" }} src={"calender"} alt="" />
                    4-5 December 2024 <img style={{ width: "25px", marginTop:"10px" }} src="https://static-00.iconduck.com/assets.00/location-icon-455x512-n2vbhh27.png" alt="" /> Muscat, Sultanate of Oman</span>
                </p>
              </h4>
              <h4 style={{ fontSize: "20px" }}>
                CHARTING THE PATH FORWARD: HARNESSING <span>CLOUD AND DATA</span> CENTRES IN OMAN’S NEXT CHAPTER
              </h4>
              <p>Exploring the latest cloud and digital infrastructure trends, along with data centres that will drive the next phase of cloud transformation in Oman</p>
              <div>
                <Link to="/" className="btn">
                  Delegates
                </Link>
              </div>
            </div>
            {/* <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>cloud</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $100088 = 3177.38 CIC updated</span>
              </h4>
            </div> */}
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">Will Start In...</h2>
              <CountDownOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
