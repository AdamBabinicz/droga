import React from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Text,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSectionElements";
import { Container, Button } from "../../globalStyles";
import mapa from "../../mapa.pdf";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  buttonLabel1,
  description,
  description1,
  description2,
  description3,
  description4,
  headLine,
  lightText,
  topLine,
  img,
  alt,
  start,
  link,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description1}
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description2}
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description3}
                </Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description4}
                </Subtitle>
                <Link to={mapa} target="_blank" rel="noopener noreferrer">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
                <Text>
                  <Link
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: "absolute",
                      left: "4rem",
                      top: "-2rem",
                      fontSize: "3.5rem",
                      background: "transparent",
                      textDecoration: "none",
                      color: "#ccc",
                    }}
                  >
                    <span>{buttonLabel1}</span>
                  </Link>
                </Text>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
