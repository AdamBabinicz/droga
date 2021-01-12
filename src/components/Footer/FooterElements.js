import styled from "styled-components";
import { FaSitemap } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #2a2a2a;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: rgba(255, 255, 255, 0.911);
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.911);
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.911);
  text-decoration: none;
  transition: 0.3s ease-out;
  margin-bottom: 0.5rem;

  &:hover {
    color: #858585;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: rgba(255, 255, 255, 0.911);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaSitemap)`
  margin-right: 10px;
  font-size: 1rem;
`;

export const SocialIcon1 = styled(FaMapSigns)`
  margin-left: 10px;
  font-size: 1rem;
`;

export const WebsiteRights = styled.small`
  color: rgba(255, 255, 255, 0.911);
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: rgba(255, 255, 255, 0.911);
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #858585;
  }
`;
