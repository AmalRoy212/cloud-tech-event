import React from "react";
import img01 from "../../assets/img/team/anatomy.png";
import img02 from "../../assets/img/team/team_img02.png";
import img03 from "../../assets/img/team/team_img03.png";
import img04 from "../../assets/img/team/team_img04.png";
import img05 from "../../assets/img/team/team_img05.png";
import img06 from "../../assets/img/team/team_img06.png";
import img07 from "../../assets/img/team/team_img07.png";
import img08 from "../../assets/img/team/team_img08.png";
import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
    {
      src: img01,
      name: "orem ipsum",
      designation: "ABC",
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
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
