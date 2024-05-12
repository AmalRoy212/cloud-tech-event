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
                  About The<span> Conference</span> 
                </h2>
              </div>
              <p className="text-justify">
              The Cloud & Data Centre Conference is a premier event tailored for the innovators, decision-makers, and experts in data centre infrastructure and cloud technologies. As part of the global series of conferences dedicated to advancing digital transformation, this edition is strategically located in Oman, bringing together the region's top CIOs, CTOs, COOs, Heads of Cloud, Heads of IT Infrastructure, Head of Data Centre Operations - IT Data Centre Administrator, DevOps Leaders, Heads of Digital Transformation/Innovation, and Cloud Computing Experts from various sectors across India, all converging 'under one roof.'This event will showcase enlightening keynotes, insightful government and enterprise use-case presentations, immersive product showcases & demos, dynamic panel discussions, and tech talks, providing a comprehensive exploration of the latest trends and challenges in cloud technology and data centre operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
