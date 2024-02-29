import React from "react";
import img01 from "../../assets/img/images/cloud.png";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" />
              {/* <img src={img02} alt="" className="img-two" /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                {/* <span className="sub-title">Who we are</span> */}
                <h2 className="title">
                  About The<span>Conference</span> 
                </h2>
              </div>
              <p className="text-justify">
              space are truly the backbone of society. At the Future Education Summit, we bring them together under one roof, understand innovations that can help them simplify and improve the education transmittal process. Which will include strategies to engage teacher and students in solving significant problems through EdTech. Future Education Summit will offer world-class content and spotlights effective strategies that will power the pedagogical education models of the 21st century by attracting the most dynamic leaders in the education sector and promises to bring fresh insights and perspectives to empower, inspire, and enrich the global learning community Future Education Summit aspires to offer stage to education .
              </p>
              {/* <Link to="/" className="btn">
                Purchase Tokens
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
