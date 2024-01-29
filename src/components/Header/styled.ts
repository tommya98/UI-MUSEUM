import styled from "@emotion/styled";

export const Wrapper = styled.header`
  height: 100px;
  margin: 24px 24px 0px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY.MEDIUM};
`;

export const Header = styled.h1`
  font-size: 60px;
  font-weight: 600;
  color: ${({ theme }) => theme.PRIMARY};

  a {
    cursor: pointer;
  }
`;
