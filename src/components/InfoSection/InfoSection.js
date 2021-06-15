import { useState } from "react";
import Popup from "../../components/Popup";
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
  ImgEnd,
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
  desc,
  cemetery,
  grave,
  image,
}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

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
                <Text>
                  <Link to={mapa} target="_blank" rel="noopener noreferrer">
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                  <Link
                    style={{
                      fontSize: "3.5rem",
                      background: "transparent",
                      textDecoration: "none",
                      color: "#ccc",
                    }}
                  >
                    <span onClick={() => setButtonPopup(true)}>
                      {buttonLabel1}
                    </span>
                  </Link>
                </Text>
              </TextWrapper>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>{cemetery}</h3>
                <p>{desc}</p>
                <p>{grave}</p>
                <ImgEnd src={image} alt={alt} />
              </Popup>
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
