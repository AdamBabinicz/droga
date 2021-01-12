import React from "react";
import { Button } from "../../globalStyles";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIcon1,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Mapa życiowa</FooterSubHeading>
        <FooterSubText>
          ojca, matki, Zosi, Janki, Józka, Ryśka i Edka
        </FooterSubText>
      </FooterSubscription>
      <FooterLinksContainer>
        {/* <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>O mnie</FooterLinkTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Kontakt</FooterLinkTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper> */}
        <FooterLinksWrapper>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Filmy</FooterLinkTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </FooterLinkItems> */}
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            {/* <FooterLink to="/">Instagram</FooterLink> */}
            <FooterLink
              to="//www.facebook.com/profile.php?id=100012315634079"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              Facebook
            </FooterLink>
            {/* <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink> */}
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo>
            <SocialIcon />
            <SocialIcon1 onClick={toggleHome} />
          </SocialLogo>
          <WebsiteRights>{new Date().getFullYear()}.</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.facebook.com/profile.php?id=100012315634079"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            {/* <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink> */}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
