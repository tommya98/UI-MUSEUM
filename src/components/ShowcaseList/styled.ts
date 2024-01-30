import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { TDirection } from ".";

interface IContentProps {
  isPaused: boolean;
  direction: TDirection;
  contentHeight: number;
  wrapperHeight: number;
}

const moveUp1 = keyframes`
0% {
  transform: translateY(0%);
}
50% {
  transform: translateY(-100%);
}
50.01% {
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

const moveDown1 = (contentHeight: number, wrapperHeight: number) => keyframes`
  0% {
    transform: translateY(${wrapperHeight - 2 * contentHeight}px);
  }
  100% {
    transform: translateY(${wrapperHeight}px);
  }
`;

const moveDown2 = (contentHeight: number, wrapperHeight: number) => keyframes`
  0% {
    transform: translateY(${wrapperHeight - 2 * contentHeight}px);
    opacity: 1;
  }
  50% {
    transform: translateY(${wrapperHeight - contentHeight}px);
    opacity: 1;
  }
  50.01% {
    transform: translateY(${wrapperHeight - 3 * contentHeight}px);
    opacity: 0;
  }
  51%{
    opacity: 1;
  }
  100% {
    transform: translateY(${wrapperHeight - 2 * contentHeight}px);
    opacity: 1;
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
  animation: ${(props) =>
      props.direction == "up"
        ? moveUp1
        : moveDown1(props.contentHeight, props.wrapperHeight)}
    30s linear infinite;
  animation-play-state: ${(props) => (props.isPaused ? "paused" : "running")};
`;

export const Copy = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  animation: ${(props) =>
      props.direction == "up"
        ? moveUp2
        : moveDown2(props.contentHeight, props.wrapperHeight)}
    30s linear infinite;
  animation-play-state: ${(props) => (props.isPaused ? "paused" : "running")};
`;
