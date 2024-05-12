import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Chief Information Officer",
      description: "",
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Chief Technology Officer/Director",
      description: "",
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Chief Information Security Officer",
      description: "",
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Chief Data Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Chief Analytics Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Chief Data and Analytics Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Chief Digital Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Chief Operating Officers/Directors",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Heads Of Digital & Strategy",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Datacentre Facilities Managers & Engineers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Security Managers/Directors",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Information Technology & Infrastructure Managers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Datacentre Managers/Directors",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Cloud Architects/Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Data Warehouse Manager",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Network Admin & Storage Planners/Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Database Administrators",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Data Architect/Officers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Business Intelligence (BI) Managers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Data Quality Manager",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Data Governance Managers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Disaster Recovery Specialists",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Network Managers/Directors",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Network Operations Centre (NOC) Managers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Data Centre Operations Managers",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Machine Learning Engineer",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Network, Cabling and Communication Engineers and Integrators",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Facilities/Premises Directors/Managers",
      description: "",
    },
  ];
  const slider_items_two = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Government",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "BFSI",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Fintech",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Healthcare & Pharmaceuticals",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "FMCG/CPG",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Manufacturing",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Retail",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "E-Commerce",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Media and Entertainment",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Energy and Utilities",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Real Estate & Infrastructure",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Transportation",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Tourism & Hospitality",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Utilities",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Logistics",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Hospitality",
      description: "",
    },
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Education",
      description: "",
    },
    
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old === 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              {/* <span className="sub-title">why should</span> */}
              <h2 className="title">
              Who <span> Should</span> Attend?
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <h3 className="text-center">BY JOB TITLE</h3>
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>
        <div className="row choose-active">
          <h3 className="text-center">BY INDUSTRY</h3>
          <SlickSlider settings={slickSettings}>
            {slider_items_two.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
