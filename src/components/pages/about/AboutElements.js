import styled from "styled-components";
const main = "#4b0459";
const sec = "#f3c2fc";

export const Resume = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: 50px auto;
  color: white;

  @media screen and (max-width: 786px) {
    display: block;
  }
`;

export const ResumeLeft = styled.div`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 40%;
  background: ${main};

  @media screen and (max-width: 786px) {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0;
    width: 100%;
  }
`;

export const ResumeContent = styled.div`
  padding: 0 25px;
`;

export const Title = styled.div`
  padding-bottom: 5px;
  @media screen and (max-width: 786px) {
    text-align: center;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;

  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

export const Desc = styled.p`
  color: ${sec};
`;

export const ResumeItem = styled.div`
  padding: 25px 0;
  border-bottom: 2px solid ${sec};

  &:last-child {
    border-bottom: 0px;
  }
`;

export const ContactUl = styled.ul`

`;

export const LeftLi = styled.li`
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  &:last-child {
    padding-bottom: 30px;
  }
`;

export const Icon = styled.div`
  width: 35px;
  height: 35px;
  background: #fff;
  color: ${main};
  border-radius: 50%;
  margin-right: 15px;
  font-size: 16px;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const I = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Data = styled.div`
  @media screen and (max-width: 786px) {
    font-size: 14px;
  }
`;

export const ResumeSkills = styled.div``;

export const SkillName = styled.div`
  width: 25%;
`;

export const SkillProg = styled.div`
  width: 60%;
  margin: 0 10px;
  height: 5px;
  background: ${sec};
  position: relative;
`;

export const SkillPer = styled.div`
  width: 15%;
`;

export const SkillSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
`;

export const ResumeSect = styled.div``;

export const ResumeRight = styled.div`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 60%;
  background: #fff;
  color: black;
  padding: 25px;

  @media screen and (max-width: 786px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 30px;
    width: 100%;
    padding: 0;
    margin-top: -15px;
  }
`;

export const RightLi = styled.li`
  position: relative;
  list-style-type: none;
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: -21px;
    width: 2px;
    height: 115px;
    background: ${main};
  }

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -25px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid ${main};
  }
`;

export const DateDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Info = styled.div`
  margin-bottom: 20px;
`;

export const HobbyUl = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const HobbyLi = styled.li`
  list-style-type: none;
  width: 80px;
  height: 80px;
  border: 2px solid ${main};
  border-radius: 50%;
  position: relative;
  color: ${main};

  &::before {
    content: "";
    position: absolute;
    top: 40px;
    right: -131px;
    width: 130px;
    height: 2px;
    background: ${main};
  }

  &:last-child::before {
    display: none;
  }

  @media screen and (max-width: 1100px) {
    list-style-type: none;
    margin-bottom: 40px;
    margin-left: 40%;
    &::after {
      content: "";
      position: absolute;
      top: 14px;
      left: -21px;
      width: 2px;
      height: 115px;
      background: ${main};
    }

    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: -25px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 2px solid ${main};
    }

    &:last-child::before {
      display: block;
    }

    &:last-child::after {
      display: none;
    }
  }
`;

export const HobbyIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
`;
