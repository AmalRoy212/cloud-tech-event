import React from "react";
import TeamOneItem from "./List";

const ListProvider = () => {
  const team_members = [
    {
      src: "https://eco-cdn.iqpc.com/eco/images/channel_content/images/chief_information_officer_guide.jpg",
      name: "Chief Information Officer",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQcnGUG3kBKVmRak0KUlro82Ni-hm0CpjnorZKcZ5Pw&s",
      name: "Chief Technology Officer/Director",
    },
    {
      src: "https://assets-global.website-files.com/5ff66329429d880392f6cba2/618e1816b5e34e5cd98c9ddd_role%20of%20the%20ciso.png",
      name: "Chief Information Security Officer",
    },
    {
      src: "https://www.datagalaxy.com/wp-content/uploads/2018/04/chief-data-officer-1.png",
      name: "Chief Data Officers",
    },
    {
      src: "https://datascientest.com/en/wp-content/uploads/sites/9/2023/06/Chief-data-officer-4.jpg",
      name: "Chief Analytics Officers",
    },
    {
      src: "https://www.thecsuite.co.uk/wp-content/uploads/2020/05/chief-data-officer-scaled.jpg",
      name: "Chief Data and Analytics Officers",
    },
    {
      src: "https://cognopia.com/wp-content/uploads/2021/07/chief-data-officer-1024x768.jpg",
      name: "Chief Digital Officers",
    },
    {
      src: "https://img.freepik.com/premium-vector/ceo-chief-executive-officer-cartoon-illustration-businessman-work_2175-4836.jpg",
      name: "Chief Operating Officers/Directors",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6zE1zMu4_vEPfLuXK15GvHO4K5djK6mwnPMj2Qmcow&s",
      name: "Datacentre Facilities Managers & Engineers",
    },
    {
      src: "https://media.licdn.com/dms/image/C4E12AQEja0bfgQvvsA/article-cover_image-shrink_600_2000/0/1566212123062?e=2147483647&v=beta&t=brOb1KvrwGlCMjGA1T0_0OFd23dI4mhkc1-gb5DZrUk",
      name: "Heads Of Digital & Strategy",
    },
    {
      src: "https://www.yourfreecareertest.com/wp-content/uploads/2017/10/security_manager.jpg",
      name: "Security Managers/Directors",
    },
    {
      src: "https://blog.octobits.io/wp-content/uploads/2023/12/octobits-it-infrastructure-management.png",
      name: "Information Technology & Infrastructure Managers",
    },
    {
      src: "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/data%20center%20management%20it%20worker%20art%20getty.jpg?itok=db884AzJ",
      name: "Datacentre Managers/Directors",
    },
    {
      src: "https://www.scnsoft.com/data-analytics/building-a-dwh/building-a-dwh-cover-picture.svg",
      name: "Cloud Architects/Officers",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7u5UoQYVGs-2xZmTQGLkR-dL2cZVMvhyOc_CeqbMnw&s",
      name: "Network Admin & Storage Planners/Officers",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSIX8GJJpdKjQ72JlsMcf3JCwtPNY6THqZHIWdvYMOA&s",
      name: "Database Administrators",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT861vtl0b0-_Ui5e5Ef8K4NVn7vcX6XN-jteeD3vRbrQ&s",
      name: "Business Intelligence (BI) Managers",
    },
    {
      src: "https://www.questionpro.com/blog/wp-content/uploads/2022/08/data-quality-management.jpg",
      name: "Data Quality Manager",
    },
    {
      src: "https://i.ytimg.com/vi/-ad-BMkidKw/sddefault.jpg",
      name: "Data Governance Managers",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_LsY-dXfKWD6WHgS6MSzw0flOWp4iBVJYRfCRKhP1A&s",
      name: "Disaster Recovery Specialists",
    },
    {
      src: "https://careerhub.brainwonders.in/assets/career_media/2021/03/career_2021-03-11-15-15-46Technical_Directors_Manager.webp",
      name: "Network Managers/Directors",
    },
    {
      src: "https://www.scnsoft.com/blog-pictures/infrastructure/noc.png",
      name: "Network Operations Centre (NOC) Managers",
    },
    {
      src: "https://www.bicsi.org/images/default-source/standards-section-images/data-center-station54e587b0cb734f59a97fd520742e5ec4.png?sfvrsn=ec099869_0",
      name: "Data Centre Operations Managers",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1358/1*IL-P4ggwbljUA_RqKNqw9Q.jpeg",
      name: "Machine Learning Engineer",
    },
    {
      src: "https://media.sciencephoto.com/f0/12/54/80/f0125480-800px-wm.jpg",
      name: "Network, Cabling and Communication Engineers and Integrators",
    },
    {
      src: "https://media.licdn.com/dms/image/D4E12AQGhmjzvFjvi6w/article-cover_image-shrink_600_2000/0/1687262859913?e=2147483647&v=beta&t=Scvltiz7jj3U2xWhLY9C38ILpiANN4w9WsgRm4OLqnw",
      name: "Facilities/Premises Directors/Managers",
    },
  ];

  const team_membersTwo = [
    {
      src: "https://www.investopedia.com/thmb/w3vqEb7xQ182GTlrGI_6JX_06ts=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1441906670-737751e94de8423696a20591523319bd.jpg",
      name: "Government",
    },
    {
      src: "https://www.financialexpress.com/wp-content/uploads/2023/05/BFSI-e1685093367785.jpg",
      name: "BFSI",
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1000/1*qjEwCv_3dREN3LAl-2KrPg.jpeg",
      name: "Fintech",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkotsFVPRKwxA_4DZ8VWAt33Bc1_wsmvaYzd2Ehv5CgA&s",
      name: "Healthcare & Pharmaceuticals",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR8lQfg9bEeg5knxau2ED7jaGsQHXfDBg_WV4tw8I6g&s",
      name: "FMCG/CPG",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Xsu_YQoG1fZuj5sUf2ZSuF4mBrCgYpdNw1EOHBKavw&s",
      name: "Manufacturing",
    },
    {
      src: "https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2019%2F02%2FMedia-and-Entertainment.jpg",
      name: "Media and Entertainment",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrU_1iqzjEYnXY_IoZ8fV-qRaeNR8jLRtz-PK3YDKF5w&s",
      name: "Retail",
    },
    {
      src: "https://monkeyplusbc.com/assets/imags/blogs/conoce-eCommerce-conveniente-para-tu-negocio-pricipal.jpg",
      name: "E-Commerce",
    },
    {
      src: "https://securityintelligence.com/wp-content/uploads/2016/05/The-Energy-Sector-Is-Driving-Security-Innovation.jpg",
      name: "Energy and Utilities",
    },
    {
      src: "https://www.7consultancy.in/images/blog/21582950340.jpg",
      name: "Real Estate & Infrastructure",
    },
    {
      src: "https://navata.com/cms/wp-content/uploads/2021/05/transportation-modes-for-shifting-households.jpg",
      name: "Transportation",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRlIcWBqgyGyif1sD4RPIrYDAiuo2guRljQ3KZ6Jq-s3-yomvvVEF5ZGeB7udwX237xE&usqp=CAU",
      name: "Tourism & Hospitality",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGEoY0deDGTtXZPnhHB4fofIjFZLACm3xoEWDfbXNWSSY1OVWaEteGaTNVV1ZB18C8Adw&usqp=CAU",
      name: "Utilities",
    },
    {
      src: "https://blog.tatanexarc.com/wp-content/uploads/2023/01/What-are-logistics-services.jpg",
      name: "Logistics",
    },
    {
      src: "https://media.licdn.com/dms/image/D4E12AQGAv2b1yWaSwg/article-cover_image-shrink_600_2000/0/1672084999667?e=2147483647&v=beta&t=KYZwbfbR7ds2WfHE13YZDf0kh9PZu_1HfP5amc9kmh0",
      name: "Hospitlity",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfaNmdaxl0_zSUSYpzprPSzSBRi0jHCbVSa-5FqPP6cdM_jN4wAN13CfAtlf94Oy4RUY&usqp=CAU",
      name: "Education",
    },
  ]

  return (
    <section className="">
      <div>
        <div className="row justify-content-center" style={{ backgroundColor: "black" }}>
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <h2 className="title">
                Who<br /> <span>Should</span> Attend
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <h2 style={{ display: "flex", justifyContent: "center", gap: 5 }} >
            By <span style={{ marginLeft: ".3rem" }}> Job</span>
          </h2>
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <h2 style={{display:"flex", justifyContent:"center", gap:5}} >
            By <span style={{marginLeft:".3rem"}}> Industry</span>
          </h2>
          {team_membersTwo.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProvider;
