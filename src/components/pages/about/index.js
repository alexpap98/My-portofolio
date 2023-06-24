import {
  Resume,
  ResumeLeft,
  ResumeContent,
  ResumeItem,
  Title,
  Name,
  Desc,
  ContactUl,
  LeftLi,
  Icon,
  I,
  Data,
  ResumeSkills,
  SkillName,
  ResumeRight,
  RightLi,
  DateDiv,
  Info,
  HobbyLi,
  HobbyUl,
  HobbyIcon,
  ChangeLanguage,
  ChangeLanguage1,
  SkillsLi,
  SkillUl
} from "./AboutElements";
import { FaBasketballBall } from "react-icons/fa";
import { BsController } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { useState } from "react";
import *  as En from "./Languages/English";
import * as Gr from "./Languages/Greek.js";
import { GR, GB } from "country-flag-icons/react/3x2";
import { strings } from './Languages/index';


function About() {
  const [flagLang, setflag] = useState(<GR />);

  function ChangeLang() {
    let language = strings.getLanguage()
    console.log("curr", language);
    switch (language) {
      case "gr":
        setflag(<GR />);
        strings.setLanguage('en');
        break;
      case "en":
        setflag(<GB />);
        strings.setLanguage('gr');
        break;
    }
    console.log(strings.getLanguage());
  }

  return (
    <>
      <Resume>
        <ResumeLeft>
          <ChangeLanguage1 onClick={ChangeLang}>{flagLang}</ChangeLanguage1>
          <ResumeContent>
            <ResumeItem>
              <Title>
                <Name>{strings.name}</Name>
                <Desc>Developer</Desc>
              </Title>
              <ContactUl>
                {strings.contact.map((c, index) => {
                  return (
                    <LeftLi key={index}>
                      <Icon>
                        <I>{c.icon}</I>
                      </Icon>
                      <Data>{c.desc}</Data>
                    </LeftLi>
                  );
                })}
              </ContactUl>
            </ResumeItem>
            <ResumeSkills>
              <Title>
                <Name>Skill's</Name>
              </Title>
              <SkillUl>
                {strings.skills.map((s, index) => {
                  return (
                    <SkillsLi key={index}>
                      <SkillName>{s.name}</SkillName>
                    </SkillsLi>
                  );
                })}
              </SkillUl>
            </ResumeSkills>
          </ResumeContent>
        </ResumeLeft>

        <ResumeRight>
          <ChangeLanguage onClick={ChangeLang}>{flagLang}</ChangeLanguage>
          <ResumeItem>
            <Title>
              <Name>About</Name>
            </Title>
            <p style={{ paddingInline: 20 }}>{strings.aboutme}</p>
          </ResumeItem>
          <ResumeItem>
            <Title>
              <Name>Education</Name>
            </Title>
            <ul>
              {strings.edu.map((e, index) => {
                return (
                  <RightLi key={index}>
                    <DateDiv>{e.date}</DateDiv>
                    <Info>
                      <p style={{ fontSize: 18, fontWeight: "bold" }}>
                        {e.title}
                      </p>
                      <p>{e.desc}</p>
                    </Info>
                  </RightLi>
                );
              })}
            </ul>
          </ResumeItem>
          <ResumeItem>
            <Title>
              <Name>Work Experience</Name>
            </Title>
            <ul>
              {strings.work.map((w, index) => {
                return (
                  <RightLi key={index}>
                    <DateDiv>{w.date}</DateDiv>
                    <Info>
                      <p style={{ fontSize: 18, fontWeight: "bold" }}>
                        {w.title}
                      </p>
                      <p>{w.desc}</p>
                    </Info>
                  </RightLi>
                );
              })}
            </ul>
          </ResumeItem>
          <ResumeItem>
            <Title>
              <Name>Hobby</Name>
            </Title>
            <HobbyUl>
              <HobbyLi key="0">
                <HobbyIcon>
                  <BsController />
                </HobbyIcon>
              </HobbyLi>
              <HobbyLi key="1">
                <HobbyIcon>
                  <MdLibraryMusic />
                </HobbyIcon>
              </HobbyLi>
              <HobbyLi key="2">
                <HobbyIcon>
                  <FaBasketballBall />
                </HobbyIcon>
              </HobbyLi>
            </HobbyUl>
          </ResumeItem>
        </ResumeRight>
      </Resume>
    </>
  );
}

export default About;
