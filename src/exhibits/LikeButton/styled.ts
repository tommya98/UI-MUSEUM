import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface IButtonProps {
  isClicked: boolean;
}

export const Button = styled.button<IButtonProps>`
  background-color: transparent;

  svg {
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: relative;
    animation: ${({ isClicked }) => (isClicked ? bounce : "none")};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border: 1px dotted red;
    border-radius: 50%;
    opacity: 0;
    transition: all 1s;
    animation: ${({ isClicked }) => (isClicked ? wave1 : "none")};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 5px;
    border: 1px dotted red;
    border-radius: 50%;
    opacity: 0;
    transition: all 1s;
    animation: ${({ isClicked }) => (isClicked ? wave2 : "none")};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
  }
`;

const bounce = keyframes`
  0% { 
    transform: scale(1,1) translateY(0); 
  }
  10% {
    transform: scale(1.05,1.05) translateY(0);
  }
  40% {
    transform: scale(1.1,1.1) translateY(-100px);
  }
  100% {
    transform: scale(1.2,1.2) translateY(0);
  }
`;

const wave1 = keyframes`
  0% {
    width: 0px;
    height: 0px;
    opacity: 1;
  }
  100% {
    width: 120px;
    height: 100px;
    opacity: 1;
  }
`;

const wave2 = keyframes`
  0% {
    width: 10px;
    height: 5px;
    opacity: 1;
  }
  100% {
    width: 200px;
    height: 160px;
    opacity: 1;
  }
`;
