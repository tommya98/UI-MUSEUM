import styled from "@emotion/styled";

export const Wrapper = styled.header`
  height: 14%;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY.MEDIUM};
`;

export const Header = styled.h1`
  font-size: 60px;
  font-weight: 600;
  padding-top: 24px;
  color: ${({ theme }) => theme.PRIMARY};

  a {
    cursor: pointer;
  }
`;
