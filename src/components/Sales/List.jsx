import React from "react";

const WhoShouldAttend = (props) => {
  return (
    <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"2rem"}}>
      <div className="team-thumb">
        <img style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius:"20px" }} src={props.item.src} alt={props.item.name} />
      </div>
      <div style={{marginTop:"1rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <h6 style={{textAlign:"center"}} >{props.item.name}</h6>
      </div>
    </div>
  );
};

export default WhoShouldAttend;
