import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface IComponentProps {
  scale: number;
}

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
  overflow: hidden;
`;

export const Component = styled.div<IComponentProps>`
  transform: scale(${({ scale }) => scale});
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

export const ScaleBtns = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const BtnIcon = styled.img`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid black;
  translate: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Scale = styled.div`
  font-size: 1rem;
  background-color: transparent;
  margin-right: 1rem;
`;
