import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 5vw;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const CarHeroGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  cursor: pointer;

  strong {
    ${({ theme }) => css`
      color: ${theme.colors.neutral.white};
    `}
  }

  h1 {
    ${({ theme }) => css`
      color: ${theme.colors.secondary.red};
    `};
  }
`;

export const CarHeroGroupWrapper = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 5px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary.darkBlue};
  `}
`;

export const CarHeroGroupFooter = styled.div`
  margin-top: 10px;
  align-self: flex-end;
  display: flex;
  gap: 10px;

  span {
    ${({ theme }) => css`
      color: ${theme.colors.neutral.white};
    `}
  }
`;
