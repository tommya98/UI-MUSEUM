import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: relative;
`;

export const Orbit = styled.div`
  position: absolute;
  border: 5px solid white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:nth-of-type(1) {
    width: 200px;
    height: 200px;
  }

  &:nth-of-type(2) {
    width: 300px;
    height: 300px;
  }

  &:nth-of-type(3) {
    width: 400px;
    height: 400px;
  }
`;

export const Center = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Atom = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: -5px;
`;
