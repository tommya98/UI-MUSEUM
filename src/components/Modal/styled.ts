import styled from "@emotion/styled";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 80vh;
  z-index: 100;
  transform: translate(10vw, 10vh);
  background-color: ${({ theme }) => theme.GRAY.MEDIUM};
  display: flex;
  align-items: center;
  justify-content: center;
`;
