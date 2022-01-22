import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 130px;
  background-color: #4b0459;
  @media screen and (max-width: 820px) {
    height: 190px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
`;


export const SocialMedia = styled.section`
  max-width: 1100px;
  width: 90%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialiconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
