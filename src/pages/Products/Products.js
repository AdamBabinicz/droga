import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";
// import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      {/* <InfoSection {...homeObjOne} /> */}
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      {/* <Pricing /> */}
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
