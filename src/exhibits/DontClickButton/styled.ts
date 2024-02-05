import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface IButtonProps {
  isLoading: boolean;
}

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const warning = keyframes`
  0% {
    background-color: #ff7043;
  }
  50% {
    background-color: #4caf50;
  }
`;

export const Button = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background-color: #4caf50;
  box-shadow: ${({ isLoading }) =>
    isLoading
      ? "0 4px 0 #2e7d32, 0 4px 4px rgba(0, 0, 0, 0.2);"
      : "0 14px 0 #2e7d32, 0 20px 14px rgba(0, 0, 0, 0.2);"}
  color: white;
  font-size: 24px;
  font-weight: 700;
  transform: translateY(${({ isLoading }) => (isLoading ? 10 : 0)}px);
  transition: all 0.3s;
  cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
  animation: ${({ isLoading }) => (isLoading ? warning : "none")} 0.55s step-end
    infinite;
`;

export const Text = styled.span`
  color: white;
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid white;
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: ${spinner} 1s linear infinite;
`;
