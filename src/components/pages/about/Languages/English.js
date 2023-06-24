import { FaHome } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const today = new Date();
const birthDate = new Date("1998-11-12");
var age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}


export const En = {
  name: "Alexandros Papadopoulos",
  aboutme: " I am " + age + " years old. I am an undergraduate student in faculty of Information and Electronic Engineering on the International Hellenic University.",
  desc: "Thessalonoliki",
  contact: [
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
  ],
  email: (
    <a
      href="mailto:alpa09898@gmail.com"
      style={{ textDecoration: "none", color: "white" }}
    >
      alpa09898@gmail.com
    </a>
  ),
  icon: <HiMail />,
  skills: [
    { name: "Java", prog: "80%" },
    { name: "JavaScript", prog: "80%" },
    { name: "MySql", prog: "65%" },
    { name: "C++/C", prog: "50%" },
    { name: "PHP", prog: "50%" },
  ],
  edu: [
    {
      date: "2016 - Until Now",
      title: "International Hellenic University",
      desc: "Degree of Information and Electronic Engineering",
    },
    {
      date: "2013 - 2016",
      title: "Vocational Senior High School of Igoumenitsa",
      desc: "Degree of Software application technician",
    },
  ],
  work: [
    {
      date: "Nov 2022 to Present",
      title: "Softoware Devolper",
      desc: "Entanet – Simply Talk , Internship",
    },
    {
      date: "May 2022 to Oct 2022",
      title: "Softoware Devolper",
      desc: "Entanet – Simply Talk , Internship",
    },
    {
      date: "2016 - 2021",
      title: "Delivery/Service",
      desc: "Seasonal work",
    },
  ]
}
