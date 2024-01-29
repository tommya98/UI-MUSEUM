import styled from "@emotion/styled";

interface IWrapperProps {
  bgColor?: string;
}

export const Wrapper = styled.div<IWrapperProps>`
  position: relative;
  width: 300px;
  height: 300px;

  overflow: hidden;
  background-color: ${({ bgColor, theme }) => bgColor || theme.GRAY.LIGHT};
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    scale: 1.3;
  }
`;
