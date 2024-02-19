import React from "react";
import aboutImg from "../../assets/img/images/about-cloud.png";
import shape01 from "../../assets/img/images/small-cloud.png";
import shape02 from "../../assets/img/images/small-cloud2.png";

const About = () => {
  return (
    <section id="about" className="about-area-two">
      <div className="container custom-container-four">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-img-two text-center wow fadeInLeft"
              data-wow-delay=".2s"
            >
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-content-two wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title section-title-two mb-15">
                <span className="sub-title"></span>
                <h2 className="title">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id expedita aspernatur et iusto unde ut?
              </p>
              <div className="about-list">
                <ul>
                  <li>
                    <i className="fas fa-check"></i>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Lorem ipsum dolor sit.
                    
                  </li>
                </ul>
              </div>

    
            </div>
          </div>
        </div>
      </div>

      <div className="about-shape-wrap">
        <img src={shape01} alt="" className="shape-one" />
        <img src={shape02} alt="" className="shape-two rotateme" />
      </div>
    </section>
  );
};

export default About;
