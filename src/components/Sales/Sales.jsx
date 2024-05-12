import React from "react";
import chartImg from "../../assets/img/images/industry.jpg";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

const Sales = () => {
  const chart_info_list = [
    "Schools: 70%",
    "Government: 10%",
    "Ministry of Education: 30%",
    "Academics: 10%",
  ];

  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={chartImg} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Industries"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />

                  <SalesTabButton
                    title="By Job Title"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" style={{ backgroundColor: "black", padding: "10px", borderRadius:"10px" }} id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Who should attend?"
                    description={
                      <div className="about-list">
                        <ul>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                              Chief Information Officer
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                             Chief Technology Officer/Director
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Information Security Officer
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Data Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Analytics Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Data and Analytics Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Digital Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Chief Operating Officers/Directors
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Heads Of Digital & Strategy
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Datacentre Facilities Managers & Engineers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Security Managers/Directors
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Information Technology & Infrastructure Managers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Datacentre Managers/Directors
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Cloud Architects/Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Data Warehouse Manager
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Network Admin & Storage Planners/Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Database Administrators
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Data Architect/Officers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Business Intelligence (BI) Managers
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Data Quality Manager
                            </div>
                          </li>
                          <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <i className="fas fa-check"></i>
                            <div className="text-white">
                            Data Governance Managers
                            </div>
                          </li>

                        </ul>
                      </div>
                    }
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="Who should attend?"
                    description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum expedita earum incidunt quod ipsa aspernatur. Doloribus neque esse quis. "
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
