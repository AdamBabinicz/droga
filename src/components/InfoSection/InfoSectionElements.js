import styled from "styled-components";

export const InfoSec = styled.div`
  color: #e7e7e7;
  padding: 160px 0;
  background: ${({ lightBg }) =>
    lightBg ? "rgba(255, 255, 255, 0.911)" : "#353535"};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Text = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
  span {
    transition: color 0.3s ease;
  }

  span:hover {
    color: #a9b3c1;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? "rgba(255, 255, 255, 0.911)" : "#353535"};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#353535")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const ImgEnd = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
`;

export const Img = styled.img`
  /* padding-right: 0; */
  border: 0;
  width: 100%;
  vertical-align: middle;
  display: inline-block;
  margin-top: 2rem;
  /* display: grid;
  place-items: center; */

  /* @media screen and (max-width: 768px) {
    max-height: 400px;
  } */

  @media only screen and (max-device-width: 768px) {
    /* height: 400px; */
    /* aspect-ratio: 5/2; */
  }
`;
