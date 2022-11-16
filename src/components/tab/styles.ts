import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    color: ${theme.colors.secondary.red};
    border-bottom: 3px solid ${theme.colors.secondary.red};
  `}
`;

export const HeaderButton = styled.button<{ active?: boolean }>`
  width: 100%;
  height: 50px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  font-weight: bold;
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${theme.colors.secondary.red};
  `}
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `
      background-color: ${theme.colors.secondary.red};
      color: ${theme.colors.neutral.white};
  `}
`;

export const Body = styled.div`
  width: 100%;
  padding: 30px 1px;
`;
