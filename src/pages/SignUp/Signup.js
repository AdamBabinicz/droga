import React from "react";
import { homeObjThree } from "./Data";
import { InfoSection } from "../../components";
// import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing /> */}
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
