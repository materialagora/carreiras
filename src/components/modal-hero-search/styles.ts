import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  height: auto;
  border-radius: 7px;
  margin: 4rem 5vw;

  a {
    text-decoration: none;
  }

  strong {
    font-size: 20px;
    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `}
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.mainBlack};
  `}
`;

export const Item = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease-in;

  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.white};
  `}

  strong {
    font-size: 18px;
    transition: all 0.4s ease-in;

    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `};
  }

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.secondary.red};
    `}

    strong {
      ${({ theme }) => css`
        color: ${theme.colors.neutral.white};
      `};
    }
  }
`;
