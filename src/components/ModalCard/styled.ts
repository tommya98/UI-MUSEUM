import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate1 = keyframes`
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const rotate2 = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(-135deg);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: transparent;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  border-radius: 1px;
  background-color: transparent;
  cursor: pointer;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: black;
    transition: all 0.3s;
  }

  &::before {
    transform: rotate(45deg);
    animation-fill-mode: forwards;
  }

  &::after {
    transform: rotate(-45deg);
    animation-fill-mode: forwards;
  }

  &:hover {
    &::before {
      animation: ${rotate1} 0.3s;
    }
    &::after {
      animation: ${rotate2} 0.3s;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  height: 90%;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.GRAY.LIGHT};
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 35%;
  height: 70%;
  padding: 0 2rem 0 0;
  gap: 2rem;
  background-color: transparent;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  background-color: transparent;
`;

export const Date = styled.p`
  font-size: 1rem;
  background-color: transparent;
  align-self: flex-end;
`;

export const Description = styled.p`
  font-size: 1rem;
  background-color: transparent;
`;

export const Github = styled.img`
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
