import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { TModalStatus } from ".";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  modalStatus: TModalStatus;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Background = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ modalStatus }) =>
    modalStatus === "CLOSED" ? "none" : "block"};
  animation: ${({ modalStatus }) => {
      switch (modalStatus) {
        case "OPENING":
          return fadeIn;
        case "CLOSING":
          return fadeOut;
      }
    }}
    0.5s;
`;

export const Container = styled.section<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 80vh;
  border-radius: 30px;
  z-index: 100;
  transform: translate(10vw, 10vh);
  background-color: ${({ theme }) => theme.GRAY.MEDIUM};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ modalStatus }) => {
      switch (modalStatus) {
        case "OPENING":
          return fadeIn;
        case "CLOSING":
          return fadeOut;
      }
    }}
    0.5s;
`;
