import styled, { keyframes } from "styled-components";

const PopIn = keyframes`
  0%{opacity:0;
  position: relative;
  top:-1000px;
  };
  100%{opacity: 1;
  top:0;
  position: relative;
  };
`;

export const Project = styled.li`
  margin: 1rem 0;
  list-style: none;
  animation: ${PopIn} 400ms cubic-bezier(.15,.64,.51,1.29);

`;

export const Card = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const ProjectTitle = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  color: #2c292b;
`;

export const ProjectDesc = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ProjectUrl = styled.a`
  font: inherit;
  cursor: pointer;
  color: #4b0459;
  border: 1px solid #4b0459;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    background-color: #4b0459;
    color: #fff;
    transform: scale(1.2);
  }
`;
