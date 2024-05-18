import React from 'react';
import logoImage from "../../../src/assets/img/logo/GG_WHITE.webp";


const OrganizedBy = () => {
  const containerStyle = {
    backgroundColor: '#000000', // dark background
    color: '#FFFFFF', // white text color
    padding: '50px 20px', // padding around the content
    textAlign: 'center', // center align the text
    fontFamily: 'Arial, sans-serif', // font family
    lineHeight: '1.6', // line height for better readability
  };

  const titleStyle = {
    fontSize: '36px', // title font size
    fontWeight: 'bold', // title font weight
    marginBottom: '20px', // space below the title
  };

  const logoStyle = {
    marginBottom: '20px', // space below the logo
  };

  const missionStyle = {
    fontSize: '18px', // mission statement font size
    maxWidth: '800px', // max width for the mission statement
    margin: '0 auto', // center align the mission statement
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>ORGANIZED BY</div>
      <div style={logoStyle}>
        <img src={logoImage} />
      </div>
      <div style={missionStyle}>
        Genfinity Global specializes in organizing global B2B conferences and exhibitions,
        collaborating with both private and government entities to catalyze transformative
        journeys for organizations. Our mission is to craft dynamic business platforms that
        foster innovation, facilitate expansion of client bases, provide opportunities to
        learn about cutting-edge technologies, and encourage the exchange of best practices
        worldwide. With a commitment to excellence, we strive to create impactful events
        that connect industry leaders, foster collaboration, and drive positive change on a
        global scale.
      </div>
    </div>
  );
};

export default OrganizedBy;
