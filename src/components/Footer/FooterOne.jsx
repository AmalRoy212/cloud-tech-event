import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/logo/dits.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img style={{width:"100px"}} src={logoImage} alt="BigTech Logo" />
                  </Link>
                  {/* <div className="footer-content">
                    <h4 className="fw-title">Social Media</h4>
                    <ul className="footer-social">
                      <li>
                        <a target="_blank" href="https://www.instagram.com/genfinityglobal/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com/GenfinityGlobal">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.linkedin.com/company/genfinity-global/mycompany/">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSHvnsNFMpZbxSxsppsSVxRSZvTtzQhMLDpFTCzfHdVWZFdspgxnSSbgmPsPRcBLxqsmJdWT">
                          <i class="fab fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                {/* <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Contact us</Link>
                      </li>
                      <li>
                        <Link to="/">About Us</Link>
                      </li>
                      <li>
                        <Link to="/">Terms & Services</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                {/* <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Community</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/">Partners</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="fw-title">Contact</h4>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input
                        type="email"
                        // placeholder="info@genfinityglobal.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-share"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom d-flex justify-content-center">
    <div class="row">
        <div class="col-lg-12">
            <div class="copyright-text">
                <p>
                    Copyright &copy; 2024. All Rights Reserved CLOUD AND DATA CENTRES CONFERENCE
                </p>
            </div>
        </div>
    </div>
</div>

        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
