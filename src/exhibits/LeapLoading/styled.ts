import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const leap1 = keyframes`
  0% {
    transform: translateY(0);
    background-color: #e26ee5;
  }
  10% {
    transform: translate(20px, -20px);
  }
  20% {
    transform: translate(40px, 0);
    background-color: #7e30e1;
  }
  60% {
    transform: translate(40px, 0);
    background-color: #7e30e1;
  }
  80% {
    transform: translate(40px, 0);
    background-color: #7e30e1;
  }
`;

const leap2 = keyframes`
  0% {
    transform: translateY(0);
    background-color: #7e30e1;
  }
  20% {
    transform: translateY(0);
    background-color: #7e30e1;
  }
  30% {
    transform: translate(20px, -20px);
  }
  40% {
    transform: translate(40px, 0);
    background-color: #49108b;
  }
  60% {
    transform: translate(40px, 0);
    background-color: #49108b;
  }
  80% {
    transform: translate(40px, 0);
    background-color: #49108b;
  }
`;

const leap3 = keyframes`
  0% {
    transform: translateY(0);
    background-color: #49108b;
  }
  40% {
    transform: translateY(0);
    background-color: #49108b;
  }
  50% {
    transform: translate(20px, -20px);
  }
  60% {
    transform: translate(40px, 0);
  }
  80% {
    transform: translate(40px, 0);
    background-color: #7e30e1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  &:nth-child(1) {
    animation: ${leap1} 3s infinite;
    background-color: #e26ee5;
  }

  &:nth-child(2) {
    animation: ${leap2} 3s infinite;
    background-color: #7e30e1;
  }

  &:nth-child(3) {
    animation: ${leap3} 3s infinite;
    background-color: #49108b;
  }
`;
