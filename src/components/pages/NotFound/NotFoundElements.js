import styled, { keyframes } from "styled-components";

const glitch = keyframes`
    0%{    
    transform: translateX(-0.05em);
    }
    50%{ 
    transform: translateX(0.05em);
    }
    100%{
    transform: translateX(-0.05em);
    }
`;

const glitch2 = keyframes`
    0%{    
        transform: translate(0.05em);
    }
    50%{ 
        transform: translate(-0.05em);
    }
    100%{transform: translate(0.05em);
    
    }
`;

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  text-align: center;
`;

export const Not404 = styled.h1`
  position: relative;
  font-size: 8rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const NotSpan = styled.span`
  position: absolute;
  top: 0;
  z-index: -1;
  color: #4b0459;
  &:first-of-type {
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 50%);
    transform: translate(0.025em, 0.0125em);
    animation: ${glitch} 200ms infinite;
  }

  &:last-of-type {
    clip-path: polygon(0 100%, 100% 100%, 100% 50%, 0 50%);
    transform: translate(-0.025em, -0.0125em);
    animation: ${glitch2} 200ms infinite;
  }
`;

export const NotText = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
