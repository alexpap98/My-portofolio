import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterLinksContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialiconLink,
} from "./FooterElements";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pap</SocialLogo>
            <WebsiteRights>
              Pap &copy; 2022 - {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialiconLink
                href="https://www.linkedin.com/in/alexandros-papadopoulos-885784173"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialiconLink>
              <SocialiconLink
                href="https://www.instagram.com/alex.pap_999/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialiconLink>
              <SocialiconLink
                href="https://twitter.com/alpa09898"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialiconLink>
              <SocialiconLink
                href="https://www.facebook.com/InTheAbyss999"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialiconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterLinksContainer>
    </FooterContainer>
  );
};
