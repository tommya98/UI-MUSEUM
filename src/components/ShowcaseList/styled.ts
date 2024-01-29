import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface IContentProps {
  isPaused: boolean;
}

const moveUp1 = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(-100%);
}
50.1% {
  transform: translateY(100%);
}
100% {
  transform: translateY(0%);
}
`;

const moveUp2 = keyframes`
  0% {
      transform: translateY(0%);
  }
  100% {
      transform: translateY(-200%);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Original = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  animation: ${moveUp1} 30s linear infinite;
  animation-play-state: ${(props) => (props.isPaused ? "paused" : "running")};
`;

export const Copy = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  animation: ${moveUp2} 30s linear infinite;
  animation-play-state: ${(props) => (props.isPaused ? "paused" : "running")};
`;
