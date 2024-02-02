import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: transparent;
`;

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
  display: flex;
  width: 45%;
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
  width: 45%;
  height: 70%;
  padding: 0 3rem;
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
