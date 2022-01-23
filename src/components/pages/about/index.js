import { FaBasketballBall } from "react-icons/fa";
import { BsController } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
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
  SkillProg,
  SkillPer,
  SkillSpan,
  ResumeRight,
  RightLi,
  DateDiv,
  Info,
  HobbyLi,
  HobbyUl,
  HobbyIcon,
  ChangeLanguage,
  ChangeLanguage1,
} from "./AboutElements";
import { useState } from "react";
import * as En from "./Languages/English.js";
import * as Gr from "./Languages/Greek.js";
import { GR, GB } from "country-flag-icons/react/3x2";

function About() {
  const [lang, setLanguage] = useState(true);

  function ChangeLang() {
    setLanguage(!lang);
  }

  var contact;
  var skills;
  var edu;
  var work;
  var aboutMe;
  var flag;

  if (lang) {
    contact = En.contact;
    skills = En.skills;
    edu = En.edu;
    work = En.work;
    aboutMe = En.AboutMe;
    flag = <GB />;
  } else {
    contact = Gr.contact;
    skills = Gr.skills;
    edu = Gr.edu;
    work = Gr.work;
    aboutMe = Gr.AboutMe;
    flag = <GR />;
  }

  return (
    <>
      <Resume>
        <ResumeLeft>
          <ChangeLanguage1 onClick={ChangeLang}>{flag}</ChangeLanguage1>
          <ResumeContent>
            <ResumeItem>
              <Title>
                <Name>Alexandros Papadopoulos</Name>
                <Desc>I wish i was a Developer</Desc>
              </Title>
              <ContactUl>
                {contact.map((c, index) => {
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
              <ContactUl>
                {skills.map((s, index) => {
                  return (
                    <LeftLi key={index}>
                      <SkillName>{s.name}</SkillName>
                      <SkillProg>
                        <SkillSpan style={{ width: s.prog }} />
                      </SkillProg>
                      <SkillPer>{s.prog}</SkillPer>
                    </LeftLi>
                  );
                })}
              </ContactUl>
            </ResumeSkills>
          </ResumeContent>
        </ResumeLeft>

        <ResumeRight>
          <ChangeLanguage onClick={ChangeLang}>{flag}</ChangeLanguage>
          <ResumeItem>
            <Title>
              <Name>About</Name>
            </Title>
            <p style={{ paddingInline: 20 }}>{aboutMe}</p>
          </ResumeItem>
          <ResumeItem>
            <Title>
              <Name>Education</Name>
            </Title>
            <ul>
              {edu.map((e, index) => {
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
              {work.map((w, index) => {
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
