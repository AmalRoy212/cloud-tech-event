import React from "react";
import Banner from "../../components/Banner/Banner";
import Sales from "../../components/Sales/Sales";
import TeamOne from "../../components/Team/TeamOne";
import TopPartners from "../../components/TopPartners/TopPartners";
import WhitePaper from "../../components/WhitePaper/WhitePaper";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";
import About from "../../components/About/About";
import { ExtraCards } from "../../components/Counter/ExtraCards";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        <WhoWeAre />
        <About />
        <TopPartners />
        <ExtraCards />
        {/* <WhyChooseUs /> */}
        <Sales />
        <div className="area-bg">
          <WhitePaper />
        </div>
        <TeamOne />
      </main>
    </LayoutOne>
  );
};

export default Home;
