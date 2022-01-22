import { useState } from "react";
import SideBar from "./Nav/SideBar";
import NavBar from "./Nav/NavBar";
import { Footer } from "./Footer";
import { Main } from "./LayoutElements";

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}
export default Layout;
