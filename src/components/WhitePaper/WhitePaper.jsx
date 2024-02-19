import React from "react";
import { Link } from "react-router-dom";
import docImg from "../../assets/img/images/document_img.png";

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
                <span className="sub-title">Startup Pitch</span>
                <h2 className="title">
                Startup Pitch <span>Competition - Elevating</span> Startup To Success
                </h2>
              </div>

              <ul className="document-list">
                <li>Stand a chance to win Genfinity credit valued at upto $9999</li>
                <p>Starup Pitch Competition serves as a premier fundraising platform, catering to companies in various stages of development. Whether you are in the initial stages of launching your business or an established entity aiming for expansion, this platform offers an exclusive opportunity. Here, you can present your business propositions before a distinguished audience, comprising global investors such as venture capitalists, angel investors, and influential government authorities.</p>
              </ul>

              {/* <Link to="/" className="btn">
                Download Doc
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
