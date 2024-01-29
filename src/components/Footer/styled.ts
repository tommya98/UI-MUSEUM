import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  height: 6%;
  border-top: 1px solid ${({ theme }) => theme.GRAY.MEDIUM};

  p,
  a {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.GRAY.DARK};
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
