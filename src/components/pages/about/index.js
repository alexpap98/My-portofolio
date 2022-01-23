import { FaBasketballBall, FaHome } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
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
} from "./AboutElements";

function About() {
  const today = new Date();
  const birthDate = new Date("1998-11-12");
  var age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const contact = [
    { desc: "Thessalonoliki", icon: <FaHome /> },
    // { desc: "-", icon: <FaMobileAlt /> },
    {
      desc: (
        <a
          href="mailto:alpa09898@gmail.com"
          style={{ textDecoration: "none", color: "white" }}
        >
          alpa09898@gmail.com
        </a>
      ),
      icon: <HiMail />,
    },
  ];

  const skills = [
    { name: "Java", prog: "80%" },
    { name: "JavaScript", prog: "80%" },
    { name: "MySql", prog: "65%" },
    { name: "C++/C", prog: "50%" },
    { name: "PHP", prog: "50%" },
  ];

  const edu = [
    {
      date: "2016 - Until Now",
      title: "Internationl Hellenic University",
      desc: "Computer Science and Computer Engineering",
    },
    {
      date: "2013 - 2016",
      title: "Vocational Senior High School of Igoumenitsa",
      desc: "Informatics Technology",
    },
  ];

  const work = [
    {
      date: "2016 - 2021",
      title: "Delivery/Service",
      desc: "Seasonal work",
    },
  ];
  return (
    <>
      <Resume>
        <ResumeLeft>
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
          <ResumeItem>
            <Title>
              <Name>About</Name>
            </Title>
            <p style={{ paddingInline: 20 }}>
              I am {age} years old. I am an undergraduate student in faculty of
              computer engineering and electronic systems on the International
              Hellenic University.
            </p>
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
