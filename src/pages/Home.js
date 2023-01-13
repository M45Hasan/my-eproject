import React from "react";
import Additionalinfo from "../components/layout/Additionalinfo";
import Banner from "../components/layout/Banner";
import Ads from "../components/layout/Ads";
import Newarriavl from "../components/layout/Newarriavl";
import { SpOffer } from "../components/layout/SpOffer";
import Add2 from "../components/layout/Add2";
import BestSeller from "../components/layout/BestSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <Additionalinfo />
      <Ads />
      <Newarriavl/>
      <BestSeller/>
      <Add2/>
      <SpOffer/>
      
    </>
  );
};

export default Home;
