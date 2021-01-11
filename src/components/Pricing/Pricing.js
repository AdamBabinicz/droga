import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  GiCutDiamond,
  GiRock,
  GiFloatingCrystal,
  GiCrystalBars,
} from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./PricingElements";
import img1 from "../../images/4.jpg";
import img2 from "../../images/9.jpg";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Dzieci Zosi</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <img src={img1} />
                <PricingCardIcon>{/* <GiRock /> */}</PricingCardIcon>
                <PricingCardPlan>Władek i Adaś</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>rok</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                {/* <GiCrystalBars /> */} <img src={img2} />
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Ania</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>rok</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                {/* <GiCutDiamond /> */} <img src={img2} />
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Marian</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength>rok</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
