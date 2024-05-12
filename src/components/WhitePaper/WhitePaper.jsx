import React from "react";
import { Link } from "react-router-dom";
import docImg from "../../assets/img/images/startup.png";

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src={docImg} alt="" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title">ROUNDTABLE</span>
                <h2 className="title">
                The Executive <span>Roundtable</span> Dialogue
                </h2>
              </div>

              <ul className="document-list">
                {/* <li>Stand a chance to win Genfinity credit valued at upto $9999</li> */}
                <p>The Executive Roundtable Discussion at our conference serves as a paramount platform for top-level decision-makers to converge and engage in high-level strategic dialogues. This exclusive session brings together C-suite executives, industry leaders, and visionaries to explore critical issues, share insights, and chart the course for the future of the industry. With a focus on fostering collaboration and driving innovation, the Executive Roundtable promises to deliver thought-provoking discussions, actionable insights, and unparalleled networking opportunities.</p>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
