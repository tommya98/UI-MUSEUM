import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface BellSvgProps {
  isRining: boolean;
}

const ring = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(-10deg); }
  20% { transform: rotate(10deg); }
  30% { transform: rotate(-20deg); }
  40% { transform: rotate(20deg); }
  50% { transform: rotate(-30deg); }
  60% { transform: rotate(30deg); }
  70% { transform: rotate(-15deg); }
  80% { transform: rotate(15deg); }
  90% { transform: rotate(0); }	
  100% { transform: rotate(0); }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 40px;
`;

export const Bell = styled.div`
  position: relative;
  margin: 0 auto;

  &:hover div {
    top: 0;
    right: -10px;
    width: 50px;
    height: 50px;
    color: white;
  }
`;

export const BellCount = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 15px;
  right: 10px;
  background-color: red;
  color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.5s;
`;

export const BellSvg = styled.svg<BellSvgProps>`
  animation: ${(props) => (props.isRining ? ring : "none")} 2s infinite;
`;

export const Button = styled.button`
  top: 0;
  border-radius: 8px;
  border: none;
  background-color: #f6f6f6;
  color: black;
  padding: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
