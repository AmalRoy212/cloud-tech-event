import React from "react";
import img1 from "../../assets/img/images/img1.jpg";
import img2 from "../../assets/img/images/img2.jpeg"
import img3 from "../../assets/img/images/img3.jpeg";
import img4 from "../../assets/img/images/img4.jpeg";
import img5 from "../../assets/img/images/img5.jpeg";


function Card({ src, heading, dis }) {
  return (
    <div className="card p-2 my-2" style={{ backgroundColor: "#1E1E1E" }}>
      <img src={src} className="w-full" alt="partner" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
      <div className="w-full h-1/2 flex justify-center item-center">
        <h3 className="text-white p-3 flex item-center">{heading}</h3>
        <p className="px-3" style={{ color: "#CDCDCD" }}>{dis}</p>
      </div>
    </div>
  );
}

const TopPartners = () => {
  const partners_list = [
    {
      src: img2,
      title: "Insightful sessions",
      dis: "Hear from global cloud experts on the best practices to achieve optimum results in the fast-moving world!A It is an opportunity to hear from the world's leading solution providers about the innovative ways to achieve favourable business results."
    },
    {
      src: img4,
      title: "Business Networking",
      dis: "This series of physical events is bringing together top leaders and decision-makers who are using technology in innovative ways to drive businesses forward while delivering business value, and enhancing the overall customer experience."
    },
    {
      src: img3,
      title: "Technology use-cases",
      dis: "Emerging technologies, when used together have the potential to revolutionize industries.Explore such transformational technology use-cases and solutions presented by successful early adopters and pioneers within the field of cloud."
    },
    {
      src: img3,
      title: "Panel discussions",
      dis: "Brainstorm and exchange ideas with some of the greatest minds in cloud & related fields.Our panel includes the likes of seasoned, experienced and accomplished veterans from the very sector looking to form a bridge between Cloud and businesses."
    },
    {
      src: img5,
      title: "Product Showcase",
      dis: "The summit features presentations, use- case studies and educational sessions by global technology providers who are showcasing their latest innovations designed with the primary focus on enabling businesses and organizations to adopt robust cloud strategies/solutions."
    },
    {
      src: img1,
      title: "Tech Exhibitions",
      dis: "Explore hundreds of cutting-edge technology innovations within the Cloud & related space for enterprises to help build leaner business processes, develop innovative products, and automate tasks that can minimize costs"
    },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-30">
              <h2 className="title">
                Happenings<span> And </span> Insights
              </h2>
            </div>
          </div>
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {partners_list.map((item, index) => (
            <div key={index} className="col-lg-4">
              <Card src={item.src} heading={item.title} dis={item.dis} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
