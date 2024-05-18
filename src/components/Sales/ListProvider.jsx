import React from "react";
import TeamOneItem from "./List";

const TeamOne = () => {
  const team_members = [
    {
      src: "https://img.freepik.com/premium-photo/digital-empowerment-unleashing-potential-smartphones-tablets-enrich-lives_902820-17985.jpg",
      name: "Digital Empowerment",
      designation: "Role of Datacentre and Cloud Infrastructure in Powering Digital Ecosystems and Supporting the sultanates Digital Economy",
    },
    {
      src: "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt3d619a111412361d/6581af71331702040a484c1f/digital-defense-Ihor-Svetiukha-Alamy-Stock.jpg",
      name: "Digital Defense: Bolstering Cyber & Cloud Security",
      designation: "Bolstering Cyber and Cloud Security Efforts to Combat Rising Threats in the Digital Era",
    },
    {
      src: "https://cdn.digitalisationworld.com/uploads/images/5e9d8789fc7b9b79a7ebb5a8cbc8abe21f11ea0a4ebde41e.jpg",
      name: "Empowering AI",
      designation: "Enabling Datacentre Infrastructure for upcoming AI workloads",
    },
    {
      src: "https://www.tracebloc.io/blogs/images/greenai_thumb.jpg",
      name: "Greening with AI & Automation  ",
      designation: "Making data centres greener and sustainable with AI and Automation",
    },
    {
      src: "https://s35804.pcdn.co/blog/wp-content/uploads/2021/03/why_digital_transformation_is_for_all_manufactures.jpg",
      name: "Digital Transformation",
      designation: "Empowering Digital Transformation: Building Robust Infrastructures for Enterprise Growth",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1024/1*orCVOvqyrKMQjJrXdDEVrA.jpeg",
      name: "Oman: Future Tech Hub with Advanced Infrastructure",
      designation: "Envisioning Oman as the Future Tech Hub through Advanced Data Centre and Cloud Infrastructure",
    },
    {
      src: "https://global-uploads.webflow.com/619e15d781b21202de206fb5/6311d7a16ab6dd1069c2bc97_Why-is-Cloud-Automation-Testing-gaining-popularity.webp",
      name: "Cloud Automation",
      designation: "Accelerating Organizational Processes and Scaling with Cloud Automation",
    },
    {
      src: "https://blog.copadata.com/hubfs/Digital_substation_COPA-DATA_blogpost_header_1200x628px.jpg",
      name: "Power Infrastructure Essentials",
      designation: "Achieving Optimal Data Centre Uptime and Safeguarding IT Infrastructure through Power Infrastructure Essentials",
    },
  ];

  return (
    <section className="team-area">
      <div>
        <div className="row justify-content-center" style={{ backgroundColor: "black" }}>
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">topics</span>
              <h2 className="title">
                Key Topics<br /> <span>Of Discussion</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
