import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  position: fixed;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.SECONDARY};
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.GRAY.MEDIUM};
    transform: rotate(-90deg);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;
