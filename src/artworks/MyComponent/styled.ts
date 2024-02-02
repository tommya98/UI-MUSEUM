import styled from "@emotion/styled";

import { IMyComponentProps } from ".";

export const Button = styled.button<IMyComponentProps>`
  background-color: ${(props) => (props.bg ? props.bg : "#4caf50")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
