import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarMeu,
  SidebarLink,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMeu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/projects">Projects</SidebarLink>
        <SidebarLink to="/about">About</SidebarLink>
      </SidebarMeu>
    </SideBarContainer>
  );
};

export default SideBar;
