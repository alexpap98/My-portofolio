import styled from "styled-components";
import homebg from "../../../sources/homebg.jpg";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30%;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Hih3 = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const BgImg = styled.img`
  top: 0;
  left: 0;
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  object-fit: cover;
  content: url(${homebg});
`;
