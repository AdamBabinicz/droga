import React from "react";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";
import { InfoSection, Pricing } from "../../components";
// import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Pricing />
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Home;
