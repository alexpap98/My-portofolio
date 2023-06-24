import { FaHome } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const today = new Date();
const birthDate = new Date("1998-11-12");
var age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}


export const Gr = {
  name: "Αλεξανδρος Παπαδοπουλος",
  aboutme: "Είμαι " + age + " χρονών. Είμαι προπτυχιακός φοιτητής στο τμήμα Μηχανικών Υπολογιστών και Ηλεκτρονικών Συστημάτων στο Διεθνές Πανεπιστήμιο της Ελλάδος.",
  contact: [
    { desc: "Θεσσαλονίκη", icon: <FaHome /> },
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
  desc: "Thessalonoliki",
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
    { name: "Java", prog: "60%" },
    { name: "JavaScript", prog: "85%" },
    { name: "MySql", prog: "65%" },
    { name: "C++/C", prog: "50%" },
    { name: "PHP", prog: "50%" },
  ],
  edu: [
    {
      date: "2016 - Μέχρι σήμερα",
      title: "Διεθνές Πανεπιστήμιο της Ελλάδος",
      desc: "Tμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων",
    },
    {
      date: "2013 - 2016",
      title: "ΕΠΑΛ Ηγουμενίτσας",
      desc: "Tμήμα Πληροφορικής",
    },
  ],
  work: [
    {
      date: "Nov 2022 to Present",
      title: "Softoware Devolper",
      desc: "At Entanet – Simply Talk , Internship",
    },
    {
      date: "May 2022 to Oct 2022",
      title: "Softoware Devolper",
      desc: "At Entanet – Simply Talk , Internship",
    },
    {
      date: "2016 - 2021",
      title: "Delivery/Service",
      desc: "Seasonal work",
    },
  ]
}